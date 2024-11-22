const root = document.documentElement;
const colorChanger = document.getElementById("chooser");

colorChanger.addEventListener("input", handleColorChangerButton);

function handleColorChangerButton() {
    root.style.setProperty('--bg-color', colorChanger.value);
}