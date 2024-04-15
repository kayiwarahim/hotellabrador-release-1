function msg() { alert("Thank you for booking with us"); } 
function msg1() { alert("Thank you for contacting Hotel Labrador"); } 
function msg2() { confirm("Are you sure you want to book? "); 
msg()
} 

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("show");
    });
});