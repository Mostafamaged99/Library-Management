import { Router } from "express";
import { addAuthor, deleteAuthor, getAllAuthors, getAuthor, updateAuthor } from "./author.controller.js";


const authorRouter = Router();

authorRouter.post('/',addAuthor);
authorRouter.get('/',getAllAuthors);
authorRouter.get('/:id',getAuthor);
authorRouter.put('/:id',updateAuthor);
authorRouter.delete('/:id',deleteAuthor);



export default authorRouter;