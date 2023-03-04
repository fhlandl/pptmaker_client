import React, { Children } from 'react';
import styles from './TabPageWrapper.module.css';

export default function TabPageWrapper({ tabName, isShow, children }) {
  return (
    <div className={`${styles.page} ${isShow ? styles.active : styles.hide}`}>
      {children}
    </div>
  );
}
