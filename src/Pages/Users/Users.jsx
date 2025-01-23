import React, { useState } from "react";
import {
  useGetASingleUserByIdQuery,
  useGetUsersQuery,
} from "../../Redux/features/api/baseApi";

const Users = () => {
  const [userId, setUserId] = useState(null);
  const { data: users, isError, isLoading } = useGetUsersQuery();
  const {
    data: singleUser,
    isError: isSingleUserError,
    isLoading: isSingleUserLoading,
  } = useGetASingleUserByIdQuery(userId, {
    skip: !userId, // Skip the query if no userId is selected
  });

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Users</h1>

        {/* Users List */}
        {isLoading && <p className="text-gray-500">Loading users...</p>}
        {isError && (
          <p className="text-red-500">Error fetching users. Please try again later.</p>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users?.map((user) => (
            <div
              key={user?.id}
              className="p-5 mb-4 transition-shadow duration-300 bg-white border rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
              <p className="text-gray-600">
                <span className="font-bold">Username:</span> {user?.username}
              </p>
              <button
                onClick={() => setUserId(user?.id)}
                className="px-4 py-2 mt-3 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Single User Details */}
        {userId && (
          <div className="p-6 mt-10 bg-white border rounded-lg shadow-md">
            {isSingleUserLoading && <p className="text-gray-500">Loading user details...</p>}
            {isSingleUserError && (
              <p className="text-red-500">Error fetching user details. Please try again.</p>
            )}
            {singleUser && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{singleUser?.name}</h2>
                <p className="text-gray-600">
                  <span className="font-bold">Username:</span> {singleUser?.username}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Email:</span> {singleUser?.email}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Phone:</span> {singleUser?.phone}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Address:</span>{" "}
                  {`${singleUser?.address?.street}, ${singleUser?.address?.suite}, ${singleUser?.address?.city}`}
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">Company:</span> {singleUser?.company?.name}
                </p>
                <button
                  onClick={() => setUserId(null)}
                  className="px-4 py-2 mt-4 text-sm font-semibold text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Close Details
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
