document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
};

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        let selectedValue = document.getElementById("website").value;
        
        if (selectedValue) {
            window.location.href = selectedValue;
        }
    });
});