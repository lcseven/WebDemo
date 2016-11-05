$(document).ready(function () {

	//开头动画

	$('.solan').click(function () {
		$('.solan').animate({
			opacity: '0'
		}, 500, function () {

			$('#headbg').css('background', 'url(ice/13.jpg) 50% 0');
			$('.solanbg').animate({
				width: '0px',
				opacity: '0'
			}, 2000, function () {
				$('#forward').css({
					"display": "block"
				});
			});
		});
	});
	//菜单定位
	var navH = $("#nav").offset().top;
	$(window).scroll(function () {
		var scroH = $(this).scrollTop();
		if (scroH >= navH) {
			$("#nav").css({
				"position": "fixed",
				"top": 0
			});
			$(".content").css({
				"padding-top": '100px'
			});
			$("#backup").css({
				"display": "block"
			});
		} else {
			$("#nav").css({
				"position": "static"
			});
			$(".content").css({
				"padding-top": 0
			});
			$("#backup").css({
				"display": "none"
			});
		}

	}); //同页面内平滑跳转
	$("#nav").scrollTo(700);
	$("#backup").scrollTo(700);
	$("#forward").scrollTo(700);
});

(function ($) {
	$.extend($.fn, {
		scrollTo: function (time, to) {
			time = time || 800;
			to = to || 1;
			$('a[href*=#]', this).click(function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
					if ($target.length) {
						if (to == 1) {
							$('html,body').animate({
								scrollTop: $target.offset().top
							}, time);
						} else if (to == 2) {
							$('html,body').animate({
								scrollLeft: $target.offset().left
							}, time);
						} else {
							alert('argument error！');
						}
						return false;
					}
				}
			});
		}
	});
})(jQuery);