// 初始化全局变量
var isIE6 = /MSIE 6\./.test(navigator.userAgent) && !window.opera;
var isQuirksMode = (typeof document.compatMode != "undefined" && /CSS.Compat/.test(document.compatMode)) ? false : true;
var d = isQuirksMode ? document.body : document.documentElement;   
var documentPosition = {width:d.clientWidth, height:d.clientHeight, left:d.scrollLeft, top:d.scrollTop};
var objList = new Array();

// 添加监听事件
var ad_addEvent = function(obj, eventType, func){
	if(obj.attachEvent){  
        obj.attachEvent("on" + eventType,func);  
    }else{  
        obj.addEventListener(eventType,func,false);  
    }  
};

// 层随着页面滚动的方法
var scrollDiv = function(options) {
    var obj = document.getElementById(options.container);
    document.getElementById(options.container).style.float = "left";
    var width = obj.offsetWidth;
    var height = obj.offsetHeight;
    var exist = 0;
    if(objList.length > 0) {
        for(var i = 0; i < objList.length; i++) {
            if(objList[i].container == options.container){
                exist = 1;
                break;
            }
        }
        if(exist == 0) {
            objList.push({container:options.container, obj:obj, width:width, height:height, type:options.type});
        }
    } else {
        objList.push({container:options.container, obj:obj, width:width, height:height, type:options.type});
    }

    setPosition();
    //ad_addEvent(window,"scroll",setPosition);
    ad_addEvent(window,"resize",setPosition);
};

var setPosition = function() {
	d = isQuirksMode ? document.body : document.documentElement;
	documentPosition = {width:d.clientWidth, height:d.clientHeight, left:d.scrollLeft, top:d.scrollTop};
	if(objList.length > 0) {
		var left = 0;
		var top = 0;
		//var offset = isIE6 ? parseInt((documentPosition.width - 980)/2) : 0;
		var offset = 0;
		for(var i = 0; i < objList.length; i++) {
			var obj = objList[i].obj;
			switch(objList[i].type) {
				case 'crazy':
//					left = parseInt((documentPosition.width - objList[i].width)/2) - offset;
//					top = parseInt((documentPosition.height - objList[i].height)/2);
					left = parseInt((documentPosition.width - 1000)/2) - offset;
					top = parseInt((documentPosition.height - 600)/2);
					break;
				case 'crazy_mini':
//					left = documentPosition.width - objList[i].width - offset;
//					top = (documentPosition.height - objList[i].height - 50 ) > 0 ? (documentPosition.height - objList[i].height - 50 ) : 0;
					left = documentPosition.width - 40 - offset;
					top = (documentPosition.height - 130 ) > 0 ? (documentPosition.height - 130 ) : 0;
					break;
				case 'duilian_r':
					//left = documentPosition.width/2+500;
					left=documentPosition.width-objList[i].width;
					top = (parseInt((documentPosition.height - objList[i].height)/2) - 100) > 0? parseInt((documentPosition.height - objList[i].height)/2) - 100 : 0 ;
					break;
				case 'duilian_l':
					//left =documentPosition.width/2-490-objList[i].width-10;
					left=0;
					top = (parseInt((documentPosition.height - objList[i].height)/2) - 100) > 0 ? (parseInt((documentPosition.height - objList[i].height)/2) - 100) : 0;
					break;
				case 'duilian_mini_r':
					//left = documentPosition.width/2+500;
					left=documentPosition.width-objList[i].width;
					top = (parseInt((documentPosition.height - objList[i].height)/2) - 100) > 0 ? parseInt((documentPosition.height - objList[i].height)/2) - 100 : 0 ;
					break;
				case 'duilian_mini_l':
					//left = documentPosition.width/2-490-objList[i].width-10;
					left=0;
					top =( parseInt((documentPosition.height - objList[i].height)/2) - 100) > 0 ? parseInt((documentPosition.height - objList[i].height)/2) - 100 :0;
					break;
				case 'tanchuang':
					//left = documentPosition.width - objList[i].width - offset;
					left=0;
					//top = parseInt((documentPosition.height - objList[i].height)/2) - 50;
					top=documentPosition.height - objList[i].height - 50;
					break;
				case 'tanchuang_mini':
					//left = documentPosition.width - objList[i].width - offset;
					left=0;
					top = documentPosition.height - objList[i].height - 50;
					break;
			}
		    if(isIE6){ 
				if(objList[i].type != 'tanchuang'){
					obj.style.position = "absolute";
				}
		        obj.style.setExpression("left", "eval((document.documentElement.scrollLeft || document.body.scrollLeft) + " + left + ")");
				obj.style.setExpression("top", "eval((document.documentElement.scrollTop || document.body.scrollTop) + " + top + ") + 'px'");
				obj.style.zIndex=999;
		    }else{  
		        obj.style.position = "fixed";
		        obj.style.left = left + "px";
		        obj.style.top = top + "px";
		        obj.style.zIndex=999;
		    }  
			  
		}
	}
}



