import React from "react";

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="left-nav">
                <img src={require("../hanging.png")}/>
                <h2>Oskarowa_Strona</h2>
            </div>
            <ul className="nav-list">
                <li>Rekrutacja</li>
                <li>Pomoc</li>
                <li>Zaloguj się</li>
            </ul>

        </nav>
    );
}