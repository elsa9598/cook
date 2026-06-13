(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`yorijambaengi-state-v1`,t=`yorijambaengi-free-popup-date`,n={login:`Login`,signup:`가입하기`,logout:`로그아웃`,lang:`EN`,back:`Back`,homeSmall:`홈`,homeBig:`요리초보 추천`,premiumBig:`프리미엄 요리실`,premiumNav:`프리미엄`,heroTitleLine1:`있는 재료로`,heroTitleLine2:`쉬운 요리`,heroCopy:`냉장고, 냉동고, 양념, 실온 먹거리를 보고 몇 인분인지에 맞춰 쉬운 요리를 추천해요.`,trial:`무료체험`,trialCopy:`가입 전 3일 동안 사용 가능`,signupRequired:`가입 필요`,joinNow:`무료 가입`,storageNow:`현재 내 보관함`,cookStart:`요리 본격 시작`,servings:`몇 인분`,makeRecipe:`추천 받기`,pantrySmall:`보관함`,fridgeBig:`신선고`,freezerBig:`얼음창고`,sauceBig:`맛보관소`,roomBig:`실온바구니`,addItem:`재료 추가`,name:`이름`,amount:`수량`,unit:`단위`,photo:`카메라/사진`,cameraPick:`카메라로 찍기`,imagePick:`이미지 선택`,photoHelp:`사진을 넣고 이름을 적으면 저장할 때 맛, 사용 요리, 팁을 자동 메모로 채워요.`,photoDetected:`사진 후보`,analyzePhoto:`사진 설명 채우기`,save:`저장`,category:`카테고리`,memo:`메모`,detail:`상세`,use:`사용`,delete:`삭제`,deleteSymbol:`-`,edit:`수정`,editItem:`재료 수정`,cancel:`취소`,saveEdit:`수정 저장`,empty:`아직 저장된 재료가 없어요.`,seasonTitle:`양념보관창고`,allSeasonings:`전체 양념`,recipeSmall:`요리순서`,ingredientAmounts:`정확한 계량`,shopping:`장보기 재료`,steps:`요리 순서`,copyPrompt:`최종 이미지 영어 프롬프트 복사`,copied:`복사 완료`,authTitle:`요리젬뱅이 신규 가입`,authCopy:`무료 가입에는 개인 정보로 이메일만 저장해요. 비밀번호는 화면 확인용이며 앱에 저장하지 않습니다.`,closeToday:`오늘 닫기`,lockedTitle:`4일째부터는 가입 후 사용 가능`,lockedCopy:`홈 화면은 볼 수 있지만 보관함, 요리 추천, 상세 기능은 무료 가입 후 열려요.`,cloudflareNote:``,celebrateTitle:`가입 축하해요!`,celebrateCopy:`이제 보관함, 요리 추천, 최종 이미지 프롬프트까지 모두 사용할 수 있어요.`,startPremium:`프리미엄 시작`,searchWeb:`무료 웹 검색`,joinedCopy:`가입 완료. 모든 기능 사용 가능`,savedCount:`개 저장`,exampleSauce:`예: 간장`,exampleIngredient:`예: 양파`,defaultUnitSauce:`스푼`,defaultUnitItem:`개`,defaultSauceCategory:`기본 간`,sauceMemoPlaceholder:`자동 설명이 없으면 직접 적어도 좋아요.`,itemMemoPlaceholder:`보관 위치나 유통기한 메모`,defaultCategory:`기본`,all:`전체`,noShopping:`추가 장보기 없이 가능해요.`,promptLabel:`ChatGPT 이미지 생성용 영어 프롬프트`,fabTitle:`요리 시작`,bottomCold:`냉장/냉동`,bottomSauce:`양념`,bottomRoom:`실온`,email:`이메일`,password:`비밀번호`,confirm:`확인`,searchHint:`검색 힌트: 무료 웹 검색에서 “{name} 요리 활용법”으로 찾아 상세 설명과 팁을 보강할 수 있어요.`,recipeFallback:`오늘의 요리`,servingsSuffix:`인분`,basicIngredients:`기본 재료`,storageIngredients:`보관 재료`,recipeSummary:`{items} 중심의 초보용 추천이에요. 없는 재료는 장보기 목록에 따로 뺐어요.`,stepPrepTitle:`재료 모으기`,stepPrepText:`{items}를 꺼내고 {servings}인분 기준으로 먹기 좋은 크기로 준비해요.`,stepHeatTitle:`기본 익히기`,stepHeatText:`팬을 중불로 달군 뒤 단단한 재료부터 넣고, 수분 많은 재료는 나중에 넣어 식감이 무너지지 않게 해요.`,stepSeasonTitle:`양념 맞추기`,stepSeasonText:`간장, 고추장, 소금 같은 양념은 한 번에 많이 넣지 말고 반씩 넣어 맛을 보며 조절해요.`,stepPlateTitle:`담아내기`,stepPlateText:`마지막에 참기름이나 후추처럼 향이 나는 재료를 조금 넣고 따뜻할 때 그릇에 담아요.`,finalVisual:`완성 비주얼`,finalVisualText:`따뜻한 접시에 윤기 나는 재료가 보기 좋게 담기고, 주재료의 색과 김이 살아 있는 집밥 비주얼로 완성돼요.`,smartChef:`똑똑한 요리사`,sourceInternet:`무료 레시피 DB 참고`,sourceLocal:`로컬 셰프 규칙`,referenceRecipe:`참고 요리`},r={login:`Login`,signup:`Join`,logout:`Logout`,lang:`KO`,back:`Back`,homeSmall:`Home`,homeBig:`Easy Cook`,premiumBig:`Premium Kitchen`,premiumNav:`Premium`,heroTitleLine1:`Easy meals`,heroTitleLine2:`from your kitchen`,heroCopy:`The app checks fridge, freezer, seasonings, and room-temp foods to suggest easy recipes by serving size.`,trial:`Trial`,trialCopy:`3 days before sign-up is required`,signupRequired:`Sign-up required`,joinNow:`Join free`,storageNow:`My storage`,cookStart:`Start cooking`,servings:`Servings`,makeRecipe:`Recommend`,pantrySmall:`Storage`,fridgeBig:`Fresh Box`,freezerBig:`Ice Vault`,sauceBig:`Flavor Shelf`,roomBig:`Room Basket`,addItem:`Add item`,name:`Name`,amount:`Amount`,unit:`Unit`,photo:`Camera/photo`,cameraPick:`Take photo`,imagePick:`Choose image`,photoHelp:`Add a photo and name; saving fills taste, cooking uses, and tips automatically.`,photoDetected:`Photo guess`,analyzePhoto:`Fill photo notes`,save:`Save`,category:`Category`,memo:`Memo`,detail:`Detail`,use:`Use`,delete:`Delete`,deleteSymbol:`-`,edit:`Edit`,editItem:`Edit item`,cancel:`Cancel`,saveEdit:`Save edit`,empty:`Nothing saved yet.`,seasonTitle:`Seasoning Storage`,allSeasonings:`All seasonings`,recipeSmall:`Recipe`,ingredientAmounts:`Exact measurements`,shopping:`Shopping list`,steps:`Cooking order`,copyPrompt:`Copy final image prompt`,copied:`Copied`,authTitle:`Create cooking account`,authCopy:`Free sign-up stores only your email as personal information. The password is checked on screen and is not saved in this app.`,closeToday:`Close today`,lockedTitle:`Sign-up required from day 4`,lockedCopy:`Home remains visible, but storage, recipe, and detail features open after free sign-up.`,cloudflareNote:``,celebrateTitle:`Welcome aboard!`,celebrateCopy:`Storage, recipe recommendations, and final image prompts are now unlocked.`,startPremium:`Start Premium`,searchWeb:`Free web search`,joinedCopy:`Joined. All features are available.`,savedCount:`saved`,exampleSauce:`e.g. soy sauce`,exampleIngredient:`e.g. onion`,defaultUnitSauce:`tbsp`,defaultUnitItem:`pcs`,defaultSauceCategory:`Basic seasoning`,sauceMemoPlaceholder:`If auto details are missing, add your own note.`,itemMemoPlaceholder:`Storage spot or expiry note`,defaultCategory:`Basic`,all:`All`,noShopping:`No extra shopping needed.`,promptLabel:`English prompt for ChatGPT image generation`,fabTitle:`Start cooking`,bottomCold:`Cold`,bottomSauce:`Seasoning`,bottomRoom:`Room`,email:`Email`,password:`Password`,confirm:`OK`,searchHint:`Search hint: use free web search for "{name} cooking uses" to improve the saved details and tips.`,recipeFallback:`Today's meal`,servingsSuffix:`servings`,basicIngredients:`basic ingredients`,storageIngredients:`stored ingredients`,recipeSummary:`A beginner-friendly recipe built around {items}. Missing ingredients are separated into the shopping list.`,stepPrepTitle:`Gather ingredients`,stepPrepText:`Take out {items} and prep them into easy-to-cook pieces for {servings} servings.`,stepHeatTitle:`Cook the base`,stepHeatText:`Heat the pan over medium heat, add firm ingredients first, and add watery ingredients later so the texture stays intact.`,stepSeasonTitle:`Adjust seasoning`,stepSeasonText:`Add soy sauce, chili paste, or salt in small portions, taste, then adjust gradually.`,stepPlateTitle:`Plate and finish`,stepPlateText:`Add fragrant ingredients like sesame oil or pepper at the end, then plate while warm.`,finalVisual:`Final visual`,finalVisualText:`The finished dish looks glossy and hearty on a warm ceramic plate, with the main ingredients clearly visible and a fresh home-cooked feel.`,smartChef:`Smart chef`,sourceInternet:`Free recipe DB reference`,sourceLocal:`Local chef rules`,referenceRecipe:`Reference recipe`},i={fridge:{ko:`신선고`,en:`Fresh Box`,emoji:`🥬`,descKo:`냉장 재료`,descEn:`Chilled ingredients`},freezer:{ko:`얼음창고`,en:`Ice Vault`,emoji:`🧊`,descKo:`냉동 재료`,descEn:`Frozen ingredients`},sauce:{ko:`맛보관소`,en:`Flavor Shelf`,emoji:`🧂`,descKo:`양념과 소스`,descEn:`Seasonings and sauces`},room:{ko:`실온바구니`,en:`Room Basket`,emoji:`🍞`,descKo:`실온 먹거리`,descEn:`Room-temp foods`}},a=[[`fridgeClean`,`냉장고 털기`,`Clear-out meal`,`🥘`],[`snack`,`간식`,`Snack`,`🍙`],[`dessert`,`디저트`,`Dessert`,`🍮`],[`bread`,`빵만들기`,`Bread`,`🥖`],[`party`,`파티`,`Party`,`🎉`],[`korean`,`한식`,`Korean`,`🍚`],[`japanese`,`일식`,`Japanese`,`🍱`],[`chinese`,`중식`,`Chinese`,`🥡`],[`meat`,`고기굽기`,`Grill meat`,`🥩`],[`quick`,`초간단 한끼`,`Quick meal`,`⚡`]],o={basic:{ko:`기본 간`,en:`Basic seasoning`},sauce:{ko:`소스`,en:`Sauces`},oil:{ko:`기름/향`,en:`Oils and aroma`},spicy:{ko:`매운맛`,en:`Spicy`},sweet:{ko:`단맛`,en:`Sweet`},herb:{ko:`향신료`,en:`Spices and herbs`}},s={간장:{category:`basic`,usageKo:`볶음, 조림, 덮밥, 국물 간에 좋아요.`,usageEn:`Good for stir-fries, braises, rice bowls, and soup seasoning.`,tipKo:`1인분 기준 1작은술부터 넣고 마지막에 간을 맞추세요.`,tipEn:`Start with 1 teaspoon per serving, then adjust at the end.`},고추장:{category:`spicy`,usageKo:`비빔, 볶음, 찌개, 양념구이에 잘 맞아요.`,usageEn:`Works well in mixed rice, stir-fries, stews, and spicy grilled marinades.`,tipKo:`단맛이 있어 설탕은 적게 넣고 물이나 육수로 풀면 덜 뭉쳐요.`,tipEn:`It is already a little sweet, so reduce sugar and loosen it with water or stock.`},된장:{category:`basic`,usageKo:`국, 찌개, 나물 무침, 고기 밑간에 좋아요.`,usageEn:`Good for soups, stews, seasoned greens, and meat marinades.`,tipKo:`오래 끓이면 텁텁할 수 있어 중후반에 풀어 넣으세요.`,tipEn:`Add it in the middle or later so the flavor stays clean.`},소금:{category:`basic`,usageKo:`모든 기본 간, 데치기, 굽기 전 밑간에 사용해요.`,usageEn:`Use for basic seasoning, blanching water, and pre-seasoning before grilling.`,tipKo:`한 번에 많이 넣지 말고 두 꼬집씩 나눠 넣으세요.`,tipEn:`Add two pinches at a time instead of salting heavily at once.`},설탕:{category:`sweet`,usageKo:`볶음, 조림, 양념장, 디저트에 단맛과 윤기를 줘요.`,usageEn:`Adds sweetness and gloss to stir-fries, braises, sauces, and desserts.`,tipKo:`간장 요리에는 설탕을 먼저 넣으면 재료 속까지 맛이 들어요.`,tipEn:`For soy-based dishes, add sugar early so the flavor soaks in.`},참기름:{category:`oil`,usageKo:`나물, 비빔밥, 완성 직전 향내기에 좋아요.`,usageEn:`Best for seasoned greens, bibimbap, and finishing aroma.`,tipKo:`센 불에서 오래 가열하지 말고 마지막에 둘러 향을 살리세요.`,tipEn:`Do not cook it long over high heat; drizzle at the end for aroma.`},후추:{category:`herb`,usageKo:`고기, 달걀, 크림, 볶음요리의 잡내를 줄여요.`,usageEn:`Helps balance meat, eggs, creamy dishes, and stir-fries.`,tipKo:`완성 직전 갈아 넣으면 향이 더 선명해요.`,tipEn:`Grind it right before serving for a clearer aroma.`},식초:{category:`sauce`,usageKo:`초무침, 냉채, 소스, 느끼한 맛 잡기에 좋아요.`,usageEn:`Great for sour salads, chilled dishes, sauces, and cutting richness.`,tipKo:`가열하면 향이 날아가니 불을 끈 뒤 넣으세요.`,tipEn:`Add after turning off the heat so the acidity stays bright.`}},c={달걀:`egg`,대파:`green onion`,두부:`tofu`,양파:`onion`,당근:`carrot`,애호박:`zucchini`,김치:`kimchi`,우유:`milk`,치즈:`cheese`,버터:`butter`,"냉동 만두":`frozen dumplings`,냉동밥:`frozen rice`,"냉동 대패삼겹살":`frozen thin pork belly`,"냉동 새우":`frozen shrimp`,"냉동 브로콜리":`frozen broccoli`,"냉동 블루베리":`frozen blueberries`,간장:`soy sauce`,고추장:`gochujang`,된장:`doenjang`,소금:`salt`,설탕:`sugar`,참기름:`sesame oil`,후추:`black pepper`,식초:`vinegar`,고춧가루:`gochugaru`,식용유:`cooking oil`,굴소스:`oyster sauce`,마요네즈:`mayonnaise`,케첩:`ketchup`,식빵:`bread slices`,라면:`instant noodles`,쌀:`rice`,밥:`cooked rice`,파스타면:`pasta`,참치캔:`canned tuna`,김:`seaweed sheets`,감자:`potato`,고구마:`sweet potato`,밀가루:`flour`},l={달걀:{category:`단백질`,tasteKo:`고소하고 부드러운 맛`,usageKo:`달걀밥, 토스트, 볶음밥, 전, 팬 디저트에 좋아요.`,tipKo:`완전히 익히려면 약불에서 천천히, 촉촉하게 먹으려면 불을 일찍 꺼요.`,tasteEn:`savory and soft`,usageEn:`Good for egg rice, toast, fried rice, pancakes, and skillet desserts.`,tipEn:`Cook gently for a soft texture; use low heat when you want it fully set.`},우유:{category:`유제품`,tasteKo:`부드럽고 고소한 맛`,usageKo:`팬케이크, 크림소스, 달걀찜, 디저트 반죽에 좋아요.`,tipKo:`센 불에 오래 끓이면 눌어붙기 쉬우니 약불에서 저어 주세요.`,tasteEn:`mild, creamy, and slightly sweet`,usageEn:`Good for pancakes, cream sauces, steamed eggs, and dessert batter.`,tipEn:`Stir over low heat because milk can scorch quickly.`},양파:{category:`채소`,tasteKo:`익히면 달고 생으로는 알싸한 맛`,usageKo:`볶음, 덮밥, 카레, 고기굽기, 국물 베이스에 좋아요.`,tipKo:`갈색이 살짝 나게 볶으면 단맛이 올라와 초보 요리도 맛있어져요.`,tasteEn:`sharp raw, sweet when cooked`,usageEn:`Good for stir-fries, rice bowls, curry, grilled meat, and soup bases.`,tipEn:`Brown it lightly to bring out sweetness.`},대파:{category:`채소`,tasteKo:`향긋하고 매콤한 파 향`,usageKo:`볶음밥, 국, 라면, 고기굽기, 파기름에 좋아요.`,tipKo:`기름에 먼저 30초 볶으면 향이 살아나요.`,tasteEn:`aromatic and mildly spicy`,usageEn:`Good for fried rice, soups, noodles, grilled meat, and scallion oil.`,tipEn:`Fry it in oil for 30 seconds first to release aroma.`},두부:{category:`단백질`,tasteKo:`담백하고 부드러운 맛`,usageKo:`두부부침, 찌개, 볶음, 덮밥 단백질 재료로 좋아요.`,tipKo:`키친타월로 물기를 빼면 팬에서 덜 부서져요.`,tasteEn:`mild and soft`,usageEn:`Good for pan-fried tofu, stews, stir-fries, and rice bowls.`,tipEn:`Pat dry before cooking so it browns better.`},김치:{category:`기본`,tasteKo:`새콤하고 매콤한 감칠맛`,usageKo:`김치볶음밥, 찌개, 고기 곁들임, 냉장고 털기 요리에 좋아요.`,tipKo:`신 김치는 설탕 0.5스푼을 넣으면 맛이 둥글어져요.`,tasteEn:`tangy, spicy, and savory`,usageEn:`Good for kimchi fried rice, stews, meat sides, and clean-out meals.`,tipEn:`For very sour kimchi, add a little sugar to round the flavor.`},치즈:{category:`유제품`,tasteKo:`짭조름하고 고소한 맛`,usageKo:`토스트, 라면, 볶음밥, 파티 한입 요리에 좋아요.`,tipKo:`마지막 30초에 올려 녹이면 질기지 않고 부드러워요.`,tasteEn:`salty, creamy, and rich`,usageEn:`Good for toast, noodles, fried rice, and party bites.`,tipEn:`Add at the end and melt briefly for a softer texture.`},버터:{category:`유제품`,tasteKo:`고소하고 진한 풍미`,usageKo:`빵, 팬 디저트, 감자, 볶음 향내기에 좋아요.`,tipKo:`타기 쉬우니 약불에서 녹이고 갈색이 진해지기 전에 재료를 넣어요.`,tasteEn:`rich, creamy, and nutty`,usageEn:`Good for bread, skillet desserts, potatoes, and aromatic stir-fries.`,tipEn:`Melt over low heat and add ingredients before it browns too much.`},"냉동 블루베리":{category:`냉동재료`,tasteKo:`새콤달콤하고 과즙 있는 맛`,usageKo:`팬케이크, 요거트, 팬 디저트, 잼 느낌 토핑에 좋아요.`,tipKo:`해동하지 않고 바로 올리면 색이 번지지 않고 모양이 살아나요.`,tasteEn:`sweet-tart and juicy`,usageEn:`Good for pancakes, yogurt, skillet desserts, and jam-like toppings.`,tipEn:`Use straight from frozen to keep the shape and color cleaner.`},밀가루:{category:`곡물`,tasteKo:`담백한 반죽 베이스`,usageKo:`팬브레드, 부침, 팬케이크, 소스 농도 잡기에 좋아요.`,tipKo:`조금씩 넣어 섞으면 덩어리가 덜 생겨요.`,tasteEn:`neutral batter base`,usageEn:`Good for pan bread, pancakes, fritters, and thickening sauces.`,tipEn:`Add gradually to avoid lumps.`},감자:{category:`구황작물`,tasteKo:`포슬포슬하고 담백한 맛`,usageKo:`간식, 볶음, 고기 곁들임, 파티 플래터에 좋아요.`,tipKo:`작게 썰어 전자레인지에 먼저 익히면 팬 조리가 빨라져요.`,tasteEn:`mild and fluffy`,usageEn:`Good for snacks, stir-fries, meat sides, and party platters.`,tipEn:`Microwave small pieces first to shorten pan cooking.`},고구마:{category:`구황작물`,tasteKo:`달콤하고 포근한 맛`,usageKo:`간식, 디저트, 토스트 속, 팬 디저트에 좋아요.`,tipKo:`익힌 고구마는 우유나 버터와 섞으면 부드러운 속재료가 돼요.`,tasteEn:`sweet and soft`,usageEn:`Good for snacks, desserts, toast fillings, and skillet sweets.`,tipEn:`Mash cooked sweet potato with milk or butter for a soft filling.`}},u={달걀:[`egg`,`eggs`,`계란`,`달걀`],우유:[`milk`,`우유`],양파:[`onion`,`양파`],대파:[`greenonion`,`scallion`,`대파`,`파`],두부:[`tofu`,`두부`],김치:[`kimchi`,`김치`],치즈:[`cheese`,`치즈`],버터:[`butter`,`버터`],"냉동 블루베리":[`blueberry`,`blueberries`,`블루베리`],밀가루:[`flour`,`밀가루`],감자:[`potato`,`감자`],고구마:[`sweetpotato`,`고구마`],간장:[`soysauce`,`soy`,`간장`],고추장:[`gochujang`,`고추장`],된장:[`doenjang`,`된장`],소금:[`salt`,`소금`],설탕:[`sugar`,`설탕`],참기름:[`sesameoil`,`sesame`,`참기름`],후추:[`pepper`,`후추`],식초:[`vinegar`,`식초`],식용유:[`oil`,`식용유`],굴소스:[`oystersauce`,`oyster`,`굴소스`],마요네즈:[`mayonnaise`,`mayo`,`마요네즈`],케첩:[`ketchup`,`케첩`]},d={개:`pcs`,단:`bunch`,모:`block`,스푼:`tbsp`,장:`slices`,봉:`packs`,컵:`cups`,캔:`cans`,봉지:`bags`,통:`bottles`},f={단백질:`Protein`,채소:`Vegetable`,간편식:`Convenience food`,냉동재료:`Frozen ingredients`,"기본 간":`Basic seasoning`,매운맛:`Spicy`,단맛:`Sweet`,향신료:`Spices and herbs`,"기름/향":`Oils and aroma`,소스:`Sauce`,통조림:`Canned food`,곡물:`Grain`,구황작물:`Root vegetable`,빵:`Bread`,면:`Noodles`,유제품:`Dairy`,기본:`Basic`},p={fridgeClean:{koTitle:`냉장고 털이 볶음`,enTitle:`fridge clean-out stir-fry`,searchTerms:[`stir fry`,`fried rice`,`omelette`],allow:[`달걀`,`대파`,`두부`,`양파`,`당근`,`애호박`,`김치`,`냉동 만두`,`냉동밥`,`간장`,`고추장`,`참기름`,`소금`,`후추`,`식용유`,`밥`],required:[`달걀`,`대파`,`간장`,`식용유`],methodKo:[`재료를 한입 크기로 썰고 물기 많은 재료는 따로 둬요.`,`팬에 식용유를 두르고 대파를 먼저 볶아 향을 내요.`,`단단한 재료, 부드러운 재료 순서로 넣고 간장으로 간을 맞춰요.`,`마지막에 참기름이나 후추를 넣고 따뜻하게 담아요.`],methodEn:[`Cut everything into bite-size pieces and keep watery ingredients aside.`,`Heat oil and stir-fry green onion first for aroma.`,`Add firm ingredients, then tender ones, and season with soy sauce.`,`Finish with sesame oil or pepper and plate while warm.`]},snack:{koTitle:`초간단 토스트 간식`,enTitle:`quick toasted snack`,searchTerms:[`sandwich`,`toast`,`omelette`],allow:[`식빵`,`달걀`,`치즈`,`버터`,`마요네즈`,`케첩`,`참치캔`,`감자`,`고구마`,`우유`,`설탕`],required:[`식빵`,`치즈`,`버터`],methodKo:[`식빵에 버터를 얇게 바르고 치즈나 달걀을 준비해요.`,`팬을 약불로 달군 뒤 빵을 노릇하게 구워요.`,`속재료를 넣고 반으로 접거나 한 장 더 덮어 따뜻하게 눌러요.`,`먹기 좋은 크기로 자르고 소스를 조금 곁들여요.`],methodEn:[`Spread a thin layer of butter on bread and prepare cheese or egg.`,`Toast the bread gently over low heat until golden.`,`Add the filling and fold or press with another slice.`,`Cut into easy pieces and add a small sauce accent.`]},dessert:{koTitle:`우유 달걀 팬 디저트`,enTitle:`milk and egg pan dessert`,searchTerms:[`pancake`,`dessert`,`cake`],allow:[`우유`,`달걀`,`설탕`,`버터`,`식빵`,`밀가루`,`고구마`,`냉동 블루베리`],required:[`우유`,`설탕`,`달걀`,`버터`,`냉동 블루베리`,`밀가루`],visualHintKo:`노릇하게 부푼 가장자리, 촉촉한 노란 커스터드 속, 블루베리와 설탕이 보이는 작은 팬 디저트`,visualHintEn:`a golden skillet custard pancake with puffed browned edges, a soft yellow center, blueberries embedded on top, and a light powdered sugar dusting`,methodKo:[`우유, 달걀, 설탕을 부드럽게 섞어 달콤한 베이스를 만들어요.`,`식빵이나 고구마처럼 단맛과 어울리는 재료만 넣어요.`,`약불에서 천천히 익혀 겉은 촉촉하고 가장자리는 살짝 노릇하게 만들어요.`,`블루베리나 설탕을 살짝 올려 디저트처럼 마무리해요.`],methodEn:[`Whisk milk, egg, and sugar into a soft sweet base.`,`Use dessert-friendly ingredients like bread or sweet potato only.`,`Cook slowly over low heat until moist with lightly golden edges.`,`Finish with blueberries or a light dusting of sugar.`]},bread:{koTitle:`초보 팬브레드`,enTitle:`beginner pan bread`,searchTerms:[`bread`,`pancake`,`scone`],allow:[`밀가루`,`우유`,`버터`,`설탕`,`소금`,`달걀`,`식빵`,`치즈`],required:[`밀가루`,`우유`,`버터`,`설탕`,`소금`],visualHintKo:`팬에서 구운 둥근 빵, 노릇한 표면, 버터가 녹아 윤기 나는 초보용 팬브레드`,visualHintEn:`a round beginner pan bread cooked in a skillet, golden brown outside, soft crumb inside, with melted butter gloss on top`,methodKo:[`밀가루, 우유, 설탕, 소금을 섞어 되직한 반죽을 만들어요.`,`버터를 조금 넣어 반죽 표면이 부드러워질 때까지 섞어요.`,`약불 팬에 반죽을 올리고 뚜껑을 덮어 천천히 익혀요.`,`겉이 노릇하고 속이 촉촉해지면 버터 향이 나게 마무리해요.`],methodEn:[`Mix flour, milk, sugar, and salt into a thick batter.`,`Fold in a little butter until the surface looks smooth.`,`Cook the batter slowly in a covered pan over low heat.`,`Finish when the outside is golden and the inside stays soft.`]},party:{koTitle:`파티 한입 플래터`,enTitle:`party bite platter`,searchTerms:[`canape`,`starter`,`shrimp`],allow:[`치즈`,`식빵`,`참치캔`,`냉동 새우`,`냉동 브로콜리`,`감자`,`마요네즈`,`케첩`,`후추`,`식용유`],required:[`치즈`,`식빵`,`마요네즈`],methodKo:[`빵, 치즈, 단백질 재료를 한입 크기로 준비해요.`,`새우나 감자는 먼저 익히고 물기를 줄여요.`,`마요네즈나 케첩으로 작은 소스 포인트를 만들어요.`,`색이 다른 재료가 번갈아 보이게 접시에 담아요.`],methodEn:[`Prepare bread, cheese, and protein ingredients in bite-size pieces.`,`Cook shrimp or potatoes first and reduce moisture.`,`Add small accents of mayonnaise or ketchup.`,`Arrange contrasting colors across the plate.`]},korean:{koTitle:`집밥 한식 볶음`,enTitle:`Korean home-style stir-fry`,searchTerms:[`Bibimbap`,`Kimchi`,`rice`],allow:[`밥`,`쌀`,`김치`,`두부`,`대파`,`양파`,`달걀`,`냉동 대패삼겹살`,`간장`,`고추장`,`된장`,`참기름`,`고춧가루`,`소금`],required:[`쌀`,`김치`,`참기름`],methodKo:[`밥이나 두부를 중심으로 김치와 대파를 준비해요.`,`팬에 대파를 볶은 뒤 김치를 넣어 신맛을 부드럽게 만들어요.`,`간장이나 고추장으로 간을 맞추고 주재료를 넣어 볶아요.`,`마지막에 참기름을 둘러 한식 집밥 향을 살려요.`],methodEn:[`Prepare rice or tofu with kimchi and green onion.`,`Stir-fry green onion first, then kimchi to soften the acidity.`,`Season with soy sauce or gochujang and add the main ingredient.`,`Finish with sesame oil for a Korean home-cooked aroma.`]},japanese:{koTitle:`일식풍 달걀 덮밥`,enTitle:`Japanese-style egg rice bowl`,searchTerms:[`Japanese`,`Teriyaki`,`rice bowl`],allow:[`밥`,`쌀`,`달걀`,`양파`,`대파`,`두부`,`간장`,`설탕`,`식초`,`냉동 새우`,`김`],required:[`쌀`,`달걀`,`간장`],methodKo:[`밥 위에 올릴 달걀과 양파를 준비해요.`,`간장과 설탕을 아주 조금 넣어 짭조름한 소스를 만들어요.`,`양파를 먼저 익힌 뒤 달걀을 부드럽게 풀어 넣어요.`,`밥 위에 올리고 김이나 대파를 살짝 더해요.`],methodEn:[`Prepare egg and onion for a rice bowl topping.`,`Make a light savory sauce with soy sauce and a little sugar.`,`Cook onion first, then softly set the egg.`,`Spoon over rice and finish with seaweed or green onion.`]},chinese:{koTitle:`중식풍 대파 볶음`,enTitle:`Chinese-style scallion stir-fry`,searchTerms:[`Chinese`,`fried rice`,`stir fry`],allow:[`대파`,`양파`,`당근`,`냉동 새우`,`달걀`,`밥`,`냉동밥`,`간장`,`굴소스`,`식용유`,`후추`],required:[`대파`,`간장`,`굴소스`],methodKo:[`대파와 양파를 넉넉히 썰어 향을 준비해요.`,`식용유를 두른 팬에서 대파를 먼저 볶아요.`,`밥이나 새우, 달걀을 넣고 센 불 느낌으로 빠르게 볶아요.`,`간장과 굴소스를 조금 넣어 윤기 있게 마무리해요.`],methodEn:[`Slice plenty of scallion and onion for aroma.`,`Stir-fry scallion first in hot oil.`,`Add rice, shrimp, or egg and toss quickly.`,`Finish glossy with soy sauce and oyster sauce.`]},meat:{koTitle:`기본 고기 굽기`,enTitle:`simple grilled meat`,searchTerms:[`grilled`,`pork`,`beef`],allow:[`냉동 대패삼겹살`,`양파`,`대파`,`마늘`,`소금`,`후추`,`식용유`,`간장`,`참기름`,`김치`],required:[`냉동 대패삼겹살`,`소금`,`후추`],methodKo:[`고기는 키친타월로 물기를 줄이고 소금, 후추로 밑간해요.`,`팬을 충분히 달군 뒤 고기를 펼쳐 올려요.`,`한쪽 면이 노릇해지면 뒤집고 양파나 대파를 곁들여요.`,`기름을 살짝 빼고 따뜻한 접시에 담아요.`],methodEn:[`Pat the meat dry and season with salt and pepper.`,`Heat the pan well and spread the meat in a single layer.`,`Flip when browned and add onion or green onion.`,`Drain excess fat slightly and plate while hot.`]},quick:{koTitle:`초간단 달걀밥`,enTitle:`quick egg rice`,searchTerms:[`egg`,`rice`,`omelette`],allow:[`밥`,`냉동밥`,`달걀`,`간장`,`참기름`,`김`,`대파`,`후추`],required:[`쌀`,`달걀`,`간장`],methodKo:[`밥을 따뜻하게 데우고 달걀을 준비해요.`,`달걀은 반숙이나 스크램블로 빠르게 익혀요.`,`밥에 간장과 참기름을 조금 넣고 섞어요.`,`달걀과 김을 올려 간단한 한 그릇으로 마무리해요.`],methodEn:[`Warm the rice and prepare an egg.`,`Cook the egg quickly as soft scramble or sunny-side-up.`,`Mix rice with a little soy sauce and sesame oil.`,`Top with egg and seaweed for a simple bowl.`]}},m=ee(),h=`home`,g=`fridge`,_=`all`,v=`fridgeClean`,y=1,b=null,x=null;te(),pt(),ht();function S(){return{createdAt:new Date().toISOString(),lang:`ko`,user:null,inventory:C()}}function C(){return{fridge:[w(`달걀`,6,`개`,`단백질`,``,null),w(`대파`,1,`단`,`채소`,``,null),w(`두부`,1,`모`,`단백질`,``,null),w(`양파`,2,`개`,`채소`,``,null),w(`당근`,1,`개`,`채소`,``,null),w(`애호박`,1,`개`,`채소`,``,null),w(`김치`,1,`통`,`기본`,``,null),w(`우유`,1,`통`,`유제품`,``,null),w(`치즈`,4,`장`,`유제품`,``,null),w(`버터`,1,`개`,`유제품`,``,null)],freezer:[w(`냉동 만두`,12,`개`,`간편식`,``,null),w(`냉동밥`,2,`개`,`간편식`,``,null),w(`냉동 대패삼겹살`,1,`봉지`,`냉동재료`,``,null),w(`냉동 새우`,1,`봉지`,`냉동재료`,``,null),w(`냉동 브로콜리`,1,`봉지`,`냉동재료`,``,null),w(`냉동 블루베리`,1,`봉지`,`냉동재료`,``,null)],sauce:[w(`간장`,7,`스푼`,`기본 간`,Z(`간장`),null),w(`고추장`,3,`스푼`,`매운맛`,Z(`고추장`),null),w(`참기름`,2,`스푼`,`기름/향`,Z(`참기름`),null),w(`된장`,4,`스푼`,`기본 간`,Z(`된장`),null),w(`소금`,6,`스푼`,`기본 간`,Z(`소금`),null),w(`설탕`,6,`스푼`,`단맛`,Z(`설탕`),null),w(`후추`,5,`스푼`,`향신료`,Z(`후추`),null),w(`식초`,4,`스푼`,`소스`,Z(`식초`),null),w(`고춧가루`,4,`스푼`,`매운맛`,``,null),w(`식용유`,1,`통`,`기름/향`,``,null),w(`굴소스`,2,`스푼`,`소스`,``,null),w(`마요네즈`,1,`통`,`소스`,``,null),w(`케첩`,1,`통`,`소스`,``,null)],room:[w(`식빵`,4,`장`,`빵`,``,null),w(`라면`,2,`봉`,`면`,``,null),w(`쌀`,3,`컵`,`곡물`,``,null),w(`파스타면`,1,`봉지`,`면`,``,null),w(`참치캔`,2,`캔`,`통조림`,``,null),w(`김`,5,`장`,`기본`,``,null),w(`감자`,3,`개`,`구황작물`,``,null),w(`고구마`,2,`개`,`구황작물`,``,null),w(`밀가루`,2,`컵`,`곡물`,``,null)]}}function w(e,t,n,r,i,a){return{id:crypto.randomUUID(),name:e,amount:t,unit:n,category:r,memo:i,photo:a,createdAt:new Date().toISOString()}}function ee(){try{let t=localStorage.getItem(e);return t?{...S(),...JSON.parse(t)}:S()}catch{return S()}}function T(){localStorage.setItem(e,JSON.stringify(m))}function te(){let e=C();m.inventory=m.inventory||{},Object.entries(e).forEach(([e,t])=>{m.inventory[e]=Array.isArray(m.inventory[e])?m.inventory[e]:[],t.forEach(t=>{m.inventory[e].some(e=>e.name===t.name)||m.inventory[e].push(t)})}),T()}function E(){try{return m?.lang||`ko`}catch{return`ko`}}function D(e){return(E()===`ko`?n:r)[e]||e}function ne(e,t){return Object.entries(t).reduce((e,[t,n])=>e.replaceAll(`{${t}}`,n),e)}function O(e){return E()===`ko`?e:c[e]||e}function re(e){return E()===`ko`?e:d[e]||e}function k(e){return e?o[e]?.[E()]||(E()===`ko`?e:f[e]||e):D(`defaultCategory`)}function ie(e,t){return t===`sauce`&&lt(e.name)?Z(e.name):e.memo}function A(){if(m.user)return!1;let e=new Date(m.createdAt).getTime();return Date.now()-e>=1440*60*1e3*3}function ae(){let e=new Date(m.createdAt).getTime(),t=Math.floor((Date.now()-e)/(1440*60*1e3))+1;return Math.max(1,Math.min(t,4))}function j(){return!!m.user||!A()}function oe(){if(m.user||A())return;let e=new Date().toISOString().slice(0,10);localStorage.getItem(t)!==e&&(x=`signup`)}function M(){let e=document.querySelector(`#app`);e.innerHTML=`
    <div class="phone-shell">
      ${se()}
      ${ce()}
      <main class="content">${ue()}</main>
      ${_e()}
      ${ve()}
      ${ye()}
    </div>
  `,we()}function se(){let e=m.user?m.user.email.split(`@`)[0]:D(`login`),t=m.user?D(`logout`):D(`signup`);return`
    <header class="top-auth">
      <button class="ghost-pill auth-left" data-action="login">${e}</button>
      <button class="${m.user?`ghost-pill`:`dark-pill`} auth-center" data-action="${m.user?`logout`:`signup`}">${t}</button>
      <button class="icon-pill auth-right" data-action="toggle-lang">${D(`lang`)}</button>
    </header>
  `}function ce(){let e=le();return`
    <section class="page-panel">
      ${h===`home`?``:`<button class="back-button" data-action="back">${D(`back`)}</button>`}
      <h1 class="big-title">${e.big}</h1>
    </section>
  `}function le(){return h===`home`?{small:m.user?`Premium`:D(`homeSmall`),big:m.user?D(`premiumBig`):D(`homeBig`)}:h===`cold`?{small:D(`pantrySmall`),big:D(g===`freezer`?`freezerBig`:`fridgeBig`)}:h===`sauce`?{small:D(`seasonTitle`),big:D(`sauceBig`)}:h===`room`?{small:D(`pantrySmall`),big:D(`roomBig`)}:h===`recipe`?{small:D(`recipeSmall`),big:b?.title||D(`cookStart`)}:{small:D(`homeSmall`),big:D(`homeBig`)}}function ue(){return!j()&&h!==`home`?I():h===`home`?N():h===`cold`?fe(g):h===`sauce`?me():h===`room`?fe(`room`):h===`recipe`?he():N()}function N(){let e=!j();return`
    <section class="hero-band">
      <h2 class="hero-title"><span>${D(`heroTitleLine1`)}</span><span>${D(`heroTitleLine2`)}</span></h2>
      <p>${D(`heroCopy`)}</p>
    </section>
    <section class="trial-strip">
      <div>
        <strong>${m.user?`Premium`:e?D(`signupRequired`):`${D(`trial`)} ${ae()}/3`}</strong>
        <span>${m.user?D(`joinedCopy`):D(`trialCopy`)}</span>
      </div>
      ${m.user?``:`<button class="pill" data-action="signup">${D(`joinNow`)}</button>`}
    </section>
    ${e?I():``}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${D(`storageNow`)}</h2>
      </div>
      <div class="grid-2">
        ${Object.entries(i).map(([e,t])=>de(e,t)).join(``)}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${D(`cookStart`)}</h2>
        <label class="field" style="width: 96px">
          <span>${D(`servings`)}</span>
          <input type="number" min="1" max="12" value="${y}" data-input="servings" />
        </label>
      </div>
      <div class="cook-grid">
        ${a.map(([e,t,n,r])=>`
              <button class="cook-card ${v===e?`active`:``}" data-cook="${e}">
                <span class="cook-emoji">${r}</span>
                <strong>${m.lang===`ko`?t:n}</strong>
              </button>
            `).join(``)}
      </div>
      <div style="margin-top: 12px">
        <button class="pill" style="width: 100%; min-height: 46px" data-action="make-recipe">${D(`makeRecipe`)}</button>
      </div>
    </section>
  `}function de(e,t){let n=m.inventory[e].length,r=m.lang===`ko`?t.ko:t.en,i=m.lang===`ko`?t.descKo:t.descEn;return`
    <button class="storage-card" data-storage-jump="${e}">
      <span class="storage-emoji">${t.emoji}</span>
      <strong>${r}</strong>
      <span>${i} · ${n} ${D(`savedCount`)}</span>
    </button>
  `}function fe(e){return`
    ${e===`fridge`||e===`freezer`?pe():``}
    ${P(e)}
    <section class="section">
      <div class="item-list">
        ${m.inventory[e].length?m.inventory[e].map(t=>F(t,e)).join(``):`<div class="card empty">${D(`empty`)}</div>`}
      </div>
    </section>
  `}function pe(){return`
    <div class="category-row">
      <button class="chip ${g===`fridge`?`active`:``}" data-set-storage="fridge">🥬 ${D(`fridgeBig`)}</button>
      <button class="chip ${g===`freezer`?`active`:``}" data-set-storage="freezer">🧊 ${D(`freezerBig`)}</button>
    </div>
  `}function P(e){let t=e===`sauce`;return`
    <section class="section card">
      <div class="section-head">
        <h2 class="section-title">${D(`addItem`)}</h2>
      </div>
      <form class="form-grid" data-form="${e}">
        <div class="field photo-field">
          <label>${D(`photo`)}</label>
          <div class="photo-actions">
            <label class="photo-choice">
              <input type="file" accept="image/*" capture="environment" name="photoCamera" data-photo-input="${e}" />
              <span>${D(`cameraPick`)}</span>
            </label>
            <label class="photo-choice">
              <input type="file" accept="image/*" name="photoGallery" data-photo-input="${e}" />
              <span>${D(`imagePick`)}</span>
            </label>
          </div>
          <p class="photo-help" data-photo-status="${e}">${D(`photoHelp`)}</p>
        </div>
        <div class="field">
          <label>${D(`name`)}</label>
          <input name="name" required placeholder="${D(t?`exampleSauce`:`exampleIngredient`)}" data-name-input />
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
        <button class="ghost-pill" type="button" data-action="analyze-photo">${D(`analyzePhoto`)}</button>
        <button class="pill" type="submit">${D(`save`)}</button>
      </form>
    </section>
  `}function F(e,t){return`
    <article class="inventory-item ${Number(e.amount)<=(t===`sauce`?2:1)?`low`:``}">
      <div class="thumb">${e.photo?`<img src="${e.photo}" alt="" />`:i[t].emoji}</div>
      <div>
        <p class="item-name">${O(e.name)}</p>
        <p class="item-meta">${e.amount}${re(e.unit)} · ${k(e.category)}${ie(e,t)?`<br>${ie(e,t)}`:``}</p>
      </div>
      <div class="item-actions">
        ${t===`sauce`?`<button class="tiny-button" data-detail="${e.id}">${D(`detail`)}</button>`:``}
        <button class="tiny-button" data-web-search="${$(e.name)}">${D(`searchWeb`)}</button>
        <button class="tiny-button" data-edit="${t}:${e.id}">${D(`edit`)}</button>
        <button class="tiny-button" data-use="${t}:${e.id}">${D(`use`)}</button>
        <button class="tiny-button delete-button" data-delete="${t}:${e.id}" title="${D(`delete`)}">${D(`deleteSymbol`)}</button>
      </div>
    </article>
  `}function me(){let e=_===`all`?m.inventory.sauce:m.inventory.sauce.filter(e=>ct(e.category)===_);return`
    ${P(`sauce`)}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${D(`allSeasonings`)}</h2>
      </div>
      <div class="category-row">
        <button class="chip ${_===`all`?`active`:``}" data-season-cat="all">${D(`all`)}</button>
        ${Object.entries(o).map(([e,t])=>`<button class="chip ${_===e?`active`:``}" data-season-cat="${e}">${t[m.lang]}</button>`).join(``)}
      </div>
    </section>
    <section class="section">
      <div class="item-list">
        ${e.length?e.map(e=>F(e,`sauce`)).join(``):`<div class="card empty">${D(`empty`)}</div>`}
      </div>
    </section>
  `}function he(){return b?`
    <section class="recipe-hero">
      <h2>${b.title}</h2>
      <p>${b.summary}</p>
      <div class="chef-source">
        <strong>${D(`smartChef`)}</strong>
        <span>${b.sourceLabel}</span>
        ${b.reference?.name?`<small>${D(`referenceRecipe`)}: ${b.reference.name}</small>`:``}
      </div>
    </section>
    <section class="section card">
      <h2 class="section-title">${D(`ingredientAmounts`)}</h2>
      <div class="measure-list" style="margin-top: 10px">
        ${b.ingredients.map(e=>`
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
        ${b.shopping.length?b.shopping.map(e=>`<div>${e}</div>`).join(``):`<div>${D(`noShopping`)}</div>`}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${D(`steps`)}</h2>
      </div>
      ${b.steps.map((e,t)=>ge(e,t)).join(``)}
    </section>
    <section class="section card final-visual">
      <h2 class="section-title">${D(`finalVisual`)}</h2>
      <p>${b.visual}</p>
    </section>
    <section class="copy-box">
      <div class="field">
        <label>${D(`promptLabel`)}</label>
        <textarea readonly>${b.prompt}</textarea>
      </div>
      <button class="pill" style="width:100%; margin-top:10px" data-action="copy-prompt">${D(`copyPrompt`)}</button>
    </section>
  `:N()}function ge(e,t){return`
    <article class="step-card text-step">
      <div class="step-number">${t+1}</div>
      <div class="step-body">
        <h3>${e.title}</h3>
        <p>${e.text}</p>
      </div>
    </article>
  `}function I(){return`
    <section class="card gate">
      <div>
        <h2>${D(`lockedTitle`)}</h2>
        <p>${D(`lockedCopy`)}</p>
        <button class="pill" data-action="signup">${D(`joinNow`)}</button>
      </div>
    </section>
  `}function _e(){return h===`home`?`
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
  `:``}function ve(){let e=m.user?D(`premiumNav`):D(`homeSmall`);return`
    <nav class="bottom-nav">
      ${L(`home`,m.user?`⭐`:`🏠`,e)}
      ${L(`cold`,`❄️`,D(`bottomCold`))}
      ${L(`sauce`,`🧂`,D(`bottomSauce`))}
      ${L(`room`,`🍞`,D(`bottomRoom`))}
    </nav>
  `}function L(e,t,n){return`
    <button class="bottom-tab ${h===e?`active`:``}" data-tab="${e}">
      <span class="emoji">${t}</span>
      <span class="label">${n}</span>
    </button>
  `}function ye(){return x===`signup`||x===`login`?be(x):x===`celebrate`?xe():x?.startsWith(`detail:`)?Se(x.split(`:`)[1]):x?.startsWith(`edit:`)?Ce(x.split(`:`)[1],x.split(`:`)[2]):``}function be(e){return`
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
  `}function xe(){return`
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
  `}function Se(e){let t=m.inventory.sauce.find(t=>t.id===e);if(!t)return``;let n=Q(t.name,t.memo);return`
    <div class="modal-backdrop">
      <article class="modal">
        <h2>${O(t.name)}</h2>
        <p><strong>${k(t.category||n.category)}</strong> · ${t.amount}${re(t.unit)}</p>
        <p>${n.usage}</p>
        <p>${n.tip}</p>
        <p>${ne(D(`searchHint`),{name:O(t.name)})}</p>
        <div class="modal-actions">
          <button class="ghost-pill" data-web-search="${t.name}">${D(`searchWeb`)}</button>
          <button class="pill" data-action="close-modal">${D(`confirm`)}</button>
        </div>
      </article>
    </div>
  `}function Ce(e,t){let n=m.inventory[e]?.find(e=>e.id===t);return n?`
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
            <textarea name="memo">${dt(n.memo||``)}</textarea>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-pill" data-action="close-modal">${D(`cancel`)}</button>
          <button type="submit" class="pill">${D(`saveEdit`)}</button>
        </div>
      </form>
    </div>
  `:``}function we(){document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,Te)}),document.querySelectorAll(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.tab;t!==`home`&&!j()?h=t:(h=t,t===`cold`&&![`fridge`,`freezer`].includes(g)&&(g=`fridge`)),M()})}),document.querySelectorAll(`[data-storage-jump]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.storageJump;t===`fridge`||t===`freezer`?(g=t,h=`cold`):h=t,M()})}),document.querySelectorAll(`[data-set-storage]`).forEach(e=>{e.addEventListener(`click`,()=>{g=e.dataset.setStorage,M()})}),document.querySelectorAll(`[data-cook]`).forEach(e=>{e.addEventListener(`click`,()=>{v=e.dataset.cook,document.querySelectorAll(`[data-cook]`).forEach(e=>{e.classList.toggle(`active`,e.dataset.cook===v)})})}),document.querySelectorAll(`[data-form]`).forEach(e=>{e.addEventListener(`submit`,ke)}),document.querySelectorAll(`[data-photo-input]`).forEach(e=>{e.addEventListener(`change`,()=>Ee(e))}),document.querySelectorAll(`[data-auth-form]`).forEach(e=>{e.addEventListener(`submit`,Ae)}),document.querySelectorAll(`[data-edit-form]`).forEach(e=>{e.addEventListener(`submit`,je)}),document.querySelectorAll(`[data-use]`).forEach(e=>{e.addEventListener(`click`,()=>Me(e.dataset.use))}),document.querySelectorAll(`[data-delete]`).forEach(e=>{e.addEventListener(`click`,()=>Ne(e.dataset.delete))}),document.querySelectorAll(`[data-edit]`).forEach(e=>{e.addEventListener(`click`,()=>{x=`edit:${e.dataset.edit}`,M()})}),document.querySelectorAll(`[data-detail]`).forEach(e=>{e.addEventListener(`click`,()=>{x=`detail:${e.dataset.detail}`,M()})}),document.querySelectorAll(`[data-season-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{_=e.dataset.seasonCat,M()})}),document.querySelectorAll(`[data-web-search]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=m.lang===`ko`?`${e.dataset.webSearch} 요리 활용법 맛 보관법`:`${O(e.dataset.webSearch)} cooking uses taste storage tips`,n=encodeURIComponent(t);window.open(`https://www.google.com/search?q=${n}`,`_blank`,`noopener,noreferrer`)})}),document.querySelectorAll(`[data-input='servings']`).forEach(e=>{e.addEventListener(`input`,()=>{y=Math.max(1,Number(e.value)||1)})})}async function Te(e){let n=e.currentTarget,r=e.currentTarget.dataset.action;if(r===`toggle-lang`&&(m.lang=m.lang===`ko`?`en`:`ko`,T()),r===`signup`&&(x=`signup`),r===`login`&&(x=`login`),r===`logout`&&(m.user=null,T()),r===`close-today`&&(localStorage.setItem(t,new Date().toISOString().slice(0,10)),x=null),r===`close-modal`&&(x=null),r===`back`&&(h=`home`),r===`make-recipe`&&(j()?(await Pe(),h=`recipe`):x=`signup`),r===`copy-prompt`){await ft(b?.prompt||``),n.textContent=D(`copied`);return}if(r===`analyze-photo`){De(n.closest(`form`));return}M()}function Ee(e){let t=e.closest(`form`),n=e.files?.[0];!t||!n||Oe(t,n)}function De(e){e&&Oe(e,Le(new FormData(e)))}function Oe(e,t){let n=e.dataset.form,r=e.querySelector(`[name='name']`),i=e.querySelector(`[name='category']`),a=e.querySelector(`[name='memo']`),o=e.querySelector(`[data-photo-status]`),s=Re(t?.name||``,n)||ze(r?.value||``),c=s||String(r?.value||``).trim();s&&r&&!r.value.trim()&&(r.value=s);let l=Be(c,n,a?.value||``);i&&!i.value.trim()&&(i.value=l.category),a&&(!a.value.trim()||s)&&(a.value=l.memo),o&&(o.textContent=s?`${D(`photoDetected`)}: ${O(s)} · ${l.category}`:D(`photoHelp`))}async function ke(e){e.preventDefault();let t=e.currentTarget,n=t.dataset.form,r=new FormData(t),i=String(r.get(`name`)||``).trim();if(!i)return;let a=Le(r),o=a&&a.size?await ut(a):null,s=String(r.get(`memo`)||``).trim(),c=String(r.get(`category`)||``).trim(),l=Be(i,n,s);s||=l.memo,c||=l.category,m.inventory[n].unshift(w(i,Number(r.get(`amount`))||0,String(r.get(`unit`)||`개`),c,s,o)),T(),M()}async function Ae(e){e.preventDefault();let t=new FormData(e.currentTarget),n=String(t.get(`email`)).trim();await mt(n),m.user={email:n,joinedAt:new Date().toISOString(),provider:`cloudflare-ready-local`},T(),h=`home`,x=`celebrate`,M()}function je(e){e.preventDefault();let[t,n]=e.currentTarget.dataset.editForm.split(`:`),r=m.inventory[t]?.find(e=>e.id===n);if(!r)return;let i=new FormData(e.currentTarget);r.name=String(i.get(`name`)||``).trim()||r.name,r.amount=Number(i.get(`amount`))||0,r.unit=String(i.get(`unit`)||``).trim()||r.unit,r.category=String(i.get(`category`)||``).trim(),r.memo=String(i.get(`memo`)||``).trim(),t===`sauce`&&!r.memo&&(r.memo=Z(r.name)),T(),x=null,M()}function Me(e){let[t,n]=e.split(`:`),r=m.inventory[t].find(e=>e.id===n);r&&(r.amount=Math.max(0,Number(r.amount)-1),T(),M())}function Ne(e){let[t,n]=e.split(`:`);m.inventory[t]=m.inventory[t].filter(e=>e.id!==n),T(),M()}async function Pe(){let e=p[v]||p.fridgeClean,t=[...m.inventory.fridge,...m.inventory.freezer,...m.inventory.sauce,...m.inventory.room].filter(e=>Number(e.amount)>0),n=t.map(e=>e.name),r=Ie(t.filter(t=>e.allow.includes(t.name)),e).map(e=>e.name),i=a.find(([e])=>e===v),o=r.map(O),s=r.map(e=>c[e]||e),l=We(v,e,r,y),u=m.lang===`ko`?e.koTitle:e.enTitle,d=e.enTitle||i?.[2]||`easy home cooking`,f=m.lang===`ko`?`${u} ${y}${D(`servingsSuffix`)}`:`${u} for ${y} ${D(`servingsSuffix`)}`,h=`${d} for ${y} servings`,g=(e.required||[]).filter(e=>!n.some(t=>Ze(t,e))).map(e=>tt(e,l)),_=o.join(`, `)||D(`basicIngredients`),x=await at(e,s),S=it(d,s,l,e),C=m.lang===`ko`?rt(o,l,e):S,w=x?`${D(`sourceInternet`)}: TheMealDB`:D(`sourceLocal`);b={title:f,summary:Fe(_,x,l),ingredients:l.map(e=>({label:m.lang===`ko`?O(e.name):e.enName,amount:m.lang===`ko`?e.ko:e.en})),shopping:g,steps:Qe(v,e,l),visual:C,reference:x,sourceLabel:w,prompt:st(h,s,l,d,S,x)},nt(r),T()}function Fe(e,t,n){let r=n.slice(0,3).map(e=>m.lang===`ko`?`${O(e.name)} ${e.ko}`:`${e.enName} ${e.en}`).join(`, `),i=ne(D(`recipeSummary`),{items:e}),a=r?m.lang===`ko`?` 먼저 ${r}처럼 계량해서 시작해요.`:` Start by measuring ${r}.`:``;return t?m.lang===`ko`?`${i}${a} 무료 레시피 DB의 “${t.name}”도 참고했어요.`:`${i}${a} Also checked the free recipe DB reference "${t.name}".`:`${i}${a}`}function Ie(e,t){let n=[];return t.required.forEach(t=>{let r=e.find(e=>e.name===t);r&&!n.some(e=>e.name===r.name)&&n.push(r)}),e.forEach(e=>{n.length<5&&!n.some(t=>t.name===e.name)&&n.push(e)}),n}function Le(e){let t=e.get(`photoCamera`),n=e.get(`photoGallery`);return t&&t.size?t:n&&n.size?n:null}function Re(e,t){let n=R(e);return n&&Object.keys(t===`sauce`?s:u).find(e=>(u[e]||[e,c[e]]).filter(Boolean).some(e=>n.includes(R(e))))||``}function ze(e){let t=R(e);return t&&Object.keys({...l,...s}).find(e=>{let n=u[e]||[e,c[e]];return R(e)===t||n.filter(Boolean).some(e=>t.includes(R(e)))})||``}function R(e){return String(e||``).toLowerCase().replace(/\.[a-z0-9]+$/i,``).replace(/[^a-z0-9가-힣]/g,``)}function Be(e,t,n=``){let r=ze(e)||e;if(t===`sauce`){let e=Q(r,n);return{category:e.category,memo:n||Ve(r,{tasteKo:He(r),tasteEn:Ue(r),usageKo:e.usage,usageEn:e.usage,tipKo:e.tip,tipEn:e.tip})}}let i=l[r];return i?{category:E()===`ko`?i.category:f[i.category]||i.category,memo:n||Ve(r,i)}:{category:t===`freezer`?k(`냉동재료`):D(`defaultCategory`),memo:n||(E()===`ko`?`사진과 이름 기준으로 저장했어요. 맛과 활용법은 무료 검색에서 "${e} 요리 활용법 맛 보관법"으로 확인해 보세요.`:`Saved from photo and name. Use free search for "${e} cooking uses taste storage tips" to improve the note.`)}}function Ve(e,t){return E()===`ko`?`맛: ${t.tasteKo} · 사용 요리: ${t.usageKo} · 팁: ${t.tipKo} · 무료 검색 키워드: "${O(e)} 요리 활용법 맛 보관법"`:`Taste: ${t.tasteEn} · Cooking uses: ${t.usageEn} · Tip: ${t.tipEn} · Free search keyword: "${O(e)} cooking uses taste storage tips"`}function He(e){return e.includes(`설탕`)?`달콤하고 윤기를 주는 맛`:e.includes(`식초`)?`새콤하고 산뜻한 맛`:e.includes(`고추`)||e.includes(`후추`)?`매콤하고 향이 강한 맛`:e.includes(`참기름`)||e.includes(`식용유`)?`고소하고 향을 살리는 맛`:e.includes(`소금`)||e.includes(`간장`)||e.includes(`된장`)||e.includes(`굴소스`)?`짭조름하고 감칠맛 있는 맛`:`요리의 간과 향을 보강하는 맛`}function Ue(e){return e.includes(`설탕`)?`sweet and glossy`:e.includes(`식초`)?`sour and bright`:e.includes(`고추`)||e.includes(`후추`)?`spicy and aromatic`:e.includes(`참기름`)||e.includes(`식용유`)?`nutty or rich`:e.includes(`소금`)||e.includes(`간장`)||e.includes(`된장`)||e.includes(`굴소스`)?`salty and savory`:`seasoning that adds flavor and aroma`}function We(e,t,n,r){return[...new Set([...t.required||[],...n])].filter(e=>t.allow.includes(e)).slice(0,7).map(t=>{let n=Ge(t,e,r);return{name:t,enName:c[t]||t,ko:n.ko,en:n.en}})}function Ge(e,t,n){let r=Math.max(1,Number(n)||1);return{dessert:{우유:U(120,r),달걀:W(`egg`,r),설탕:V(1.5,r),버터:V(.5,r),밀가루:V(3,r),식빵:G(1,r),고구마:W(`sweet potato`,.5*r),"냉동 블루베리":V(2,r)},bread:{밀가루:H(.75,r),우유:U(80,r),버터:V(1,r),설탕:V(1,r),소금:J(r),달걀:W(`egg`,r),식빵:G(1,r),치즈:G(1,r)},snack:{식빵:G(2,r),달걀:W(`egg`,r),치즈:G(1,r),버터:V(.5,r),마요네즈:V(.5,r),케첩:V(.5,r),참치캔:Ye(.5,r),우유:U(50,r),설탕:V(.5,r)},fridgeClean:{달걀:W(`egg`,r),대파:q(`대`,`stalk`,.5,r),두부:Xe(.5,r),양파:W(`onion`,.5*r),당근:W(`carrot`,.3*r),애호박:W(`zucchini`,.3*r),김치:H(.5,r),간장:V(1,r),식용유:V(1,r),참기름:V(.5,r),고추장:V(.5,r),밥:K(1,r),냉동밥:K(1,r)},party:{치즈:G(1,r),식빵:G(2,r),참치캔:Ye(.5,r),"냉동 새우":W(`shrimp`,4*r),"냉동 브로콜리":H(.5,r),감자:W(`potato`,.5*r),마요네즈:V(1,r),케첩:V(.5,r),식용유:V(.5,r)},korean:{밥:K(1,r),쌀:H(.5,r),김치:H(.7,r),두부:Xe(.5,r),대파:q(`대`,`stalk`,.5,r),양파:W(`onion`,.5*r),달걀:W(`egg`,r),간장:V(1,r),고추장:V(.7,r),참기름:V(.5,r)},japanese:{밥:K(1,r),쌀:H(.5,r),달걀:W(`egg`,1.5*r),양파:W(`onion`,.5*r),대파:q(`대`,`stalk`,.3,r),간장:V(1,r),설탕:V(.5,r),식초:V(.3,r),김:Je(.5,r),"냉동 새우":W(`shrimp`,4*r)},chinese:{대파:q(`대`,`stalk`,1,r),양파:W(`onion`,.5*r),당근:W(`carrot`,.3*r),"냉동 새우":W(`shrimp`,5*r),달걀:W(`egg`,r),밥:K(1,r),냉동밥:K(1,r),간장:V(1,r),굴소스:V(.7,r),식용유:V(1,r)},meat:{"냉동 대패삼겹살":qe(180,r),양파:W(`onion`,.5*r),대파:q(`대`,`stalk`,.5,r),마늘:W(`garlic clove`,2*r),소금:J(r),후추:Y(3,r),식용유:V(.5,r),간장:V(.7,r),참기름:V(.3,r),김치:H(.5,r)},quick:{밥:K(1,r),냉동밥:K(1,r),달걀:W(`egg`,r),간장:V(1,r),참기름:V(.5,r),김:Je(.5,r),대파:q(`대`,`stalk`,.3,r),후추:Y(2,r)}}[t]?.[e]||Ke(e,r)}function Ke(e,t){return e.includes(`간장`)||e.includes(`소스`)||e.includes(`기름`)?V(1,t):e.includes(`소금`)||e.includes(`후추`)?J(t):e.includes(`밥`)?K(1,t):e.includes(`달걀`)?W(`egg`,t):{ko:`${z(t)}인분 사용할 만큼`,en:`enough for ${z(t)} serving${t>1?`s`:``}`}}function z(e){let t=Math.round(e*10)/10;return String(t)}function B(e,t){return e===`tbsp`?`${z(t)} tbsp`:t<=1?`${z(t)} ${e}`:e===`sweet potato`?`${z(t)} sweet potatoes`:e.endsWith(`sh`)?`${z(t)} ${e}`:`${z(t)} ${e}s`}function V(e,t){let n=e*t;return{ko:`${z(n)}스푼`,en:B(`tbsp`,n)}}function H(e,t){let n=e*t;return{ko:`${z(n)}컵`,en:B(`cup`,n)}}function U(e,t){let n=Math.round(e*t);return{ko:`${n}ml`,en:`${n} ml`}}function qe(e,t){let n=Math.round(e*t);return{ko:`${n}g`,en:`${n} g`}}function W(e,t){return{ko:`${z(t)}개`,en:B(e,t)}}function G(e,t){let n=e*t;return{ko:`${z(n)}장`,en:B(`slice`,n)}}function Je(e,t){let n=e*t;return{ko:`${z(n)}장`,en:B(`sheet`,n)}}function Ye(e,t){let n=e*t;return{ko:`${z(n)}캔`,en:B(`can`,n)}}function K(e,t){let n=e*t;return{ko:`${z(n)}공기`,en:B(`bowl`,n)}}function Xe(e,t){let n=e*t;return{ko:`${z(n)}모`,en:B(`block`,n)}}function q(e,t,n,r){let i=n*r;return{ko:`${z(i)}${e}`,en:B(t,i)}}function J(e){return{ko:e===1?`한 꼬집`:`${z(e)}꼬집`,en:e===1?`1 pinch`:`${z(e)} pinches`}}function Y(e,t){let n=e*t;return{ko:`${z(n)}번 톡톡`,en:`${z(n)} shakes`}}function Ze(e,t){let n=c[e]||``;return t.includes(e)||n&&t.toLowerCase().includes(n.toLowerCase())}function Qe(e,t,n){let r=$e(n,`ko`),i=$e(n,`en`),a=[D(`stepPrepTitle`),D(`stepHeatTitle`),D(`stepSeasonTitle`),D(`stepPlateTitle`)],o=[`Measure`,`Cook`,`Check`,`Plate`],s=et(e,n);return(m.lang===`ko`?s.ko:s.en).map((e,t)=>({title:m.lang===`ko`?a[t]:o[t],text:t===0?`${e} ${m.lang===`ko`?`계량: ${r}.`:`Measurements: ${i}.`}`:e}))}function $e(e,t){return e.map(e=>t===`ko`?`${O(e.name)} ${e.ko}`:`${e.enName} ${e.en}`).join(`, `)}function X(e,t,n=m.lang){let r=e.find(e=>e.name===t);return r?n===`ko`?r.ko:r.en:``}function et(e,t){let n=X(t,`밀가루`,`ko`),r=X(t,`밀가루`,`en`),i=X(t,`냉동 블루베리`,`ko`),a=X(t,`냉동 블루베리`,`en`),o={dessert:[`볼에 우유 ${X(t,`우유`,`ko`)}, 달걀 ${X(t,`달걀`,`ko`)}, 설탕 ${X(t,`설탕`,`ko`)}${n?`, 밀가루 ${n}`:``}을 넣고 30초 섞어요.`,`팬에 버터 ${X(t,`버터`,`ko`)||`0.5스푼`}을 녹이고 반죽을 부은 뒤${i?` 냉동 블루베리 ${i}을 위에 올려요.`:` 달콤한 재료를 위에 올려요.`}`,`약불로 낮추고 뚜껑을 덮어 6~8분 익혀요. 가운데를 젓가락으로 찔렀을 때 묽은 반죽이 많이 묻지 않으면 거의 익은 거예요.`,`가장자리가 노릇하면 불을 끄고 2분 두었다가 담아요. 설탕을 아주 조금 더 뿌리면 이미지처럼 디저트 느낌이 살아나요.`],bread:[`볼에 밀가루 ${X(t,`밀가루`,`ko`)}, 우유 ${X(t,`우유`,`ko`)}, 설탕 ${X(t,`설탕`,`ko`)}, 소금 ${X(t,`소금`,`ko`)||`한 꼬집`}을 넣어 되직하게 섞어요.`,`버터 ${X(t,`버터`,`ko`)}을 녹여 반죽에 섞고 3분 쉬게 해요. 너무 묽으면 밀가루 1스푼을 더 넣어요.`,`약불 팬에 반죽을 1.5cm 두께로 펴고 뚜껑을 덮어 5~6분, 뒤집어서 4분 더 익혀요.`,`겉이 노릇하고 눌렀을 때 천천히 올라오면 완성이에요. 버터를 조금 올려 윤기 있게 담아요.`],snack:[`식빵, 치즈, 달걀처럼 바로 익는 재료를 계량대로 꺼내요.`,`약불 팬에 버터를 녹이고 식빵을 한 면당 1~2분 노릇하게 구워요.`,`달걀은 완전히 익히고 치즈는 30초 정도 녹여요. 마요네즈나 케첩은 마지막에 얇게 발라요.`,`반으로 잘라 단면이 보이게 세우면 간식 사진처럼 먹기 좋아 보여요.`],fridgeClean:[`채소는 한입 크기, 두부나 달걀은 부서지지 않게 준비해요.`,`중불 팬에 식용유를 두르고 대파를 30초 볶은 뒤 단단한 재료부터 넣어요.`,`간장은 1인분 기준 1스푼부터 넣고, 김치나 고추장이 있으면 짠맛을 보며 줄여요.`,`불을 끄고 참기름과 후추를 마지막에 넣어 따뜻하게 담아요.`],korean:[`밥이나 두부, 김치, 대파를 계량대로 꺼내고 김치는 가위로 작게 잘라요.`,`중불 팬에 대파를 30초 볶고 김치를 2분 볶아 신맛을 부드럽게 만들어요.`,`밥이나 두부를 넣고 간장 또는 고추장을 1인분 기준 1스푼 이하로 나눠 넣어요.`,`불을 끄고 참기름을 둘러 한식 집밥 향이 나게 담아요.`],japanese:[`밥은 따뜻하게 데우고 달걀과 양파를 계량대로 준비해요.`,`작은 팬에 양파, 간장, 설탕, 물 2스푼을 넣고 2분 끓여요.`,`달걀을 풀어 넣고 약불에서 40~60초만 익혀 촉촉하게 멈춰요.`,`밥 위에 그대로 올리고 김이나 대파를 얹어 덮밥처럼 마무리해요.`],chinese:[`대파는 넉넉히 송송 썰고 밥, 달걀, 새우를 계량대로 꺼내요.`,`중강불 팬에 식용유를 두르고 대파를 40초 볶아 향을 낸 뒤 달걀이나 새우를 넣어요.`,`밥을 넣고 간장과 굴소스를 가장자리로 둘러 1~2분 빠르게 볶아요.`,`후추를 살짝 뿌리고 넓은 접시에 담아 윤기가 보이게 펼쳐요.`],meat:[`고기는 해동 후 키친타월로 물기를 닦고 소금, 후추를 계량대로 뿌려요.`,`팬을 중강불로 1분 예열한 뒤 고기를 겹치지 않게 펼쳐 한 면을 2분 굽어요.`,`뒤집어서 1~2분 더 굽고 양파나 대파를 넣어 기름에 같이 익혀요.`,`고기 가장자리가 갈색이고 속까지 뜨거우면 기름을 살짝 빼고 담아요.`],quick:[`밥은 뜨겁게 데우고 달걀, 간장, 참기름을 계량대로 준비해요.`,`달걀은 반숙 2분 또는 스크램블 1분 30초로 빠르게 익혀요.`,`밥에 간장과 참기름을 먼저 섞고, 간이 부족하면 간장 0.5스푼만 추가해요.`,`달걀과 김, 대파를 올려 한 그릇으로 마무리해요.`],party:[`빵, 치즈, 단백질 재료를 한입 크기로 잘라 계량대로 준비해요.`,`새우나 감자는 먼저 완전히 익히고 물기를 닦아 눅눅하지 않게 해요.`,`마요네즈와 케첩은 1인분 기준 1스푼 안쪽으로 작게 찍어 올려요.`,`색이 다른 재료가 번갈아 보이게 접시에 간격을 두고 담아요.`]},s={dessert:[`Whisk milk ${X(t,`우유`,`en`)}, egg ${X(t,`달걀`,`en`)}, sugar ${X(t,`설탕`,`en`)}${r?`, and flour ${r}`:``} for 30 seconds.`,`Melt butter ${X(t,`버터`,`en`)||`0.5 tbsp`} in a skillet, pour in the mixture, and scatter ${a?`frozen blueberries ${a}`:`a sweet topping`} over it.`,`Cook covered over low heat for 6 to 8 minutes. It is nearly done when a skewer comes out without a lot of runny batter.`,`Rest for 2 minutes, then plate it with a tiny extra dusting of sugar for a dessert-like finish.`],bread:[`Mix flour ${X(t,`밀가루`,`en`)}, milk ${X(t,`우유`,`en`)}, sugar ${X(t,`설탕`,`en`)}, and salt ${X(t,`소금`,`en`)||`1 pinch`} into a thick batter.`,`Stir in melted butter ${X(t,`버터`,`en`)} and rest the batter for 3 minutes. Add 1 tbsp flour if it is too loose.`,`Spread it 1.5 cm thick in a low-heat skillet, cover, cook 5 to 6 minutes, flip, then cook 4 more minutes.`,`Plate when the surface is golden and the center springs back gently. Finish with a little butter gloss.`]},c=p[e]||p.fridgeClean;return{ko:o[e]||c.methodKo,en:s[e]||c.methodEn}}function tt(e,t){let n=t.find(t=>t.name===e);if(m.lang===`ko`)return n?`${O(e)} ${n.ko}`:O(e);let r=c[e]||e;return n?`${r} ${n.en}`:r}function nt(e=[]){let t=new Set(e);[`fridge`,`freezer`,`sauce`,`room`].forEach(e=>{m.inventory[e].forEach(n=>{t.has(n.name)&&(n.amount=Math.max(0,Number(n.amount)-(e===`sauce`?.5:1)))})})}function rt(e,t,n){let r=e.join(`, `)||`집에 있는 재료`,i=t.slice(0,4).map(e=>`${O(e.name)} ${e.ko}`).join(`, `),a=n.visualHintKo||`${r}가 한 접시에 보기 좋게 담기고 윤기와 김이 살아 있는 집밥`;return`${i||r}로 만든 완성 모습은 ${a}예요. 이미지로 만들면 실제 어떤 비주얼인지 바로 알 수 있게 주재료가 선명하게 보여야 해요.`}function it(e,t,n,r){let i=t.filter(Boolean).join(`, `)||`simple pantry ingredients`,a=n.map(e=>`${e.enName} ${e.en}`).join(`, `);return`The final dish should look like ${r.visualHintEn||`a ${e} made with ${i}: glossy, warm, generous, neatly plated, with visible textures, steam, and appetizing color contrast`}. Use these exact cooking ingredients as visual cues: ${a||i}.`}async function at(e,t){let n=[...e.searchTerms||[],...t].filter(Boolean);for(let e of n.slice(0,5))try{let t=`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(e)}`,n=new AbortController,r=setTimeout(()=>n.abort(),3500),i=await fetch(t,{signal:n.signal});if(clearTimeout(r),!i.ok)continue;let a=await i.json(),o=Array.isArray(a.meals)?a.meals.find(Boolean):null;if(o)return ot(o)}catch{}return null}function ot(e){let t=[];for(let n=1;n<=20;n+=1){let r=e[`strIngredient${n}`],i=e[`strMeasure${n}`];r&&r.trim()&&t.push(`${i?i.trim():``} ${r.trim()}`.trim())}return{name:e.strMeal,area:e.strArea,category:e.strCategory,instructions:e.strInstructions,ingredients:t.slice(0,8),source:e.strSource||e.strYoutube||`https://www.themealdb.com/`}}function st(e,t,n,r,i,a){return`Create a mouthwatering vertical smartphone food photo for "${e}". Style: ${r}. Main ingredients from the user's kitchen: ${t.filter(Boolean).join(`, `)||`simple pantry ingredients`}. Exact recipe measurements: ${n.map(e=>`${e.enName}: ${e.en}`).join(`; `)}. ${a?`Free recipe reference: ${a.name}, ${a.area||`home cooking`} style, with cues from ${a.ingredients.join(`, `)}.`:`No external recipe reference was available; use realistic beginner home-cooking presentation.`} Visual direction: ${i} The image must match this recipe, not a different dish. Plate the food on a warm ceramic dish, show glossy textures, gentle steam, fresh garnish, appetizing color contrast, realistic home kitchen lighting, shallow depth of field, high detail, no text, no watermark, no hands, no packaging.`}function Z(e){let t=Q(e,``);return`${t.usage} ${t.tip}`}function Q(e,t){let n=lt(e),r=n?s[n]:null;return r?{category:o[r.category][E()],usage:E()===`ko`?r.usageKo:r.usageEn,tip:E()===`ko`?r.tipKo:r.tipEn}:{category:D(`defaultCategory`),usage:t||(E()===`ko`?`볶음, 무침, 국물, 소스에 조금씩 테스트하며 쓰기 좋아요.`:`Try a small amount in stir-fries, salads, soups, or sauces.`),tip:E()===`ko`?`처음 쓰는 양념은 1인분 기준 반 작은술부터 넣고 맛을 보며 늘리세요.`:`For a new seasoning, start with half a teaspoon per serving and increase after tasting.`}}function ct(e){return Object.entries(o).find(([,t])=>t.ko===e||t.en===e)?.[0]||`basic`}function lt(e){return Object.keys(s).find(t=>e.includes(t)||O(t)===e)}function ut(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}function dt(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function $(e){return dt(e)}async function ft(e){try{await navigator.clipboard.writeText(e);return}catch{let e=document.querySelector(`.copy-box textarea`);if(!e)return;e.focus(),e.select();try{document.execCommand(`copy`)}catch{}}}function pt(){`serviceWorker`in navigator&&(location.hostname===`127.0.0.1`||location.hostname===`localhost`||window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(()=>{})}))}async function mt(e){try{await fetch(`./api/users`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({email:e,app:`yorijambaengi`})})}catch{}}function ht(){let e=new URLSearchParams(window.location.search).get(`shortcut`);e===`sauce`&&(h=`sauce`),e===`recipe`&&(h=`home`)}oe(),M();