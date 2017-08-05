
app.controller('fxkq',['$scope','$http','$rootScope',function ($scope,$http,$rootScope) {
	$http.get('./data/fx.json').then(function(res){
		
		$scope.tj=res.data.ttj;
		$scope.ms=res.data.ms;
		$scope.squ=res.data.squ;
		
		
			$rootScope.zhi='fx';
		
		//console.log($scope.tj)
		var mySwiper5 = new Swiper('.tj', {
					slidesPerView: 3,
					spaceBetween:10,
					paginationClickable: true,
	
		});
		var ms = new Swiper('.ms', {
					autoplay: 2000, //可选选项，自动滑动
					loop:true,
					pagination: '.swiper-pagination'
						
		})
		
	})
}])