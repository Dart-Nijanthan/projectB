import { Link } from 'react-router-dom';
import { FooterContainer } from './style';
import { ReactComponent as FaceBookIcon } from './../../assets/icons/facebook-logo.svg';
import { ReactComponent as TwitterIcon } from './../../assets/icons/twitter-logo.svg';
import { ReactComponent as InstagramIcon } from './../../assets/icons/instagram-logo.svg';
import { ReactComponent as LinkedInIcon } from './../../assets/icons/linkedin-logo.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <div className='footer-top'>
        <div className='footer-left'>
          <h2>About Blushawk</h2>
          <p>
          At Blushawk, we're dedicated to providing a door-to-door delivery service for the ornamental fish industry. We specialize in offering last-mile delivery solutions exclusively for live fishes, ensuring affordable price and high care.

          </p>
        </div>
        <div className='footer-middle'>
          <h2>Quick Links</h2>
          <ul>
            <Link to='/'>
              <l1>Home</l1>
            </Link>
            <Link>
              <l1>Services</l1>
            </Link>
            <Link>
              <l1>About</l1>
            </Link>
            <Link>
              <l1>Contact</l1>
            </Link>
          </ul>
        </div>
        <div className='footer-right'>
          <h2>Connect With Us</h2>
          <div className='footer-social-media__icons'>
            <FaceBookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p>&copy;{new Date().getFullYear()} Blushawk. All Rights Reserved.</p>
        <p>Crafted with ❤️ by Blueshawk Team</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
