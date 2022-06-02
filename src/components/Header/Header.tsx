import React, { useState } from "react";
import { HeaderContainer, OpeningMenu } from "./Header.styled";
import SearchSlide from "./SearchSlide";
import { default as cartIcon } from "../../assets/images/cart-icon.svg";
import { default as userIcon } from "../../assets/images/user-icon.svg";
import { default as logo } from "../../assets/images/epicure-logo.svg";
import { default as search } from "../../assets/images/search-icon.svg";
import { default as hamburger } from "../../assets/images/opening-menu-icon.svg";
import { default as x } from "../../assets/images/x.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu((prevMenu) => !prevMenu);
  };

  const toggleSearch = () => {
    setIsSearch((prevSearch) => !prevSearch);
  };

  return (
    <>
      <HeaderContainer>
        <div className="main-nav">
          <ul className="clean-list">
            <li className="home">
              <NavLink to="/" className="clean-link">
                Epicure
              </NavLink>
            </li>
            <li>
              <NavLink to="/restaurants" className="clean-link">
                Restaurants
              </NavLink>
            </li>
            <li>
              <NavLink className="clean-link" to="/chefs">
                Chefs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <img
            src={hamburger}
            className="nav-icon"
            alt="menu"
            onClick={toggleMenu}
          />
        </div>
        <div className="logo">
          <NavLink className="clean-link" to="/">
            <img src={logo} alt="mini logo" />
          </NavLink>
        </div>
        <div>
          <img
            src={search}
            className="nav-icon"
            alt="search-bar"
            onClick={toggleSearch}
          />
          <img src={cartIcon} className="nav-icon" alt="cart" />
          <img src={userIcon} className="nav-icon" alt="user" />
        </div>
      </HeaderContainer>
      {showMenu && (
        <OpeningMenu menu={showMenu}>
          <div>
            <img src={x} onClick={toggleMenu} className="nav-icon" />
          </div>
          <NavLink
            to="/restaurants"
            className="clean-link"
            onClick={toggleMenu}
          >
            Restaurants
          </NavLink>
          <NavLink to="/chefs" className="clean-link" onClick={toggleMenu}>
            Chefs
          </NavLink>
          <div>
            <a onClick={toggleMenu}>Contact Us</a>
            <a onClick={toggleMenu}>Terms of Use</a>
            <a onClick={toggleMenu}>Privacy Policy</a>
          </div>
        </OpeningMenu>
      )}
      {isSearch && (
        <SearchSlide isSearch={isSearch} toggleSearch={toggleSearch} />
      )}
    </>
  );
};

export default Header;
