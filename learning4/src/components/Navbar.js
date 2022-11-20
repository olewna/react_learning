import React from "react";

export default function NavBar() {
    const name = "Mr"
    const lastname ="User"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {timeOfDay="morning"}
    else if (hours >= 12 && hours < 17) {timeOfDay="afternoon"}
    else {timeOfDay="evening"}
    
    return(
        <nav className="nav">
            <h1>Hello {name} {lastname}!</h1>
            <h3>It's {date.getHours()} o'clock.</h3>
            <h1>Good {timeOfDay}!</h1>
        </nav>
    );
}