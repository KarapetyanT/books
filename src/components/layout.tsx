import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="flex text-center flex-col min-h-screen">
        <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4">
          <div className="text-3xl font-extrabold mb-4">Books</div>
          <div className="flex text-center space-x-6">
            <NavLink
              to="/book"
              className="hover:text-blue-300 text-xl transition font-semibold"
            >
              Book
            </NavLink>
            <NavLink
              to="/add-author"
              className="hover:text-blue-300 text-xl transition font-semibold"
            >
              Add Author
            </NavLink>
            <NavLink
              to="/add-book"
              className="hover:text-blue-300 text-xl transition font-semibold"
            >
              Add Book
            </NavLink>
          </div>
        </nav>
        <main className="flex-grow p-8 bg-gradient-to-r from-yellow-100 via-purple-100 to-pink-100">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
        <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-4">
          <div className="text-center">
            <p className="text-sm font-light">
              &copy; 2024 Books App. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
