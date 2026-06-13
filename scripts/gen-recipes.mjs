// Generates src/recipes.js — ~36 real dishes per cook mode (9 modes, no 냉장고털기).
// Each dish: real Korean name + curated ingredients + method-based steps (ko/en).
// Run: node scripts/gen-recipes.mjs
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { EN_NAME } from "../src/ingredients.js";

const here = dirname(fileURLToPath(import.meta.url));

// English fallback for ingredients not in the 2000-item DB.
const EN_EXTRA = {
  밥: "rice", 물: "water", 채소: "veg", 과일: "fruit", 단무지: "pickled radish",
  부침가루: "frying mix", 튀김가루: "tempura mix", 빵가루: "bread crumb", 카레: "curry",
  짜장: "jjajang", 굴소스: "oyster sauce", 미소된장: "miso paste", 맛술: "cooking wine",
  그래놀라: "granola", 코코아: "cocoa", 계피: "cinnamon", 젤라틴: "gelatin", 또띠아: "tortilla",
  크래커: "cracker", 햄: "ham", 소시지: "sausage", 만두: "dumpling", 어묵: "fish cake",
  콩나물: "bean sprout", 시래기: "dried radish greens", 깻잎: "perilla leaf", 미역: "seaweed",
  다시마: "kelp", 멸치: "anchovy", 무: "radish", 양배추: "cabbage", 숙주: "mung bean sprout",
  부추: "chive", 청경채: "bok choy", 시금치: "spinach", 가지: "eggplant", 애호박: "zucchini",
  단호박: "sweet pumpkin", 고구마: "sweet potato", 감자: "potato", 당근: "carrot", 양파: "onion",
  대파: "green onion", 마늘: "garlic", 버섯: "mushroom", 두부: "tofu", 달걀: "egg", 우유: "milk",
  치즈: "cheese", 버터: "butter", 요거트: "yogurt", 생크림: "cream", 식빵: "bread", 바나나: "banana",
  딸기: "strawberry", 사과: "apple", 초코: "chocolate", 커피: "coffee", 녹차: "green tea", 꿀: "honey",
  설탕: "sugar", 소금: "salt", 후추: "pepper", 간장: "soy sauce", 고추장: "gochujang", 된장: "doenjang",
  고춧가루: "gochugaru", 참기름: "sesame oil", 들기름: "perilla oil", 식용유: "oil", 올리브유: "olive oil",
  식초: "vinegar", 케첩: "ketchup", 마요네즈: "mayo", 밀가루: "flour", 통밀가루: "whole-wheat flour",
  옥수수: "corn", 완두콩: "green pea", 새우: "shrimp", 오징어: "squid", 낙지: "octopus", 조개: "clam",
  홍합: "mussel", 연어: "salmon", 고등어: "mackerel", 명란: "pollock roe", 참치: "tuna", 김: "seaweed laver",
  김치: "kimchi", 소고기: "beef", 돼지고기: "pork", 닭고기: "chicken", 닭가슴살: "chicken breast",
  닭다리: "chicken leg", 닭봉: "chicken wingette", 삼겹살: "pork belly", 목살: "pork neck", 베이컨: "bacon",
  스팸: "luncheon meat", 오리: "duck", 양갈비: "lamb chop", 떡: "rice cake", 라면: "instant noodle",
  우동면: "udon", 소면: "somen", 당면: "glass noodle", 파스타: "pasta", 누룽지: "nurungji", 쌀: "rice",
  콩: "bean", 팥: "red bean", 견과류: "nuts", 토마토: "tomato", 파프리카: "bell pepper", 브로콜리: "broccoli",
  아보카도: "avocado", 블루베리: "blueberry", 망고: "mango", 파인애플: "pineapple", 레몬: "lemon",
};
const enOf = (ko) => EN_NAME[ko] || EN_EXTRA[ko] || ko;

// Amount per ingredient.
function amtOf(ko) {
  if (["소금", "후추"].includes(ko)) return "한 꼬집";
  if (["간장", "고추장", "된장", "참기름", "들기름", "식용유", "올리브유", "식초", "케첩", "마요네즈",
       "굴소스", "고춧가루", "설탕", "맛술", "꿀", "카레", "코코아", "부침가루", "튀김가루", "미소된장"].includes(ko)) return "1스푼";
  if (["소고기", "돼지고기", "삼겹살", "목살", "닭가슴살", "연어", "고등어", "오징어", "낙지"].includes(ko)) return "200g";
  if (["닭고기", "새우", "명란", "참치"].includes(ko)) return "150g";
  if (["우유", "물", "생크림"].includes(ko)) return "150ml";
  if (["밥", "누룽지"].includes(ko)) return "1공기";
  if (["라면", "우동면", "소면", "당면", "파스타"].includes(ko)) return "1봉지";
  if (["밀가루", "통밀가루"].includes(ko)) return "1컵";
  if (["김치", "채소", "과일", "콩나물", "숙주", "시금치", "브로콜리", "옥수수", "완두콩", "견과류", "그래놀라"].includes(ko)) return "0.7컵";
  if (["식빵", "치즈", "햄", "또띠아", "김", "다시마"].includes(ko)) return "1장";
  if (["두부"].includes(ko)) return "0.5모";
  if (["대파"].includes(ko)) return "0.3대";
  if (["마늘"].includes(ko)) return "2톨";
  if (["달걀"].includes(ko)) return "2개";
  return "1개";
}

const ING = (list) => list.map((ko) => [ko, enOf(ko), amtOf(ko)]);

