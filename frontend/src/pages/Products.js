import React from 'react';
import ProductsList from '../components/ProductsList';
 

function Products() {
    return (
        <header>
            <h1>My Online Shop</h1>
            <ProductsList/>
            {/* Add navigation links or logo here */}
        </header>
    );
}

export default Products;