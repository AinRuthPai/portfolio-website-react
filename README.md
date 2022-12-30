# React.JS를 이용한 포트폴리오 웹앱

## 📌 서비스 링크

- [서비스 링크](https://ainruthpai.github.io/portfolio-website-react)

## 📌 화면

![main](/public/img/portfolio/portfolio1.png)

---

![main](/public/img/portfolio/portfolio2.png)

---

![main](/public/img/portfolio/portfolio3.png)

## 📌 버전 정보

    "@fortawesome/fontawesome-svg-core": "^1.3.0",
    "@fortawesome/free-solid-svg-icons": "^6.0.0",
    "@fortawesome/react-fontawesome": "^0.1.17",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^29.2.4",
    "@types/node": "^18.11.17",
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.9",
    "@types/react-modal": "^3.13.1",
    "@types/react-router-dom": "^5.3.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-modal": "^3.14.4",
    "react-router-dom": "^6.4.5",
    "react-scripts": "5.0.0",
    "styled-components": "^5.3.6",
    "typescript": "^4.9.4",
    "web-vitals": "^2.1.4"

## 📌 규칙

### 1) 코드 순서

- import package

- import components / element

- import redux / api

- const dispatch = useDispatch();

- const [state, useState] = useState();

- const result = useSelector(state ⇒ state.reducer.action)

- useEffect

- return ()

- styled-component

### 2) CSS(styled-components) 순서

- position

- display

- width/height

- margin/padding

- color 관련

- text 관련

- tranform, transition, animation

- 기타

### 3) commit rules

- add : asset, dependency 추가 하는 경우 (이미지 파일)

- feat : 새로운 기능 추가, view 포함

- edit : 코드를 수정한 경우 (fix가 아님)

- fix : 버그 수정

- docs : 문서 수정 (readme)

- style : css style code 수정

- refactor : 코드 리팩토링

- chore : 빌드 업무 수정, 패키지 매니저 수정
