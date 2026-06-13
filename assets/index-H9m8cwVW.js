(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`yorijambaengi-state-v1`,t=`yorijambaengi-free-popup-date`,n={login:`Login`,signup:`가입하기`,logout:`로그아웃`,lang:`EN`,back:`Back`,homeSmall:`홈`,homeBig:`요리초보 추천`,premiumBig:`프리미엄 요리실`,premiumNav:`프리미엄`,heroTitle:`있는 재료로 쉬운 요리`,heroCopy:`냉장고, 냉동고, 양념, 실온 먹거리를 보고 몇 인분인지에 맞춰 쉬운 요리를 추천해요.`,trial:`무료체험`,trialCopy:`가입 전 3일 동안 사용 가능`,signupRequired:`가입 필요`,joinNow:`무료 가입`,storageNow:`현재 내 보관함`,cookStart:`요리 본격 시작`,servings:`몇 인분`,makeRecipe:`추천 받기`,pantrySmall:`보관함`,fridgeBig:`신선고`,freezerBig:`얼음창고`,sauceBig:`맛보관소`,roomBig:`실온바구니`,addItem:`재료 추가`,name:`이름`,amount:`수량`,unit:`단위`,photo:`카메라/사진`,save:`저장`,category:`카테고리`,memo:`메모`,detail:`상세`,use:`사용`,delete:`삭제`,empty:`아직 저장된 재료가 없어요.`,seasonTitle:`양념보관창고`,allSeasonings:`전체 양념`,recipeSmall:`요리순서`,shopping:`장보기 재료`,steps:`손가락으로 내려 보며 순서대로 따라하세요.`,copyPrompt:`최종 이미지 영어 프롬프트 복사`,copied:`복사 완료`,authTitle:`요리로 신규 가입`,authCopy:`무료 가입에는 개인 정보로 이메일만 저장해요. 비밀번호는 화면 확인용이며 앱에 저장하지 않습니다.`,closeToday:`오늘 닫기`,lockedTitle:`4일째부터는 가입 후 사용 가능`,lockedCopy:`홈 화면은 볼 수 있지만 보관함, 요리 추천, 상세 기능은 무료 가입 후 열려요.`,cloudflareNote:`Cloudflare Pages 유저 생성 연동 준비 화면`,searchWeb:`무료 웹 검색`,joinedCopy:`가입 완료. 모든 기능 사용 가능`,savedCount:`개 저장`,exampleSauce:`예: 간장`,exampleIngredient:`예: 양파`,defaultUnitSauce:`스푼`,defaultUnitItem:`개`,defaultSauceCategory:`기본 간`,sauceMemoPlaceholder:`자동 설명이 없으면 직접 적어도 좋아요.`,itemMemoPlaceholder:`보관 위치나 유통기한 메모`,defaultCategory:`기본`,all:`전체`,noShopping:`추가 장보기 없이 가능해요.`,promptLabel:`ChatGPT 이미지 생성용 영어 프롬프트`,fabTitle:`요리 시작`,bottomCold:`냉장/냉동`,bottomSauce:`양념`,bottomRoom:`실온`,email:`이메일`,password:`비밀번호`,confirm:`확인`,searchHint:`검색 힌트: 무료 웹 검색에서 “{name} 요리 활용법”으로 찾아 상세 설명과 팁을 보강할 수 있어요.`,recipeFallback:`오늘의 요리`,servingsSuffix:`인분`,basicIngredients:`기본 재료`,storageIngredients:`보관 재료`,recipeSummary:`{items}를 중심으로 만든 초보용 추천이에요. 없는 재료는 장보기 목록에 따로 뺐어요.`,stepPrepTitle:`재료 모으기`,stepPrepText:`{items}를 꺼내고 {servings}인분 기준으로 먹기 좋은 크기로 준비해요.`,stepHeatTitle:`기본 익히기`,stepHeatText:`팬을 중불로 달군 뒤 단단한 재료부터 넣고, 수분 많은 재료는 나중에 넣어 식감이 무너지지 않게 해요.`,stepSeasonTitle:`양념 맞추기`,stepSeasonText:`간장, 고추장, 소금 같은 양념은 한 번에 많이 넣지 말고 반씩 넣어 맛을 보며 조절해요.`,stepPlateTitle:`담아내기`,stepPlateText:`마지막에 참기름이나 후추처럼 향이 나는 재료를 조금 넣고 따뜻할 때 그릇에 담아요.`},r={login:`Login`,signup:`Join`,logout:`Logout`,lang:`KO`,back:`Back`,homeSmall:`Home`,homeBig:`Easy Cook`,premiumBig:`Premium Kitchen`,premiumNav:`Premium`,heroTitle:`Easy meals from your kitchen`,heroCopy:`The app checks fridge, freezer, seasonings, and room-temp foods to suggest easy recipes by serving size.`,trial:`Trial`,trialCopy:`3 days before sign-up is required`,signupRequired:`Sign-up required`,joinNow:`Join free`,storageNow:`My storage`,cookStart:`Start cooking`,servings:`Servings`,makeRecipe:`Recommend`,pantrySmall:`Storage`,fridgeBig:`Fresh Box`,freezerBig:`Ice Vault`,sauceBig:`Flavor Shelf`,roomBig:`Room Basket`,addItem:`Add item`,name:`Name`,amount:`Amount`,unit:`Unit`,photo:`Camera/photo`,save:`Save`,category:`Category`,memo:`Memo`,detail:`Detail`,use:`Use`,delete:`Delete`,empty:`Nothing saved yet.`,seasonTitle:`Seasoning Storage`,allSeasonings:`All seasonings`,recipeSmall:`Recipe`,shopping:`Shopping list`,steps:`Drag down with one finger and follow the steps.`,copyPrompt:`Copy final image prompt`,copied:`Copied`,authTitle:`Create cooking account`,authCopy:`Free sign-up stores only your email as personal information. The password is checked on screen and is not saved in this app.`,closeToday:`Close today`,lockedTitle:`Sign-up required from day 4`,lockedCopy:`Home remains visible, but storage, recipe, and detail features open after free sign-up.`,cloudflareNote:`Cloudflare Pages user creation hook screen`,searchWeb:`Free web search`,joinedCopy:`Joined. All features are available.`,savedCount:`saved`,exampleSauce:`e.g. soy sauce`,exampleIngredient:`e.g. onion`,defaultUnitSauce:`tbsp`,defaultUnitItem:`pcs`,defaultSauceCategory:`Basic seasoning`,sauceMemoPlaceholder:`If auto details are missing, add your own note.`,itemMemoPlaceholder:`Storage spot or expiry note`,defaultCategory:`Basic`,all:`All`,noShopping:`No extra shopping needed.`,promptLabel:`English prompt for ChatGPT image generation`,fabTitle:`Start cooking`,bottomCold:`Cold`,bottomSauce:`Seasoning`,bottomRoom:`Room`,email:`Email`,password:`Password`,confirm:`OK`,searchHint:`Search hint: use free web search for "{name} cooking uses" to improve the saved details and tips.`,recipeFallback:`Today's meal`,servingsSuffix:`servings`,basicIngredients:`basic ingredients`,storageIngredients:`stored ingredients`,recipeSummary:`A beginner-friendly recipe built around {items}. Missing ingredients are separated into the shopping list.`,stepPrepTitle:`Gather ingredients`,stepPrepText:`Take out {items} and prep them into easy-to-cook pieces for {servings} servings.`,stepHeatTitle:`Cook the base`,stepHeatText:`Heat the pan over medium heat, add firm ingredients first, and add watery ingredients later so the texture stays intact.`,stepSeasonTitle:`Adjust seasoning`,stepSeasonText:`Add soy sauce, chili paste, or salt in small portions, taste, then adjust gradually.`,stepPlateTitle:`Plate and finish`,stepPlateText:`Add fragrant ingredients like sesame oil or pepper at the end, then plate while warm.`},i={fridge:{ko:`신선고`,en:`Fresh Box`,emoji:`🥬`,descKo:`냉장 재료`,descEn:`Chilled ingredients`},freezer:{ko:`얼음창고`,en:`Ice Vault`,emoji:`🧊`,descKo:`냉동 재료`,descEn:`Frozen ingredients`},sauce:{ko:`맛보관소`,en:`Flavor Shelf`,emoji:`🧂`,descKo:`양념과 소스`,descEn:`Seasonings and sauces`},room:{ko:`실온바구니`,en:`Room Basket`,emoji:`🍞`,descKo:`실온 먹거리`,descEn:`Room-temp foods`}},a=[[`fridgeClean`,`냉장고 털기`,`Clear-out meal`,`🥘`],[`snack`,`간식`,`Snack`,`🍙`],[`dessert`,`디저트`,`Dessert`,`🍮`],[`bread`,`빵만들기`,`Bread`,`🥖`],[`party`,`파티`,`Party`,`🎉`],[`korean`,`한식`,`Korean`,`🍚`],[`japanese`,`일식`,`Japanese`,`🍱`],[`chinese`,`중식`,`Chinese`,`🥡`],[`meat`,`고기굽기`,`Grill meat`,`🥩`],[`quick`,`초간단 한끼`,`Quick meal`,`⚡`]],o={basic:{ko:`기본 간`,en:`Basic seasoning`},sauce:{ko:`소스`,en:`Sauces`},oil:{ko:`기름/향`,en:`Oils and aroma`},spicy:{ko:`매운맛`,en:`Spicy`},sweet:{ko:`단맛`,en:`Sweet`},herb:{ko:`향신료`,en:`Spices and herbs`}},s={간장:{category:`basic`,usageKo:`볶음, 조림, 덮밥, 국물 간에 좋아요.`,usageEn:`Good for stir-fries, braises, rice bowls, and soup seasoning.`,tipKo:`1인분 기준 1작은술부터 넣고 마지막에 간을 맞추세요.`,tipEn:`Start with 1 teaspoon per serving, then adjust at the end.`},고추장:{category:`spicy`,usageKo:`비빔, 볶음, 찌개, 양념구이에 잘 맞아요.`,usageEn:`Works well in mixed rice, stir-fries, stews, and spicy grilled marinades.`,tipKo:`단맛이 있어 설탕은 적게 넣고 물이나 육수로 풀면 덜 뭉쳐요.`,tipEn:`It is already a little sweet, so reduce sugar and loosen it with water or stock.`},된장:{category:`basic`,usageKo:`국, 찌개, 나물 무침, 고기 밑간에 좋아요.`,usageEn:`Good for soups, stews, seasoned greens, and meat marinades.`,tipKo:`오래 끓이면 텁텁할 수 있어 중후반에 풀어 넣으세요.`,tipEn:`Add it in the middle or later so the flavor stays clean.`},소금:{category:`basic`,usageKo:`모든 기본 간, 데치기, 굽기 전 밑간에 사용해요.`,usageEn:`Use for basic seasoning, blanching water, and pre-seasoning before grilling.`,tipKo:`한 번에 많이 넣지 말고 두 꼬집씩 나눠 넣으세요.`,tipEn:`Add two pinches at a time instead of salting heavily at once.`},설탕:{category:`sweet`,usageKo:`볶음, 조림, 양념장, 디저트에 단맛과 윤기를 줘요.`,usageEn:`Adds sweetness and gloss to stir-fries, braises, sauces, and desserts.`,tipKo:`간장 요리에는 설탕을 먼저 넣으면 재료 속까지 맛이 들어요.`,tipEn:`For soy-based dishes, add sugar early so the flavor soaks in.`},참기름:{category:`oil`,usageKo:`나물, 비빔밥, 완성 직전 향내기에 좋아요.`,usageEn:`Best for seasoned greens, bibimbap, and finishing aroma.`,tipKo:`센 불에서 오래 가열하지 말고 마지막에 둘러 향을 살리세요.`,tipEn:`Do not cook it long over high heat; drizzle at the end for aroma.`},후추:{category:`herb`,usageKo:`고기, 달걀, 크림, 볶음요리의 잡내를 줄여요.`,usageEn:`Helps balance meat, eggs, creamy dishes, and stir-fries.`,tipKo:`완성 직전 갈아 넣으면 향이 더 선명해요.`,tipEn:`Grind it right before serving for a clearer aroma.`},식초:{category:`sauce`,usageKo:`초무침, 냉채, 소스, 느끼한 맛 잡기에 좋아요.`,usageEn:`Great for sour salads, chilled dishes, sauces, and cutting richness.`,tipKo:`가열하면 향이 날아가니 불을 끈 뒤 넣으세요.`,tipEn:`Add after turning off the heat so the acidity stays bright.`}},c={달걀:`egg`,대파:`green onion`,두부:`tofu`,"냉동 만두":`frozen dumplings`,간장:`soy sauce`,고추장:`gochujang`,참기름:`sesame oil`,식빵:`bread slices`,라면:`instant noodles`},l={개:`pcs`,단:`bunch`,모:`block`,스푼:`tbsp`,장:`slices`,봉:`packs`},u={단백질:`Protein`,채소:`Vegetable`,간편식:`Convenience food`,"기본 간":`Basic seasoning`,매운맛:`Spicy`,"기름/향":`Oils and aroma`,빵:`Bread`,면:`Noodles`,기본:`Basic`},d=ee(),f=`home`,p=`fridge`,m=`all`,h=`fridgeClean`,g=1,_=null,v=null;ye(),xe();function y(){return{createdAt:new Date().toISOString(),lang:`ko`,user:null,inventory:b()}}function b(){return{fridge:[x(`달걀`,6,`개`,`단백질`,``,null),x(`대파`,1,`단`,`채소`,``,null),x(`두부`,1,`모`,`단백질`,``,null)],freezer:[x(`냉동 만두`,12,`개`,`간편식`,``,null)],sauce:[x(`간장`,7,`스푼`,`기본 간`,Z(`간장`),null),x(`고추장`,3,`스푼`,`매운맛`,Z(`고추장`),null),x(`참기름`,2,`스푼`,`기름/향`,Z(`참기름`),null)],room:[x(`식빵`,4,`장`,`빵`,``,null),x(`라면`,2,`봉`,`면`,``,null)]}}function x(e,t,n,r,i,a){return{id:crypto.randomUUID(),name:e,amount:t,unit:n,category:r,memo:i,photo:a,createdAt:new Date().toISOString()}}function ee(){try{let t=localStorage.getItem(e);return t?{...y(),...JSON.parse(t)}:y()}catch{return y()}}function S(){localStorage.setItem(e,JSON.stringify(d))}function C(){try{return d?.lang||`ko`}catch{return`ko`}}function w(e){return(C()===`ko`?n:r)[e]||e}function T(e,t){return Object.entries(t).reduce((e,[t,n])=>e.replaceAll(`{${t}}`,n),e)}function E(e){return C()===`ko`?e:c[e]||e}function D(e){return C()===`ko`?e:l[e]||e}function O(e){return e?o[e]?.[C()]||(C()===`ko`?e:u[e]||e):w(`defaultCategory`)}function k(e,t){return t===`sauce`&&$(e.name)?Z(e.name):e.memo}function A(){if(d.user)return!1;let e=new Date(d.createdAt).getTime();return Date.now()-e>=1440*60*1e3*3}function te(){let e=new Date(d.createdAt).getTime(),t=Math.floor((Date.now()-e)/(1440*60*1e3))+1;return Math.max(1,Math.min(t,4))}function j(){return!!d.user||!A()}function M(){if(d.user||A())return;let e=new Date().toISOString().slice(0,10);localStorage.getItem(t)!==e&&(v=`signup`)}function N(){let e=document.querySelector(`#app`);e.innerHTML=`
    <div class="phone-shell">
      ${P()}
      ${F()}
      <main class="content">${re()}</main>
      ${K()}
      ${q()}
      ${Y()}
    </div>
  `,se()}function P(){let e=d.user?d.user.email.split(`@`)[0]:w(`login`),t=d.user?w(`logout`):w(`signup`);return`
    <header class="top-auth">
      <button class="ghost-pill auth-left" data-action="login">${e}</button>
      <button class="${d.user?`ghost-pill`:`dark-pill`} auth-center" data-action="${d.user?`logout`:`signup`}">${t}</button>
      <button class="icon-pill auth-right" data-action="toggle-lang">${w(`lang`)}</button>
    </header>
  `}function F(){let e=ne();return`
    <section class="page-panel">
      ${f===`home`?``:`<div class="panel-row">
        <div class="panel-center">
          <button class="back-button" data-action="back">${w(`back`)}</button>
          <span class="panel-dot">·</span>
          <div class="mini-title">${e.small}</div>
        </div>
      </div>`}
      <h1 class="big-title">${e.big}</h1>
    </section>
  `}function ne(){return f===`home`?{small:d.user?`Premium`:w(`homeSmall`),big:d.user?w(`premiumBig`):w(`homeBig`)}:f===`cold`?{small:w(`pantrySmall`),big:w(p===`freezer`?`freezerBig`:`fridgeBig`)}:f===`sauce`?{small:w(`seasonTitle`),big:w(`sauceBig`)}:f===`room`?{small:w(`pantrySmall`),big:w(`roomBig`)}:f===`recipe`?{small:w(`recipeSmall`),big:_?.title||w(`cookStart`)}:{small:w(`homeSmall`),big:w(`homeBig`)}}function re(){return!j()&&f!==`home`?G():f===`home`?I():f===`cold`?L(p):f===`sauce`?V():f===`room`?L(`room`):f===`recipe`?H():I()}function I(){let e=!j();return`
    <section class="hero-band">
      <h2 class="hero-title">${w(`heroTitle`)}</h2>
      <p>${w(`heroCopy`)}</p>
    </section>
    <section class="trial-strip">
      <div>
        <strong>${d.user?`Premium`:e?w(`signupRequired`):`${w(`trial`)} ${te()}/3`}</strong>
        <span>${d.user?w(`joinedCopy`):w(`trialCopy`)}</span>
      </div>
      <button class="pill" data-action="signup">${d.user?`OK`:w(`joinNow`)}</button>
    </section>
    ${e?G():``}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${w(`storageNow`)}</h2>
      </div>
      <div class="grid-2">
        ${Object.entries(i).map(([e,t])=>ie(e,t)).join(``)}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${w(`cookStart`)}</h2>
        <label class="field" style="width: 96px">
          <span>${w(`servings`)}</span>
          <input type="number" min="1" max="12" value="${g}" data-input="servings" />
        </label>
      </div>
      <div class="cook-grid">
        ${a.map(([e,t,n,r])=>`
              <button class="cook-card ${h===e?`active`:``}" data-cook="${e}">
                <span class="cook-emoji">${r}</span>
                <strong>${d.lang===`ko`?t:n}</strong>
              </button>
            `).join(``)}
      </div>
      <div style="margin-top: 12px">
        <button class="pill" style="width: 100%; min-height: 46px" data-action="make-recipe">${w(`makeRecipe`)}</button>
      </div>
    </section>
  `}function ie(e,t){let n=d.inventory[e].length,r=d.lang===`ko`?t.ko:t.en,i=d.lang===`ko`?t.descKo:t.descEn;return`
    <button class="storage-card" data-storage-jump="${e}">
      <span class="storage-emoji">${t.emoji}</span>
      <strong>${r}</strong>
      <span>${i} · ${n} ${w(`savedCount`)}</span>
    </button>
  `}function L(e){return`
    ${e===`fridge`||e===`freezer`?R():``}
    ${z(e)}
    <section class="section">
      <div class="item-list">
        ${d.inventory[e].length?d.inventory[e].map(t=>B(t,e)).join(``):`<div class="card empty">${w(`empty`)}</div>`}
      </div>
    </section>
  `}function R(){return`
    <div class="category-row">
      <button class="chip ${p===`fridge`?`active`:``}" data-set-storage="fridge">🥬 ${w(`fridgeBig`)}</button>
      <button class="chip ${p===`freezer`?`active`:``}" data-set-storage="freezer">🧊 ${w(`freezerBig`)}</button>
    </div>
  `}function z(e){let t=e===`sauce`;return`
    <section class="section card">
      <div class="section-head">
        <h2 class="section-title">${w(`addItem`)}</h2>
      </div>
      <form class="form-grid" data-form="${e}">
        <div class="field">
          <label>${w(`photo`)}</label>
          <input type="file" accept="image/*" capture="environment" name="photo" />
        </div>
        <div class="field">
          <label>${w(`name`)}</label>
          <input name="name" required placeholder="${w(t?`exampleSauce`:`exampleIngredient`)}" />
        </div>
        <div class="grid-2">
          <div class="field">
            <label>${w(`amount`)}</label>
            <input name="amount" type="number" min="0" step="0.5" value="1" />
          </div>
          <div class="field">
            <label>${w(`unit`)}</label>
            <input name="unit" value="${w(t?`defaultUnitSauce`:`defaultUnitItem`)}" />
          </div>
        </div>
        <div class="field">
          <label>${w(`category`)}</label>
          <input name="category" value="${t?w(`defaultSauceCategory`):``}" />
        </div>
        <div class="field">
          <label>${w(`memo`)}</label>
          <textarea name="memo" placeholder="${w(t?`sauceMemoPlaceholder`:`itemMemoPlaceholder`)}"></textarea>
        </div>
        <button class="pill" type="submit">${w(`save`)}</button>
      </form>
    </section>
  `}function B(e,t){return`
    <article class="inventory-item ${Number(e.amount)<=(t===`sauce`?2:1)?`low`:``}">
      <div class="thumb">${e.photo?`<img src="${e.photo}" alt="" />`:i[t].emoji}</div>
      <div>
        <p class="item-name">${E(e.name)}</p>
        <p class="item-meta">${e.amount}${D(e.unit)} · ${O(e.category)}${k(e,t)?`<br>${k(e,t)}`:``}</p>
      </div>
      <div class="item-actions">
        ${t===`sauce`?`<button class="tiny-button" data-detail="${e.id}">${w(`detail`)}</button>`:``}
        <button class="tiny-button" data-use="${t}:${e.id}">${w(`use`)}</button>
        <button class="tiny-button" data-delete="${t}:${e.id}">${w(`delete`)}</button>
      </div>
    </article>
  `}function V(){let e=m===`all`?d.inventory.sauce:d.inventory.sauce.filter(e=>ge(e.category)===m);return`
    ${z(`sauce`)}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${w(`allSeasonings`)}</h2>
      </div>
      <div class="category-row">
        <button class="chip ${m===`all`?`active`:``}" data-season-cat="all">${w(`all`)}</button>
        ${Object.entries(o).map(([e,t])=>`<button class="chip ${m===e?`active`:``}" data-season-cat="${e}">${t[d.lang]}</button>`).join(``)}
      </div>
    </section>
    <section class="section">
      <div class="item-list">
        ${e.length?e.map(e=>B(e,`sauce`)).join(``):`<div class="card empty">${w(`empty`)}</div>`}
      </div>
    </section>
  `}function H(){return _?`
    <section class="recipe-hero">
      <h2>${_.title}</h2>
      <p>${_.summary}</p>
    </section>
    <section class="section card">
      <h2 class="section-title">${w(`shopping`)}</h2>
      <div class="shopping-list" style="margin-top: 10px">
        ${_.shopping.length?_.shopping.map(e=>`<div>${e}</div>`).join(``):`<div>${w(`noShopping`)}</div>`}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${w(`steps`)}</h2>
      </div>
      ${_.steps.map((e,t)=>U(e,t)).join(``)}
    </section>
    <section class="copy-box">
      <div class="field">
        <label>${w(`promptLabel`)}</label>
        <textarea readonly>${_.prompt}</textarea>
      </div>
      <button class="pill" style="width:100%; margin-top:10px" data-action="copy-prompt">${w(`copyPrompt`)}</button>
    </section>
  `:I()}function U(e,t){return`
    <article class="step-card">
      <div class="step-visual">
        ${W(t)}
      </div>
      <div class="step-body">
        <h3>${t+1}. ${e.title}</h3>
        <p>${e.text}</p>
      </div>
    </article>
  `}function W(e){let t=[`#006241`,`#00754A`,`#CBA258`,`#1E3932`],n=t[e%t.length];return`
    <svg class="step-svg" viewBox="0 0 360 152" role="img" aria-label="${w(`recipeSmall`)}">
      <rect x="0" y="0" width="360" height="152" fill="#edebe9"/>
      <circle cx="${80+e*18}" cy="74" r="34" fill="${n}" opacity="0.18"/>
      <rect x="130" y="48" width="120" height="58" rx="29" fill="#ffffff" stroke="${n}" stroke-width="4"/>
      <path d="M150 80 C176 ${35+e*7}, 210 ${114-e*5}, 238 72" fill="none" stroke="${n}" stroke-width="6" stroke-linecap="round"/>
      <circle cx="270" cy="62" r="16" fill="${n}" opacity="0.76"/>
      <rect x="62" y="106" width="235" height="7" rx="4" fill="#1E3932" opacity="0.2"/>
    </svg>
  `}function G(){return`
    <section class="card gate">
      <div>
        <h2>${w(`lockedTitle`)}</h2>
        <p>${w(`lockedCopy`)}</p>
        <button class="pill" data-action="signup">${w(`joinNow`)}</button>
      </div>
    </section>
  `}function K(){return f===`home`?`<button class="fab" data-action="make-recipe" title="${w(`fabTitle`)}">🍳</button>`:``}function q(){let e=d.user?w(`premiumNav`):w(`homeSmall`);return`
    <nav class="bottom-nav">
      ${J(`home`,d.user?`⭐`:`🏠`,e)}
      ${J(`cold`,`❄️`,w(`bottomCold`))}
      ${J(`sauce`,`🧂`,w(`bottomSauce`))}
      ${J(`room`,`🍞`,w(`bottomRoom`))}
    </nav>
  `}function J(e,t,n){return`
    <button class="bottom-tab ${f===e?`active`:``}" data-tab="${e}">
      <span class="emoji">${t}</span>
      <span class="label">${n}</span>
    </button>
  `}function Y(){return v===`signup`||v===`login`?ae(v):v?.startsWith(`detail:`)?oe(v.split(`:`)[1]):``}function ae(e){return`
    <div class="modal-backdrop">
      <form class="modal" data-auth-form="${e}">
        <h2>${w(e===`login`?`login`:`authTitle`)}</h2>
        <p>${w(`authCopy`)}</p>
        <p><strong>${w(`cloudflareNote`)}</strong></p>
        <div class="form-grid">
          <div class="field">
            <label>${w(`email`)}</label>
            <input name="email" type="email" required placeholder="cook@example.com" />
          </div>
          <div class="field">
            <label>${w(`password`)}</label>
            <input name="password" type="password" required minlength="4" />
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-pill" data-action="close-today">${w(`closeToday`)}</button>
          <button type="submit" class="pill">${w(e===`login`?`login`:`joinNow`)}</button>
        </div>
      </form>
    </div>
  `}function oe(e){let t=d.inventory.sauce.find(t=>t.id===e);if(!t)return``;let n=Q(t.name,t.memo);return`
    <div class="modal-backdrop">
      <article class="modal">
        <h2>${E(t.name)}</h2>
        <p><strong>${O(t.category||n.category)}</strong> · ${t.amount}${D(t.unit)}</p>
        <p>${n.usage}</p>
        <p>${n.tip}</p>
        <p>${T(w(`searchHint`),{name:E(t.name)})}</p>
        <div class="modal-actions">
          <button class="ghost-pill" data-web-search="${t.name}">${w(`searchWeb`)}</button>
          <button class="pill" data-action="close-modal">${w(`confirm`)}</button>
        </div>
      </article>
    </div>
  `}function se(){document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,ce)}),document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;t!==`home`&&!j()?f=t:(f=t,t===`cold`&&![`fridge`,`freezer`].includes(p)&&(p=`fridge`)),N()})}),document.querySelectorAll(`[data-storage-jump]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.storageJump;t===`fridge`||t===`freezer`?(p=t,f=`cold`):f=t,N()})}),document.querySelectorAll(`[data-set-storage]`).forEach(e=>{e.addEventListener(`click`,()=>{p=e.dataset.setStorage,N()})}),document.querySelectorAll(`[data-cook]`).forEach(e=>{e.addEventListener(`click`,()=>{h=e.dataset.cook,N()})}),document.querySelectorAll(`[data-form]`).forEach(e=>{e.addEventListener(`submit`,le)}),document.querySelectorAll(`[data-auth-form]`).forEach(e=>{e.addEventListener(`submit`,ue)}),document.querySelectorAll(`[data-use]`).forEach(e=>{e.addEventListener(`click`,()=>de(e.dataset.use))}),document.querySelectorAll(`[data-delete]`).forEach(e=>{e.addEventListener(`click`,()=>fe(e.dataset.delete))}),document.querySelectorAll(`[data-detail]`).forEach(e=>{e.addEventListener(`click`,()=>{v=`detail:${e.dataset.detail}`,N()})}),document.querySelectorAll(`[data-season-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{m=e.dataset.seasonCat,N()})}),document.querySelectorAll(`[data-web-search]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=d.lang===`ko`?`${e.dataset.webSearch} 양념 사용법 요리 팁`:`${E(e.dataset.webSearch)} seasoning cooking uses tips`,n=encodeURIComponent(t);window.open(`https://www.google.com/search?q=${n}`,`_blank`,`noopener,noreferrer`)})}),document.querySelectorAll(`[data-input='servings']`).forEach(e=>{e.addEventListener(`input`,()=>{g=Math.max(1,Number(e.value)||1)})})}async function ce(e){let n=e.currentTarget,r=e.currentTarget.dataset.action;if(r===`toggle-lang`&&(d.lang=d.lang===`ko`?`en`:`ko`,S()),r===`signup`&&(v=`signup`),r===`login`&&(v=`login`),r===`logout`&&(d.user=null,S()),r===`close-today`&&(localStorage.setItem(t,new Date().toISOString().slice(0,10)),v=null),r===`close-modal`&&(v=null),r===`back`&&(f=`home`),r===`make-recipe`&&(j()?(pe(),f=`recipe`):v=`signup`),r===`copy-prompt`){await ve(_?.prompt||``),n.textContent=w(`copied`);return}N()}async function le(e){e.preventDefault();let t=e.currentTarget,n=t.dataset.form,r=new FormData(t),i=String(r.get(`name`)||``).trim();if(!i)return;let a=r.get(`photo`),o=a&&a.size?await _e(a):null,s=String(r.get(`memo`)||``).trim(),c=String(r.get(`category`)||``).trim();if(n===`sauce`){let e=Q(i,s);s||=Z(i),c||=e.category}d.inventory[n].unshift(x(i,Number(r.get(`amount`))||0,String(r.get(`unit`)||`개`),c,s,o)),S(),N()}async function ue(e){e.preventDefault();let t=new FormData(e.currentTarget),n=String(t.get(`email`)).trim();await be(n),d.user={email:n,joinedAt:new Date().toISOString(),provider:`cloudflare-ready-local`},S(),v=null,f=`home`,N()}function de(e){let[t,n]=e.split(`:`),r=d.inventory[t].find(e=>e.id===n);r&&(r.amount=Math.max(0,Number(r.amount)-1),S(),N())}function fe(e){let[t,n]=e.split(`:`);d.inventory[t]=d.inventory[t].filter(e=>e.id!==n),S(),N()}function pe(){let e=[...d.inventory.fridge,...d.inventory.freezer,...d.inventory.sauce,...d.inventory.room].filter(e=>Number(e.amount)>0),t=e.map(e=>e.name),n=e.map(e=>E(e.name)),r=a.find(([e])=>e===h);t.slice(0,4);let i=n.slice(0,4),o=r?d.lang===`ko`?r[1]:r[2]:w(`recipeFallback`),s=d.lang===`ko`?`${o} ${g}${w(`servingsSuffix`)}`:`${o} for ${g} ${w(`servingsSuffix`)}`,c=me(h,g).filter(e=>!t.some(t=>e.includes(t)||e.includes(E(t)))),l=i.join(`, `)||w(`basicIngredients`);_={title:s,summary:T(w(`recipeSummary`),{items:l}),shopping:c,steps:[{title:w(`stepPrepTitle`),text:T(w(`stepPrepText`),{items:i.join(`, `)||w(`storageIngredients`),servings:g})},{title:w(`stepHeatTitle`),text:w(`stepHeatText`)},{title:w(`stepSeasonTitle`),text:w(`stepSeasonText`)},{title:w(`stepPlateTitle`),text:w(`stepPlateText`)}],prompt:X(s,i,h)},he(),S()}function me(e,t){let n=Number(t)||1,r={fridgeClean:[`달걀 ${n}개`,`대파 조금`,`간장 1스푼`],snack:[`식빵 ${n}장`,`치즈`,`달걀 1개`],dessert:[`우유`,`설탕`,`과일`],bread:[`강력분`,`이스트`,`버터`],party:[`고기`,`채소`,`소스`],korean:[`밥`,`간장`,`참기름`],japanese:[`우동면`,`쯔유`,`달걀`],chinese:[`대파`,`간장`,`굴소스`],meat:[`고기`,`소금`,`후추`],quick:[`달걀`,`밥`,`간장`]},i={fridgeClean:[`egg ${n} pcs`,`green onion`,`soy sauce 1 tbsp`],snack:[`bread ${n} slices`,`cheese`,`egg 1 pc`],dessert:[`milk`,`sugar`,`fruit`],bread:[`bread flour`,`yeast`,`butter`],party:[`meat`,`vegetables`,`sauce`],korean:[`rice`,`soy sauce`,`sesame oil`],japanese:[`udon noodles`,`tsuyu`,`egg`],chinese:[`green onion`,`soy sauce`,`oyster sauce`],meat:[`meat`,`salt`,`pepper`],quick:[`egg`,`rice`,`soy sauce`]},a=d.lang===`ko`?r:i;return a[e]||a.fridgeClean}function he(){[`fridge`,`freezer`,`sauce`,`room`].forEach(e=>{d.inventory[e].slice(0,2).forEach(t=>{t.amount=Math.max(0,Number(t.amount)-(e===`sauce`?.5:1))})})}function X(e,t,n){return`A mouthwatering vertical smartphone food photo of ${e}, ${a.find(([e])=>e===n)?.[2]||`easy home cooking`}, made with ${t.join(`, `)||`simple pantry ingredients`}, warm natural kitchen light, glossy textures, steam rising, neatly plated on a ceramic dish, appetizing colors, realistic detail, shallow depth of field, no text, no watermark.`}function Z(e){let t=Q(e,``);return`${t.usage} ${t.tip}`}function Q(e,t){let n=$(e),r=n?s[n]:null;return r?{category:o[r.category][C()],usage:C()===`ko`?r.usageKo:r.usageEn,tip:C()===`ko`?r.tipKo:r.tipEn}:{category:w(`defaultCategory`),usage:t||(C()===`ko`?`볶음, 무침, 국물, 소스에 조금씩 테스트하며 쓰기 좋아요.`:`Try a small amount in stir-fries, salads, soups, or sauces.`),tip:C()===`ko`?`처음 쓰는 양념은 1인분 기준 반 작은술부터 넣고 맛을 보며 늘리세요.`:`For a new seasoning, start with half a teaspoon per serving and increase after tasting.`}}function ge(e){return Object.entries(o).find(([,t])=>t.ko===e||t.en===e)?.[0]||`basic`}function $(e){return Object.keys(s).find(t=>e.includes(t)||E(t)===e)}function _e(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}async function ve(e){try{await navigator.clipboard.writeText(e);return}catch{let e=document.querySelector(`.copy-box textarea`);if(!e)return;e.focus(),e.select();try{document.execCommand(`copy`)}catch{}}}function ye(){`serviceWorker`in navigator&&(location.hostname===`127.0.0.1`||location.hostname===`localhost`||window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})}))}async function be(e){try{await fetch(`./api/users`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,app:`yorijambaengi`})})}catch{}}function xe(){let e=new URLSearchParams(window.location.search).get(`shortcut`);e===`sauce`&&(f=`sauce`),e===`recipe`&&(f=`home`)}M(),N();