
//Vue.use(VueRouter)
 //定義路由元件
 const Bar = { template: '<div>bar</div>' }
 //定義路由
const routes = [
	{
		path:'/reading',
		name:'READ',
		component: Bar
	}
]



//建立路由實例
const router=new VueRouter({
	routes
})


	Vue.component('readingMore', {
	  template: ''
	})

let vm= new Vue({
	el:'#app',
	router,
	data:data,
	methods:{
		//個人網站
		goFB(index){
			let web=this.master[index].website
			window.open(web)
			
		},
		//訂閱
		showSubscribe(e_mail){
			console.log(this.$el);
			if(e_mail.length!=0){
				this.$refs.subBtn.style.display='block'
				this.e_mail=''
		    }
		    else{ 
		    	this.$refs.notSubBtn.style.display='block' 
		    }
		},
		//關閉訂閱
		closeSubscribe(){
			this.$refs.subBtn.style.display='none'
		},
		//關閉alert Modal
		closeAlert(){
			this.$refs.notSubBtn.style.display='none'
		},
		//喜歡文章
		likeFunction(event){
			event.target.style.fontWeight = "bold"
			event.target.innerHTML = "✓ 已按讚"
		},
		//顯示留言
		myFunction(id){
			//console.log(id)
		  var x = document.getElementById(id);
	      if (x.className.indexOf("w3-show") == -1) {
	        x.className += " w3-show";
	      } else { 
	        x.className = x.className.replace(" w3-show", "");
	      }
		},
		clickAndRead(id){
			window.location.href = "/financial/read.html?id="+id; 		
		},
		//廣告
		startCarousel(){
			$(document).ready(function(){
			$('.carousel').slick({
				autoplay:true,
			});
			});
		},
		//文章序號
		getURL(){
			var url_string=window.location.href
			var url=new URL(url_string)
			var c = url.searchParams.get("id");
			console.log(c)
			this.pageID=parseInt(c)
			
		}

	},
}).$mount('#app')