// Method step templates: {main}=main ingredients, {season}=seasoning hint.
const METHODS = {
  볶음: { ko: ["{main}을 한입 크기로 썰어요.", "팬에 기름을 두르고 센 불에 볶아요.", "{season}으로 간을 맞춰요.", "참기름이나 깨를 뿌려 마무리해요."],
          en: ["Cut {main} into bite sizes.", "Stir-fry over high heat in oiled pan.", "Season with {season}.", "Finish with sesame oil or seeds."] },
  조림: { ko: ["{main}을 먹기 좋게 썰어요.", "냄비에 {season}과 물을 넣어 끓여요.", "재료를 넣고 약불에 자작하게 졸여요.", "윤기 나면 그릇에 담아요."],
          en: ["Cut {main} into pieces.", "Simmer {season} and water in a pot.", "Add and braise gently until reduced.", "Plate when glossy."] },
  국: { ko: ["{main}을 손질해요.", "냄비에 물을 붓고 끓여요.", "{season}으로 국물 간을 맞춰요.", "대파나 후추를 올려 마무리해요."],
        en: ["Prep {main}.", "Bring water to a boil.", "Season the broth with {season}.", "Finish with green onion or pepper."] },
  찌개: { ko: ["{main}을 한입 크기로 썰어요.", "냄비에 물과 {season}을 넣어 끓여요.", "재료를 넣어 보글보글 끓여요.", "간을 보며 마무리해요."],
          en: ["Cut {main} into bite sizes.", "Boil water with {season}.", "Add and simmer.", "Adjust seasoning and serve."] },
  무침: { ko: ["{main}을 데치거나 손질해요.", "물기를 빼서 볼에 담아요.", "{season}·참기름·깨로 조물조물 무쳐요.", "간을 보며 담아요."],
          en: ["Blanch or prep {main}.", "Drain and put in a bowl.", "Toss with {season}, sesame oil and seeds.", "Adjust and serve."] },
  구이: { ko: ["{main}에 소금·후추로 밑간해요.", "달군 팬에 노릇하게 구워요.", "속까지 익혀요.", "{season}을 곁들여 담아요."],
          en: ["Season {main} with salt and pepper.", "Sear golden in a hot pan.", "Cook through.", "Serve with {season}."] },
  전: { ko: ["{main}을 잘게 썰어요.", "부침가루·물과 섞어 반죽해요.", "기름 두른 팬에 얇게 부쳐요.", "양면 노릇하게 구워 담아요."],
        en: ["Chop {main}.", "Mix with frying flour and water.", "Pan-fry thin in oil.", "Cook both sides golden."] },
  덮밥: { ko: ["{main}을 익혀 준비해요.", "{season}으로 간을 해요.", "따뜻한 밥 위에 올려요.", "깨나 김을 뿌려 마무리해요."],
          en: ["Cook {main}.", "Season with {season}.", "Spoon over warm rice.", "Top with sesame or seaweed."] },
  볶음밥: { ko: ["{main}을 잘게 썰어요.", "팬에 볶다가 밥을 넣어요.", "{season}으로 간해 고슬하게 볶아요.", "그릇에 담아요."],
            en: ["Chop {main}.", "Stir-fry, then add rice.", "Season with {season} and toss.", "Plate and serve."] },
  찜: { ko: ["{main}을 손질해요.", "{season} 양념을 만들어요.", "재료에 양념을 넣고 약불에 쪄요.", "부드러워지면 담아요."],
        en: ["Prep {main}.", "Make a {season} sauce.", "Steam gently with the sauce.", "Serve when tender."] },
  튀김: { ko: ["{main}을 한입 크기로 썰어요.", "튀김 반죽을 입혀요.", "기름에 바삭하게 튀겨요.", "소스를 곁들여 담아요."],
          en: ["Cut {main} into bites.", "Coat in batter.", "Fry crisp.", "Serve with sauce."] },
  덮밥일식: { ko: ["{main}과 양파를 준비해요.", "간장·설탕·물로 소스를 끓여요.", "재료를 익히고 달걀을 부드럽게 덮어요.", "밥 위에 올려 담아요."],
              en: ["Prep {main} and onion.", "Simmer a soy-sugar sauce.", "Cook and cover softly with egg.", "Spoon over rice."] },
  데리야끼: { ko: ["{main}에 소금을 살짝 뿌려요.", "팬에 노릇하게 구워요.", "간장·설탕·맛술 소스를 졸여요.", "소스를 끼얹어 담아요."],
              en: ["Lightly salt {main}.", "Pan-sear golden.", "Reduce a teriyaki sauce.", "Glaze and serve."] },
  카레: { ko: ["{main}을 깍둑 썰어 볶아요.", "물을 붓고 익을 때까지 끓여요.", "카레를 풀어 농도를 내요.", "밥 위에 부어요."],
          en: ["Cube and saute {main}.", "Add water and simmer.", "Stir in curry until thick.", "Pour over rice."] },
  탕수: { ko: ["{main}에 전분을 입혀 바삭하게 구워요.", "식초·설탕·간장 소스를 끓여요.", "채소나 과일을 넣어요.", "소스에 버무려 담아요."],
          en: ["Coat {main} in starch and fry crisp.", "Boil a sweet-sour sauce.", "Add veg or fruit.", "Toss and serve."] },
  짜장: { ko: ["{main}과 양파를 깍둑 썰어 볶아요.", "춘장을 넣어 볶아요.", "물과 전분으로 농도를 내요.", "밥이나 면에 부어요."],
          en: ["Cube and saute {main} and onion.", "Fry in black bean paste.", "Thicken with water and starch.", "Pour over rice or noodles."] },
  우동: { ko: ["다시마·간장으로 국물을 내요.", "{main}을 넣어 끓여요.", "면을 데쳐 그릇에 담아요.", "국물을 붓고 대파를 올려요."],
          en: ["Make broth with kelp and soy.", "Add {main} and simmer.", "Blanch noodles into a bowl.", "Pour broth, top with green onion."] },
  토스트: { ko: ["식빵에 버터를 바르고 {main}을 올려요.", "약불 팬에 노릇하게 구워요.", "{season}을 곁들여요.", "반으로 잘라 담아요."],
            en: ["Butter the bread and add {main}.", "Toast golden over low heat.", "Add {season}.", "Cut in half and serve."] },
  볼: { ko: ["그릇에 {main}을 담아요.", "과일이나 토핑을 올려요.", "{season}을 뿌려요.", "시원하게 즐겨요."],
        en: ["Put {main} in a bowl.", "Add fruit or toppings.", "Sprinkle {season}.", "Enjoy chilled."] },
  스무디: { ko: ["{main}을 썰어요.", "우유나 요거트와 믹서에 넣어요.", "곱게 갈아요.", "컵에 담아 마셔요."],
            en: ["Slice {main}.", "Blend with milk or yogurt.", "Blend until smooth.", "Pour and drink."] },
  머핀: { ko: ["{main}과 가루·달걀·설탕을 섞어요.", "머그컵이나 틀에 부어요.", "전자레인지나 오븐에 익혀요.", "한 김 식혀 담아요."],
          en: ["Mix {main} with flour, egg and sugar.", "Pour into a mug or mold.", "Microwave or bake.", "Cool slightly and serve."] },
  푸딩: { ko: ["우유·설탕을 데우고 {main}을 넣어요.", "젤라틴을 녹여 섞어요.", "틀에 부어 냉장고에 굳혀요.", "접시에 빼서 담아요."],
          en: ["Warm milk and sugar with {main}.", "Dissolve gelatin and mix.", "Chill in molds to set.", "Unmold and serve."] },
  팬케이크: { ko: ["{main}·가루·우유·달걀을 섞어요.", "약불 팬에 한 국자씩 올려요.", "기포가 올라오면 뒤집어요.", "시럽을 곁들여 담아요."],
              en: ["Mix {main}, flour, milk and egg.", "Ladle onto a low-heat pan.", "Flip when bubbles appear.", "Serve with syrup."] },
  베이킹: { ko: ["{main}과 가루·버터를 반죽해요.", "모양을 잡아요.", "팬이나 오븐에 노릇하게 구워요.", "식혀서 담아요."],
            en: ["Knead {main} with flour and butter.", "Shape it.", "Bake golden in pan or oven.", "Cool and serve."] },
  꼬치: { ko: ["{main}을 한입 크기로 썰어요.", "꼬치에 번갈아 끼워요.", "{season}을 발라요.", "구워서 담아요."],
          en: ["Cut {main} into bites.", "Thread alternately on skewers.", "Brush with {season}.", "Grill and serve."] },
  그라탕: { ko: ["{main}을 익혀 그릇에 담아요.", "우유·치즈와 섞어요.", "치즈를 올려 오븐에 구워요.", "노릇하면 담아요."],
            en: ["Cook {main} into a dish.", "Mix with milk and cheese.", "Top with cheese and bake.", "Serve when golden."] },
  롤: { ko: ["또띠아나 김에 {main}을 올려요.", "돌돌 말아요.", "한입 크기로 잘라요.", "단면이 보이게 담아요."],
        en: ["Lay {main} on a wrap or seaweed.", "Roll it up tightly.", "Cut into bites.", "Arrange cut-side up."] },
  덮밥간단: { ko: ["{main}을 준비해요.", "{season}으로 간을 해요.", "따뜻한 밥에 올려요.", "비벼 먹어요."],
              en: ["Prep {main}.", "Season with {season}.", "Put on warm rice.", "Mix and eat."] },
};

