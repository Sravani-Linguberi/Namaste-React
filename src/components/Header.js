import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineIndicator from '../utils/useOnlineIndicator';

const Header = () => {
  const [logBtn , setLogBtn] = useState("login");

  useEffect(()=>{
  console.log("useEffect called in header")
  },[]);

  const onlineStatus = useOnlineIndicator();
  
    return (
      <div className="header-container">
        <img
          className="app-logo"
          src={LOGO_URL}
        />
        <div className="nav-container">
          <ul className='dis-flex'>
            <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
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

