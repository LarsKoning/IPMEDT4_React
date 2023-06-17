import { Outlet, Link } from "react-router-dom";
import '../styles/TopNavigationBar.css';
import '../styles/BottomNavigationBar.css';

const Layout = () => {
    return (
        <>
            {/* Top Navbar */}
            <div className="top-navbar">
                <img src={'./icons/logo.svg'} alt="Logo" />
            </div>

            {/* Bottom Navbar */}
            <div className="bottom-navbar">
                <ul>
                    <li>
                        <img src={'./icons/dashboard.svg'} alt="dashboard" />
                        <a>Performance</a>
                    </li>
                    <li>
                        <img src={'./icons/car.svg'} alt="dashboard" />
                        <a>Car</a>
                    </li>
                    <li>
                        <img src={'./icons/steering-wheel.svg'} alt="dashboard" />
                        <a>Bookings</a>
                    </li>
                    <li>
                        <img src={'./icons/message.svg'} alt="dashboard" />
                        <a>Messages</a>
                    </li>
                    <li>
                        <img src={'./icons/profile.svg'} alt="dashboard" />
                        <a>Profile</a>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;