
function detectColorScheme(){

    if (localStorage.getItem("theme")) {
        console.log("Theme already set");
    } else if (!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("theme", "dark");
        console.log("theme set to dark");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        localStorage.setItem("theme", "light");
        console.log("theme set to light");
    } else {
        localStorage.setItem("theme", "light");
        console.log("theme set to light");
    }

    updateTheme()

}

function toggleDarkMode(){
    if(document.getElementById("dark-mode-toggle")){
        const toggle = document.getElementById("dark-mode-toggle").checked;
        localStorage.setItem("theme", toggle ? "dark" : "light");
    }
}


function updateTheme(){
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"))

}