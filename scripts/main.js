var dropMenu = $('.drop-to-show');
var itemHover = $('.item-menu-r');
var prova = $('body');
var showed = "hidden";

itemHover.click(
  function() {
    // var current = $(this).parent();

    $(this).children("div").addClass('classAdd');
    showed = "visible";
  }
);

itemHover.click(
  function() {
      $(this).children("div").removeClass('classAdd');
      showed = "hidden";
    }
  );
