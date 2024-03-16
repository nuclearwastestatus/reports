var week = new Date().getDay(); 
console.log(week);
if(week == 4) {
	detail_type =0;	//周一不显示广告
}
//detail_type:1新闻 2专题 3成果 4需求 5产品 6服务 7技术咨询 8展会 9资料 10视频大厅 11汽车大厅 999主站首页 20微头条大厅
var line_img = side_img = img_href = header_img ='';
var rand_str = "2021090101";
if(detail_type == 1) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业资讯.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业资讯.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1dorfot0nrdv7';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
}else if(detail_type == 2) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr15q8v28qi4v2v';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
}else if(detail_type == 3) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr10iubeikmgsjo';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/工业技术大厅.jpg?'+rand_str+'">';
}else if(detail_type == 4) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1683e0rlm2eai';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/工业需求大厅.jpg?'+rand_str+'">';
}else if(detail_type == 5) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr12kd5smnn5suk';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/工业产品大厅.jpg?'+rand_str+'">';
}else if(detail_type == 6) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1irbrhh0h3nj1';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/工业服务大厅.jpg?'+rand_str+'">';
}else if(detail_type == 8) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1dhbhr4d9b07c';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
}else if(detail_type == 9) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1l6l0d319ntl7';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/工业资料大厅.jpg?'+rand_str+'">';
}else if(detail_type == 10) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr156kct27s766g';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/工业视频大厅.jpg?'+rand_str+'">';
}else if(detail_type == 11) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1heuj2flgcseq';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
}else if(detail_type == 20) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1mb37kjdjonjc';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/工业微头条大厅.jpg?'+rand_str+'">';
}else if(detail_type == 999) {
//	line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-工业专题.jpg">'
//	side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-贤集网-工业专题.jpg">'
	img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usruujvlkc4gfqa';
	
	header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
}

