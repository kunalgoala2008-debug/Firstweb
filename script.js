// Preloader

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("preloader").style.opacity="0";

setTimeout(function(){

document.getElementById("preloader").style.display="none";

},800);

},2500);

});

window.addEventListener("scroll",function(){

const nav=document.querySelector("nav");

nav.classList.toggle("scrolled",window.scrollY>40);

});  


