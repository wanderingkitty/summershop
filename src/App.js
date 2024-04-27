import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Root from './Root';
import ShopPage from './ShopPage';
import CartPage from './components/CartPage';
import LoginPage from './LoginPage';
import HomePage from './routes/HomePage';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element={<HomePage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="shop" element={<ShopPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
