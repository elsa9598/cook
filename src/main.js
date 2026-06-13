import { INGREDIENT_DB, CATEGORY_EN, emojiFor, ingredientLookup, autoCategory, EN_NAME } from "./ingredients.js";
import { DISHES } from "./recipes.js";

const STORAGE_KEY = "yorijambaengi-state-v2";
const POPUP_KEY = "yorijambaengi-free-popup-date";

const ko = {
  login: "Login",
  signup: "가입하기",
  logout: "로그아웃",
  lang: "EN",
  back: "Back",
  homeSmall: "홈",
  homeBig: "요리초보 추천",
  premiumBig: "프리미엄 요리실",
  premiumNav: "프리미엄",
  heroTitleLine1: "있는 재료로",
  heroTitleLine2: "쉬운 요리",
  heroCopy: "냉장고, 냉동고, 양념, 실온 먹거리를 보고 몇 인분인지에 맞춰 쉬운 요리를 추천해요.",
  trial: "무료체험",
  trialCopy: "가입 전 3일 동안 사용 가능",
  signupRequired: "가입 필요",
  joinNow: "무료 가입",
  storageNow: "현재 내 보관함",
  cookStart: "요리 본격 시작",
  servings: "몇 인분",
  makeRecipe: "추천 받기",
  pantrySmall: "보관함",
  fridgeBig: "신선고",
  freezerBig: "얼음창고",
  sauceBig: "맛보관소",
  roomBig: "실온바구니",
  addItem: "재료 추가",
  name: "이름",
  amount: "수량",
  unit: "단위",
  photo: "카메라/사진",
  cameraPick: "카메라로 찍기",
  imagePick: "이미지 선택",
  photoHelp: "사진을 넣고 이름을 적으면 저장할 때 맛, 사용 요리, 팁을 자동 메모로 채워요.",
  photoDetected: "사진 후보",
  analyzePhoto: "사진 설명 채우기",
  save: "저장",
  category: "카테고리",
  memo: "메모",
  detail: "상세",
  use: "사용",
  delete: "삭제",
  deleteSymbol: "-",
  edit: "수정",
  editItem: "재료 수정",
  cancel: "취소",
  saveEdit: "수정 저장",
  empty: "아직 저장된 재료가 없어요.",
  seasonTitle: "양념보관창고",
  allSeasonings: "전체 양념",
  recipeSmall: "요리순서",
  ingredientAmounts: "정확한 계량",
  shopping: "장보기 재료",
  steps: "요리 순서",
  copyPrompt: "최종 이미지 영어 프롬프트 복사",
  copied: "복사 완료",
  authTitle: "요리젬뱅이 신규 가입",
  authCopy: "무료 가입에는 개인 정보로 이메일만 저장해요. 비밀번호는 화면 확인용이며 앱에 저장하지 않습니다.",
  closeToday: "오늘 닫기",
  lockedTitle: "4일째부터는 가입 후 사용 가능",
  lockedCopy: "홈 화면은 볼 수 있지만 보관함, 요리 추천, 상세 기능은 무료 가입 후 열려요.",
  cloudflareNote: "",
  celebrateTitle: "가입 축하해요!",
  celebrateCopy: "이제 보관함, 요리 추천, 최종 이미지 프롬프트까지 모두 사용할 수 있어요.",
  startPremium: "프리미엄 시작",
  searchWeb: "무료 웹 검색",
  joinedCopy: "가입 완료. 모든 기능 사용 가능",
  savedCount: "개 저장",
  exampleSauce: "예: 간장",
  exampleIngredient: "예: 양파",
  defaultUnitSauce: "스푼",
  defaultUnitItem: "개",
  defaultSauceCategory: "기본 간",
  sauceMemoPlaceholder: "자동 설명이 없으면 직접 적어도 좋아요.",
  itemMemoPlaceholder: "보관 위치나 유통기한 메모",
  defaultCategory: "기본",
  all: "전체",
  noShopping: "추가 장보기 없이 가능해요.",
  promptLabel: "ChatGPT 이미지 생성용 영어 프롬프트",
  fabTitle: "요리 시작",
  bottomCold: "냉장/냉동",
  bottomSauce: "양념",
  bottomRoom: "실온",
  email: "이메일",
  password: "비밀번호",
  confirm: "확인",
  searchHint: "검색 힌트: 무료 웹 검색에서 “{name} 요리 활용법”으로 찾아 상세 설명과 팁을 보강할 수 있어요.",
  recipeFallback: "오늘의 요리",
  servingsSuffix: "인분",
  basicIngredients: "기본 재료",
  storageIngredients: "보관 재료",
  recipeSummary: "{items} 중심의 초보용 추천이에요. 없는 재료는 장보기 목록에 따로 뺐어요.",
  stepPrepTitle: "재료 모으기",
  stepPrepText: "{items}를 꺼내고 {servings}인분 기준으로 먹기 좋은 크기로 준비해요.",
  stepHeatTitle: "기본 익히기",
  stepHeatText: "팬을 중불로 달군 뒤 단단한 재료부터 넣고, 수분 많은 재료는 나중에 넣어 식감이 무너지지 않게 해요.",
  stepSeasonTitle: "양념 맞추기",
  stepSeasonText: "간장, 고추장, 소금 같은 양념은 한 번에 많이 넣지 말고 반씩 넣어 맛을 보며 조절해요.",
  stepPlateTitle: "담아내기",
  stepPlateText: "마지막에 참기름이나 후추처럼 향이 나는 재료를 조금 넣고 따뜻할 때 그릇에 담아요.",
  finalVisual: "완성 비주얼",
  finalVisualText: "따뜻한 접시에 윤기 나는 재료가 보기 좋게 담기고, 주재료의 색과 김이 살아 있는 집밥 비주얼로 완성돼요.",
  smartChef: "똑똑한 요리사",
  sourceInternet: "무료 레시피 DB 참고",
  sourceLocal: "로컬 셰프 규칙",
  referenceRecipe: "참고 요리",
  searchNamePlaceholder: "재료 이름 검색 (예: 양파, 연어, 두부…)",
  webSearchTitle: "무료 웹 검색",
  close: "닫기",
  openGoogle: "구글",
  openNaver: "네이버",
  openYoutube: "유튜브",
  pasteRecipeHelp: "검색 결과에서 요리법을 복사한 뒤, 아래 메모에 붙여넣고 저장하세요.",
  saveMemo: "메모 저장",
  searchTerm: "검색어",
  amountUnit: "수량/단위",
  noMemo: "저장된 메모가 없어요. 무료 웹 검색으로 요리법을 채워보세요.",
  backupTitle: "보관함 백업",
  backupSave: "백업 저장",
  backupRestore: "백업 복원",
  backupHint: "보관함을 파일로 저장해 두면 브라우저를 비우거나 기기를 바꿔도 그대로 복원할 수 있어요.",
  backupDone: "백업 저장 완료",
  restoreDone: "복원 완료",
};

const en = {
  login: "Login",
  signup: "Join",
  logout: "Logout",
  lang: "KO",
  back: "Back",
  homeSmall: "Home",
  homeBig: "Easy Cook",
  premiumBig: "Premium Kitchen",
  premiumNav: "Premium",
  heroTitleLine1: "Easy meals",
  heroTitleLine2: "from your kitchen",
  heroCopy: "The app checks fridge, freezer, seasonings, and room-temp foods to suggest easy recipes by serving size.",
  trial: "Trial",
  trialCopy: "3 days before sign-up is required",
  signupRequired: "Sign-up required",
  joinNow: "Join free",
  storageNow: "My storage",
  cookStart: "Start cooking",
  servings: "Servings",
  makeRecipe: "Recommend",
  pantrySmall: "Storage",
  fridgeBig: "Fresh Box",
  freezerBig: "Ice Vault",
  sauceBig: "Flavor Shelf",
  roomBig: "Room Basket",
  addItem: "Add item",
  name: "Name",
  amount: "Amount",
  unit: "Unit",
  photo: "Camera/photo",
  cameraPick: "Take photo",
  imagePick: "Choose image",
  photoHelp: "Add a photo and name; saving fills taste, cooking uses, and tips automatically.",
  photoDetected: "Photo guess",
  analyzePhoto: "Fill photo notes",
  save: "Save",
  category: "Category",
  memo: "Memo",
  detail: "Detail",
  use: "Use",
  delete: "Delete",
  deleteSymbol: "-",
  edit: "Edit",
  editItem: "Edit item",
  cancel: "Cancel",
  saveEdit: "Save edit",
  empty: "Nothing saved yet.",
  seasonTitle: "Seasoning Storage",
  allSeasonings: "All seasonings",
  recipeSmall: "Recipe",
  ingredientAmounts: "Exact measurements",
  shopping: "Shopping list",
  steps: "Cooking order",
  copyPrompt: "Copy final image prompt",
  copied: "Copied",
  authTitle: "Create cooking account",
  authCopy: "Free sign-up stores only your email as personal information. The password is checked on screen and is not saved in this app.",
  closeToday: "Close today",
  lockedTitle: "Sign-up required from day 4",
  lockedCopy: "Home remains visible, but storage, recipe, and detail features open after free sign-up.",
  cloudflareNote: "",
  celebrateTitle: "Welcome aboard!",
  celebrateCopy: "Storage, recipe recommendations, and final image prompts are now unlocked.",
  startPremium: "Start Premium",
  searchWeb: "Free web search",
  joinedCopy: "Joined. All features are available.",
  savedCount: "saved",
  exampleSauce: "e.g. soy sauce",
  exampleIngredient: "e.g. onion",
  defaultUnitSauce: "tbsp",
  defaultUnitItem: "pcs",
  defaultSauceCategory: "Basic seasoning",
  sauceMemoPlaceholder: "If auto details are missing, add your own note.",
  itemMemoPlaceholder: "Storage spot or expiry note",
  defaultCategory: "Basic",
  all: "All",
  noShopping: "No extra shopping needed.",
  promptLabel: "English prompt for ChatGPT image generation",
  fabTitle: "Start cooking",
  bottomCold: "Cold",
  bottomSauce: "Seasoning",
  bottomRoom: "Room",
  email: "Email",
  password: "Password",
  confirm: "OK",
  searchHint: "Search hint: use free web search for \"{name} cooking uses\" to improve the saved details and tips.",
  recipeFallback: "Today's meal",
  servingsSuffix: "servings",
  basicIngredients: "basic ingredients",
  storageIngredients: "stored ingredients",
  recipeSummary: "A beginner-friendly recipe built around {items}. Missing ingredients are separated into the shopping list.",
  stepPrepTitle: "Gather ingredients",
  stepPrepText: "Take out {items} and prep them into easy-to-cook pieces for {servings} servings.",
  stepHeatTitle: "Cook the base",
  stepHeatText: "Heat the pan over medium heat, add firm ingredients first, and add watery ingredients later so the texture stays intact.",
  stepSeasonTitle: "Adjust seasoning",
  stepSeasonText: "Add soy sauce, chili paste, or salt in small portions, taste, then adjust gradually.",
  stepPlateTitle: "Plate and finish",
  stepPlateText: "Add fragrant ingredients like sesame oil or pepper at the end, then plate while warm.",
  finalVisual: "Final visual",
  finalVisualText: "The finished dish looks glossy and hearty on a warm ceramic plate, with the main ingredients clearly visible and a fresh home-cooked feel.",
  smartChef: "Smart chef",
  sourceInternet: "Free recipe DB reference",
  sourceLocal: "Local chef rules",
  referenceRecipe: "Reference recipe",
  searchNamePlaceholder: "Search ingredient name (e.g. onion, salmon, tofu…)",
  webSearchTitle: "Free web search",
  close: "Close",
  openGoogle: "Google",
  openNaver: "Naver",
  openYoutube: "YouTube",
  pasteRecipeHelp: "Copy a recipe from the search results, paste it into the memo below, and save.",
  saveMemo: "Save memo",
  searchTerm: "Search term",
  amountUnit: "Amount/unit",
  noMemo: "No memo saved yet. Use free web search to fill in a recipe.",
  backupTitle: "Storage backup",
  backupSave: "Save backup",
  backupRestore: "Restore",
  backupHint: "Save your storage to a file so you can restore it even if the browser is cleared or you switch devices.",
  backupDone: "Backup saved",
  restoreDone: "Restored",
};

const storageTypes = {
  fridge: { ko: "신선고", en: "Fresh Box", emoji: "🥬", descKo: "냉장 재료", descEn: "Chilled ingredients" },
  freezer: { ko: "얼음창고", en: "Ice Vault", emoji: "🧊", descKo: "냉동 재료", descEn: "Frozen ingredients" },
  sauce: { ko: "맛보관소", en: "Flavor Shelf", emoji: "🧂", descKo: "양념과 소스", descEn: "Seasonings and sauces" },
  room: { ko: "실온바구니", en: "Room Basket", emoji: "🍞", descKo: "실온 먹거리", descEn: "Room-temp foods" },
};

const cookModes = [
  ["fridgeClean", "냉장고 털기", "Clear-out meal", "🥘"],
  ["snack", "간식", "Snack", "🍙"],
  ["dessert", "디저트", "Dessert", "🍮"],
  ["bread", "빵만들기", "Bread", "🥖"],
  ["party", "파티", "Party", "🎉"],
  ["korean", "한식", "Korean", "🍚"],
  ["japanese", "일식", "Japanese", "🍱"],
  ["chinese", "중식", "Chinese", "🥡"],
  ["meat", "고기굽기", "Grill meat", "🥩"],
  ["quick", "초간단 한끼", "Quick meal", "⚡"],
];

const seasoningCategories = {
  basic: { ko: "기본 간", en: "Basic seasoning" },
  sauce: { ko: "소스", en: "Sauces" },
  oil: { ko: "기름/향", en: "Oils and aroma" },
  spicy: { ko: "매운맛", en: "Spicy" },
  sweet: { ko: "단맛", en: "Sweet" },
  herb: { ko: "향신료", en: "Spices and herbs" },
};

