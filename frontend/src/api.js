import axios from 'axios';

const API_URL = 'http://localhost:8000/'; // Adjust based on your Django server URL

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}products/`);
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the products: ", error);
        return [];
    }
};
