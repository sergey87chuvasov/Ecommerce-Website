import './Navbar.css';
import navlogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='nav-logo' src={navlogo} alt='logo pic' />
      <img className='nav-profile' src={navProfile} alt='profile pic' />
    </div>
  );
};

export default Navbar;
