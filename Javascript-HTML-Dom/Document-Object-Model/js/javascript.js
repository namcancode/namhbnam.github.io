function changeFontSize(x) {
  var text = document.getElementsByClassName("text")
  for (var i = 0; i <= 2; i++) {
   text[i].style.fontSize = x;
  }
  return parseInt(x)
}

function increaseFontSize(paragraph) {
  var call = document.getElementById(paragraph).style.fontSize;
  console.log (call);
  call = parseInt(call);
  if (call<30){
  var size = document.getElementById(paragraph).style.fontSize = call + 1 + "px"
  }
  return size
}

function decreaseFontSize(paragraph) {
  var call = document.getElementById(paragraph).style.fontSize;
  console.log (call);
  call = parseInt(call);
  if (call > 10){
  var size = document.getElementById(paragraph).style.fontSize = call - 1 + "px"
  }
  return size
}

function changeColor(){
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  var p3 = document.getElementById("p3");
  p1.style.color = "blue";
  p2.style.color = "yellow";
  p3.style.color = "red";
}

function changeBgColor(color){
  var p = document.querySelectorAll("p")
  p.style.backgroundColor = color;
}