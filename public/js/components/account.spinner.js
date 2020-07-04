


$("#flip-card-back").click(() => {
  flip();
});
$("#flip-card").click(() => {
  flip();
});

let processing = 0;
const flip = () => {
  processing += 1;
  if (processing > 1) {
  } else {
    var card = $(".flip-card-inner");
    if (card.hasClass("spin")) {
      card.removeClass("spin").addClass("spin-back");

      $(".flip-card-front").css("display", "block");
      setTimeout(() => {
        $(".flip-card-back").css("display", "none");
        processing = 0;
      }, 2000);
    } else if (card.hasClass("spin-back")) {
      $(".flip-card-back").css("display", "block");
      card.removeClass("spin-back").addClass("spin");
      setTimeout(() => {
        $(".flip-card-front").css("display", "none");
        processing = 0;
      }, 2000);
    } else {
      card.addClass("spin");
      $(".flip-card-back").css("display", "block");
      setTimeout(() => {
        $(".flip-card-front").css("display", "none");
        processing = 0;
      }, 2000);
    }
  }
};

$("#login-show").click(() => {
  var fCard = $(".flip-card");
  var card = $(".flip-card-inner");
  if (card.hasClass("spin")) {
    card.removeClass("spin").addClass("spin-back");

    $(".flip-card-front").css("display", "block");
    setTimeout(() => {
      $(".flip-card-back").css("display", "none");
      processing = 0;
    }, 2000);
  }
  fCard.removeClass("hide-card");
  $(".dim").css("display", "block");
  fCard.addClass("show-card");
});

$(".card-controller i").click(() => {
  var card = $(".flip-card-inner");

  card.removeClass("spin-back");
  var fCard = $(".flip-card");
  console.log("hide");
  fCard.removeClass("show-card");
  fCard.addClass("hide-card");
  setTimeout(() => {
    $(".dim").css("display", "none");
  }, 650);
});



