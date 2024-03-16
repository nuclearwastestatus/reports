//返回顶部
//首先将#btn隐藏
$("#backTop").hide();
    //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
    $(function() {
    $(window).scroll(function() {
        if (($(window).scrollTop() > 1000 && window.location.pathname !=='/site/jobs') || (($(window).width() > 800 || window.outerWidth > 800) && window.location.pathname =='/site/jobs' && $(window).scrollTop() > 1000)) {
        $("#backTop").fadeIn(200);
        } else {
        $("#backTop").fadeOut(200);
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#backTop .backTop1").click(function() {
        $('body,html').animate({
        scrollTop: 0
        },
        500);
        return false;
    });
});

//24小时热榜
// $(".aside .list-d li").mouseover(function(){
//     $(this).find(".hot24-right").css("width","200px");
// });
// $(".aside .list-d li").mouseout(function(){
//     $(this).find(".hot24-right").css("width","320px");
//  });

//底部二维码
$(".backTop4").mouseover(function(){
    $(".backTop4 .f-hov").show();
});
$(".backTop4").mouseout(function(){
    $(".backTop4 .f-hov").hide();
});
$(".backTop3").mouseover(function(){
    $(".backTop3 .f-hov").show();
});
$(".backTop3").mouseout(function(){
    $(".backTop3 .f-hov").hide();
});
$(".backTop2").mouseover(function(){
    $(".backTop2 .f-hov").show();
});
$(".backTop2").mouseout(function(){
    $(".backTop2 .f-hov").hide();
});

//头部二维码
$(".mid_right .hover1").mouseover(function(){
    $(".mid_right .hover1 .f-hov").show();
});
$(".mid_right .hover1").mouseout(function(){
    $(".mid_right .hover1 .f-hov").hide();
});
$(".mid_right .hover3").mouseover(function(){
    $(".mid_right .hover3 .f-hov").show();
});
$(".mid_right .hover3").mouseout(function(){
    $(".mid_right .hover3 .f-hov").hide();
});



//列表页微信扫码区域再浮动后隐藏
// $(".listContent .listInfo .nomarlShow").mouseover(function(){
//     $(".share-to .weixin-code").hide();
// });

