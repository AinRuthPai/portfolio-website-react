# React.JS를 이용한 포트폴리오 웹앱

<br />

![main](/public/img/portfolio/portfolio1.png)

<center>
<div>
<img src="https://img.shields.io/badge/React-v17.0.2-61DAFB??style=flat-square&logo=React&logoColor=white" alt="react badge" />
<img src="https://img.shields.io/badge/TypeScript-4.9.4-764ABC??style=flat-square&logo=TypeScript&logoColor=white" alt="typescript badge" />
<img src="https://img.shields.io/badge/StyledComponents-5.3.6-DB7093??style=flat-square&logo=styled-components&logoColor=white" alt="styled-components badge" />
 </div>
 <div>
<img src="https://img.shields.io/badge/FontAwesome-1.3.0-DB7093??style=flat-square&logo=fontawesome&logoColor=white" alt="fontawesome badge" />
<img src="https://img.shields.io/badge/ReactModal-3.14.4-DB7093??style=flat-square&logo=react-modal&logoColor=white" alt="react-modal badge" />
<img src="https://img.shields.io/badge/ReactRouterDom-6.4.5-61DAFB??style=flat-square&logo=react-router-dom&logoColor=white" alt="react-router-dom badge" />
</div>
</center>

<br />

### 📌 배포 링크

- [Link](https://ainruthpai.github.io/portfolio-website-react)

<br />

---

### 📌 화면

<br />

![main](/public/img/portfolio/portfolio1.png)

- 프로젝트를 Modal창으로 구현한 메인 페이지입니다.

<br />

---

<br />

![main](/public/img/portfolio/portfolio2.png)

- 스킬셋을 간략히 표현한 페이지입니다.

<br />

---

<br />

![main](/public/img/portfolio/portfolio3.png)

- 인적사항이 기입된 페이지입니다.

<br />

---

<br />

### 📌 규칙

<br />

#### 1) 코드 순서

- import package
- import components / element
- import redux / api
- const dispatch = useDispatch();
- const [state, useState] = useState();
- const result = useSelector(state ⇒ state.reducer.action)
- useEffect
- return ()
- styled-component

<br />

#### 2) CSS(styled-components) 순서

- position
- display
- width/height
- margin/padding
- color 관련
- text 관련
- tranform, transition, animation
- 기타

<br />

#### 3) commit rules

- add : asset, dependency 추가 하는 경우 (이미지 파일)
- feat : 새로운 기능 추가, view 포함
- edit : 코드를 수정한 경우 (fix가 아님)
- fix : 버그 수정
- docs : 문서 수정 (readme)
- style : css style code 수정
- refactor : 코드 리팩토링
- chore : 빌드 업무 수정, 패키지 매니저 수정

<br />
