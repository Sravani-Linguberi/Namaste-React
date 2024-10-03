import { useContext, useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineIndicator from '../utils/useOnlineIndicator';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [logBtn , setLogBtn] = useState("login");
  const {userName} = useContext(UserContext);

  useEffect(()=>{
  console.log("useEffect called in header")
  },[]);

  const onlineStatus = useOnlineIndicator();
  
    return (
      <div className="flex justify-between bg-pink-100">
        <img
          className="w-50 h-20"
          src={LOGO_URL}
        />
        <div className="flex items-center justify-between font-large">
          <ul className="flex ">
            <li className='mx-3'>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
            <li className='mx-3'><Link to={'/'}>Home</Link></li>
            <li className='mx-3'><Link to={'/about'}>About</Link></li>
            <li className='mx-3'><Link to={'/contact'}>contact us</Link></li>
            <li className='mx-3'>cart</li>
            <li className='mx-3'>{userName}</li>
            <li className='mx-3'><button className='logBtn' onClick={()=>{
              logBtn === 'login' ? setLogBtn("logout") : setLogBtn("login")
            }}>{logBtn}</button></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;

