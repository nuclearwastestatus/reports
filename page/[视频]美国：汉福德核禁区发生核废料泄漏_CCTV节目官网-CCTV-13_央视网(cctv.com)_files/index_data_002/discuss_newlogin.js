// JavaScript Document

$(document).ready(function() {

	$(".discuss_log .logbox .postbox textarea").each(function(i) {
		$(this).focus(function() {
			$(".discuss_log .logbox").eq(i).css({"border-color":"#1e63b0"});
		});
		$(this).blur(function() {
			$(".discuss_log .logbox").eq(i).css({"border-color":"#e7e7e7"});
		});
	});

	$(".discuss_comment .dcitem .content .cont .replybox .postbox textarea").each(function(i) {
		$(this).focus(function() {
			$(".discuss_comment .dcitem .content .cont .replybox").eq(i).css({"border-color":"#1e63b0"});
		});
		$(this).blur(function() {
			$(".discuss_comment .dcitem .content .cont .replybox").eq(i).css({"border-color":"#e7e7e7"});
		});
	});

	$(".discuss_log .logbox .userbox .emotion").click(function(){
		$(this).find(".embox").toggleClass("emboxshow");
	});
	$(".discuss_comment .dcitem .content .cont .replybox .userbox .emotion").click(function(){
		$(this).find(".embox").toggleClass("emboxshow");
	});

	$(".discuss_log .logbox .userbox .logbtn .button a").click(function(){
		if($(window.parent.document).find("#loginFloat").length>0){
			$(window.parent.document).find("#loginFloat").show();
		}else{
			 $(".discuss_log .logpop").show();
		}
		
	});

	  $(".discuss_log .logpop .close").click(function(){
		  $(".discuss_log .logpop").hide();
	});

  $(".discuss_comment .dcitem .content .cont .replybox .userbox .logbtn .button a").click(function(){
		  $(".discuss_comment .dcitem .content .cont .logpop").show();
	});
  $(".discuss_comment .dcitem .content .cont .logpop .close").click(function(){
		  $(".discuss_comment .dcitem .content .cont .logpop").hide();
	});

	$(".discuss_comment .dcitem .content .cont .func a.zan").eq(0).click(function(){
		$(".discuss_comment .dcitem .content .cont .func a.zan").eq(0).addClass("zanplus");
		var t=setTimeout(function(){$(".discuss_comment .dcitem .content .cont .func a.zan").eq(0).attr("class","zaned")},2000);
	});

	$(".discuss_comment .dcitem .content .cont .func a.cai").eq(0).click(function(){
		$(".discuss_comment .dcitem .content .cont .func a.cai").eq(0).addClass("caiplus");
		var t=setTimeout(function(){$(".discuss_comment .dcitem .content .cont .func a.cai").eq(0).attr("class","caied")},2000);
	});

	$(".discuss_comment .dcitem .content .cont .func a.copy").eq(0).click(function(){
		$(".discuss_tips .cont p").eq(1).hide();
		$(".discuss_tips .cont p").eq(0).show();
		$(".discuss_tips .button").eq(1).hide();
		$(".discuss_tips .button").eq(0).show();
		$(".discuss_tips").show();
	});
	$(".discuss_tips .button a").eq(0).click(function(){
		$(".discuss_tips .cont p").eq(0).hide();
		$(".discuss_tips .cont p").eq(1).show();
		$(".discuss_tips .button").eq(0).hide();
		$(".discuss_tips .button").eq(1).show();
	});
	$(".discuss_tips .button a").eq(1).click(function(){
		$(".discuss_tips").hide();
	});
	$(".discuss_tips .button a").eq(2).click(function(){
		$(".discuss_tips").hide();
	});

	$(".discuss_comment .dcitem .content .cont .func a.reply").each(function(i){
		$(".discuss_comment .dcitem .content .cont .func a.reply").eq(i).click(function(){
			$(".discuss_comment .dcitem .content .cont .replybox").eq(i).toggleClass("replyboxshow");
		});
	});

$(".discuss_comment .dcitem .content .showall a").click(function(){
	$("#or1").hide();$("#or2").show();
});

	function tipsposition(){
		var ww=$(window).width(),
						hh=$(window).height(),
						st=$(window).scrollTop(),
						tw=$(".discuss_tips").width(),
						th=$(".discuss_tips").height(),
						tl=(ww-tw)/2,
						tt=st+(hh-th)/2;
		$(".discuss_tips").css({left:tl,top:tt});
	}
	window.onload=window.onscroll=window.onresize=tipsposition;


});