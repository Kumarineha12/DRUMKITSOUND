var numbeOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numbeOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        /*switch(buttonInnerHTML){
            case "w" :
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a" :
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
                
            case "s" :
                var tom3=new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;          
             case "d" :
               var tom4=new Audio("sounds/tom-4.mp3");
                        tom4.play();
                        break;                  
            case "j" :
             var crash=new Audio("sounds/crash.mp3");
                      crash.play();
                     break; 
             case "k" :
                    var snare=new Audio("sounds/snare.mp3");
                    snare.play();
                    break; 
            case "l" :
                    var kickbass=new Audio("sounds/kick-bass.mp3");
                    kickbass.play();
                    break;                               
                       
                       
        };
    });
};*/

makeSound(buttonInnerHTMl);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
});
function makeSound(key){
    switch(key){
        case "w" :
            var tom1=new Audio("tom-1.mp3");
            tom1.play();
            break;
        
        case "a" :
            var tom2=new Audio("tom-2.mp3");
            tom2.play();
            break;
            
        case "s" :
            var tom3=new Audio("tom-3.mp3");
                tom3.play();
                break;          
         case "d" :
           var tom4=new Audio("tom-4.mp3");
                    tom4.play();
                    break;                  
        case "j" :
         var crash=new Audio("crash.mp3");
                  crash.play();
                 break; 
         case "k" :
                var snare=new Audio("snare.mp3");
                snare.play();
                break; 
        case "l" :
                var kickbass=new Audio("kick-bass.mp3");
                kickbass.play();
                break;                               
                   
                   
    };
};

    


