import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SectionHeader() {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <>
      <div className='nav'>
        <div className='nav_container'>
          <a href='#0' className='header_title'>
            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt='header_logo' className='header_logo' />
            FRONTEND
          </a>
          <div className={menuBar === true ? "show_bar" : "hidden_bar"}>
            <a href='#1' className='header_menu'>
              ABOUT ME
            </a>
            <a href='#2' className='header_menu'>
              SKILLS
            </a>
            <a href='#3' className='header_menu'>
              PROJECT
            </a>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faBars}
          className='faBars'
          onClick={() => {
            setMenuBar(!menuBar);
          }}
        />
        <div className='header_github'>
          <a href='https://github.com/AinRuthPai' target='_blank' rel='noopener noreferrer'>
            <img src={process.env.PUBLIC_URL + "/img/github.png"} className='header_github' alt='header_github' />
          </a>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
