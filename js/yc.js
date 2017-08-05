
app.controller('yckq',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
	$http.get('./data/yc.json').then(function(res){
		
		
		$scope.tou=res.data.tou;
		$scope.content=res.data.conten;
	
		$rootScope.zhi='yc';
		var swiper1 = new Swiper('.swiper1', {
				slidesPerView: 5,
				
				// 轻拍事件:点击slide会触发
				onTap:function(){
//					console.log(swiper1.clickedIndex);
					var navIndex = swiper1.clickedIndex; // 当前点击按钮的下标
					$('.swiper1 .swiper-slide').eq(navIndex).addClass('active').siblings().removeClass('active');
					
					// 指定swiper2切换的页面
					swiper2.slideTo(navIndex);
				}
				
			})
				var swiper2 = new Swiper('.swiper2', {
				// 当slide开始滑动时触发的事件
				onSlideChangeStart:function(){
					// 获取当前滑动页的下标
					var actIndex = swiper2.activeIndex;
					
//					console.log(swiper2.activeIndex);
					$('.swiper1 .swiper-slide').siblings().removeClass('active');
					$('.swiper1 .swiper-slide').eq(actIndex).addClass('active');
					swiper1.slideTo(actIndex);
				}
				
			})
	
		
	})


}])