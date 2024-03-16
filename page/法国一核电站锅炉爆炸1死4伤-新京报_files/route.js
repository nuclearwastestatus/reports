$(".inp_ico:eq(0)").attr("title",("搜索"));
$(".search:eq(0) input").attr("title",("输入搜索信息"));
$(".backTop3 a").attr("title",("微博"));
$(".logo").attr("title",("新京报"));
$("._e04d45830fd347dd").attr("title",("H5--模板3"));
$("._4667dddc02d46f94").attr("title",("方正运营112"));
$("._d98ce89c2336324c").attr("title",("党史记忆123"));
$(".share_sina").attr("title",("微博分享"));
$(".dateSpecialBox a:eq(0)").attr("title",$(".dateSpecialBox .dyf_info a:eq(0)").text());
$("._aae094199bf30b0b1a58e8ec1bbad5ec").attr("title",("电子报"));
$("._ae8827ca4cf6e82f03d09bdfb4cd5e8f").attr("title",("中国互联网违法和不良信息举报中心"));
$('.backTop4 em').before('<a href="" style="position: absolute; width: 34px; height: 34px;"></a>');
$(".backTop4 a:eq(0)").attr("title",("新京报"));
$('.backTop2 em').before('<a href="" style="position: absolute; width: 34px; height: 34px;"></a>');
$(".backTop2 a:eq(0)").attr("title",("微信"));
$('.backTop1 em').before('<a href="" style="position: absolute; width: 34px; height: 34px;"></a>');
$(".backTop1 a:eq(0)").attr("title",("返回顶部"));
$("#v4_s a").attr("title","微博分享");
$(".pubu_dianzan").attr("title","点赞");
$(".pubu_qifu").attr("title","祈福");
$(window, document, "body").scroll(function(event) {
    $('.bdsharebuttonbox').hide()
    var wScrollY = $("html,body").scrollTop();
    var newwInnerH = document.documentElement.clientWidth
    var bScrollH = document.body.scrollHeight; // 滚动条总高度
    if (wScrollY + newwInnerH >= bScrollH) {
        $("#v4_s a").attr("title","微博分享");
        $(".pubu_dianzan").attr("title","点赞");
        $(".pubu_qifu").attr("title","祈福");
    }else{
        $("#v4_s a").attr("title","微博分享");
        $(".pubu_dianzan").attr("title","点赞");
        $(".pubu_qifu").attr("title","祈福");
    }  
});
$(".pin_demo_out").each(function(){
    $(this).find(".index-overflow-zt img").attr("alt",$(this).find(".pin_tit").text().trim());
});
$(".pin_demo_out").each(function(){
    $(this).find(".imgBor img").attr("alt",$(this).find(".pin_tit").text().trim());
});
$("img[src='https://static.bjnews.com.cn/www/v6test/images/footer01.jpg']").attr("alt",("请扫码"));
$("img[src='https://static.bjnews.com.cn/www/v6test/images/footer032.png']").attr("alt",("客户端"));
$("img[src='https://static.bjnews.com.cn/www/v6test/images/footer01.jpg']").attr("alt",("微信"));
$("span[tagerturl='https://m.bjnews.com.cn/detail/163426921814401.html']").attr("alt",("微信分享"));
$("img[src='https://static.bjnews.com.cn/www/v6test/images/londing.png']").attr("alt",("加载"));
$("img[src='https://static.bjnews.com.cn/www/v6test/images/index_icoTime@1x.png']").attr("alt",("时间"));
$("img[src='https://static.bjnews.com.cn/www/v6test/images/footer-tel2.png']").attr("alt",("新京报举报邮箱"));
$("img[src='https://static.bjnews.com.cn/www/v6test/images/footer-tel.png']").attr("alt",("新京报举报电话"));
$("img[src='https://static.bjnews.com.cn/www/v6test/images/footer032.png']").attr("alt",("新京报"));
$("body").each(function(){
    $(this).find("#my-video").attr("aria-label",$(this).find(".content:eq(0) h1").text().trim());
    $(this).find(".article-text video").attr("title",$(this).find(".content:eq(0) h1").text().trim());
    $(this).find("#smaller").attr("title","字体缩小").attr("role","button").attr("aria-label","字体缩小");;
    $(this).find("#bigger").attr("title","字体放大").attr("role","button").attr("aria-label","字体放大");;
});
$("body").each(function(){
$(this).find(".content:eq(1) audio").attr("title",$(this).find(".bodyTitle h1").text().trim());
});
$(window, document, "body").scroll(function(event) {
    var wScrollY = $("html,body").scrollTop();
    var newwScrollY = document.body.scrollTop
    if (newwScrollY != 0) {
        wScrollY = newwScrollY
    }
    var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
    var newwInnerH = document.documentElement.clientWidth
    var bScrollH = document.body.scrollHeight; // 滚动条总高度
    if (wScrollY + newwInnerH >= bScrollH) {
      $(".pin_demo_out").each(function(){
        $(this).find(".imgBor img").attr("alt",$(this).find(".pin_tit").text().trim());
      });
    }else{
      $(".pin_demo_out").each(function(){
        $(this).find(".imgBor img").attr("alt",$(this).find(".pin_tit").text().trim());
      });
    }
});
$(".headline_swpier .swiper_image_container a").each(function(){
	$(this).find("img").attr("alt",$(".headline_swpier > div > .swiper_txt > .swiper-wrapper > .swiper-slide:eq("+$(this).index()+")").find(".title").text());
})
$(".gg-1 img:eq(0)").attr("alt", "电子报");
$(".gg-1 img:eq(1)").attr("alt", "中国互联网违法和不良信息举报中心");
$(".fr i:first").attr("title", "搜索");
$(".asideList .list-g li").each(function(){
    $(this).find(".hot24-img img").attr("alt",$(this).find(".hot24-right a").text().trim());
})
$("#courselist li").each(function(){
    $(this).find(".listLeft img").attr("alt",$(this).find(".listRight h3").text().trim());
})
$(".list-e li").each(function(){
    $(this).find(".hot24-img img").attr("alt",$(this).find(".hot24-right .hot24-text").text().trim());
})
$(".asideList:eq(0)").each(function(){
    $(this).find(".hot24-img:eq(0) img").attr("alt",$(this).find(".hot24-right:eq(0) a").text().trim());
})
$("body").each(function(){
    $(this).find(".yugaoBg img").attr("alt",$(this).find(".content:eq(0) h1").text().trim());
});
$("body").each(function(){
    $(this).find(".photoNews img").attr("alt",$(this).find(".bodyTitle h1").text().trim());
});
$(".pin_demo_out").each(function(){
    $(this).find(".index_xiaoSp a:eq(0) img").attr("alt","播放器");
	$(this).find(".index_xiaoSp a:eq(1) img").attr("alt",$(this).find(".pin_tit").text());
});
$(".pin_demo:eq(10)").each(function(){
    $(this).find(".index_xiaoSp img:eq(1)").attr("alt",$(this).find(".pin_tit").text());
})
$(".pin_demo:eq(10)").each(function(){
    $(this).find(".index_xiaoSp img:eq(0)").attr("alt",$(this).find(".pin_tit").text());
})
$(".asideList:eq(0)").each(function(){
    $(this).find("img").attr("alt",$(this).find("a:eq(1)").text());
})
//焦点
function esdJumpNodeTagLwLb(NodeElement,LastFunc,NextFunc){
NodeElement.keydown(function (e) {
    if (e.shiftKey && e.keyCode == 9) {
    LastFunc()
    return false;
    }
    if (e.keyCode == 9) {
    NextFunc();
    return false;
    }
});
}
//首页头条
esdJumpNodeTagLwLb($(".textLink"),function(){$(".right_banner_slide").focus();},function(){$(".swiper-slide:eq(0) a:eq(0)").mouseover();$(".swiper-slide:eq(0) a:eq(0)").focus();})
$(".swiper-slide").each(function(){
    $(this).find("div:first a:first").focus(function(){
        $(this).mouseover();
    })
})





