import React from "react";
import data from "../data";

export default function Main(props) {
    return(
        <main className="main">
            <img src={props.imageUrl} />
            <div className="main-right">
                <div className="main-locate">
                    <img src={require("../pin.png")} />
                    <h5 className="main-place">{props.location}</h5>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="main-title">{props.title}</h1>
                <div className="main-date">{props.startDate}-{props.endDate}</div>
                <p className="main-description">{props.description}</p>
            </div>
        </main>
    )
}