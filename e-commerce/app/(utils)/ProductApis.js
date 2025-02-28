import axiosClient from "./axiosClient";

export const getLatestProducts = () => axiosClient.get('/products?populate=*');

export const getProductByID = async (documentId) => {
    try {
        const response = await axiosClient.get(`/products?filters[documentId][$eq]=${documentId}&populate=*`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch product: ${error.message}`);
    }
};

const productApi = {
    getLatestProducts,
    getProductByID
};

export default productApi;