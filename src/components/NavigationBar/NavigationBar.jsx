import React from 'react';
import { FaChurch } from 'react-icons/fa';
import styles from './NavigationBar.module.css';

export default function NavigationBar({ menus, menu, onMenuChange }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <FaChurch className={styles.icon} />
        <div className={styles.text}>창후교회</div>
      </div>
      <ul className={styles.menu}>
        {menus.map((value, index) => (
          <li key={index} className={styles.listitem}>
            <button
              className={`${styles.button} ${
                menu === value && styles.selected
              }`}
              onClick={() => onMenuChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
