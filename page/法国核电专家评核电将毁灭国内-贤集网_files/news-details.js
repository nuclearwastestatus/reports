
$(function() {
			$("a.replytoreply").click(function() {
				//如果恢复内容为空 则隐藏整个回复div
				if($(".core-reply-content").html() == '') {
				}
				$(".editor-container").hide();
				$("#core-reply-"+$(this).attr("data-reply")).show();
				$("#replytoreply_"+$(this).attr("data-reply")).show();
				$("#replytoreply_"+$(this).attr("data-reply")).find(".verify2").attr("src", "/check/verify?date=" + new Date().getTime());
				$('input[name="reply_user"]').val($(this).attr("data-replyAT"));
				$('input[name="reply_id"]').val($(this).attr("data-reply"));
			});
			$('input[name="verify"]').focus(function() {
				var versrc = $(this).next("#verify").attr("src");
				if( versrc.indexOf('verify.jpg') > 0 ) {
					$(this).next("#verify").attr("src", "/check/verify?date=" + new Date().getTime());
				}
				$(this).unbind()
			});
			$("#verify").click(function() {
				$(this).attr("src", "/check/verify?date=" + new Date().getTime())
			});
			$(".verify2").click(function() {
				$(this).attr("src", "/check/verify?date=" + new Date().getTime())
			});
			
			//左侧分享div和推荐div框浮动固定
			$(window).on('scroll',function(){
				var top=$(document).scrollTop();
				if(top>200){
					$(".news-share").addClass("fixed-share");
					$(".tuijain-news").removeClass("fixed-share");
				}else{
					$(".news-share").removeClass("fixed-share");
				}
				//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
				if(top>=$(".tuijain-news").offset().top-70) {
					$(".news-share").removeClass("fixed-share");
					$(".tuijain-news").addClass("fixed-share");
				}
				if(top>1800){
					$("#rightbox2").addClass("newl-right-box2-fixed");
				}else{
					$("#rightbox2").removeClass("newl-right-box2-fixed");
				}
			});

			//导航栏更多下拉
			$(".news_details_nav_more").hover(function() {
	        	$(".new-mymenu").show();
	        }, function() {
			 	$(".new-mymenu").hide();
			});
			
			//右下角四川地区显示宝马广告图
			var str=returnCitySN["cname"];//获取搜狐省份和城市名称
			var pName=str.substring(0, 2);//截取前两字
			if(pName == '四川'){
				$("#brand-form-adimg2").show();
			}
				
});
//资讯点赞功能
function doPraise(id,type) {
	if(!isLogin) {
		wor.alert('请先登录', false);
		return;
	}
	$.post('/news/news-praise', { sid: id, dotype: type, _token: '{{csrf_token();}}'}, function (data) {
		//wor.alert(data.msg, false);
		if(data.status) {
			if(type == 1){
				var pc = parseInt($("#praise_count").html());
				$("#praise_count").html(pc+1);
			}else{
				var pc = parseInt($("#tread_count").html());
				$("#tread_count").html(pc+1);
			}

		}else {
			wor.alert(data.msg, false);
		}
	},'json');
}
//底部为您推荐：点击更多
function getListMore(t) {
	var eid = $("#more_btn_a").attr('eid');
	
	$(".news-more").html('<a >内容加载中 。。。</a>');
	//新闻大厅
	$.post('/news/bottom-list-more', { t: t, eid: eid, top_cat:top_cat, _token: '{{csrf_token();}}'}, function (data) {
		//wor.alert(data.msg, false);
		if(data.status) {
			$(".news-main:last").after(data.data);
			$("#more_btn_a").attr('eid', data.status);
			$(".news-more").html('<a href="javascript:void(0);" id="more_btn_a" eid="'+data.status+'" onclick="getListMore('+t+')">+加载更多新闻</a>');
		}else {
			$(".news-more").html('<a >没有更多内容了 ！</a>');
//				wor.alert(data.msg, false);
		}
	},'json');
}