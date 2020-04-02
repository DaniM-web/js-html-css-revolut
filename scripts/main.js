var dropMenu = $('.drop-to-show');
var itemHover = $('li.item-menu-r');
var showed ="hidden"


itemHover.mouseenter(
  function() {
      var current = $('.drop-to-show');
      dropMenu.removeClass('active');
      $(this).children('div').addClass('active');
    }
);

$('body').click(
  function () {
    dropMenu.removeClass('active');
  }
);
// itemHover.mouseenter(
//   function() {
//     if (showed === "hidden"){
//       $(this).children('div').addClass('active');
//       showed = "visible";
//
//     }else if(showed === "visible") {
//       $(this).children('div').removeClass('active');
//       showed = "hidden";
//     }
//   }
// );



$('.burger-menu').on({
  click: function() {
    $('.hidden-page').addClass('classadd');
    $('.burger-menu').removeClass('classadd');

  }
});

$('.close').on({
  click: function(){
    $('.hidden-page').removeClass('classadd');
    $('.burger-menu').addClass('classadd');
  }
});
