import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="p-5 mb-4 transition-shadow duration-300 bg-white border rounded-lg shadow-md hover:shadow-lg">
      <h2 className="mb-2 text-xl font-semibold text-gray-800">{post?.title}</h2>
      <p className="text-gray-600">{post?.body}</p>
    </div>
  );
};

export default PostCard;
