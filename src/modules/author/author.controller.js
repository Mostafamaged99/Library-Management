import mongoose from "mongoose";
import { Author } from "../../../database/models/author.model.js";

const addAuthor = async (req, res) => {
    let isExist = await Author.findOne({ name: req.body.name });
    if (isExist) {
        return res.status(400).send({ message: "Author already exist" });
    }
  let author = await Author.insertMany(req.body);
  res.status(201).json({ message: "success", author });
};

  const getAllAuthors = async (req, res) => {
    let authors = await Author.find().populate("books");
    res.status(200).json({ message: "success", authors });
  };

  const getAuthor = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "Invalid Author ID" });
    }
    let author = await Author.findById(req.params.id).populate('books');
    if (!author) {
      return res.status(404).send({ message: "Author not found" });
    }
    res.status(200).json({ message: "success", author });
  };

  const updateAuthor = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "Invalid Author ID" });
    }
    let author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate('books');
    if (!author) {
      return res.status(404).send({ message: "Author not found" });
    }
    res.status(200).json({ message: "updated", author });
  };

  const deleteAuthor = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: "Invalid Author ID" });
    }
    let author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).send({ message: "Author not found" });
    }
    res.status(200).json({ message: "deleted", author });
  };

export { addAuthor, getAllAuthors, getAuthor, updateAuthor, deleteAuthor };
