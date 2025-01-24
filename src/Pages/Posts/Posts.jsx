import { useForm } from "react-hook-form";
import { useSetPostMutation } from "../../Redux/features/api/baseApi";

export default function Posts() {
  const [setPost, { data, isLoading, isError, error }] = useSetPostMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      await setPost(formData).unwrap();
      alert("Post submitted successfully!");
    } catch (err) {
      console.error("Submission failed:", err);
    }
  };
  console.log(data)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-semibold text-center text-gray-800">
          Submit Your Post
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 mt-1 text-gray-900 border rounded-lg ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500 focus:border-blue-500"
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-2 text-white rounded-lg shadow-lg ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2"
              }`}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Feedback Messages */}
        {data && (
          <p className="mt-4 text-green-600">
            Post submitted successfully: {JSON.stringify(data)}
          </p>
        )}
        {isError && (
          <p className="mt-4 text-red-600">
            Failed to submit post. Error: {error?.message || "Unknown error"}
          </p>
        )}
      </div>
    </div>
  );
}
