/*广告弹窗模块代码*/

function ad() {
    var timer = null;
   /* var WH = document.documentElement.clientHeight;*/
    function _loop() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            $('#ad').fadeIn(1000);
            _loop();
        }, 15000);
    }
    _loop();
    $('body').on('click', '.ad_close', function () {
        $('#ad').fadeOut(500);
    })
   /*$('#ad').css('top',WH/2-138+'px');*/
}

/*预约手机号码获取代码*/

function getTel(cont, URL,notes) {
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (cont.length !== 11) {
        alert('请输入正确手机号码！');
    } else if (!myreg.test(cont)) {
        alert('请输入正确手机号码！');
    } else {
        $.ajax({
            url: URL,
            type: 'post',
            data: {
                act:'add',
                tel: cont,
                tip: notes,
            },
            success: function (data) {
                alert('恭喜你预约成功!\n您的手机号:' + data);
            }
        });
    }
}

 /*文字图片滚动*/

			function AutoScroll(obj,son,direction,dis) {
                //console.log('1')
				if (direction == 'vertical') {
					$(obj).find(son).animate({
						marginTop: dis + 'px'
					}, 500, function () {
						$(this).css({
							marginTop: "0px"
						}).find("li:first").appendTo(this);
					});

				} else if (direction == 'horizontal'){
					$(obj).find(son).animate({
						marginLeft: dis + 'px'
					}, 500, function () {
						$(this).css({
							marginLeft: "0px"
						}).find("li:first").appendTo(this);
					});
				}
                
                else {
                    return false;
                }

			}

            