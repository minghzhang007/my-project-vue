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

const firstFirst={
	template:'<div>firstFirst内容 {{$route.params.id}} -{{$route.name}}</div>'
}
const firstSecond={
	template:'<div>firstSecond内容</div>'
}

const asdf ={
	template:`
		<div class='asdf'>
			<h2>组件</h2>
			<router-view class='myclass'></router-view>
		</div>
	`
}

const router = new VueRouter({
	mode:'history',
	base: __dirname,
	routes:[
		{
			path:'/',
			name:'Home',
			component:home
		},
		{
			path:'/first',
			component:asdf,
			children:[
				{
					path:'/',
					name:'Home-first',
					component:first
				},
				{
					path:'first',
					name:'Home-first-first',
					component:firstFirst
				},
				{
					path:'second',
					name:'Home-first-second',
					component:firstSecond
				}
			]
		},
		{
			path:'/second',
			name:'Home-second',
			component:second
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
					<ol>
						<li><router-link :to="{name:'Home-first-first',params:{id:2345}}">firstfirst</router-link></li>
						<li><router-link to='/first/second'>firstsecond</router-link></li>
					</ol>
				<li><router-link to='/second'>second</router-link></li>
			</ol>
			<router-view class="myclass"></router-view>
		</div>
	`
}).$mount("#app");