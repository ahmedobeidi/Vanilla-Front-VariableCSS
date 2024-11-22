const root = document.documentElement;
const colorChanger = document.getElementById("chooser");
const header = document.getElementById("header");
const footer = document.getElementById("footer");

colorChanger.addEventListener("input", handleColorChangerButton);

function handleColorChangerButton() {
    root.style.setProperty('--bg-color', colorChanger.value);
}