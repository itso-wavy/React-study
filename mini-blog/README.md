# mini-blog practice

| <img src='https://user-images.githubusercontent.com/108520997/233301447-94ab273f-e2c4-4cfd-8cee-4d9b6d8f2477.png'> |
| :----------------------------------------------------------------------------------------------------------------: |
|                                                    HomePage(웹)                                                    |

| <img width=200 src='https://user-images.githubusercontent.com/108520997/233304048-966dcffd-a004-4367-b565-adb2feeab860.png'> | <img width=200 src='https://user-images.githubusercontent.com/108520997/233301498-b235eae2-4563-4197-8384-8b869202337d.png'> | <img width=200 src='https://user-images.githubusercontent.com/108520997/233301511-cb1ef163-b4ae-43f0-b90b-3e5a6c8031f9.png'> |
| :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                                       HomePage(모바일)                                                       |                                                        PostDetailPage                                                        |                                                        PostWritePage                                                         |

<code style="color: blue">`json-server --watch ./src/assets/data.json`</code>

<code style="color: blue">`npm start`</code>

## 1. 기획

### 1) 목적

- 아주 작은 프로젝트로 전체적인 프로젝트 개발 경험을 가지려 함
  - **Top-down 방식의 설계와 Bottom-up 방식의 구현**
- 최소한의 기획(기능 고민/디자인 등)과 핵심 기능 위주의 개발에 초점
  - 컴포넌트 분리
  - json-server 이용한 CRUD 구현

### 2) 초기 구상

- Main page
  - Header
    - nav(logo)
    - hero section
  - main
    - PostList(list view)
      - PostListItem
  - footer
    - nav
- Post page
  - Post
  - CommentList
    - CommentListItem
  - 글(댓글) 작성
    - TextInput

### 3) 디자인

- 컬러 픽: `#FFFFFF` / `#F81417` / `#E3E3E3`(블랙, 화이트, 하이라이트)
- 폰트: `Roboto Mono` / `Helvetica`

## 2. 실제

### 1) 폴더 구조

```
├─public
│      index.html
│
└─src
    │  App.jsx
    │  index.js
    │
    ├─assets
    │      data.json
    │
    ├─component
    │  ├─comment
    │  │      CommentList.jsx
    │  │      CommentListItem.jsx
    │  │
    │  ├─common
    │  │      Button.jsx
    │  │      TextInput.jsx
    │  │
    │  ├─footer
    │  │      Footer.jsx
    │  │
    │  ├─header
    │  │      Aside.jsx
    │  │      Header.jsx
    │  │      Hero.jsx
    │  │      Nav.jsx
    │  │
    │  └─post
    │          PostList.jsx
    │          PostListItem.jsx
    │
    ├─page
    │      HomePage.jsx
    │      PostDetailPage.jsx
    │      PostWritePage.jsx
    │
    └─styles
            globalStyle.jsx
```

### 2) 사용 스택과 의존성

- react
  - react-dom
  - react-router-dom
- styled-components
  - reset
  - GloabalStyle
- react hook
  - useState
  - useEffect
  - useNavigate
  - useParams
- axios
- json-server

## 3) 회고

- 아주 간단한 미니 블로그를 제작할 생각으로 별도의 레포를 생성하지 않았는데 생각보다 덩치가 커졌다. 컴포넌트를 쪼개고, 디자인에 살을 붙이다 보니 그렇게 된 듯 하다. 다행히 반나절이 지나지 않아 마무리 할 수 있었다.

  - 스스로가 개발에 앞서 기획에 너무 많은 고민을 하는 것 같아 도전해 보았는데 의미 있는 시도였다. 바이트 사이즈의 프로젝트를 꾸준히 진행하는 것도 긍정적으로 생각해보아야겠다.
  - 기획 단계에서 기능을 어떻게 구상하고 작게 쪼개어 볼지 감이 좀 잡히는 것 같다. 다음 프로젝트의 컨셉이 정해진다면 기획에 적당한 수준의 벤치마킹 단계를 추가하는 게 좋겠다.
  - 디자인 단계에서 피그마와 카카오 오븐을 적용하려다가 완성을 보지 않고 VSCODE를 열었다. 내가 만지고 싶은 건 코드였기 때문에. 그래도 이러한 삽질이 쌓여 노하우를 얻는 것일테다. 유용한 피그마 에셋을 찾을 수 있었고, 버튼, 카드 UI 등을 어떻게 만들어둘지 고민하게 되었다.
  - 이 정도의 레이아웃은 반응형으로 만드는 데 고민도 들지 않는다. 이전 CSS 챌린지로 반복 훈련한 보람이 있다.
  - cra 템플릿을 만들어 npm에 배포했다. 신기한 경험.<br/>
    `npx create-react-app {my-app} --template mini`

- 다음 프로젝트에선...

  - state 다루기가 아직 미숙하다고 느꼈다. 강의나 교재에서 배운 방식을 적용하는 것에 그치고 있다. `state 끌어올리기`와 `redux`를 통한 state 관리를 더 알아보아야겠다.
  - `커스텀 훅`을 만드는 법을 익혔지만 어떤 파트에 적용해야 할지 고민이 들었다. 다음 프로젝트에서 사용해 볼 것.
  - styled component 사용이 미숙하다. scss와 문법을 공유하고 있지만 `module`과는 동작 원리도 다르고 세세한 문법도 다르다. 원하는대로 동작하지 않는 몇몇 부분이 있어 시간이 소요되었다. 또한 이전 프로젝트에서는 몰랐던 styled component의 불편한 점을 느끼게 되었다. module과의 비교를 통해 다음 프로젝트의 스타일링 방법을 결정해야겠다.
  - 컴포넌트부터 시작하여 전체적인 시맨틱 구조를 생각하려니 여러 파일을 뒤적거려야 했다. 이를 막기 위해서는 마크업에서 시작하여 컴포넌트를 쪼개보는 것도 좋겠다.

- 고민에 너무 많은 시간을 쏟지 말 것. 일단 만들어보자.
