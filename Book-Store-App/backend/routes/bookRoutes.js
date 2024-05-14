import express from "express";
import { createBookCtrl, deleteBookCtrl, getAllBooksCtrl, getParticularBookCtrl, updateBookCtrl } from "../controllers/bookController.js";
const bookRouter = express.Router();

bookRouter.post('/',createBookCtrl)
bookRouter.get('/',getAllBooksCtrl)
bookRouter.get('/:id',getParticularBookCtrl)
bookRouter.put('/:id',updateBookCtrl)
bookRouter.delete('/:id',deleteBookCtrl)

export default bookRouter;