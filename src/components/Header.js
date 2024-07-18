import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [logBtn , setLogBtn] = useState("login");

  useEffect(()=>{
  console.log("useEffect called in header")
  },[]);
  
    return (
      <div className="header-container">
        <img
          className="app-logo"
          src={LOGO_URL}
        />
        <div className="nav-container">
          <ul className='dis-flex'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>contact us</Link></li>
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

