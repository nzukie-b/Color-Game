var numOfSquares = 6;
var colors = [];
var goalColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    modeBtnSetup();
    initSquares();
    resetButton.addEventListener("click", reset);
    reset();
}

function modeBtnSetup() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Novice") {
                numOfSquares = 3
             } else if(this.textContent === "Advanced") {
                 numOfSquares = 6;
             } else {
                 numOfSquares = 9;
             }
            reset();
        })
    }
}
function initSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor === goalColor) {
                messageDisplay.textContent = "Correct"
                changeColor(this.style.backgroundColor)
                h1.style.backgroundColor = goalColor;
                resetButton.textContent = "Play Again?"
            }
            else {
                messageDisplay.textContent = "Try Again"
                this.style.backgroundColor = "#232323";
            }
        })
    }
}

function reset() {
    resetButton.textContent = "New Colors";
    colors = createColors(numOfSquares);
    goalColor = pickColor();
    colorDisplay.textContent = goalColor;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}




function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function createColors(num) {
    var colorArray = [];
    for (var i = 0; i < num; i++) {
        colorArray.push(randomColor());
    }
    return colorArray;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}