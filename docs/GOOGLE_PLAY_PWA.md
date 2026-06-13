# 요리잼뱅이 PWA / Google Play 등록 준비

## 현재 적용된 것

- `manifest.webmanifest`: 설치형 PWA 이름, 아이콘, 세로 고정, `display: fullscreen`, `display_override: fullscreen -> standalone`
- `sw.js`: 앱 셸 캐시와 오프라인 fallback
- `offline.html`: 오프라인 안내 화면
- `icons/*.svg`: PWA 아이콘과 maskable 아이콘
- `.well-known/assetlinks.template.json`: TWA 전체 화면 검증용 Digital Asset Links 템플릿
- `functions/api/users.js`: Cloudflare Pages 배포 시 이메일만 저장하는 유저 생성 API 준비

## 주소줄 숨김 기준

일반 모바일 브라우저 탭에서는 주소줄을 코드로 강제 제거할 수 없습니다.
주소줄 없이 보이려면 사용자가 PWA로 설치하거나, Google Play에 TWA 앱으로 등록해야 합니다.

## Google Play 등록 흐름

1. PWA를 HTTPS 도메인에 배포합니다.
2. Cloudflare Pages를 쓴다면 KV 네임스페이스를 만들고 `YORI_USERS` 바인딩을 연결합니다. 바인딩이 없어도 앱은 로컬 가입 흐름으로 동작합니다.
3. 배포된 URL에서 `manifest.webmanifest`와 `sw.js`가 정상 동작하는지 확인합니다.
4. Android TWA 래퍼를 Bubblewrap으로 생성합니다.

```bash
npm i -g @bubblewrap/cli
bubblewrap init --manifest https://YOUR_DOMAIN/manifest.webmanifest
bubblewrap build
```

5. Google Play Console에서 앱 서명 인증서 SHA-256 지문을 확인합니다.
6. `.well-known/assetlinks.template.json`의 지문을 실제 값으로 바꾸고, 배포 서버의 `https://YOUR_DOMAIN/.well-known/assetlinks.json`에 올립니다.
7. TWA 검증이 통과하면 앱이 주소줄 없는 전체 화면으로 실행됩니다.
8. 생성된 AAB 파일을 Google Play Console에 등록합니다.

## 추가로 필요한 실제 값

- 배포 도메인
- Android 패키지명 확정값: 현재 제안값 `com.odung.yorijambaengi`
- Google Play 앱 서명 SHA-256 지문
- 512x512 PNG 앱 아이콘과 Play Store 그래픽 자산

## 메모

현재 SVG 아이콘은 PWA 설치에는 사용할 수 있지만, Play Store 등록 화면에는 PNG 스토어 자산이 별도로 필요합니다.
