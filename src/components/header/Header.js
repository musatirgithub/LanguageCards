import reactLogo from '../../assets/react.svg';
import './Header.css';

const Header = () => {
  return (
    <div>
        <img className='react-logo' src={reactLogo} alt="react-logo" />
    </div>
  )
}

export default Header