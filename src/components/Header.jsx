import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { useState } from "react";

function Header() {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <div className='nav'>
      <div className='nav_container'>
        <Link to='0' className='header_title'>
          <FontAwesomeIcon icon={faMugSaucer} className='faMugSaucer' />
          FRONTEND
        </Link>
        <div className={menuBar === true ? "show_bar" : "hidden_bar"}>
          <Link to='1' className='header_menu'>
            ABOUT ME
          </Link>
          <Link to='2' className='header_menu'>
            SKILLS
          </Link>
          <Link to='3' className='header_menu'>
            PROJECT
          </Link>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className='faBars'
        onClick={() => {
          setMenuBar(!menuBar);
        }}
      />
      <div>
        <a href='https://github.com/AinRuthPai' target='_blank'>
          <FontAwesomeIcon icon={faGithub} size='2x' className='header_faGithub' />
        </a>
      </div>
    </div>
  );
}

export default Header;
