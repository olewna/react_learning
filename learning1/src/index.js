import React from 'react';
import ReactDOM from 'react-dom';

// first steps

// ReactDOM.render(
//   <ul>yyy coś
//   <li>jeden</li>
//   <li>dwa</li>
//   </ul>
//   ,document.getElementById("root"))

// first component

// function MainContent() {
//   return <h1>I'm having fun!</h1>
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// )

// imperative style - by vanilla js

// const h1 = document.createElement("h1")
// h1.textContent = "content"
// h1.className = "header"
// document.getElementById("root").append(h1)

// document.getElementById('root').append(page) shows [object Object] on the page

// react:
// const x = React.createElement("h1",{className:"header"},"some text")
// ReactDOM.render(x, document.getElementById('root'))

//challange

const navig = (
    <nav>
        <h1>Best Website ever</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
ReactDOM.render(navig,document.getElementById('root'))
