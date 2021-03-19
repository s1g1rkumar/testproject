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

var scrollbtn1 = document.getElementById("scrollbtn1");
var scrollbtn2 = document.getElementById("scrollbtn2");
var scrollbtn3 = document.getElementById("scrollbtn3");
var scrollbtn4 = document.getElementById("scrollbtn4");
var scrollbtn5 = document.getElementById("scrollbtn5");

var first = document.getElementById('main-head');
var second = document.getElementById('Second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var contact = document.getElementById('contact');


 //console .log(heading.innerText); 
 scrollbtn1.addEventListener('click', function(){

   first.style.visibility = "visible";
   second.style.visibility = "hidden";
   third.style.visibility = "hidden";
   fourth.style.visibility = "hidden";
   contact.style.visibility = "hidden";
   //first.style .color= "green";
   scrollbtn1.style.color = "green";
   scrollbtn2.style.color = "#ff8800";
  scrollbtn3.style.color = "#ff8800";
  scrollbtn4.style.color = "#ff8800";
  scrollbtn5.style.color = "#ff8800";


  //scroll btn size increge
  

 });
 scrollbtn2.addEventListener('click', function(){

  first.style.visibility = "hidden";
  second.style.visibility = "visible";
  third.style.visibility = "hidden";
  fourth.style.visibility = "hidden";
  contact.style.visibility = "hidden";
  scrollbtn1.style.color = "#ff8800";
  scrollbtn2.style.color = "green";
  scrollbtn3.style.color = "#ff8800";
  scrollbtn4.style.color = "#ff8800";
  scrollbtn5.style.color = "#ff8800";
  //scrollbtn2.style.transition = "5s";



  


});
scrollbtn3.addEventListener('click', function(){

  first.style.visibility = "hidden";
  second.style.visibility = "hidden";
  third.style.visibility = "visible";
  fourth.style.visibility = "hidden";
  contact.style.visibility = "hidden";
  scrollbtn2.style.color = "#ff8800";
  scrollbtn1.style.color = "#ff8800";
  scrollbtn3.style.color = "green";
  scrollbtn4.style.color = "#ff8800";
  scrollbtn5.style.color = "#ff8800";

});
scrollbtn4.addEventListener('click', function(){

  first.style.visibility = "hidden";
  second.style.visibility = "hidden";
  third.style.visibility = "hidden";
  fourth.style.visibility = "visible";
  contact.style.visibility = "hidden";
  scrollbtn2.style.color = "#ff8800";
  scrollbtn1.style.color = "#ff8800";
  scrollbtn3.style.color = "#ff8800";
  scrollbtn4.style.color = "green";
  scrollbtn5.style.color = "#ff8800";
});
scrollbtn5.addEventListener('click', function(){

  first.style.visibility = "hidden";
  second.style.visibility = "hidden";
  third.style.visibility = "hidden";
  fourth.style.visibility = "hidden";
  contact.style.visibility = "visible";
  scrollbtn2.style.color = "#ff8800";
  scrollbtn1.style.color = "#ff8800";
  scrollbtn3.style.color = "#ff8800";
  scrollbtn4.style.color = "#ff8800";
  scrollbtn5.style.color = "green";
});

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
