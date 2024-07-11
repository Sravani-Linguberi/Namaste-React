import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const [logBtn , setLogBtn] = useState("login");
    return (
      <div className="header-container">
        <img
          className="app-logo"
          src={LOGO_URL}
        />
        <div className="nav-container">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact us</li>
            <li>cart</li>
            <li><button className='logBtn' onClick={()=>{
              logBtn === 'login' ? setLogBtn("logout") : setLogBtn("login")
            }}>{logBtn}</button></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;

