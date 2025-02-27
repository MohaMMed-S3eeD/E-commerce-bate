import axiosClient from "./axiosClient";

const getLatestProducts = () => axiosClient.get('/products?populate=*')
const productApi = {
    getLatestProducts
}
export default productApi