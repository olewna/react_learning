import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data";

function App() {

  const places = data.map(x => {
    return(
      <Main  
        {...x}
      />
    )
  })

  return (
    <div className="page">
      <Navbar />
      {places}
    </div>
  );
}

export default App;
