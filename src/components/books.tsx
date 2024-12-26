import { useEffect, useState } from "react";
import { IBook } from "./types";
import { Link } from "react-router-dom";
import { getBooks } from "./api";
import Modal from "react-modal";
import { deleteBook } from "./api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "200px",
    backgroundColor: "pink",
  },
};

export const Books = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [open, isOpen] = useState<boolean>(false);
  const [toDelete, setToDelete] = useState<string | number>("");

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  const confirm = (id: string | number) => {
    setToDelete(id);
    isOpen(true);
  };

  const handleDelete = () => {
    deleteBook(toDelete).then(() => {
      setBooks(books.filter((book) => book.id !== toDelete));
      isOpen(false);
    });
  };

  const onClose = () => {
    isOpen(false);
  };

  return (
    <>
      <Modal isOpen={open} style={customStyles} onRequestClose={onClose}>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={handleDelete}
            className="py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            No
          </button>
        </div>
      </Modal>

      <div className="bg-gradient-to-r from-yellow-300 via-green-400 to-yellow-300 text-gray-900 min-h-screen p-6">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-800">
          Books Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-yellow-400"
            >
              <h2 className="text-2xl font-semibold mb-3 text-green-700">
                {book.title}
              </h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-green-800">Pages:</span>{" "}
                {book.pages}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold text-green-800">Price:</span>{" "}
                {book.price} USD
              </p>
              <Link
                to={"/book/details/" + book.id}
                className="text-yellow-600 hover:text-yellow-800 font-semibold mt-4 inline-block"
              >
                View Book
              </Link>
              <button
                onClick={() => confirm(book.id)}
                className="mt-4 w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
