import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { useState } from "react";

function Header() {
  const [menuBar, setMenuBar] = useState(false);

  return (
    <>
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
              SKILLS & ARCHIVING
            </Link>
            <Link to='3' className='header_menu'>
              PROJECT
            </Link>
            <Link to='4' className='header_menu'>
              COMMENT
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
      </div>
    </>
  );
}

export default Header;
