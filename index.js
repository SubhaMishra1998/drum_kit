//Works on keypress and detects keypress and behaves accodingly


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    animationButton(event.key);
});


//Works on the clicks and behaves accordingly

for (var i = 0; i < 8; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        animationButton(buttonInnerHtml);
        makeSound(buttonInnerHtml);
        

    });
}




// Makesound function which does the actual work by calling the playing the audio

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;


        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;


        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

       
    }

}


function animationButton(currentKey){
    var activeButton= document.querySelector("."+ currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    

}

