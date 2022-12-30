import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faEnvelope, faPerson, faFileCode, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Section } from "./Section_Skills";

export default function SectionAboutMe() {
  return (
    <SectionAbout>
      <h1>About me</h1>
      <MyImg src={process.env.PUBLIC_URL + "/img/myimg.jpg"} alt='myimg' />
      <p>
        <FontAwesomeIcon icon={faPerson} />
        이름 : 백훈찬
      </p>

      <p>
        <FontAwesomeIcon icon={faPhone} />
        Tel : 010-9159-0579
      </p>

      <p>
        <FontAwesomeIcon icon={faEnvelope} />
        E-mail : untitle0203@gmail.com
      </p>

      <p>
        <FontAwesomeIcon icon={faFileCode} />
        github :
        <a href='https://github.com/AinRuthPai' target='_blank' rel='noopener noreferrer'>
          https://github.com/AinRuthPai
        </a>
      </p>

      <p>
        <FontAwesomeIcon icon={faPen} />
        velog :
        <a href='https://velog.io/@ainruthpai' target='_blank' rel='noopener noreferrer'>
          https://velog.io/@ainruthpai
        </a>
      </p>
    </SectionAbout>
  );
}

const SectionAbout = styled(Section)`
  flex-direction: column;

  > p {
    font-size: 18px;
  }
`;

const MyImg = styled.img`
  width: 25%;
  height: 40%;
  margin-top: 5%;
  margin-bottom: 3%;
  object-fit: contain;
`;