// season hint per method default
const SEASON_DEFAULT = { 볶음: "간장", 조림: "간장", 국: "소금", 찌개: "된장", 무침: "간장", 구이: "소금",
  전: "간장", 덮밥: "간장", 볶음밥: "간장", 찜: "간장", 튀김: "케첩", 덮밥일식: "간장", 데리야끼: "간장",
  카레: "카레", 탕수: "식초", 짜장: "춘장", 우동: "간장", 토스트: "케첩", 볼: "꿀", 스무디: "꿀", 머핀: "설탕",
  푸딩: "설탕", 팬케이크: "꿀", 베이킹: "버터", 꼬치: "간장", 그라탕: "치즈", 롤: "마요네즈", 덮밥간단: "간장" };

// Dishes per mode: "name|en|methodKey|ing1,ing2,ing3"
const RAW = {
  snack: [
    "치즈 토스트|cheese toast|토스트|식빵,치즈,버터", "감자 치즈전|potato cheese fritter|전|감자,치즈,식용유",
    "과일 요거트볼|fruit yogurt bowl|볼|요거트,과일,견과류", "달걀 마요 샌드|egg mayo sandwich|토스트|식빵,달걀,마요네즈",
    "또띠아 피자|tortilla pizza|토스트|또띠아,치즈,케첩", "고구마 치즈구이|sweet potato cheese|구이|고구마,치즈,버터",
    "바나나 우유쉐이크|banana shake|스무디|바나나,우유,꿀", "김 주먹밥|seaweed rice ball|볼|밥,김,참기름",
    "감자전|potato pancake|전|감자,부침가루,식용유", "옥수수전|corn fritter|전|옥수수,부침가루,달걀",
    "치즈 감자볼|cheese potato ball|튀김|감자,치즈,빵가루", "고구마 맛탕|candied sweet potato|볶음|고구마,설탕,식용유",
    "달걀 토스트|egg toast|토스트|식빵,달걀,치즈", "참치 마요 김밥|tuna mayo gimbap|롤|밥,김,참치",
    "치즈 옥수수|corn cheese|구이|옥수수,치즈,마요네즈", "바나나 토스트|banana toast|토스트|식빵,바나나,꿀",
    "감자 샐러드|potato salad|무침|감자,마요네즈,달걀", "치즈 또띠아 롤|cheese tortilla roll|롤|또띠아,치즈,햄",
    "달걀말이|rolled omelette|전|달걀,당근,대파", "두부 김치|tofu kimchi|무침|두부,김치,참기름",
    "치즈 스틱|cheese stick|튀김|치즈,빵가루,식용유", "고구마칩|sweet potato chip|튀김|고구마,소금,식용유",
    "과일 화채|fruit punch|볼|과일,우유,설탕", "요거트 그래놀라볼|granola bowl|볼|요거트,그래놀라,꿀",
    "치즈 라이스볼|cheese rice ball|볼|밥,치즈,김", "감자 버터구이|butter potato|구이|감자,버터,소금",
    "달걀 샐러드 샌드|egg salad sandwich|토스트|식빵,달걀,마요네즈", "김치 치즈전|kimchi cheese pancake|전|김치,치즈,부침가루",
    "또띠아 퀘사디아|quesadilla|토스트|또띠아,치즈,양파", "바나나 견과볼|banana nut bowl|볼|바나나,견과류,꿀",
    "치즈 햄 토스트|ham cheese toast|토스트|식빵,햄,치즈", "옥수수 버터구이|butter corn|구이|옥수수,버터,소금",
    "감자 그라탕|potato gratin|그라탕|감자,치즈,우유", "두부 강정|sweet tofu bites|볶음|두부,간장,설탕",
    "고구마 라떼|sweet potato latte|스무디|고구마,우유,꿀", "달걀 김밥|egg gimbap|롤|밥,김,달걀",
  ],
  dessert: [
    "팬 커스터드|skillet custard|푸딩|우유,달걀,설탕", "바나나 팬케이크|banana pancake|팬케이크|바나나,밀가루,우유",
    "우유 푸딩|milk pudding|푸딩|우유,설탕,젤라틴", "초코 머그케이크|choco mug cake|머핀|초코,밀가루,우유",
    "딸기 우유|strawberry milk|스무디|딸기,우유,설탕", "프렌치토스트|french toast|팬케이크|식빵,달걀,우유",
    "요거트 파르페|yogurt parfait|볼|요거트,과일,그래놀라", "사과 시나몬 구이|cinnamon apple|구이|사과,설탕,버터",
    "바나나 머그머핀|banana mug muffin|머핀|바나나,밀가루,달걀", "초코 바나나|choco banana|볼|바나나,초코,견과류",
    "딸기 요거트볼|strawberry yogurt|볼|딸기,요거트,꿀", "커피 우유 푸딩|coffee pudding|푸딩|커피,우유,젤라틴",
    "단호박 푸딩|pumpkin pudding|푸딩|단호박,우유,설탕", "고구마 무스|sweet potato mousse|볼|고구마,생크림,꿀",
    "녹차 라떼|green tea latte|스무디|녹차,우유,꿀", "초코 쉐이크|choco shake|스무디|초코,우유,바나나",
    "딸기 팬케이크|strawberry pancake|팬케이크|딸기,밀가루,우유", "사과 머핀|apple muffin|머핀|사과,밀가루,달걀",
    "바나나 푸딩|banana pudding|푸딩|바나나,우유,설탕", "초코칩 쿠키|choco chip cookie|베이킹|밀가루,초코,버터",
    "우유 셔벗|milk sherbet|볼|우유,설탕,과일", "딸기 셰이크|strawberry shake|스무디|딸기,우유,설탕",
    "고구마 라떼|sweet potato latte|스무디|고구마,우유,꿀", "단호박 케이크|pumpkin cake|머핀|단호박,밀가루,달걀",
    "초코 푸딩|chocolate pudding|푸딩|초코,우유,젤라틴", "과일 화채|fruit punch|볼|과일,우유,설탕",
    "바나나 구이|grilled banana|구이|바나나,설탕,버터", "사과 콤포트|apple compote|조림|사과,설탕,계피",
    "딸기 잼 토스트|jam toast|토스트|식빵,딸기,설탕", "녹차 푸딩|green tea pudding|푸딩|녹차,우유,젤라틴",
    "견과 요거트볼|nut yogurt bowl|볼|요거트,견과류,꿀", "바나나 우유빙수|banana bingsu|볼|바나나,우유,설탕",
    "초코 와플|choco waffle|팬케이크|밀가루,초코,우유", "단호박 라떼|pumpkin latte|스무디|단호박,우유,꿀",
    "사과 파이 머핀|apple pie muffin|머핀|사과,밀가루,설탕", "커피 젤리|coffee jelly|푸딩|커피,설탕,젤라틴",
  ],
  bread: [
    "우유 팬브레드|milk pan bread|베이킹|밀가루,우유,버터", "치즈 갈릭 브레드|cheese garlic bread|구이|식빵,치즈,마늘",
    "단호박 모닝롤|pumpkin rolls|베이킹|단호박,밀가루,우유", "통밀 팬케이크 브레드|whole-wheat bread|팬케이크|통밀가루,우유,달걀",
    "옥수수 콘브레드|corn bread|베이킹|밀가루,옥수수,우유", "바나나 머그머핀|banana muffin|머핀|바나나,밀가루,달걀",
    "치즈 스콘|cheese scone|베이킹|밀가루,치즈,버터", "식빵 러스크|bread rusk|구이|식빵,버터,설탕",
    "또띠아 플랫브레드|tortilla flatbread|구이|또띠아,치즈,올리브유", "감자빵|potato bread|베이킹|감자,밀가루,버터",
    "고구마빵|sweet potato bread|베이킹|고구마,밀가루,우유", "초코 머핀|choco muffin|머핀|밀가루,초코,달걀",
    "치즈 머핀|cheese muffin|머핀|밀가루,치즈,달걀", "우유 식빵|milk loaf|베이킹|밀가루,우유,설탕",
    "마늘 버터 번|garlic butter bun|구이|식빵,마늘,버터", "바나나 브레드|banana bread|베이킹|바나나,밀가루,달걀",
    "옥수수 머핀|corn muffin|머핀|밀가루,옥수수,우유", "치즈 모닝빵|cheese dinner roll|베이킹|밀가루,치즈,우유",
    "통밀 스콘|whole-wheat scone|베이킹|통밀가루,버터,우유", "딸기잼 번|jam bun|베이킹|밀가루,딸기,버터",
    "감자 치즈빵|potato cheese bread|베이킹|감자,치즈,밀가루", "단호박 스콘|pumpkin scone|베이킹|단호박,밀가루,버터",
    "초코칩 스콘|choco chip scone|베이킹|밀가루,초코,버터", "우유 와플|milk waffle|팬케이크|밀가루,우유,달걀",
    "치즈 와플|cheese waffle|팬케이크|밀가루,치즈,우유", "고구마 모닝롤|sweet potato roll|베이킹|고구마,밀가루,우유",
    "옥수수 치즈빵|corn cheese bread|베이킹|옥수수,치즈,밀가루", "바나나 와플|banana waffle|팬케이크|바나나,밀가루,우유",
    "마늘 치즈빵|garlic cheese bread|구이|식빵,마늘,치즈", "통밀 머핀|whole-wheat muffin|머핀|통밀가루,우유,달걀",
    "버터 롤|butter roll|베이킹|밀가루,버터,우유", "초코 바나나 머핀|choco banana muffin|머핀|바나나,초코,밀가루",
    "치즈 베이글|cheese bagel|베이킹|밀가루,치즈,우유", "감자 포카치아|potato focaccia|베이킹|감자,밀가루,올리브유",
    "단호박 식빵|pumpkin loaf|베이킹|단호박,밀가루,우유", "옥수수 팬케이크|corn pancake|팬케이크|옥수수,밀가루,우유",
  ],
  party: [
    "한입 카나페|bite canapes|볼|크래커,치즈,햄", "새우 감자 그라탕|shrimp gratin|그라탕|감자,새우,치즈",
    "치즈 플래터|cheese platter|볼|치즈,견과류,과일", "닭봉 오븐구이|roast wings|구이|닭봉,간장,식용유",
    "또띠아 롤|tortilla roll|롤|또띠아,햄,치즈", "미니 김밥|mini gimbap|롤|밥,김,단무지",
    "감자 웨지|potato wedges|구이|감자,올리브유,소금", "과일 치즈 꼬치|fruit cheese skewer|꼬치|과일,치즈,크래커",
    "새우 꼬치|shrimp skewer|꼬치|새우,파프리카,올리브유", "소시지 꼬치|sausage skewer|꼬치|소시지,파프리카,케첩",
    "치즈볼|cheese ball|튀김|치즈,빵가루,식용유", "감자 크로켓|potato croquette|튀김|감자,빵가루,치즈",
    "베이컨 감자말이|bacon potato roll|구이|베이컨,감자,후추", "닭봉 간장조림|soy wings|조림|닭봉,간장,설탕",
    "새우 튀김|fried shrimp|튀김|새우,튀김가루,식용유", "치즈 나초|cheese nachos|볼|또띠아,치즈,토마토",
    "미니 핫도그|mini corn dog|튀김|소시지,튀김가루,케첩", "감자 그라탕|potato gratin|그라탕|감자,치즈,우유",
    "햄 치즈 롤|ham cheese roll|롤|또띠아,햄,치즈", "과일 생크림 컵|fruit cream cup|볼|과일,생크림,꿀",
    "닭가슴살 샐러드|chicken salad|무침|닭가슴살,채소,마요네즈", "새우 마늘구이|garlic shrimp|구이|새우,마늘,올리브유",
    "치즈 감자전|cheese potato pancake|전|감자,치즈,부침가루", "소시지 채소볶음|sausage stir-fry|볶음|소시지,채소,케첩",
    "베이컨 치즈말이|bacon cheese roll|구이|베이컨,치즈,후추", "토마토 카프레제|caprese|볼|토마토,치즈,올리브유",
    "감자 치즈볼|potato cheese ball|튀김|감자,치즈,빵가루", "새우 그라탕|shrimp gratin|그라탕|새우,치즈,우유",
    "닭봉 양념구이|spicy wings|구이|닭봉,고추장,설탕", "과일 꼬치|fruit skewer|꼬치|과일,꿀,견과류",
    "치즈 크래커 딥|cheese dip|볼|치즈,크래커,우유", "감자 베이컨 구이|bacon potato bake|구이|감자,베이컨,치즈",
    "새우 칠리|chili shrimp|볶음|새우,케첩,설탕", "미트볼 조림|meatball braise|조림|소고기,케첩,설탕",
    "치즈 또띠아 피자|tortilla pizza|토스트|또띠아,치즈,토마토", "닭봉 마늘구이|garlic wings|구이|닭봉,마늘,간장",
  ],
  korean: [
    "김치볶음밥|kimchi fried rice|볶음밥|김치,밥,달걀", "된장찌개|doenjang stew|찌개|두부,애호박,된장",
    "제육볶음|spicy pork|볶음|돼지고기,고추장,양파", "계란말이|rolled omelette|전|달걀,당근,대파",
    "계란찜|steamed egg|찜|달걀,물,대파", "김치전|kimchi pancake|전|김치,부침가루,식용유",
    "비빔밥|bibimbap|덮밥간단|밥,채소,고추장", "콩나물국|bean sprout soup|국|콩나물,대파,소금",
    "감자조림|braised potato|조림|감자,간장,설탕", "애호박볶음|zucchini stir-fry|볶음|애호박,새우,소금",
    "어묵볶음|fish cake stir-fry|볶음|어묵,간장,설탕", "두부조림|braised tofu|조림|두부,간장,고춧가루",
    "시금치무침|spinach namul|무침|시금치,간장,참기름", "콩나물무침|bean sprout namul|무침|콩나물,참기름,소금",
    "김치찌개|kimchi stew|찌개|김치,돼지고기,두부", "순두부찌개|soft tofu stew|찌개|두부,달걀,고춧가루",
    "미역국|seaweed soup|국|미역,소고기,간장", "북엇국|pollock soup|국|무,달걀,소금",
    "소고기무국|beef radish soup|국|소고기,무,간장", "오징어볶음|squid stir-fry|볶음|오징어,고추장,양파",
    "낙지볶음|octopus stir-fry|볶음|낙지,고추장,대파", "고등어조림|braised mackerel|조림|고등어,무,고춧가루",
    "가지볶음|eggplant stir-fry|볶음|가지,간장,대파", "버섯볶음|mushroom stir-fry|볶음|버섯,간장,참기름",
    "depث멸치볶음|anchovy stir-fry|볶음|멸치,간장,설탕", "감자채볶음|potato stir-fry|볶음|감자,양파,소금",
    "무생채|radish salad|무침|무,고춧가루,식초", "오이무침|cucumber salad|무침|오이,고춧가루,식초",
    "돼지불고기|pork bulgogi|볶음|돼지고기,간장,양파", "소불고기|beef bulgogi|볶음|소고기,간장,양파",
    "닭볶음탕|braised chicken|조림|닭고기,고추장,감자", "찜닭|soy chicken|조림|닭고기,간장,당면",
    "두부김치|tofu kimchi|볶음|두부,김치,돼지고기", "콩나물밥|bean sprout rice|덮밥간단|밥,콩나물,간장",
    "참치김치찌개|tuna kimchi stew|찌개|김치,참치,두부", "버섯들깨국|mushroom soup|국|버섯,대파,소금",
    "달걀국|egg drop soup|국|달걀,대파,소금",
  ],
  japanese: [
    "오야코동|oyakodon|덮밥일식|닭고기,양파,달걀", "연어 데리야끼|salmon teriyaki|데리야끼|연어,간장,설탕",
    "우동|udon|우동|우동면,어묵,대파", "일본식 카레|Japanese curry|카레|양파,감자,당근",
    "규동|gyudon|덮밥일식|소고기,양파,달걀", "타마고산도|egg sandwich|토스트|식빵,달걀,마요네즈",
    "미소국|miso soup|국|두부,미역,미소된장", "야끼우동|yaki udon|볶음|우동면,채소,간장",
    "가츠동|katsudon|덮밥일식|돼지고기,양파,달걀", "텐동|tendon|덮밥|새우,튀김가루,간장",
    "연어 동|salmon don|덮밥|연어,밥,간장", "치킨 가라아게|karaage|튀김|닭고기,튀김가루,간장",
    "야끼소바|yakisoba|볶음|면,채소,굴소스", "타코야끼풍 볼|takoyaki ball|볼|밀가루,달걀,대파",
    "돈부리 채소|veggie donburi|덮밥|채소,달걀,간장", "스키야키풍 소고기|sukiyaki beef|조림|소고기,양파,간장",
    "장어덮밥풍|eel-style don|덮밥|두부,간장,설탕", "미소 라멘|miso ramen|우동|라면,미소된장,달걀",
    "차완무시|savory egg custard|찜|달걀,새우,버섯", "닭고기 데리야끼|chicken teriyaki|데리야끼|닭고기,간장,설탕",
    "두부 스테이크|tofu steak|구이|두부,간장,버터", "연어 소금구이|salted salmon|구이|연어,소금,레몬",
    "고등어 소금구이|grilled mackerel|구이|고등어,소금,레몬", "양배추 볶음|cabbage stir-fry|볶음|양배추,베이컨,간장",
    "감자 고로케|korokke|튀김|감자,빵가루,식용유", "달걀말이 다시|dashi omelette|전|달걀,다시마,간장",
    "규스지 조림|beef tendon braise|조림|소고기,간장,무", "치킨 카레|chicken curry|카레|닭고기,양파,감자",
    "새우 튀김|ebi tempura|튀김|새우,튀김가루,식용유", "우엉 조림|burdock braise|조림|무,간장,설탕",
    "낫토 덮밥|natto rice|덮밥간단|밥,달걀,간장", "차슈 덮밥풍|chashu-style don|덮밥|돼지고기,간장,설탕",
    "미역 초무침|seaweed salad|무침|미역,식초,설탕", "감자 미소국|potato miso soup|국|감자,미소된장,대파",
    "닭 소보로 덮밥|chicken soboro don|덮밥|닭고기,간장,달걀", "버섯 우동|mushroom udon|우동|우동면,버섯,간장",
  ],
  chinese: [
    "새우볶음밥|shrimp fried rice|볶음밥|새우,밥,달걀", "마파두부|mapo tofu|찌개|두부,돼지고기,고춧가루",
    "탕수육풍 볶음|sweet sour pork|탕수|돼지고기,식초,설탕", "가지볶음|eggplant stir-fry|볶음|가지,간장,굴소스",
    "토마토 달걀볶음|tomato egg|볶음|토마토,달걀,소금", "계란볶음밥|egg fried rice|볶음밥|밥,달걀,대파",
    "짜장밥|jjajang rice|짜장|돼지고기,양파,밥", "군만두|fried dumplings|튀김|만두,식용유,간장",
    "깐풍기풍 닭|kkanpunggi|튀김|닭고기,식초,설탕", "유린기풍 닭|yurinki|튀김|닭고기,간장,식초",
    "칠리새우|chili shrimp|볶음|새우,케첩,설탕", "마라 감자|mala potato|볶음|감자,고춧가루,마늘",
    "굴소스 청경채|bok choy oyster|볶음|청경채,굴소스,마늘", "고추잡채|pepper stir-fry|볶음|돼지고기,파프리카,간장",
    "양장피풍 무침|cold mix|무침|오징어,채소,겨자", "짬뽕풍 국수|jjamppong|국|오징어,채소,고춧가루",
    "마늘 새우볶음|garlic shrimp|볶음|새우,마늘,굴소스", "두부 굴소스볶음|tofu oyster|볶음|두부,굴소스,대파",
    "감자 채볶음|potato stir-fry|볶음|감자,파프리카,간장", "양파 소고기볶음|beef onion|볶음|소고기,양파,굴소스",
    "버섯 굴소스볶음|mushroom oyster|볶음|버섯,굴소스,마늘", "달걀 토마토탕|tomato egg soup|국|토마토,달걀,소금",
    "마파 가지|mapo eggplant|찌개|가지,돼지고기,고춧가루", "새우 칠리볶음밥|chili shrimp rice|볶음밥|새우,밥,케첩",
    "닭고기 캐슈볶음|cashew chicken|볶음|닭고기,견과류,굴소스", "오징어 칠리|chili squid|볶음|오징어,케첩,설탕",
    "돼지고기 짜장면|jjajang noodle|짜장|돼지고기,양파,면", "탕수 두부|sweet sour tofu|탕수|두부,식초,설탕",
    "마늘쫑 새우볶음|garlic scape shrimp|볶음|새우,마늘,굴소스", "청경채 두부볶음|bok choy tofu|볶음|청경채,두부,굴소스",
    "고기 완자조림|meatball braise|조림|돼지고기,간장,설탕", "달걀 부추볶음|egg chive|볶음|달걀,부추,굴소스",
    "감자 탕수|sweet sour potato|탕수|감자,식초,설탕", "새우 마요|mayo shrimp|튀김|새우,마요네즈,설탕",
    "돼지고기 가지볶음|pork eggplant|볶음|돼지고기,가지,간장", "버섯 닭고기볶음|chicken mushroom|볶음|닭고기,버섯,굴소스",
    "토마토 두부탕|tomato tofu soup|국|토마토,두부,소금",
  ],
  meat: [
    "삼겹살구이|grilled pork belly|구이|삼겹살,소금,김치", "스테이크|pan steak|구이|소고기,버터,마늘",
    "닭다리 간장조림|soy chicken|조림|닭다리,간장,설탕", "양념불고기|bulgogi|볶음|소고기,간장,양파",
    "닭가슴살 스테이크|chicken steak|구이|닭가슴살,소금,올리브유", "소시지 채소볶음|sausage stir-fry|볶음|소시지,채소,케첩",
    "목살 소금구이|salt pork neck|구이|목살,소금,마늘", "닭봉 간장구이|soy wings|구이|닭봉,간장,설탕",
    "돼지불고기|pork bulgogi|볶음|돼지고기,간장,양파", "닭갈비|dakgalbi|볶음|닭고기,고추장,양파",
    "제육볶음|spicy pork|볶음|돼지고기,고추장,양파", "소고기 장조림|soy beef|조림|소고기,간장,달걀",
    "닭다리 양념구이|spicy chicken|구이|닭다리,고추장,설탕", "삼겹살 김치볶음|pork kimchi|볶음|삼겹살,김치,대파",
    "베이컨 말이|bacon roll|구이|베이컨,파프리카,후추", "닭봉 마늘구이|garlic wings|구이|닭봉,마늘,간장",
    "소고기 가지볶음|beef eggplant|볶음|소고기,가지,간장", "돼지고기 데리야끼|pork teriyaki|데리야끼|돼지고기,간장,설탕",
    "닭가슴살 데리야끼|chicken teriyaki|데리야끼|닭가슴살,간장,설탕", "양갈비 구이|lamb chop|구이|양갈비,소금,마늘",
    "스팸 구이|pan spam|구이|스팸,간장,설탕", "오리 주물럭|spicy duck|볶음|오리,고추장,양파",
    "소고기 버섯볶음|beef mushroom|볶음|소고기,버섯,굴소스", "닭다리 카레구이|curry chicken|구이|닭다리,카레,소금",
    "돼지목살 간장구이|soy pork|구이|목살,간장,마늘", "닭봉 양념조림|braised wings|조림|닭봉,고추장,설탕",
    "소고기 채소볶음|beef veg stir-fry|볶음|소고기,채소,간장", "삼겹살 데리야끼|pork belly teriyaki|데리야끼|삼겹살,간장,설탕",
    "닭가슴살 마늘구이|garlic chicken|구이|닭가슴살,마늘,올리브유", "소시지 간장볶음|soy sausage|볶음|소시지,간장,양파",
    "베이컨 감자볶음|bacon potato|볶음|베이컨,감자,후추", "닭다리 찜|braised chicken legs|찜|닭다리,간장,감자",
    "돼지갈비 조림|braised pork rib|조림|돼지고기,간장,설탕", "소고기 떡볶이|beef tteok|볶음|소고기,떡,간장",
    "닭고기 채소꼬치|chicken skewer|꼬치|닭고기,파프리카,간장", "스팸 김치볶음|spam kimchi|볶음|스팸,김치,대파",
  ],
  quick: [
    "간장계란밥|soy egg rice|덮밥간단|밥,달걀,간장", "참치마요덮밥|tuna mayo bowl|덮밥간단|참치,밥,마요네즈",
    "라면 업그레이드|upgraded ramen|우동|라면,달걀,대파", "어묵우동탕|fish cake udon|우동|우동면,어묵,간장",
    "버터 간장밥|butter soy rice|덮밥간단|밥,버터,간장", "치즈 라면|cheese ramen|우동|라면,치즈,달걀",
    "누룽지탕|nurungji soup|국|누룽지,달걀,소금", "김치 참치덮밥|kimchi tuna bowl|덮밥간단|김치,참치,밥",
    "달걀 비빔밥|egg bibimbap|덮밥간단|밥,달걀,고추장", "스팸 마요덮밥|spam mayo bowl|덮밥간단|스팸,밥,마요네즈",
    "명란 비빔밥|pollock roe rice|덮밥간단|밥,명란,참기름", "김치볶음밥|kimchi fried rice|볶음밥|김치,밥,달걀",
    "참치김치찌개|tuna kimchi stew|찌개|김치,참치,두부", "달걀국밥|egg rice soup|국|밥,달걀,대파",
    "치즈 떡볶이|cheese tteok|볶음|떡,고추장,치즈", "라볶이|rabokki|볶음|떡,라면,고추장",
    "김치우동|kimchi udon|우동|우동면,김치,간장", "어묵볶음 덮밥|fish cake bowl|덮밥간단|어묵,밥,간장",
    "스팸김치볶음밥|spam kimchi rice|볶음밥|스팸,김치,밥", "마요 명란파스타|mentaiko pasta|볶음|파스타,명란,버터",
    "토마토 파스타|tomato pasta|볶음|파스타,토마토,마늘", "크림 파스타|cream pasta|볶음|파스타,우유,치즈",
    "오일 파스타|aglio pasta|볶음|파스타,마늘,올리브유", "달걀 토스트|egg toast|토스트|식빵,달걀,치즈",
    "참치 주먹밥|tuna rice ball|볼|밥,참치,김", "김치 주먹밥|kimchi rice ball|볼|밥,김치,참기름",
    "치즈 계란밥|cheese egg rice|덮밥간단|밥,달걀,치즈", "참치 김치볶음밥|tuna kimchi rice|볶음밥|참치,김치,밥",
    "라면 떡국|ramen tteok soup|우동|라면,떡,달걀", "두부 덮밥|tofu bowl|덮밥간단|두부,밥,간장",
    "달걀 카레덮밥|egg curry rice|카레|달걀,카레,밥", "스팸 김밥|spam gimbap|롤|밥,김,스팸",
    "김치 치즈 라면|kimchi cheese ramen|우동|라면,김치,치즈", "참치 마요 김밥|tuna gimbap|롤|밥,김,참치",
    "간장 버터 파스타|soy butter pasta|볶음|파스타,버터,간장", "어묵탕|fish cake soup|국|어묵,무,간장",
  ],
};

