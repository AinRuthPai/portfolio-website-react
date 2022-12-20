import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  width: 20%;
  height: 100%;
  margin-top: 3%;

  > img:first-child {
    width: 70%;
    object-fit: contain;
  }
  > p:nth-child(2) {
    font-size: 18px;
  }

  > div:nth-child(3) {
    font-size: 28px;
    margin: 20% 0;
  }

  > div:nth-child(4) {
    line-height: 8px;
    color: #7f7f7f;
    margin-bottom: 10%;
  }

  > div:last-child > a > img {
    width: 40px;
    margin-left: 10px;
    border-radius: 50%;
  }
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

function SectionNav() {
  return (
    <Nav>
      <img src={process.env.PUBLIC_URL + "/img/myimg.jpg"} alt='myimg' />
      <p>Baek HoonChan</p>
      <div>
        <p>
          <LinkStyle to='/portfolio-website-react'>Project</LinkStyle>
        </p>
        <p>
          <LinkStyle to='/portfolio-website-react/skills'>Skills</LinkStyle>
        </p>
        <p>
          <LinkStyle to='/portfolio-website-react/aboutme'>About me</LinkStyle>
        </p>
      </div>
      <div>
        <p>Tel : 010-9159-0579</p>
        <p>E-mail : untitle@gmail.com</p>
      </div>
      <div>
        <a href='https://github.com/AinRuthPai' target='_blank' rel='noopener noreferrer'>
          <img src={process.env.PUBLIC_URL + "/img/github.png"} alt='footer_github' width='30px' />
        </a>
        <a href='https://velog.io/@ainruthpai' target='_blank' rel='noopener noreferrer'>
          <img src={process.env.PUBLIC_URL + "/img/velog.jpg"} alt='footer_velog' width='30px' />
        </a>
      </div>
    </Nav>
  );
}

export default SectionNav;
