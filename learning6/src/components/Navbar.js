import React from "react";

export default function Navbar() {

    // const hours = (new Date).getHours()
    // const [timeOfDay, setTimeOfDay] = React.useState()

    // function greeting() {
    //     if (hours>=4 && hours<12) {
    //         setTimeOfDay("morning")
    //     } else if (hours >=12 && hours < 16) {
    //         setTimeOfDay("afternoon")
    //     } else if (hours >= 16 && hours < 22) {
    //         setTimeOfDay("evening")
    //     } else setTimeOfDay("night")
    // }

    return(
        <nav className="nav">
            <img src={require("../trollface.png")} />
            <h1 className="nav-title">Meme Generator</h1>
            {/* <h3 className="nav-greet">Good {}</h3> */}
        </nav>
    );
}