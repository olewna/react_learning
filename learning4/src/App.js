import React from "react";
import Contacts from "./components/Contacts";
// import Jokes from "./components/Jokes";
import NavBar from "./components/Navbar";
import jokesData from "./jokesData.js";
import Joke from "./components/Joke";

function App() {
  
  const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

  const jokes = jokesData.map(x => {
    return <Joke setup={x.setup} punchline={x.punchline} />
  })

  return (
    <div className="page">
      <NavBar />
      <Contacts />
      {jokes}
      {/* <Jokes /> */}
      <div className="colors">{colors.map(x => <h2>{x}</h2>)}</div>
    </div>
  );
}

export default App;
