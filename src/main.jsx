// import React from 'react';
// import { BrowserRouter, HashRouter } from 'react-router-dom';
// import { createRoot } from 'react-dom/client'; 
// import Root from './routes/Root';
// import LoginPage from './routes/LoginPage';
// import CartPage from './components/CartPage';
// import HomePage from './routes/HomePage';


// const root = createRoot(document.getElementById('root'));

// root.render(
//   <HashRouter>
//     <Root />
//   </HashRouter>
// );


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
