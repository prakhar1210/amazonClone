import React from 'react';
import AmazonLogo from "../Albums/Amazon-Logo-White-Transparent.png";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navigation = () => {
    return (
        <div className={styles.navMainContainer}>
            <img src={AmazonLogo} alt="Amazon Logo" style={{ width: '100px', height: 'auto', color: "white" }} />
            <div className={styles.navContainer}>
                <div className={styles.searchContainer}>
                    <select className={styles.dropdown}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <input type="text" placeholder="Search..." className={styles.searchInput} />
                    <button className={styles.searchButton}>
                        <FontAwesomeIcon icon={faSearch} style={{ color: "white", background: "orange" }} />
                    </button>
                    <div className={styles.ShoppingCartIconContainer}>
                        <ShoppingCartIcon style={{ width: '50px', height: 'auto', color: "white" }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navigation