const seasoningKnowledge = {
  간장: {
    category: "basic",
    usageKo: "볶음, 조림, 덮밥, 국물 간에 좋아요.",
    usageEn: "Good for stir-fries, braises, rice bowls, and soup seasoning.",
    tipKo: "1인분 기준 1작은술부터 넣고 마지막에 간을 맞추세요.",
    tipEn: "Start with 1 teaspoon per serving, then adjust at the end.",
  },
  고추장: {
    category: "spicy",
    usageKo: "비빔, 볶음, 찌개, 양념구이에 잘 맞아요.",
    usageEn: "Works well in mixed rice, stir-fries, stews, and spicy grilled marinades.",
    tipKo: "단맛이 있어 설탕은 적게 넣고 물이나 육수로 풀면 덜 뭉쳐요.",
    tipEn: "It is already a little sweet, so reduce sugar and loosen it with water or stock.",
  },
  된장: {
    category: "basic",
    usageKo: "국, 찌개, 나물 무침, 고기 밑간에 좋아요.",
    usageEn: "Good for soups, stews, seasoned greens, and meat marinades.",
    tipKo: "오래 끓이면 텁텁할 수 있어 중후반에 풀어 넣으세요.",
    tipEn: "Add it in the middle or later so the flavor stays clean.",
  },
  소금: {
    category: "basic",
    usageKo: "모든 기본 간, 데치기, 굽기 전 밑간에 사용해요.",
    usageEn: "Use for basic seasoning, blanching water, and pre-seasoning before grilling.",
    tipKo: "한 번에 많이 넣지 말고 두 꼬집씩 나눠 넣으세요.",
    tipEn: "Add two pinches at a time instead of salting heavily at once.",
  },
  설탕: {
    category: "sweet",
    usageKo: "볶음, 조림, 양념장, 디저트에 단맛과 윤기를 줘요.",
    usageEn: "Adds sweetness and gloss to stir-fries, braises, sauces, and desserts.",
    tipKo: "간장 요리에는 설탕을 먼저 넣으면 재료 속까지 맛이 들어요.",
    tipEn: "For soy-based dishes, add sugar early so the flavor soaks in.",
  },
  참기름: {
    category: "oil",
    usageKo: "나물, 비빔밥, 완성 직전 향내기에 좋아요.",
    usageEn: "Best for seasoned greens, bibimbap, and finishing aroma.",
    tipKo: "센 불에서 오래 가열하지 말고 마지막에 둘러 향을 살리세요.",
    tipEn: "Do not cook it long over high heat; drizzle at the end for aroma.",
  },
  후추: {
    category: "herb",
    usageKo: "고기, 달걀, 크림, 볶음요리의 잡내를 줄여요.",
    usageEn: "Helps balance meat, eggs, creamy dishes, and stir-fries.",
    tipKo: "완성 직전 갈아 넣으면 향이 더 선명해요.",
    tipEn: "Grind it right before serving for a clearer aroma.",
  },
  식초: {
    category: "sauce",
    usageKo: "초무침, 냉채, 소스, 느끼한 맛 잡기에 좋아요.",
    usageEn: "Great for sour salads, chilled dishes, sauces, and cutting richness.",
    tipKo: "가열하면 향이 날아가니 불을 끈 뒤 넣으세요.",
    tipEn: "Add after turning off the heat so the acidity stays bright.",
  },
};

const ingredientTranslations = {
  달걀: "egg",
  대파: "green onion",
  두부: "tofu",
  양파: "onion",
  당근: "carrot",
  애호박: "zucchini",
  김치: "kimchi",
  우유: "milk",
  치즈: "cheese",
  버터: "butter",
  "냉동 만두": "frozen dumplings",
  냉동밥: "frozen rice",
  "냉동 대패삼겹살": "frozen thin pork belly",
  "냉동 새우": "frozen shrimp",
  "냉동 브로콜리": "frozen broccoli",
  "냉동 블루베리": "frozen blueberries",
  간장: "soy sauce",
  고추장: "gochujang",
  된장: "doenjang",
  소금: "salt",
  설탕: "sugar",
  참기름: "sesame oil",
  후추: "black pepper",
  식초: "vinegar",
  고춧가루: "gochugaru",
  식용유: "cooking oil",
  굴소스: "oyster sauce",
  마요네즈: "mayonnaise",
  케첩: "ketchup",
  식빵: "bread slices",
  라면: "instant noodles",
  쌀: "rice",
  밥: "cooked rice",
  파스타면: "pasta",
  참치캔: "canned tuna",
  김: "seaweed sheets",
  감자: "potato",
  고구마: "sweet potato",
  밀가루: "flour",
};

const ingredientKnowledge = {
  달걀: {
    category: "단백질",
    tasteKo: "고소하고 부드러운 맛",
    usageKo: "달걀밥, 토스트, 볶음밥, 전, 팬 디저트에 좋아요.",
    tipKo: "완전히 익히려면 약불에서 천천히, 촉촉하게 먹으려면 불을 일찍 꺼요.",
    tasteEn: "savory and soft",
    usageEn: "Good for egg rice, toast, fried rice, pancakes, and skillet desserts.",
    tipEn: "Cook gently for a soft texture; use low heat when you want it fully set.",
  },
  우유: {
    category: "유제품",
    tasteKo: "부드럽고 고소한 맛",
    usageKo: "팬케이크, 크림소스, 달걀찜, 디저트 반죽에 좋아요.",
    tipKo: "센 불에 오래 끓이면 눌어붙기 쉬우니 약불에서 저어 주세요.",
    tasteEn: "mild, creamy, and slightly sweet",
    usageEn: "Good for pancakes, cream sauces, steamed eggs, and dessert batter.",
    tipEn: "Stir over low heat because milk can scorch quickly.",
  },
  양파: {
    category: "채소",
    tasteKo: "익히면 달고 생으로는 알싸한 맛",
    usageKo: "볶음, 덮밥, 카레, 고기굽기, 국물 베이스에 좋아요.",
    tipKo: "갈색이 살짝 나게 볶으면 단맛이 올라와 초보 요리도 맛있어져요.",
    tasteEn: "sharp raw, sweet when cooked",
    usageEn: "Good for stir-fries, rice bowls, curry, grilled meat, and soup bases.",
    tipEn: "Brown it lightly to bring out sweetness.",
  },
  대파: {
    category: "채소",
    tasteKo: "향긋하고 매콤한 파 향",
    usageKo: "볶음밥, 국, 라면, 고기굽기, 파기름에 좋아요.",
    tipKo: "기름에 먼저 30초 볶으면 향이 살아나요.",
    tasteEn: "aromatic and mildly spicy",
    usageEn: "Good for fried rice, soups, noodles, grilled meat, and scallion oil.",
    tipEn: "Fry it in oil for 30 seconds first to release aroma.",
  },
  두부: {
    category: "단백질",
    tasteKo: "담백하고 부드러운 맛",
    usageKo: "두부부침, 찌개, 볶음, 덮밥 단백질 재료로 좋아요.",
    tipKo: "키친타월로 물기를 빼면 팬에서 덜 부서져요.",
    tasteEn: "mild and soft",
    usageEn: "Good for pan-fried tofu, stews, stir-fries, and rice bowls.",
    tipEn: "Pat dry before cooking so it browns better.",
  },
  김치: {
    category: "기본",
    tasteKo: "새콤하고 매콤한 감칠맛",
    usageKo: "김치볶음밥, 찌개, 고기 곁들임, 냉장고 털기 요리에 좋아요.",
    tipKo: "신 김치는 설탕 0.5스푼을 넣으면 맛이 둥글어져요.",
    tasteEn: "tangy, spicy, and savory",
    usageEn: "Good for kimchi fried rice, stews, meat sides, and clean-out meals.",
    tipEn: "For very sour kimchi, add a little sugar to round the flavor.",
  },
  치즈: {
    category: "유제품",
    tasteKo: "짭조름하고 고소한 맛",
    usageKo: "토스트, 라면, 볶음밥, 파티 한입 요리에 좋아요.",
    tipKo: "마지막 30초에 올려 녹이면 질기지 않고 부드러워요.",
    tasteEn: "salty, creamy, and rich",
    usageEn: "Good for toast, noodles, fried rice, and party bites.",
    tipEn: "Add at the end and melt briefly for a softer texture.",
  },
  버터: {
    category: "유제품",
    tasteKo: "고소하고 진한 풍미",
    usageKo: "빵, 팬 디저트, 감자, 볶음 향내기에 좋아요.",
    tipKo: "타기 쉬우니 약불에서 녹이고 갈색이 진해지기 전에 재료를 넣어요.",
    tasteEn: "rich, creamy, and nutty",
    usageEn: "Good for bread, skillet desserts, potatoes, and aromatic stir-fries.",
    tipEn: "Melt over low heat and add ingredients before it browns too much.",
  },
  "냉동 블루베리": {
    category: "냉동재료",
    tasteKo: "새콤달콤하고 과즙 있는 맛",
    usageKo: "팬케이크, 요거트, 팬 디저트, 잼 느낌 토핑에 좋아요.",
    tipKo: "해동하지 않고 바로 올리면 색이 번지지 않고 모양이 살아나요.",
    tasteEn: "sweet-tart and juicy",
    usageEn: "Good for pancakes, yogurt, skillet desserts, and jam-like toppings.",
    tipEn: "Use straight from frozen to keep the shape and color cleaner.",
  },
  밀가루: {
    category: "곡물",
    tasteKo: "담백한 반죽 베이스",
    usageKo: "팬브레드, 부침, 팬케이크, 소스 농도 잡기에 좋아요.",
    tipKo: "조금씩 넣어 섞으면 덩어리가 덜 생겨요.",
    tasteEn: "neutral batter base",
    usageEn: "Good for pan bread, pancakes, fritters, and thickening sauces.",
    tipEn: "Add gradually to avoid lumps.",
  },
  감자: {
    category: "구황작물",
    tasteKo: "포슬포슬하고 담백한 맛",
    usageKo: "간식, 볶음, 고기 곁들임, 파티 플래터에 좋아요.",
    tipKo: "작게 썰어 전자레인지에 먼저 익히면 팬 조리가 빨라져요.",
    tasteEn: "mild and fluffy",
    usageEn: "Good for snacks, stir-fries, meat sides, and party platters.",
    tipEn: "Microwave small pieces first to shorten pan cooking.",
  },
  고구마: {
    category: "구황작물",
    tasteKo: "달콤하고 포근한 맛",
    usageKo: "간식, 디저트, 토스트 속, 팬 디저트에 좋아요.",
    tipKo: "익힌 고구마는 우유나 버터와 섞으면 부드러운 속재료가 돼요.",
    tasteEn: "sweet and soft",
    usageEn: "Good for snacks, desserts, toast fillings, and skillet sweets.",
    tipEn: "Mash cooked sweet potato with milk or butter for a soft filling.",
  },
};

const photoNameAliases = {
  달걀: ["egg", "eggs", "계란", "달걀"],
  우유: ["milk", "우유"],
  양파: ["onion", "양파"],
  대파: ["greenonion", "scallion", "대파", "파"],
  두부: ["tofu", "두부"],
  김치: ["kimchi", "김치"],
  치즈: ["cheese", "치즈"],
  버터: ["butter", "버터"],
  "냉동 블루베리": ["blueberry", "blueberries", "블루베리"],
  밀가루: ["flour", "밀가루"],
  감자: ["potato", "감자"],
  고구마: ["sweetpotato", "고구마"],
  간장: ["soysauce", "soy", "간장"],
  고추장: ["gochujang", "고추장"],
  된장: ["doenjang", "된장"],
  소금: ["salt", "소금"],
  설탕: ["sugar", "설탕"],
  참기름: ["sesameoil", "sesame", "참기름"],
  후추: ["pepper", "후추"],
  식초: ["vinegar", "식초"],
  식용유: ["oil", "식용유"],
  굴소스: ["oystersauce", "oyster", "굴소스"],
  마요네즈: ["mayonnaise", "mayo", "마요네즈"],
  케첩: ["ketchup", "케첩"],
};

const unitTranslations = {
  개: "pcs",
  단: "bunch",
  모: "block",
  스푼: "tbsp",
  장: "slices",
  봉: "packs",
  컵: "cups",
  캔: "cans",
  봉지: "bags",
  통: "bottles",
};

const categoryTranslations = {
  단백질: "Protein",
  채소: "Vegetable",
  간편식: "Convenience food",
  냉동재료: "Frozen ingredients",
  "기본 간": "Basic seasoning",
  매운맛: "Spicy",
  단맛: "Sweet",
  향신료: "Spices and herbs",
  "기름/향": "Oils and aroma",
  소스: "Sauce",
  통조림: "Canned food",
  곡물: "Grain",
  구황작물: "Root vegetable",
  빵: "Bread",
  면: "Noodles",
  유제품: "Dairy",
  기본: "Basic",
};

