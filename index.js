/// aqui el .drum es porque en el html tiene la clase .drum xd para que sea seguro
//y no manejar todos los botones

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInner = this.innerHTML;
    tecla(buttonInner);
    buttonAnimation(buttonInner);
  });
}
document.addEventListener("keydown", function (event) {
  tecla(event.key);
  buttonAnimation(event.key);
});

function tecla(teclita) {
  switch (teclita) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      break;
  }
}
function buttonAnimation(currentKey) {
  var tecla = document.querySelector("." + currentKey);

  tecla.classList.add("pressed");
  setTimeout(function () {
    tecla.classList.remove("pressed");
  }, 100);
}
