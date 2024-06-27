import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "./book.controller.js";

const bookRouter =Router();

bookRouter.post('/',addBook);
bookRouter.get('/',getAllBooks);
bookRouter.get('/:id',getBook);
bookRouter.put('/:id',updateBook);
bookRouter.delete('/:id',deleteBook);



export default bookRouter;