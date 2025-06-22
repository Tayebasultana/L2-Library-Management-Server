import { Request, Response } from "express";
import Book from "../book/book.model";
import Borrow from "./borrow.model";

// Borrow a book
export const borrowBook = async (req: Request, res: Response) => {
  const { book, quantity, dueDate } = req.body;

  const bookData = await Book.findById(book);
  if (!bookData || bookData.copies < quantity) {
    return res.status(400).send({ success: false, message: "Not enough copies available" });
  }

  bookData.copies -= quantity;
  if (bookData.copies === 0) bookData.available = false;
  await bookData.save();

  const borrow = await Borrow.create({ book, quantity, dueDate });

  res.send({ success: true, message: "Book borrowed successfully", data: borrow });
};

// Borrow summary (Aggregation)
export const borrowedSummary = async (_req: Request, res: Response) => {
  const summary = await Borrow.aggregate([
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookDetails",
      },
    },
    {
      $unwind: "$bookDetails",
    },
    {
      $project: {
        book: {
          title: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
        },
        totalQuantity: 1,
      },
    },
  ]);

  res.send({ success: true, message: "Borrowed books summary retrieved successfully", data: summary });
};
