const button = document.getElementById("toggleButton");
const box = document.getElementById("box");

button.addEventListener("click", function() {
    if (box.style.display === "none") {
        box.style.display = "block";
        button.textContent = "Close"; 
    } else {
        box.style.display = "none";
        button.textContent = "Open"; 
    }
});
