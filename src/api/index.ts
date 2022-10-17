import axios from "axios";
import { config } from "../config";
const API_URL = config.API_URL;
class ProductsService {
  async getProducts() {
    const { data } = await axios.get(API_URL.concat("/api/v1/products"));
    return data;
  }
}

export { ProductsService };
