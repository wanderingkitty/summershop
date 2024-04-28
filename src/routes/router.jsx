// import { createHashRouter } from 'react-router-dom'
// import Root from './Root.jsx'
// import HomePage from './HomePage'
// import ShopPage from './ShopPage'
// import LoginPage from './LoginPage'
// import CartPage from '../components/CartPage.jsx'

// const router = createHashRouter ([{

// 	path: '/',

// 	element: <Root/>, 

// 	children: [
// 		{
// 			path: '/',
// 			element: <HomePage/>
// 		},

// 		{
// 			path: '/shop',
// 			element: <ShopPage/>
// 		},

// 		{
// 			path: '/cart',
// 			element: <CartPage/>
// 		},
		
// 		{
// 			path: '/login',
// 			element: <LoginPage/>
// 		}
// 	]


// }])

// export { router }

import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import HomePage from './HomePage.jsx';
import LoginPage from './LoginPage.jsx'
import CartPage from '../components/CartPage.jsx';

const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
                path: '/Home',
                element: <HomePage />
            },
	
			{
				path: '/Login',
				element: <LoginPage />
			},
			{
				path: '/Cart',
				element: <CartPage />
			},

		]
	},
	
]);

export { router }