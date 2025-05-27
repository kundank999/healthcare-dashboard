import React from 'react';
import styles from './Header.module.css';
import { Search, Bell, Plus } from 'lucide-react'; 

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>
      <div className={styles.searchBar}>
        <Search size={20} color="var(--color-dark-gray)" />
        <input type="text" placeholder="Search" disabled /> 
      </div>
      <div className={styles.rightSection}>
        <Bell size={24} color="var(--color-dark-gray)" className={styles.iconButton} />
        <div className={styles.userProfile}>
          <img src="/assets/images/user-avatar.png" alt="User Avatar" className={styles.avatar} /> 
          <span>John Doe</span>
        </div>
        <button className={styles.addButton}>
          <Plus size={24} color="var(--color-text-light)" />
        </button>
      </div>
    </header>
  );
}

export default Header;