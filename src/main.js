const STORAGE_KEY = "yorijambaengi-state-v1";
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
  recipeSummary: "{items}를 중심으로 만든 초보용 추천이에요. 없는 재료는 장보기 목록에 따로 뺐어요.",
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

const state = loadState();
let selectedTab = "home";
let selectedStorage = "fridge";
let selectedSeasoningCategory = "all";
let selectedCookMode = "fridgeClean";
let servings = 1;
let recipe = null;
let modal = null;

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
  return {
    fridge: [
      item("달걀", 6, "개", "단백질", "", null),
      item("대파", 1, "단", "채소", "", null),
      item("두부", 1, "모", "단백질", "", null),
      item("양파", 2, "개", "채소", "", null),
      item("당근", 1, "개", "채소", "", null),
      item("애호박", 1, "개", "채소", "", null),
      item("김치", 1, "통", "기본", "", null),
      item("우유", 1, "통", "유제품", "", null),
      item("치즈", 4, "장", "유제품", "", null),
      item("버터", 1, "개", "유제품", "", null),
    ],
    freezer: [
      item("냉동 만두", 12, "개", "간편식", "", null),
      item("냉동밥", 2, "개", "간편식", "", null),
      item("냉동 대패삼겹살", 1, "봉지", "냉동재료", "", null),
      item("냉동 새우", 1, "봉지", "냉동재료", "", null),
      item("냉동 브로콜리", 1, "봉지", "냉동재료", "", null),
      item("냉동 블루베리", 1, "봉지", "냉동재료", "", null),
    ],
    sauce: [
      item("간장", 7, "스푼", "기본 간", describeSeasoning("간장"), null),
      item("고추장", 3, "스푼", "매운맛", describeSeasoning("고추장"), null),
      item("참기름", 2, "스푼", "기름/향", describeSeasoning("참기름"), null),
      item("된장", 4, "스푼", "기본 간", describeSeasoning("된장"), null),
      item("소금", 6, "스푼", "기본 간", describeSeasoning("소금"), null),
      item("설탕", 6, "스푼", "단맛", describeSeasoning("설탕"), null),
      item("후추", 5, "스푼", "향신료", describeSeasoning("후추"), null),
      item("식초", 4, "스푼", "소스", describeSeasoning("식초"), null),
      item("고춧가루", 4, "스푼", "매운맛", "", null),
      item("식용유", 1, "통", "기름/향", "", null),
      item("굴소스", 2, "스푼", "소스", "", null),
      item("마요네즈", 1, "통", "소스", "", null),
      item("케첩", 1, "통", "소스", "", null),
    ],
    room: [
      item("식빵", 4, "장", "빵", "", null),
      item("라면", 2, "봉", "면", "", null),
      item("쌀", 3, "컵", "곡물", "", null),
      item("파스타면", 1, "봉지", "면", "", null),
      item("참치캔", 2, "캔", "통조림", "", null),
      item("김", 5, "장", "기본", "", null),
      item("감자", 3, "개", "구황작물", "", null),
      item("고구마", 2, "개", "구황작물", "", null),
      item("밀가루", 2, "컵", "곡물", "", null),
    ],
  };
}