// 疯狂广告
var ad_crazy = new Object();
ad_crazy = {
	init: function(options){
		if (typeof(options) != 'object') {
			return false;
		}
		if (options.container == '' || options.mini == '' || options.closer == ''){
			return false;
		}
		this.options = {
			'showtime' : parseInt(options.showtime) ? options.showtime : '5000',
			'container' : options.container ? options.container : '',
			'mini' : options.mini ? options.mini : '',
			'closer' : options.closer ? options.closer : ''
		}
		this.load_crazy();
	},
	
	load_crazy: function() {
		var container = cheshi.$(this.options.container);
		var mini = cheshi.$(this.options.mini);
		var closer = cheshi.$(this.options.closer);
		mini.style.display = "none";
		container.style.display = "block";
		scrollDiv({container : this.options.container, type : 'crazy'});
		closer.onclick = function(){
			container.style.display = "none";
			mini.style.display = "block";
		};
		setTimeout("ad_crazy.load_crazy_mini()", this.options.showtime);
	},
	
	load_crazy_mini: function(){
		var container = cheshi.$(this.options.container);
		var mini = cheshi.$(this.options.mini);
		var closer = cheshi.$(this.options.closer);
		mini.style.display = "block";
		scrollDiv({container : this.options.mini, type : 'crazy_mini'});
		container.style.display = "none";
		mini.onclick = function() {
			ad_crazy.load_crazy();
		}
	}
};
if($(".adv_crazy").find("div").length>0){
	setTimeout(function(){
	    var opts = {
	        'showtime':'5000',
	        'container':'ad_crazy',
	        'mini':'ad_crazy_mini',
	        'closer':'ad_crazy_closer'
	    };
	    ad_crazy.init(opts);
	}, 7000);
}

// 对联广告
var ad_duilian = new Object();
ad_duilian = {
	init : function(options) {
		if (typeof(options) != 'object') {
			return false;
		}
		if (options.container_r == '' || options.mini_r == '' || options.closer_r == '' || options.container_l == '' || options.mini_l == '' || options.closer_l == ''){
			return false;
		}
		this.options = {
			'showtime' : parseInt(options.showtime) ? options.showtime : '5000',
			'container_r' : options.container_r ? options.container_r : '',
			'container_l' : options.container_l ? options.container_l : '',
			'mini_r' : options.mini_r ? options.mini_r : '',
			'mini_l' : options.mini_l ? options.mini_l : '',
			'closer_r' : options.closer_r ? options.closer_r : '',
			'closer_l' : options.closer_l ? options.closer_l : '',
			'mini_r_ele' : options.mini_r_ele ? options.mini_r_ele : '',
			'mini_l_ele' : options.mini_l_ele ? options.mini_l_ele : '',
			'closer_small_r' : options.closer_small_r ? options.closer_small_r : '',
			'closer_small_l' : options.closer_small_l ? options.closer_small_l : ''
		}
		this.load_duilian();
	},

	load_duilian : function() {
		var container_r = cheshi.$(this.options.container_r);
		var container_l = cheshi.$(this.options.container_l);
		var mini_r = cheshi.$(this.options.mini_r);
		var mini_l = cheshi.$(this.options.mini_l);
		var closer_r = cheshi.$(this.options.closer_r);
		var closer_l = cheshi.$(this.options.closer_l);
		var closer_small_r = cheshi.$(this.options.closer_small_r);
		var closer_small_l = cheshi.$(this.options.closer_small_l);

		container_r.style.display = 'block';
		container_l.style.display = 'block';
		scrollDiv({container : this.options.container_r, type : 'duilian_r'});
		scrollDiv({container : this.options.container_l, type : 'duilian_l'});
		mini_r.style.display = 'none';
		mini_l.style.display = 'none';
		closer_small_l.style.display = 'none';
		closer_small_r.style.display = 'none';

		if(mini_l.getElementsByTagName("img")[0]){
			var src=mini_l.getElementsByTagName("img")[0].getAttribute("src")
		}
		if(mini_l.getElementsByTagName("embed")[0]){
			var src=mini_l.getElementsByTagName("embed")[0].getAttribute("src");
		}
		if(src==""){
			closer_l.style.display="none";
			closer_r.style.display="none";
			return false;
		}
		closer_r.onclick = function () {
			container_r.style.display = 'none';
			container_l.style.display = 'none';
			mini_r.style.display = 'block';
			mini_l.style.display = 'block';
		};
		closer_l.onclick = function () {
			container_r.style.display = 'none';
			container_l.style.display = 'none';
			mini_r.style.display = 'block';
			mini_l.style.display = 'block';
		};
		setTimeout('ad_duilian.load_duilian_mini()', this.options.showtime);
	},

	load_duilian_mini : function() {
		var container_r = cheshi.$(this.options.container_r);
		var container_l = cheshi.$(this.options.container_l);
		var mini_r = cheshi.$(this.options.mini_r);
		var mini_l = cheshi.$(this.options.mini_l);
		var mini_r_ele = cheshi.$(this.options.mini_r_ele);
		var mini_l_ele = cheshi.$(this.options.mini_l_ele);
		var closer_small_r = cheshi.$(this.options.closer_small_r);
		var closer_small_l = cheshi.$(this.options.closer_small_l);

		container_r.style.display = 'none';
		container_l.style.display = 'none';
		mini_r.style.display = 'block';
		mini_l.style.display = 'block';
		closer_small_l.style.display = 'block';
		closer_small_r.style.display = 'block';

		scrollDiv({container : this.options.mini_r, type : 'duilian_mini_r'});
		scrollDiv({container : this.options.mini_l, type : 'duilian_mini_l'});
		mini_r_ele.onmouseover = function(){
			ad_duilian.load_duilian();
		};
		mini_l_ele.onmouseover = function(){
			ad_duilian.load_duilian();
		};
		closer_small_r.onclick = function () {
			mini_r.style.display = 'none';
			mini_l.style.display = 'none';
			closer_small_l.style.display = 'none';
			closer_small_r.style.display = 'none';
		};
		closer_small_l.onclick = function () {
			mini_r.style.display = 'none';
			mini_l.style.display = 'none';
			closer_small_l.style.display = 'none';
			closer_small_r.style.display = 'none';
		};
	}
};

