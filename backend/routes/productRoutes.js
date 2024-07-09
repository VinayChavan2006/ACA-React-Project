import express from 'express'
const productRoutes = express.Router();
import {
  fetchAllProducts,
  fetchNewProducts,
  fetchProductById,
  fetchProducts,
  filterProducts,
  addProduct,
  addProductReview,
  updateProductDetails,
  removeProduct,
  fetchTopProducts
} from "../controllers/productController.js";

import { authenticate,authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from '../middlewares/checkId.js'
productRoutes
  .get('/',fetchProducts)
  .post('/',authenticate,authorizeAdmin,addProduct)
  .get('/:id',fetchProductById)
  .get('/allproducts',fetchAllProducts)
  .put('/:id',authenticate,authorizeAdmin,updateProductDetails)
  .delete('/:id',authenticate,authorizeAdmin,removeProduct)
  .post('/:id/reviews',authenticate,checkId,addProductReview)
  .get('/top',fetchTopProducts)
  .get('/new',fetchNewProducts)
  .post('/filtered-products',filterProducts)

export default productRoutes
