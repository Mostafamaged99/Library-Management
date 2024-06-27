import mongoose from "mongoose";
import { Book } from "../../../database/models/book.model.js";

const addBook = async (req, res) => {
    let isExist = await Book.findOne({ name: req.body.name });
    if (isExist) {
      return  res.status(400).send({ message: "Book already exist" });
    }
  let book = await Book.insertMany(req.body);
  res.status(201).json({ message: "success", book });
};

const getAllBooks = async (req, res) => {
  let books = await Book.find();
  res.status(200).json({ message: "success", books });
};

const getBook = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: "Invalid Book ID" });
  }
  let book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).send({ message: "Book not found" });
  }
  res.status(200).json({ message: "success", book });
};

const updateBook = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: "Invalid Book ID" });
  }
  let book = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!book) {
    return res.status(404).send({ message: "Book not found" });
  }
  res.status(200).json({ message: "updated", book });
};

const deleteBook = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: "Invalid Book ID" });
  }
  let book = await Book.findByIdAndDelete(req.params.id);
  if (!book) {
    return res.status(404).send({ message: "Book not found" });
  }
  res.status(200).json({ message: "deleted", book });
};

export { addBook, getAllBooks, updateBook, deleteBook, getBook };
