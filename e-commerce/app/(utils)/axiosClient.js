import axios from "axios";

const apiKey=process.env.REST_API_KEY;
const apiUrl='https://e-commerce-strapi-railway-production.up.railway.app/api'//products

const axiosClient = axios.create({
	baseURL: apiUrl,
	headers:{
		Authorization: `Bearer ${apiKey}`
	}
});


export default axiosClient