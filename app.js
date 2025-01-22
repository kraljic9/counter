let count = 0;

// Select value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// App functionality

// Looping over the buttons so we can check the classes on all of them at once
btns.forEach(function (btn) {
  // Creating a click even to increase, decrease and reset the value
  btn.addEventListener("click", function () {
    if (btn.classList.contains("decrease")) {
      count -= 1;
    } else if (btn.classList.contains("increase")) {
      count += 1;
    } else {
      count = 0;
    }

    // Changeing colors when the value is negative it will turn red, when the value is positive it will turn green, when it is zero it will go back to black

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }

    // Update the counter on the webpage
    value.textContent = count;
  });
});
