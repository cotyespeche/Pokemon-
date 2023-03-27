import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";

const NavBar = () => {
  return (
    <div className={styles.bodynav}>
      <nav>
        <Link to="/">
          <button className={styles.b1}> Api Pokemon </button>
        </Link>

        {/* <Link to="/Home">
                <button> Home </button>
                </Link> */}

        <Link to="/form">
          <button className={styles.b2}> Create Pokemon </button>
        </Link>
      </nav>
      <SearchBar className={styles.searchBar} />
      <Filter />
    </div>
  );
};

export default NavBar;
