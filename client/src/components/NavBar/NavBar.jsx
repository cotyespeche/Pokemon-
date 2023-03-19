import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css"
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
    return (
        <div className={styles.nav}> 
            
          <div className={styles.button}>
            <br></br>
            <SearchBar className={styles.searchBar}/> 
            <Link to="/">
                <button> Landing </button>
            </Link>

            <Link to="/Home">
            <button> Home </button>
            </Link>

            
            <Link to="/Form">
            <button> Create Pokemon </button>
            </Link>

            
            </div>
            
       </div>
    )
}


export default NavBar;