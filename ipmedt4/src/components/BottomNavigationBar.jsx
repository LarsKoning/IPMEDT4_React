import React from 'react';
import '../styles/BottomNavigationBar.css';
import dashboard from '../icons/dashboard.svg';
import cars from '../icons/car.svg';
import Bookings from '../icons/steering-wheel.svg';
import Messages from '../icons/message.svg';
import Profile from '../icons/profile.svg';

const BottomNavigationBar = () => {
  return (
    <div className="bottom-navbar">
      <ul>
        <li>
            <img src={dashboard} alt="dashboard" />
            <a>Performance</a>
        </li>
        <li>
        <img src={cars} alt="dashboard" />
          <a>Card</a>
        </li>
        <li>
        <img src={Bookings} alt="dashboard" />
          <a>Bookings</a>
        </li>
        <li>
        <img src={Messages} alt="dashboard" />
          <a>Messages</a>
        </li>
        <li>
        <img src={Profile} alt="dashboard" />
          <a>Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavigationBar;
