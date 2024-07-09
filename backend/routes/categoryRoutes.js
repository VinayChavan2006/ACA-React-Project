import express from 'express'
import { readCategory,removeCategory,listCategory,createCategory,updateCategory } from '../controllers/categoryController.js'
import { authenticate,authorizeAdmin } from '../middlewares/authMiddleware.js'

const categoryRoutes = express.Router()

categoryRoutes
  .post('/',authenticate,authorizeAdmin,createCategory)
  .put('/:categoryId',authenticate,authorizeAdmin,updateCategory)
  .delete('/:categoryId',authenticate,authorizeAdmin,removeCategory)
  .get('/categories',listCategory)
  .get('/:id',readCategory)

export default categoryRoutes