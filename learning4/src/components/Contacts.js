import React from "react";
import Contact from "./Contact";

export default function Contacts(){
    return(
        <div className="contacts">
        <Contact 
          image={require("../zdj1.jpg")}
          name="Mr.NumerUno"
          phone="483-294-921"
          email="dog.uno@ug.com"
        />
        <Contact 
          image={require("../zdj2.jpg")}
          name="Mr.NumeroDwa"
          phone="483-294-921"
          email="dog.dwa@ug.com"
        />
        <Contact 
          image={require("../zdj3.jpg")}
          name="Mr.NumerThree"
          phone="483-294-921"
          email="dog.three@ug.com"
        />
        <Contact 
          image={require("../zdj4.jpg")}
          name="Mr.NumerVier"
          phone="483-294-921"
          email="dog.vier@ug.com"
        />
      </div>
    );
}