//detail_type:1新闻 2专题 3成果 4需求 5产品 6服务 7技术咨询 8展会 9资料 10视频大厅 11汽车大厅 999主站首页 20微头条大厅
if(detail_type == 1 || detail_type == 2) {
	if(tagdark_id == 15){
		//关键词文章
		
		switch (cuid) {
	//	case 141766://陈凤
	//		line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-产品大厅.jpg">'
	//		side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-贤集网-产品大厅.jpg">'
	//		break;
				
				
			case 75175://崔新燕
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-崔新燕-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-崔新燕-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1hddsldvt2iv1';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
				
			case 140643: //何祎璇
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-何祎嫙-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-何祎嫙-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1624kq0fucs6s';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
				
			case 140379://万丝婕
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-万丝婕-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-万丝婕-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1kmbr3oikel89';
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
			case 140481://吴梦情
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-吴梦情-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-吴梦情-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1624ggiaigseo';
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
			case 139894://谢佳
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-谢佳佳-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-谢佳佳-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr15mbl5pc71b3e';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
			case 55997://许倩
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-许倩-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-许倩-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1624k29v1j1ls';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
			case 140918://杨寓宇
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-杨寓宇-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-杨寓宇-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1dbkjihhm48nj';
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
				
			case 21150://孙卓
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-孙卓-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-孙卓-关.jpg">'
//				
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1lmj7fu268b21';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;	
			case 59120://张翩翩
//				line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-张翩翩-关.jpg">'
//				side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-张翩翩-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usrvtqgr5rom3aq';
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				
				break;
	//		case 140052://张月花
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-杨寓宇-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-杨寓宇-关.jpg">'
	//			break;
		}
	}else {
		//非关键词文章
		switch (cuid) {
		
			case 75175://崔新燕
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-崔新燕-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-崔新燕-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1hddsldvt2iv1';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
				
			case 140643: //何祎璇
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-何祎嫙-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-何祎嫙-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1624kq0fucs6s';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
				
			case 140379://万丝婕
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-万丝婕-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-万丝婕-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1kmbr3oikel89';
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
			case 140481://吴梦情
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-吴梦情-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-吴梦情-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1624ggiaigseo';
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
			case 139894://谢佳
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-谢佳佳-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-谢佳佳-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr15mbl5pc71b3e';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
			case 55997://许倩
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-许倩-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-许倩-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1624k29v1j1ls';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
			case 140918://杨寓宇
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-杨寓宇-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-杨寓宇-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1dbkjihhm48nj';
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;
				
				
			case 21150://孙卓
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-孙卓-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-孙卓-关.jpg">'
	//			
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usr1lmj7fu268b21';
				
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				break;	
			case 59120://张翩翩
	//			line_img = '<img style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210817/通栏-张翩翩-关.jpg">'
	//			side_img = '<img style="width:100%;" src="//front.xianjichina.com/app/app_qrcode/side20210817/侧边栏-张翩翩-关.jpg">'
				img_href = 'https://app.xianjichina.com/app/h5ulink?linkid=usrvtqgr5rom3aq';
				header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/下载提示20220317/pc站/大厅首页.jpg?'+rand_str+'">';
				
				break;
		}
	}
}
if(0 && detail_type == 9) {
	//资料  按分类判断显示图片
	var top_cat = top_cat ? top_cat : 0; 
	switch (top_cat) {
		case 0:
			header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_0.jpg?'+rand_str+'">';
			break;
			
		case 138:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_138.jpg?'+rand_str+'">';
		    break;
		case 176:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_176.jpg?'+rand_str+'">';
		    break;
		case 164:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_164.jpg?'+rand_str+'">';
		    break;
		case 171:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_171.jpg?'+rand_str+'">';
		    break;
		case 147:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_147.jpg?'+rand_str+'">';
		    break;
		case 180:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_180.jpg?'+rand_str+'">';
		    break;
		case 156:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_156.jpg?'+rand_str+'">';
		    break;
		case 183:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_183.jpg?'+rand_str+'">';
		    break;
		case 186:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_186.jpg?'+rand_str+'">';
		    break;
		case 189:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_189.jpg?'+rand_str+'">';
		    break;
		case 301:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_301.jpg?'+rand_str+'">';
		    break;
		case 198:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_198.jpg?'+rand_str+'">';
		    break;
		case 202:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_202.jpg?'+rand_str+'">';
		    break;
		case 229:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_229.jpg?'+rand_str+'">';
		    break;
		case 254:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_254.jpg?'+rand_str+'">';
		    break;
		case 431:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_431.jpg?'+rand_str+'">';
		    break;
		case 432:
		    header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_432.jpg?'+rand_str+'">';
		    break;
		case 28:
			header_img ='<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/资料广告/category_28.jpg?'+rand_str+'">';
		    break;
	}
}
$(function() {
	//detail_type:1新闻 2专题 3成果 4需求 5产品 6服务 7技术咨询 8展会 9资料 10视频大厅 11汽车大厅 999主站首页  20微头条大厅
	var a_str = "<a rel='nofollow' href='"+img_href+"' target='_blank'>"
	if(detail_type == 1) {
		$("#ad_div_header").html(a_str+header_img + '</a>');
//		$("#ad_div_header").html(header_img);
//		$("#ad_div1").html(a_str + '<img style="float:right;margin-top: 10px;" alt="贤集网app下载" style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/line20210823/通栏-贤集网-看工业视频.jpg"></a>');
//		$("#ad_div4").html(a_str + '<img style="float:right;margin-top: 10px;" alt="贤集网app下载" style="margin-top:10px;" src="//front.xianjichina.com/app/app_qrcode/side20210823/侧边栏-贤集网-看工业视频.jpg"></a>');
//		$("#ad_div_header").html("<a rel='nofollow' href='' target='_blank'><img style='width:100%;' src='//front.xianjichina.com/app/app_qrcode/header_app_ad_mvideos.jpg?456'></a>");
	}
	if(detail_type == 2) {
		$("#ad_div_header").html(a_str+header_img + '</a>');
//		$("#ad_div_header").html(header_img);
	}
	if(detail_type == 3) {//成果
//		if(nid && nid %2 ==0 ) {
//			$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看全球工业视频/贤集网-技术成果.jpg?'+rand_str+'">');
//		}else {
//			$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看更多新技术和新项目/贤集网-技术成果.jpg?'+rand_str+'">');
//		}
		$("#ad_div_header").html(a_str+header_img + '</a>');
	}
	if(detail_type == 4) {//需求
//		$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看更多新技术和新项目/贤集网-技术需求.jpg?'+rand_str+'">');
		$("#ad_div_header").html(a_str+header_img + '</a>');	
	}
	if(detail_type == 5) {// 5产品
//		if(nid !=0 ) {//内页
//			$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看全球工业视频/贤集网-产品大厅.jpg?'+rand_str+'">');
//		}else {
//			$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/更快收录更多生意/贤集网-产品大厅.jpg?'+rand_str+'">');
//		}
		$("#ad_div_header").html(a_str+header_img + '</a>');
		
	}
	if(detail_type == 6) {//6服务
//		if(nid !=0 ) {//内页
//			$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看全球工业视频/贤集网-服务大厅.jpg?'+rand_str+'">');
//		}else {
//			$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/更快收录更多生意/贤集网-服务大厅.jpg?'+rand_str+'">');
//		}
		$("#ad_div_header").html(a_str+header_img + '</a>');
	}
	if(detail_type == 7) {//技术咨询
		$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看全球工业视频/贤集网-技术咨询.jpg?'+rand_str+'">');
	}
	if(detail_type == 8) {//展会
//		if( nid != 0  ) {
//			$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看全球工业视频/贤集网-会议展会.jpg?'+rand_str+'">');
//		}else {
//			$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/更快收录更多生意/贤集网-会议展会.jpg?'+rand_str+'">');
//		}
		$("#ad_div_header").html(a_str+header_img + '</a>');
	}
	if(detail_type == 9) {//资料
//		$("#ad_div_header").html(header_img);
		$("#ad_div_header").html(a_str+header_img + '</a>');
	}
	if(detail_type == 10) {//视频
//		$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看全球工业视频/贤集网-工业视频.jpg?'+rand_str+'">');
		$("#ad_div_header").html(a_str+header_img + '</a>');
	}
	if(detail_type == 11) {//汽车
		
//		$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看全球工业视频/贤集网-汽车工业.jpg?'+rand_str+'">');
		$("#ad_div_header").html(a_str+header_img + '</a>');
	}
	if(detail_type == 20) {//微头条大厅
		$("#ad_div_header").html(a_str+header_img + '</a>');
	}
	//主站首页
	if(detail_type == 999) {
//		$("#ad_div_header").html('<img style="float:right;margin-top: 10px;" alt="贤集网app下载" src="//front.xianjichina.com/app/app_qrcode/header20210827/看全球工业视频/贤集网-首页.jpg?'+rand_str+'">');
		$("#ad_div_header").html(a_str+header_img + '</a>');
	}

	//var ad_rihua = '<a href="https://cg.rihuacloud.com/?hmsr=%E8%B4%A4%E9%9B%86&hmpl=&hmcu=&hmkw=&hmci=" target="_blank" rel="nofollow"><img src="https://img.xianjichina.com/ad/771558a888c73ca602518335a7e3960a.jpeg" alt="日化智云-专业可靠的研产供一站式OEM/ODM定制解决方案 " width="1100px" height="60px"><div class="ad_div"><b class="ad_word">广告</b><div></div></a>';
    //
	//if(typeof(specialid) != "undefined" && specialid == 27) {
	//	$("#ad_div1").html(ad_rihua);
	//}
})