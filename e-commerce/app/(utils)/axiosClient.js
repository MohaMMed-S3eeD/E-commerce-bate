import axios from "axios";

const apiKey=process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl='https://e-commerce-strapi-railway-production.up.railway.app/api'//products
console.log("API Key in axiosClient:", apiKey);

const axiosClient = axios.create({
	baseURL: apiUrl,
	headers:{
		Authorization: `Bearer ${apiKey}`
	}
});


export default axiosClient