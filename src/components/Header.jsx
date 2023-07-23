import {NavLink} from 'react-router-dom';
import { useState } from 'react';
import styles from '../css/nav.module.css';
const Header = () => {
    const url ="images/logo.png";
    const pageUrl = "/tutorfiltering";
    const pageName ="Find Tutor";
    const componentSigninorProfile = "SIGN IN";
    const componentUrl = "/Signin";
    const [isOpen,setIsopen] = useState(false);
    const open = isOpen? styles.open : '';
    const leftX = isOpen? styles.leftX : '';
    const rightX = isOpen? styles.rightX : '';
    const gone = isOpen? styles.gone : '';
  return (
      <nav className={styles.nav_bar}>
        <div className={styles.nav_logo} >
            <img src={url} alt="Platform Logo CUET TUITIONEE" className={styles.logo}/>
        </div>
        <div className={styles.menu} onClick={()=>{
            setIsopen(!isOpen);
        }}>
            <span className={leftX}></span>
            <span className={gone}></span>
            <span className={rightX}></span>
        </div>
        <ul className={`${styles.nav_link_list} ${open}`}>
                <li><NavLink to="/" className={styles.nav_link_item} >Home</NavLink></li>
                <li><NavLink to={pageUrl} className={styles.nav_link_item} >{pageName}</NavLink></li>
                <li><NavLink to="/about" className={styles.nav_link_item} >About Us</NavLink></li>
                <li><NavLink to="/contact" className={styles.nav_link_item} >Contact Us</NavLink></li> 
                <li><NavLink to={componentUrl} className={`${styles.nav_btn} ${styles.nav_link_item}`}>{componentSigninorProfile}</NavLink></li> 
        </ul>
        
      </nav>
  );
};

export default Header;