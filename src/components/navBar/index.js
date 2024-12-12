import { NavContainer } from './style';
import Logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuCloseIcon } from './../../assets/icons/menu-close-icon.svg';
import { ReactComponent as MenuOpenIcon } from './../../assets/icons/menu-open-icon.svg';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [showMenu2, setShowMenu2] = useState(false);

  return (
    <NavContainer showMenu2={showMenu2} className='nav-bar-container'>
      <div className='nav-logo-box'>
        <img src={Logo} alt='logo-img' />
      </div>
      <div className='nav-menu-box'>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link>
            <li>Services</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
        <button onClick={() => setShowMenu2(true)} className='menu-open-icon'>
          <MenuOpenIcon />
        </button>
      </div>
      <div className='nav-menu-box-2'>
        <ul>
          <Link>
            <li>Home</li>
          </Link>
          <Link>
            <li>Services</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
        <button onClick={() => setShowMenu2(false)} className='menu-close-icon'>
          <MenuCloseIcon />
        </button>
      </div>
    </NavContainer>
  );
};

export default NavBar;
