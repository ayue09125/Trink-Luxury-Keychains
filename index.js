
console.log("hello")

document.addEventListener('DOMContentLoaded', function() {
    let navigator = false;
    document.getElementById("extra-button").addEventListener("click", function() {
        console.log("click");
        if (navigator == false) {
            document.getElementById("navigator").style.height = "100vh";
            document.getElementById("navigator").classList.add("slide-down");
            document.getElementById("navigator").classList.remove("slide-up");
            document.querySelector(".header").style["background-color"] = "rgba(251, 251, 234, 1)";
            navigator = true;


            setTimeout(() => {
                document.querySelectorAll(".navigator-column").forEach(element => {
                    element.classList.add("fade-in");
                    element.classList.remove("fade-out");
                    element.style.opacity = 1;
                });
            }, 500)
            
        }
        else {
            document.querySelectorAll(".navigator-column").forEach(element => {
                element.classList.add("fade-out");
                element.classList.remove("fade-in");
                element.style.opacity = 0;
            });

            setTimeout(() => {
                document.getElementById("navigator").style.height = "0vh";
                document.getElementById("navigator").classList.remove("slide-down");
                document.getElementById("navigator").classList.add("slide-up");
                navigator = false;
                setTimeout( () => {
                    document.querySelector(".header").style["background-color"] = "rgba(251, 251, 234, 0.6)";
                }, 450)
            }, 200);
        }
    });

    let searching = false;
    document.getElementById("search-button").addEventListener("click", function() {
        searchFormInput = document.getElementById("search-form-input");
        if (searching == false) {
            searchFormInput.classList.add("extend");
            searchFormInput.classList.remove("detract");
            searchFormInput.style.width = "10rem";
            searchFormInput.style.padding = "0.5rem";
            searching = true;
        }
        else {
            searchFormInput.classList.add("detract");
            searchFormInput.classList.remove("extend");
            searchFormInput.style.width = "0rem";
            searchFormInput.style.padding = "0rem";
            searching = false;
        }
    });

    window.addEventListener("resize", () => {
        resizeAll();
    });
});

function resizeAll() {
    let width = window.innerWidth;

    if (width < 1200) {
        resizeGrid("categories", 2, 2);
    }
    if (width >= 1200) {
        resizeGrid("categories", 1, 4);
    }
}

function resizeGrid(name, row, col) {
    // console.log("resize !!!!!!!!!!!");
    document.getElementById(name).style.gridTemplateRows = "repeat(" + row + ", 1fr)";
    document.getElementById(name).style.gridTemplateColumns = "repeat(" + col + ", 1fr)";
}