function item(name, amount, unit, category, memo, photo) {
  return {
    id: crypto.randomUUID(),
    name,
    amount,
    unit,
    category,
    memo,
    photo,
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
  const base = seedInventory();
  state.inventory = state.inventory || {};
  Object.entries(base).forEach(([type, defaults]) => {
    state.inventory[type] = Array.isArray(state.inventory[type]) ? state.inventory[type] : [];
    defaults.forEach((entry) => {
      if (!state.inventory[type].some((saved) => saved.name === entry.name)) {
        state.inventory[type].push(entry);
      }
    });
  });
  saveState();
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
  return activeLang() === "ko" ? name : ingredientTranslations[name] || name;
}

function displayUnit(unit) {
  return activeLang() === "ko" ? unit : unitTranslations[unit] || unit;
}

function displayCategory(category) {
  if (!category) return t("defaultCategory");
  const categoryFromKey = seasoningCategories[category]?.[activeLang()];
  if (categoryFromKey) return categoryFromKey;
  return activeLang() === "ko" ? category : categoryTranslations[category] || category;
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
    <section class="section">
      <div class="item-list">
        ${state.inventory[type].length ? state.inventory[type].map((entry) => renderInventoryItem(entry, type)).join("") : `<div class="card empty">${t("empty")}</div>`}
      </div>
    </section>
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
        <div class="field">
          <label>${t("photo")}</label>
          <input type="file" accept="image/*" capture="environment" name="photo" />
        </div>
        <div class="field">
          <label>${t("name")}</label>
          <input name="name" required placeholder="${isSauce ? t("exampleSauce") : t("exampleIngredient")}" />
        </div>
        <div class="grid-2">
          <div class="field">
            <label>${t("amount")}</label>
            <input name="amount" type="number" min="0" step="0.5" value="1" />
          </div>
          <div class="field">
            <label>${t("unit")}</label>
            <input name="unit" value="${isSauce ? t("defaultUnitSauce") : t("defaultUnitItem")}" />
          </div>
        </div>
        <div class="field">
          <label>${t("category")}</label>
          <input name="category" value="${isSauce ? t("defaultSauceCategory") : ""}" />
        </div>
        <div class="field">
          <label>${t("memo")}</label>
          <textarea name="memo" placeholder="${isSauce ? t("sauceMemoPlaceholder") : t("itemMemoPlaceholder")}"></textarea>
        </div>
        <button class="pill" type="submit">${t("save")}</button>
      </form>
    </section>
  `;
}

function renderInventoryItem(entry, type) {
  const low = Number(entry.amount) <= (type === "sauce" ? 2 : 1);
  return `
    <article class="inventory-item ${low ? "low" : ""}">
      <div class="thumb">${entry.photo ? `<img src="${entry.photo}" alt="" />` : storageTypes[type].emoji}</div>
      <div>
        <p class="item-name">${displayName(entry.name)}</p>
        <p class="item-meta">${entry.amount}${displayUnit(entry.unit)} · ${displayCategory(entry.category)}${displayMemo(entry, type) ? `<br>${displayMemo(entry, type)}` : ""}</p>
      </div>
      <div class="item-actions">
        ${type === "sauce" ? `<button class="tiny-button" data-detail="${entry.id}">${t("detail")}</button>` : ""}
        <button class="tiny-button" data-edit="${type}:${entry.id}">${t("edit")}</button>
        <button class="tiny-button" data-use="${type}:${entry.id}">${t("use")}</button>
        <button class="tiny-button delete-button" data-delete="${type}:${entry.id}" title="${t("delete")}">${t("deleteSymbol")}</button>
      </div>
    </article>
  `;
}

function renderSaucePage() {
  const filtered = selectedSeasoningCategory === "all"
    ? state.inventory.sauce
    : state.inventory.sauce.filter((entry) => categoryKey(entry.category) === selectedSeasoningCategory);
  return `
    ${renderAddForm("sauce")}
    <section class="section">
      <div class="section-head">
        <h2 class="section-title">${t("allSeasonings")}</h2>
      </div>
      <div class="category-row">
        <button class="chip ${selectedSeasoningCategory === "all" ? "active" : ""}" data-season-cat="all">${t("all")}</button>
        ${Object.entries(seasoningCategories)
          .map(([key, label]) => `<button class="chip ${selectedSeasoningCategory === key ? "active" : ""}" data-season-cat="${key}">${label[state.lang]}</button>`)
          .join("")}
      </div>
    </section>
    <section class="section">
      <div class="item-list">
        ${filtered.length ? filtered.map((entry) => renderInventoryItem(entry, "sauce")).join("") : `<div class="card empty">${t("empty")}</div>`}
      </div>
    </section>
  `;
}

function renderRecipePage() {
  if (!recipe) return renderHome();
  return `
    <section class="recipe-hero">
      <h2>${recipe.title}</h2>
      <p>${recipe.summary}</p>
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
  return selectedTab === "home" ? `<button class="fab" data-action="make-recipe" title="${t("fabTitle")}">🍳</button>` : "";
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
  if (modal?.startsWith("detail:")) return renderDetailModal(modal.split(":")[1]);
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

function renderDetailModal(id) {
  const entry = state.inventory.sauce.find((x) => x.id === id);
  if (!entry) return "";
  const info = enrichSeasoning(entry.name, entry.memo);
  return `
    <div class="modal-backdrop">
      <article class="modal">
        <h2>${displayName(entry.name)}</h2>
        <p><strong>${displayCategory(entry.category || info.category)}</strong> · ${entry.amount}${displayUnit(entry.unit)}</p>
        <p>${info.usage}</p>
        <p>${info.tip}</p>
        <p>${formatText(t("searchHint"), { name: displayName(entry.name) })}</p>
        <div class="modal-actions">
          <button class="ghost-pill" data-web-search="${entry.name}">${t("searchWeb")}</button>
          <button class="pill" data-action="close-modal">${t("confirm")}</button>
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
        <div class="form-grid">
          <div class="field">
            <label>${t("name")}</label>
            <input name="name" required value="${escapeAttr(entry.name)}" />
          </div>
          <div class="grid-2">
            <div class="field">
              <label>${t("amount")}</label>
              <input name="amount" type="number" min="0" step="0.5" value="${entry.amount}" />
            </div>
            <div class="field">
              <label>${t("unit")}</label>
              <input name="unit" value="${escapeAttr(entry.unit)}" />
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
  document.querySelectorAll("[data-season-cat]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedSeasoningCategory = button.dataset.seasonCat;
      render();
    });
  });
  document.querySelectorAll("[data-web-search]").forEach((button) => {
    button.addEventListener("click", () => {
      const queryText = state.lang === "ko"
        ? `${button.dataset.webSearch} 양념 사용법 요리 팁`
        : `${displayName(button.dataset.webSearch)} seasoning cooking uses tips`;
      const query = encodeURIComponent(queryText);
      window.open(`https://www.google.com/search?q=${query}`, "_blank", "noopener,noreferrer");
    });
  });
  document.querySelectorAll("[data-input='servings']").forEach((input) => {
    input.addEventListener("input", () => {
      servings = Math.max(1, Number(input.value) || 1);
    });
  });
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
      makeRecipe();
      selectedTab = "recipe";
    }
  }
  if (action === "copy-prompt") {
    await copyText(recipe?.prompt || "");
    target.textContent = t("copied");
    return;
  }
  render();
}

