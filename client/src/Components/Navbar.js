import React, { useEffect, useContext, useState } from "react";
import { TrackingContext } from "../Tracking";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext(TrackingContext);

  const navigation = [
    { title: "Home", path: "#" },
    { title: "Services", path: "#" },
    { title: "Contact Us", path: "#" },
    { title: "All Transactions", path: "#transactions" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav className={`navbar ${state ? "shadow" : ""}`}>
      <div className="navbar-container">
        <div className="menu-btn-container">
          <button className="menu-btn" onClick={() => setState(!state)}>
            {state ? (
              <img
                src="https://placekitten.com/24/24" // Replace with your actual icon URL for Nav1
                alt="Nav1 Icon"
              />
            ) : (
              <img
                src="https://placekitten.com/24/24" // Replace with your actual icon URL for Nav2
                alt="Nav2 Icon"
              />
            )}
          </button>
        </div>
      </div>
      <div className={`menu-items ${state ? "block" : "hidden"}`}>
        <ul>
          {navigation.map((item, idx) => (
            <li key={idx}>
              <a href={item.path} className="nav-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-1 items-center mt-6 md:mt-0 md:flex md:space-y-0">
          {currentUser ? (
            <p className="user-info">{currentUser.slice(0, 25)}..</p>
          ) : (
            <button onClick={() => connectWallet()} className="connect-button">
              Connect Wallet
              <img
                src="https://placekitten.com/24/24" // Replace with your actual icon URL for Nav3
                alt="Nav3 Icon"
              />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