// 弹窗广告
var ad_tanchuang = new Object();
ad_tanchuang = {
	init: function(options) {
		if (typeof(options) != 'object') {
			return false;
		}
		if (options.container == '' || options.closer == ''){
			return false;
		}
		this.options = {
			'showtime' : parseInt(options.showtime) ? options.showtime : '5000',
			'container' : options.container ? options.container : '',
			'mini' : options.mini ? options.mini : '',
			'closer' : options.closer ? options.closer : ''
		}
		this.load_tanchuang();
	},

	load_tanchuang: function() {
		var container = cheshi.$(this.options.container);
		var mini = cheshi.$(this.options.mini);
		var closer = cheshi.$(this.options.closer);
		mini.style.display = 'none';
		container.style.display = 'block';
		scrollDiv({container : this.options.container, type : 'tanchuang'});
		closer.onclick = function() {
			container.style.display = 'none';
			mini.style.display = 'block';
			ad_tanchuang.load_tanchuang_mini();
		}
		setTimeout("ad_tanchuang.load_tanchuang_mini()", this.options.showtime);
	},

	load_tanchuang_mini: function(){
		var container = cheshi.$(this.options.container);
		var mini = cheshi.$(this.options.mini);
		var closer = cheshi.$(this.options.closer);
		mini.style.display = "block";
		scrollDiv({container : this.options.mini, type : 'tanchuang_mini'});
		container.style.display = "none";
		mini.onclick = function() {
			ad_tanchuang.load_tanchuang();
		}
	}
};

