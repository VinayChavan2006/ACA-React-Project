import express from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
  countTotalOrders,
  calcualteTotalSalesByDate,
  calculateTotalSales,
  findOrderById,
  markOrderAsDelivered,
  markOrderAsPaid,
} from "../controllers/orderController.js";

import {authenticate,authorizeAdmin} from '../middlewares/authMiddleware.js'
const orderRoutes = express.Router()

orderRoutes
  .post('/',authenticate,createOrder)
  .get('/:id',authenticate,findOrderById)
  .put('/:id/pay',authenticate,markOrderAsPaid)
  .get('/mine',authenticate,getUserOrders)
  .get('/',authenticate,authorizeAdmin,getAllOrders)
  .put('/:id/deliver',authenticate,authorizeAdmin,markOrderAsDelivered)
  .get('/total-orders',countTotalOrders)
  .get('/total-sales',calculateTotalSales)
  .get('/total-sales-by-date',calcualteTotalSalesByDate)

export default orderRoutes