async function handleAddItem(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const type = form.dataset.form;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  if (!name) return;
  const file = data.get("photo");
  const photo = file && file.size ? await fileToDataUrl(file) : null;
  let memo = String(data.get("memo") || "").trim();
  let category = String(data.get("category") || "").trim();
  if (type === "sauce") {
    const info = enrichSeasoning(name, memo);
    memo = memo || describeSeasoning(name);
    category = category || info.category;
  }
  state.inventory[type].unshift(
    item(name, Number(data.get("amount")) || 0, String(data.get("unit") || "개"), category, memo, photo)
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

function makeRecipe() {
  const available = [
    ...state.inventory.fridge,
    ...state.inventory.freezer,
    ...state.inventory.sauce,
    ...state.inventory.room,
  ].filter((x) => Number(x.amount) > 0);
  const names = available.map((x) => x.name);
  const displayNames = available.map((x) => displayName(x.name));
  const mode = cookModes.find(([key]) => key === selectedCookMode);
  const main = names.slice(0, 5);
  const displayMain = displayNames.slice(0, 5);
  const englishMain = main.map((name) => ingredientTranslations[name] || name);
  const modeName = mode ? (state.lang === "ko" ? mode[1] : mode[2]) : t("recipeFallback");
  const englishModeName = mode?.[2] || "easy home cooking";
  const title = state.lang === "ko"
    ? `${modeName} ${servings}${t("servingsSuffix")}`
    : `${modeName} for ${servings} ${t("servingsSuffix")}`;
  const englishTitle = `${englishModeName} for ${servings} servings`;
  const required = requiredForMode(selectedCookMode, servings);
  const shopping = required.filter((need) => !names.some((name) => need.includes(name) || need.includes(displayName(name))));
  const mainText = displayMain.join(", ") || t("basicIngredients");
  const visual = buildVisualDescription(englishModeName, englishMain);
  const visualText = state.lang === "ko"
    ? `${displayMain.join(", ") || "집에 있는 재료"}가 한 접시에 보기 좋게 담기고, 윤기와 김이 살아 있어 완성 이미지를 만들면 따뜻한 집밥 느낌이 나요.`
    : visual;
  recipe = {
    title,
    summary: formatText(t("recipeSummary"), { items: mainText }),
    shopping,
    steps: [
      {
        title: t("stepPrepTitle"),
        text: formatText(t("stepPrepText"), { items: displayMain.join(", ") || t("storageIngredients"), servings }),
      },
      {
        title: t("stepHeatTitle"),
        text: t("stepHeatText"),
      },
      {
        title: t("stepSeasonTitle"),
        text: t("stepSeasonText"),
      },
      {
        title: t("stepPlateTitle"),
        text: t("stepPlateText"),
      },
    ],
    visual: visualText,
    prompt: buildFoodPrompt(englishTitle, englishMain, englishModeName, visual),
  };
  consumeForRecipe();
  saveState();
}

function requiredForMode(mode, count) {
  const c = Number(count) || 1;
  const koMap = {
    fridgeClean: [`달걀 ${c}개`, "대파 조금", "간장 1스푼"],
    snack: [`식빵 ${c}장`, "치즈", "달걀 1개"],
    dessert: ["우유", "설탕", "과일"],
    bread: ["강력분", "이스트", "버터"],
    party: ["고기", "채소", "소스"],
    korean: ["밥", "간장", "참기름"],
    japanese: ["우동면", "쯔유", "달걀"],
    chinese: ["대파", "간장", "굴소스"],
    meat: ["고기", "소금", "후추"],
    quick: ["달걀", "밥", "간장"],
  };
  const enMap = {
    fridgeClean: [`egg ${c} pcs`, "green onion", "soy sauce 1 tbsp"],
    snack: [`bread ${c} slices`, "cheese", "egg 1 pc"],
    dessert: ["milk", "sugar", "fruit"],
    bread: ["bread flour", "yeast", "butter"],
    party: ["meat", "vegetables", "sauce"],
    korean: ["rice", "soy sauce", "sesame oil"],
    japanese: ["udon noodles", "tsuyu", "egg"],
    chinese: ["green onion", "soy sauce", "oyster sauce"],
    meat: ["meat", "salt", "pepper"],
    quick: ["egg", "rice", "soy sauce"],
  };
  const map = state.lang === "ko" ? koMap : enMap;
  return map[mode] || map.fridgeClean;
}

function consumeForRecipe() {
  const allTypes = ["fridge", "freezer", "sauce", "room"];
  allTypes.forEach((type) => {
    state.inventory[type].slice(0, 2).forEach((entry) => {
      entry.amount = Math.max(0, Number(entry.amount) - (type === "sauce" ? 0.5 : 1));
    });
  });
}

function buildVisualDescription(modeName, ingredients) {
  const list = ingredients.filter(Boolean).join(", ") || "simple pantry ingredients";
  return `The final dish should look like a ${modeName} made with ${list}: glossy, warm, generous, neatly plated, with visible textures, steam, and appetizing color contrast.`;
}

function buildFoodPrompt(title, ingredients, modeText, visualDescription) {
  const list = ingredients.filter(Boolean).join(", ") || "simple pantry ingredients";
  return `Create a mouthwatering vertical smartphone food photo for "${title}". Style: ${modeText}. Main ingredients: ${list}. Visual direction: ${visualDescription} Plate the food on a warm ceramic dish, show glossy textures, gentle steam, fresh garnish, appetizing color contrast, realistic home kitchen lighting, shallow depth of field, high detail, no text, no watermark, no hands, no packaging.`;
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
