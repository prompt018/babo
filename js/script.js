$(function () {

    //서브메뉴
    $(".top>ul>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(500);
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp(500);
    });

 

/*twit>h1
    $('.twit>h1').mouseover(function () {
        $(this).animate({ opacity: 0.8}, 1500,'easeInOutElastic')
    }).mouseout(function () {
        $(this).animate({ opacity: 1 }, 1500)
    });
    */

});