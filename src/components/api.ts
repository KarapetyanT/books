import axios from "axios";
import { IAuthor } from "./types";
import { IBook } from "./types";

const Axios = axios.create({
  baseURL: "http://localhost:3000",
});

export const getBooks = async (): Promise<IBook[]> => {
  const response = await Axios.get("/books");
  return response.data;
};
export const NewAuthor = async (data: IAuthor): Promise<IAuthor> => {
  const response = await Axios.post("/authors", data);
  return response.data;
};

export const addNewBook = async (data: IBook): Promise<IBook> => {
  const response = await Axios.post("/books", data);
  return response.data;
};

export const getAuthors = async (): Promise<IAuthor[]> => {
  const response = await Axios.get("/authors");
  return response.data;
};

export const deleteBook = async (id: string | number): Promise<IBook> => {
  const response = await Axios.delete("/books/" + id);
  return response.data;
};
