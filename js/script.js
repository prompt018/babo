$(function () {

    //서브메뉴
    $(".top>ul>li").mouseover(function () {
        $(this).find(".submenu").stop().slideDown(500);
    }).mouseout(function () {
        $(this).find(".submenu").stop().slideUp(500);
    });

  /* 다시 수정하기
    $('.imgcontents >.left > h1').animate({ fontSize:'30px;'},function(){
        $(this).animate({fontSize:'28px;'}, 300);
       
    });
    */

    //오른쪽텍스트 이미지
    $('.main_text').mouseover(function () {
        $(this).animate({ opacity: 0 }, 1500,'easeInOutElastic')
    }).mouseout(function () {
        $(this).animate({ opacity: 1 }, 1500)
    });


//twit>h1
    $('.twit>h1').mouseover(function () {
        $(this).animate({ opacity: 0,fontSize:0 }, 1500,'easeInOutElastic')
    }).mouseout(function () {
        $(this).animate({ opacity: 1,fontSize:'28px' }, 1500)
    });

    /*
    setInterval(function(){
        $(".main_text").mouseover(function(){
            $(".main_text").animate({marginLeft: "200px"},1500);
            $(".main_text").animate({marginLeft: "-200px"},1500);
        })    
    },2000);
    /*
    $(".main_text").mouseout(function(){
        $(".main_text").animate({marginLeft: "0px"});
        $(".main_text").animate({marginLeft: "0px"});
    });
      */
});