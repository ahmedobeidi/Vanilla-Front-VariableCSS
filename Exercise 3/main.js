const root = document.documentElement;
const spacingInput = document.getElementById("spacingInput");
const blurInput = document.getElementById("blurInput");
const colorsInput = document.getElementById("colorsInput");

spacingInput.addEventListener('input', handleSpacing);
colorsInput.addEventListener("input", handleChangeColor);
blurInput.addEventListener('input', handleBlur);


function handleSpacing() {
    root.style.setProperty('--spacing', spacingInput.value + "vh");
}

function handleBlur() {
    root.style.setProperty('--blur', blurInput.value + "vh");

}

function handleChangeColor() {
    root.style.setProperty('--color', colorsInput.value);
}