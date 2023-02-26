import React, { useRef, useState } from 'react';
import { FaChurch } from 'react-icons/fa';
import { RxDropdownMenu } from 'react-icons/rx';
import styles from './NavigationBar.module.css';

export default function NavigationBar({ menus, menu, onMenuChange }) {
  const listRef = useRef();
  const toggleBtn = () => {
    listRef.current.classList.toggle(styles.active);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <FaChurch className={styles.icon} />
        <div className={styles.text}>창후교회</div>
      </div>
      <ul className={styles.menu} ref={listRef}>
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
      <button className={styles.toggleBtn} onClick={toggleBtn}>
        <RxDropdownMenu className={styles.icon} />
      </button>
    </nav>
  );
}
