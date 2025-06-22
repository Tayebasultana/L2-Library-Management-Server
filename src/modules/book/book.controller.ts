import { Request, Response } from "express";
import Book from "./book.model";

// Create Book
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).send({ success: true, message: "Book created successfully", data: book });
  } catch (error: any) {
    res.status(400).send({ success: false, message: "Error creating book", error: error.message });
  }
};

// Get All Books (filter, sort, limit)
export const getAllBooks = async (req: Request, res: Response) => {
  const { filter, sortBy = "createdAt", sort = "desc", limit = "10" } = req.query;

  const query: any = {};
  if (filter) query.genre = filter;

  const books = await Book.find(query)
    .sort({ [sortBy as string]: sort === "desc" ? -1 : 1 })
    .limit(Number(limit));

  res.send({ success: true, message: "Books retrieved successfully", data: books });
};

// Get Book by ID
export const getBookById = async (req: Request, res: Response) => {
  const book = await Book.findById(req.params.bookId);
  if (!book) return res.status(404).send({ success: false, message: "Book not found" });
  res.send({ success: true, message: "Book retrieved successfully", data: book });
};

// Update Book
export const updateBook = async (req: Request, res: Response) => {
  const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, { new: true });
  res.send({ success: true, message: "Book updated successfully", data: book });
};

// Delete Book
export const deleteBook = async (req: Request, res: Response) => {
  await Book.findByIdAndDelete(req.params.bookId);
  res.send({ success: true, message: "Book deleted successfully", data: null });
};
