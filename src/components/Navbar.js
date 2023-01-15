import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <li>
          <Link className={styles.link} to={`/movie/`}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/movie/`}>
            Search
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={`/movie/`}>
            MyPage
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
