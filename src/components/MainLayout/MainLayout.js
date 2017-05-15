import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children, tabBarIndex, title }) {
  return (
    <div className={styles.normal}>
      <div className={styles.content}>
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <Footer tabBarIndex={tabBarIndex}/>
    </div>
  );
}

export default MainLayout;
