const html = document.querySelector("html");
const selector = document.querySelector("#themes");
const getThemeString = localStorage.getItem("theme");

const savedTheme = JSON.parse(getThemeString);
if (savedTheme === "dark") {
  html.classList.remove("light");
} else if (savedTheme === "light") {
  html.classList.add("light");
}

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
