import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    
  </React.StrictMode>,
  document.getElementById('root')
);

var heading = document.getElementById("main-head");


// heading.addEventListener('click',fun(){
  
//  heading.style.visibility = "hidden";
//  console.log(heading.innerText);

// });



//  heading.style.visibility = "hidden";
//  console.log(heading.innerText);





















var animateButton = function(e) {
  
  //e.preventDefault;
//reset animation
e.target.classList.remove('animate');

e.target.classList.add('animate');
setTimeout(function(){
  e.target.classList.remove('animate');
},700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
bubblyButtons[i].addEventListener('click', animateButton, false);
}

//var homebtn = document.getElementsByClassName('First');


 // homebtn.style.visibility = 'visible';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