const recipeProfiles = {
  fridgeClean: {
    koTitle: "냉장고 털이 볶음",
    enTitle: "fridge clean-out stir-fry",
    searchTerms: ["stir fry", "fried rice", "omelette"],
    allow: ["달걀", "대파", "두부", "양파", "당근", "애호박", "김치", "냉동 만두", "냉동밥", "간장", "고추장", "참기름", "소금", "후추", "식용유", "밥"],
    required: ["달걀", "대파", "간장", "식용유"],
    methodKo: ["재료를 한입 크기로 썰고 물기 많은 재료는 따로 둬요.", "팬에 식용유를 두르고 대파를 먼저 볶아 향을 내요.", "단단한 재료, 부드러운 재료 순서로 넣고 간장으로 간을 맞춰요.", "마지막에 참기름이나 후추를 넣고 따뜻하게 담아요."],
    methodEn: ["Cut everything into bite-size pieces and keep watery ingredients aside.", "Heat oil and stir-fry green onion first for aroma.", "Add firm ingredients, then tender ones, and season with soy sauce.", "Finish with sesame oil or pepper and plate while warm."],
  },
  snack: {
    koTitle: "초간단 토스트 간식",
    enTitle: "quick toasted snack",
    searchTerms: ["sandwich", "toast", "omelette"],
    allow: ["식빵", "달걀", "치즈", "버터", "마요네즈", "케첩", "참치캔", "감자", "고구마", "우유", "설탕"],
    required: ["식빵", "치즈", "버터"],
    methodKo: ["식빵에 버터를 얇게 바르고 치즈나 달걀을 준비해요.", "팬을 약불로 달군 뒤 빵을 노릇하게 구워요.", "속재료를 넣고 반으로 접거나 한 장 더 덮어 따뜻하게 눌러요.", "먹기 좋은 크기로 자르고 소스를 조금 곁들여요."],
    methodEn: ["Spread a thin layer of butter on bread and prepare cheese or egg.", "Toast the bread gently over low heat until golden.", "Add the filling and fold or press with another slice.", "Cut into easy pieces and add a small sauce accent."],
  },
  dessert: {
    koTitle: "우유 달걀 팬 디저트",
    enTitle: "milk and egg pan dessert",
    searchTerms: ["pancake", "dessert", "cake"],
    allow: ["우유", "달걀", "설탕", "버터", "식빵", "밀가루", "고구마", "냉동 블루베리"],
    required: ["우유", "설탕", "달걀", "버터", "냉동 블루베리", "밀가루"],
    visualHintKo: "노릇하게 부푼 가장자리, 촉촉한 노란 커스터드 속, 블루베리와 설탕이 보이는 작은 팬 디저트",
    visualHintEn: "a golden skillet custard pancake with puffed browned edges, a soft yellow center, blueberries embedded on top, and a light powdered sugar dusting",
    methodKo: ["우유, 달걀, 설탕을 부드럽게 섞어 달콤한 베이스를 만들어요.", "식빵이나 고구마처럼 단맛과 어울리는 재료만 넣어요.", "약불에서 천천히 익혀 겉은 촉촉하고 가장자리는 살짝 노릇하게 만들어요.", "블루베리나 설탕을 살짝 올려 디저트처럼 마무리해요."],
    methodEn: ["Whisk milk, egg, and sugar into a soft sweet base.", "Use dessert-friendly ingredients like bread or sweet potato only.", "Cook slowly over low heat until moist with lightly golden edges.", "Finish with blueberries or a light dusting of sugar."],
  },
  bread: {
    koTitle: "초보 팬브레드",
    enTitle: "beginner pan bread",
    searchTerms: ["bread", "pancake", "scone"],
    allow: ["밀가루", "우유", "버터", "설탕", "소금", "달걀", "식빵", "치즈"],
    required: ["밀가루", "우유", "버터", "설탕", "소금"],
    visualHintKo: "팬에서 구운 둥근 빵, 노릇한 표면, 버터가 녹아 윤기 나는 초보용 팬브레드",
    visualHintEn: "a round beginner pan bread cooked in a skillet, golden brown outside, soft crumb inside, with melted butter gloss on top",
    methodKo: ["밀가루, 우유, 설탕, 소금을 섞어 되직한 반죽을 만들어요.", "버터를 조금 넣어 반죽 표면이 부드러워질 때까지 섞어요.", "약불 팬에 반죽을 올리고 뚜껑을 덮어 천천히 익혀요.", "겉이 노릇하고 속이 촉촉해지면 버터 향이 나게 마무리해요."],
    methodEn: ["Mix flour, milk, sugar, and salt into a thick batter.", "Fold in a little butter until the surface looks smooth.", "Cook the batter slowly in a covered pan over low heat.", "Finish when the outside is golden and the inside stays soft."],
  },
  party: {
    koTitle: "파티 한입 플래터",
    enTitle: "party bite platter",
    searchTerms: ["canape", "starter", "shrimp"],
    allow: ["치즈", "식빵", "참치캔", "냉동 새우", "냉동 브로콜리", "감자", "마요네즈", "케첩", "후추", "식용유"],
    required: ["치즈", "식빵", "마요네즈"],
    methodKo: ["빵, 치즈, 단백질 재료를 한입 크기로 준비해요.", "새우나 감자는 먼저 익히고 물기를 줄여요.", "마요네즈나 케첩으로 작은 소스 포인트를 만들어요.", "색이 다른 재료가 번갈아 보이게 접시에 담아요."],
    methodEn: ["Prepare bread, cheese, and protein ingredients in bite-size pieces.", "Cook shrimp or potatoes first and reduce moisture.", "Add small accents of mayonnaise or ketchup.", "Arrange contrasting colors across the plate."],
  },
  korean: {
    koTitle: "집밥 한식 볶음",
    enTitle: "Korean home-style stir-fry",
    searchTerms: ["Bibimbap", "Kimchi", "rice"],
    allow: ["밥", "쌀", "김치", "두부", "대파", "양파", "달걀", "냉동 대패삼겹살", "간장", "고추장", "된장", "참기름", "고춧가루", "소금"],
    required: ["쌀", "김치", "참기름"],
    methodKo: ["밥이나 두부를 중심으로 김치와 대파를 준비해요.", "팬에 대파를 볶은 뒤 김치를 넣어 신맛을 부드럽게 만들어요.", "간장이나 고추장으로 간을 맞추고 주재료를 넣어 볶아요.", "마지막에 참기름을 둘러 한식 집밥 향을 살려요."],
    methodEn: ["Prepare rice or tofu with kimchi and green onion.", "Stir-fry green onion first, then kimchi to soften the acidity.", "Season with soy sauce or gochujang and add the main ingredient.", "Finish with sesame oil for a Korean home-cooked aroma."],
  },
  japanese: {
    koTitle: "일식풍 달걀 덮밥",
    enTitle: "Japanese-style egg rice bowl",
    searchTerms: ["Japanese", "Teriyaki", "rice bowl"],
    allow: ["밥", "쌀", "달걀", "양파", "대파", "두부", "간장", "설탕", "식초", "냉동 새우", "김"],
    required: ["쌀", "달걀", "간장"],
    methodKo: ["밥 위에 올릴 달걀과 양파를 준비해요.", "간장과 설탕을 아주 조금 넣어 짭조름한 소스를 만들어요.", "양파를 먼저 익힌 뒤 달걀을 부드럽게 풀어 넣어요.", "밥 위에 올리고 김이나 대파를 살짝 더해요."],
    methodEn: ["Prepare egg and onion for a rice bowl topping.", "Make a light savory sauce with soy sauce and a little sugar.", "Cook onion first, then softly set the egg.", "Spoon over rice and finish with seaweed or green onion."],
  },
  chinese: {
    koTitle: "중식풍 대파 볶음",
    enTitle: "Chinese-style scallion stir-fry",
    searchTerms: ["Chinese", "fried rice", "stir fry"],
    allow: ["대파", "양파", "당근", "냉동 새우", "달걀", "밥", "냉동밥", "간장", "굴소스", "식용유", "후추"],
    required: ["대파", "간장", "굴소스"],
    methodKo: ["대파와 양파를 넉넉히 썰어 향을 준비해요.", "식용유를 두른 팬에서 대파를 먼저 볶아요.", "밥이나 새우, 달걀을 넣고 센 불 느낌으로 빠르게 볶아요.", "간장과 굴소스를 조금 넣어 윤기 있게 마무리해요."],
    methodEn: ["Slice plenty of scallion and onion for aroma.", "Stir-fry scallion first in hot oil.", "Add rice, shrimp, or egg and toss quickly.", "Finish glossy with soy sauce and oyster sauce."],
  },
  meat: {
    koTitle: "기본 고기 굽기",
    enTitle: "simple grilled meat",
    searchTerms: ["grilled", "pork", "beef"],
    allow: ["냉동 대패삼겹살", "양파", "대파", "마늘", "소금", "후추", "식용유", "간장", "참기름", "김치"],
    required: ["냉동 대패삼겹살", "소금", "후추"],
    methodKo: ["고기는 키친타월로 물기를 줄이고 소금, 후추로 밑간해요.", "팬을 충분히 달군 뒤 고기를 펼쳐 올려요.", "한쪽 면이 노릇해지면 뒤집고 양파나 대파를 곁들여요.", "기름을 살짝 빼고 따뜻한 접시에 담아요."],
    methodEn: ["Pat the meat dry and season with salt and pepper.", "Heat the pan well and spread the meat in a single layer.", "Flip when browned and add onion or green onion.", "Drain excess fat slightly and plate while hot."],
  },
  quick: {
    koTitle: "초간단 달걀밥",
    enTitle: "quick egg rice",
    searchTerms: ["egg", "rice", "omelette"],
    allow: ["밥", "냉동밥", "달걀", "간장", "참기름", "김", "대파", "후추"],
    required: ["쌀", "달걀", "간장"],
    methodKo: ["밥을 따뜻하게 데우고 달걀을 준비해요.", "달걀은 반숙이나 스크램블로 빠르게 익혀요.", "밥에 간장과 참기름을 조금 넣고 섞어요.", "달걀과 김을 올려 간단한 한 그릇으로 마무리해요."],
    methodEn: ["Warm the rice and prepare an egg.", "Cook the egg quickly as soft scramble or sunny-side-up.", "Mix rice with a little soy sauce and sesame oil.", "Top with egg and seaweed for a simple bowl."],
  },
};

const state = loadState();
let selectedTab = "home";
let selectedStorage = "fridge";
let categoryFilter = { fridge: "all", freezer: "all", sauce: "all", room: "all" };
let selectedCookMode = "fridgeClean";
let servings = 1;
let recipe = null;
let modal = null;
// Rotates each "추천 받기" so a mode cycles through its dishes instead of repeating one.
let dishCursor = {};

normalizeState();
registerServiceWorker();
applyLaunchShortcut();

function defaultState() {
  const now = new Date().toISOString();
  return {
    createdAt: now,
    lang: "ko",
    user: null,
    inventory: seedInventory(),
  };
}

function seedInventory() {
  // The pantry starts empty; users build it from the 500-per-type ingredient database.
  return { fridge: [], freezer: [], sauce: [], room: [] };
}

function item(name, amount, unit, category, memo, photo, emoji) {
  return {
    id: crypto.randomUUID(),
    name,
    amount,
    unit,
    category,
    memo,
    photo,
    emoji: emoji || null,
    createdAt: new Date().toISOString(),
  };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultState(), ...JSON.parse(saved) } : defaultState();
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeState() {
  state.inventory = state.inventory || {};
  ["fridge", "freezer", "sauce", "room"].forEach((type) => {
    state.inventory[type] = Array.isArray(state.inventory[type]) ? state.inventory[type] : [];
  });
  recoverV1Items();
  saveState();
}

// The v1→v2 storage-key change cleared old sample data — but also any items
// users had added under v1. v1 data still lives in localStorage, so recover the
// user-added items (everything except the old built-in sample ingredients) once.
function recoverV1Items() {
  try {
    if (localStorage.getItem("yorijambaengi-v1-migrated")) return;
    const raw = localStorage.getItem("yorijambaengi-state-v1");
    if (!raw) { localStorage.setItem("yorijambaengi-v1-migrated", "1"); return; }
    const oldSeeds = new Set([
      "달걀", "대파", "두부", "양파", "당근", "애호박", "김치", "우유", "치즈", "버터",
      "냉동 만두", "냉동밥", "냉동 대패삼겹살", "냉동 새우", "냉동 브로콜리", "냉동 블루베리",
      "간장", "고추장", "참기름", "된장", "소금", "설탕", "후추", "식초", "고춧가루", "식용유", "굴소스", "마요네즈", "케첩",
      "식빵", "라면", "쌀", "파스타면", "참치캔", "김", "감자", "고구마", "밀가루",
    ]);
    const v1 = JSON.parse(raw);
    let recovered = 0;
    ["fridge", "freezer", "sauce", "room"].forEach((type) => {
      const items = (v1.inventory && Array.isArray(v1.inventory[type])) ? v1.inventory[type] : [];
      items.forEach((it) => {
        if (!it || !it.name || oldSeeds.has(it.name)) return;
        if (state.inventory[type].some((x) => x.name === it.name)) return;
        state.inventory[type].push({
          ...it,
          id: it.id || crypto.randomUUID(),
          emoji: it.emoji || emojiFor(it.name, type),
        });
        recovered += 1;
      });
    });
    localStorage.setItem("yorijambaengi-v1-migrated", "1");
    if (recovered) console.info(`[yorijambaengi] recovered ${recovered} item(s) from v1`);
  } catch {
    // Recovery is best-effort; never block startup.
  }
}

// Illustration emoji for an item: its stored emoji, else derived from the name.
function itemEmoji(entry, type) {
  return entry.emoji || emojiFor(entry.name, type) || storageTypes[type].emoji;
}

function activeLang() {
  try {
    return state?.lang || "ko";
  } catch {
    return "ko";
  }
}

function t(key) {
  return (activeLang() === "ko" ? ko : en)[key] || key;
}

function formatText(template, values) {
  return Object.entries(values).reduce((text, [key, value]) => text.replaceAll(`{${key}}`, value), template);
}

function displayName(name) {
  return activeLang() === "ko" ? name : ingredientTranslations[name] || EN_NAME[name] || name;
}

function displayUnit(unit) {
  return activeLang() === "ko" ? unit : unitTranslations[unit] || unit;
}

function displayCategory(category) {
  if (!category) return t("defaultCategory");
  const categoryFromKey = seasoningCategories[category]?.[activeLang()];
  if (categoryFromKey) return categoryFromKey;
  return activeLang() === "ko" ? category : categoryTranslations[category] || CATEGORY_EN[category] || category;
}

function displayMemo(entry, type) {
  if (type === "sauce" && knownSeasoningKey(entry.name)) return describeSeasoning(entry.name);
  return entry.memo;
}

function isTrialExpired() {
  if (state.user) return false;
  const created = new Date(state.createdAt).getTime();
  const day = 24 * 60 * 60 * 1000;
  return Date.now() - created >= day * 3;
}

function trialDay() {
  const created = new Date(state.createdAt).getTime();
  const day = Math.floor((Date.now() - created) / (24 * 60 * 60 * 1000)) + 1;
  return Math.max(1, Math.min(day, 4));
}

function canUseFeatures() {
  return Boolean(state.user) || !isTrialExpired();
}

function maybeShowSignupPopup() {
  if (state.user || isTrialExpired()) return;
  const today = new Date().toISOString().slice(0, 10);
  if (localStorage.getItem(POPUP_KEY) !== today) {
    modal = "signup";
  }
}

function render() {
  const root = document.querySelector("#app");
  root.innerHTML = `
    <div class="phone-shell">
      ${renderTopAuth()}
      ${renderPagePanel()}
      <main class="content">${renderCurrentPage()}</main>
      ${renderFab()}
      ${renderBottomNav()}
      ${renderModal()}
    </div>
  `;
  bindEvents();
}

function renderTopAuth() {
  const userLabel = state.user ? state.user.email.split("@")[0] : t("login");
  const authCenter = state.user ? t("logout") : t("signup");
  return `
    <header class="top-auth">
      <button class="ghost-pill auth-left" data-action="login">${userLabel}</button>
      <button class="${state.user ? "ghost-pill" : "dark-pill"} auth-center" data-action="${state.user ? "logout" : "signup"}">${authCenter}</button>
      <button class="icon-pill auth-right" data-action="toggle-lang">${t("lang")}</button>
    </header>
  `;
}

function renderPagePanel() {
  const titles = getTitles();
  const showBackRow = selectedTab !== "home";
  return `
    <section class="page-panel">
      ${showBackRow ? `<button class="back-button" data-action="back">${t("back")}</button>` : ""}
      <h1 class="big-title">${titles.big}</h1>
    </section>
  `;
}

