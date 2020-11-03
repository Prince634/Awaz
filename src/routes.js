import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from 'react-loadable';
import Header from '@components/Header'

const Login = loadable({
	loader: () => import('@pages/Login'),
	loading: ()=><p>Loading</p>,
	modules: ['@pages/Login'],
  	webpack: () => [require.resolveWeak('@pages/Login')]
})

const Category = loadable({
	loader: () => import('@pages/Category'),
	loading: ()=><p>Loading</p>,
	modules: ['@pages/Category'],
  	webpack: () => [require.resolveWeak('@pages/Category')]
});

const Language = loadable({
	loader: () => import('@pages/Language'),
	loading: ()=><p>Loading</p>,
	modules: ['@pages/Language'],
  	webpack: () => [require.resolveWeak('@pages/Language')]
});

const Home = loadable({
	loader: () => import('@pages/Home'),
	loading: ()=><p>Loading</p>,
	modules: ['@pages/Home'],
  	webpack: () => [require.resolveWeak('@pages/Home')]
})

const RouteHandler = (props)=>{
	const { history, Route }= props;
	if(!Route.header){
		return <Route.component {...props}/>
	}
	return 	<React.Fragment>
				<Header history={history} title={Route.title}/>
				<Route.component {...props} />
			</React.Fragment>
}
const routes = [
	{path: '/', component: Login, header: false, title: ''},
	{path: '/language', component: Language, header: false, title: ''},
	{path: '/category', component: Category, header: false, title: ''},
	{path: '/home', component: Home, header: false, title: ''},
]
const Routes = (props)=>{
	return(
		<Switch>
			{
				routes.map((route, i)=>{
					return <Route key={i} exact path={route.path} render={(props)=><RouteHandler {...props} Route={route}/>} />
				})
			}
		</Switch>
		
		)
}

export default Routes;