function changeFontSize(x) {
    var text = document.getElementsByClassName("text")
    for (var i = 0; i <= 2; i++) {
     text[i].style.fontSize = x;
    }
    return parseInt(x)
  }
  //console.log(changeFontSize("20px"))
  
  function increaseFontSize(paragraph) {
    var call = document.getElementById(paragraph).style.fontSize;
    console.log (call);
    call = parseInt(call);
    if (call<30){
    var size = document.getElementById(paragraph).style.fontSize = call + 1 + "px"
    }
    return size
  }
  //console.log(increaseFontSize("p1"))
  
  function decreaseFontSize(paragraph) {
    var call = document.getElementById(paragraph).style.fontSize;
    console.log (call);
    call = parseInt(call);
    if (call > 10){
    var size = document.getElementById(paragraph).style.fontSize = call - 1 + "px"
    }
    return size
  }
  //console.log(decreaseFontSize("p1"))

  function changeColor(){
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");
    p1.style.color = "blue";
    p2.style.color = "yellow";
    p3.style.color = "red";
  }
  //console.log(changeColor(""))
  
  function changeBgColor(color){
  document.body.style.backgroundColor = color;
}
//console.log(changeBgColor("red"))

function copyContent(){
  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  p1.innerHTML = p2.innerHTML
}
//console.log(copyContent())