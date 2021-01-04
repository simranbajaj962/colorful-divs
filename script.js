
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const purple = document.querySelector(".purple");

const center = document.querySelector(".center");

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

const colorChanger = (element,color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

colorChanger(red, getBGColor(red));
colorChanger(green, getBGColor(green));
colorChanger(blue, getBGColor(blue));
colorChanger(pink, getBGColor(pink));
colorChanger(purple, getBGColor(purple));