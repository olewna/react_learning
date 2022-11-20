import React from "react";

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={require("../earth.png")}  />
            <h1>my travel journey</h1>
        </nav>
    );
}