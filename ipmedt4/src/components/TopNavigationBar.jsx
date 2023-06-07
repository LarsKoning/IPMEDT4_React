import React from 'react';
import '../styles/TopNavigationBar.css';
import Icon from '../icons/logo.svg';


const TopNavigationBar = () => {
  return (
    <div className="top-navbar">
      <img src={Icon} alt="Logo" />
    </div>
  );
};

export default TopNavigationBar;
