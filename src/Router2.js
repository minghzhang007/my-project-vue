import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home ={
	template:'<div>Home内容</div>'
}
const UserProfile ={
	template:'<div>Profile</div>'
}

const UserPosts ={
	template:'<div>Posts</div>'
}

const User ={
	template:`
		<div class="user">
			<h2>User {{$route.params.id}}</h2>
			<router-view></router-view>
		</div>
	`
}

const router = new VueRouter({
	mode:'history',
	base: __dirname,
	routes:[
		{
			path:'/',
			component:home
		},
		{
			path:'/user/:id',
			component:User,
			children:[
				{
					path:'',
					component:home
				},
				{
					path:'profile',
					redirect:'/'
				},
				{
					path:'posts',
					component:UserPosts
				}
			]
		}
		
	]
})

new Vue({
	router,
	template:`
		<div id='r'>
			<h1>导航</h1>
			<ul>
				<li><router-link to='/'>/</router-link></li>
				<li><router-link to='/user/foo'>/user/foo</router-link></li>
				<li><router-link to='/user/foo/profile'>/user/foo/profile</router-link></li>
				<li><router-link to='/user/foo/posts'>/user/foo/posts</router-link></li>
			</ul>
			<router-view class="myclass"></router-view>
		</div>
	`
}).$mount("#app");