// Cloudflare Worker: stores 요리잼뱅이 recipe HTML files in the R2 "cook" bucket,
// organized by menu mode (key prefix). Used by the GitHub Pages app.
//
//   PUT    /?key=<mode>/<file>.html   body=HTML        -> save
//   GET    /?list=<mode>                                -> list keys under a mode
//   GET    /?list=                                      -> list everything
//   GET    /?key=<mode>/<file>.html                     -> fetch the HTML (renders)
//   DELETE /?key=<mode>/<file>.html                     -> delete

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...CORS },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

    const url = new URL(request.url);
    const key = url.searchParams.get("key");
    const list = url.searchParams.get("list");

    try {
      if (request.method === "PUT") {
        if (!key) return json({ ok: false, error: "missing key" }, 400);
        const body = await request.text();
        await env.COOK.put(key, body, {
          httpMetadata: { contentType: "text/html; charset=utf-8" },
        });
        return json({ ok: true, key });
      }

      if (request.method === "DELETE") {
        if (!key) return json({ ok: false, error: "missing key" }, 400);
        await env.COOK.delete(key);
        return json({ ok: true, key });
      }

      if (request.method === "GET") {
        if (list !== null) {
          const opts = list ? { prefix: list.endsWith("/") ? list : list + "/" } : {};
          const out = await env.COOK.list({ ...opts, limit: 1000 });
          return json({
            ok: true,
            objects: out.objects.map((o) => ({ key: o.key, size: o.size, uploaded: o.uploaded })),
          });
        }
        if (key) {
          const obj = await env.COOK.get(key);
          if (!obj) return json({ ok: false, error: "not found" }, 404);
          const headers = new Headers(CORS);
          headers.set("Content-Type", obj.httpMetadata?.contentType || "text/html; charset=utf-8");
          return new Response(obj.body, { headers });
        }
        return json({ ok: true, service: "cook-r2" });
      }

      return json({ ok: false, error: "method not allowed" }, 405);
    } catch (e) {
      return json({ ok: false, error: String(e && e.message || e) }, 500);
    }
  },
};
