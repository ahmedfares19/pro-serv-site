window.onscroll = function () {
  myFunction();
};

var myHilitor = new Hilitor("text"); // id of the element to parse
console.log(myHilitor);
myHilitor.apply("نجاح");
// console.log(myHilitor.apply('instance'));

var arrow = document.querySelector(".laws__navigator__list");
let oldOffset = 550;
let objectTop = 0


function scrollToPoint(target) {
  const offSet =document.querySelector(target).offsetTop
  console.log("rr");
  $('html, body').animate({
    scrollTop: offSet - 50
}, 1000);
}

function myFunction() {

  if(window.pageYOffset > 550  ){
    objectTop += window.pageYOffset - oldOffset
    console.log({oldOffset});
    console.log(window.pageYOffset);   
    console.log(window.pageYOffset - oldOffset);
    console.log({objectTop});
    arrow.style.top = `${objectTop}px`;
    // console.log(arrow.style.top);
    oldOffset = window.pageYOffset;
    
  } else if(window.pageYOffset == 0 || objectTop < 550 ) {
    objectTop = 0
    arrow.style.top = `${objectTop}px`;
  } 
  
  // window.pageYOffset
  // arrow.style.top
}
