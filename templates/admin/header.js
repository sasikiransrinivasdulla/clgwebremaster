let button = document.getElementById("button");
let flag = false;
let icon = document.getElementById("changeItem");
let menu = document.getElementById("menuItems");
menu.style.display="none";
button.addEventListener("click", function() {
    console.log(menu);
    if (flag === false) {
        icon.classList.remove("fa-solid", "fa-bars");
        icon.classList.add("fa-solid", "fa-xmark");
        menu.style.display="block";
        flag = true;
    } else {
        icon.classList.remove("fa-solid", "fa-xmark");
        icon.classList.add("fa-solid", "fa-bars");
        menu.style.display="none";
        flag = false;
    }
});
document.addEventListener('click', function(event) {
    const menuItems = document.getElementById('smallMenuItems');
    if (!menuItems.contains(event.target)) {
        console.log("hello");

        if(flag === true) {
            icon.classList.remove("fa-solid", "fa-xmark");
            icon.classList.add("fa-solid", "fa-bars");
            menu.style.display="none";
            flag = false;
        }
    }
});
