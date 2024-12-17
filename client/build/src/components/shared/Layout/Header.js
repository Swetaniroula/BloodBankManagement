import React from 'react';
import { BiSolidDonateBlood , BiUserCircle } from "react-icons/bi";
import { useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
const Header = () => {
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate()
    // logout handler
const handleLogin = () =>{
    localStorage.clear()
    alert("logout Successfully");
    navigate('/login');
}    
  return (
    <>
    <nav className="navbar">
        <div className="container-fluid">
            <div className="nav-bar-brand h1"><BiSolidDonateBlood color="red"/>Blood Bank App </div>
            <ul className="navbar-nav flex-row">
                <li className="nav-item mx-3">
                    <p className="nav-links"><BiUserCircle />Welcome{user?.name || user?.hospitalName || user?.organizationName}{" "} &nbsp;
                    <span class="badge text-bg-secondary">{user?.role}</span>
                    </p>
                </li>
                <li className="nav-item mx-3">
                    <button className="btn btn-danger" onClick={handleLogin}>Logout</button>
                </li>
            </ul>
        </div>
    </nav>
    </>
  );
};

export default Header;
