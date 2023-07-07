import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
const Nav = ({ onSearch, setAccess }) => {
  const handlelogOut = () => {
    setAccess(false);
    // navigate("/")
  };

  return (
    <div className={style.contain}>
      <SearchBar onSearch={onSearch} />
      <button>
        <Link to="/about">ABOUT</Link>
      </button>
      <button>
        <Link to="/home">HOME</Link>
      </button>
      <button>
        <Link to="/favorites">FAVORITES</Link>
      </button>

      <button onClick={handlelogOut}>LOG OUT</button>
    </div>
  );
};

export default Nav;
