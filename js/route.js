
app=angular.module('app',['ngRoute'])
app.config(function ($routeProvider) {
	//$routeProvider路由的提供者
	$routeProvider.when('/index',{
		
		templateUrl:"shouye.html",
		controller:"onekq"
	}).when('/yc',{
		//模板
		templateUrl:"yc.html",
		controller:"yckq"
		
	}).when('/fx',{
		//模板
		templateUrl:"fx.html",
		controller:"fxkq"
		
	}).when('/mine',{
		//模板
		templateUrl:"mine.html",
		controller:"minekq"
		
	}).when('/login',{
		//模板
		templateUrl:"login.html",
		controller:"loginkq"
		
	}).when('/zc',{
		//模板
		templateUrl:"zc.html",
		controller:"zckq"
		
	}).otherwise({redirectTo:'/index'})
	
	
	//redirectTo从新配置
})

//app.controller('fxkq',['$scope','$http',function ($scope,$http) {
//	$http.get('./data/fx.json').then(function(res){
//		//alert(res)
//		$scope.obj=res.data.info;
//		
//	})
//}])


