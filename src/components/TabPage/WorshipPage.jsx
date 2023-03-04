import React, { useEffect, useState } from 'react';
import styles from './WorshipPage.module.css';

export default function WorshipPage() {
  const [effect, setEffect] = useState(false);

  useEffect(() => {
    setEffect(false);
    return () => {
      setEffect('');
    };
  });

  return <div className={`${styles.background} ${effect && styles.effect}`} />;
}
