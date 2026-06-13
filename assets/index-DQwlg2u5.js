(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`yorijambaengi-state-v1`,t=`yorijambaengi-free-popup-date`,n={login:`Login`,signup:`가입하기`,logout:`로그아웃`,lang:`EN`,back:`Back`,homeSmall:`홈`,homeBig:`요리초보 추천`,premiumBig:`프리미엄 요리실`,premiumNav:`프리미엄`,heroTitleLine1:`있는 재료로`,heroTitleLine2:`쉬운 요리`,heroCopy:`냉장고, 냉동고, 양념, 실온 먹거리를 보고 몇 인분인지에 맞춰 쉬운 요리를 추천해요.`,trial:`무료체험`,trialCopy:`가입 전 3일 동안 사용 가능`,signupRequired:`가입 필요`,joinNow:`무료 가입`,storageNow:`현재 내 보관함`,cookStart:`요리 본격 시작`,servings:`몇 인분`,makeRecipe:`추천 받기`,pantrySmall:`보관함`,fridgeBig:`신선고`,freezerBig:`얼음창고`,sauceBig:`맛보관소`,roomBig:`실온바구니`,addItem:`재료 추가`,name:`이름`,amount:`수량`,unit:`단위`,photo:`카메라/사진`,save:`저장`,category:`카테고리`,memo:`메모`,detail:`상세`,use:`사용`,delete:`삭제`,deleteSymbol:`-`,edit:`수정`,editItem:`재료 수정`,cancel:`취소`,saveEdit:`수정 저장`,empty:`아직 저장된 재료가 없어요.`,seasonTitle:`양념보관창고`,allSeasonings:`전체 양념`,recipeSmall:`요리순서`,shopping:`장보기 재료`,steps:`요리 순서`,copyPrompt:`최종 이미지 영어 프롬프트 복사`,copied:`복사 완료`,authTitle:`요리로 신규 가입`,authCopy:`무료 가입에는 개인 정보로 이메일만 저장해요. 비밀번호는 화면 확인용이며 앱에 저장하지 않습니다.`,closeToday:`오늘 닫기`,lockedTitle:`4일째부터는 가입 후 사용 가능`,lockedCopy:`홈 화면은 볼 수 있지만 보관함, 요리 추천, 상세 기능은 무료 가입 후 열려요.`,cloudflareNote:`Cloudflare Pages 유저 생성 연동 준비 화면`,searchWeb:`무료 웹 검색`,joinedCopy:`가입 완료. 모든 기능 사용 가능`,savedCount:`개 저장`,exampleSauce:`예: 간장`,exampleIngredient:`예: 양파`,defaultUnitSauce:`스푼`,defaultUnitItem:`개`,defaultSauceCategory:`기본 간`,sauceMemoPlaceholder:`자동 설명이 없으면 직접 적어도 좋아요.`,itemMemoPlaceholder:`보관 위치나 유통기한 메모`,defaultCategory:`기본`,all:`전체`,noShopping:`추가 장보기 없이 가능해요.`,promptLabel:`ChatGPT 이미지 생성용 영어 프롬프트`,fabTitle:`요리 시작`,bottomCold:`냉장/냉동`,bottomSauce:`양념`,bottomRoom:`실온`,email:`이메일`,password:`비밀번호`,confirm:`확인`,searchHint:`검색 힌트: 무료 웹 검색에서 “{name} 요리 활용법”으로 찾아 상세 설명과 팁을 보강할 수 있어요.`,recipeFallback:`오늘의 요리`,servingsSuffix:`인분`,basicIngredients:`기본 재료`,storageIngredients:`보관 재료`,recipeSummary:`{items}를 중심으로 만든 초보용 추천이에요. 없는 재료는 장보기 목록에 따로 뺐어요.`,stepPrepTitle:`재료 모으기`,stepPrepText:`{items}를 꺼내고 {servings}인분 기준으로 먹기 좋은 크기로 준비해요.`,stepHeatTitle:`기본 익히기`,stepHeatText:`팬을 중불로 달군 뒤 단단한 재료부터 넣고, 수분 많은 재료는 나중에 넣어 식감이 무너지지 않게 해요.`,stepSeasonTitle:`양념 맞추기`,stepSeasonText:`간장, 고추장, 소금 같은 양념은 한 번에 많이 넣지 말고 반씩 넣어 맛을 보며 조절해요.`,stepPlateTitle:`담아내기`,stepPlateText:`마지막에 참기름이나 후추처럼 향이 나는 재료를 조금 넣고 따뜻할 때 그릇에 담아요.`,finalVisual:`완성 비주얼`,finalVisualText:`따뜻한 접시에 윤기 나는 재료가 보기 좋게 담기고, 주재료의 색과 김이 살아 있는 집밥 비주얼로 완성돼요.`},r={login:`Login`,signup:`Join`,logout:`Logout`,lang:`KO`,back:`Back`,homeSmall:`Home`,homeBig:`Easy Cook`,premiumBig:`Premium Kitchen`,premiumNav:`Premium`,heroTitleLine1:`Easy meals`,heroTitleLine2:`from your kitchen`,heroCopy:`The app checks fridge, freezer, seasonings, and room-temp foods to suggest easy recipes by serving size.`,trial:`Trial`,trialCopy:`3 days before sign-up is required`,signupRequired:`Sign-up required`,joinNow:`Join free`,storageNow:`My storage`,cookStart:`Start cooking`,servings:`Servings`,makeRecipe:`Recommend`,pantrySmall:`Storage`,fridgeBig:`Fresh Box`,freezerBig:`Ice Vault`,sauceBig:`Flavor Shelf`,roomBig:`Room Basket`,addItem:`Add item`,name:`Name`,amount:`Amount`,unit:`Unit`,photo:`Camera/photo`,save:`Save`,category:`Category`,memo:`Memo`,detail:`Detail`,use:`Use`,delete:`Delete`,deleteSymbol:`-`,edit:`Edit`,editItem:`Edit item`,cancel:`Cancel`,saveEdit:`Save edit`,empty:`Nothing saved yet.`,seasonTitle:`Seasoning Storage`,allSeasonings:`All seasonings`,recipeSmall:`Recipe`,shopping:`Shopping list`,steps:`Cooking order`,copyPrompt:`Copy final image prompt`,copied:`Copied`,authTitle:`Create cooking account`,authCopy:`Free sign-up stores only your email as personal information. The password is checked on screen and is not saved in this app.`,closeToday:`Close today`,lockedTitle:`Sign-up required from day 4`,lockedCopy:`Home remains visible, but storage, recipe, and detail features open after free sign-up.`,cloudflareNote:`Cloudflare Pages user creation hook screen`,searchWeb:`Free web search`,joinedCopy:`Joined. All features are available.`,savedCount:`saved`,exampleSauce:`e.g. soy sauce`,exampleIngredient:`e.g. onion`,defaultUnitSauce:`tbsp`,defaultUnitItem:`pcs`,defaultSauceCategory:`Basic seasoning`,sauceMemoPlaceholder:`If auto details are missing, add your own note.`,itemMemoPlaceholder:`Storage spot or expiry note`,defaultCategory:`Basic`,all:`All`,noShopping:`No extra shopping needed.`,promptLabel:`English prompt for ChatGPT image generation`,fabTitle:`Start cooking`,bottomCold:`Cold`,bottomSauce:`Seasoning`,bottomRoom:`Room`,email:`Email`,password:`Password`,confirm:`OK`,searchHint:`Search hint: use free web search for "{name} cooking uses" to improve the saved details and tips.`,recipeFallback:`Today's meal`,servingsSuffix:`servings`,basicIngredients:`basic ingredients`,storageIngredients:`stored ingredients`,recipeSummary:`A beginner-friendly recipe built around {items}. Missing ingredients are separated into the shopping list.`,stepPrepTitle:`Gather ingredients`,stepPrepText:`Take out {items} and prep them into easy-to-cook pieces for {servings} servings.`,stepHeatTitle:`Cook the base`,stepHeatText:`Heat the pan over medium heat, add firm ingredients first, and add watery ingredients later so the texture stays intact.`,stepSeasonTitle:`Adjust seasoning`,stepSeasonText:`Add soy sauce, chili paste, or salt in small portions, taste, then adjust gradually.`,stepPlateTitle:`Plate and finish`,stepPlateText:`Add fragrant ingredients like sesame oil or pepper at the end, then plate while warm.`,finalVisual:`Final visual`,finalVisualText:`The finished dish looks glossy and hearty on a warm ceramic plate, with the main ingredients clearly visible and a fresh home-cooked feel.`},i={fridge:{ko:`신선고`,en:`Fresh Box`,emoji:`🥬`,descKo:`냉장 재료`,descEn:`Chilled ingredients`},freezer:{ko:`얼음창고`,en:`Ice Vault`,emoji:`🧊`,descKo:`냉동 재료`,descEn:`Frozen ingredients`},sauce:{ko:`맛보관소`,en:`Flavor Shelf`,emoji:`🧂`,descKo:`양념과 소스`,descEn:`Seasonings and sauces`},room:{ko:`실온바구니`,en:`Room Basket`,emoji:`🍞`,descKo:`실온 먹거리`,descEn:`Room-temp foods`}},a=[[`fridgeClean`,`냉장고 털기`,`Clear-out meal`,`🥘`],[`snack`,`간식`,`Snack`,`🍙`],[`dessert`,`디저트`,`Dessert`,`🍮`],[`bread`,`빵만들기`,`Bread`,`🥖`],[`party`,`파티`,`Party`,`🎉`],[`korean`,`한식`,`Korean`,`🍚`],[`japanese`,`일식`,`Japanese`,`🍱`],[`chinese`,`중식`,`Chinese`,`🥡`],[`meat`,`고기굽기`,`Grill meat`,`🥩`],[`quick`,`초간단 한끼`,`Quick meal`,`⚡`]],o={basic:{ko:`기본 간`,en:`Basic seasoning`},sauce:{ko:`소스`,en:`Sauces`},oil:{ko:`기름/향`,en:`Oils and aroma`},spicy:{ko:`매운맛`,en:`Spicy`},sweet:{ko:`단맛`,en:`Sweet`},herb:{ko:`향신료`,en:`Spices and herbs`}},s={간장:{category:`basic`,usageKo:`볶음, 조림, 덮밥, 국물 간에 좋아요.`,usageEn:`Good for stir-fries, braises, rice bowls, and soup seasoning.`,tipKo:`1인분 기준 1작은술부터 넣고 마지막에 간을 맞추세요.`,tipEn:`Start with 1 teaspoon per serving, then adjust at the end.`},고추장:{category:`spicy`,usageKo:`비빔, 볶음, 찌개, 양념구이에 잘 맞아요.`,usageEn:`Works well in mixed rice, stir-fries, stews, and spicy grilled marinades.`,tipKo:`단맛이 있어 설탕은 적게 넣고 물이나 육수로 풀면 덜 뭉쳐요.`,tipEn:`It is already a little sweet, so reduce sugar and loosen it with water or stock.`},된장:{category:`basic`,usageKo:`국, 찌개, 나물 무침, 고기 밑간에 좋아요.`,usageEn:`Good for soups, stews, seasoned greens, and meat marinades.`,tipKo:`오래 끓이면 텁텁할 수 있어 중후반에 풀어 넣으세요.`,tipEn:`Add it in the middle or later so the flavor stays clean.`},소금:{category:`basic`,usageKo:`모든 기본 간, 데치기, 굽기 전 밑간에 사용해요.`,usageEn:`Use for basic seasoning, blanching water, and pre-seasoning before grilling.`,tipKo:`한 번에 많이 넣지 말고 두 꼬집씩 나눠 넣으세요.`,tipEn:`Add two pinches at a time instead of salting heavily at once.`},설탕:{category:`sweet`,usageKo:`볶음, 조림, 양념장, 디저트에 단맛과 윤기를 줘요.`,usageEn:`Adds sweetness and gloss to stir-fries, braises, sauces, and desserts.`,tipKo:`간장 요리에는 설탕을 먼저 넣으면 재료 속까지 맛이 들어요.`,tipEn:`For soy-based dishes, add sugar early so the flavor soaks in.`},참기름:{category:`oil`,usageKo:`나물, 비빔밥, 완성 직전 향내기에 좋아요.`,usageEn:`Best for seasoned greens, bibimbap, and finishing aroma.`,tipKo:`센 불에서 오래 가열하지 말고 마지막에 둘러 향을 살리세요.`,tipEn:`Do not cook it long over high heat; drizzle at the end for aroma.`},후추:{category:`herb`,usageKo:`고기, 달걀, 크림, 볶음요리의 잡내를 줄여요.`,usageEn:`Helps balance meat, eggs, creamy dishes, and stir-fries.`,tipKo:`완성 직전 갈아 넣으면 향이 더 선명해요.`,tipEn:`Grind it right before serving for a clearer aroma.`},식초:{category:`sauce`,usageKo:`초무침, 냉채, 소스, 느끼한 맛 잡기에 좋아요.`,usageEn:`Great for sour salads, chilled dishes, sauces, and cutting richness.`,tipKo:`가열하면 향이 날아가니 불을 끈 뒤 넣으세요.`,tipEn:`Add after turning off the heat so the acidity stays bright.`}},c={달걀:`egg`,대파:`green onion`,두부:`tofu`,양파:`onion`,당근:`carrot`,애호박:`zucchini`,김치:`kimchi`,우유:`milk`,치즈:`cheese`,버터:`butter`,"냉동 만두":`frozen dumplings`,냉동밥:`frozen rice`,"냉동 대패삼겹살":`frozen thin pork belly`,"냉동 새우":`frozen shrimp`,"냉동 브로콜리":`frozen broccoli`,"냉동 블루베리":`frozen blueberries`,간장:`soy sauce`,고추장:`gochujang`,된장:`doenjang`,소금:`salt`,설탕:`sugar`,참기름:`sesame oil`,후추:`black pepper`,식초:`vinegar`,고춧가루:`gochugaru`,식용유:`cooking oil`,굴소스:`oyster sauce`,마요네즈:`mayonnaise`,케첩:`ketchup`,식빵:`bread slices`,라면:`instant noodles`,쌀:`rice`,밥:`cooked rice`,파스타면:`pasta`,참치캔:`canned tuna`,김:`seaweed sheets`,감자:`potato`,고구마:`sweet potato`,밀가루:`flour`},l={개:`pcs`,단:`bunch`,모:`block`,스푼:`tbsp`,장:`slices`,봉:`packs`,컵:`cups`,캔:`cans`,봉지:`bags`,통:`bottles`},u={단백질:`Protein`,채소:`Vegetable`,간편식:`Convenience food`,냉동재료:`Frozen ingredients`,"기본 간":`Basic seasoning`,매운맛:`Spicy`,단맛:`Sweet`,향신료:`Spices and herbs`,"기름/향":`Oils and aroma`,소스:`Sauce`,통조림:`Canned food`,곡물:`Grain`,구황작물:`Root vegetable`,빵:`Bread`,면:`Noodles`,유제품:`Dairy`,기본:`Basic`},d=ee(),f=`home`,p=`fridge`,m=`all`,h=`fridgeClean`,g=1,_=null,v=null;C(),we(),Ee();function y(){return{createdAt:new Date().toISOString(),lang:`ko`,user:null,inventory:b()}}function b(){return{fridge:[x(`달걀`,6,`개`,`단백질`,``,null),x(`대파`,1,`단`,`채소`,``,null),x(`두부`,1,`모`,`단백질`,``,null),x(`양파`,2,`개`,`채소`,``,null),x(`당근`,1,`개`,`채소`,``,null),x(`애호박`,1,`개`,`채소`,``,null),x(`김치`,1,`통`,`기본`,``,null),x(`우유`,1,`통`,`유제품`,``,null),x(`치즈`,4,`장`,`유제품`,``,null),x(`버터`,1,`개`,`유제품`,``,null)],freezer:[x(`냉동 만두`,12,`개`,`간편식`,``,null),x(`냉동밥`,2,`개`,`간편식`,``,null),x(`냉동 대패삼겹살`,1,`봉지`,`냉동재료`,``,null),x(`냉동 새우`,1,`봉지`,`냉동재료`,``,null),x(`냉동 브로콜리`,1,`봉지`,`냉동재료`,``,null),x(`냉동 블루베리`,1,`봉지`,`냉동재료`,``,null)],sauce:[x(`간장`,7,`스푼`,`기본 간`,J(`간장`),null),x(`고추장`,3,`스푼`,`매운맛`,J(`고추장`),null),x(`참기름`,2,`스푼`,`기름/향`,J(`참기름`),null),x(`된장`,4,`스푼`,`기본 간`,J(`된장`),null),x(`소금`,6,`스푼`,`기본 간`,J(`소금`),null),x(`설탕`,6,`스푼`,`단맛`,J(`설탕`),null),x(`후추`,5,`스푼`,`향신료`,J(`후추`),null),x(`식초`,4,`스푼`,`소스`,J(`식초`),null),x(`고춧가루`,4,`스푼`,`매운맛`,``,null),x(`식용유`,1,`통`,`기름/향`,``,null),x(`굴소스`,2,`스푼`,`소스`,``,null),x(`마요네즈`,1,`통`,`소스`,``,null),x(`케첩`,1,`통`,`소스`,``,null)],room:[x(`식빵`,4,`장`,`빵`,``,null),x(`라면`,2,`봉`,`면`,``,null),x(`쌀`,3,`컵`,`곡물`,``,null),x(`파스타면`,1,`봉지`,`면`,``,null),x(`참치캔`,2,`캔`,`통조림`,``,null),x(`김`,5,`장`,`기본`,``,null),x(`감자`,3,`개`,`구황작물`,``,null),x(`고구마`,2,`개`,`구황작물`,``,null),x(`밀가루`,2,`컵`,`곡물`,``,null)]}}function x(e,t,n,r,i,a){return{id:crypto.randomUUID(),name:e,amount:t,unit:n,category:r,memo:i,photo:a,createdAt:new Date().toISOString()}}function ee(){try{let t=localStorage.getItem(e);return t?{...y(),...JSON.parse(t)}:y()}catch{return y()}}function S(){localStorage.setItem(e,JSON.stringify(d))}function C(){let e=b();d.inventory=d.inventory||{},Object.entries(e).forEach(([e,t])=>{d.inventory[e]=Array.isArray(d.inventory[e])?d.inventory[e]:[],t.forEach(t=>{d.inventory[e].some(e=>e.name===t.name)||d.inventory[e].push(t)})}),S()}function w(){try{return d?.lang||`ko`}catch{return`ko`}}function T(e){return(w()===`ko`?n:r)[e]||e}function E(e,t){return Object.entries(t).reduce((e,[t,n])=>e.replaceAll(`{${t}}`,n),e)}function D(e){return w()===`ko`?e:c[e]||e}function O(e){return w()===`ko`?e:l[e]||e}function k(e){return e?o[e]?.[w()]||(w()===`ko`?e:u[e]||e):T(`defaultCategory`)}function A(e,t){return t===`sauce`&&X(e.name)?J(e.name):e.memo}function j(){if(d.user)return!1;let e=new Date(d.createdAt).getTime();return Date.now()-e>=1440*60*1e3*3}function te(){let e=new Date(d.createdAt).getTime(),t=Math.floor((Date.now()-e)/(1440*60*1e3))+1;return Math.max(1,Math.min(t,4))}function M(){return!!d.user||!j()}function ne(){if(d.user||j())return;let e=new Date().toISOString().slice(0,10);localStorage.getItem(t)!==e&&(v=`signup`)}function N(){let e=document.querySelector(`#app`);e.innerHTML=`
    <div class="phone-shell">
      ${P()}
      ${F()}
      <main class="content">${ie()}</main>
      ${W()}
      ${G()}
      ${q()}
    </div>
  `,ue()}function P(){let e=d.user?d.user.email.split(`@`)[0]:T(`login`),t=d.user?T(`logout`):T(`signup`);return`
    <header class="top-auth">
      <button class="ghost-pill auth-left" data-action="login">${e}</button>
      <button class="${d.user?`ghost-pill`:`dark-pill`} auth-center" data-action="${d.user?`logout`:`signup`}">${t}</button>
      <button class="icon-pill auth-right" data-action="toggle-lang">${T(`lang`)}</button>
    </header>
  `}function F(){let e=re();return`
    <section class="page-panel">
      ${f===`home`?``:`<button class="back-button" data-action="back">${T(`back`)}</button>`}
      <h1 class="big-title">${e.big}</h1>
    </section>
  `}function re(){return f===`home`?{small:d.user?`Premium`:T(`homeSmall`),big:d.user?T(`premiumBig`):T(`homeBig`)}:f===`cold`?{small:T(`pantrySmall`),big:T(p===`freezer`?`freezerBig`:`fridgeBig`)}:f===`sauce`?{small:T(`seasonTitle`),big:T(`sauceBig`)}:f===`room`?{small:T(`pantrySmall`),big:T(`roomBig`)}:f===`recipe`?{small:T(`recipeSmall`),big:_?.title||T(`cookStart`)}:{small:T(`homeSmall`),big:T(`homeBig`)}}function ie(){return!M()&&f!==`home`?U():f===`home`?I():f===`cold`?L(p):f===`sauce`?B():f===`room`?L(`room`):f===`recipe`?V():I()}function I(){let e=!M();return`
    <section class="hero-band">
      <h2 class="hero-title"><span>${T(`heroTitleLine1`)}</span><span>${T(`heroTitleLine2`)}</span></h2>
      <p>${T(`heroCopy`)}</p>
    </section>
    <section class="trial-strip">
      <div>
        <strong>${d.user?`Premium`:e?T(`signupRequired`):`${T(`trial`)} ${te()}/3`}</strong>
        <span>${d.user?T(`joinedCopy`):T(`trialCopy`)}</span>
      </div>
      <button class="pill" data-action="${d.user?`noop`:`signup`}">${d.user?`OK`:T(`joinNow`)}</button>
    </section>
    ${e?U():``}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${T(`storageNow`)}</h2>
      </div>
      <div class="grid-2">
        ${Object.entries(i).map(([e,t])=>ae(e,t)).join(``)}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${T(`cookStart`)}</h2>
        <label class="field" style="width: 96px">
          <span>${T(`servings`)}</span>
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
        <button class="pill" style="width: 100%; min-height: 46px" data-action="make-recipe">${T(`makeRecipe`)}</button>
      </div>
    </section>
  `}function ae(e,t){let n=d.inventory[e].length,r=d.lang===`ko`?t.ko:t.en,i=d.lang===`ko`?t.descKo:t.descEn;return`
    <button class="storage-card" data-storage-jump="${e}">
      <span class="storage-emoji">${t.emoji}</span>
      <strong>${r}</strong>
      <span>${i} · ${n} ${T(`savedCount`)}</span>
    </button>
  `}function L(e){return`
    ${e===`fridge`||e===`freezer`?oe():``}
    ${R(e)}
    <section class="section">
      <div class="item-list">
        ${d.inventory[e].length?d.inventory[e].map(t=>z(t,e)).join(``):`<div class="card empty">${T(`empty`)}</div>`}
      </div>
    </section>
  `}function oe(){return`
    <div class="category-row">
      <button class="chip ${p===`fridge`?`active`:``}" data-set-storage="fridge">🥬 ${T(`fridgeBig`)}</button>
      <button class="chip ${p===`freezer`?`active`:``}" data-set-storage="freezer">🧊 ${T(`freezerBig`)}</button>
    </div>
  `}function R(e){let t=e===`sauce`;return`
    <section class="section card">
      <div class="section-head">
        <h2 class="section-title">${T(`addItem`)}</h2>
      </div>
      <form class="form-grid" data-form="${e}">
        <div class="field">
          <label>${T(`photo`)}</label>
          <input type="file" accept="image/*" capture="environment" name="photo" />
        </div>
        <div class="field">
          <label>${T(`name`)}</label>
          <input name="name" required placeholder="${T(t?`exampleSauce`:`exampleIngredient`)}" />
        </div>
        <div class="grid-2">
          <div class="field">
            <label>${T(`amount`)}</label>
            <input name="amount" type="number" min="0" step="0.5" value="1" />
          </div>
          <div class="field">
            <label>${T(`unit`)}</label>
            <input name="unit" value="${T(t?`defaultUnitSauce`:`defaultUnitItem`)}" />
          </div>
        </div>
        <div class="field">
          <label>${T(`category`)}</label>
          <input name="category" value="${t?T(`defaultSauceCategory`):``}" />
        </div>
        <div class="field">
          <label>${T(`memo`)}</label>
          <textarea name="memo" placeholder="${T(t?`sauceMemoPlaceholder`:`itemMemoPlaceholder`)}"></textarea>
        </div>
        <button class="pill" type="submit">${T(`save`)}</button>
      </form>
    </section>
  `}function z(e,t){return`
    <article class="inventory-item ${Number(e.amount)<=(t===`sauce`?2:1)?`low`:``}">
      <div class="thumb">${e.photo?`<img src="${e.photo}" alt="" />`:i[t].emoji}</div>
      <div>
        <p class="item-name">${D(e.name)}</p>
        <p class="item-meta">${e.amount}${O(e.unit)} · ${k(e.category)}${A(e,t)?`<br>${A(e,t)}`:``}</p>
      </div>
      <div class="item-actions">
        ${t===`sauce`?`<button class="tiny-button" data-detail="${e.id}">${T(`detail`)}</button>`:``}
        <button class="tiny-button" data-edit="${t}:${e.id}">${T(`edit`)}</button>
        <button class="tiny-button" data-use="${t}:${e.id}">${T(`use`)}</button>
        <button class="tiny-button delete-button" data-delete="${t}:${e.id}" title="${T(`delete`)}">${T(`deleteSymbol`)}</button>
      </div>
    </article>
  `}function B(){let e=m===`all`?d.inventory.sauce:d.inventory.sauce.filter(e=>Se(e.category)===m);return`
    ${R(`sauce`)}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${T(`allSeasonings`)}</h2>
      </div>
      <div class="category-row">
        <button class="chip ${m===`all`?`active`:``}" data-season-cat="all">${T(`all`)}</button>
        ${Object.entries(o).map(([e,t])=>`<button class="chip ${m===e?`active`:``}" data-season-cat="${e}">${t[d.lang]}</button>`).join(``)}
      </div>
    </section>
    <section class="section">
      <div class="item-list">
        ${e.length?e.map(e=>z(e,`sauce`)).join(``):`<div class="card empty">${T(`empty`)}</div>`}
      </div>
    </section>
  `}function V(){return _?`
    <section class="recipe-hero">
      <h2>${_.title}</h2>
      <p>${_.summary}</p>
    </section>
    <section class="section card">
      <h2 class="section-title">${T(`shopping`)}</h2>
      <div class="shopping-list" style="margin-top: 10px">
        ${_.shopping.length?_.shopping.map(e=>`<div>${e}</div>`).join(``):`<div>${T(`noShopping`)}</div>`}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${T(`steps`)}</h2>
      </div>
      ${_.steps.map((e,t)=>H(e,t)).join(``)}
    </section>
    <section class="section card final-visual">
      <h2 class="section-title">${T(`finalVisual`)}</h2>
      <p>${_.visual}</p>
    </section>
    <section class="copy-box">
      <div class="field">
        <label>${T(`promptLabel`)}</label>
        <textarea readonly>${_.prompt}</textarea>
      </div>
      <button class="pill" style="width:100%; margin-top:10px" data-action="copy-prompt">${T(`copyPrompt`)}</button>
    </section>
  `:I()}function H(e,t){return`
    <article class="step-card text-step">
      <div class="step-number">${t+1}</div>
      <div class="step-body">
        <h3>${e.title}</h3>
        <p>${e.text}</p>
      </div>
    </article>
  `}function U(){return`
    <section class="card gate">
      <div>
        <h2>${T(`lockedTitle`)}</h2>
        <p>${T(`lockedCopy`)}</p>
        <button class="pill" data-action="signup">${T(`joinNow`)}</button>
      </div>
    </section>
  `}function W(){return f===`home`?`<button class="fab" data-action="make-recipe" title="${T(`fabTitle`)}">🍳</button>`:``}function G(){let e=d.user?T(`premiumNav`):T(`homeSmall`);return`
    <nav class="bottom-nav">
      ${K(`home`,d.user?`⭐`:`🏠`,e)}
      ${K(`cold`,`❄️`,T(`bottomCold`))}
      ${K(`sauce`,`🧂`,T(`bottomSauce`))}
      ${K(`room`,`🍞`,T(`bottomRoom`))}
    </nav>
  `}function K(e,t,n){return`
    <button class="bottom-tab ${f===e?`active`:``}" data-tab="${e}">
      <span class="emoji">${t}</span>
      <span class="label">${n}</span>
    </button>
  `}function q(){return v===`signup`||v===`login`?se(v):v?.startsWith(`detail:`)?ce(v.split(`:`)[1]):v?.startsWith(`edit:`)?le(v.split(`:`)[1],v.split(`:`)[2]):``}function se(e){return`
    <div class="modal-backdrop">
      <form class="modal" data-auth-form="${e}">
        <h2>${T(e===`login`?`login`:`authTitle`)}</h2>
        <p>${T(`authCopy`)}</p>
        <p><strong>${T(`cloudflareNote`)}</strong></p>
        <div class="form-grid">
          <div class="field">
            <label>${T(`email`)}</label>
            <input name="email" type="email" required placeholder="cook@example.com" />
          </div>
          <div class="field">
            <label>${T(`password`)}</label>
            <input name="password" type="password" required minlength="4" />
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-pill" data-action="close-today">${T(`closeToday`)}</button>
          <button type="submit" class="pill">${T(e===`login`?`login`:`joinNow`)}</button>
        </div>
      </form>
    </div>
  `}function ce(e){let t=d.inventory.sauce.find(t=>t.id===e);if(!t)return``;let n=Y(t.name,t.memo);return`
    <div class="modal-backdrop">
      <article class="modal">
        <h2>${D(t.name)}</h2>
        <p><strong>${k(t.category||n.category)}</strong> · ${t.amount}${O(t.unit)}</p>
        <p>${n.usage}</p>
        <p>${n.tip}</p>
        <p>${E(T(`searchHint`),{name:D(t.name)})}</p>
        <div class="modal-actions">
          <button class="ghost-pill" data-web-search="${t.name}">${T(`searchWeb`)}</button>
          <button class="pill" data-action="close-modal">${T(`confirm`)}</button>
        </div>
      </article>
    </div>
  `}function le(e,t){let n=d.inventory[e]?.find(e=>e.id===t);return n?`
    <div class="modal-backdrop">
      <form class="modal" data-edit-form="${e}:${t}">
        <h2>${T(`editItem`)}</h2>
        <div class="form-grid">
          <div class="field">
            <label>${T(`name`)}</label>
            <input name="name" required value="${Q(n.name)}" />
          </div>
          <div class="grid-2">
            <div class="field">
              <label>${T(`amount`)}</label>
              <input name="amount" type="number" min="0" step="0.5" value="${n.amount}" />
            </div>
            <div class="field">
              <label>${T(`unit`)}</label>
              <input name="unit" value="${Q(n.unit)}" />
            </div>
          </div>
          <div class="field">
            <label>${T(`category`)}</label>
            <input name="category" value="${Q(n.category||``)}" />
          </div>
          <div class="field">
            <label>${T(`memo`)}</label>
            <textarea name="memo">${Z(n.memo||``)}</textarea>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-pill" data-action="close-modal">${T(`cancel`)}</button>
          <button type="submit" class="pill">${T(`saveEdit`)}</button>
        </div>
      </form>
    </div>
  `:``}function ue(){document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,de)}),document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;t!==`home`&&!M()?f=t:(f=t,t===`cold`&&![`fridge`,`freezer`].includes(p)&&(p=`fridge`)),N()})}),document.querySelectorAll(`[data-storage-jump]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.storageJump;t===`fridge`||t===`freezer`?(p=t,f=`cold`):f=t,N()})}),document.querySelectorAll(`[data-set-storage]`).forEach(e=>{e.addEventListener(`click`,()=>{p=e.dataset.setStorage,N()})}),document.querySelectorAll(`[data-cook]`).forEach(e=>{e.addEventListener(`click`,()=>{h=e.dataset.cook,document.querySelectorAll(`[data-cook]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.cook===h)})})}),document.querySelectorAll(`[data-form]`).forEach(e=>{e.addEventListener(`submit`,fe)}),document.querySelectorAll(`[data-auth-form]`).forEach(e=>{e.addEventListener(`submit`,pe)}),document.querySelectorAll(`[data-edit-form]`).forEach(e=>{e.addEventListener(`submit`,me)}),document.querySelectorAll(`[data-use]`).forEach(e=>{e.addEventListener(`click`,()=>he(e.dataset.use))}),document.querySelectorAll(`[data-delete]`).forEach(e=>{e.addEventListener(`click`,()=>ge(e.dataset.delete))}),document.querySelectorAll(`[data-edit]`).forEach(e=>{e.addEventListener(`click`,()=>{v=`edit:${e.dataset.edit}`,N()})}),document.querySelectorAll(`[data-detail]`).forEach(e=>{e.addEventListener(`click`,()=>{v=`detail:${e.dataset.detail}`,N()})}),document.querySelectorAll(`[data-season-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{m=e.dataset.seasonCat,N()})}),document.querySelectorAll(`[data-web-search]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=d.lang===`ko`?`${e.dataset.webSearch} 양념 사용법 요리 팁`:`${D(e.dataset.webSearch)} seasoning cooking uses tips`,n=encodeURIComponent(t);window.open(`https://www.google.com/search?q=${n}`,`_blank`,`noopener,noreferrer`)})}),document.querySelectorAll(`[data-input='servings']`).forEach(e=>{e.addEventListener(`input`,()=>{g=Math.max(1,Number(e.value)||1)})})}async function de(e){let n=e.currentTarget,r=e.currentTarget.dataset.action;if(r===`toggle-lang`&&(d.lang=d.lang===`ko`?`en`:`ko`,S()),r===`signup`&&(v=`signup`),r===`login`&&(v=`login`),r===`logout`&&(d.user=null,S()),r===`close-today`&&(localStorage.setItem(t,new Date().toISOString().slice(0,10)),v=null),r===`close-modal`&&(v=null),r===`back`&&(f=`home`),r===`make-recipe`&&(M()?(_e(),f=`recipe`):v=`signup`),r===`copy-prompt`){await $(_?.prompt||``),n.textContent=T(`copied`);return}N()}async function fe(e){e.preventDefault();let t=e.currentTarget,n=t.dataset.form,r=new FormData(t),i=String(r.get(`name`)||``).trim();if(!i)return;let a=r.get(`photo`),o=a&&a.size?await Ce(a):null,s=String(r.get(`memo`)||``).trim(),c=String(r.get(`category`)||``).trim();if(n===`sauce`){let e=Y(i,s);s||=J(i),c||=e.category}d.inventory[n].unshift(x(i,Number(r.get(`amount`))||0,String(r.get(`unit`)||`개`),c,s,o)),S(),N()}async function pe(e){e.preventDefault();let t=new FormData(e.currentTarget),n=String(t.get(`email`)).trim();await Te(n),d.user={email:n,joinedAt:new Date().toISOString(),provider:`cloudflare-ready-local`},S(),v=null,f=`home`,N()}function me(e){e.preventDefault();let[t,n]=e.currentTarget.dataset.editForm.split(`:`),r=d.inventory[t]?.find(e=>e.id===n);if(!r)return;let i=new FormData(e.currentTarget);r.name=String(i.get(`name`)||``).trim()||r.name,r.amount=Number(i.get(`amount`))||0,r.unit=String(i.get(`unit`)||``).trim()||r.unit,r.category=String(i.get(`category`)||``).trim(),r.memo=String(i.get(`memo`)||``).trim(),t===`sauce`&&!r.memo&&(r.memo=J(r.name)),S(),v=null,N()}function he(e){let[t,n]=e.split(`:`),r=d.inventory[t].find(e=>e.id===n);r&&(r.amount=Math.max(0,Number(r.amount)-1),S(),N())}function ge(e){let[t,n]=e.split(`:`);d.inventory[t]=d.inventory[t].filter(e=>e.id!==n),S(),N()}function _e(){let e=[...d.inventory.fridge,...d.inventory.freezer,...d.inventory.sauce,...d.inventory.room].filter(e=>Number(e.amount)>0),t=e.map(e=>e.name),n=e.map(e=>D(e.name)),r=a.find(([e])=>e===h),i=t.slice(0,5),o=n.slice(0,5),s=i.map(e=>c[e]||e),l=r?d.lang===`ko`?r[1]:r[2]:T(`recipeFallback`),u=r?.[2]||`easy home cooking`,f=d.lang===`ko`?`${l} ${g}${T(`servingsSuffix`)}`:`${l} for ${g} ${T(`servingsSuffix`)}`,p=`${u} for ${g} servings`,m=ve(h,g).filter(e=>!t.some(t=>e.includes(t)||e.includes(D(t)))),v=o.join(`, `)||T(`basicIngredients`),y=be(u,s),b=d.lang===`ko`?`${o.join(`, `)||`집에 있는 재료`}가 한 접시에 보기 좋게 담기고, 윤기와 김이 살아 있어 완성 이미지를 만들면 따뜻한 집밥 느낌이 나요.`:y;_={title:f,summary:E(T(`recipeSummary`),{items:v}),shopping:m,steps:[{title:T(`stepPrepTitle`),text:E(T(`stepPrepText`),{items:o.join(`, `)||T(`storageIngredients`),servings:g})},{title:T(`stepHeatTitle`),text:T(`stepHeatText`)},{title:T(`stepSeasonTitle`),text:T(`stepSeasonText`)},{title:T(`stepPlateTitle`),text:T(`stepPlateText`)}],visual:b,prompt:xe(p,s,u,y)},ye(),S()}function ve(e,t){let n=Number(t)||1,r={fridgeClean:[`달걀 ${n}개`,`대파 조금`,`간장 1스푼`],snack:[`식빵 ${n}장`,`치즈`,`달걀 1개`],dessert:[`우유`,`설탕`,`과일`],bread:[`강력분`,`이스트`,`버터`],party:[`고기`,`채소`,`소스`],korean:[`밥`,`간장`,`참기름`],japanese:[`우동면`,`쯔유`,`달걀`],chinese:[`대파`,`간장`,`굴소스`],meat:[`고기`,`소금`,`후추`],quick:[`달걀`,`밥`,`간장`]},i={fridgeClean:[`egg ${n} pcs`,`green onion`,`soy sauce 1 tbsp`],snack:[`bread ${n} slices`,`cheese`,`egg 1 pc`],dessert:[`milk`,`sugar`,`fruit`],bread:[`bread flour`,`yeast`,`butter`],party:[`meat`,`vegetables`,`sauce`],korean:[`rice`,`soy sauce`,`sesame oil`],japanese:[`udon noodles`,`tsuyu`,`egg`],chinese:[`green onion`,`soy sauce`,`oyster sauce`],meat:[`meat`,`salt`,`pepper`],quick:[`egg`,`rice`,`soy sauce`]},a=d.lang===`ko`?r:i;return a[e]||a.fridgeClean}function ye(){[`fridge`,`freezer`,`sauce`,`room`].forEach(e=>{d.inventory[e].slice(0,2).forEach(t=>{t.amount=Math.max(0,Number(t.amount)-(e===`sauce`?.5:1))})})}function be(e,t){return`The final dish should look like a ${e} made with ${t.filter(Boolean).join(`, `)||`simple pantry ingredients`}: glossy, warm, generous, neatly plated, with visible textures, steam, and appetizing color contrast.`}function xe(e,t,n,r){return`Create a mouthwatering vertical smartphone food photo for "${e}". Style: ${n}. Main ingredients: ${t.filter(Boolean).join(`, `)||`simple pantry ingredients`}. Visual direction: ${r} Plate the food on a warm ceramic dish, show glossy textures, gentle steam, fresh garnish, appetizing color contrast, realistic home kitchen lighting, shallow depth of field, high detail, no text, no watermark, no hands, no packaging.`}function J(e){let t=Y(e,``);return`${t.usage} ${t.tip}`}function Y(e,t){let n=X(e),r=n?s[n]:null;return r?{category:o[r.category][w()],usage:w()===`ko`?r.usageKo:r.usageEn,tip:w()===`ko`?r.tipKo:r.tipEn}:{category:T(`defaultCategory`),usage:t||(w()===`ko`?`볶음, 무침, 국물, 소스에 조금씩 테스트하며 쓰기 좋아요.`:`Try a small amount in stir-fries, salads, soups, or sauces.`),tip:w()===`ko`?`처음 쓰는 양념은 1인분 기준 반 작은술부터 넣고 맛을 보며 늘리세요.`:`For a new seasoning, start with half a teaspoon per serving and increase after tasting.`}}function Se(e){return Object.entries(o).find(([,t])=>t.ko===e||t.en===e)?.[0]||`basic`}function X(e){return Object.keys(s).find(t=>e.includes(t)||D(t)===e)}function Ce(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}function Z(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Q(e){return Z(e)}async function $(e){try{await navigator.clipboard.writeText(e);return}catch{let e=document.querySelector(`.copy-box textarea`);if(!e)return;e.focus(),e.select();try{document.execCommand(`copy`)}catch{}}}function we(){`serviceWorker`in navigator&&(location.hostname===`127.0.0.1`||location.hostname===`localhost`||window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})}))}async function Te(e){try{await fetch(`./api/users`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,app:`yorijambaengi`})})}catch{}}function Ee(){let e=new URLSearchParams(window.location.search).get(`shortcut`);e===`sauce`&&(f=`sauce`),e===`recipe`&&(f=`home`)}ne(),N();