function getTitles() {
  if (selectedTab === "home") {
    return {
      small: state.user ? "Premium" : t("homeSmall"),
      big: state.user ? t("premiumBig") : t("homeBig"),
    };
  }
  if (selectedTab === "cold") {
    return { small: t("pantrySmall"), big: selectedStorage === "freezer" ? t("freezerBig") : t("fridgeBig") };
  }
  if (selectedTab === "sauce") return { small: t("seasonTitle"), big: t("sauceBig") };
  if (selectedTab === "room") return { small: t("pantrySmall"), big: t("roomBig") };
  if (selectedTab === "recipe") return { small: t("recipeSmall"), big: recipe?.title || t("cookStart") };
  return { small: t("homeSmall"), big: t("homeBig") };
}

function renderCurrentPage() {
  if (!canUseFeatures() && selectedTab !== "home") return renderGate();
  if (selectedTab === "home") return renderHome();
  if (selectedTab === "cold") return renderStoragePage(selectedStorage);
  if (selectedTab === "sauce") return renderSaucePage();
  if (selectedTab === "room") return renderStoragePage("room");
  if (selectedTab === "recipe") return renderRecipePage();
  return renderHome();
}

function renderHome() {
  const locked = !canUseFeatures();
  return `
    <section class="hero-band">
      <h2 class="hero-title"><span>${t("heroTitleLine1")}</span><span>${t("heroTitleLine2")}</span></h2>
      <p>${t("heroCopy")}</p>
    </section>
    <section class="trial-strip">
      <div>
        <strong>${state.user ? "Premium" : locked ? t("signupRequired") : `${t("trial")} ${trialDay()}/3`}</strong>
        <span>${state.user ? t("joinedCopy") : t("trialCopy")}</span>
      </div>
      ${state.user ? "" : `<button class="pill" data-action="signup">${t("joinNow")}</button>`}
    </section>
    ${locked ? renderGate() : ""}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${t("storageNow")}</h2>
      </div>
      <div class="grid-2">
        ${Object.entries(storageTypes)
          .map(([key, type]) => renderStorageShortcut(key, type))
          .join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${t("backupTitle")}</h2>
      </div>
      <div class="grid-2">
        <button class="ghost-pill" data-action="export-backup">⬇ ${t("backupSave")}</button>
        <label class="ghost-pill backup-restore">⬆ ${t("backupRestore")}
          <input type="file" accept="application/json,.json" data-import-backup />
        </label>
      </div>
      <p class="photo-help">${t("backupHint")}</p>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${t("cookStart")}</h2>
        <label class="field" style="width: 96px">
          <span>${t("servings")}</span>
          <input type="number" min="1" max="12" value="${servings}" data-input="servings" />
        </label>
      </div>
      <div class="cook-grid">
        ${cookModes
          .map(
            ([key, koName, enName, emoji]) => `
              <button class="cook-card ${selectedCookMode === key ? "active" : ""}" data-cook="${key}">
                <span class="cook-emoji">${emoji}</span>
                <strong>${state.lang === "ko" ? koName : enName}</strong>
              </button>
            `
          )
          .join("")}
      </div>
      <div style="margin-top: 12px">
        <button class="pill" style="width: 100%; min-height: 46px" data-action="make-recipe">${t("makeRecipe")}</button>
      </div>
    </section>
  `;
}

function renderStorageShortcut(key, type) {
  const count = state.inventory[key].length;
  const name = state.lang === "ko" ? type.ko : type.en;
  const desc = state.lang === "ko" ? type.descKo : type.descEn;
  return `
    <button class="storage-card" data-storage-jump="${key}">
      <span class="storage-emoji">${type.emoji}</span>
      <strong>${name}</strong>
      <span>${desc} · ${count} ${t("savedCount")}</span>
    </button>
  `;
}

function renderStoragePage(type) {
  return `
    ${type === "fridge" || type === "freezer" ? renderColdSwitch() : ""}
    ${renderAddForm(type)}
    ${renderCategoryFilter(type)}
    ${renderInventoryGrid(type)}
  `;
}

function renderCategoryFilter(type) {
  const cats = [...new Set(state.inventory[type].map((entry) => entry.category).filter(Boolean))];
  if (cats.length <= 1) return "";
  const active = categoryFilter[type] || "all";
  return `
    <section class="section">
      <div class="category-row">
        <button class="chip ${active === "all" ? "active" : ""}" data-cat-filter="${type}:all">${t("all")}</button>
        ${cats
          .map((cat) => `<button class="chip ${active === cat ? "active" : ""}" data-cat-filter="${type}:${escapeAttr(cat)}">${displayCategory(cat)}</button>`)
          .join("")}
      </div>
    </section>
  `;
}

function renderInventoryGrid(type) {
  const active = categoryFilter[type] || "all";
  const list = active === "all"
    ? state.inventory[type]
    : state.inventory[type].filter((entry) => entry.category === active);
  if (!list.length) return `<section class="section"><div class="card empty">${t("empty")}</div></section>`;
  return `
    <section class="section">
      <div class="ingredient-grid">
        ${list.map((entry) => renderIngredientIcon(entry, type)).join("")}
      </div>
    </section>
  `;
}

function renderIngredientIcon(entry, type) {
  return `
    <button class="ingredient-icon" data-detail="${type}:${entry.id}" title="${escapeAttr(displayName(entry.name))}">
      <span class="icon-art">${entry.photo ? `<img src="${entry.photo}" alt="" />` : itemEmoji(entry, type)}</span>
      <span class="icon-name">${displayName(entry.name)}</span>
      <span class="icon-qty">${entry.amount}${displayUnit(entry.unit)}</span>
    </button>
  `;
}

function renderColdSwitch() {
  return `
    <div class="category-row">
      <button class="chip ${selectedStorage === "fridge" ? "active" : ""}" data-set-storage="fridge">🥬 ${t("fridgeBig")}</button>
      <button class="chip ${selectedStorage === "freezer" ? "active" : ""}" data-set-storage="freezer">🧊 ${t("freezerBig")}</button>
    </div>
  `;
}

function renderAddForm(type) {
  const isSauce = type === "sauce";
  return `
    <section class="section card">
      <div class="section-head">
        <h2 class="section-title">${t("addItem")}</h2>
      </div>
      <form class="form-grid" data-form="${type}">
        <div class="field photo-field">
          <label>${t("photo")}</label>
          <div class="photo-actions">
            <label class="photo-choice">
              <input type="file" accept="image/*" capture="environment" name="photoCamera" data-photo-input="${type}" />
              <span>${t("cameraPick")}</span>
            </label>
            <label class="photo-choice">
              <input type="file" accept="image/*" name="photoGallery" data-photo-input="${type}" />
              <span>${t("imagePick")}</span>
            </label>
          </div>
          <p class="photo-help" data-photo-status="${type}">${t("photoHelp")}</p>
        </div>
        <div class="field name-field">
          <label>${t("name")}</label>
          <div class="name-row">
            <span class="name-emoji" data-name-emoji="${type}">${storageTypes[type].emoji}</span>
            <input name="name" required placeholder="${t("searchNamePlaceholder")}" list="ing-list-${type}" autocomplete="off" data-name-input="${type}" />
          </div>
          <datalist id="ing-list-${type}">
            ${INGREDIENT_DB[type].map((it) => `<option value="${escapeAttr(it.name)}">${escapeAttr(displayCategory(it.category))}</option>`).join("")}
          </datalist>
        </div>
        <div class="grid-2">
          <div class="field">
            <label>${t("amount")}</label>
            <input name="amount" type="number" min="0" step="any" value="1" />
          </div>
          <div class="field">
            <label>${t("unit")}</label>
            <input name="unit" list="unit-list" autocomplete="off" value="${isSauce ? t("defaultUnitSauce") : t("defaultUnitItem")}" />
          </div>
        </div>
        <datalist id="unit-list">
          ${["개", "g", "kg", "ml", "L", "컵", "스푼", "작은술", "모", "단", "장", "봉지", "봉", "캔", "병", "통", "줌", "톨", "마리", "공기", "팩", "줄"].map((u) => `<option value="${u}"></option>`).join("")}
        </datalist>
        <div class="field">
          <label>${t("category")}</label>
          <input name="category" value="${isSauce ? t("defaultSauceCategory") : ""}" />
        </div>
        <div class="field">
          <label>${t("memo")}</label>
          <textarea name="memo" placeholder="${isSauce ? t("sauceMemoPlaceholder") : t("itemMemoPlaceholder")}"></textarea>
        </div>
        <button class="ghost-pill" type="button" data-action="analyze-photo">${t("analyzePhoto")}</button>
        <button class="pill" type="submit">${t("save")}</button>
      </form>
    </section>
  `;
}

function renderSaucePage() {
  // Same grid + filter layout as the fridge/freezer/room pages.
  return renderStoragePage("sauce");
}

function renderRecipePage() {
  if (!recipe) return renderHome();
  return `
    <section class="recipe-hero">
      <h2>${recipe.title}</h2>
      <p>${recipe.summary}</p>
      <div class="chef-source">
        <strong>${t("smartChef")}</strong>
        <span>${recipe.sourceLabel}</span>
        ${recipe.reference?.name ? `<small>${t("referenceRecipe")}: ${recipe.reference.name}</small>` : ""}
      </div>
    </section>
    <section class="section card">
      <h2 class="section-title">${t("ingredientAmounts")}</h2>
      <div class="measure-list" style="margin-top: 10px">
        ${recipe.ingredients.map((entry) => `
          <div>
            <strong>${entry.label}</strong>
            <span>${entry.amount}</span>
          </div>
        `).join("")}
      </div>
    </section>
    <section class="section card">
      <h2 class="section-title">${t("shopping")}</h2>
      <div class="shopping-list" style="margin-top: 10px">
        ${recipe.shopping.length ? recipe.shopping.map((x) => `<div>${x}</div>`).join("") : `<div>${t("noShopping")}</div>`}
      </div>
    </section>
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${t("steps")}</h2>
      </div>
      ${recipe.steps.map((step, index) => renderStep(step, index)).join("")}
    </section>
    <section class="section card final-visual">
      <h2 class="section-title">${t("finalVisual")}</h2>
      <p>${recipe.visual}</p>
    </section>
    <section class="copy-box">
      <div class="field">
        <label>${t("promptLabel")}</label>
        <textarea readonly>${recipe.prompt}</textarea>
      </div>
      <button class="pill" style="width:100%; margin-top:10px" data-action="copy-prompt">${t("copyPrompt")}</button>
    </section>
  `;
}

function renderStep(step, index) {
  return `
    <article class="step-card text-step">
      <div class="step-number">${index + 1}</div>
      <div class="step-body">
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      </div>
    </article>
  `;
}

function renderGate() {
  return `
    <section class="card gate">
      <div>
        <h2>${t("lockedTitle")}</h2>
        <p>${t("lockedCopy")}</p>
        <button class="pill" data-action="signup">${t("joinNow")}</button>
      </div>
    </section>
  `;
}

function renderFab() {
  return selectedTab === "home" ? `
    <button class="fab chef-fab" data-action="make-recipe" title="${t("fabTitle")}" aria-label="${t("smartChef")}">
      <svg class="chef-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path class="chef-hat" d="M20 28c-5.2-.6-8-3.7-8-8.1 0-4.6 3.7-8.1 8.1-8.1 1.7-5 6.3-8.2 11.9-8.2s10.2 3.2 11.9 8.2c4.4 0 8.1 3.5 8.1 8.1 0 4.4-2.8 7.5-8 8.1v8H20v-8Z"/>
        <path class="chef-face" d="M21 34h22v9.5c0 6.1-4.8 10.5-11 10.5s-11-4.4-11-10.5V34Z"/>
        <path class="chef-apron" d="M24 52h16l5 8H19l5-8Z"/>
        <path class="chef-smile" d="M25 43c2.1 2.1 4.3 3.1 7 3.1s4.9-1 7-3.1"/>
        <circle class="chef-dot" cx="26" cy="39" r="1.7"/>
        <circle class="chef-dot" cx="38" cy="39" r="1.7"/>
      </svg>
    </button>
  ` : "";
}

function renderBottomNav() {
  const homeLabel = state.user ? t("premiumNav") : t("homeSmall");
  return `
    <nav class="bottom-nav">
      ${bottomTab("home", state.user ? "⭐" : "🏠", homeLabel)}
      ${bottomTab("cold", "❄️", t("bottomCold"))}
      ${bottomTab("sauce", "🧂", t("bottomSauce"))}
      ${bottomTab("room", "🍞", t("bottomRoom"))}
    </nav>
  `;
}

function bottomTab(key, emoji, label) {
  return `
    <button class="bottom-tab ${selectedTab === key ? "active" : ""}" data-tab="${key}">
      <span class="emoji">${emoji}</span>
      <span class="label">${label}</span>
    </button>
  `;
}

function renderModal() {
  if (modal === "signup" || modal === "login") return renderAuthModal(modal);
  if (modal === "celebrate") return renderCelebrationModal();
  if (modal?.startsWith("detail:")) return renderDetailModal(modal.split(":")[1], modal.split(":")[2]);
  if (modal?.startsWith("websearch:")) return renderWebSearchModal(modal.split(":")[1], modal.split(":")[2]);
  if (modal?.startsWith("edit:")) return renderEditModal(modal.split(":")[1], modal.split(":")[2]);
  return "";
}

function renderAuthModal(kind) {
  return `
    <div class="modal-backdrop">
      <form class="modal" data-auth-form="${kind}">
        <h2>${kind === "login" ? t("login") : t("authTitle")}</h2>
        <p>${t("authCopy")}</p>
        <div class="form-grid">
          <div class="field">
            <label>${t("email")}</label>
            <input name="email" type="email" required placeholder="cook@example.com" />
          </div>
          <div class="field">
            <label>${t("password")}</label>
            <input name="password" type="password" required minlength="4" />
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-pill" data-action="close-today">${t("closeToday")}</button>
          <button type="submit" class="pill">${kind === "login" ? t("login") : t("joinNow")}</button>
        </div>
      </form>
    </div>
  `;
}

function renderCelebrationModal() {
  return `
    <div class="modal-backdrop celebration-backdrop">
      <article class="modal celebration-modal">
        <div class="confetti" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="celebration-badge">★</div>
        <h2>${t("celebrateTitle")}</h2>
        <p>${t("celebrateCopy")}</p>
        <div class="modal-actions">
          <button class="pill" data-action="close-modal">${t("startPremium")}</button>
        </div>
      </article>
    </div>
  `;
}

