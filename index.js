function playDrum(key){
    switch(key){
        case "w":
                new Audio("./sounds/crash.mp3").play();
                break;
            
            case "a":
                new Audio("./sounds/snare.mp3").play();
                break;

            case "s":
                new Audio("./sounds/tom-3.mp3").play();
                break;    
                
            case "d":
                new Audio("./sounds/tom-4.mp3").play();
                break;

            case "j":
                new Audio("./sounds/tom-1.mp3").play();
                break;

            case "k":
                new Audio("./sounds/kick-bass.mp3").play();
                break;
            
            case "l":
                new Audio("./sounds/tom-2.mp3").play();
                break;

            default:
                console.log(event.key+" is not a valid input");
    }
};

document.addEventListener("keydown",function(event){
    playDrum(event.key);
    btnAnimation(event.key);
});

var numOfbuttons = document.querySelectorAll(".drum").length;

for( var btn=0; btn<numOfbuttons;btn++){
    document.querySelectorAll(".drum")[btn].addEventListener("click",function(){
        var btnInnerHTML =  this.innerHTML;
        playDrum(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    })
}

function btnAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}