// Build
const DISHES = {};
const counts = {};
for (const [mode, rows] of Object.entries(RAW)) {
  const seen = new Set();
  const list = [];
  for (const row of rows) {
    const [ko, en, methodKey, ingStr] = row.split("|");
    if (!ko || seen.has(ko)) continue;
    seen.add(ko);
    const ingNames = ingStr.split(",").map((s) => s.trim()).filter(Boolean);
    const m = METHODS[methodKey] || METHODS["볶음"];
    const mainKo = ingNames.slice(0, 3).map((n) => n).join(", ");
    const mainEn = ingNames.slice(0, 3).map((n) => enOf(n)).join(", ");
    // season hint: prefer a seasoning ingredient in the dish, else method default
    const seasonHintKo = ingNames.find((n) => ["간장", "고추장", "된장", "굴소스", "케첩", "마요네즈", "고춧가루", "식초", "카레", "치즈", "꿀", "설탕", "마늘", "버터"].includes(n)) || SEASON_DEFAULT[methodKey] || "간장";
    const seasonHintEn = enOf(seasonHintKo);
    const koSteps = m.ko.map((s) => s.replaceAll("{main}", mainKo).replaceAll("{season}", seasonHintKo));
    const enSteps = m.en.map((s) => s.replaceAll("{main}", mainEn).replaceAll("{season}", seasonHintEn));
    list.push({ ko, en, ing: ING(ingNames), koSteps, enSteps });
  }
  DISHES[mode] = list;
  counts[mode] = list.length;
}
console.log("counts:", counts, "total:", Object.values(counts).reduce((a, b) => a + b, 0));

const out = `// AUTO-GENERATED by scripts/gen-recipes.mjs — ~36 dishes per mode (no 냉장고털기).
// Real dish names + curated ingredients; steps follow a per-method template.
export const DISHES = ${JSON.stringify(DISHES, null, 1)};
`;
writeFileSync(join(here, "..", "src", "recipes.js"), out, "utf8");
console.log("wrote src/recipes.js");
