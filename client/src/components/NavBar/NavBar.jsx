import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import logoPokemon from '../../img/logoPokemon.png'

const NavBar = () => {
  return (
    <div className={styles.bodynav}>
      <nav>
        {/* <Link to="/">
          <button className={styles.b1}> Api Pokemon </button>
        </Link> */}
        {/* <div className={styles.logo1}> */}
        <Link to="/form">
          <button className={styles.b2}> Create Pokemon </button>
        </Link>
        <Link to= "/">
          <img className={styles.logo} src={logoPokemon} alt="logoPokemon"></img>
        </Link>
        {/* </div> */}

       
      </nav>

      <SearchBar className={styles.searchBar} />
      <Filter />
    </div>
  );
};

export default NavBar;
