export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const email = String(body.email || "").trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ ok: false, error: "invalid_email" }, 400);
    }

    const user = {
      email,
      app: "yorijambaengi",
      plan: "free",
      createdAt: new Date().toISOString(),
    };

    if (context.env.YORI_USERS) {
      await context.env.YORI_USERS.put(`user:${email}`, JSON.stringify(user));
      return json({ ok: true, provider: "cloudflare-kv", user: { email, plan: user.plan } });
    }

    return json({ ok: true, provider: "cloudflare-ready", user: { email, plan: user.plan } });
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders() });
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(),
    },
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
