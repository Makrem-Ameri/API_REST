const express=require('express');
const router=express.Router();
const Sauce=require('../models/sauce');
const auth=require('../middleware/auth');
const multer=require('../middleware/multer-config');

const sauceCtrl=require('../controllers/sauce');
const likeCtrl=require('../controllers/like');


router.post('/',auth,multer,sauceCtrl.createSauce)
router.get('/:id',auth,multer,sauceCtrl.getOneSauce);
router.get('/',auth,multer,sauceCtrl.getAllSauces);
router.put('/:id',auth,multer,sauceCtrl.modifySauce)
router.delete('/:id',auth,multer,sauceCtrl.deleteSauce)
router.post("/:id/like" , auth, likeCtrl.likeSauce);
module.exports=router;