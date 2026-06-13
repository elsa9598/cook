(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`yorijambaengi-state-v1`,t=`yorijambaengi-free-popup-date`,n={login:`Login`,signup:`가입하기`,logout:`로그아웃`,lang:`EN`,back:`Back`,homeSmall:`홈`,homeBig:`요리초보 추천`,premiumBig:`프리미엄 요리실`,premiumNav:`프리미엄`,heroTitleLine1:`있는 재료로`,heroTitleLine2:`쉬운 요리`,heroCopy:`냉장고, 냉동고, 양념, 실온 먹거리를 보고 몇 인분인지에 맞춰 쉬운 요리를 추천해요.`,trial:`무료체험`,trialCopy:`가입 전 3일 동안 사용 가능`,signupRequired:`가입 필요`,joinNow:`무료 가입`,storageNow:`현재 내 보관함`,cookStart:`요리 본격 시작`,servings:`몇 인분`,makeRecipe:`추천 받기`,pantrySmall:`보관함`,fridgeBig:`신선고`,freezerBig:`얼음창고`,sauceBig:`맛보관소`,roomBig:`실온바구니`,addItem:`재료 추가`,name:`이름`,amount:`수량`,unit:`단위`,photo:`카메라/사진`,save:`저장`,category:`카테고리`,memo:`메모`,detail:`상세`,use:`사용`,delete:`삭제`,deleteSymbol:`-`,edit:`수정`,editItem:`재료 수정`,cancel:`취소`,saveEdit:`수정 저장`,empty:`아직 저장된 재료가 없어요.`,seasonTitle:`양념보관창고`,allSeasonings:`전체 양념`,recipeSmall:`요리순서`,ingredientAmounts:`정확한 계량`,shopping:`장보기 재료`,steps:`요리 순서`,copyPrompt:`최종 이미지 영어 프롬프트 복사`,copied:`복사 완료`,authTitle:`요리젬뱅이 신규 가입`,authCopy:`무료 가입에는 개인 정보로 이메일만 저장해요. 비밀번호는 화면 확인용이며 앱에 저장하지 않습니다.`,closeToday:`오늘 닫기`,lockedTitle:`4일째부터는 가입 후 사용 가능`,lockedCopy:`홈 화면은 볼 수 있지만 보관함, 요리 추천, 상세 기능은 무료 가입 후 열려요.`,cloudflareNote:``,celebrateTitle:`가입 축하해요!`,celebrateCopy:`이제 보관함, 요리 추천, 최종 이미지 프롬프트까지 모두 사용할 수 있어요.`,startPremium:`프리미엄 시작`,searchWeb:`무료 웹 검색`,joinedCopy:`가입 완료. 모든 기능 사용 가능`,savedCount:`개 저장`,exampleSauce:`예: 간장`,exampleIngredient:`예: 양파`,defaultUnitSauce:`스푼`,defaultUnitItem:`개`,defaultSauceCategory:`기본 간`,sauceMemoPlaceholder:`자동 설명이 없으면 직접 적어도 좋아요.`,itemMemoPlaceholder:`보관 위치나 유통기한 메모`,defaultCategory:`기본`,all:`전체`,noShopping:`추가 장보기 없이 가능해요.`,promptLabel:`ChatGPT 이미지 생성용 영어 프롬프트`,fabTitle:`요리 시작`,bottomCold:`냉장/냉동`,bottomSauce:`양념`,bottomRoom:`실온`,email:`이메일`,password:`비밀번호`,confirm:`확인`,searchHint:`검색 힌트: 무료 웹 검색에서 “{name} 요리 활용법”으로 찾아 상세 설명과 팁을 보강할 수 있어요.`,recipeFallback:`오늘의 요리`,servingsSuffix:`인분`,basicIngredients:`기본 재료`,storageIngredients:`보관 재료`,recipeSummary:`{items} 중심의 초보용 추천이에요. 없는 재료는 장보기 목록에 따로 뺐어요.`,stepPrepTitle:`재료 모으기`,stepPrepText:`{items}를 꺼내고 {servings}인분 기준으로 먹기 좋은 크기로 준비해요.`,stepHeatTitle:`기본 익히기`,stepHeatText:`팬을 중불로 달군 뒤 단단한 재료부터 넣고, 수분 많은 재료는 나중에 넣어 식감이 무너지지 않게 해요.`,stepSeasonTitle:`양념 맞추기`,stepSeasonText:`간장, 고추장, 소금 같은 양념은 한 번에 많이 넣지 말고 반씩 넣어 맛을 보며 조절해요.`,stepPlateTitle:`담아내기`,stepPlateText:`마지막에 참기름이나 후추처럼 향이 나는 재료를 조금 넣고 따뜻할 때 그릇에 담아요.`,finalVisual:`완성 비주얼`,finalVisualText:`따뜻한 접시에 윤기 나는 재료가 보기 좋게 담기고, 주재료의 색과 김이 살아 있는 집밥 비주얼로 완성돼요.`,smartChef:`똑똑한 요리사`,sourceInternet:`무료 레시피 DB 참고`,sourceLocal:`로컬 셰프 규칙`,referenceRecipe:`참고 요리`},r={login:`Login`,signup:`Join`,logout:`Logout`,lang:`KO`,back:`Back`,homeSmall:`Home`,homeBig:`Easy Cook`,premiumBig:`Premium Kitchen`,premiumNav:`Premium`,heroTitleLine1:`Easy meals`,heroTitleLine2:`from your kitchen`,heroCopy:`The app checks fridge, freezer, seasonings, and room-temp foods to suggest easy recipes by serving size.`,trial:`Trial`,trialCopy:`3 days before sign-up is required`,signupRequired:`Sign-up required`,joinNow:`Join free`,storageNow:`My storage`,cookStart:`Start cooking`,servings:`Servings`,makeRecipe:`Recommend`,pantrySmall:`Storage`,fridgeBig:`Fresh Box`,freezerBig:`Ice Vault`,sauceBig:`Flavor Shelf`,roomBig:`Room Basket`,addItem:`Add item`,name:`Name`,amount:`Amount`,unit:`Unit`,photo:`Camera/photo`,save:`Save`,category:`Category`,memo:`Memo`,detail:`Detail`,use:`Use`,delete:`Delete`,deleteSymbol:`-`,edit:`Edit`,editItem:`Edit item`,cancel:`Cancel`,saveEdit:`Save edit`,empty:`Nothing saved yet.`,seasonTitle:`Seasoning Storage`,allSeasonings:`All seasonings`,recipeSmall:`Recipe`,ingredientAmounts:`Exact measurements`,shopping:`Shopping list`,steps:`Cooking order`,copyPrompt:`Copy final image prompt`,copied:`Copied`,authTitle:`Create cooking account`,authCopy:`Free sign-up stores only your email as personal information. The password is checked on screen and is not saved in this app.`,closeToday:`Close today`,lockedTitle:`Sign-up required from day 4`,lockedCopy:`Home remains visible, but storage, recipe, and detail features open after free sign-up.`,cloudflareNote:``,celebrateTitle:`Welcome aboard!`,celebrateCopy:`Storage, recipe recommendations, and final image prompts are now unlocked.`,startPremium:`Start Premium`,searchWeb:`Free web search`,joinedCopy:`Joined. All features are available.`,savedCount:`saved`,exampleSauce:`e.g. soy sauce`,exampleIngredient:`e.g. onion`,defaultUnitSauce:`tbsp`,defaultUnitItem:`pcs`,defaultSauceCategory:`Basic seasoning`,sauceMemoPlaceholder:`If auto details are missing, add your own note.`,itemMemoPlaceholder:`Storage spot or expiry note`,defaultCategory:`Basic`,all:`All`,noShopping:`No extra shopping needed.`,promptLabel:`English prompt for ChatGPT image generation`,fabTitle:`Start cooking`,bottomCold:`Cold`,bottomSauce:`Seasoning`,bottomRoom:`Room`,email:`Email`,password:`Password`,confirm:`OK`,searchHint:`Search hint: use free web search for "{name} cooking uses" to improve the saved details and tips.`,recipeFallback:`Today's meal`,servingsSuffix:`servings`,basicIngredients:`basic ingredients`,storageIngredients:`stored ingredients`,recipeSummary:`A beginner-friendly recipe built around {items}. Missing ingredients are separated into the shopping list.`,stepPrepTitle:`Gather ingredients`,stepPrepText:`Take out {items} and prep them into easy-to-cook pieces for {servings} servings.`,stepHeatTitle:`Cook the base`,stepHeatText:`Heat the pan over medium heat, add firm ingredients first, and add watery ingredients later so the texture stays intact.`,stepSeasonTitle:`Adjust seasoning`,stepSeasonText:`Add soy sauce, chili paste, or salt in small portions, taste, then adjust gradually.`,stepPlateTitle:`Plate and finish`,stepPlateText:`Add fragrant ingredients like sesame oil or pepper at the end, then plate while warm.`,finalVisual:`Final visual`,finalVisualText:`The finished dish looks glossy and hearty on a warm ceramic plate, with the main ingredients clearly visible and a fresh home-cooked feel.`,smartChef:`Smart chef`,sourceInternet:`Free recipe DB reference`,sourceLocal:`Local chef rules`,referenceRecipe:`Reference recipe`},i={fridge:{ko:`신선고`,en:`Fresh Box`,emoji:`🥬`,descKo:`냉장 재료`,descEn:`Chilled ingredients`},freezer:{ko:`얼음창고`,en:`Ice Vault`,emoji:`🧊`,descKo:`냉동 재료`,descEn:`Frozen ingredients`},sauce:{ko:`맛보관소`,en:`Flavor Shelf`,emoji:`🧂`,descKo:`양념과 소스`,descEn:`Seasonings and sauces`},room:{ko:`실온바구니`,en:`Room Basket`,emoji:`🍞`,descKo:`실온 먹거리`,descEn:`Room-temp foods`}},a=[[`fridgeClean`,`냉장고 털기`,`Clear-out meal`,`🥘`],[`snack`,`간식`,`Snack`,`🍙`],[`dessert`,`디저트`,`Dessert`,`🍮`],[`bread`,`빵만들기`,`Bread`,`🥖`],[`party`,`파티`,`Party`,`🎉`],[`korean`,`한식`,`Korean`,`🍚`],[`japanese`,`일식`,`Japanese`,`🍱`],[`chinese`,`중식`,`Chinese`,`🥡`],[`meat`,`고기굽기`,`Grill meat`,`🥩`],[`quick`,`초간단 한끼`,`Quick meal`,`⚡`]],o={basic:{ko:`기본 간`,en:`Basic seasoning`},sauce:{ko:`소스`,en:`Sauces`},oil:{ko:`기름/향`,en:`Oils and aroma`},spicy:{ko:`매운맛`,en:`Spicy`},sweet:{ko:`단맛`,en:`Sweet`},herb:{ko:`향신료`,en:`Spices and herbs`}},s={간장:{category:`basic`,usageKo:`볶음, 조림, 덮밥, 국물 간에 좋아요.`,usageEn:`Good for stir-fries, braises, rice bowls, and soup seasoning.`,tipKo:`1인분 기준 1작은술부터 넣고 마지막에 간을 맞추세요.`,tipEn:`Start with 1 teaspoon per serving, then adjust at the end.`},고추장:{category:`spicy`,usageKo:`비빔, 볶음, 찌개, 양념구이에 잘 맞아요.`,usageEn:`Works well in mixed rice, stir-fries, stews, and spicy grilled marinades.`,tipKo:`단맛이 있어 설탕은 적게 넣고 물이나 육수로 풀면 덜 뭉쳐요.`,tipEn:`It is already a little sweet, so reduce sugar and loosen it with water or stock.`},된장:{category:`basic`,usageKo:`국, 찌개, 나물 무침, 고기 밑간에 좋아요.`,usageEn:`Good for soups, stews, seasoned greens, and meat marinades.`,tipKo:`오래 끓이면 텁텁할 수 있어 중후반에 풀어 넣으세요.`,tipEn:`Add it in the middle or later so the flavor stays clean.`},소금:{category:`basic`,usageKo:`모든 기본 간, 데치기, 굽기 전 밑간에 사용해요.`,usageEn:`Use for basic seasoning, blanching water, and pre-seasoning before grilling.`,tipKo:`한 번에 많이 넣지 말고 두 꼬집씩 나눠 넣으세요.`,tipEn:`Add two pinches at a time instead of salting heavily at once.`},설탕:{category:`sweet`,usageKo:`볶음, 조림, 양념장, 디저트에 단맛과 윤기를 줘요.`,usageEn:`Adds sweetness and gloss to stir-fries, braises, sauces, and desserts.`,tipKo:`간장 요리에는 설탕을 먼저 넣으면 재료 속까지 맛이 들어요.`,tipEn:`For soy-based dishes, add sugar early so the flavor soaks in.`},참기름:{category:`oil`,usageKo:`나물, 비빔밥, 완성 직전 향내기에 좋아요.`,usageEn:`Best for seasoned greens, bibimbap, and finishing aroma.`,tipKo:`센 불에서 오래 가열하지 말고 마지막에 둘러 향을 살리세요.`,tipEn:`Do not cook it long over high heat; drizzle at the end for aroma.`},후추:{category:`herb`,usageKo:`고기, 달걀, 크림, 볶음요리의 잡내를 줄여요.`,usageEn:`Helps balance meat, eggs, creamy dishes, and stir-fries.`,tipKo:`완성 직전 갈아 넣으면 향이 더 선명해요.`,tipEn:`Grind it right before serving for a clearer aroma.`},식초:{category:`sauce`,usageKo:`초무침, 냉채, 소스, 느끼한 맛 잡기에 좋아요.`,usageEn:`Great for sour salads, chilled dishes, sauces, and cutting richness.`,tipKo:`가열하면 향이 날아가니 불을 끈 뒤 넣으세요.`,tipEn:`Add after turning off the heat so the acidity stays bright.`}},c={달걀:`egg`,대파:`green onion`,두부:`tofu`,양파:`onion`,당근:`carrot`,애호박:`zucchini`,김치:`kimchi`,우유:`milk`,치즈:`cheese`,버터:`butter`,"냉동 만두":`frozen dumplings`,냉동밥:`frozen rice`,"냉동 대패삼겹살":`frozen thin pork belly`,"냉동 새우":`frozen shrimp`,"냉동 브로콜리":`frozen broccoli`,"냉동 블루베리":`frozen blueberries`,간장:`soy sauce`,고추장:`gochujang`,된장:`doenjang`,소금:`salt`,설탕:`sugar`,참기름:`sesame oil`,후추:`black pepper`,식초:`vinegar`,고춧가루:`gochugaru`,식용유:`cooking oil`,굴소스:`oyster sauce`,마요네즈:`mayonnaise`,케첩:`ketchup`,식빵:`bread slices`,라면:`instant noodles`,쌀:`rice`,밥:`cooked rice`,파스타면:`pasta`,참치캔:`canned tuna`,김:`seaweed sheets`,감자:`potato`,고구마:`sweet potato`,밀가루:`flour`},l={개:`pcs`,단:`bunch`,모:`block`,스푼:`tbsp`,장:`slices`,봉:`packs`,컵:`cups`,캔:`cans`,봉지:`bags`,통:`bottles`},u={단백질:`Protein`,채소:`Vegetable`,간편식:`Convenience food`,냉동재료:`Frozen ingredients`,"기본 간":`Basic seasoning`,매운맛:`Spicy`,단맛:`Sweet`,향신료:`Spices and herbs`,"기름/향":`Oils and aroma`,소스:`Sauce`,통조림:`Canned food`,곡물:`Grain`,구황작물:`Root vegetable`,빵:`Bread`,면:`Noodles`,유제품:`Dairy`,기본:`Basic`},d={fridgeClean:{koTitle:`냉장고 털이 볶음`,enTitle:`fridge clean-out stir-fry`,searchTerms:[`stir fry`,`fried rice`,`omelette`],allow:[`달걀`,`대파`,`두부`,`양파`,`당근`,`애호박`,`김치`,`냉동 만두`,`냉동밥`,`간장`,`고추장`,`참기름`,`소금`,`후추`,`식용유`,`밥`],required:[`달걀`,`대파`,`간장`,`식용유`],methodKo:[`재료를 한입 크기로 썰고 물기 많은 재료는 따로 둬요.`,`팬에 식용유를 두르고 대파를 먼저 볶아 향을 내요.`,`단단한 재료, 부드러운 재료 순서로 넣고 간장으로 간을 맞춰요.`,`마지막에 참기름이나 후추를 넣고 따뜻하게 담아요.`],methodEn:[`Cut everything into bite-size pieces and keep watery ingredients aside.`,`Heat oil and stir-fry green onion first for aroma.`,`Add firm ingredients, then tender ones, and season with soy sauce.`,`Finish with sesame oil or pepper and plate while warm.`]},snack:{koTitle:`초간단 토스트 간식`,enTitle:`quick toasted snack`,searchTerms:[`sandwich`,`toast`,`omelette`],allow:[`식빵`,`달걀`,`치즈`,`버터`,`마요네즈`,`케첩`,`참치캔`,`감자`,`고구마`,`우유`,`설탕`],required:[`식빵`,`치즈`,`버터`],methodKo:[`식빵에 버터를 얇게 바르고 치즈나 달걀을 준비해요.`,`팬을 약불로 달군 뒤 빵을 노릇하게 구워요.`,`속재료를 넣고 반으로 접거나 한 장 더 덮어 따뜻하게 눌러요.`,`먹기 좋은 크기로 자르고 소스를 조금 곁들여요.`],methodEn:[`Spread a thin layer of butter on bread and prepare cheese or egg.`,`Toast the bread gently over low heat until golden.`,`Add the filling and fold or press with another slice.`,`Cut into easy pieces and add a small sauce accent.`]},dessert:{koTitle:`우유 달걀 팬 디저트`,enTitle:`milk and egg pan dessert`,searchTerms:[`pancake`,`dessert`,`cake`],allow:[`우유`,`달걀`,`설탕`,`버터`,`식빵`,`밀가루`,`고구마`,`냉동 블루베리`],required:[`우유`,`설탕`,`달걀`,`버터`,`냉동 블루베리`,`밀가루`],visualHintKo:`노릇하게 부푼 가장자리, 촉촉한 노란 커스터드 속, 블루베리와 설탕이 보이는 작은 팬 디저트`,visualHintEn:`a golden skillet custard pancake with puffed browned edges, a soft yellow center, blueberries embedded on top, and a light powdered sugar dusting`,methodKo:[`우유, 달걀, 설탕을 부드럽게 섞어 달콤한 베이스를 만들어요.`,`식빵이나 고구마처럼 단맛과 어울리는 재료만 넣어요.`,`약불에서 천천히 익혀 겉은 촉촉하고 가장자리는 살짝 노릇하게 만들어요.`,`블루베리나 설탕을 살짝 올려 디저트처럼 마무리해요.`],methodEn:[`Whisk milk, egg, and sugar into a soft sweet base.`,`Use dessert-friendly ingredients like bread or sweet potato only.`,`Cook slowly over low heat until moist with lightly golden edges.`,`Finish with blueberries or a light dusting of sugar.`]},bread:{koTitle:`초보 팬브레드`,enTitle:`beginner pan bread`,searchTerms:[`bread`,`pancake`,`scone`],allow:[`밀가루`,`우유`,`버터`,`설탕`,`소금`,`달걀`,`식빵`,`치즈`],required:[`밀가루`,`우유`,`버터`,`설탕`,`소금`],visualHintKo:`팬에서 구운 둥근 빵, 노릇한 표면, 버터가 녹아 윤기 나는 초보용 팬브레드`,visualHintEn:`a round beginner pan bread cooked in a skillet, golden brown outside, soft crumb inside, with melted butter gloss on top`,methodKo:[`밀가루, 우유, 설탕, 소금을 섞어 되직한 반죽을 만들어요.`,`버터를 조금 넣어 반죽 표면이 부드러워질 때까지 섞어요.`,`약불 팬에 반죽을 올리고 뚜껑을 덮어 천천히 익혀요.`,`겉이 노릇하고 속이 촉촉해지면 버터 향이 나게 마무리해요.`],methodEn:[`Mix flour, milk, sugar, and salt into a thick batter.`,`Fold in a little butter until the surface looks smooth.`,`Cook the batter slowly in a covered pan over low heat.`,`Finish when the outside is golden and the inside stays soft.`]},party:{koTitle:`파티 한입 플래터`,enTitle:`party bite platter`,searchTerms:[`canape`,`starter`,`shrimp`],allow:[`치즈`,`식빵`,`참치캔`,`냉동 새우`,`냉동 브로콜리`,`감자`,`마요네즈`,`케첩`,`후추`,`식용유`],required:[`치즈`,`식빵`,`마요네즈`],methodKo:[`빵, 치즈, 단백질 재료를 한입 크기로 준비해요.`,`새우나 감자는 먼저 익히고 물기를 줄여요.`,`마요네즈나 케첩으로 작은 소스 포인트를 만들어요.`,`색이 다른 재료가 번갈아 보이게 접시에 담아요.`],methodEn:[`Prepare bread, cheese, and protein ingredients in bite-size pieces.`,`Cook shrimp or potatoes first and reduce moisture.`,`Add small accents of mayonnaise or ketchup.`,`Arrange contrasting colors across the plate.`]},korean:{koTitle:`집밥 한식 볶음`,enTitle:`Korean home-style stir-fry`,searchTerms:[`Bibimbap`,`Kimchi`,`rice`],allow:[`밥`,`쌀`,`김치`,`두부`,`대파`,`양파`,`달걀`,`냉동 대패삼겹살`,`간장`,`고추장`,`된장`,`참기름`,`고춧가루`,`소금`],required:[`쌀`,`김치`,`참기름`],methodKo:[`밥이나 두부를 중심으로 김치와 대파를 준비해요.`,`팬에 대파를 볶은 뒤 김치를 넣어 신맛을 부드럽게 만들어요.`,`간장이나 고추장으로 간을 맞추고 주재료를 넣어 볶아요.`,`마지막에 참기름을 둘러 한식 집밥 향을 살려요.`],methodEn:[`Prepare rice or tofu with kimchi and green onion.`,`Stir-fry green onion first, then kimchi to soften the acidity.`,`Season with soy sauce or gochujang and add the main ingredient.`,`Finish with sesame oil for a Korean home-cooked aroma.`]},japanese:{koTitle:`일식풍 달걀 덮밥`,enTitle:`Japanese-style egg rice bowl`,searchTerms:[`Japanese`,`Teriyaki`,`rice bowl`],allow:[`밥`,`쌀`,`달걀`,`양파`,`대파`,`두부`,`간장`,`설탕`,`식초`,`냉동 새우`,`김`],required:[`쌀`,`달걀`,`간장`],methodKo:[`밥 위에 올릴 달걀과 양파를 준비해요.`,`간장과 설탕을 아주 조금 넣어 짭조름한 소스를 만들어요.`,`양파를 먼저 익힌 뒤 달걀을 부드럽게 풀어 넣어요.`,`밥 위에 올리고 김이나 대파를 살짝 더해요.`],methodEn:[`Prepare egg and onion for a rice bowl topping.`,`Make a light savory sauce with soy sauce and a little sugar.`,`Cook onion first, then softly set the egg.`,`Spoon over rice and finish with seaweed or green onion.`]},chinese:{koTitle:`중식풍 대파 볶음`,enTitle:`Chinese-style scallion stir-fry`,searchTerms:[`Chinese`,`fried rice`,`stir fry`],allow:[`대파`,`양파`,`당근`,`냉동 새우`,`달걀`,`밥`,`냉동밥`,`간장`,`굴소스`,`식용유`,`후추`],required:[`대파`,`간장`,`굴소스`],methodKo:[`대파와 양파를 넉넉히 썰어 향을 준비해요.`,`식용유를 두른 팬에서 대파를 먼저 볶아요.`,`밥이나 새우, 달걀을 넣고 센 불 느낌으로 빠르게 볶아요.`,`간장과 굴소스를 조금 넣어 윤기 있게 마무리해요.`],methodEn:[`Slice plenty of scallion and onion for aroma.`,`Stir-fry scallion first in hot oil.`,`Add rice, shrimp, or egg and toss quickly.`,`Finish glossy with soy sauce and oyster sauce.`]},meat:{koTitle:`기본 고기 굽기`,enTitle:`simple grilled meat`,searchTerms:[`grilled`,`pork`,`beef`],allow:[`냉동 대패삼겹살`,`양파`,`대파`,`마늘`,`소금`,`후추`,`식용유`,`간장`,`참기름`,`김치`],required:[`냉동 대패삼겹살`,`소금`,`후추`],methodKo:[`고기는 키친타월로 물기를 줄이고 소금, 후추로 밑간해요.`,`팬을 충분히 달군 뒤 고기를 펼쳐 올려요.`,`한쪽 면이 노릇해지면 뒤집고 양파나 대파를 곁들여요.`,`기름을 살짝 빼고 따뜻한 접시에 담아요.`],methodEn:[`Pat the meat dry and season with salt and pepper.`,`Heat the pan well and spread the meat in a single layer.`,`Flip when browned and add onion or green onion.`,`Drain excess fat slightly and plate while hot.`]},quick:{koTitle:`초간단 달걀밥`,enTitle:`quick egg rice`,searchTerms:[`egg`,`rice`,`omelette`],allow:[`밥`,`냉동밥`,`달걀`,`간장`,`참기름`,`김`,`대파`,`후추`],required:[`쌀`,`달걀`,`간장`],methodKo:[`밥을 따뜻하게 데우고 달걀을 준비해요.`,`달걀은 반숙이나 스크램블로 빠르게 익혀요.`,`밥에 간장과 참기름을 조금 넣고 섞어요.`,`달걀과 김을 올려 간단한 한 그릇으로 마무리해요.`],methodEn:[`Warm the rice and prepare an egg.`,`Cook the egg quickly as soft scramble or sunny-side-up.`,`Mix rice with a little soy sauce and sesame oil.`,`Top with egg and seaweed for a simple bowl.`]}},f=C(),p=`home`,m=`fridge`,h=`all`,g=`fridgeClean`,_=1,v=null,y=null;T(),et(),nt();function b(){return{createdAt:new Date().toISOString(),lang:`ko`,user:null,inventory:x()}}function x(){return{fridge:[S(`달걀`,6,`개`,`단백질`,``,null),S(`대파`,1,`단`,`채소`,``,null),S(`두부`,1,`모`,`단백질`,``,null),S(`양파`,2,`개`,`채소`,``,null),S(`당근`,1,`개`,`채소`,``,null),S(`애호박`,1,`개`,`채소`,``,null),S(`김치`,1,`통`,`기본`,``,null),S(`우유`,1,`통`,`유제품`,``,null),S(`치즈`,4,`장`,`유제품`,``,null),S(`버터`,1,`개`,`유제품`,``,null)],freezer:[S(`냉동 만두`,12,`개`,`간편식`,``,null),S(`냉동밥`,2,`개`,`간편식`,``,null),S(`냉동 대패삼겹살`,1,`봉지`,`냉동재료`,``,null),S(`냉동 새우`,1,`봉지`,`냉동재료`,``,null),S(`냉동 브로콜리`,1,`봉지`,`냉동재료`,``,null),S(`냉동 블루베리`,1,`봉지`,`냉동재료`,``,null)],sauce:[S(`간장`,7,`스푼`,`기본 간`,Z(`간장`),null),S(`고추장`,3,`스푼`,`매운맛`,Z(`고추장`),null),S(`참기름`,2,`스푼`,`기름/향`,Z(`참기름`),null),S(`된장`,4,`스푼`,`기본 간`,Z(`된장`),null),S(`소금`,6,`스푼`,`기본 간`,Z(`소금`),null),S(`설탕`,6,`스푼`,`단맛`,Z(`설탕`),null),S(`후추`,5,`스푼`,`향신료`,Z(`후추`),null),S(`식초`,4,`스푼`,`소스`,Z(`식초`),null),S(`고춧가루`,4,`스푼`,`매운맛`,``,null),S(`식용유`,1,`통`,`기름/향`,``,null),S(`굴소스`,2,`스푼`,`소스`,``,null),S(`마요네즈`,1,`통`,`소스`,``,null),S(`케첩`,1,`통`,`소스`,``,null)],room:[S(`식빵`,4,`장`,`빵`,``,null),S(`라면`,2,`봉`,`면`,``,null),S(`쌀`,3,`컵`,`곡물`,``,null),S(`파스타면`,1,`봉지`,`면`,``,null),S(`참치캔`,2,`캔`,`통조림`,``,null),S(`김`,5,`장`,`기본`,``,null),S(`감자`,3,`개`,`구황작물`,``,null),S(`고구마`,2,`개`,`구황작물`,``,null),S(`밀가루`,2,`컵`,`곡물`,``,null)]}}function S(e,t,n,r,i,a){return{id:crypto.randomUUID(),name:e,amount:t,unit:n,category:r,memo:i,photo:a,createdAt:new Date().toISOString()}}function C(){try{let t=localStorage.getItem(e);return t?{...b(),...JSON.parse(t)}:b()}catch{return b()}}function w(){localStorage.setItem(e,JSON.stringify(f))}function T(){let e=x();f.inventory=f.inventory||{},Object.entries(e).forEach(([e,t])=>{f.inventory[e]=Array.isArray(f.inventory[e])?f.inventory[e]:[],t.forEach(t=>{f.inventory[e].some(e=>e.name===t.name)||f.inventory[e].push(t)})}),w()}function E(){try{return f?.lang||`ko`}catch{return`ko`}}function D(e){return(E()===`ko`?n:r)[e]||e}function O(e,t){return Object.entries(t).reduce((e,[t,n])=>e.replaceAll(`{${t}}`,n),e)}function k(e){return E()===`ko`?e:c[e]||e}function A(e){return E()===`ko`?e:l[e]||e}function j(e){return e?o[e]?.[E()]||(E()===`ko`?e:u[e]||e):D(`defaultCategory`)}function M(e,t){return t===`sauce`&&Xe(e.name)?Z(e.name):e.memo}function N(){if(f.user)return!1;let e=new Date(f.createdAt).getTime();return Date.now()-e>=1440*60*1e3*3}function ee(){let e=new Date(f.createdAt).getTime(),t=Math.floor((Date.now()-e)/(1440*60*1e3))+1;return Math.max(1,Math.min(t,4))}function P(){return!!f.user||!N()}function te(){if(f.user||N())return;let e=new Date().toISOString().slice(0,10);localStorage.getItem(t)!==e&&(y=`signup`)}function F(){let e=document.querySelector(`#app`);e.innerHTML=`
    <div class="phone-shell">
      ${ne()}
      ${re()}
      <main class="content">${ae()}</main>
      ${he()}
      ${ge()}
      ${_e()}
    </div>
  `,Se()}function ne(){let e=f.user?f.user.email.split(`@`)[0]:D(`login`),t=f.user?D(`logout`):D(`signup`);return`
    <header class="top-auth">
      <button class="ghost-pill auth-left" data-action="login">${e}</button>
      <button class="${f.user?`ghost-pill`:`dark-pill`} auth-center" data-action="${f.user?`logout`:`signup`}">${t}</button>
      <button class="icon-pill auth-right" data-action="toggle-lang">${D(`lang`)}</button>
    </header>
  `}function re(){let e=ie();return`
    <section class="page-panel">
      ${p===`home`?``:`<button class="back-button" data-action="back">${D(`back`)}</button>`}
      <h1 class="big-title">${e.big}</h1>
    </section>
  `}function ie(){return p===`home`?{small:f.user?`Premium`:D(`homeSmall`),big:f.user?D(`premiumBig`):D(`homeBig`)}:p===`cold`?{small:D(`pantrySmall`),big:D(m===`freezer`?`freezerBig`:`fridgeBig`)}:p===`sauce`?{small:D(`seasonTitle`),big:D(`sauceBig`)}:p===`room`?{small:D(`pantrySmall`),big:D(`roomBig`)}:p===`recipe`?{small:D(`recipeSmall`),big:v?.title||D(`cookStart`)}:{small:D(`homeSmall`),big:D(`homeBig`)}}function ae(){return!P()&&p!==`home`?me():p===`home`?I():p===`cold`?se(m):p===`sauce`?de():p===`room`?se(`room`):p===`recipe`?fe():I()}function I(){let e=!P();return`
    <section class="hero-band">
      <h2 class="hero-title"><span>${D(`heroTitleLine1`)}</span><span>${D(`heroTitleLine2`)}</span></h2>
      <p>${D(`heroCopy`)}</p>
    </section>
    <section class="trial-strip">
      <div>
        <strong>${f.user?`Premium`:e?D(`signupRequired`):`${D(`trial`)} ${ee()}/3`}</strong>
        <span>${f.user?D(`joinedCopy`):D(`trialCopy`)}</span>
      </div>
      ${f.user?``:`<button class="pill" data-action="signup">${D(`joinNow`)}</button>`}
    </section>
    ${e?me():``}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${D(`storageNow`)}</h2>
      </div>
      <div class="grid-2">
        ${Object.entries(i).map(([e,t])=>oe(e,t)).join(``)}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${D(`cookStart`)}</h2>
        <label class="field" style="width: 96px">
          <span>${D(`servings`)}</span>
          <input type="number" min="1" max="12" value="${_}" data-input="servings" />
        </label>
      </div>
      <div class="cook-grid">
        ${a.map(([e,t,n,r])=>`
              <button class="cook-card ${g===e?`active`:``}" data-cook="${e}">
                <span class="cook-emoji">${r}</span>
                <strong>${f.lang===`ko`?t:n}</strong>
              </button>
            `).join(``)}
      </div>
      <div style="margin-top: 12px">
        <button class="pill" style="width: 100%; min-height: 46px" data-action="make-recipe">${D(`makeRecipe`)}</button>
      </div>
    </section>
  `}function oe(e,t){let n=f.inventory[e].length,r=f.lang===`ko`?t.ko:t.en,i=f.lang===`ko`?t.descKo:t.descEn;return`
    <button class="storage-card" data-storage-jump="${e}">
      <span class="storage-emoji">${t.emoji}</span>
      <strong>${r}</strong>
      <span>${i} · ${n} ${D(`savedCount`)}</span>
    </button>
  `}function se(e){return`
    ${e===`fridge`||e===`freezer`?ce():``}
    ${le(e)}
    <section class="section">
      <div class="item-list">
        ${f.inventory[e].length?f.inventory[e].map(t=>ue(t,e)).join(``):`<div class="card empty">${D(`empty`)}</div>`}
      </div>
    </section>
  `}function ce(){return`
    <div class="category-row">
      <button class="chip ${m===`fridge`?`active`:``}" data-set-storage="fridge">🥬 ${D(`fridgeBig`)}</button>
      <button class="chip ${m===`freezer`?`active`:``}" data-set-storage="freezer">🧊 ${D(`freezerBig`)}</button>
    </div>
  `}function le(e){let t=e===`sauce`;return`
    <section class="section card">
      <div class="section-head">
        <h2 class="section-title">${D(`addItem`)}</h2>
      </div>
      <form class="form-grid" data-form="${e}">
        <div class="field">
          <label>${D(`photo`)}</label>
          <input type="file" accept="image/*" capture="environment" name="photo" />
        </div>
        <div class="field">
          <label>${D(`name`)}</label>
          <input name="name" required placeholder="${D(t?`exampleSauce`:`exampleIngredient`)}" />
        </div>
        <div class="grid-2">
          <div class="field">
            <label>${D(`amount`)}</label>
            <input name="amount" type="number" min="0" step="0.5" value="1" />
          </div>
          <div class="field">
            <label>${D(`unit`)}</label>
            <input name="unit" value="${D(t?`defaultUnitSauce`:`defaultUnitItem`)}" />
          </div>
        </div>
        <div class="field">
          <label>${D(`category`)}</label>
          <input name="category" value="${t?D(`defaultSauceCategory`):``}" />
        </div>
        <div class="field">
          <label>${D(`memo`)}</label>
          <textarea name="memo" placeholder="${D(t?`sauceMemoPlaceholder`:`itemMemoPlaceholder`)}"></textarea>
        </div>
        <button class="pill" type="submit">${D(`save`)}</button>
      </form>
    </section>
  `}function ue(e,t){return`
    <article class="inventory-item ${Number(e.amount)<=(t===`sauce`?2:1)?`low`:``}">
      <div class="thumb">${e.photo?`<img src="${e.photo}" alt="" />`:i[t].emoji}</div>
      <div>
        <p class="item-name">${k(e.name)}</p>
        <p class="item-meta">${e.amount}${A(e.unit)} · ${j(e.category)}${M(e,t)?`<br>${M(e,t)}`:``}</p>
      </div>
      <div class="item-actions">
        ${t===`sauce`?`<button class="tiny-button" data-detail="${e.id}">${D(`detail`)}</button>`:``}
        <button class="tiny-button" data-edit="${t}:${e.id}">${D(`edit`)}</button>
        <button class="tiny-button" data-use="${t}:${e.id}">${D(`use`)}</button>
        <button class="tiny-button delete-button" data-delete="${t}:${e.id}" title="${D(`delete`)}">${D(`deleteSymbol`)}</button>
      </div>
    </article>
  `}function de(){let e=h===`all`?f.inventory.sauce:f.inventory.sauce.filter(e=>Ye(e.category)===h);return`
    ${le(`sauce`)}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${D(`allSeasonings`)}</h2>
      </div>
      <div class="category-row">
        <button class="chip ${h===`all`?`active`:``}" data-season-cat="all">${D(`all`)}</button>
        ${Object.entries(o).map(([e,t])=>`<button class="chip ${h===e?`active`:``}" data-season-cat="${e}">${t[f.lang]}</button>`).join(``)}
      </div>
    </section>
    <section class="section">
      <div class="item-list">
        ${e.length?e.map(e=>ue(e,`sauce`)).join(``):`<div class="card empty">${D(`empty`)}</div>`}
      </div>
    </section>
  `}function fe(){return v?`
    <section class="recipe-hero">
      <h2>${v.title}</h2>
      <p>${v.summary}</p>
      <div class="chef-source">
        <strong>${D(`smartChef`)}</strong>
        <span>${v.sourceLabel}</span>
        ${v.reference?.name?`<small>${D(`referenceRecipe`)}: ${v.reference.name}</small>`:``}
      </div>
    </section>
    <section class="section card">
      <h2 class="section-title">${D(`ingredientAmounts`)}</h2>
      <div class="measure-list" style="margin-top: 10px">
        ${v.ingredients.map(e=>`
          <div>
            <strong>${e.label}</strong>
            <span>${e.amount}</span>
          </div>
        `).join(``)}
      </div>
    </section>
    <section class="section card">
      <h2 class="section-title">${D(`shopping`)}</h2>
      <div class="shopping-list" style="margin-top: 10px">
        ${v.shopping.length?v.shopping.map(e=>`<div>${e}</div>`).join(``):`<div>${D(`noShopping`)}</div>`}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${D(`steps`)}</h2>
      </div>
      ${v.steps.map((e,t)=>pe(e,t)).join(``)}
    </section>
    <section class="section card final-visual">
      <h2 class="section-title">${D(`finalVisual`)}</h2>
      <p>${v.visual}</p>
    </section>
    <section class="copy-box">
      <div class="field">
        <label>${D(`promptLabel`)}</label>
        <textarea readonly>${v.prompt}</textarea>
      </div>
      <button class="pill" style="width:100%; margin-top:10px" data-action="copy-prompt">${D(`copyPrompt`)}</button>
    </section>
  `:I()}function pe(e,t){return`
    <article class="step-card text-step">
      <div class="step-number">${t+1}</div>
      <div class="step-body">
        <h3>${e.title}</h3>
        <p>${e.text}</p>
      </div>
    </article>
  `}function me(){return`
    <section class="card gate">
      <div>
        <h2>${D(`lockedTitle`)}</h2>
        <p>${D(`lockedCopy`)}</p>
        <button class="pill" data-action="signup">${D(`joinNow`)}</button>
      </div>
    </section>
  `}function he(){return p===`home`?`
    <button class="fab chef-fab" data-action="make-recipe" title="${D(`fabTitle`)}" aria-label="${D(`smartChef`)}">
      <svg class="chef-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path class="chef-hat" d="M20 28c-5.2-.6-8-3.7-8-8.1 0-4.6 3.7-8.1 8.1-8.1 1.7-5 6.3-8.2 11.9-8.2s10.2 3.2 11.9 8.2c4.4 0 8.1 3.5 8.1 8.1 0 4.4-2.8 7.5-8 8.1v8H20v-8Z"/>
        <path class="chef-face" d="M21 34h22v9.5c0 6.1-4.8 10.5-11 10.5s-11-4.4-11-10.5V34Z"/>
        <path class="chef-apron" d="M24 52h16l5 8H19l5-8Z"/>
        <path class="chef-smile" d="M25 43c2.1 2.1 4.3 3.1 7 3.1s4.9-1 7-3.1"/>
        <circle class="chef-dot" cx="26" cy="39" r="1.7"/>
        <circle class="chef-dot" cx="38" cy="39" r="1.7"/>
      </svg>
    </button>
  `:``}function ge(){let e=f.user?D(`premiumNav`):D(`homeSmall`);return`
    <nav class="bottom-nav">
      ${L(`home`,f.user?`⭐`:`🏠`,e)}
      ${L(`cold`,`❄️`,D(`bottomCold`))}
      ${L(`sauce`,`🧂`,D(`bottomSauce`))}
      ${L(`room`,`🍞`,D(`bottomRoom`))}
    </nav>
  `}function L(e,t,n){return`
    <button class="bottom-tab ${p===e?`active`:``}" data-tab="${e}">
      <span class="emoji">${t}</span>
      <span class="label">${n}</span>
    </button>
  `}function _e(){return y===`signup`||y===`login`?ve(y):y===`celebrate`?ye():y?.startsWith(`detail:`)?be(y.split(`:`)[1]):y?.startsWith(`edit:`)?xe(y.split(`:`)[1],y.split(`:`)[2]):``}function ve(e){return`
    <div class="modal-backdrop">
      <form class="modal" data-auth-form="${e}">
        <h2>${D(e===`login`?`login`:`authTitle`)}</h2>
        <p>${D(`authCopy`)}</p>
        <div class="form-grid">
          <div class="field">
            <label>${D(`email`)}</label>
            <input name="email" type="email" required placeholder="cook@example.com" />
          </div>
          <div class="field">
            <label>${D(`password`)}</label>
            <input name="password" type="password" required minlength="4" />
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-pill" data-action="close-today">${D(`closeToday`)}</button>
          <button type="submit" class="pill">${D(e===`login`?`login`:`joinNow`)}</button>
        </div>
      </form>
    </div>
  `}function ye(){return`
    <div class="modal-backdrop celebration-backdrop">
      <article class="modal celebration-modal">
        <div class="confetti" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="celebration-badge">★</div>
        <h2>${D(`celebrateTitle`)}</h2>
        <p>${D(`celebrateCopy`)}</p>
        <div class="modal-actions">
          <button class="pill" data-action="close-modal">${D(`startPremium`)}</button>
        </div>
      </article>
    </div>
  `}function be(e){let t=f.inventory.sauce.find(t=>t.id===e);if(!t)return``;let n=Q(t.name,t.memo);return`
    <div class="modal-backdrop">
      <article class="modal">
        <h2>${k(t.name)}</h2>
        <p><strong>${j(t.category||n.category)}</strong> · ${t.amount}${A(t.unit)}</p>
        <p>${n.usage}</p>
        <p>${n.tip}</p>
        <p>${O(D(`searchHint`),{name:k(t.name)})}</p>
        <div class="modal-actions">
          <button class="ghost-pill" data-web-search="${t.name}">${D(`searchWeb`)}</button>
          <button class="pill" data-action="close-modal">${D(`confirm`)}</button>
        </div>
      </article>
    </div>
  `}function xe(e,t){let n=f.inventory[e]?.find(e=>e.id===t);return n?`
    <div class="modal-backdrop">
      <form class="modal" data-edit-form="${e}:${t}">
        <h2>${D(`editItem`)}</h2>
        <div class="form-grid">
          <div class="field">
            <label>${D(`name`)}</label>
            <input name="name" required value="${$(n.name)}" />
          </div>
          <div class="grid-2">
            <div class="field">
              <label>${D(`amount`)}</label>
              <input name="amount" type="number" min="0" step="0.5" value="${n.amount}" />
            </div>
            <div class="field">
              <label>${D(`unit`)}</label>
              <input name="unit" value="${$(n.unit)}" />
            </div>
          </div>
          <div class="field">
            <label>${D(`category`)}</label>
            <input name="category" value="${$(n.category||``)}" />
          </div>
          <div class="field">
            <label>${D(`memo`)}</label>
            <textarea name="memo">${Qe(n.memo||``)}</textarea>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-pill" data-action="close-modal">${D(`cancel`)}</button>
          <button type="submit" class="pill">${D(`saveEdit`)}</button>
        </div>
      </form>
    </div>
  `:``}function Se(){document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,Ce)}),document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;t!==`home`&&!P()?p=t:(p=t,t===`cold`&&![`fridge`,`freezer`].includes(m)&&(m=`fridge`)),F()})}),document.querySelectorAll(`[data-storage-jump]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.storageJump;t===`fridge`||t===`freezer`?(m=t,p=`cold`):p=t,F()})}),document.querySelectorAll(`[data-set-storage]`).forEach(e=>{e.addEventListener(`click`,()=>{m=e.dataset.setStorage,F()})}),document.querySelectorAll(`[data-cook]`).forEach(e=>{e.addEventListener(`click`,()=>{g=e.dataset.cook,document.querySelectorAll(`[data-cook]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.cook===g)})})}),document.querySelectorAll(`[data-form]`).forEach(e=>{e.addEventListener(`submit`,we)}),document.querySelectorAll(`[data-auth-form]`).forEach(e=>{e.addEventListener(`submit`,Te)}),document.querySelectorAll(`[data-edit-form]`).forEach(e=>{e.addEventListener(`submit`,Ee)}),document.querySelectorAll(`[data-use]`).forEach(e=>{e.addEventListener(`click`,()=>De(e.dataset.use))}),document.querySelectorAll(`[data-delete]`).forEach(e=>{e.addEventListener(`click`,()=>Oe(e.dataset.delete))}),document.querySelectorAll(`[data-edit]`).forEach(e=>{e.addEventListener(`click`,()=>{y=`edit:${e.dataset.edit}`,F()})}),document.querySelectorAll(`[data-detail]`).forEach(e=>{e.addEventListener(`click`,()=>{y=`detail:${e.dataset.detail}`,F()})}),document.querySelectorAll(`[data-season-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{h=e.dataset.seasonCat,F()})}),document.querySelectorAll(`[data-web-search]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=f.lang===`ko`?`${e.dataset.webSearch} 양념 사용법 요리 팁`:`${k(e.dataset.webSearch)} seasoning cooking uses tips`,n=encodeURIComponent(t);window.open(`https://www.google.com/search?q=${n}`,`_blank`,`noopener,noreferrer`)})}),document.querySelectorAll(`[data-input='servings']`).forEach(e=>{e.addEventListener(`input`,()=>{_=Math.max(1,Number(e.value)||1)})})}async function Ce(e){let n=e.currentTarget,r=e.currentTarget.dataset.action;if(r===`toggle-lang`&&(f.lang=f.lang===`ko`?`en`:`ko`,w()),r===`signup`&&(y=`signup`),r===`login`&&(y=`login`),r===`logout`&&(f.user=null,w()),r===`close-today`&&(localStorage.setItem(t,new Date().toISOString().slice(0,10)),y=null),r===`close-modal`&&(y=null),r===`back`&&(p=`home`),r===`make-recipe`&&(P()?(await ke(),p=`recipe`):y=`signup`),r===`copy-prompt`){await $e(v?.prompt||``),n.textContent=D(`copied`);return}F()}async function we(e){e.preventDefault();let t=e.currentTarget,n=t.dataset.form,r=new FormData(t),i=String(r.get(`name`)||``).trim();if(!i)return;let a=r.get(`photo`),o=a&&a.size?await Ze(a):null,s=String(r.get(`memo`)||``).trim(),c=String(r.get(`category`)||``).trim();if(n===`sauce`){let e=Q(i,s);s||=Z(i),c||=e.category}f.inventory[n].unshift(S(i,Number(r.get(`amount`))||0,String(r.get(`unit`)||`개`),c,s,o)),w(),F()}async function Te(e){e.preventDefault();let t=new FormData(e.currentTarget),n=String(t.get(`email`)).trim();await tt(n),f.user={email:n,joinedAt:new Date().toISOString(),provider:`cloudflare-ready-local`},w(),p=`home`,y=`celebrate`,F()}function Ee(e){e.preventDefault();let[t,n]=e.currentTarget.dataset.editForm.split(`:`),r=f.inventory[t]?.find(e=>e.id===n);if(!r)return;let i=new FormData(e.currentTarget);r.name=String(i.get(`name`)||``).trim()||r.name,r.amount=Number(i.get(`amount`))||0,r.unit=String(i.get(`unit`)||``).trim()||r.unit,r.category=String(i.get(`category`)||``).trim(),r.memo=String(i.get(`memo`)||``).trim(),t===`sauce`&&!r.memo&&(r.memo=Z(r.name)),w(),y=null,F()}function De(e){let[t,n]=e.split(`:`),r=f.inventory[t].find(e=>e.id===n);r&&(r.amount=Math.max(0,Number(r.amount)-1),w(),F())}function Oe(e){let[t,n]=e.split(`:`);f.inventory[t]=f.inventory[t].filter(e=>e.id!==n),w(),F()}async function ke(){let e=d[g]||d.fridgeClean,t=[...f.inventory.fridge,...f.inventory.freezer,...f.inventory.sauce,...f.inventory.room].filter(e=>Number(e.amount)>0),n=t.map(e=>e.name),r=je(t.filter(t=>e.allow.includes(t.name)),e).map(e=>e.name),i=a.find(([e])=>e===g),o=r.map(k),s=r.map(e=>c[e]||e),l=Me(g,e,r,_),u=f.lang===`ko`?e.koTitle:e.enTitle,p=e.enTitle||i?.[2]||`easy home cooking`,m=f.lang===`ko`?`${u} ${_}${D(`servingsSuffix`)}`:`${u} for ${_} ${D(`servingsSuffix`)}`,h=`${p} for ${_} servings`,y=(e.required||[]).filter(e=>!n.some(t=>Re(t,e))).map(e=>He(e,l)),b=o.join(`, `)||D(`basicIngredients`),x=await Ke(e,s),S=Ge(p,s,l,e),C=f.lang===`ko`?We(o,l,e):S,T=x?`${D(`sourceInternet`)}: TheMealDB`:D(`sourceLocal`);v={title:m,summary:Ae(b,x,l),ingredients:l.map(e=>({label:f.lang===`ko`?k(e.name):e.enName,amount:f.lang===`ko`?e.ko:e.en})),shopping:y,steps:ze(g,e,l),visual:C,reference:x,sourceLabel:T,prompt:Je(h,s,l,p,S,x)},Ue(r),w()}function Ae(e,t,n){let r=n.slice(0,3).map(e=>f.lang===`ko`?`${k(e.name)} ${e.ko}`:`${e.enName} ${e.en}`).join(`, `),i=O(D(`recipeSummary`),{items:e}),a=r?f.lang===`ko`?` 먼저 ${r}처럼 계량해서 시작해요.`:` Start by measuring ${r}.`:``;return t?f.lang===`ko`?`${i}${a} 무료 레시피 DB의 “${t.name}”도 참고했어요.`:`${i}${a} Also checked the free recipe DB reference "${t.name}".`:`${i}${a}`}function je(e,t){let n=[];return t.required.forEach(t=>{let r=e.find(e=>e.name===t);r&&!n.some(e=>e.name===r.name)&&n.push(r)}),e.forEach(e=>{n.length<5&&!n.some(t=>t.name===e.name)&&n.push(e)}),n}function Me(e,t,n,r){return[...new Set([...t.required||[],...n])].filter(e=>t.allow.includes(e)).slice(0,7).map(t=>{let n=Ne(t,e,r);return{name:t,enName:c[t]||t,ko:n.ko,en:n.en}})}function Ne(e,t,n){let r=Math.max(1,Number(n)||1);return{dessert:{우유:H(120,r),달걀:U(`egg`,r),설탕:B(1.5,r),버터:B(.5,r),밀가루:B(3,r),식빵:W(1,r),고구마:U(`sweet potato`,.5*r),"냉동 블루베리":B(2,r)},bread:{밀가루:V(.75,r),우유:H(80,r),버터:B(1,r),설탕:B(1,r),소금:Y(r),달걀:U(`egg`,r),식빵:W(1,r),치즈:W(1,r)},snack:{식빵:W(2,r),달걀:U(`egg`,r),치즈:W(1,r),버터:B(.5,r),마요네즈:B(.5,r),케첩:B(.5,r),참치캔:K(.5,r),우유:H(50,r),설탕:B(.5,r)},fridgeClean:{달걀:U(`egg`,r),대파:J(`대`,`stalk`,.5,r),두부:Ie(.5,r),양파:U(`onion`,.5*r),당근:U(`carrot`,.3*r),애호박:U(`zucchini`,.3*r),김치:V(.5,r),간장:B(1,r),식용유:B(1,r),참기름:B(.5,r),고추장:B(.5,r),밥:q(1,r),냉동밥:q(1,r)},party:{치즈:W(1,r),식빵:W(2,r),참치캔:K(.5,r),"냉동 새우":U(`shrimp`,4*r),"냉동 브로콜리":V(.5,r),감자:U(`potato`,.5*r),마요네즈:B(1,r),케첩:B(.5,r),식용유:B(.5,r)},korean:{밥:q(1,r),쌀:V(.5,r),김치:V(.7,r),두부:Ie(.5,r),대파:J(`대`,`stalk`,.5,r),양파:U(`onion`,.5*r),달걀:U(`egg`,r),간장:B(1,r),고추장:B(.7,r),참기름:B(.5,r)},japanese:{밥:q(1,r),쌀:V(.5,r),달걀:U(`egg`,1.5*r),양파:U(`onion`,.5*r),대파:J(`대`,`stalk`,.3,r),간장:B(1,r),설탕:B(.5,r),식초:B(.3,r),김:G(.5,r),"냉동 새우":U(`shrimp`,4*r)},chinese:{대파:J(`대`,`stalk`,1,r),양파:U(`onion`,.5*r),당근:U(`carrot`,.3*r),"냉동 새우":U(`shrimp`,5*r),달걀:U(`egg`,r),밥:q(1,r),냉동밥:q(1,r),간장:B(1,r),굴소스:B(.7,r),식용유:B(1,r)},meat:{"냉동 대패삼겹살":Fe(180,r),양파:U(`onion`,.5*r),대파:J(`대`,`stalk`,.5,r),마늘:U(`garlic clove`,2*r),소금:Y(r),후추:Le(3,r),식용유:B(.5,r),간장:B(.7,r),참기름:B(.3,r),김치:V(.5,r)},quick:{밥:q(1,r),냉동밥:q(1,r),달걀:U(`egg`,r),간장:B(1,r),참기름:B(.5,r),김:G(.5,r),대파:J(`대`,`stalk`,.3,r),후추:Le(2,r)}}[t]?.[e]||Pe(e,r)}function Pe(e,t){return e.includes(`간장`)||e.includes(`소스`)||e.includes(`기름`)?B(1,t):e.includes(`소금`)||e.includes(`후추`)?Y(t):e.includes(`밥`)?q(1,t):e.includes(`달걀`)?U(`egg`,t):{ko:`${R(t)}인분 사용할 만큼`,en:`enough for ${R(t)} serving${t>1?`s`:``}`}}function R(e){let t=Math.round(e*10)/10;return String(t)}function z(e,t){return e===`tbsp`?`${R(t)} tbsp`:t<=1?`${R(t)} ${e}`:e===`sweet potato`?`${R(t)} sweet potatoes`:e.endsWith(`sh`)?`${R(t)} ${e}`:`${R(t)} ${e}s`}function B(e,t){let n=e*t;return{ko:`${R(n)}스푼`,en:z(`tbsp`,n)}}function V(e,t){let n=e*t;return{ko:`${R(n)}컵`,en:z(`cup`,n)}}function H(e,t){let n=Math.round(e*t);return{ko:`${n}ml`,en:`${n} ml`}}function Fe(e,t){let n=Math.round(e*t);return{ko:`${n}g`,en:`${n} g`}}function U(e,t){return{ko:`${R(t)}개`,en:z(e,t)}}function W(e,t){let n=e*t;return{ko:`${R(n)}장`,en:z(`slice`,n)}}function G(e,t){let n=e*t;return{ko:`${R(n)}장`,en:z(`sheet`,n)}}function K(e,t){let n=e*t;return{ko:`${R(n)}캔`,en:z(`can`,n)}}function q(e,t){let n=e*t;return{ko:`${R(n)}공기`,en:z(`bowl`,n)}}function Ie(e,t){let n=e*t;return{ko:`${R(n)}모`,en:z(`block`,n)}}function J(e,t,n,r){let i=n*r;return{ko:`${R(i)}${e}`,en:z(t,i)}}function Y(e){return{ko:e===1?`한 꼬집`:`${R(e)}꼬집`,en:e===1?`1 pinch`:`${R(e)} pinches`}}function Le(e,t){let n=e*t;return{ko:`${R(n)}번 톡톡`,en:`${R(n)} shakes`}}function Re(e,t){let n=c[e]||``;return t.includes(e)||n&&t.toLowerCase().includes(n.toLowerCase())}function ze(e,t,n){let r=Be(n,`ko`),i=Be(n,`en`),a=[D(`stepPrepTitle`),D(`stepHeatTitle`),D(`stepSeasonTitle`),D(`stepPlateTitle`)],o=[`Measure`,`Cook`,`Check`,`Plate`],s=Ve(e,n);return(f.lang===`ko`?s.ko:s.en).map((e,t)=>({title:f.lang===`ko`?a[t]:o[t],text:t===0?`${e} ${f.lang===`ko`?`계량: ${r}.`:`Measurements: ${i}.`}`:e}))}function Be(e,t){return e.map(e=>t===`ko`?`${k(e.name)} ${e.ko}`:`${e.enName} ${e.en}`).join(`, `)}function X(e,t,n=f.lang){let r=e.find(e=>e.name===t);return r?n===`ko`?r.ko:r.en:``}function Ve(e,t){let n=X(t,`밀가루`,`ko`),r=X(t,`밀가루`,`en`),i=X(t,`냉동 블루베리`,`ko`),a=X(t,`냉동 블루베리`,`en`),o={dessert:[`볼에 우유 ${X(t,`우유`,`ko`)}, 달걀 ${X(t,`달걀`,`ko`)}, 설탕 ${X(t,`설탕`,`ko`)}${n?`, 밀가루 ${n}`:``}을 넣고 30초 섞어요.`,`팬에 버터 ${X(t,`버터`,`ko`)||`0.5스푼`}을 녹이고 반죽을 부은 뒤${i?` 냉동 블루베리 ${i}을 위에 올려요.`:` 달콤한 재료를 위에 올려요.`}`,`약불로 낮추고 뚜껑을 덮어 6~8분 익혀요. 가운데를 젓가락으로 찔렀을 때 묽은 반죽이 많이 묻지 않으면 거의 익은 거예요.`,`가장자리가 노릇하면 불을 끄고 2분 두었다가 담아요. 설탕을 아주 조금 더 뿌리면 이미지처럼 디저트 느낌이 살아나요.`],bread:[`볼에 밀가루 ${X(t,`밀가루`,`ko`)}, 우유 ${X(t,`우유`,`ko`)}, 설탕 ${X(t,`설탕`,`ko`)}, 소금 ${X(t,`소금`,`ko`)||`한 꼬집`}을 넣어 되직하게 섞어요.`,`버터 ${X(t,`버터`,`ko`)}을 녹여 반죽에 섞고 3분 쉬게 해요. 너무 묽으면 밀가루 1스푼을 더 넣어요.`,`약불 팬에 반죽을 1.5cm 두께로 펴고 뚜껑을 덮어 5~6분, 뒤집어서 4분 더 익혀요.`,`겉이 노릇하고 눌렀을 때 천천히 올라오면 완성이에요. 버터를 조금 올려 윤기 있게 담아요.`],snack:[`식빵, 치즈, 달걀처럼 바로 익는 재료를 계량대로 꺼내요.`,`약불 팬에 버터를 녹이고 식빵을 한 면당 1~2분 노릇하게 구워요.`,`달걀은 완전히 익히고 치즈는 30초 정도 녹여요. 마요네즈나 케첩은 마지막에 얇게 발라요.`,`반으로 잘라 단면이 보이게 세우면 간식 사진처럼 먹기 좋아 보여요.`],fridgeClean:[`채소는 한입 크기, 두부나 달걀은 부서지지 않게 준비해요.`,`중불 팬에 식용유를 두르고 대파를 30초 볶은 뒤 단단한 재료부터 넣어요.`,`간장은 1인분 기준 1스푼부터 넣고, 김치나 고추장이 있으면 짠맛을 보며 줄여요.`,`불을 끄고 참기름과 후추를 마지막에 넣어 따뜻하게 담아요.`],korean:[`밥이나 두부, 김치, 대파를 계량대로 꺼내고 김치는 가위로 작게 잘라요.`,`중불 팬에 대파를 30초 볶고 김치를 2분 볶아 신맛을 부드럽게 만들어요.`,`밥이나 두부를 넣고 간장 또는 고추장을 1인분 기준 1스푼 이하로 나눠 넣어요.`,`불을 끄고 참기름을 둘러 한식 집밥 향이 나게 담아요.`],japanese:[`밥은 따뜻하게 데우고 달걀과 양파를 계량대로 준비해요.`,`작은 팬에 양파, 간장, 설탕, 물 2스푼을 넣고 2분 끓여요.`,`달걀을 풀어 넣고 약불에서 40~60초만 익혀 촉촉하게 멈춰요.`,`밥 위에 그대로 올리고 김이나 대파를 얹어 덮밥처럼 마무리해요.`],chinese:[`대파는 넉넉히 송송 썰고 밥, 달걀, 새우를 계량대로 꺼내요.`,`중강불 팬에 식용유를 두르고 대파를 40초 볶아 향을 낸 뒤 달걀이나 새우를 넣어요.`,`밥을 넣고 간장과 굴소스를 가장자리로 둘러 1~2분 빠르게 볶아요.`,`후추를 살짝 뿌리고 넓은 접시에 담아 윤기가 보이게 펼쳐요.`],meat:[`고기는 해동 후 키친타월로 물기를 닦고 소금, 후추를 계량대로 뿌려요.`,`팬을 중강불로 1분 예열한 뒤 고기를 겹치지 않게 펼쳐 한 면을 2분 굽어요.`,`뒤집어서 1~2분 더 굽고 양파나 대파를 넣어 기름에 같이 익혀요.`,`고기 가장자리가 갈색이고 속까지 뜨거우면 기름을 살짝 빼고 담아요.`],quick:[`밥은 뜨겁게 데우고 달걀, 간장, 참기름을 계량대로 준비해요.`,`달걀은 반숙 2분 또는 스크램블 1분 30초로 빠르게 익혀요.`,`밥에 간장과 참기름을 먼저 섞고, 간이 부족하면 간장 0.5스푼만 추가해요.`,`달걀과 김, 대파를 올려 한 그릇으로 마무리해요.`],party:[`빵, 치즈, 단백질 재료를 한입 크기로 잘라 계량대로 준비해요.`,`새우나 감자는 먼저 완전히 익히고 물기를 닦아 눅눅하지 않게 해요.`,`마요네즈와 케첩은 1인분 기준 1스푼 안쪽으로 작게 찍어 올려요.`,`색이 다른 재료가 번갈아 보이게 접시에 간격을 두고 담아요.`]},s={dessert:[`Whisk milk ${X(t,`우유`,`en`)}, egg ${X(t,`달걀`,`en`)}, sugar ${X(t,`설탕`,`en`)}${r?`, and flour ${r}`:``} for 30 seconds.`,`Melt butter ${X(t,`버터`,`en`)||`0.5 tbsp`} in a skillet, pour in the mixture, and scatter ${a?`frozen blueberries ${a}`:`a sweet topping`} over it.`,`Cook covered over low heat for 6 to 8 minutes. It is nearly done when a skewer comes out without a lot of runny batter.`,`Rest for 2 minutes, then plate it with a tiny extra dusting of sugar for a dessert-like finish.`],bread:[`Mix flour ${X(t,`밀가루`,`en`)}, milk ${X(t,`우유`,`en`)}, sugar ${X(t,`설탕`,`en`)}, and salt ${X(t,`소금`,`en`)||`1 pinch`} into a thick batter.`,`Stir in melted butter ${X(t,`버터`,`en`)} and rest the batter for 3 minutes. Add 1 tbsp flour if it is too loose.`,`Spread it 1.5 cm thick in a low-heat skillet, cover, cook 5 to 6 minutes, flip, then cook 4 more minutes.`,`Plate when the surface is golden and the center springs back gently. Finish with a little butter gloss.`]},c=d[e]||d.fridgeClean;return{ko:o[e]||c.methodKo,en:s[e]||c.methodEn}}function He(e,t){let n=t.find(t=>t.name===e);if(f.lang===`ko`)return n?`${k(e)} ${n.ko}`:k(e);let r=c[e]||e;return n?`${r} ${n.en}`:r}function Ue(e=[]){let t=new Set(e);[`fridge`,`freezer`,`sauce`,`room`].forEach(e=>{f.inventory[e].forEach(n=>{t.has(n.name)&&(n.amount=Math.max(0,Number(n.amount)-(e===`sauce`?.5:1)))})})}function We(e,t,n){let r=e.join(`, `)||`집에 있는 재료`,i=t.slice(0,4).map(e=>`${k(e.name)} ${e.ko}`).join(`, `),a=n.visualHintKo||`${r}가 한 접시에 보기 좋게 담기고 윤기와 김이 살아 있는 집밥`;return`${i||r}로 만든 완성 모습은 ${a}예요. 이미지로 만들면 실제 어떤 비주얼인지 바로 알 수 있게 주재료가 선명하게 보여야 해요.`}function Ge(e,t,n,r){let i=t.filter(Boolean).join(`, `)||`simple pantry ingredients`,a=n.map(e=>`${e.enName} ${e.en}`).join(`, `);return`The final dish should look like ${r.visualHintEn||`a ${e} made with ${i}: glossy, warm, generous, neatly plated, with visible textures, steam, and appetizing color contrast`}. Use these exact cooking ingredients as visual cues: ${a||i}.`}async function Ke(e,t){let n=[...e.searchTerms||[],...t].filter(Boolean);for(let e of n.slice(0,5))try{let t=`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(e)}`,n=new AbortController,r=setTimeout(()=>n.abort(),3500),i=await fetch(t,{signal:n.signal});if(clearTimeout(r),!i.ok)continue;let a=await i.json(),o=Array.isArray(a.meals)?a.meals.find(Boolean):null;if(o)return qe(o)}catch{}return null}function qe(e){let t=[];for(let n=1;n<=20;n+=1){let r=e[`strIngredient${n}`],i=e[`strMeasure${n}`];r&&r.trim()&&t.push(`${i?i.trim():``} ${r.trim()}`.trim())}return{name:e.strMeal,area:e.strArea,category:e.strCategory,instructions:e.strInstructions,ingredients:t.slice(0,8),source:e.strSource||e.strYoutube||`https://www.themealdb.com/`}}function Je(e,t,n,r,i,a){return`Create a mouthwatering vertical smartphone food photo for "${e}". Style: ${r}. Main ingredients from the user's kitchen: ${t.filter(Boolean).join(`, `)||`simple pantry ingredients`}. Exact recipe measurements: ${n.map(e=>`${e.enName}: ${e.en}`).join(`; `)}. ${a?`Free recipe reference: ${a.name}, ${a.area||`home cooking`} style, with cues from ${a.ingredients.join(`, `)}.`:`No external recipe reference was available; use realistic beginner home-cooking presentation.`} Visual direction: ${i} The image must match this recipe, not a different dish. Plate the food on a warm ceramic dish, show glossy textures, gentle steam, fresh garnish, appetizing color contrast, realistic home kitchen lighting, shallow depth of field, high detail, no text, no watermark, no hands, no packaging.`}function Z(e){let t=Q(e,``);return`${t.usage} ${t.tip}`}function Q(e,t){let n=Xe(e),r=n?s[n]:null;return r?{category:o[r.category][E()],usage:E()===`ko`?r.usageKo:r.usageEn,tip:E()===`ko`?r.tipKo:r.tipEn}:{category:D(`defaultCategory`),usage:t||(E()===`ko`?`볶음, 무침, 국물, 소스에 조금씩 테스트하며 쓰기 좋아요.`:`Try a small amount in stir-fries, salads, soups, or sauces.`),tip:E()===`ko`?`처음 쓰는 양념은 1인분 기준 반 작은술부터 넣고 맛을 보며 늘리세요.`:`For a new seasoning, start with half a teaspoon per serving and increase after tasting.`}}function Ye(e){return Object.entries(o).find(([,t])=>t.ko===e||t.en===e)?.[0]||`basic`}function Xe(e){return Object.keys(s).find(t=>e.includes(t)||k(t)===e)}function Ze(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}function Qe(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function $(e){return Qe(e)}async function $e(e){try{await navigator.clipboard.writeText(e);return}catch{let e=document.querySelector(`.copy-box textarea`);if(!e)return;e.focus(),e.select();try{document.execCommand(`copy`)}catch{}}}function et(){`serviceWorker`in navigator&&(location.hostname===`127.0.0.1`||location.hostname===`localhost`||window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})}))}async function tt(e){try{await fetch(`./api/users`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,app:`yorijambaengi`})})}catch{}}function nt(){let e=new URLSearchParams(window.location.search).get(`shortcut`);e===`sauce`&&(p=`sauce`),e===`recipe`&&(p=`home`)}te(),F();