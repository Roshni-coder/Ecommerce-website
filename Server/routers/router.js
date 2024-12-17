import express from 'express';
import { userSignup,userLogin, deleteUserById, userlist } from '../Controoler/userControler.js';
import { getProducts,getProductsById ,addProduct,deleteProductById} from '../Controoler/ProductControler.js';
import { createOrder, deleteUserOrderById, userOrderdlist } from '../Controoler/ordereduserdata.js';
import { loginAdminUser, signupAdminUser } from '../Controoler/AdminUser.js';


const router = express.Router();

// website user Api
router.post('/signup', userSignup);
router.post('/login',userLogin);
router.get('/userlist',userlist)
router.delete('/user/:id',deleteUserById)

// product Api
router.post('/add',addProduct);
router.get('/products',getProducts);
router.get('/product/:id',getProductsById);
router.delete('/product/:id',deleteProductById);

//  confirm order 
router.post('/orders',createOrder);
router.get('/orderdlist',userOrderdlist)
// router.delete('order/deleteuserorder/:id',deleteUserOrderById)
router.delete("/deleteorders/:id", deleteUserOrderById);
// admin user api

router.post('/adminSignup',signupAdminUser)
router.post('/adminLogin', loginAdminUser);

export default router;