// document.querySelector("button").addEventListener("click", handleClick);    //when we click on first button,handleclick function will be called and popup will be shown
//
// function handleClick(){
//   alert("i got clicked");
// }

////OR  WE CAN DO USING ANONYMOUS FUNCTIONS
// document.querySelector("button").addEventListener("click", function (){
//   alert("i got clicked");
// });

alert("heyaa..!!.I am glad that you are here<3. This is just a small website where you can play with sounds. Click on the buttons to listen their sounds or use your corresponding keyboard keys to listen them and play around. Have fun..!!");


for(var i=0;i<7;i++){document.getElementsByClassName("drum")[i].addEventListener("click", handleClick);      // i<document.querySelectorAll(".drum").length
                      document.addEventListener("keydown",  keyboard);
                      }                                   //here, entire keyboard will be listening for any key press


function handleClick(){
// this.style.color="black";      this tells us which key is pressed by changing its colour;
var btn= this.innerHTML;
animation(btn);
switch (btn) {
  case "w":
  var audio1= new Audio('sounds/tom-1.mp3');
  audio1.play();
    break;
  case "a":
    var audio2= new Audio('sounds/tom-2.mp3');
    audio2.play();
  break;
  case "s":
    var audio3= new Audio('sounds/tom-3.mp3');
    audio3.play();
  break;
  case "d":
    var audio4= new Audio('sounds/tom-4.mp3');
    audio4.play();
  break;
  case "j":
    var audio5= new Audio('sounds/snare.mp3');
    audio5.play();
  break;
  case "k":
    var audio6= new Audio('sounds/crash.mp3');
    audio6.play();
  break;
  case "l":
    var audio7= new Audio('sounds/kick-bass.mp3');
    audio7.play();
  break;

  default:

}
 }


function keyboard(event){
  console.log(event);
   var btn= event.key;
   animation(btn);
    switch (btn) {
      case "w":
      var audi= new Audio('sounds/tom-1.mp3');
      audi.play();
        break;
      case "a":
        var audio2= new Audio('sounds/tom-2.mp3');
        audio2.play();
      break;
      case "s":
        var audio3= new Audio('sounds/tom-3.mp3');
        audio3.play();
      break;
      case "d":
        var audio4= new Audio('sounds/tom-4.mp3');
        audio4.play();
      break;
      case "j":
        var audio5= new Audio('sounds/snare.mp3');
        audio5.play();
      break;
      case "k":
        var audio6= new Audio('sounds/crash.mp3');
        audio6.play();
      break;
      case "l":
        var audio7= new Audio('sounds/kick-bass.mp3');
        audio7.play();
      break;

      default:



}
}


function animation(currentKey){
  var activeButton= document.querySelector("."+currentKey)   //we need to concatente it to get the class
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed");}, 100);       //removes that class after 100 ms

}