function renderDetailModal(type, id) {
  const entry = state.inventory[type]?.find((x) => x.id === id);
  if (!entry) return "";
  const memo = displayMemo(entry, type);
  return `
    <div class="modal-backdrop">
      <article class="modal detail-modal">
        <button class="modal-close" data-action="close-modal" aria-label="${t("close")}">×</button>
        <div class="detail-head">
          <span class="detail-art">${entry.photo ? `<img src="${entry.photo}" alt="" />` : itemEmoji(entry, type)}</span>
          <div>
            <h2>${displayName(entry.name)}</h2>
            <p class="detail-meta"><strong>${displayCategory(entry.category)}</strong> · ${entry.amount}${displayUnit(entry.unit)}</p>
          </div>
        </div>
        <div class="detail-memo">
          <label>${t("memo")}</label>
          <p>${memo ? escapeHtml(memo).replaceAll("\n", "<br>") : t("noMemo")}</p>
        </div>
        <button class="ghost-pill detail-search" data-web-search="${type}:${id}">🔎 ${t("searchWeb")}</button>
        <div class="detail-actions">
          <button class="tiny-button" data-use="${type}:${id}">${t("use")}</button>
          <button class="tiny-button" data-edit="${type}:${id}">${t("edit")}</button>
          <button class="tiny-button delete-button" data-delete="${type}:${id}">${t("delete")}</button>
        </div>
        <button class="pill detail-confirm" data-action="close-modal">${t("confirm")}</button>
      </article>
    </div>
  `;
}

function renderWebSearchModal(type, id) {
  const entry = state.inventory[type]?.find((x) => x.id === id);
  if (!entry) return "";
  const term = `${entry.name} 요리법`;
  return `
    <div class="modal-backdrop">
      <article class="modal websearch-modal">
        <div class="websearch-head">
          <h2>${t("webSearchTitle")}</h2>
          <button class="modal-close" data-websearch-close="${type}:${id}" aria-label="${t("close")}">×</button>
        </div>
        <div class="field">
          <label>${t("searchTerm")}</label>
          <input type="text" data-search-term value="${escapeAttr(term)}" />
        </div>
        <div class="websearch-engines">
          <button class="pill" data-search-open="google">${t("openGoogle")}</button>
          <button class="ghost-pill" data-search-open="naver">${t("openNaver")}</button>
          <button class="ghost-pill" data-search-open="youtube">${t("openYoutube")}</button>
        </div>
        <p class="photo-help">${t("pasteRecipeHelp")}</p>
        <div class="field">
          <label>${t("memo")}</label>
          <textarea data-search-memo rows="6" placeholder="${t("itemMemoPlaceholder")}">${escapeHtml(entry.memo || "")}</textarea>
        </div>
        <div class="modal-actions">
          <button class="ghost-pill" data-websearch-close="${type}:${id}">${t("close")}</button>
          <button class="pill" data-search-save="${type}:${id}">${t("saveMemo")}</button>
        </div>
      </article>
    </div>
  `;
}

