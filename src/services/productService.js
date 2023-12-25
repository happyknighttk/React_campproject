import axios from "axios";

export default class ProductService {
	getProducts() {
		return axios.get("http://localhost:51235/GetList")
	}
	getProductById(id) {
		return axios.post("http://localhost:51235/GetById?Id=" + id)
	}
}