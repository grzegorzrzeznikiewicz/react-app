import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.wrapper}>
                <NavLink to="/" className={styles.icon}>
                    <i className="fa fa-tasks" />
                </NavLink>
                <ul className={styles.list}>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                 to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                 to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                 to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
