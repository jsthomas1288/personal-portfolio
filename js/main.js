const html = document.querySelector("html");
const selector = document.querySelector("#themes");

selector.addEventListener("change", function (e) {
  let theme = e.target.value;
  if (theme === "dark") {
    html.classList.remove("light");
    // console.log("yes");
  } else if (theme === "light") {
    html.classList.add("light");
    // console.log("no");
  }
});
