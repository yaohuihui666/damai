app.controller('onekq',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
	$http.get('./data/index.json').then(function(res){
		//alert(res)
		
		$scope.lb=res.data.lb;
		$scope.btn=res.data.btn;
		$scope.newday=res.data.newday;
		$scope.tj=res.data.tj;
		
		$rootScope.zhi='index';
		new Swiper(".lb",{
				
				autoplay:2000,
				
				pagination:".swiper-pagination",
				
				paginationClickable:true,
		
				autoplayDisableOnInteraction:false,
				
				loop:true,
				
		})
		//新闻滚动	
			
					 new Swiper('.scoll', {
						autoplay: 2000, //可选选项，自动滑动
						loop:true,
						direction: 'vertical',
						
						autoplayDisableOnInteraction:false,
						
					})
		
		
		//推荐
	
			var mySwiper5 = new Swiper('.tj', {
					slidesPerView: 3,
					spaceBetween:10,
					paginationClickable: true,
	
			});
		
		
		
	})
}])

