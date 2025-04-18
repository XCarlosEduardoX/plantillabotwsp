import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${process.env.BACKEND_URL}/api/products?populate=*`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return [];
    }
};
