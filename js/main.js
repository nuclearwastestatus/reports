// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['2014-04-14中核集团Weibo_Weibo.png', '2014-09-11中核集团Weibo_Weibo.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "image/"+images[i]);
	
}