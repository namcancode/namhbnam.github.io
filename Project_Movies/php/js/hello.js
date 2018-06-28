const transparent = document.querySelector('.transparent-1');
const listCard = document.querySelector('.list__card')

function tooltip(e) {
  // console.log(e.target);
  let heightTransparent = transparent.offsetHeight;
  let widthTransparent = transparent.offsetWidth;
  let coorH = window.innerHeight - e.clientY -20;
  let coorW = window.innerWidth -  e.clientX -28;
  // console.log('window :',window.innerHeight, heightTransparent);
  // console.log('coorH :', coorH);
  if (coorH >= heightTransparent) {
    transparent.setAttribute("style", `display: grid;opacity:1; visibility:visible;top:${e.clientY+20}px; left:${e.clientX+20}px;`);
  } else{
    transparent.setAttribute("style", `display: grid;opacity:1; visibility:visible;top:${e.clientY-20-heightTransparent}px; left:${e.clientX-230 -heightTransparent}px;`);
  };
  if(coorW < widthTransparent){
    transparent.setAttribute("style",`display: grid;opacity:1; visibility:visible;top:${e.clientY+20}px; left:${e.clientX-20}px;transform: translateX(-100%)`);
    }
}

function tooltip2(e) {
  transparent.removeAttribute("style");
  // console.clear();
}

document.querySelectorAll('.card__pic').forEach(a=>a.addEventListener('mousemove', tooltip));
document.querySelectorAll('.card__pic').forEach(a=>a.addEventListener('mouseout', tooltip2));