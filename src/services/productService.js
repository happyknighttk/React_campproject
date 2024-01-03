import axios from "axios";

export default class ProductService {
	getProducts() {
		return axios.get("http://localhost:51235/api/Products/GetList")
	}
	getProductById(id) {
		return axios.post("http://localhost:51235/api/Products/GetById", { id: id })
	}
}