function renderEditModal(type, id) {
  const entry = state.inventory[type]?.find((x) => x.id === id);
  if (!entry) return "";
  return `
    <div class="modal-backdrop">
      <form class="modal" data-edit-form="${type}:${id}">
        <h2>${t("editItem")}</h2>
        <datalist id="unit-edit-list">
          ${["개", "g", "kg", "ml", "L", "컵", "스푼", "작은술", "모", "단", "장", "봉지", "봉", "캔", "병", "통", "줌", "톨", "마리", "공기", "팩", "줄"].map((u) => `<option value="${u}"></option>`).join("")}
        </datalist>
        <div class="form-grid">
          <div class="field">
            <label>${t("name")}</label>
            <input name="name" required value="${escapeAttr(entry.name)}" />
          </div>
          <div class="grid-2">
            <div class="field">
              <label>${t("amount")}</label>
              <input name="amount" type="number" min="0" step="any" value="${entry.amount}" />
            </div>
            <div class="field">
              <label>${t("unit")}</label>
              <input name="unit" list="unit-edit-list" autocomplete="off" value="${escapeAttr(entry.unit)}" />
            </div>
          </div>
          <div class="field">
            <label>${t("category")}</label>
            <input name="category" value="${escapeAttr(entry.category || "")}" />
          </div>
          <div class="field">
            <label>${t("memo")}</label>
            <textarea name="memo">${escapeHtml(entry.memo || "")}</textarea>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="ghost-pill" data-action="close-modal">${t("cancel")}</button>
          <button type="submit" class="pill">${t("saveEdit")}</button>
        </div>
      </form>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", handleAction);
  });
  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = button.dataset.tab;
      if (next !== "home" && !canUseFeatures()) {
        selectedTab = next;
      } else {
        selectedTab = next;
        if (next === "cold" && !["fridge", "freezer"].includes(selectedStorage)) selectedStorage = "fridge";
      }
      render();
    });
  });
  document.querySelectorAll("[data-storage-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.storageJump;
      if (key === "fridge" || key === "freezer") {
        selectedStorage = key;
        selectedTab = "cold";
      } else {
        selectedTab = key;
      }
      render();
    });
  });
  document.querySelectorAll("[data-set-storage]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedStorage = button.dataset.setStorage;
      render();
    });
  });
  document.querySelectorAll("[data-cook]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedCookMode = button.dataset.cook;
      document.querySelectorAll("[data-cook]").forEach((card) => {
        card.classList.toggle("active", card.dataset.cook === selectedCookMode);
      });
    });
  });
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", handleAddItem);
  });
  document.querySelectorAll("[data-photo-input]").forEach((input) => {
    input.addEventListener("change", () => handlePhotoPick(input));
  });
  document.querySelectorAll("[data-import-backup]").forEach((input) => {
    input.addEventListener("change", () => importBackup(input));
  });
  document.querySelectorAll("[data-auth-form]").forEach((form) => {
    form.addEventListener("submit", handleAuth);
  });
  document.querySelectorAll("[data-edit-form]").forEach((form) => {
    form.addEventListener("submit", handleEditItem);
  });
  document.querySelectorAll("[data-use]").forEach((button) => {
    button.addEventListener("click", () => useInventory(button.dataset.use));
  });
  document.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteInventory(button.dataset.delete));
  });
  document.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => {
      modal = `edit:${button.dataset.edit}`;
      render();
    });
  });
  document.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      modal = `detail:${button.dataset.detail}`;
      render();
    });
  });
  document.querySelectorAll("[data-cat-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const [type, cat] = button.dataset.catFilter.split(":");
      categoryFilter[type] = cat;
      render();
    });
  });
  document.querySelectorAll("[data-name-input]").forEach((input) => {
    input.addEventListener("input", () => applyNameSuggestion(input));
  });
  // Open the in-app web search panel (data-web-search = "type:id").
  document.querySelectorAll("[data-web-search]").forEach((button) => {
    button.addEventListener("click", () => {
      modal = `websearch:${button.dataset.webSearch}`;
      render();
    });
  });
  document.querySelectorAll("[data-search-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const term = document.querySelector("[data-search-term]")?.value?.trim() || "";
      const q = encodeURIComponent(term);
      const engine = button.dataset.searchOpen;
      const url = engine === "naver"
        ? `https://search.naver.com/search.naver?query=${q}`
        : engine === "youtube"
          ? `https://www.youtube.com/results?search_query=${q}`
          : `https://www.google.com/search?q=${q}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });
  document.querySelectorAll("[data-search-save]").forEach((button) => {
    button.addEventListener("click", () => {
      const [type, id] = button.dataset.searchSave.split(":");
      const entry = state.inventory[type]?.find((x) => x.id === id);
      const memoValue = document.querySelector("[data-search-memo]")?.value || "";
      if (entry) {
        entry.memo = memoValue.trim();
        saveState();
      }
      modal = `detail:${type}:${id}`;
      render();
    });
  });
  document.querySelectorAll("[data-websearch-close]").forEach((button) => {
    button.addEventListener("click", () => {
      modal = `detail:${button.dataset.websearchClose}`;
      render();
    });
  });
  document.querySelectorAll("[data-input='servings']").forEach((input) => {
    input.addEventListener("input", () => {
      servings = Math.max(1, Number(input.value) || 1);
    });
  });
}

// When the user picks/types an ingredient name, auto-fill category and illustration.
function applyNameSuggestion(input) {
  const type = input.dataset.nameInput;
  const form = input.closest("form");
  const name = String(input.value || "").trim();
  const emojiSlot = form?.querySelector(`[data-name-emoji="${type}"]`);
  if (emojiSlot) emojiSlot.textContent = name ? emojiFor(name, type) : storageTypes[type].emoji;
  if (!name) return;
  const hit = ingredientLookup(type, name);
  const categoryInput = form?.querySelector("[name='category']");
  if (categoryInput) {
    categoryInput.value = hit ? hit.category : autoCategory(type, name);
  }
  const unitInput = form?.querySelector("[name='unit']");
  if (unitInput) {
    unitInput.value = defaultUnit(type, name);
  }
}

// Map of category → natural Korean measuring unit.
const UNIT_BY_CATEGORY = {
  채소: "개", 잎채소: "단", 버섯: "팩", 과일: "개", 유제품: "개", 달걀: "개",
  육류: "g", 해산물: "g", "콩/두부": "모", "김치/반찬": "g", 음료: "ml",
  냉동간편식: "개", 냉동채소: "봉지", 냉동과일: "봉지", 냉동해산물: "봉지", 냉동육류: "g",
  아이스크림: "개", 냉동베이커리: "개", "냉동밥/곡물": "개", 냉동세계요리: "개",
  기본양념: "스푼", 장류: "스푼", 소스: "스푼", 기름: "스푼", 향신료: "스푼",
  "식초/드레싱": "스푼", 가루양념: "스푼", 세계양념: "스푼",
  곡물: "컵", 면류: "봉", 통조림: "캔", "건어물/건조": "g", "견과류/씨앗": "g",
  "스낵/과자": "봉", 베이킹: "g", "음료/차/커피": "ml", 구황작물: "개", "꿀/시럽/잼": "병", 인스턴트: "개",
};
const LIQUID_KEYWORDS = ["우유", "두유", "주스", "에이드", "스무디", "라떼", "콜라", "사이다", "생수", "탄산수", "음료", "드링크", "워터"];

// Pick a sensible unit for an ingredient: liquids → ml, otherwise by category.
function defaultUnit(type, name) {
  const n = String(name || "");
  if (LIQUID_KEYWORDS.some((k) => n.includes(k))) return "ml";
  const hit = ingredientLookup(type, name);
  const cat = hit ? hit.category : autoCategory(type, name);
  return UNIT_BY_CATEGORY[cat] || (type === "sauce" ? "스푼" : "개");
}

async function handleAction(event) {
  const target = event.currentTarget;
  const action = event.currentTarget.dataset.action;
  if (action === "toggle-lang") {
    state.lang = state.lang === "ko" ? "en" : "ko";
    saveState();
  }
  if (action === "signup") modal = "signup";
  if (action === "login") modal = "login";
  if (action === "logout") {
    state.user = null;
    saveState();
  }
  if (action === "close-today") {
    localStorage.setItem(POPUP_KEY, new Date().toISOString().slice(0, 10));
    modal = null;
  }
  if (action === "close-modal") modal = null;
  if (action === "back") {
    selectedTab = selectedTab === "home" ? "home" : "home";
  }
  if (action === "make-recipe") {
    if (!canUseFeatures()) {
      modal = "signup";
    } else {
      await makeRecipe();
      selectedTab = "recipe";
    }
  }
  if (action === "copy-prompt") {
    await copyText(recipe?.prompt || "");
    target.textContent = t("copied");
    return;
  }
  if (action === "analyze-photo") {
    handlePhotoAnalyze(target.closest("form"));
    return;
  }
  if (action === "export-backup") {
    exportBackup();
    target.textContent = `✓ ${t("backupDone")}`;
    return;
  }
  render();
}

function exportBackup() {
  const payload = JSON.stringify({
    app: "yorijambaengi",
    version: 2,
    savedAt: new Date().toISOString(),
    inventory: state.inventory,
  }, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `yorijambaengi-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function importBackup(input) {
  const file = input.files?.[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    const inv = data.inventory || data || {};
    ["fridge", "freezer", "sauce", "room"].forEach((type) => {
      const items = Array.isArray(inv[type]) ? inv[type] : [];
      state.inventory[type] = state.inventory[type] || [];
      items.forEach((it) => {
        if (!it || !it.name) return;
        if (state.inventory[type].some((x) => x.name === it.name)) return;
        state.inventory[type].push({
          ...it,
          id: it.id || crypto.randomUUID(),
          emoji: it.emoji || emojiFor(it.name, type),
        });
      });
    });
    saveState();
    render();
  } catch {
    // Ignore an unreadable/invalid backup file.
  }
}

function handlePhotoPick(input) {
  const form = input.closest("form");
  const file = input.files?.[0];
  if (!form || !file) return;
  applyPhotoGuess(form, file);
}

function handlePhotoAnalyze(form) {
  if (!form) return;
  const file = selectedPhotoFile(new FormData(form));
  applyPhotoGuess(form, file);
}

function applyPhotoGuess(form, file) {
  const type = form.dataset.form;
  const nameInput = form.querySelector("[name='name']");
  const categoryInput = form.querySelector("[name='category']");
  const memoInput = form.querySelector("[name='memo']");
  const status = form.querySelector("[data-photo-status]");
  const candidate = inferNameFromPhoto(file?.name || "", type) || knownItemKey(nameInput?.value || "");
  const name = candidate || String(nameInput?.value || "").trim();
  if (candidate && nameInput && !nameInput.value.trim()) nameInput.value = candidate;
  const info = buildSavedItemInfo(name, type, memoInput?.value || "");
  if (categoryInput && !categoryInput.value.trim()) categoryInput.value = info.category;
  if (memoInput && (!memoInput.value.trim() || candidate)) memoInput.value = info.memo;
  if (status) {
    status.textContent = candidate
      ? `${t("photoDetected")}: ${displayName(candidate)} · ${info.category}`
      : t("photoHelp");
  }
}

async function handleAddItem(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const type = form.dataset.form;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  if (!name) return;
  const file = selectedPhotoFile(data);
  const photo = file && file.size ? await fileToDataUrl(file) : null;
  let memo = String(data.get("memo") || "").trim();
  let category = String(data.get("category") || "").trim();
  const info = buildSavedItemInfo(name, type, memo);
  memo = memo || info.memo;
  category = category || autoCategory(type, name);
  const emoji = emojiFor(name, type);
  state.inventory[type].unshift(
    item(name, Number(data.get("amount")) || 0, String(data.get("unit") || "개"), category, memo, photo, emoji)
  );
  saveState();
  render();
}

async function handleAuth(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = String(data.get("email")).trim();
  await createCloudflareUser(email);
  state.user = {
    email,
    joinedAt: new Date().toISOString(),
    provider: "cloudflare-ready-local",
  };
  saveState();
  selectedTab = "home";
  modal = "celebrate";
  render();
}

function handleEditItem(event) {
  event.preventDefault();
  const [type, id] = event.currentTarget.dataset.editForm.split(":");
  const entry = state.inventory[type]?.find((x) => x.id === id);
  if (!entry) return;
  const data = new FormData(event.currentTarget);
  entry.name = String(data.get("name") || "").trim() || entry.name;
  entry.amount = Number(data.get("amount")) || 0;
  entry.unit = String(data.get("unit") || "").trim() || entry.unit;
  entry.category = String(data.get("category") || "").trim();
  entry.memo = String(data.get("memo") || "").trim();
  if (type === "sauce" && !entry.memo) {
    entry.memo = describeSeasoning(entry.name);
  }
  saveState();
  modal = null;
  render();
}

function useInventory(encoded) {
  const [type, id] = encoded.split(":");
  const entry = state.inventory[type].find((x) => x.id === id);
  if (entry) {
    entry.amount = Math.max(0, Number(entry.amount) - 1);
    saveState();
    render();
  }
}

function deleteInventory(encoded) {
  const [type, id] = encoded.split(":");
  state.inventory[type] = state.inventory[type].filter((x) => x.id !== id);
  saveState();
  render();
}

// Clear-out cooking styles, rotated each recommend so the dish type varies.
// Steps only reference {mains}, {season} and universal pantry basics (oil/water/
// sesame) — never a specific ingredient the user may not own.
const CLEAROUT_STYLES = [
  { koName: "볶음", enName: "stir-fry",
    ko: ["{mains}를 한입 크기로 썰고 물기 많은 재료는 따로 둬요.", "중불 팬에 기름을 두르고 단단한 재료부터 넣어 볶아요.", "{season}으로 간을 맞추고 맛을 보며 조절해요.", "마지막에 참기름이나 후추를 넣고 따뜻할 때 담아요."],
    en: ["Cut {mains} into bite-size pieces; set watery ones aside.", "Heat oil over medium and stir-fry the firmer items first.", "Season with {season} and adjust to taste.", "Finish with sesame oil or pepper and plate warm."] },
  { koName: "찌개", enName: "stew",
    ko: ["{mains}를 한입 크기로 썰어요.", "냄비에 물을 붓고 {season}으로 진하게 국물 간을 해요.", "단단한 재료부터 넣어 끓이고 나머지를 더해요.", "보글보글 끓으면 후추를 넣고 따뜻할 때 담아요."],
    en: ["Cut {mains} into bite sizes.", "Add water to a pot and season the broth boldly with {season}.", "Simmer the firm items first, then add the rest.", "Finish with pepper and serve hot."] },
  { koName: "국", enName: "soup",
    ko: ["{mains}를 한입 크기로 썰어요.", "냄비에 물을 넉넉히 붓고 끓여요.", "{mains}를 넣고 {season}으로 국물 간을 맞춰요.", "마지막에 후추나 참기름을 살짝 넣어 담아요."],
    en: ["Cut {mains} into bite sizes.", "Bring plenty of water to a boil.", "Add {mains} and season the broth with {season}.", "Finish with pepper or sesame oil and serve."] },
  { koName: "조림", enName: "braise",
    ko: ["{mains}를 도톰하게 썰어요.", "냄비에 {season}과 물을 넣어 양념을 끓여요.", "{mains}를 넣고 약불에서 자작하게 졸여요.", "국물이 졸아들면 참기름이나 깨를 뿌려 담아요."],
    en: ["Slice {mains} thick.", "Simmer a sauce of {season} and water in a pot.", "Add {mains} and braise gently until reduced.", "Finish with sesame oil or seeds."] },
  { koName: "무침", enName: "seasoned salad",
    ko: ["{mains}를 먹기 좋게 썰거나 살짝 데쳐요.", "물기를 꼭 짜서 볼에 담아요.", "{season}과 참기름, 깨를 넣고 조물조물 무쳐요.", "간을 보며 마무리해 그릇에 담아요."],
    en: ["Cut or briefly blanch {mains}.", "Squeeze out the water and put in a bowl.", "Toss with {season}, sesame oil and seeds.", "Adjust the seasoning and serve."] },
];
let clearoutCursor = 0;

// Lower = use sooner in clear-out (spoils faster).
const CLEAROUT_PRIORITY = {
  잎채소: 1, 버섯: 1, 해산물: 1,
  채소: 2, 과일: 2, 육류: 2,
  "콩/두부": 3, 유제품: 3,
  달걀: 4, 음료: 4,
  "김치/반찬": 5,
};
function clearoutPriority(entry) {
  const cat = entry.category || "";
  if (CLEAROUT_PRIORITY[cat] != null) return CLEAROUT_PRIORITY[cat];
  if (cat.startsWith("냉동") || cat === "아이스크림") return 6; // frozen keeps longest
  return 3;
}

// 냉장고 털기: build a stir-fry from the user's actual fridge/freezer items
// (+ owned seasonings). Returns null when there are no perishables to use.
function buildClearout(servings) {
  const perishable = [...state.inventory.fridge, ...state.inventory.freezer].filter((x) => Number(x.amount) > 0);
  if (!perishable.length) return null;
  const sauces = state.inventory.sauce.filter((x) => Number(x.amount) > 0);
  const hasSauce = (kw) => sauces.find((x) => x.name.includes(kw) || kw.includes(x.name));
  // Use the most perishable items first — fresh veg/greens/seafood spoil fastest,
  // frozen and fermented foods keep, so they're lowest priority.
  const mains = perishable
    .slice()
    .sort((a, b) => clearoutPriority(a) - clearoutPriority(b))
    .slice(0, 4);

  const seasonNames = [];
  ["간장", "식용유", "참기름", "고추장", "굴소스", "소금", "후추", "설탕"].forEach((s) => {
    const m = hasSauce(s);
    if (m && seasonNames.length < 3 && !seasonNames.includes(m.name)) seasonNames.push(m.name);
  });
  sauces.forEach((x) => { if (seasonNames.length < 3 && !seasonNames.includes(x.name)) seasonNames.push(x.name); });

  const names = [...mains.map((m) => m.name), ...seasonNames];
  const measured = names.map((n) => {
    const a = measureIngredient(n, "fridgeClean", servings);
    return { name: n, enName: ingredientTranslations[n] || EN_NAME[n] || n, ko: a.ko, en: a.en };
  });

  // Clear-out shopping stays minimal: only the basic seasonings you don't have.
  const shopping = ["간장", "식용유"].filter((s) => !hasSauce(s)).map((s) => {
    const a = measureIngredient(s, "fridgeClean", servings);
    return state.lang === "ko" ? `${s} ${a.ko}` : `${ingredientTranslations[s] || s} ${a.en}`;
  });

  // Rotate the cooking style each recommend (볶음→찌개→국→조림→무침) for variety,
  // while the ingredients stay driven by the fridge (fresh veg first).
  const style = CLEAROUT_STYLES[clearoutCursor % CLEAROUT_STYLES.length];
  clearoutCursor += 1;
  const mainTop = mains.slice(0, 3);
  const koTitle = `${mainTop.map((m) => m.name).join(" ")} ${style.koName}`;
  const enTitle = `${mainTop.map((m) => ingredientTranslations[m.name] || EN_NAME[m.name] || m.name).join(" ")} ${style.enName}`;

  const mainsKo = mains.map((m) => displayName(m.name)).join(", ");
  const mainsEn = mains.map((m) => ingredientTranslations[m.name] || EN_NAME[m.name] || m.name).join(", ");
  const seasonKo = seasonNames[0] ? displayName(seasonNames[0]) : "간장";
  const seasonEn = seasonNames[0] ? (ingredientTranslations[seasonNames[0]] || EN_NAME[seasonNames[0]] || seasonNames[0]) : "soy sauce";
  const mainsStr = state.lang === "ko" ? mainsKo : mainsEn;
  const seasonStr = state.lang === "ko" ? seasonKo : seasonEn;
  const measureSuffix = state.lang === "ko"
    ? ` 계량: ${formatMeasuredList(measured, "ko")}.`
    : ` Measurements: ${formatMeasuredList(measured, "en")}.`;
  const titlesKo = [t("stepPrepTitle"), t("stepHeatTitle"), t("stepSeasonTitle"), t("stepPlateTitle")];
  const titlesEn = ["Measure", "Cook", "Check", "Plate"];
  const tmpl = state.lang === "ko" ? style.ko : style.en;
  const steps = tmpl.map((text, i) => ({
    title: state.lang === "ko" ? titlesKo[i] : titlesEn[i],
    text: text.replaceAll("{mains}", mainsStr).replaceAll("{season}", seasonStr) + (i === 0 ? measureSuffix : ""),
  }));

  return { measured, shopping, consume: names, koTitle, enTitle, steps };
}

async function makeRecipe() {
  const profile = recipeProfiles[selectedCookMode] || recipeProfiles.fridgeClean;
  const allItems = [
    ...state.inventory.fridge,
    ...state.inventory.freezer,
    ...state.inventory.sauce,
    ...state.inventory.room,
  ];
  const available = allItems.filter((x) => Number(x.amount) > 0);
  const names = available.map((x) => x.name);
  // Owned = anything in the pantry, even if the quantity is low/zero — so a
  // staple you already have never gets pushed back onto the shopping list.
  const ownedNames = allItems.map((x) => x.name);
  const mode = cookModes.find(([key]) => key === selectedCookMode);
  // 냉장고 털기 = use what the user actually has, not a fixed dish.
  const clear = selectedCookMode === "fridgeClean" ? buildClearout(servings) : null;
  const dish = clear ? null : pickDish(selectedCookMode);
  let measuredIngredients;
  let displayMain;
  let englishMain;
  let shopping;
  let pickedNames;
  if (clear) {
    measuredIngredients = clear.measured;
    displayMain = clear.measured.map((entry) => displayName(entry.name));
    englishMain = clear.measured.map((entry) => entry.enName);
    shopping = clear.shopping;
    pickedNames = clear.consume;
  } else if (dish && dish.ing && dish.ing.length) {
    // Ingredients/shopping follow the actual dish (e.g. 탕수육 → 고기·전분·소스), not the mode's generic list.
    measuredIngredients = buildDishIngredients(dish, servings);
    displayMain = measuredIngredients.map((entry) => displayName(entry.name));
    englishMain = measuredIngredients.map((entry) => entry.enName);
    shopping = measuredIngredients
      .filter((entry) => !ownedNames.some((name) => ingredientMatchesNeed(name, entry.name)))
      .map((entry) => (state.lang === "ko" ? `${displayName(entry.name)} ${entry.ko}` : `${entry.enName} ${entry.en}`));
    // Consume the owned pantry items that match this dish's ingredients.
    pickedNames = allItems
      .filter((it) => Number(it.amount) > 0 && measuredIngredients.some((entry) => ingredientMatchesNeed(it.name, entry.name)))
      .map((it) => it.name);
  } else {
    const allowedItems = available.filter((entry) => profile.allow.includes(entry.name));
    const pickedItems = pickRecipeItems(allowedItems, profile);
    pickedNames = pickedItems.map((x) => x.name);
    displayMain = pickedNames.map(displayName);
    englishMain = pickedNames.map((name) => ingredientTranslations[name] || name);
    measuredIngredients = buildMeasuredIngredients(selectedCookMode, profile, pickedNames, servings);
    const missingNames = (profile.required || []).filter((need) => !ownedNames.some((name) => ingredientMatchesNeed(name, need)));
    shopping = missingNames.map((name) => formatShoppingNeed(name, measuredIngredients));
  }
  const modeName = clear
    ? (state.lang === "ko" ? clear.koTitle : clear.enTitle)
    : dish ? (state.lang === "ko" ? dish.ko : dish.en) : (state.lang === "ko" ? profile.koTitle : profile.enTitle);
  const englishModeName = clear ? clear.enTitle : dish ? dish.en : (profile.enTitle || mode?.[2] || "easy home cooking");
  const title = state.lang === "ko"
    ? `${modeName} ${servings}${t("servingsSuffix")}`
    : `${modeName} for ${servings} ${t("servingsSuffix")}`;
  const englishTitle = `${englishModeName} for ${servings} servings`;
  const mainText = displayMain.join(", ") || t("basicIngredients");
  const reference = await fetchRecipeReference(profile, englishMain);
  const visual = buildVisualDescription(englishModeName, englishMain, measuredIngredients, profile);
  const visualText = state.lang === "ko"
    ? buildKoreanVisualDescription(displayMain, measuredIngredients, profile)
    : visual;
  const sourceLabel = reference
    ? `${t("sourceInternet")}: TheMealDB`
    : t("sourceLocal");
  recipe = {
    title,
    summary: buildSmartSummary(mainText, reference, measuredIngredients),
    ingredients: measuredIngredients.map((entry) => ({
      label: state.lang === "ko" ? displayName(entry.name) : entry.enName,
      amount: state.lang === "ko" ? entry.ko : entry.en,
    })),
    shopping,
    steps: clear ? clear.steps : dish ? buildVariantSteps(dish, measuredIngredients) : buildRecipeSteps(selectedCookMode, profile, measuredIngredients),
    visual: visualText,
    reference,
    sourceLabel,
    prompt: buildFoodPrompt(englishTitle, englishMain, measuredIngredients, englishModeName, visual, reference),
  };
  // No auto-consume: recommendations don't change the pantry. Items stay until
  // the user uses (사용) or deletes (삭제) them, so repeated recommends keep
  // featuring the fresh produce until it's actually removed.
  void pickedNames;
}

function buildSmartSummary(mainText, reference, measuredIngredients) {
  const measureLine = measuredIngredients.slice(0, 3).map((entry) => (
    state.lang === "ko"
      ? `${displayName(entry.name)} ${entry.ko}`
      : `${entry.enName} ${entry.en}`
  )).join(", ");
  const base = formatText(t("recipeSummary"), { items: mainText });
  const precise = measureLine
    ? (state.lang === "ko" ? ` 먼저 ${measureLine}처럼 계량해서 시작해요.` : ` Start by measuring ${measureLine}.`)
    : "";
  if (!reference) return `${base}${precise}`;
  return state.lang === "ko"
    ? `${base}${precise} 무료 레시피 DB의 “${reference.name}”도 참고했어요.`
    : `${base}${precise} Also checked the free recipe DB reference "${reference.name}".`;
}

function pickRecipeItems(items, profile) {
  const picked = [];
  profile.required.forEach((name) => {
    const found = items.find((entry) => entry.name === name);
    if (found && !picked.some((entry) => entry.name === found.name)) picked.push(found);
  });
  items.forEach((entry) => {
    if (picked.length < 5 && !picked.some((x) => x.name === entry.name)) picked.push(entry);
  });
  return picked;
}

function selectedPhotoFile(data) {
  const camera = data.get("photoCamera");
  const gallery = data.get("photoGallery");
  if (camera && camera.size) return camera;
  if (gallery && gallery.size) return gallery;
  return null;
}

function inferNameFromPhoto(fileName, type) {
  const compact = normalizeKeyword(fileName);
  if (!compact) return "";
  const candidates = type === "sauce"
    ? Object.keys(seasoningKnowledge)
    : Object.keys(photoNameAliases);
  return candidates.find((name) => {
    const aliases = photoNameAliases[name] || [name, ingredientTranslations[name]];
    return aliases.filter(Boolean).some((alias) => compact.includes(normalizeKeyword(alias)));
  }) || "";
}

function knownItemKey(name) {
  const compact = normalizeKeyword(name);
  if (!compact) return "";
  return Object.keys({ ...ingredientKnowledge, ...seasoningKnowledge }).find((key) => {
    const aliases = photoNameAliases[key] || [key, ingredientTranslations[key]];
    return normalizeKeyword(key) === compact || aliases.filter(Boolean).some((alias) => compact.includes(normalizeKeyword(alias)));
  }) || "";
}

function normalizeKeyword(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9가-힣]/g, "");
}

