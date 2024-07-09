import express from "express"
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  getUserById,
  updateCurrentUserProfile,
  updateUserById,
  deleteUserById,
} from "../controllers/userController.js";

import { authenticate,authorizeAdmin } from "../middlewares/authMiddleware.js";
const userRoutes = express.Router();

userRoutes
  .post("/", createUser)
  .get('/',authenticate,authorizeAdmin,getAllUsers)
  .post('/auth',loginUser)
  .post('/logout',logoutCurrentUser)
  .put('/profile',authenticate,updateCurrentUserProfile)
  .get('/profile',authenticate,getCurrentUserProfile)
  .get('/:id',authenticate,authorizeAdmin,getUserById)
  .put('/:id',authenticate,authorizeAdmin,updateUserById)
  .delete('/:id',authenticate,authorizeAdmin,deleteUserById)


export default userRoutes

