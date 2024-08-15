"use client";
import PostCard from "@/components/postCard/PostCard";
import React, { useEffect, useState } from "react";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function BlogPage() {
  const [posts, setPost] = useState<Post[]>([]);
  useEffect(() => {
    const getPostData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store", //the defult is force-cache
        next: { revalidate: 3600 }, //to update data each 1 hour
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      } else {
      }
      const data = await res.json();
      setPost(data);
    };

    getPostData();
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-5 justify-evenly">
        {posts.map((post) => (
          <div
            key={post.title}
            className="xl:min-lg:max-w-[30%] sm:min-md:max-w-[45%]"
          >
            <PostCard title={post.title} body={post.body} id={post.id} />
          </div>
        ))}
      </div>
    </>
  );
}
