console.log("JavaScript file successfully linked!");

document.title = "This is My Website";

document.addEventListener("click", function(event) {
    console.log("User clicked at X:", event.clientX, "Y:", event.clientY);
});
