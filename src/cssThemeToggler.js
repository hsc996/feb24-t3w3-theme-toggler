console.log("CSS Theme toggler loaded and running!");

let themes = [
    {
        name: "dark",
        properties: {
            backgroundColour: "#534e4e",
            fontColour: "white",
            "theme-100": "#4641d1"
        }
    },
    {
        name: "light",
        properties: {
            backgroundColour: "87E0E0",
            fontColour: "black",
            "theme-100": "#87E0E0"
        }
    }
];

// Read theme name stored in local storage
// And update CSS variable based on that name
function getChosenTheme(){

}

function setChosenTheme(){

}
// Loop through properties key in chosen theme object
// And apply those properties to CSS
function updateCSSvariables(){

}

let rootElement = document.querySelector(":root");

function getVariablesFromCSS(){
    console.log(rootElement);

    // console.log(document.documentElement.style.getPropertyValue("--backgroundColour"));

    let rootStyles = getComputedStyle(rootElement);

    console.log(rootStyles.getPropertyValue("--backgroundColour"));
}

getVariablesFromCSS();