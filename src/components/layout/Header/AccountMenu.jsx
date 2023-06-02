import React from "react";
import { Link } from "react-router-dom";
// import styles from "./AccountMenu.module.scss";
const styles={
    
}

const AccountMenu = ({ handleLogout }) => {
  return (
    <div className={styles.accountMenu}>
      <span className={styles.dropdown}>
        <button className={styles.dropbtn}>
          <img
            src="path/to/profile/image"
            alt="Avatar"
            className={styles.avatar}
          />
        </button>
        <div className={styles.dropdownContent}>
          <Link to="/profile">Profile</Link>
          <Link to="/orders">Orders</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </span>
    </div>
  );
};

export default AccountMenu;
