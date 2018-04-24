$(function(){

	// nav显示隐藏
	$("nav>ul>li,.nav_box").not(".cut").mouseenter(function(){
		$('.nav_box').stop(true);
		$('.nav_box').animate({'height':"250px"})
	})
	$("nav>ul>li,.nav_box").not(".cut").mouseleave(function(){
		$('.nav_box').stop(true);
		$('.nav_box').animate({'height':"0px"})
	})
	$('nav>ul>li').hover(function(){
		var index = $(this).index();
		$('.hide_box').css("zIndex","-1");
		$('.hide_box').eq(index).css("zIndex","1");
	})

	// 明星单品滚轮
	var margin = parseInt($(".roll-box li").eq(1).css('marginRight')) 
	var Left = ($(".roll-box li").last().outerWidth(true) + margin)*5;
	function roll(position){
		$(".roll-box>ul").animate({"left":position});
	}
	$(".biaoti button").last().click(function(){
		$(".biaoti button").addClass("natural");
		$(".biaoti button").last().removeClass('natural');
		roll(0)
	});
	$(".biaoti button").first().click(function(){
		$(".biaoti button").addClass("natural");
		$(".biaoti button").first().removeClass('natural');
		roll(-Left)
	})

	$('#tab li').hover(function(){
		var index = $(this).index();
		$('.tab').eq(index).css('display','block');
	},function(){
		var index = $(this).index();
		$('.tab').eq(index).css('display','none');
	})


	var next = 0;
	function index(){
		if(next >= $('#Carousel div').length){
			next = 0;
		}else if(next < 0){
			next = $('#Carousel div').length-1;
		};
		$("#Carousel div").removeClass('active');
		$("#Carousel div").eq(next).addClass('active');
		$("#Carousel div").eq(next).animate({'opacity':'1'});
		$("#Carousel div").not(".active").animate({'opacity':'0'});
	}
	$('.next').on('click',function(){
		next++;
		index();
	})
	$('.prev').on('click',function(){
		next--;
		index()
	})
	setInterval(function(){
		next++;
		index()
	},5000)
})