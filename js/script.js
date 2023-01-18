if ($(window).width() < 577) {
  $(".section-title p").css("font-size", "1.6rem");
  $(".section-title span").css({
    height: "0.15rem",
    width: "2rem",
  });
  $("#last").css("margin-top", "12px");
  $(".about-desc").removeClass("display-4");
  $(".about-desc").addClass("display-5");
} else if ($(window).width() < 769) {
  $(".section-title p").css("font-size", "1.75rem");
  $(".about-desc").removeClass("display-4");
  $(".about-desc").addClass("display-5");
  $(".section-title span").css({
    height: "0.2rem",
    width: "2.5rem",
  });
} else if ($(window).width() < 992) {
  $(".section-title p").css("font-size", "2rem");
  $(".about-desc").removeClass("display-5");
  $(".about-desc").addClass("display-4");
  $(".section-title span").css({
    height: "0.3rem",
    width: "3rem",
  });
} else {
  $(".section-title p").css("font-size", "2.5rem");
  $(".about-desc").removeClass("display-5");
  $(".about-desc").addClass("display-4");
  $(".section-title span").css({
    height: "0.35rem",
    width: "3.5rem",
  });
}

$(window).resize(function () {
  if ($(window).width() < 577) {
    $("#responsive").removeClass("btn-group");
    $("#responsive").addClass("btn-group-vertical");
    $(".custom-size").addClass("btn-sm");
    $(".section-title p").css("font-size", "1.6rem");
    $(".about-desc").removeClass("display-4");
    $(".about-desc").addClass("display-5");
    $(".section-title span").css({
      height: "0.15rem",
      width: "2rem",
    });
  } else if ($(window).width() < 769) {
    $("#responsive").addClass("btn-group");
    $("#responsive").removeClass("btn-group-vertical");
    $(".custom-size").removeClass("btn-sm");
    $(".custom-size").removeClass("btn-lg");
    $(".custom-size").addClass("btn-md");
    $(".section-title p").css("font-size", "1.75rem");
    $(".about-desc").removeClass("display-4");
    $(".about-desc").addClass("display-5");
    $(".section-title span").css({
      height: "0.2rem",
      width: "2.5rem",
    });
  } else if ($(window).width() < 992) {
    $("#responsive").addClass("btn-group");
    $("#responsive").removeClass("btn-group-vertical");
    $(".custom-size").removeClass("btn-sm");
    $(".custom-size").removeClass("btn-lg");
    $(".custom-size").addClass("btn-md");
    $(".section-title p").css("font-size", "2rem");
    $(".about-desc").removeClass("display-5");
    $(".about-desc").addClass("display-4");
    $(".section-title span").css({
      height: "0.3rem",
      width: "3rem",
    });
  } else {
    $("#responsive").addClass("btn-group");
    $("#responsive").removeClass("btn-group-vertical");
    $(".custom-size").removeClass("btn-sm");
    $(".custom-size").removeClass("btn-md");
    $(".custom-size").removeClass("btn-lg");
    $(".about-desc").removeClass("display-5");
    $(".about-desc").addClass("display-4");
    $(".section-title p").css("font-size", "2.5rem");
    $(".section-title span").css({
      height: "0.35rem",
      width: "3.5rem",
    });
  }
});
