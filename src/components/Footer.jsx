import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer'>
      <a href='https://github.com/AinRuthPai' target='_blank'>
        <FontAwesomeIcon icon={faGithub} size='4x' className='faGithub' />
      </a>
      <div>© 2022. Hoon. All rights reserved</div>
      <div>이 사이트는 상업적인 목적으로 이용되지 않습니다.</div>
    </div>
  );
}

export default Footer;
