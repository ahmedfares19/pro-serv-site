window.onscroll = function() {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector(".nav-wrapper");
var social = document.querySelector(".social-media-side-bar");
var arrow = document.querySelector(".to-the-top");

// Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  // console.log(window.pageYOffset);
  if (window.pageYOffset > 60) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.pageYOffset > 1600) {
    // window.pageYOffset = 0;
    arrow.classList.add("to-the-top-show");
  } else {
    arrow.classList.remove("to-the-top-show");
  }
  if (window.pageYOffset > 560) {
    // console.log("show socail");
    social.classList.add("social-media-show");
  } else {
    social.classList.remove("social-media-show");
  }
}
