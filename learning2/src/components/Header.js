import React from 'react';

const Header = () => {
    return (
      <header>
        <nav className="nav">
          <img src={require("../tak.png")} className="nav-img" alt="logos" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
}

export default Header