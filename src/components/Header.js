import { LOGO_URL } from '../utils/constants';

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
};

export default Header;

