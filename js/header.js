let button = document.getElementById("button");
let flag = 0;
let icon = document.getElementById("changeItem");
let menu = document.getElementById("menuItems");
button.addEventListener("click", function() {
    if (flag === 0) {
        icon.classList.remove("fa-solid", "fa-bars");
        icon.classList.add("fa-solid", "fa-xmark");
        menu.classList.toggle("small-navbar-menu-navbar");
        flag = 1;
    } else {
        icon.classList.remove("fa-solid", "fa-xmark");
        icon.classList.add("fa-solid", "fa-bars");
        menu.classList.toggle("small-navbar-menu-navbar");
        flag = 0;
    }
});
const gradient = "linear-gradient(to bottom, black, rgba(0,0,0,0))";
document.addEventListener('DOMContentLoaded', function () {
    const navdiv = document.querySelector('.fixed-top');
    const navbar = document.querySelector('.navbar');
    const navbar2 = document.querySelector('.navbar-expand-lg');
    const navbar2ndLarge = document.querySelector('#second-large-navbar');
    const nav2text = document.getElementById("nav-bar2-text");
    const nav2text2 = document.getElementById("nav-bar2-text2");
    const nav2text3= document.getElementById("nav-bar2-text3");
    const nav2text4 = document.getElementById("nav-bar2-text4");
    const nav2text5= document.getElementById("nav-bar2-text5");
    const nav2text6= document.getElementById("nav-bar2-text6");
    const nav2text7= document.getElementById("nav-bar2-text7");
    const nav2text8= document.getElementById("nav-bar2-text8");
    const showDiv = document.querySelector('.placement-content');
    navbar.style.backgroundColor ='transparent';
    navbar2.style.backgroundColor = "transparent";
    navbar2ndLarge.style.backgroundColor="transparent";
    navdiv.style.backgroundImage=gradient;
    let hasVisitedShowDiv = false;
function updateNavbarBackground() {
    if (!hasVisitedShowDiv && isInViewport(showDiv)) {
        const navelement=document.getElementById('second-large-navbar');
        navbar.style.backgroundColor = '#b1040e'; 
        navbar2ndLarge.style.backgroundColor='white';
        nav2text.classList.remove("hover-underline-animation");
        nav2text.classList.add("hover-underline-animation-1");
        nav2text.style.color="black";
        nav2text2.classList.remove("hover-underline-animation");
        nav2text2.classList.add("hover-underline-animation-1");
        nav2text2.style.color="black";
        nav2text3.classList.remove("hover-underline-animation");
        nav2text3.classList.add("hover-underline-animation-1");
        nav2text3.style.color="black";
        nav2text4.classList.remove("hover-underline-animation");
        nav2text4.classList.add("hover-underline-animation-1");
        nav2text4.style.color="black";
        nav2text5.classList.remove("hover-underline-animation");
        nav2text5.classList.add("hover-underline-animation-1");
        nav2text5.style.color="black";
        nav2text6.classList.remove("hover-underline-animation");
        nav2text6.classList.add("hover-underline-animation-1");
        nav2text6.style.color="black";
        nav2text7.classList.remove("hover-underline-animation");
        nav2text7.classList.add("hover-underline-animation-1");
        nav2text7.style.color="black";
        nav2text8.classList.remove("hover-underline-animation");
        nav2text8.classList.add("hover-underline-animation-1");
        nav2text8.style.color="black";
        navelement.classList.add("shadow-lg");
        hasVisitedShowDiv = false; 
    }
}

    updateNavbarBackground();
    window.addEventListener('scroll', updateNavbarBackground);
});