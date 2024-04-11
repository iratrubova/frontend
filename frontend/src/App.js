import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsList from './components/ProductsList';



function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts();
            setProducts(productsFromServer);
        };

        getProducts();
    }, []);

    return (
        <div>
            <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsList />} />
                {/* Define more routes as needed */}
            </Routes>
        </Router>
            <ul>
            
           
            </ul>
        </div>
    );
}

export default App;

