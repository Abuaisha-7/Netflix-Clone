import React from "react";
import "./Header.css";
import Logo from "../../assets/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="header-left">
          <ul>
            <li>
              <img src={Logo} alt="Netflix logo" width='100' />
            </li>
            <li>Home</li>
            <li>TV shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My list</li>
            <li>Brouse by Language</li>
          </ul>
        </div>
        <div className="header-rigth">
          <ul>
            
          <li><SearchIcon /></li>
          <li><NotificationsNoneIcon /></li>
          <li><AccountBoxIcon /></li>
          <li><ArrowDropDownIcon /></li>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
