import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const location = useLocation();
  const isTransparent = location.pathname === '/' || location.pathname === '/404';

  return (
    <nav className={`${styles.navbar} ${isTransparent ? styles.transparent : styles.solid}`}>
      <div className={styles.navContent}>
        <Link to="/" className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.navLinks}>
          <Link to="/gallery" className={styles.navLink}>Gallery</Link>
          <Link to="/services" className={styles.navLink}>Prices for services</Link>
          <Link to="/about" className={styles.navLink}>About us</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

