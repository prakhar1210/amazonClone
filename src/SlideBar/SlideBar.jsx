import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./SlideBar.module.css";


const SlideBar = () => {
    return (
        <div className={styles.slideBarMainContainer}>
            <FontAwesomeIcon icon="fa-solid fa-bars" style={{ color: 'red' }} />
            <ul>All</ul>
            <ul>Amazon TV</ul>
            <ul>Sale</ul>
            <ul>Best Sellers</ul>
            <ul>Mobiles</ul>
            <ul>Today's Deals</ul>
            <ul>Coustmer Service</ul>
            <ul>Prime</ul>
            <ul>Electronics</ul>
            <ul>New Releases</ul>
            <ul>Home & Kitchen</ul>
            <ul>Gift Ideas</ul>
            <ul>Amazon Pay</ul>
            <ul>Faishon</ul>
            <ul>Computers</ul>
            <ul>Books</ul>
            <ul>Toys & Games</ul>
        </div>
    )
}

export default SlideBar
