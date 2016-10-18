/* 메인 비주얼 스크립트 */

$(function(){  
	$('.visualslider').bxSlider({
	  pagerCustom: '#bx-pager',
		controls: false,
		auto: true,
		mode: 'vertical'
	});
});

/* 메인 금주의신간 스크립트 */

$(function(){  
	$('.libConInner').bxSlider({
		auto: false, 
		displaySlideQty: 1,    
		moveSlideQty: 1,
		nextText:'',
		prevText:'',
		pager: false
	});
});	

/* 메인 이벤트 스크립트 */
$(function(){  
	$('.bxslider').bxSlider({
		auto: false,
		mode: 'horizontal',
		pager: false,
		nextText:'',
		prevText:'',
	});
});	

/* 메인 게시판 탭 스크립트 */
$(function(){
	$(".tabTitle li").eq(0).find("a").addClass("on");
	$(".tabConAll .tab").eq(0).show();
	$(".tabTitle li").click(function(){
		var _tab = $(this).find("a").attr("href");
		$(".tabConAll .tab" + _tab).show().siblings().hide();
		$(this).find("a").addClass("on");
		$(this).siblings().find("a").removeClass("on");
	});
});

/* 메인 갤러리 탭 스크립트 */
$(function(){
	$(".tabTitle01 li").eq(0).find("a").addClass("on");
	$(".tabConAll01 .tabg").eq(0).show();
	$(".tabTitle01 li").click(function(){
		var _tab = $(this).find("a").attr("href");
		$(".tabConAll01 .tabg" + _tab).show().siblings().hide();
		$(this).find("a").addClass("on");
		$(this).siblings().find("a").removeClass("on");
	});
});

