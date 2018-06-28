const transparent =  document.querySelector('.transparent-1');
function tooltip(e) {
// console.log(e.target);
    let coorW = window.innerHeight - e.screenY +document.querySelector('.list__card').offsetTop -20;
    let coorH = window.innerWidth - e.screenX;
  if(coorW > transparent.offsetHeight){
    transparent.setAttribute("style",`opacity:1; visibility:visible;top:${e.clientY+20}px; left:${e.clientX+20}px;`);
    console.log('coorW :', coorW);
 console.log('transparent.offsetHeight :', transparent.offsetHeight);;
  }else if(coorW < transparent.offsetHeight){
    transparent.setAttribute("style",`opacity:1; visibility:visible;top:${e.clientY-20-transparent.offsetHeight}px; left:${e.clientX-230 -transparent.offsetHeight}px;`);
  }
//    if(coorH<transparent.offsetWidth){
//     transparent.setAttribute("style",`opacity:1; visibility:visible;top:${e.clientY+20}px; left:${e.clientX-20}px;transform: translateX(-100%)`);
// //     console.log('coorH :', coorH);
// //    console.log('transparent.offsetWidth :', transparent.offsetWidth);
//     }else{
//       transparent.setAttribute("style",`opacity:1; visibility:visible;top:${e.clientY+20}px; left:${e.clientX+20}px`);
//     }




}
function tooltip2(e) {
    transparent.setAttribute("style",`top:0px; left:0px; opacity:0; visibility:hidden`)
}

document.querySelector('.list__card').addEventListener('mousemove', tooltip);
document.querySelector('.list__card').addEventListener('mouseout', tooltip2);