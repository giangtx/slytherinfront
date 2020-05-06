import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App/>,document.getElementById('root'));




// Get the navbar

var navbar = document.getElementById("nav-sticky");
// Get the offset position of the navbar
if(navbar!=null){
    var sticky = navbar.offsetTop;
    window.onscroll = function() {
        myFunction()
    };
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


