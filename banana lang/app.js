//var username = prompt("What is your name");
//var welcome = "Welcome "
//alert(welcome + username);
var btnClick = document.querySelector("#click-btn");
var textInput = document.querySelector("#textArea");
var outputText = document.querySelector("#output");
var rem = 0;

function leapYear(a) {
    rem = a % 4;
    if (rem === 0) {
        rem = a % 100;
        if (rem != 0) {
            rem = "This is a leap year";
        } else {
            rem = a % 400;
            if (rem === 0) {
                rem = "This is a leap year";
            } else {
                rem = "This is not a leap year";
            }
        }

    } else {
        rem = "This is not a leap year"
    }

}

function clickEventHandler() {
    leapYear(textInput.value);
    outputText.innerText = rem;
};

btnClick.addEventListener("click", clickEventHandler);