import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "./config";

export class ProductService {
  getProducts = async () => {
    console.log("get all");

    try {
      const querySnapshot = await getDocs(collection(db, "product"));
      return await querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  addProduct = async (newProductData) => {
    console.log("add");

    try {
      const docRef = await addDoc(collection(db, "product"), newProductData);
      console.log("Product added with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };

  getLatestProducts = async () => {
    console.log('latest');
    const productRef = collection(db, "product");
    try {
      const q = query(productRef, orderBy("date", "desc"), limit(3));
      const querySnapshot = await getDocs(q);

      const latestProducts = querySnapshot.docs.map((doc) => doc.data());
      return latestProducts;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };

  getTrendingProducts = async () => {
    console.log("trending");

    const productRef = collection(db, "product");
    try {
      const q = query(productRef, orderBy("rating", "desc"), limit(6));
      const querySnapshot = await getDocs(q);

      const latestProducts = querySnapshot.docs.map((doc) => doc.data());
      return latestProducts;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  };
}

const productService = new ProductService();
export default productService;
