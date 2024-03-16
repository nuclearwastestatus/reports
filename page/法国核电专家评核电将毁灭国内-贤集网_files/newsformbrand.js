$(function() {
	//插入内容中的汽车表单
			var brand_form_html = $(".carform").html();
			if(brand_form_html != null) {
				brand_form_html = '<p id="to-content-carform">&nbsp;</p><div class="carform mt10">'+brand_form_html+'</div><p>&nbsp;</p>';
				$(".newcon-list p:first,.article_content p:first").after(brand_form_html);
			}
			
			//选择型号  价格图片改变
			$(".select-car").change(function() {
				var selid = $(this).val();
				$(".model_img").hide();
				$("#model_img_"+selid).show();

				$(".pricered").hide();
				$("#pricered_"+selid).show();
			});
			
			$('.brand-verify-img').click(function(){
				$(this).attr('src', "/check/verify?date="+new Date().getTime());
			});

			var iTime = 60;
			function RemainTime(rt_n){
				var iSecond,sSecond="",sTime="";
				if (iTime >= 0){
					iSecond = parseInt(iTime);
					if (iSecond >= 0){
						sSecond = iSecond + "秒";
					}
					sTime="<span style='color:darkorange'>" + sSecond + "</font>";
					if(iTime==0){
						clearTimeout(Account);
						sTime='<span id="mcode'+rt_n+'">获取验证码</span>';
						document.getElementById('gain'+rt_n).innerHTML= sTime;
						iTime = 60;
					}else{
						Account = setTimeout(function() {RemainTime(rt_n)},1000);
						iTime=iTime-1;
//						console.log('gain'+rt_n);
						document.getElementById('gain'+rt_n).innerHTML= "请等待"+sTime;
					}
				}else{
					sTime='<font size="1">没有倒计时</font>';
				}
			};

			$('body').on('click','#mcode0',function(){
//				alert(123);
				if($('#brand_img_verify').val().length != 5){
					wor.alert('图形码必须填写', false);
					return;
				}
				$('#b_mobile').isValid(function(v){
					if (v) {
						$.post('/check/mobile-code',
								{'code_from':'brand-form','mobile':$('#b_mobile').val(),'picverify':$('#brand_img_verify').val(),_token: '{{csrf_token();}}'},
								function(data){
									if(data.error != 400002 && data.msg != '提交成功') {
										wor.alert(data.msg, false);
									}else {
										RemainTime(0);
									}
								}, "json");
					} else {
						wor.alert('请输入手机号', false);
					}
				});
			});

			//form
			$("#brand-form-btn").click(function() {
				$(".form-right button").attr('disabled',true);
				$(".form-right button").html('提交中 ...');
//				var nid = "{{$details->id}}"; details.blade.php 中添加
				var bid = $(".car-name").attr("bid");
				var mid = $(".select-car").val();
				var bcity = $("#bc_city").val();
				var bmobile = $("#b_mobile").val();
				var bmsgver = $("#brand_msg_verify").val();
				if(nid && bid && mid && bcity && bmobile && bmsgver) {
					$.post('/news/brand-form-buy',
							{'nid':nid, 'bid':bid, 'mid':mid, 'bcity':bcity, 
							'bmobile':$("#b_mobile").val(),
							'bmsgver':$("#brand_msg_verify").val(), 
							_token: '{{csrf_token();}}'},
							function(data){
								if(data.status == 1) {
									document.getElementById("form-right").reset();
									$("#brand-verify-img").click();
								}
								wor.alert(data.msg, false);
								$(".form-right button").html('获取底价');
								$(".form-right button").attr('disabled',false);
							}, "json");
				}else {
					wor.alert("请填写完整", false);
					$(".form-right button").html('获取底价');
					$(".form-right button").attr('disabled',false);
				}
				return false;
			});
		//右边栏股权激励表单
			$('body').on('click','#mcode1',function(){
				if($('#brand_img_verify1').val().length != 5){
					wor.alert('图形码必须填写', false);
					return;
				}

				$('#b_mobile1').isValid(function(v){
					if (v) {
						$.post('/check/mobile-code',
								{'code_from':'brand-form','mobile':$('#b_mobile1').val(),'picverify':$('#brand_img_verify1').val(),_token: '{{csrf_token();}}'},
								function(data){
									if(data.error != 400002 && data.msg != '提交成功') {
										wor.alert(data.msg, false);
									}else {
										RemainTime(1);
									}
								}, "json");
					} else {
						wor.alert('请输入手机号', false);
					}
				});
			});

			//form
			$("#brand-form-btn1").click(function() {
				$(".guhave button").attr('disabled',true);
				$(".guhave button").html('提交中 ...');
//				var nid="{{$details->id}}"; details.blade.php中添加
				
				var bname = $("#bc_name").val();
				var bmobile = $("#b_mobile1").val();
				var bmsgver = $("#brand_msg_verify1").val();
				if(nid && bname && bmobile && bmsgver) {
					$.post('/news/brand-form-buy',
							{'nid':nid, 'bid':2, 'mid':46, 'bname':bname, 
							'bmobile':bmobile,
							'bmsgver':bmsgver, 
							_token: '{{csrf_token();}}'},
							function(data){
								if(data.status == 1) {
									document.getElementById("guhave-form").reset();
									$("#brand-verify-img1").click();
								}
								wor.alert(data.msg, false);
								$(".guhave button").html('报名送股权资料');
								$(".guhave button").attr('disabled',false);
							}, "json");
				}else {
					wor.alert("请填写完整", false);
					$(".guhave button").html('报名送股权资料');
					$(".guhave button").attr('disabled',false);
				}
				return false;
			});
})