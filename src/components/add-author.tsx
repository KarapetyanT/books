import { useForm } from "react-hook-form";
import { IAuthor } from "./types";
import { NewAuthor } from "./api";

export const AddAuthor = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IAuthor>();

  const handleAdd = (data: IAuthor): void => {
    NewAuthor(data).then(() => {
      reset();
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border-4 border-yellow-500">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          Add New Author
        </h2>
        <form onSubmit={handleSubmit(handleAdd)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-green-700 font-medium mb-2"
            >
              Author Name
            </label>
            {errors.name && (
              <p className="text-red-600 font-medium mb-1">
                {errors.name.message}
              </p>
            )}
            <input
              {...register("name", { required: "Please fill author's name" })}
              type="text"
              id="name"
              placeholder="Enter author's name"
              className="w-full p-3 border border-yellow-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="surname"
              className="block text-green-700 font-medium mb-2"
            >
              Author Surname
            </label>
            {errors.surname && (
              <p className="text-red-600 font-medium mb-1">
                {errors.surname.message}
              </p>
            )}
            <input
              {...register("surname", {
                required: "Please fill author's surname",
              })}
              type="text"
              id="surname"
              placeholder="Enter author's surname"
              className="w-full p-3 border border-yellow-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-medium py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Add Author
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
