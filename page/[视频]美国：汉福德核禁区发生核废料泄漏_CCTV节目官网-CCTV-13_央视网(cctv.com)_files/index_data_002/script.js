var $=jQuery;


function sideBacktop(){
    var bro=$.browser;
    var binfo="";
 		//var t = document.documentElement.scrollTop || document.body.scrollTop;
		var t = $(window).scrollTop();
		var w = ww = $(window).width();
		var h = hh = $(window).height();
		var w_r = $(".ycc2").width();
		var h_r = $(".ycc2").height();
		h=parseInt(t)+parseInt(h-h_r-10);
		h2=parseInt(t);
		
	
		
		w=w-w_r-10;
		if(t>0){
			$("#topnav").css({"box-shadow":"4px 4px 4px 0 rgba(0, 0, 0, 0.2)"});
			}else if(t==0){
			$("#topnav").css({"box-shadow":"0 0 0 0 rgba(0, 0, 0, 0)"});
				}
		if(t<1)
		{
			$(".ycc2").css({"display":"none"});
		} else {
			if(ww<1200)
			{
				$(".ycc2").css({"display":"none"});
			} else {
				if(hh<300)
				{
					$(".ycc2").css({"display":"none"});
				} else {
					$(".ycc2").css({"display":"block"});
					if(bro.msie && bro.version=="6.0") 
					{
						$(".ycc2").css({"top":h});
						$(".weima").css({"top":h2});
					}
				}
			}		
		}
		if(bro.msie && bro.version=="6.0") 
		{
			$(".gs_bot").css("top",parseInt(h)-115);
		}
}

sideBacktop();

var throldHold = 300;
	window.onresize = window.onscroll = function () {
		 	clearTimeout(throldHold);
			window.timer = setTimeout(sideBacktop, throldHold);
	}


//我要分享下拉菜单 

$(".slideDown .selectBox").find("a:[shareid='kaixin001']").remove();
$(".slideDown .selectBox").find("a:[shareid='mshare']").remove();
$(".slideDown .selectBox").find("a:[shareid='tqq']").remove();

$(".slideDown").hover(function(){
		$(this).addClass("slideCur");
		$(this).stop().animate({height:"320px"},"slow");
		$(this).find(".selectBox").show();
	},function(){
		$(this).stop().css({height:"43px"});
		$(this).find(".selectBox").hide();
		$(this).removeClass("slideCur")
	
});
$(".slideDown .selectBox a.ico01").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -1px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -1px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico01").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -1px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico02").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -39px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -39px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico02").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -39px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico03").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -79px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -79px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico03").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -79px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico04").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -119px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -119px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico04").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -119px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico05").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -159px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -159px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico05").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -159px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico06").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px 6px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px 6px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico06").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px 6px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico07").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -34px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -34px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico07").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -34px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico08").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -74px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -74px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico08").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -74px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico09").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -114px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -114px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico09").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -114px",paddingLeft:"45px"});
});
$(".slideDown .selectBox a.ico10").mouseenter(function(){
		$(this).css({backgroundPosition:"-37px -155px",paddingLeft:"120px"});
		$(this).animate({backgroundPosition:"12px -155px",paddingLeft:"45px"},"fast");
	});
$(".slideDown .selectBox a.ico10").mouseleave(function(){
		$(this).stop().css({backgroundPosition:"12px -155px",paddingLeft:"45px"});
});


/*搜索*/
$(".cnt_search").hover(function(){
			$(this).addClass("cnt_search_active");
		},function(){
			$(this).removeClass("cnt_search_active");
	});
$(".cnt_search .ibox input").focus(function(){
			$(this).closest(".cnt_search").addClass("cnt_search_focus");
	});
$(".cnt_search .ibox input").blur(function(){
			$(this).closest(".cnt_search").removeClass("cnt_search_focus");
	});
/*返回*/
$(".function .info em").hover(function(){
	$(this).parent().addClass("info_active");
},function(){
	$(this).parent().removeClass("info_active");
});
$(".cnt_share .return").hover(function(){
			$(this).addClass("return_active");
		},function(){
			$(this).removeClass("return_active");
	});
/*更多*/
$(".model .mhd .option").hover(function(){
			$(this).addClass("option_active");
		},function(){
			$(this).removeClass("option_active");
	});
/*手机客户端*/
$(".mobileclient dd").hover(function(){
			$(this).css({background:"#fff"});
		},function(){
			$(this).css({background:"none"});
	});
/*手机观看*/
$(".function .shouji").hover(function(){
			$(this).addClass("shouji_active");
			$(this).find("b").stop().fadeIn("fast");
		},function(){
			$(this).find("b").stop().fadeOut("fast",function(){
				$(this).parent().removeClass("shouji_active");
			});
	});


/*字号切换*/
$(".cnt_bd .function .font a").eq(1).click(function(){
	var fontSize=$(".cnt_bd p").css("font-size");
	fontSize=parseInt(fontSize.substr(0,2))+2;
	$(".cnt_bd p").css({"font-size":fontSize+"px"});
	$(".cnt_bd .function .font a").eq(0).removeClass("disable");
	$(this).blur();
});
$(".cnt_bd .function .font a").eq(0).click(function(){
	var fontSize=$(".cnt_bd p").css("font-size");
	fontSize=parseInt(fontSize.substr(0,2))-2;
	if(fontSize>10){
	  $(".cnt_bd p").css({"font-size":fontSize+"px"});
	}
	if(fontSize==12){
		$(this).addClass("disable");
	}
	$(this).blur();
});
2014/5/7
/*分享到图标*/
$(".cnt_share .icon a").each(function(i){
	$(this).mouseenter(function(){
		$(this).stop().animate({top:"-10px"},"normal",function(){$(this).animate({top:"0px"},"normal")});
	});
	$(this).mouseleave(function(){
		$(this).stop().animate({top:"0px"},"normal");
	});
})
