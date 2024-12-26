import { useForm } from "react-hook-form";
import { IAuthor, IBook } from "./types";
import { addNewBook } from "./api";
import { useState, useEffect } from "react";
import { getAuthors } from "./api";

export const AddBook = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IBook>();

  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    getAuthors().then((data) => setAuthors(data));
  }, []);

  const handleNewAdd = (data: IBook) => {
    addNewBook(data).then(() => {
      reset();
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
            Add New Book
          </h2>
          <form onSubmit={handleSubmit(handleNewAdd)} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-green-700 font-medium mb-2"
              >
                Book Title
              </label>
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
              <input
                {...register("title", { required: "Please fill title" })}
                type="text"
                id="title"
                placeholder="Enter book title"
                className="w-full p-3 border border-yellow-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="pages"
                className="block text-green-700 font-medium mb-2"
              >
                Pages
              </label>
              {errors.pages && (
                <p className="text-red-500">{errors.pages.message}</p>
              )}
              <input
                {...register("pages", { required: "Please fill pages" })}
                type="number"
                id="pages"
                min="1"
                placeholder="Enter number of pages"
                className="w-full p-3 border border-yellow-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="url"
                className="block text-green-700 font-medium mb-2"
              >
                Book URL
              </label>
              <input
                type="url"
                id="url"
                placeholder="Enter book URL"
                className="w-full p-3 border border-yellow-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="author"
                className="block text-green-700 font-medium mb-2"
              >
                Select Author
              </label>
              <select
                id="author"
                className="w-full p-3 border border-yellow-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option>Select an Author</option>
                {authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name} {author.surname}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-medium py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
