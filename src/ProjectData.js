const publicUrl = process.env.PUBLIC_URL;

const projectData = [
  {
    id: 0,
    title: "BETWEEN / To do List, CRUD게시판, 날씨 앱",
    stack: ["React.JS", "React Hooks", "Styled-components", "JSON-Server", "Firebase"],
    content: `
    JSON-Server를 이용한 To Do List와 CRUD 게시판 / Open API를 이용한 날씨 앱 / Firebase 인증 시스템을 이용한 구글 로그인
    `,
    date: "1인 개발 / 22년 5월 제작",
    img: [
      publicUrl + "/img/between/between-cover.png",
      publicUrl + "/img/between/between-main.gif",
      publicUrl + "/img/between/between-todolist.gif",
      publicUrl + "/img/between/between-board.gif",
      publicUrl + "/img/between/between-login.gif",
    ],
    link: "https://github.com/AinRuthPai/react-todolist",
  },
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    stack: ["React.JS", "React Hooks"],
    content: "react-modal, react-typist 라이브러리를 사용하여 제작한 포트폴리오 웹사이트.",
    date: "1인 개발 / 22년 2월 제작",
    img: [publicUrl + "/img/portfolio/portfolio-cover.png", publicUrl + "/img/portfolio/portfolio-main.gif"],
    link: "https://github.com/AinRuthPai/portfolio-website-react",
  },
  {
    id: 2,
    title: "ShoeShop / 신발 쇼핑몰",
    stack: ["React.JS", "React Hooks", "React-Redux"],
    content: "장바구니 기능과 axios 요청으로 데이터 불러오기를 구현한 사이트입니다.",
    date: "1인 개발 / 22년 1월 제작",
    img: [publicUrl + "/img/shoeshop/shoeshop-cover.png", publicUrl + "/img/shoeshop/shoeshop-main.gif"],
    link: "https://github.com/AinRuthPai/react-shoeshop",
  },
  {
    id: 3,
    title: "영단어장",
    stack: ["React.JS", "React Hooks", "TypeScript", "JSON-Server"],
    content: "JSON-Server를 이용하여 단어&날짜 생성 및 삭제, 조회가 가능한 영단어장입니다.",
    date: "1인 개발 / 22년 4월 제작",
    img: [
      publicUrl + "/img/word/word-main.png",
      publicUrl + "/img/word/word-getword.gif",
      publicUrl + "/img/word/word-createword.gif",
      publicUrl + "/img/word/word-createday.gif",
      publicUrl + "/img/word/word-delete.gif",
    ],
    link: "https://github.com/AinRuthPai/wordplay-02",
  },
];

export default projectData;
