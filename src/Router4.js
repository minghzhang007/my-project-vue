import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/'
		},
		{
			path:'/scores/:grade/:class'
		},
		{
			path:'/params-regex/:id(\\d+)'
		}
	]

})

new Vue({
	router,
	template:`
		<div>
			<h1>参数传递</h1>
			<ul>
				<li> <router-link to='/'> /</router-link> </li>
				<li> <router-link to='/scores/5/4'> /scores/5/4</router-link> </li>
				<li> <router-link to='/params-regex/abc'> /params-regex/abc</router-link> </li>
				<li> <router-link to='/params-regex/666'> /params-regex/666</router-link> </li>
			</ul>
			<pre>
				<code>
					{{JSON.stringify($route,null,2)}}
				</code>
			</pre>
		</div>

	`
}).$mount("#app")