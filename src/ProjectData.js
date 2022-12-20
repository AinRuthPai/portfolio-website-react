const publicUrl = process.env.PUBLIC_URL;

const projectData = [
  {
    id: 0,
    title: "BETWEEN / To do List, 게시판, 날씨 앱",
    stack: ["React.JS", "React Hooks", "Styled-components", "JSON-Server"],
    content: `
    JSON-Server를 이용한 To Do List와 CRUD 게시판 / Open API를 이용한 날씨 앱
    `,
    date: "1인 개발 / 22년 5월 제작",
    img: [
      publicUrl + "/img/between/between1.png",
      publicUrl + "/img/between/between2.png",
      publicUrl + "/img/between/between3.png",
      publicUrl + "/img/between/between4.png",
      publicUrl + "/img/between/between5.png",
    ],
    link: "https://github.com/AinRuthPai/react-todolist",
  },
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    stack: ["React.JS", "React Hooks", "Styled-components"],
    content: "포트폴리오 웹사이트.",
    date: "1인 개발 / 22년 2월 제작",
    img: [
      publicUrl + "/img/portfolio/portfolio1.png",
      publicUrl + "/img/portfolio/portfolio2.png",
      publicUrl + "/img/portfolio/portfolio3.png",
    ],
    link: "https://github.com/AinRuthPai/portfolio-website-react",
  },
  {
    id: 2,
    title: "ShoeShop / 신발 쇼핑몰",
    stack: ["React.JS", "React Hooks", "React-Redux", "Styled-components"],
    content: "신발 쇼핑몰 사이트입니다",
    date: "1인 개발 / 22년 1월 제작",
    img: [
      publicUrl + "/img/shoeshop/shoeshop1.png",
      publicUrl + "/img/shoeshop/shoeshop2.png",
      publicUrl + "/img/shoeshop/shoeshop3.png",
      publicUrl + "/img/shoeshop/shoeshop4.png",
    ],
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
