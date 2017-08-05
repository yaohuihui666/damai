
		var back=document.getElementsByClassName('back')[0]
		back.onclick=function(){
			window.location.href='login.html'
		}
		
			var yzm=document.getElementsByClassName("yzm")[0]
			function fun(max,min){
				return Math.floor(Math.random()*(max-min+1)+min)
			}
			yzm.addEventListener("touchend",function(){
				yzm.innerHTML=fun(9999,1000)
			})
		
	
 
//	        $(window).load(function(){
//	            $(".loading").addClass("loader-chanage")
//	            $(".loading").fadeOut(500)
//	        })
	 