
	// 鼠标滑过，菜单下拉
	var overmenu = function () {
		$('li.dropdown').on('mouseenter',function () {   
			$(this).addClass('open');
		}).on('mouseleave',function() {
			$(this).removeClass('open');    
		}); 
	}		
	

	//标签页的切换
	var tabs = function() {
		$('#wedding-dress').css('height', $('.tab-content.active').height() + 600);

		$(window).resize(function(){
			$('#wedding-dress').css('height', $('.tab-content.active').height() + 600);
		});

		$('.tabs-nav > a').on('click', function(e){

			var tab = $(this).data('tab');

			$('.tabs-nav > a').removeClass('active');
			$(this).addClass('active');

			$('.tab-content').removeClass('active show');

			setTimeout(function(){
				$('.tab-content[data-tab-content="'+tab+'"]').addClass('active');
				$('#wedding-dress').css('height', $('.tab-content.active').height() + 600);
			}, 200);
			setTimeout(function(){
				$('.tab-content[data-tab-content="'+tab+'"]').addClass('show');
			}, 400);


			e.preventDefault();
		});
	};
	

	//3d轮播图
	$(function(){     	
		$('#slide3d').slideCarsousel({slideType:'3d',indicatorEvent:'mouseover'});
	});
	

	//置顶按钮
	var backTop = function () {
		var goTop = $ ('#wedding-btn .goTop');		
		    //判断当前位置，决定是否出现
		    $(window).on('scroll', function (){
		    	if ($(this).scrollTop() > 200) {
		    		goTop.fadeIn();
		    	} else {
		    		goTop.fadeOut();
		    	}
		    });	    
		    //点击置顶
		    goTop.on('click', function() {
		    	$('html, body').animate({scrollTop : 0},1500);
		    	return false;
		    });

		}


	// 懒加载
	$(function() {

		f_masonry();

		$("img").lazyload({
			effect:"fadeIn",
			failurelimit:5,
			load:f_masonry,
		});
	});
	//瀑布流
	function f_masonry() {
		$('.masonry').masonry({
			gutterWidth: 20,
			itemSelector: '.item',
			isAnimated: true,
		});
	}
	
	

	// 盒子动画
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {
			if( direction === 'down' && !$(this.element).hasClass('animated') ) {				
				i++;
				$(this.element).addClass('item-animate');
				setTimeout(function(){
					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});					
				}, 100);				
			}
		} , { offset: '85%' } );
	};	

	//鼠标悬停动画
	var onbox = function () {
		$('.sum').on('mouseenter',function () {   
			$(this).children('i').addClass('animated flip');
		}).on('mouseleave',function() {
			$(this).children('i').removeClass('flip');    
		}); 
	}

	// 左侧电梯点击变色
	var addcurrent = function () {
		$('.lift-nav a').click(function () {
			$(this).parent().siblings().removeClass('current');
			$(this).parent().addClass('current');
		});
	}

	//左侧电梯滑动
	var lift = function() {		
		$('.topLink').click(function() {
			$('html, body').animate({
				scrollTop: $($(this).attr("href")).offset().top + "px"
			}, {
				duration: 1000,
				easing: "swing"
			});
			return false;
		});
	};

	function leftshow(e) {
		$(e).waypoint(function (direction) {
			if( direction === 'down' ) {
				// console.log(this);
				$(e).addClass('removeleft');		
			}
		},{offset: '85%'});
	}
	var rightshow = function (e) {
		$(e).waypoint(function (direction) {
			if( direction === 'down' ) {
				$(e).addClass('removeright');		
			}
		},{offset: '85%'});
	}

	//表单验证
	var formtest = function () {	
		// 姓名验证
		
		$('.name').blur(function () {
			flag =0;
			var name = $(this).val();
			var reg = /^[\u4e00-\u9fa5]{2,4}$/;
			if(reg.test(name)) {
				$('#name').removeClass('icon-false icon-true');
				$('#name').addClass('icon-true').fadeIn(1000);
			}else {
				$('#name').removeClass('icon-false icon-true');
				$('#name').addClass('icon-false').fadeIn(1000);
			}			
		});

		//手机验证

		$('.mobile').blur(function () {
			var num = $(this).val();
			var reg = /^1(3|4|5|8)[0-9]{9}$/;
			if(reg.test(num)) {
				$('#mobile').removeClass('icon-false icon-true');
				$('#mobile').addClass('icon-true').fadeIn(1000);
			}else {
				$('#mobile').removeClass('icon-false icon-true');
				$('#mobile').addClass('icon-false').fadeIn(1000);
			}
		});

		//邮箱验证
		$('.email').blur(function () {
			var str = $(this).val();
			var reg = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
			if(reg.test(str)) {
				$('#email').removeClass('icon-false icon-true');
				$('#email').addClass('icon-true').fadeIn(1000);
			}else {
				$('#email').removeClass('icon-false icon-true');
				$('#email').addClass('icon-false').fadeIn(1000);
			}
		});
		//点击表单
		$('.submit').click(function () {
			if(($('#name').hasClass('icon-true'))&&($('#mobile').hasClass('icon-true'))&&($('#email').hasClass('icon-true'))) {
				alert("预约成功。请耐心等待我们联络或者主动添加微信详谈哦~");
				window.location.reload(); 
			}else {
				console.log('false');
				alert("信息有误，请重新填写");
				window.location.reload(); 
			}
		});
	}


	// 执行函数
	$(function(){
		overmenu();
		tabs();
		backTop();
		contentWayPoint();
		onbox();
		addcurrent();
		lift();
		leftshow('.global-left');
		rightshow('.global-right');
		formtest();
	});
	