function buildSavedItemInfo(name, type, fallbackMemo = "") {
  const key = knownItemKey(name) || name;
  if (type === "sauce") {
    const info = enrichSeasoning(key, fallbackMemo);
    return {
      category: info.category,
      memo: fallbackMemo || formatAutoMemo(key, {
        tasteKo: seasoningTasteKo(key),
        tasteEn: seasoningTasteEn(key),
        usageKo: info.usage,
        usageEn: info.usage,
        tipKo: info.tip,
        tipEn: info.tip,
      }),
    };
  }
  const info = ingredientKnowledge[key];
  if (info) {
    return {
      category: activeLang() === "ko" ? info.category : categoryTranslations[info.category] || info.category,
      memo: fallbackMemo || formatAutoMemo(key, info),
    };
  }
  return {
    category: type === "freezer" ? displayCategory("냉동재료") : t("defaultCategory"),
    memo: fallbackMemo || (activeLang() === "ko"
      ? `사진과 이름 기준으로 저장했어요. 맛과 활용법은 무료 검색에서 "${name} 요리 활용법 맛 보관법"으로 확인해 보세요.`
      : `Saved from photo and name. Use free search for "${name} cooking uses taste storage tips" to improve the note.`),
  };
}

function formatAutoMemo(name, info) {
  if (activeLang() === "ko") {
    return `맛: ${info.tasteKo} · 사용 요리: ${info.usageKo} · 팁: ${info.tipKo} · 무료 검색 키워드: "${displayName(name)} 요리 활용법 맛 보관법"`;
  }
  return `Taste: ${info.tasteEn} · Cooking uses: ${info.usageEn} · Tip: ${info.tipEn} · Free search keyword: "${displayName(name)} cooking uses taste storage tips"`;
}

function seasoningTasteKo(name) {
  if (name.includes("설탕")) return "달콤하고 윤기를 주는 맛";
  if (name.includes("식초")) return "새콤하고 산뜻한 맛";
  if (name.includes("고추") || name.includes("후추")) return "매콤하고 향이 강한 맛";
  if (name.includes("참기름") || name.includes("식용유")) return "고소하고 향을 살리는 맛";
  if (name.includes("소금") || name.includes("간장") || name.includes("된장") || name.includes("굴소스")) return "짭조름하고 감칠맛 있는 맛";
  return "요리의 간과 향을 보강하는 맛";
}

function seasoningTasteEn(name) {
  if (name.includes("설탕")) return "sweet and glossy";
  if (name.includes("식초")) return "sour and bright";
  if (name.includes("고추") || name.includes("후추")) return "spicy and aromatic";
  if (name.includes("참기름") || name.includes("식용유")) return "nutty or rich";
  if (name.includes("소금") || name.includes("간장") || name.includes("된장") || name.includes("굴소스")) return "salty and savory";
  return "seasoning that adds flavor and aroma";
}

function buildMeasuredIngredients(mode, profile, pickedNames, count) {
  const names = [...new Set([...(profile.required || []), ...pickedNames])]
    .filter((name) => profile.allow.includes(name))
    .slice(0, 7);
  return names.map((name) => {
    const amount = measureIngredient(name, mode, count);
    return {
      name,
      enName: ingredientTranslations[name] || name,
      ko: amount.ko,
      en: amount.en,
    };
  });
}

function measureIngredient(name, mode, count) {
  const serving = Math.max(1, Number(count) || 1);
  const byMode = {
    dessert: {
      우유: ml(120, serving),
      달걀: pieces("egg", serving),
      설탕: spoons(1.5, serving),
      버터: spoons(0.5, serving),
      밀가루: spoons(3, serving),
      식빵: slices(1, serving),
      고구마: pieces("sweet potato", 0.5 * serving),
      "냉동 블루베리": spoons(2, serving),
    },
    bread: {
      밀가루: cups(0.75, serving),
      우유: ml(80, serving),
      버터: spoons(1, serving),
      설탕: spoons(1, serving),
      소금: pinches(serving),
      달걀: pieces("egg", serving),
      식빵: slices(1, serving),
      치즈: slices(1, serving),
    },
    snack: {
      식빵: slices(2, serving),
      달걀: pieces("egg", serving),
      치즈: slices(1, serving),
      버터: spoons(0.5, serving),
      마요네즈: spoons(0.5, serving),
      케첩: spoons(0.5, serving),
      참치캔: cans(0.5, serving),
      우유: ml(50, serving),
      설탕: spoons(0.5, serving),
    },
    fridgeClean: {
      달걀: pieces("egg", serving),
      대파: lengthUnit("대", "stalk", 0.5, serving),
      두부: blocks(0.5, serving),
      양파: pieces("onion", 0.5 * serving),
      당근: pieces("carrot", 0.3 * serving),
      애호박: pieces("zucchini", 0.3 * serving),
      김치: cups(0.5, serving),
      간장: spoons(1, serving),
      식용유: spoons(1, serving),
      참기름: spoons(0.5, serving),
      고추장: spoons(0.5, serving),
      밥: bowls(1, serving),
      냉동밥: bowls(1, serving),
    },
    party: {
      치즈: slices(1, serving),
      식빵: slices(2, serving),
      참치캔: cans(0.5, serving),
      "냉동 새우": pieces("shrimp", 4 * serving),
      "냉동 브로콜리": cups(0.5, serving),
      감자: pieces("potato", 0.5 * serving),
      마요네즈: spoons(1, serving),
      케첩: spoons(0.5, serving),
      식용유: spoons(0.5, serving),
    },
    korean: {
      밥: bowls(1, serving),
      쌀: cups(0.5, serving),
      김치: cups(0.7, serving),
      두부: blocks(0.5, serving),
      대파: lengthUnit("대", "stalk", 0.5, serving),
      양파: pieces("onion", 0.5 * serving),
      달걀: pieces("egg", serving),
      간장: spoons(1, serving),
      고추장: spoons(0.7, serving),
      참기름: spoons(0.5, serving),
    },
    japanese: {
      밥: bowls(1, serving),
      쌀: cups(0.5, serving),
      달걀: pieces("egg", 1.5 * serving),
      양파: pieces("onion", 0.5 * serving),
      대파: lengthUnit("대", "stalk", 0.3, serving),
      간장: spoons(1, serving),
      설탕: spoons(0.5, serving),
      식초: spoons(0.3, serving),
      김: sheets(0.5, serving),
      "냉동 새우": pieces("shrimp", 4 * serving),
    },
    chinese: {
      대파: lengthUnit("대", "stalk", 1, serving),
      양파: pieces("onion", 0.5 * serving),
      당근: pieces("carrot", 0.3 * serving),
      "냉동 새우": pieces("shrimp", 5 * serving),
      달걀: pieces("egg", serving),
      밥: bowls(1, serving),
      냉동밥: bowls(1, serving),
      간장: spoons(1, serving),
      굴소스: spoons(0.7, serving),
      식용유: spoons(1, serving),
    },
    meat: {
      "냉동 대패삼겹살": grams(180, serving),
      양파: pieces("onion", 0.5 * serving),
      대파: lengthUnit("대", "stalk", 0.5, serving),
      마늘: pieces("garlic clove", 2 * serving),
      소금: pinches(serving),
      후추: shakes(3, serving),
      식용유: spoons(0.5, serving),
      간장: spoons(0.7, serving),
      참기름: spoons(0.3, serving),
      김치: cups(0.5, serving),
    },
    quick: {
      밥: bowls(1, serving),
      냉동밥: bowls(1, serving),
      달걀: pieces("egg", serving),
      간장: spoons(1, serving),
      참기름: spoons(0.5, serving),
      김: sheets(0.5, serving),
      대파: lengthUnit("대", "stalk", 0.3, serving),
      후추: shakes(2, serving),
    },
  };
  return byMode[mode]?.[name] || genericMeasure(name, serving);
}

function genericMeasure(name, serving) {
  if (name.includes("간장") || name.includes("소스") || name.includes("기름")) return spoons(1, serving);
  if (name.includes("소금") || name.includes("후추")) return pinches(serving);
  if (name.includes("밥")) return bowls(1, serving);
  if (name.includes("달걀") || name.includes("계란")) return pieces("egg", serving);
  return { ko: `${nice(serving)}인분 사용할 만큼`, en: `enough for ${nice(serving)} serving${serving > 1 ? "s" : ""}` };
}

function nice(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}

function plural(word, amount) {
  if (word === "tbsp") return `${nice(amount)} tbsp`;
  if (amount <= 1) return `${nice(amount)} ${word}`;
  if (word === "sweet potato") return `${nice(amount)} sweet potatoes`;
  if (word.endsWith("sh")) return `${nice(amount)} ${word}`;
  return `${nice(amount)} ${word}s`;
}

function spoons(amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}스푼`, en: plural("tbsp", value) };
}

function cups(amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}컵`, en: plural("cup", value) };
}

function ml(amount, serving) {
  const value = Math.round(amount * serving);
  return { ko: `${value}ml`, en: `${value} ml` };
}

function grams(amount, serving) {
  const value = Math.round(amount * serving);
  return { ko: `${value}g`, en: `${value} g` };
}

function pieces(word, value) {
  return { ko: `${nice(value)}개`, en: plural(word, value) };
}

function slices(amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}장`, en: plural("slice", value) };
}

function sheets(amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}장`, en: plural("sheet", value) };
}

function cans(amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}캔`, en: plural("can", value) };
}

function bowls(amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}공기`, en: plural("bowl", value) };
}

function blocks(amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}모`, en: plural("block", value) };
}

function lengthUnit(koUnit, enUnit, amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}${koUnit}`, en: plural(enUnit, value) };
}

function pinches(serving) {
  return {
    ko: serving === 1 ? "한 꼬집" : `${nice(serving)}꼬집`,
    en: serving === 1 ? "1 pinch" : `${nice(serving)} pinches`,
  };
}

function shakes(amount, serving) {
  const value = amount * serving;
  return { ko: `${nice(value)}번 톡톡`, en: `${nice(value)} shakes` };
}

function ingredientMatchesNeed(name, need) {
  const en = (ingredientTranslations[name] || EN_NAME[name] || "").toLowerCase();
  // Match both directions so variants count: "백설탕"/"맛소금" satisfy "설탕"/"소금".
  return need.includes(name) || name.includes(need) || (en && need.toLowerCase().includes(en));
}

// Pick the next dish for a mode and advance the cursor so repeated taps cycle.
function pickDish(mode) {
  const dishes = DISHES[mode];
  if (!dishes || !dishes.length) return null;
  const index = (dishCursor[mode] || 0) % dishes.length;
  dishCursor[mode] = index + 1;
  return dishes[index];
}

// Turn a dish's ingredient list into measured entries, scaled by servings.
function buildDishIngredients(dish, servings) {
  return (dish.ing || []).map(([ko, en, amt]) => {
    const scaledKo = scaleAmt(String(amt || ""), servings);
    return { name: ko, enName: en, ko: scaledKo, en: koAmtToEn(scaledKo) };
  });
}

function scaleAmt(text, servings) {
  const n = Math.max(1, Number(servings) || 1);
  if (n === 1) return text;
  return text.replace(/(\d+(?:\.\d+)?)/, (m) => {
    const v = Math.round(parseFloat(m) * n * 10) / 10;
    return String(v);
  });
}

function koAmtToEn(text) {
  if (text.includes("한 꼬집")) return "a pinch";
  if (text.includes("약간")) return "a little";
  if (text.includes("적당량")) return "as needed";
  const units = [["작은술", " tsp"], ["스푼", " tbsp"], ["컵", " cup"], ["공기", " bowl"], ["그릇", " bowl"], ["마리", " pcs"], ["개", " pcs"], ["알", " pcs"], ["장", " slices"], ["모", " block"], ["톨", " cloves"], ["줌", " handful"], ["봉지", " pack"], ["캔", " can"], ["대", " stalk"], ["단", " bunch"]];
  for (const [ko, en] of units) {
    if (text.includes(ko)) return text.replace(ko, en).trim();
  }
  return text.trim();
}

function buildVariantSteps(dish, measuredIngredients) {
  const measuredKo = formatMeasuredList(measuredIngredients, "ko");
  const measuredEn = formatMeasuredList(measuredIngredients, "en");
  const titlesKo = [t("stepPrepTitle"), t("stepHeatTitle"), t("stepSeasonTitle"), t("stepPlateTitle")];
  const titlesEn = ["Measure", "Cook", "Check", "Plate"];
  const steps = state.lang === "ko" ? dish.koSteps : dish.enSteps;
  return steps.map((text, index) => ({
    title: state.lang === "ko" ? titlesKo[index] : titlesEn[index],
    text: index === 0 && measuredKo
      ? `${text} ${state.lang === "ko" ? `계량: ${measuredKo}.` : `Measurements: ${measuredEn}.`}`
      : text,
  }));
}

function buildRecipeSteps(mode, profile, measuredIngredients) {
  const measuredKo = formatMeasuredList(measuredIngredients, "ko");
  const measuredEn = formatMeasuredList(measuredIngredients, "en");
  const titlesKo = [t("stepPrepTitle"), t("stepHeatTitle"), t("stepSeasonTitle"), t("stepPlateTitle")];
  const titlesEn = ["Measure", "Cook", "Check", "Plate"];
  const custom = buildPreciseMethod(mode, measuredIngredients);
  const method = state.lang === "ko" ? custom.ko : custom.en;
  return method.map((text, index) => ({
    title: state.lang === "ko" ? titlesKo[index] : titlesEn[index],
    text: index === 0
      ? `${text} ${state.lang === "ko" ? `계량: ${measuredKo}.` : `Measurements: ${measuredEn}.`}`
      : text,
  }));
}

