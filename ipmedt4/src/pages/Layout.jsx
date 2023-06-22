import { Outlet, Link } from "react-router-dom";
import '../styles/BottomNavigationBar.css'
import '../styles/TopNavigationBar.css'


const Layout = () => {
    return (
        <>
            {/* Top Navbar */}
            <div className="top-navbar">
                <img src={'./icons/logo.svg'} alt="Logo" />
            </div>

            {/* Bottom Navbar */}
            <div >
                <ul className="bottom-navbar">
                    <Link to='/' >
                        <li className="selectedPage" >
                            <img src={'./icons/dashboard.svg'} alt="dashboard" />
                            <p>Performance</p>
                        </li>
                    </Link>
                    <Link to="/car">
                        <li>
                            <img src={'./icons/car.svg'} alt="dashboard" />
                            <p>Car</p>
                        </li>
                    </Link>
                    <Link className="`navbarLink" to='/Profile'>
                        <li>
                            <img src={'./icons/steering-wheel.svg'} alt="dashboard" />
                            <p>Bookings</p>
                        </li>
                    </Link>
                    <Link className="`navbarLink" to='/Profile'>
                        <li>
                            <img src={'./icons/message.svg'} alt="dashboard" />
                            <p>Messages</p>
                        </li>
                    </Link>
                    <Link className="`navbarLink" to='/Profile'>
                        <li >
                            <img src={'./icons/profile.svg'} alt="dashboard" />
                            <p>Profile</p>
                        </li>
                    </Link>
                </ul>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;