const publicUrl = process.env.PUBLIC_URL;

const projectData = [
  {
    id: 0,
    title: "BETWEEN / To do List, CRUD게시판, 날씨 앱",
    stack: "React",
    content: `
    JSON-Server를 이용한 To Do List와 CRUD 게시판 / Open API를 이용한 날씨 앱
    `,
    date: "1인 개발 / 22년 5월 제작",
    img: [
      publicUrl + "/img/between/between-main.png",
      publicUrl + "/img/between/between-main2.png",
      publicUrl + "/img/between/todo.gif",
      publicUrl + "/img/between/board-create.gif",
      publicUrl + "/img/between/board-update.gif",
      publicUrl + "/img/between/board-delete.gif",
      publicUrl + "/img/between/board-empty-input.gif",
    ],
    link: "https://github.com/AinRuthPai/react-todolist",
  },
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    stack: "React",
    content: "지금 보고 계신 사이트입니다.",
    date: "1인 개발 / 22년 2월 제작",
    img: [
      publicUrl + "/img/portfolio/portfolio-main.png",
      publicUrl + "/img/portfolio/portfolio-main2.png",
      publicUrl + "/img/portfolio/portfolio-main3.png",
    ],
    link: "https://github.com/AinRuthPai/portfolio-website-react",
  },
  {
    id: 2,
    title: "ShoeShop / 신발 쇼핑몰",
    stack: "React, Redux",
    content: "장바구니 기능과 axios 요청으로 데이터 불러오기를 구현한 사이트입니다.",
    date: "1인 개발 / 22년 1월 제작",
    img: [
      publicUrl + "/img/shoeshop/shoeshop-main.png",
      publicUrl + "/img/shoeshop/shoeshop-detail.png",
      publicUrl + "/img/shoeshop/shoeshop-cart.png",
    ],
    link: "https://github.com/AinRuthPai/react-shoppingmall",
  },
  {
    id: 3,
    title: "영단어장",
    stack: "React, TypeScript",
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
