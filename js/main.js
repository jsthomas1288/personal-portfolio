const html = document.querySelector("html");
const selector = document.querySelector("#themes");
const menu = document.querySelector("#menu");
const toggle = document.querySelector("#toggle");
const ball = document.querySelector(".ball");
const switchBackground = document.querySelector(".switch");
const dropDown = document.querySelector(".switch-container");
const getThemeString = localStorage.getItem("theme");

const savedTheme = JSON.parse(getThemeString);
if (savedTheme === "dark") {
  html.classList.remove("light");
  ball.classList.remove("move-right");
  switchBackground.style.backgroundColor = "white";
  ball.style.backgroundColor = "#152a3e";
} else if (savedTheme === "light") {
  html.classList.add("light");
  ball.classList.add("move-right");
  switchBackground.style.backgroundColor = "#152a3e";
  ball.style.backgroundColor = "white";
}

// Desktop function to toggle between dark and light mode
selector.addEventListener("change", function (e) {
  let theme = e.target.value;
  if (theme === "dark") {
    html.classList.add("transition");
    html.classList.remove("light");
    const saveTheme = JSON.stringify(theme);
    localStorage.setItem("theme", saveTheme);
  } else if (theme === "light") {
    html.classList.add("transition");
    html.classList.add("light");
    const saveTheme = JSON.stringify(theme);
    localStorage.setItem("theme", saveTheme);
  }
});

// Mobile and Tablet versions to toggle between dark and light mode
menu.addEventListener("click", () => {
  dropDown.classList.toggle("hide");
  console.log(dropDown.classList.value);
});

// if (dropDown.classList.value === "switch-container") {
//   menu.innerHTML = '<i class="fa-regular fa-xmark-large"></i>';
// } else {
//   menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
// }

toggle.addEventListener("click", function () {
  if (html.classList.contains("light")) {
    html.classList.remove("light");
    html.classList.add("transition");
    ball.classList.remove("move-right");
    switchBackground.style.backgroundColor = "white";
    ball.style.backgroundColor = "#152a3e";
  } else {
    html.classList.add("light");
    html.classList.add("transition");
    ball.classList.add("move-right");
    switchBackground.style.backgroundColor = "#152a3e";
    ball.style.backgroundColor = "white";
  }
});
