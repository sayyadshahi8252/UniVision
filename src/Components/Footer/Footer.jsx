import React from 'react';
import style from '../Footer/Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <p className={style.copy}>&copy; 2025 Univision. All rights reserved.</p>
        <ul className={style.footerLinks}>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
