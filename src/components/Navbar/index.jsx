import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav id="navbar" className="flex justify-between px-5 py-2 bg-blue-300">
      <div className="flex gap-4">
        <NavLink to="/" className={styles.navlink_item}>
          Home
        </NavLink>
        <NavLink to="/products" className={styles.navlink_item}>
          Products
        </NavLink>
        <NavLink to="/faq" className={styles.navlink_item}>
          FAQ
        </NavLink>
      </div>

      <div className="flex gap-4">
        <NavLink to="/login" className={styles.navlink_item}>
          Login
        </NavLink>
        <NavLink to="/sign-up" className={styles.navlink_item}>
          SignUp
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
