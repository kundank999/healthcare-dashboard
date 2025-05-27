import React from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/navigationLinks';
import * as Icon from 'lucide-react';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>Healthcare.</div>
      </div>
      <nav className={styles.navigation}>
        <h3 className={styles.navHeading}>General</h3>
        <ul>
          {navigationLinks.map(link => {
            const LucideIcon = Icon[link.icon];
            return (
              <li key={link.id} className={`${styles.navItem} ${link.id === 'dashboard' ? styles.active : ''}`}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  {LucideIcon && <LucideIcon size={20} className={styles.navIcon} />}
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.setting}>
        <div className={styles.navItem}>
          <a href="#" onClick={(e) => e.preventDefault()}>
            {/* {Icon['Settings'] && <Icon['Settings'] size={20} className={styles.navIcon} />} */}
            <span>Setting</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;