function formatMeasuredList(items, lang) {
  return items.map((entry) => (
    lang === "ko"
      ? `${displayName(entry.name)} ${entry.ko}`
      : `${entry.enName} ${entry.en}`
  )).join(", ");
}

function amountOf(items, name, lang = state.lang) {
  const found = items.find((entry) => entry.name === name);
  if (!found) return "";
  return lang === "ko" ? found.ko : found.en;
}

function buildPreciseMethod(mode, items) {
  const dessertFlourKo = amountOf(items, "밀가루", "ko");
  const dessertFlourEn = amountOf(items, "밀가루", "en");
  const dessertBlueberryKo = amountOf(items, "냉동 블루베리", "ko");
  const dessertBlueberryEn = amountOf(items, "냉동 블루베리", "en");
  const ko = {
    dessert: [
      `볼에 우유 ${amountOf(items, "우유", "ko")}, 달걀 ${amountOf(items, "달걀", "ko")}, 설탕 ${amountOf(items, "설탕", "ko")}${dessertFlourKo ? `, 밀가루 ${dessertFlourKo}` : ""}을 넣고 30초 섞어요.`,
      `팬에 버터 ${amountOf(items, "버터", "ko") || "0.5스푼"}을 녹이고 반죽을 부은 뒤${dessertBlueberryKo ? ` 냉동 블루베리 ${dessertBlueberryKo}을 위에 올려요.` : " 달콤한 재료를 위에 올려요."}`,
      "약불로 낮추고 뚜껑을 덮어 6~8분 익혀요. 가운데를 젓가락으로 찔렀을 때 묽은 반죽이 많이 묻지 않으면 거의 익은 거예요.",
      "가장자리가 노릇하면 불을 끄고 2분 두었다가 담아요. 설탕을 아주 조금 더 뿌리면 이미지처럼 디저트 느낌이 살아나요.",
    ],
    bread: [
      `볼에 밀가루 ${amountOf(items, "밀가루", "ko")}, 우유 ${amountOf(items, "우유", "ko")}, 설탕 ${amountOf(items, "설탕", "ko")}, 소금 ${amountOf(items, "소금", "ko") || "한 꼬집"}을 넣어 되직하게 섞어요.`,
      `버터 ${amountOf(items, "버터", "ko")}을 녹여 반죽에 섞고 3분 쉬게 해요. 너무 묽으면 밀가루 1스푼을 더 넣어요.`,
      "약불 팬에 반죽을 1.5cm 두께로 펴고 뚜껑을 덮어 5~6분, 뒤집어서 4분 더 익혀요.",
      "겉이 노릇하고 눌렀을 때 천천히 올라오면 완성이에요. 버터를 조금 올려 윤기 있게 담아요.",
    ],
    snack: [
      "식빵, 치즈, 달걀처럼 바로 익는 재료를 계량대로 꺼내요.",
      "약불 팬에 버터를 녹이고 식빵을 한 면당 1~2분 노릇하게 구워요.",
      "달걀은 완전히 익히고 치즈는 30초 정도 녹여요. 마요네즈나 케첩은 마지막에 얇게 발라요.",
      "반으로 잘라 단면이 보이게 세우면 간식 사진처럼 먹기 좋아 보여요.",
    ],
    fridgeClean: [
      "채소는 한입 크기, 두부나 달걀은 부서지지 않게 준비해요.",
      "중불 팬에 식용유를 두르고 대파를 30초 볶은 뒤 단단한 재료부터 넣어요.",
      "간장은 1인분 기준 1스푼부터 넣고, 김치나 고추장이 있으면 짠맛을 보며 줄여요.",
      "불을 끄고 참기름과 후추를 마지막에 넣어 따뜻하게 담아요.",
    ],
    korean: [
      "밥이나 두부, 김치, 대파를 계량대로 꺼내고 김치는 가위로 작게 잘라요.",
      "중불 팬에 대파를 30초 볶고 김치를 2분 볶아 신맛을 부드럽게 만들어요.",
      "밥이나 두부를 넣고 간장 또는 고추장을 1인분 기준 1스푼 이하로 나눠 넣어요.",
      "불을 끄고 참기름을 둘러 한식 집밥 향이 나게 담아요.",
    ],
    japanese: [
      "밥은 따뜻하게 데우고 달걀과 양파를 계량대로 준비해요.",
      "작은 팬에 양파, 간장, 설탕, 물 2스푼을 넣고 2분 끓여요.",
      "달걀을 풀어 넣고 약불에서 40~60초만 익혀 촉촉하게 멈춰요.",
      "밥 위에 그대로 올리고 김이나 대파를 얹어 덮밥처럼 마무리해요.",
    ],
    chinese: [
      "대파는 넉넉히 송송 썰고 밥, 달걀, 새우를 계량대로 꺼내요.",
      "중강불 팬에 식용유를 두르고 대파를 40초 볶아 향을 낸 뒤 달걀이나 새우를 넣어요.",
      "밥을 넣고 간장과 굴소스를 가장자리로 둘러 1~2분 빠르게 볶아요.",
      "후추를 살짝 뿌리고 넓은 접시에 담아 윤기가 보이게 펼쳐요.",
    ],
    meat: [
      "고기는 해동 후 키친타월로 물기를 닦고 소금, 후추를 계량대로 뿌려요.",
      "팬을 중강불로 1분 예열한 뒤 고기를 겹치지 않게 펼쳐 한 면을 2분 굽어요.",
      "뒤집어서 1~2분 더 굽고 양파나 대파를 넣어 기름에 같이 익혀요.",
      "고기 가장자리가 갈색이고 속까지 뜨거우면 기름을 살짝 빼고 담아요.",
    ],
    quick: [
      "밥은 뜨겁게 데우고 달걀, 간장, 참기름을 계량대로 준비해요.",
      "달걀은 반숙 2분 또는 스크램블 1분 30초로 빠르게 익혀요.",
      "밥에 간장과 참기름을 먼저 섞고, 간이 부족하면 간장 0.5스푼만 추가해요.",
      "달걀과 김, 대파를 올려 한 그릇으로 마무리해요.",
    ],
    party: [
      "빵, 치즈, 단백질 재료를 한입 크기로 잘라 계량대로 준비해요.",
      "새우나 감자는 먼저 완전히 익히고 물기를 닦아 눅눅하지 않게 해요.",
      "마요네즈와 케첩은 1인분 기준 1스푼 안쪽으로 작게 찍어 올려요.",
      "색이 다른 재료가 번갈아 보이게 접시에 간격을 두고 담아요.",
    ],
  };
  const en = {
    dessert: [
      `Whisk milk ${amountOf(items, "우유", "en")}, egg ${amountOf(items, "달걀", "en")}, sugar ${amountOf(items, "설탕", "en")}${dessertFlourEn ? `, and flour ${dessertFlourEn}` : ""} for 30 seconds.`,
      `Melt butter ${amountOf(items, "버터", "en") || "0.5 tbsp"} in a skillet, pour in the mixture, and scatter ${dessertBlueberryEn ? `frozen blueberries ${dessertBlueberryEn}` : "a sweet topping"} over it.`,
      "Cook covered over low heat for 6 to 8 minutes. It is nearly done when a skewer comes out without a lot of runny batter.",
      "Rest for 2 minutes, then plate it with a tiny extra dusting of sugar for a dessert-like finish.",
    ],
    bread: [
      `Mix flour ${amountOf(items, "밀가루", "en")}, milk ${amountOf(items, "우유", "en")}, sugar ${amountOf(items, "설탕", "en")}, and salt ${amountOf(items, "소금", "en") || "1 pinch"} into a thick batter.`,
      `Stir in melted butter ${amountOf(items, "버터", "en")} and rest the batter for 3 minutes. Add 1 tbsp flour if it is too loose.`,
      "Spread it 1.5 cm thick in a low-heat skillet, cover, cook 5 to 6 minutes, flip, then cook 4 more minutes.",
      "Plate when the surface is golden and the center springs back gently. Finish with a little butter gloss.",
    ],
  };
  const profile = recipeProfiles[mode] || recipeProfiles.fridgeClean;
  return {
    ko: ko[mode] || profile.methodKo,
    en: en[mode] || profile.methodEn,
  };
}

function requiredForMode(mode, count) {
  const profile = recipeProfiles[mode] || recipeProfiles.fridgeClean;
  return state.lang === "ko"
    ? profile.required
    : profile.required.map((name) => ingredientTranslations[name] || name);
}

function formatShoppingNeed(name, measuredIngredients) {
  const measured = measuredIngredients.find((entry) => entry.name === name);
  if (state.lang === "ko") {
    return measured ? `${displayName(name)} ${measured.ko}` : displayName(name);
  }
  const enName = ingredientTranslations[name] || name;
  return measured ? `${enName} ${measured.en}` : enName;
}

function consumeForRecipe(usedNames = []) {
  const usedSet = new Set(usedNames);
  const allTypes = ["fridge", "freezer", "sauce", "room"];
  allTypes.forEach((type) => {
    state.inventory[type].forEach((entry) => {
      if (!usedSet.has(entry.name)) return;
      entry.amount = Math.max(0, Number(entry.amount) - (type === "sauce" ? 0.5 : 1));
    });
  });
}

function buildKoreanVisualDescription(displayMain, measuredIngredients, profile) {
  const list = displayMain.join(", ") || "집에 있는 재료";
  const measures = measuredIngredients.slice(0, 4)
    .map((entry) => `${displayName(entry.name)} ${entry.ko}`)
    .join(", ");
  const hint = profile.visualHintKo || `${list}가 한 접시에 보기 좋게 담기고 윤기와 김이 살아 있는 집밥`;
  return `${measures || list}로 만든 완성 모습은 ${hint}예요. 이미지로 만들면 실제 어떤 비주얼인지 바로 알 수 있게 주재료가 선명하게 보여야 해요.`;
}

function buildVisualDescription(modeName, ingredients, measuredIngredients, profile) {
  const list = ingredients.filter(Boolean).join(", ") || "simple pantry ingredients";
  const measures = measuredIngredients
    .map((entry) => `${entry.enName} ${entry.en}`)
    .join(", ");
  const hint = profile.visualHintEn || `a ${modeName} made with ${list}: glossy, warm, generous, neatly plated, with visible textures, steam, and appetizing color contrast`;
  return `The final dish should look like ${hint}. Use these exact cooking ingredients as visual cues: ${measures || list}.`;
}

async function fetchRecipeReference(profile, ingredients) {
  const terms = [...(profile.searchTerms || []), ...ingredients].filter(Boolean);
  for (const term of terms.slice(0, 5)) {
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(term)}`;
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3500);
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      if (!response.ok) continue;
      const data = await response.json();
      const meal = Array.isArray(data.meals) ? data.meals.find(Boolean) : null;
      if (meal) return normalizeMealReference(meal);
    } catch {
      // Free recipe lookup is a bonus; local chef rules still work offline.
    }
  }
  return null;
}

function normalizeMealReference(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i += 1) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`.trim());
    }
  }
  return {
    name: meal.strMeal,
    area: meal.strArea,
    category: meal.strCategory,
    instructions: meal.strInstructions,
    ingredients: ingredients.slice(0, 8),
    source: meal.strSource || meal.strYoutube || "https://www.themealdb.com/",
  };
}

function buildFoodPrompt(title, ingredients, measuredIngredients, modeText, visualDescription, reference) {
  const list = ingredients.filter(Boolean).join(", ") || "simple pantry ingredients";
  const measures = measuredIngredients
    .map((entry) => `${entry.enName}: ${entry.en}`)
    .join("; ");
  const referenceLine = reference
    ? `Free recipe reference: ${reference.name}, ${reference.area || "home cooking"} style, with cues from ${reference.ingredients.join(", ")}.`
    : "No external recipe reference was available; use realistic beginner home-cooking presentation.";
  return `Create a mouthwatering square 1:1 food photo for "${title}". Style: ${modeText}. Main ingredients from the user's kitchen: ${list}. Exact recipe measurements: ${measures}. ${referenceLine} Visual direction: ${visualDescription} The image must match this recipe, not a different dish. Plate the food on a warm ceramic dish, show glossy textures, gentle steam, fresh garnish, appetizing color contrast, realistic home kitchen lighting, shallow depth of field, high detail, no text, no watermark, no hands, no packaging. Generate in 1:1 square aspect ratio (1:1 비율로 생성).`;
}

function describeSeasoning(name) {
  const info = enrichSeasoning(name, "");
  return `${info.usage} ${info.tip}`;
}

function enrichSeasoning(name, fallback) {
  const foundKey = knownSeasoningKey(name);
  const info = foundKey ? seasoningKnowledge[foundKey] : null;
  if (info) {
    return {
      category: seasoningCategories[info.category][activeLang()],
      usage: activeLang() === "ko" ? info.usageKo : info.usageEn,
      tip: activeLang() === "ko" ? info.tipKo : info.tipEn,
    };
  }
  return {
    category: t("defaultCategory"),
    usage: fallback || (activeLang() === "ko"
      ? "볶음, 무침, 국물, 소스에 조금씩 테스트하며 쓰기 좋아요."
      : "Try a small amount in stir-fries, salads, soups, or sauces."),
    tip: activeLang() === "ko"
      ? "처음 쓰는 양념은 1인분 기준 반 작은술부터 넣고 맛을 보며 늘리세요."
      : "For a new seasoning, start with half a teaspoon per serving and increase after tasting.",
  };
}

function categoryKey(label) {
  return Object.entries(seasoningCategories).find(([, value]) => value.ko === label || value.en === label)?.[0] || "basic";
}

function knownSeasoningKey(name) {
  return Object.keys(seasoningKnowledge).find((key) => name.includes(key) || displayName(key) === name);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    const area = document.querySelector(".copy-box textarea");
    if (!area) return;
    area.focus();
    area.select();
    try {
      document.execCommand("copy");
    } catch {
      // Some embedded browsers block clipboard APIs; the selected text still lets the user copy.
    }
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (location.hostname === "127.0.0.1" || location.hostname === "localhost") return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

async function createCloudflareUser(email) {
  try {
    await fetch("./api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, app: "yorijambaengi" }),
    });
  } catch {
    // Local preview works without a Cloudflare Pages function.
  }
}

function applyLaunchShortcut() {
  const params = new URLSearchParams(window.location.search);
  const shortcut = params.get("shortcut");
  if (shortcut === "sauce") selectedTab = "sauce";
  if (shortcut === "recipe") selectedTab = "home";
}

maybeShowSignupPopup();
render();
