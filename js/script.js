$(document).ready(function () {
  var text = [
    "مرحبا",
    "Hola",
    "你好",
    "Hello",
    "Olá",
    "Bonjour",
    "привет",
    "こんにちは",
    "नमस्ते",
  ];
  var counter = 0;
  var elem = $("#greeting");
  setInterval(change, 2000);
  function change() {
    elem.fadeOut(function () {
      elem.html(text[counter]);
      counter++;
      if (counter >= text.length) {
        counter = 0;
      }
      elem.fadeIn();
    });
  }
});

$(".burger").click(function () {
  $(".icons").toggleClass("close");
});

(function () {
  var previousScroll = 0;

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > previousScroll) {
      $(".main-header").addClass("add");
    } else {
      $(".main-header").removeClass("add");
    }
  });
})();
