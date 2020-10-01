import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
function Header() {
    const [inputSearch,setInputSearch]= useState('');
    return (
        <div className="header">
        <div className="header_left">
           
             <MenuIcon />
             <Link to ="/">
             <img className="header_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
              alt=""
              />
              </Link>
        </div>


        <div className="header_input">
            <input onChange={e=> setInputSearch(e.target.value)}
             value={inputSearch} placeholder="Search"
            type="text"/>
            
            <Link to = {`/search/${inputSearch}`}>
            <SearchIcon className="header_inputButton"/> 
            </Link>
        </div>  


        <div className="header_icon">
            <VideoCallIcon className="header_icon"/>
            <AppsIcon className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <AccountCircleIcon className="header_icon" alt="Sarang"
            src="https://scontent.fcok1-1.fna.fbcdn.net/v/t31.0-8/26240532_752063931646419_6524646849658663735_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=dlpAknuYdUYAX8LSWX1&_nc_ht=scontent.fcok1-1.fna&oh=53ccb0a268adf71a759e9100855ba634&oe=5F6FB6F4"
            />
        </div>


        </div>
    );
}
export default Header;