// banner鼠标悬停弹出浮层广告
function ad_bannerfloat(){
	var ad_bannerfloat_obj = new Object();
	ad_bannerfloat_obj = {
		timeout_id: "",

		init:function(options) {
			if (typeof(options) != 'object') {
				return false;
			}
			if (options.container == '' || options.closer == ''){
				return false;
			}
			this.options = {
				'showtime' : parseInt(options.showtime) ? options.showtime : '5000',
				'banner': options.banner ? options.banner : '',
				'floatdiv' : options.floatdiv ? options.floatdiv : '',
				'closer' : options.closer ? options.closer : ''
			};
			this.load_bannerfloat();
		},

		close_float: function() {
			var banner = cheshi.$(this.options.banner);
			var floatdiv = cheshi.$(this.options.floatdiv);
			var closer = cheshi.$(this.options.closer);
			floatdiv.style.display = "none";
			clearTimeout(this.timeout_id);
		},

		show_float: function() {
			var banner = cheshi.$(this.options.banner);
			var floatdiv = cheshi.$(this.options.floatdiv);
			var closer = cheshi.$(this.options.closer);
			if(floatdiv.style.display == "none") {
				floatdiv.style.display = "block";
				this.timeout_id = setTimeout(function(){
					ad_bannerfloat_obj.close_float();
				}, this.options.showtime);
			}
		},

		load_bannerfloat: function() {
			var banner = cheshi.$(this.options.banner);
			var floatdiv = cheshi.$(this.options.floatdiv);
			var closer = cheshi.$(this.options.closer);
			banner.onmouseover = function() {
				ad_bannerfloat_obj.show_float();
			};
			closer.onclick = function() {
				ad_bannerfloat_obj.close_float();
			};
		}
	};
	return ad_bannerfloat_obj;
}
// 可关闭视频通栏，默认可以循环播放
var ad_videobanner = new Object();
ad_videobanner = {

	init:function(options) {
		if (typeof(options) != 'object') {
			return false;
		}
		if (options.container == '' || options.closer == ''){
			return false;
		}
		this.options = {
			'showtime' : parseInt(options.showtime) ? options.showtime : '0',
			'container': options.container ? options.container : '',
			'flasher' : options.flasher ? options.flasher : '',
			'closer' : options.closer ? options.closer : ''
		};
		this.load_videobanner();
	},

	load_videobanner: function() {
		var container = cheshi.$(this.options.container);
		var closer = cheshi.$(this.options.closer);
		var flasher = cheshi.$(this.options.flasher);
		closer.onclick = function() {
			container.style.display = "none";
			document.body.removeChild(container);
		}
	}

};

//头部广告缩小
//var ads_autoshow = [8225];
//var init_ads = function(){
//  if (ads_autoshow.length > 0){
//      for (i=0; i<ads_autoshow.length; i++){
//          el = document.getElementById('ad_pos_' + ads_autoshow[i]);
//      if (el) {
//          oDiv_small = el.getElementsByTagName("div")[0];
//          oDiv_big   = el.getElementsByTagName("div")[1];
//
//          setTimeout(function(){
//              oDiv_big.style.display = 'none';
//              oDiv_small.style.display = '';
//              }, 5000);
//          }
//      }
//  }
//};
//
//init_ads();


$(function(){
	if(typeof(csad_vars) != "undefined"){
                //var nowurl = document.referrer;
                //var signstatus = nowurl.indexOf("imp5.html");
		for(var i=0;i<csad_vars.length;i++){
			if(csad_vars[i][48] == "yes" && csad_vars[i][15]==0){
				var img = document.createElement('img')
				var pid = csad_vars[i][0];
				var aid = csad_vars[i][13];
				var urlLink =csad_vars[i][49];
				var src = 'https://weblogic.cheshi18.com/ad/adv?pid='+pid+'&aid='+aid+'&r='+Math.random()+'&url='+urlLink;
				img.onload=function(){
					img = null;
				}
				img.src = src;
			}
			
		}
	}
	
	//底部广告
    var _footerAd = $(".footer_ad");
    var _footerAdBig = _footerAd.find(".ad_mouse_over");
	var _footerAdSmall = _footerAd.find(".ad_mouse_out");
	var _adtimer = null;
	_footerAd.css({"display":"none"});
    if(_footerAdBig.length>0){
    	_footerAdBig.append('<img class="hide" style="position:absolute;right:0;top:0;z-index:10;" src="http://icon.cheshi-img.com/www/home/close.png">');
    	_footerAdSmall.css({"display":"none","position":"fixed","left":"0","bottom":"0","width":"20px","height":"120px"});
        _footerAdBig.css({"display":"block"});
        _footerAd.css({"display":"block"});
        hoverAd();
        function hoverAd(){
        	clearTimeout(_adtimer);
            _adtimer = setTimeout(function(){
                _footerAd.css({"width":"20px","overflow":"hidden"});
                _footerAdBig.css({"display":"none"});
                _footerAdSmall.css({"display":"block"});
            },5000);
        }
        _footerAdSmall.mouseover(function(){
            _footerAd.css({"width":"100%"});
            _footerAdSmall.css({"display":"none"});
            _footerAdBig.css({"display":"block"});
        })
        _footerAdSmall[0].onmouseout = function(){
            hoverAd();
        };
        
        _footerAdBig.mouseover(function(){
            _footerAd.css({"width":"100%"});
            _footerAdSmall.css({"display":"none"});
            _footerAdBig.css({"display":"block"});
        });
        _footerAdBig[0].onmouseout = function(){
        	hoverAd();
        };
        $(".footer_ad .hide").click(function(){
        	_footerAd.css({"width":"20px","overflow":"hidden"});
        	_footerAdBig.css({"display":"none"});
            _footerAdSmall.css({"display":"block"});
        });
    }else{
        _footerAd.css({"display":"none"});
    }
});