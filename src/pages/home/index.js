import { HomeConatiner } from './style';
import DescImg from './../../assets/images/desc-img.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeConatiner className='home-container'>
      <div className='home-wrapper'>
        <div className='home-heading-container'>
          <h1 className='home-heading-primary'>Welcome to BlueShawk</h1>
          <p className='home-heading-secondary'>
            Experience safe and reliable pet shipping with BluShawk. Your pets are our priority, and we make sure they
            travel in comfort and safety.
          </p>
        </div>
        <div className='home-desc-container'>
          <div className='home-desc-left'>
            <h2 className='home-desc-title'>Shipping Pets Made Easy</h2>
            <p className='home-desc'>
              Enjoy free delivery on your first shipment. We prioritize the safety, security, and comfort of your pets
              during transportation.
            </p>
            <button onClick={() => navigate('/book-shipment')} className='home-desc-btn'>
              Book Now
            </button>
          </div>
          <span className='home-desc-right'>
            <div className='home-desc-right__img-overlay'></div>
            <img src={DescImg} alt='fish-tank-image' />
          </span>
        </div>
      </div>
    </HomeConatiner>
  );
};

export default Home;
