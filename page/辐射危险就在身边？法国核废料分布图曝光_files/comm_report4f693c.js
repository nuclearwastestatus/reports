define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">分享给订阅用户</div>\n            <p class="share_appmsg_desc">可快速分享原创文章给你的公众号订阅用户</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/appmsgext.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js","biz_common/utils/wxgspeedsdk.js"],function(e){
"use strict";
function t(e){
function t(e){
for(var t=window.location.href,i=t.indexOf("?"),s=t.substr(i+1),_=s.split("&"),n=0;n<_.length;n++){
var a=_[n].split("=");
if(a[0].toUpperCase()==e.toUpperCase())return a[1];
}
return"";
}
var o={
biz:"",
appmsg_type:"",
mid:"",
sn:"",
album_id:"",
idx:"",
scene:"",
title:"",
ct:"",
abtest_cookie:"",
devicetype:"",
version:"",
is_need_ticket:0,
is_need_ad:0,
comment_id:"",
is_need_reward:0,
both_ad:0,
reward_uin_count:0,
send_time:"",
msg_daily_idx:"",
is_original:0,
is_only_read:0,
req_id:"",
pass_ticket:"",
is_temp_url:0,
more_read_type:0,
rtId:"",
rtKey:"",
appmsg_like_type:1,
related_video_sn:"",
vid:"",
is_pay_subscribe:0,
pay_subscribe_uin_count:0,
has_red_packet_cover:0,
related_video_num:4,
album_video_num:5,
onSuccess:function(){},
onError:function(){}
};
for(var d in e)e.hasOwnProperty(d)&&(o[d]=e[d]);
console.info("[(评论、点赞、赞赏) 发送请求]: ",new Date),s({
url:"/mp/getappmsgext?f=json&mock="+t("mock"),
data:{
r:Math.random(),
__biz:o.biz,
appmsg_type:o.appmsg_type,
mid:o.mid,
sn:o.sn,
idx:o.idx,
scene:o.scene,
title:encodeURIComponent(o.title.htmlDecode()),
ct:o.ct,
abtest_cookie:o.abtest_cookie,
devicetype:o.devicetype.htmlDecode(),
version:o.version.htmlDecode(),
is_need_ticket:o.is_need_ticket,
is_need_ad:o.is_need_ad,
comment_id:o.comment_id,
is_need_reward:o.is_need_reward,
both_ad:o.both_ad,
reward_uin_count:o.is_need_reward?o.reward_uin_count:0,
send_time:o.send_time,
msg_daily_idx:o.msg_daily_idx,
is_original:o.is_original,
is_only_read:o.is_only_read,
req_id:o.req_id,
pass_ticket:o.pass_ticket,
is_temp_url:o.is_temp_url,
item_show_type:o.item_show_type,
tmp_version:1,
more_read_type:o.more_read_type,
appmsg_like_type:o.appmsg_like_type,
related_video_sn:o.related_video_sn,
related_video_num:o.related_video_num,
vid:o.vid,
is_pay_subscribe:o.is_pay_subscribe,
pay_subscribe_uin_count:o.pay_subscribe_uin_count,
has_red_packet_cover:o.has_red_packet_cover,
album_id:0x11fd1c7c75070000,
album_video_num:o.album_video_num
},
type:"POST",
dataType:"json",
rtId:o.rtId,
rtKey:o.rtKey,
rtDesc:_,
async:!0,
success:function(e){
if(console.info("[(评论、点赞、赞赏) 响应请求]: ",new Date,e),i("[Appmsg] success get async data"),
"function"==typeof o.onSuccess&&o.onSuccess(e),e)try{
i("[Appmsg] success get async data, async data is: "+JSON.stringify(e));
}catch(t){}else i("[Appmsg] success get async data, async data is empty");
if(!a&&"5"===window.item_show_type){
var s=Date.now()-window.logs.pagetime.page_begin;
if(a=!0,Math.random()>.1)return;
n.saveSpeeds({
uin:window.uin,
pid:675,
speeds:[{
sid:29,
time:s
}]
}),n.send();
}
},
error:function(){
i("[Appmsg] error get async data, biz="+o.biz+", mid="+o.mid),"function"==typeof o.onError&&o.onError();
},
complete:function(){
"function"==typeof o.onComplete&&o.onComplete();
}
});
}
var i=e("appmsg/log.js"),s=e("biz_wap/utils/ajax.js"),_=e("rt/appmsg/getappmsgext.rt.js"),n=e("biz_common/utils/wxgspeedsdk.js"),a=void 0;
return{
getData:t
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">来自: <#=source_nickname#></span>\n</span>    ';
});define("pages/video_ctrl.js",[],function(){
"use strict";
function i(i){
i=i||window;
var n=i.cgiData;
return n&&2==n.ori_status&&1==n.is_mp_video&&(n.nick_name||n.hit_username)?!0:!1;
}
function n(i){
return i=i||window,!1;
}
function e(){
return!1;
}
function t(){
return-1!=r.indexOf("&dd=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function o(){
var i;
if(parent==window)i=window;else try{
{
parent.window.__videoDefaultRatio;
}
i=parent.window;
}catch(n){
i=window;
}
var e=i.__videoDefaultRatio||16/9;
return"54"==i.appmsg_type?e:e;
}
var r=window.location.href;
return{
showPauseTips:t,
showVideoLike:e,
showVideoDetail:n,
showReprint:i,
getRatio:o
};
});define("pages/create_txv.js",["biz_wap/utils/jsmonitor_report.js","biz_wap/utils/ajax_load_js.js","pages/loadscript.js"],function(e){
"use strict";
function o(){
"function"!=typeof window.__createTxVideo&&(window.__createTxVideo=function(e){
n(e);
});
}
function n(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError),
r.Load({
url:a.jsUrl,
version:a.jsVersion,
useCache:!0,
win:e.win,
onSuccess:function(s){
2!=s.code&&3!=s.code||0!=s.queueIndex||(i.setSum("64728","111",1),i.setSum("64728","112",1));
var u=e.win||window,c=!0;
if(u.Txp&&"function"==typeof u.Txp.Player?(c=!0,0==s.queueIndex&&(2==s.code?i.setSum("64728","116",1):3==s.code&&i.setSum("64728","117",1))):(c=!1,
0==s.queueIndex&&(2==s.code?i.setSum("64728","114",1):3==s.code&&i.setSum("64728","115",1))),
c){
var d=t({
win:u,
options:e
});
n({
player:d
});
}else r.ClearCache({
win:u,
version:a.jsVersion,
url:a.jsUrl
}),o();
},
onError:function(o){
0==o.queueIndex&&(i.setSum("64728","111",1),i.setSum("64728","118",1),51==o.code?i.setSum("64728","119",1):52==o.code?i.setSum("64728","120",1):53==o.code&&i.setSum("64728","121",1)),
s(e);
}
});
}
function t(e){
var o=e.win||window,n=e.options,t=new o.Txp.Player({
containerId:n.containerId,
vid:n.vid,
width:n.width,
height:n.height,
autoplay:n.autoplay===!0?!0:!1,
allowFullScreen:n.allowFullScreen===!0?!0:!1,
chid:17
});
return t;
}
function s(e){
var o=function(){},n=function(){};
"function"==typeof e.onSuccess&&(n=e.onSuccess),"function"==typeof e.onError&&(o=e.onError);
var s=a.jsUrl;
s+=-1==s.indexOf("?")?"?"+a.customerParam+"="+a.jsVersion:"&"+a.customerParam+"="+a.jsVersion,
u({
win:e.win,
url:s,
timeout:1e4,
type:"JS",
callback:function(){
i.setSum("64728","122",1);
var s=e.win||window;
if(s.Txp&&"function"==typeof s.Txp.Player){
i.setSum("64728","124",1);
var r=t({
win:e.win,
options:e
});
n({
player:r
});
}else i.setSum("64728","123",1),o();
},
onerror:function(e){
switch(i.setSum("64728","122",1),1*e){
case 400:
a.jsLoadState=4,i.setSum("64728","125",1);
break;

case 500:
a.jsLoadState=5,i.setSum("64728","126",1);
break;

default:
a.jsLoadState=6,i.setSum("64728","127",1);
}
o();
}
});
}
var i=e("biz_wap/utils/jsmonitor_report.js"),r=e("biz_wap/utils/ajax_load_js.js"),u=e("pages/loadscript.js"),a={
customerParam:"wxv",
jsUrl:"//vm.gtimg.cn/tencentvideo/txp/js/iframe/api.js?",
jsVersion:"v1"
};
return{
createTxVideo:n,
createGlobalFunc:o
};
});define("appmsg/tags_utils.js",["biz_wap/ui/weui.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_common/dom/class.js","biz_wap/utils/mmversion.js","common/utils.js","common/comm_report.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var n=e("biz_common/dom/event.js"),i=e("biz_wap/jsapi/core.js"),t=e("biz_common/dom/class.js"),o=e("biz_wap/utils/mmversion.js"),s=e("common/utils.js"),a=e("common/comm_report.js"),r=function(e){
var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t=arguments.length<=2||void 0===arguments[2]?"webview":arguments[2];
if(e){
/^http/.test(e)||(e=location.protocol+"//"+location.host+e);
var s=(-1===e.indexOf("?")?"?":"&")+Object.keys(n).map(function(e){
return e+"="+n[e];
}).join("&"),a=e.indexOf("#");
switch(-1===a?e+=s+"#wechat_redirect":e=e.slice(0,a)+s+e.slice(a),t){
case"webview":
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(o.isIOS||o.isAndroid||o.isWp)?i.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(n){
-1===n.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e;
break;

case"href":
default:
location.href=e;
}
}
},c=document.getElementById("js_tags_preview_toast"),d=null,u=function(){
c&&(c.style.display="",d&&clearTimeout(d),d=setTimeout(function(){
c.style.display="none",d=null;
},3e3));
},m=function(e,n){
a.report(20158,{
bizuin:window.biz,
msgid:1*window.mid,
itemidx:1*window.idx,
Scene:1*window.source,
Subscene:1*window.subscene,
SessionId:window.sessionid+"",
EnterId:1*window.enterid,
Actiontype:1*e,
PublicTagList:n+""
});
},l=!1;
return{
init:function(e){
var i=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];
if(1!==window.reprint_style&&2!==window.reprint_style&&3!==window.reprint_style&&!l&&0!==i.length){
l=!0,e.innerHTML=i.map(function(e){
return'<span class="article-tag__item js_tag" data-url="/mp/publictag?action=get&tag_id='+e.tag_id+"&start=0&count=10&scene="+window.source+"&subscene="+window.subscene+"&sessionid="+window.sessionid+"&enterid="+window.enterid+'" data-tag_id="'+e.tag_id+'">#'+e.tag_name+"#</span>";
}).join(""),n.tap(e,function(e){
var n=e.target;
t.hasClass(n,"js_tag")&&(window.is_temp_url?u():(m(2,n.dataset.tag_id),r(n.dataset.url,{
scene:173
})));
});
var o=function a(t){
var o=s.getInnerHeight()+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop);
e.offsetTop<o?("function"!=typeof t&&n.off(window,"scroll",a),m(1,i.map(function(e){
return e.tag_id;
}).join("_"))):"function"==typeof t&&t();
};
o(function(){
n.on(window,"scroll",o);
});
}
}
};
});define("appmsg/pay_read_utils.js",["biz_wap/ui/weui.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_wap/utils/mmversion.js","biz_wap/utils/device.js","appmsg/pay_report_utils.js","common/utils.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var i=e("biz_wap/jsapi/core.js"),n=e("biz_common/dom/event.js"),r=e("biz_wap/utils/mmversion.js"),a=e("biz_wap/utils/device.js"),t=e("appmsg/pay_report_utils.js"),o=e("common/utils.js"),s=function(e){
var i=arguments.length<=1||void 0===arguments[1]?document:arguments[1];
return i.querySelector(e);
},d=window.payFreeGift,w=document.documentElement&&document.documentElement.clientWidth||window.innerWidth;
try{
var u=s("#img-content");
if(u){
var _=u.getBoundingClientRect();
_.width&&(w=_.width);
}
}catch(p){
console.error(p);
}
var c=32,l=8,m='<div class="pay__tag-reward js_reward"></div>',f={
dom:{
payFee:[s("#js_pay_panel .js_pay_fee"),s("#js_pay_panel_bottom .js_pay_fee")],
wrap:s("#js_pay_wall_wrap"),
payNum:s("#js_pay_num"),
rewardNumWrap:s("#js_pay_reward_num_wrap"),
rewardNum:s("#js_pay_reward_num"),
wall:s("#js_pay_wall"),
giftBar:s("#js_pay_gift_bar"),
sendGift:s("#js_send_pay_gift")
},
perLine:null,
data:{}
},y=function(e){
e&&(/^http/.test(e)||(e=location.protocol+"//"+location.host+e),e.indexOf("#")<0&&(e+="#wechat_redirect"),
-1!==navigator.userAgent.indexOf("MicroMessenger")&&(r.isIOS||r.isAndroid||r.isWp)?i.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(i){
-1===i.err_msg.indexOf("ok")&&(location.href=e);
}):location.href=e);
},g=function(){
var e=f.dom,i=f.data,n=parseInt(i.pay_cnt,10);
e.payNum.innerHTML=n>=1e4||i.is_pay_cnt_cut?"en"===window.LANG?"10k+":"1万+":n+"",
i.rewardTotal?(e.rewardNum.innerHTML=i.rewardTotal+(i.rewardTotalCut?"+":""),e.rewardNumWrap.style.display=""):e.rewardNumWrap.style.display="none";
for(var r=3*f.perLine,a="",t=0,o=i.pay_head_imgs.length;o>t;t++){
var s=i.reward_status_list?i.reward_status_list[t]:0;
if(a+='<div class="pay__avatar-wrp"><img src="'+i.pay_head_imgs[t]+'">'+(s?m:"")+"</div>",
t>=r-1)break;
}
e.wall.innerHTML=a;
},h=function(){
var e=f.dom;
n.tap(e.payNum,function(){
y("/mp/paysub?action=evaluate_show_page&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&link="+encodeURIComponent(window.msg_link)+"&from_scene="+window.source+"&from_subscene="+window.subscene+"&is_fans="+window.isFans);
}),n.tap(e.rewardNum,function(){
var e=(Math.ceil((o.getInnerHeight()-188)/42)+1)*Math.floor((w-15)/42);
y("/mp/reward?act=getrewardheads&__biz="+window.biz+"&appmsgid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"&offset=0&count="+e+"&source=1");
}),n.tap(e.sendGift,function(){
if(a.os.iphone||a.os.ipad||a.os.android){
var e=f.data.gift_url.html(),i="",n=e.indexOf("#");
-1!==n&&(i=e.substring(n),e=e.substring(0,n)),y(e+"&sessionid="+window.sessionid+"&enterid="+window.enterid+"&scene="+window.source+"&subscene="+window.subscene+i);
}else window.weui.alert("请使用移动端微信打开");
});
},v=function(e,i,n){
if(window.isPaySubscribe){
var a=f.dom;
if(e=JSON.parse(JSON.stringify(e)),!e.fee||window.isPaid||window.IAPProductInfo||!function(){
var i=Math.floor(e.fee/100);
a.payFee.forEach(function(e){
e.innerHTML="￥"+i+".00",e.parentNode.dataset.ready=1;
});
}(),r.isIOS&&e.fee&&(window.IAPProductInfo?("CNY"!==window.IAPProductInfo.currencyCode&&t.report110809(40),
t.reportOverseaPay(window.IAPProductInfo.currencyCode,100*window.IAPProductInfo.price.toFixed(2),1,window.IAPProductInfo.invokeTime,window.IAPProductInfo.countryCode,0,window.IAPProductInfo.err_msg+(window.IAPProductInfo.err_desc?"__"+window.IAPProductInfo.err_desc:""))):window.oriProductFee=Math.floor(e.fee/100)),
e.pay_cnt){
if(e.is_paid&&!d){
e.pay_head_imgs.unshift(e.my_head_img),e.reward_status_list instanceof Array?e.reward_status_list.unshift(e.my_reward_status):e.reward_status_list=[e.my_reward_status];
var o=3*f.perLine;
e.pay_head_imgs.length>o&&(e.pay_head_imgs=e.pay_head_imgs.slice(0,o));
}
e.rewardTotal=i.rewardTotal,e.rewardTotalCut=i.rewardTotalCut,f.data=e,a.wrap.style.height="",
a.wrap.style.marginTop="",a.wrap.style.visibility="visible",g(),!n&&h();
}else a.wrap.style.display="none";
a.giftBar&&(a.giftBar.style.display=window.payGiftsCount-e.gifted_count>0&&!d?"":"none");
}
},b=function(){
if(!window.isPaySubscribe)return 0;
if(null===f.perLine){
var e=c+l;
f.perLine=Math.floor(.8*w/e),f.dom.wall.parentNode.style.width=f.perLine*e-l+"px";
}
return f.perLine;
};
return{
init:v,
getCountPerLine:b
};
});define("appmsg/reward_utils.js",["biz_wap/ui/weui.js","appmsg/reward_entry.js","biz_wap/utils/mmversion.js","biz_common/dom/class.js","biz_common/dom/event.js"],function(e){
"use strict";
e("biz_wap/ui/weui.js");
var r=e("appmsg/reward_entry.js"),n=e("biz_wap/utils/mmversion.js"),i=e("biz_common/dom/class.js"),a=e("biz_common/dom/event.js"),t=window.navigator.userAgent,d={
perLine:0,
hasBindResize:!1,
hasInit:!1,
pageContainerId:"img-content",
rewardInnerId:"js_reward_inner"
},s=function(e){
return document.getElementById(e);
},o=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=e.pageContainerId||d.pageContainerId,n=e.rewardInnerId||d.rewardInnerId,i=window.innerWidth||document.documentElement.clientWidth;
try{
var a=s(r).getBoundingClientRect();
a.width&&(i=a.width);
}catch(t){}
var o=36;
d.perLine=Math.floor(.8*i/o);
var w=s(n);
return w&&(w.style.width=d.perLine*o+"px"),d.perLine;
},w=function(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.pageContainerId||d.pageContainerId,i=e.rewardInnerId||d.rewardInnerId;
return e.can_reward&&s(n)&&s(i)?(d.hasBindResize||!function(){
d.hasBindResize=!0;
var n=window.innerWidth;
a.on(window,"resize",function(){
window.innerWidth!==n&&(n=window.innerWidth,o(e),d.hasInit&&r.render(d.perLine));
});
}(),d.perLine||o(e),d.perLine):0;
},_=function(e,o){
d.hasInit=!0;
var _=e.author_id||window.author_id;
e.reward_head_imgs=e.reward_head_imgs||[];
var m=s("js_author_name");
if(o.reward_entrance_enable_for_preview)if(n.isInMiniProgram)n.isInMiniProgram&&m&&i.removeClass(m,"rich_media_meta_link");else{
if(_||n.isAndroid){
var u=s("js_preview_reward_author");
u&&(u.style.display="block");
var p=s("js_preview_reward_author_wording");
o.reward_wording&&p&&(p.innerText=o.reward_wording,p.style.display="block");
var h=s("js_preview_reward_author_link");
h&&(window.item_show_type&&1*window.item_show_type===5||a.on(h,"tap",function(e){
e.preventDefault(),window.weui.alert("预览状态下无法操作");
}));
}
if(_){
var l=s("js_preview_reward_author_avatar"),c=s("js_preview_reward_author_head");
o.reward_author_head&&l&&c&&(c.setAttribute("src",o.reward_author_head),l.style.display="block");
var v=s("js_preview_reward_link_text");
v&&(v.innerText="喜欢作者");
}else n.isAndroid&&(s("js_preview_reward_author_name").style.display="none");
}else!n.isInMiniProgram&&(t.indexOf("WindowsWechat")>-1||n.isIOS||n.isAndroid)?(r.handle(e,w({
pageContainerId:o.pageContainerId,
rewardInnerId:o.rewardInnerId,
can_reward:1==e.can_reward?!0:!1
})),m&&e.rewardsn&&e.timestamp&&(m.setAttribute("data-rewardsn",e.rewardsn),m.setAttribute("data-timestamp",e.timestamp),
m.setAttribute("data-canreward",e.can_reward)),m&&!e.can_reward&&i.removeClass(m,"rich_media_meta_link")):m&&i.removeClass(m,"rich_media_meta_link");
};
return{
init:_,
getCountPerLine:w
};
});define("biz_common/ui/imgonepx.js",[],function(){
"use strict";
return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
});define("appmsg/malicious_wording.js",[],function(){
"use strict";
var i={
0:{
90041:"此标题包含夸大误导信息",
20012:"此标题包含低俗恶俗内容"
},
1:{
90041:"",
20012:""
},
2:{
90041:"此文章包含夸大误导信息",
20012:"此文章包含低俗恶俗内容"
}
},s={
0:{
90041:"标题使用夸大、煽动、低俗等词语造成误导或引人不适",
20012:"标题使用低俗或恶俗词语造成不正当影响或引人不适"
},
1:{
90041:"摘要包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"摘要包含低俗或恶俗内容造成不正当影响或引人不适"
},
2:{
90041:"文章包含误导、煽动的信息引人不适或造成微信用户混淆",
20012:"文章包含低俗或恶俗内容造成不正当影响或引人不适"
}
};
return{
maliciousTitleMap:i,
maliciousDescMap:s
};
});!function(n){
"use strict";
function t(n,t){
var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);
return u<<16|65535&r;
}
function r(n,t){
return n<<t|n>>>32-t;
}
function u(n,u,e,o,c,f){
return t(r(t(t(u,n),t(o,f)),c),e);
}
function e(n,t,r,e,o,c,f){
return u(t&r|~t&e,n,t,o,c,f);
}
function o(n,t,r,e,o,c,f){
return u(t&e|r&~e,n,t,o,c,f);
}
function c(n,t,r,e,o,c,f){
return u(t^r^e,n,t,o,c,f);
}
function f(n,t,r,e,o,c,f){
return u(r^(t|~e),n,t,o,c,f);
}
function i(n,r){
n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;
var u,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;
for(u=0;u<n.length;u+=16)i=l,h=d,a=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),
v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),
C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),
l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),
d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),
v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),
C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),
l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),
d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),
v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),
C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),
l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),
d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),
v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),
C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),
l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),
d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),
v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),
C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),
l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),
d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),
v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,h),
v=t(v,a),C=t(C,g);
return[l,d,v,C];
}
function h(n){
var t,r="";
for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
return r;
}
function a(n){
var t,r=[];
for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
return r;
}
function g(n){
return h(i(a(n),8*n.length));
}
function l(n,t){
var r,u,e=a(n),o=[],c=[];
for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],
c[r]=1549556828^e[r];
return u=i(o.concat(a(t)),512+8*t.length),h(i(c.concat(u),640));
}
function d(n){
var t,r,u="0123456789abcdef",e="";
for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);
return e;
}
function v(n){
return unescape(encodeURIComponent(n));
}
function C(n){
return g(v(n));
}
function s(n){
return d(C(n));
}
function A(n,t){
return l(v(n),v(t));
}
function m(n,t){
return d(A(n,t));
}
n.md5=function(n,t,r){
return t?r?A(t,n):m(t,n):r?C(n):s(n);
};
}("function"==typeof jQuery?jQuery:this);define("common/color/light.js",[],function(){
"use strict";
return{
"BG-0":"#ededed",
"BG-1":"#f7f7f7",
"BG-2":"#fff",
"BG-3":"#f7f7f7",
"BG-4":"#4c4c4c",
"BG-5":"#fff",
"FG-0":"rgba(0, 0, 0, 0.9)",
"FG-HALF":"rgba(0, 0, 0, 0.9)",
"FG-1":"rgba(0, 0, 0, 0.5)",
"FG-2":"rgba(0, 0, 0, 0.3)",
"FG-3":"rgba(0, 0, 0, 0.1)",
RED:"#fa5151",
ORANGE:"#fa9d3b",
YELLOW:"#ffc300",
GREEN:"#91d300",
LIGHTGREEN:"#95ec69",
BRAND:"#07c160",
BLUE:"#10aeff",
INDIGO:"#1485ee",
PURPLE:"#6467f0",
WHITE:"#fff",
LINK:"#576b95",
TEXTGREEN:"#06ae56",
FG:"black",
BG:"white",
"TAG-TEXT-ORANGE":"#fa9d3b",
"TAG-BACKGROUND-ORANGE":"rgba(250, 157, 59, 0.1)",
"TAG-TEXT-GREEN":"#06ae56",
"TAG-BACKGROUND-GREEN":"rgba(6, 174, 86, 0.1)",
"TAG-TEXT-BLUE":"#10aeff",
"TAG-BACKGROUND-BLUE":"rgba(16, 174, 255, 0.1)",
"TAG-TEXT-BLACK":"rgba(0, 0, 0, 0.5)",
"TAG-BACKGROUND-BLACK":"rgba(0, 0, 0, 0.05)"
};
});define("biz_common/utils/monitor.js",[],function(){
"use strict";
function t(t,r){
if(null===t)return{};
for(var o={},e=Object.keys(t),n=0;n<e.length;n++){
var i=e[n];
r.indexOf(i)>=0||(o[i]=t[i]);
}
return o;
}
function r(t){
var r=[],o=null;
for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.push(o+"="+encodeURIComponent(t[o]));
return r.join("&");
}
var o=[],e="/mp/jsmonitor?#wechat_redirect",n={};
return window.__monitor?window.__monitor:(n._reportOptions={
idkey:{}
},n.getReportData=function(t){
t=t||{};
var r,e,i=n._reportOptions.idkey||{},p=null;
try{
for(p in i)Object.prototype.hasOwnProperty.call(i,p)&&i[p]&&o.push(p+"_"+i[p]);
}catch(a){
return!1;
}
if(0===o.length)return!1;
try{
var c=n._reportOptions;
if(null!==c&&void 0!==c)for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(r[e]=c[e]);
}catch(a){
r={};
}
return r.idkey=o.join(";"),r.t=Math.random(),t.remove!==!1&&(o=[],n._reportOptions={
idkey:{}
}),r;
},n.setLogs=function(r){
var o=r.id,e=r.key,i=r.value,p=t(r,["id","key","value"]),a=n._reportOptions.idkey||{},c=o+"_"+e;
a[c]?a[c]+=i:a[c]=i,n._reportOptions.idkey=a;
try{
if(null!==p&&void 0!==p)for(var s in p)Object.prototype.hasOwnProperty.call(p,s)&&(n._reportOptions[s]=p[s]);
}catch(u){
console.log(u);
}
return n;
},n.setAvg=function(t,r,o){
var e=n._reportOptions.idkey||{},i=t+"_"+r,p=t+"_"+(r-1);
return e[i]?e[i]+=o:e[i]=o,e[p]?e[p]+=1:e[p]=1,n._reportOptions.idkey=e,n;
},n.setSum=function(t,r,o){
var e=n._reportOptions.idkey,i=t+"_"+r;
return e[i]?e[i]+=o:e[i]=o,n._reportOptions.idkey=e,n;
},n.send=function(t,o){
t!==!1&&(t=!0);
var i=n.getReportData();
i&&(o&&o instanceof Function?o({
url:e,
type:"POST",
mayAbort:!0,
data:i,
async:t,
timeout:2e3
}):(new Image).src=location.origin+"/mp/jsmonitor?"+r(i)+"#wechat_redirect");
},window.__monitor=n,n);
});var _extends=Object.assign||function(e){
for(var n=1;n<arguments.length;n++){
var t=arguments[n];
for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);
}
return e;
};
define("pages/utils.js",["appmsg/appmsg_report.js","biz_common/utils/emoji_data.js","pages/version4video.js","biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","album/utils/report.js","common/utils.js","biz_common/utils/url/parse.js","appmsg/i18n.js"],function(require,exports,module,alert){
"use strict";
function getParam(e){
if(!e)return null;
var n=location.href.match(new RegExp("(\\?|&)"+e+"=([^&]+)"));
return n?n[2]:null;
}
function setTwoTabHeight(e){
if(window.hasChannelTwoTab&&commonUtils.isNewNativePage()){
var n=void 0;
n=document.getElementById("tab").offsetTop-window.minHeight;
var t=document.body.offsetHeight,i=commonUtils.getInnerHeight()+n;
if(i>t){
var o=n+commonUtils.getInnerHeight()-document.body.offsetHeight,r=document.createElement("div");
r.setAttribute("class","empty_comment_element"),r.style.cssText="height: "+o+"px;",
document.getElementById(e).appendChild(r);
}
window.minMountHeight=i;
}
}
function getNetWorkType(){
DomEvent.on(window,"load",function(){
!window.__networkType&&g.inWechat&&!function(){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(n){
window.__networkType=e[n.err_msg];
});
}();
},!1);
}
function shareMessage(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n={
appId:e.appId,
img_url:e.img_url,
img_width:e.img_width,
img_height:e.img_height,
link:e.link.replace(/<br\/>/g,"\n"),
desc:e.desc.replace(/<br\/>/g,"\n"),
title:e.title
};
getNetWorkType(),/#wechat_redirect/.test(n.link)||(n.link+="#wechat_redirect");
var t="",i={
url:n.link,
actionType:0
};
e.isAlbum&&(t="album",n=_extends({
album_id:e.album_id,
album_type:e.album_type
},n),i=_extends({
albumId:e.album_id,
albumType:e.album_type
},i)),JSAPI.on("menu:share:appmessage",function(e){
var o=void 0;
e&&"favorite"===e.scene?(o=24,n.link=changeURLArg(n.link,"scene",sceneType[1])):(o=1,
n.link=changeURLArg(n.link,"scene",sceneType[0])),i.url=n.link,i.actionType=o,shareReport(t,i),
JSAPI.invoke("sendAppMessage",n);
}),JSAPI.on("menu:share:timeline",function(){
n.link=changeURLArg(n.link,"scene",sceneType[2]),i.url=n.link,i.actionType=2,shareReport(t,i),
JSAPI.invoke("shareTimeline",n);
}),JSAPI.on("menu:share:weiboApp",function(){
n.link=changeURLArg(n.link,"scene",sceneType[3]),i.url=n.link,i.actionType=3,shareReport(t,i),
JSAPI.invoke("shareWeiboApp",{
img_url:n.img_url,
link:n.link,
title:n.title
});
}),JSAPI.on("menu:share:facebook",function(){
n.link=changeURLArg(n.link,"scene",sceneType[4]),i.url=n.link,i.actionType=7,shareReport(t,i),
JSAPI.invoke("shareFB",n);
}),JSAPI.on("menu:share:QZone",function(){
n.link=changeURLArg(n.link,"scene",sceneType[5]),i.url=n.link,i.actionType=5,shareReport(t,i),
JSAPI.invoke("shareQZone",n);
}),JSAPI.on("menu:share:qq",function(){
n.link=changeURLArg(n.link,"scene",sceneType[6]),i.url=n.link,i.actionType=5,shareReport(t,i),
JSAPI.invoke("shareQQ",n);
}),JSAPI.on("menu:share:email",function(){
n.link=changeURLArg(n.link,"scene",sceneType[7]),i.url=n.link,i.actionType=5,shareReport(t,i),
JSAPI.invoke("sendEmail",{
content:n.link,
title:n.title
});
});
}
function getQuery(e){
for(var n=window.location.href,t=n.indexOf("?"),i=n.substr(t+1),o=i.split("&"),r=0;r<o.length;r++){
var a=o[r].split("=");
if(a[0].toUpperCase()==e.toUpperCase())return a[1];
}
return"";
}
function prepareNativePage(e,n){
JSAPI.invoke("createWebViewForFastLoad",{
scene:1
},function(){
e.forEach(function(e){
JSAPI.invoke("downloadPageDataForFastLoad",{
itemList:[{
item_show_type:5,
url:e[n]
}]
},function(e){
console.log(e);
});
});
});
}
function debounce(e,n,t){
var i=void 0;
return function(){
var o=this,r=arguments,a=function(){
i=null,t||e.apply(o,r);
},s=t&&!i;
clearTimeout(i),i=setTimeout(a,n),s&&e.apply(o,r);
};
}
function formatSeconds(e){
var n=parseInt(e,10),t=0,i=0;
n>60&&(t=parseInt(n/60,10),n=parseInt(n%60,10),t>60&&(i=parseInt(t/60,10),t=parseInt(t%60,10))),
10>n&&(n="0"+n);
var o=":"+n;
return t>0?(10>t&&(t="0"+t),o=t+o):o="00"+o,i>0&&(0===parseInt(i,10)?i="":10>i&&(i="0"+i),
o=""+i+":"+o),o;
}
function formatReadNum(e){
if("en"===window.LANG)return i18n.dealLikeReadShow_en(e);
var n="";
if(parseInt(e,10)>1e5)n="10万+";else if(parseInt(e,10)>1e4&&parseInt(e,10)<=1e5){
var t=""+parseInt(e,10)/1e4,i=t.indexOf(".");
n=-1===i?t+"万":t.substr(0,i)+"."+t.charAt(i+1)+"万";
}else n=0===parseInt(e,10)?"":e||"";
return n;
}
function throttle(e,n){
var t=void 0,i=void 0;
return function(){
var o=this,r=arguments,a=+new Date;
t&&t+n>a?(clearTimeout(i),i=setTimeout(function(){
t=a,e.apply(o,r);
},n)):(t=a,e.apply(o,r));
};
}
function getScrollTop(){
var e=0,n=0,t=0;
return document.body&&(n=document.body.scrollTop),document.documentElement&&(t=document.documentElement.scrollTop),
e=n-t>0?n:t;
}
function getScrollHeight(){
var e=0,n=void 0,t=void 0;
return document.body&&(n=document.body.scrollHeight),document.documentElement&&(t=document.documentElement.scrollHeight),
e=n-t>0?n:t;
}
function getWindowHeight(){
var e=0;
return e="CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight;
}
function openAllVideoPage(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=location.origin+"/mp/videochannel_profile_page?biz_username="+encodeURIComponent(e.userName)+"&sessionid="+e.sessionId+"&__biz="+e.biz+"&scene="+e.scene+"&subscene="+e.subscene+"&channel_session_id="+e.channelSessionId+"#wechat_redirect";
jumpUrl(n,!0);
}
function openAlbumPage(){
var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=e.albumLink.replace("#wechat_redirect","")+("&scene="+e.scene+"&is_first_screen=1&subscene="+e.subscene+"&vid="+e.vid+"&scenenote="+e.scenenote+"#wechat_redirect");
jumpUrl(n,!0);
}
function getElementTop(e){
return e.getBoundingClientRect().top;
}
function getElementHeight(e){
return e.getBoundingClientRect().height;
}
function isPageEnd(){
return getScrollTop()+getWindowHeight()+30>=getScrollHeight();
}
function getMoreVideoInfo(e,n){
return Url.getQuery("__biz",e)+"_"+Url.getQuery("mid",e)+"_"+Url.getQuery("idx",e)+"_"+n;
}
function formatAlbumnReadNum(e,n){
var t="en"===window.LANG,i=t?"k":"万",o="",r=1e4*n,a=t?10*n:n;
if(e=parseInt(e,10),e>r)o=a+i+"+";else if(e>=1e4&&r>=e){
var s=""+(t?e/1e3:e/1e4),c=s.indexOf(".");
o=-1===c?s+i:s.substr(0,c)+"."+s.charAt(c+1)+i;
}else o=e;
return o||0;
}
var AppmsgReport=require("appmsg/appmsg_report.js"),EmojiData=require("biz_common/utils/emoji_data.js"),Version4video=require("pages/version4video.js"),mmversion=require("biz_wap/utils/mmversion.js"),JSAPI=require("biz_wap/jsapi/core.js"),DomEvent=require("biz_common/dom/event.js"),AlbumReport=require("album/utils/report.js"),commonUtils=require("common/utils.js"),Url=require("biz_common/utils/url/parse.js"),i18n=require("appmsg/i18n.js"),g={
inWechat:Version4video.device.inWechat,
windowWechat:/WindowsWechat/i.test(navigator.userAgent),
macWechat:/wechat.*mac os/i.test(navigator.userAgent),
emojiImg:'<img src="https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif" class="icon_emotion_single #style#" alt="#name#">',
emojiDataMap:{}
};
!function(){
for(var e=0,n=EmojiData.length;n>e;e++){
var t=EmojiData[e];
t.cn&&!g.emojiDataMap[t.cn]&&(g.emojiDataMap[t.cn]={
index:e
}),t.hk&&!g.emojiDataMap[t.hk]&&(g.emojiDataMap[t.hk]={
index:e
}),t.us&&!g.emojiDataMap[t.us]&&(g.emojiDataMap[t.us]={
index:e
});
}
}();
var emojiFormat=function(e){
return/\[[^\[\]]+\]/.test(e)?e.replace(/\[[^\[\]]+\]/g,function(e){
if(g.emojiDataMap[e]&&EmojiData[g.emojiDataMap[e].index]){
var n=EmojiData[g.emojiDataMap[e].index];
return g.emojiImg.replace("#name#",e).replace("#style#",n.style);
}
return e;
}):e;
},jumpUrl=function(e,n){
g.inWechat?g.windowWechat||g.macWechat?n===!0?window.parent.open(e):window.parent.location.href=e:JSAPI.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
-1==t.err_msg.indexOf("ok")&&(n===!0?window.parent.open(e):window.parent.location.href=e);
}):n===!0?window.open(e):location.href=e;
},closeWin=function(){
!g.inWechat||g.windowWechat||g.macWechat?window.close():JSAPI.invoke("closeWindow",function(e){
-1==e.err_msg.indexOf("ok")&&window.close();
});
},getId=function(e){
return document.getElementById(e);
},shareReport=function(e){
var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];
"album"===e&&AlbumReport.shareReport(n);
},getByClass=function(e){
return document.getElementsByClassName(e);
},trim=function(e){
return e.replace(/^\s+|\s+$/g,"");
},qs=function(e,n){
return(n||document).querySelector(e);
},qsAll=function(e,n){
return(n||document).querySelectorAll(e);
},changeURLArg=function changeURLArg(url,arg,argVal){
var pattern=arg+"=([^&]*)",replaceText=arg+"="+argVal;
if(url.match(pattern)){
var tmp="/("+arg+"=)([^&]*)/gi";
return tmp=url.replace(eval(tmp),replaceText);
}
return url.match("[?]")?url+"&"+replaceText:url+"?"+replaceText;
},sceneType=[1,24,2,3,43,22,23,5],go2ProfileEvent=function(e){
var n=e.$container;
n&&!mmversion.isInMiniProgram&&DomEvent.on(n,"tap",".js_go_profile",function(n){
var t=n.delegatedTarget;
t&&!function(){
var n=t.getAttribute("data-biz")||e.biz||window.biz||"";
if("function"==typeof e.beforeGo2Profile&&e.beforeGo2Profile(t),1==window.isprofileblock)JSAPI.invoke("openUrlWithExtraWebview",{
url:"https://mp.weixin.qq.com/mp/profileblock?__biz="+n+"#wechat_redirect",
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href="https://mp.weixin.qq.com/mp/profileblock?__biz="+n+"#wechat_redirect");
});else{
var i=t.getAttribute("data-scene")||e.profile_scene||"";
AppmsgReport.profileReport({
isnew:0,
title:e.title||"",
item_show_type:e.item_show_type||""
}),console.log("channelSessionId"+getParam("channel_session_id")),JSAPI.invoke("profile",{
username:e.user_name,
profileReportInfo:"",
scene:i+"",
channelSessionId:getParam("channel_session_id"),
subscene:e.subscene
},function(){});
}
}();
});
},isTimeExpired=function(e,n,t){
var i=!1;
return e&&n&&t&&(n-e)/1e3/3600>t&&(i=!0),i;
};
return{
jumpUrl:jumpUrl,
closeWin:closeWin,
trim:trim,
getId:getId,
qs:qs,
qsAll:qsAll,
inWechat:g.inWechat,
windowWechat:g.windowWechat,
macWechat:g.macWechat,
emojiFormat:emojiFormat,
getParam:getParam,
go2ProfileEvent:go2ProfileEvent,
prepareNativePage:prepareNativePage,
debounce:debounce,
throttle:throttle,
formatReadNum:formatReadNum,
formatSeconds:formatSeconds,
setTwoTabHeight:setTwoTabHeight,
getByClass:getByClass,
getScrollTop:getScrollTop,
getScrollHeight:getScrollHeight,
getWindowHeight:getWindowHeight,
shareMessage:shareMessage,
getElementTop:getElementTop,
formatAlbumnReadNum:formatAlbumnReadNum,
getElementHeight:getElementHeight,
getQuery:getQuery,
openAllVideoPage:openAllVideoPage,
getNetWorkType:getNetWorkType,
getMoreVideoInfo:getMoreVideoInfo,
isPageEnd:isPageEnd,
openAlbumPage:openAlbumPage
};
});define("tpl/appmsg/loading.html.js",[],function(){
return'<div style="display: none;">\n  <div class="weui-mask_transparent"></div>\n  <div class="weui-toast">\n    <i class="weui-loading weui-icon_toast"></i>\n    <p class="weui-toast__content js_loading_content"></p>\n  </div>\n</div>';
});define("common/comm_report.js",["biz_wap/utils/ajax.js","biz_wap/utils/ajax_wx.js","biz_common/utils/comm_report.js","biz_wap/jsapi/leaveReport.js"],function(t){
"use strict";
var o=t("biz_wap/utils/ajax.js"),r=t("biz_wap/utils/ajax_wx.js").joinUrl,e=t("biz_common/utils/comm_report.js"),a=t("biz_wap/jsapi/leaveReport.js");
return{
report:function(t,r,a){
e.report("wap",o,t,r,a);
},
leaveReport:function(t,o){
a.addReport(function(){
return"function"==typeof o&&(o=o()),o?{
reportUrl:r("https://mp.weixin.qq.com"+e.getUrl("wap","report")),
reportData:e.getData(t,o,!0),
method:"POST"
}:!1;
});
}
};
});