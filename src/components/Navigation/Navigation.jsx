import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        exact
        to={routes.home}
        className="Navlink"
        activeClassName="Navlink--active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.contacts}
        className="Navlink"
        activeClassName="Navlink--active"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
