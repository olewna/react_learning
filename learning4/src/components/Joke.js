import React from "react";

export default function Joke(props) {
    const [showed, setShowed] = React.useState(false)
    function toggle(){
        setShowed(prev => !prev)
    }
    return (
        <div className="joke">
            {props.setup && <h3 className="setup">Setup: {props.setup}</h3>}
            {showed && <p className="punchline">Punchline: {props.punchline}</p>}
            {props.likes && <h5 className="likes">Likes: {props.likes}</h5>}
            <button className="button-punchline" onClick={() => toggle()}>{!showed ? "Show" : "Hide"} Punchline</button>
        </div>
    )
}