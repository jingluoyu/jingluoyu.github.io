(function ($) {
	$.fn.loader = function(options) {
		var settings = $.extend({
		            timeToHide:1200, // 默认的隐藏时间
		            pos:'fixed',// 默认的定位
		            top:'0px',  // 默认的top值
		            left:'0px', // 默认的left值
		            width:'100%', // 默认的宽度
		            height:'100%', // 默认的高度
		            zIndex: '9999',  // 默认的堆叠顺序 
		            bgColor: '#e74c3c', // 默认的背景颜色		         
		        }, options);

		var rotation = '<div class="fl rotation"><div class="rotation-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="rotation-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="rotation-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';	

		

		var el = $(this);
		el.html(rotation);

		var initStyles = {
			'position':settings.pos,
			'width':settings.width,
			'height':settings.height,
			'top':settings.top,
			'left':settings.left
		};
		el.css(initStyles);

		 //隐藏时间
		 setTimeout(function(){
		 	$(el).fadeOut();
		 }, settings.timeToHide);

		        //返回样式
		        return this.css({
		        	'backgroundColor':settings.bgColor,
		        	'zIndex':settings.zIndex
		        });
		    }



	     //中心的旋转图标位置
	     function centerLoader() {
	     	var winW = $(window).width();
	     	var winH = $(window).height();
	     	var rotationW = $('.fl').outerWidth();
	     	var rotationH = $('.fl').outerHeight();
	     	$('.fl').css({
	     		'position':'absolute',
	     		'left':(winW/2)-(rotationW/2),
	     		'top':(winH/2)-(rotationH/2)
	     	});
	     }

	     $(window).load(function(){
	     	centerLoader();
	     	$(window).resize(function(){
	     		centerLoader();
	     	});
	     });
	 }(jQuery));


$(document).ready(function(){
	$(".loader").loader();

});