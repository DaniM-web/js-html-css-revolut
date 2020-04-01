var dropMenu = $('.drop-to-show');
var itemHover = $('.item-menu-r');
var prova = $('body');
var showed = false;

itemHover.mouseenter(
  function() {
    var current = $(this).parent();
    $(this).children("div").addClass('classadd');




  }
);

//   prova.click(
//   function() {
//     dropMenu.removeClass('classadd');
//
//   }
// );
