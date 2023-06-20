$(function () {
    // 멀티메뉴
    $(".menu>ul>li").hover(function () {
        $(".submenu, .bg").stop().fadeIn(500);
    }, function () {
        $(".submenu, .bg").stop().fadeOut(500);
    });
    // 페이드슬라이드
    var x = 0;
    setInterval(function () {
        var next = (x + 1) % 3;
        $(".slideList").find("div").eq(x).fadeOut();
        $(".slideList").find("div").eq(next).fadeIn();
        x = next;
    }, 3000); // 3초

    // 탭메뉴
    $("ul.gallery").hide();
    $("h2").on("click", function () {
        $(this).addClass("on").siblings("h2").removeClass("on");
        $(".ng>ul").hide();
        $(".on+ul").show();
    });

    // 레이어팝업
    $(".layerpopup").on("click",function(){
        $("#popup").fadeIn();
    });
    $(".close").on("click",function(){
        $("#popup").fadeOut();
    });

});