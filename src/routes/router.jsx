import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import HomePage from './HomePage'
import ShopPage from './ShopPage'
import LoginPage from './LoginPage'

const router = createHashRouter ([{

	path: '/',

	element: <Root/>, 

	children: [
		{
			path: '/',
			element: <HomePage/>
		},

		{
			path: '/Shop',
			element: <ShopPage/>
		},
		
		{
			path: '/Login',
			element: <LoginPage/>
		}
	]


}])

export { router }