import React from "react";
import { useGetPostsQuery } from "../../Redux/features/api/baseApi";
import PostCard from "../../Components/Feed/PostCard";

const Home = () => {
  const { data, isLoading, isError } = useGetPostsQuery();
  


  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Posts</h1>

        {isLoading && <p className="text-gray-500">Loading posts...</p>}
        {isError && <p className="text-red-500">Something went wrong. Please try again.</p>}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data?.map((post) => (
            <PostCard key={post?.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
