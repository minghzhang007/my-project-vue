import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home ={
	template:'<div>Home内容</div>'
}

const first={
	template:'<div>first内容</div>'
}

const second ={
	template:'<div>second内容</div>'
}

const hehe ={
	template:'<div>hehe</div>'
}

const router = new VueRouter({
	mode:'history',
	base: __dirname,
	routes:[
		{
			path:'/',
			components:{
				default:home,
				left:first,
				right:second
			}
		},
		{
			path:'/first',
			components:{
				default:hehe,
				right:first,
				left:second
			}
			
		}
	]
})

new Vue({
	router,
	template:`
		<div id='r'>
			<h1>导航</h1>
			<p>{{$route.name}}</p>
			<ol>
				<li><router-link to='/'>/</router-link></li>
				<li><router-link to='/first'>first</router-link></li>
			</ol>
			<router-view class="myclass"></router-view>
			<router-view class="myclass" name="left" style="float:left;width:50%;height:200px;background-color:#ff0001"></router-view>
			<router-view class="myclass" name="right"style="float:right;width:50%;height:200px;background-color:#ee1234"></router-view>
		</div>
	`
}).$mount("#app");