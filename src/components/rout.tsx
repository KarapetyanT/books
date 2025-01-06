import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Books } from "./books";
import { AddBook } from "./add-book";
import { AddAuthor } from "./add-author";

export const paths = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Books /> },
      { path: "add-author", element: <AddAuthor /> },
      { path: "add-book", element: <AddBook /> },
      { path: "book/details/:id", element: <AddAuthor /> },
    ],
  },
]);
