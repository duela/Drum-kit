
document.addEventListener("keydown",function(whichKey){
  makeSound(whichKey.key);
  buttonAnimation(whichKey.key);

});
const x = document.querySelectorAll(".drum");
for (let i = 0; i < x.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function(){
   var buttonTextConent = this.textContent;
   makeSound(buttonTextConent);
   buttonAnimation(buttonTextConent);
 });
}

function makeSound(key){
  switch (key) {
    case "w":
     var crash = new Audio("sounds/crash.mp3").play();
     break;
     case "a":
      var kick = new Audio("sounds/kick-bass.mp3").play();
      break;
      case "s":
       var snare = new Audio("sounds/snare.mp3").play();
       break;
       case "d":
        var tom1 = new Audio("sounds/tom-1.mp3").play();
        break;
        case "j":
         var tom2 = new Audio("sounds/tom-2.mp3").play();
         break;
         case "k":
          var tom3 = new Audio("sounds/tom-3.mp3").play();
          break;
          case "l":
           var tom4 = new Audio("sounds/tom-4.mp3").play();
           break;
    default: console.log(key);

  }
}
// Add effect to addEventListener by adding class with animation style
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); // Add class
  setTimeout(() => {
  activeButton.classList.remove("pressed"); // remove class
}, 100);

}










// document.addEventListener("keydown",function(whichKey){
//   var theKey = whichKey.key;
//     if (theKey === "w") {
//       var crash = new Audio("sounds/crash.mp3").play();
//     }
//     else if (theKey === "a") {
//       var kick = new Audio("sounds/kick-bass.mp3").play();
//     }
//     else if (theKey === "s") {
//       var snare = new Audio("sounds/snare.mp3").play();
//     }
//     else if (theKey === "d") {
//       var tom1 = new Audio("sounds/tom-1.mp3").play();
//     }
//     else if (theKey === "j") {
//       var tom2 = new Audio("sounds/tom-3.mp3").play();
//     }
//     else if (theKey === "k") {
//       var tom3 = new Audio("sounds/tom-3.mp3").play();
//     }
//     else if (theKey === "l") {
//       var tom4 = new Audio("sounds/tom-4.mp3").play();
//     }
//     else{
//         console.log(theKey);
//     }
//
// });
//
//
//
// const x = document.querySelectorAll(".drum");
// function handleClick(){
//   var buttonTextContent = this.textContent;
//   switch (buttonTextContent) {
//     case "w":
//      var crash = new Audio("sounds/crash.mp3").play();
//      break;
//      case "a":
//       var kick = new Audio("sounds/kick-bass.mp3").play();
//       break;
//       case "s":
//        var snare = new Audio("sounds/snare.mp3").play();
//        break;
//        case "d":
//         var tom1 = new Audio("sounds/tom-1.mp3").play();
//         break;
//         case "j":
//          var tom2 = new Audio("sounds/tom-2.mp3").play();
//          break;
//          case "k":
//           var tom3 = new Audio("sounds/tom-3.mp3").play();
//           break;
//           case "l":
//            var tom4 = new Audio("sounds/tom-4.mp3").play();
//            break;
//     default: console.log(buttonTextContent);
//
//   }
// }
// for (let i = 0; i < x.length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener('click', handleClick);
// }
// document.addEventListener("keydown",function(whichKey){
//   console.log(whichKey.key);
//
// });
//






















// function handleClick(){
//   alert("Dem click me");
// }
// function crash() {
//   crash = new Audio("sounds/crash.mp3").play();
//
// }
// document.querySelectorAll(".drum")[0].addEventListener('click', crash);
//
// function kick() {
//  kick = new Audio("sounds/kick-bass.mp3").play();
//
// }
// document.querySelectorAll(".drum")[1].addEventListener('click', kick);
//
// function snare() {
//  snare = new Audio("sounds/snare.mp3").play();
//
// }
// document.querySelectorAll(".drum")[2].addEventListener('click', snare);
//
// function tom1() {
//   tom1 = new Audio("sounds/tom-1.mp3").play();
//
// }
// document.querySelectorAll(".drum")[3].addEventListener('click', tom1);
//
// function tom2() {
//   tom2 = new Audio("sounds/tom-2.mp3").play();
//
// }
// document.querySelectorAll(".drum")[4].addEventListener('click', tom2);
//
// function tom3() {
//   tom3 = new Audio("sounds/tom-3.mp3").play();
//
// }
// document.querySelectorAll(".drum")[5].addEventListener('click', tom3);
//
// function tom4() {
//   tom4 = new Audio("sounds/tom-4.mp3").play();
//
// }
// document.querySelectorAll(".drum")[6].addEventListener('click', tom4);
//

  // function allButtons (){
  //
  //     document.querySelectorAll(".w")[0].addEventListener('click', crash);
  //
  // }
  // allButtons();


  // const x = document.querySelectorAll("button");
  // console.log(x)
  // for (let i = 0; i < x.length; i++) {
  //   document.querySelectorAll("button")[i].addEventListener('click', handleClick);
  // }

    // var y = "document.querySelectorAll('button')";
  //

// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll('button')[1].addEventListener('click', handleClick);


// function allButtons (){
//
//   f
//
// }
// allButtons();
