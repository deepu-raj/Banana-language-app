//var username = prompt("What is your name");
//var welcome = "Welcome "
//alert(welcome + username);
var btnClick = document.querySelector("#click-btn");
var textInput = document.querySelector("#textArea");
var outputText = document.querySelector("#output");
var url  = "https://api.funtranslations.com/translate/minion.json"

function translationURL(input){
    return url + "?text=" + input;
}

   
function clickEventHandler(){
    var inputText = textInput.value;
    
    fetch(translationURL(inputText))
    .then(response => response.json())
    .then(json=>{
        var translatedText = json.contents.translated
        outputText.innerText = translatedText
                }
        )
};
        
btnClick.addEventListener("click", clickEventHandler);