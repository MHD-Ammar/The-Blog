import Image from "next/image";
import PostUser from "@/components/postuser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { stringify } from "querystring";
//fetch data with API
// const getData = async (id: number) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong in singale post page");
//   } else return res.json();
// };

export default async function SinglePostPage({
  params,
}: { slug: number } | any) {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className="flex gap-28 ">
      <div className="relative  flex-auto h-[calc(100vh-200px)] max-w-[40%] max-lg:hidden">
        <Image
          src="/noavatar.png"
          alt="post image"
          fill
          className="object-cover"
        />
      </div>
      <div className=" flex-auto max-w-[25%] flex flex-col gap-10 max-lg:max-w-[90%]">
        <h1 className="text-4xl font-bold">{post?.title}</h1>
        <div className="flex gap-5">
          <Image
            src="/noavatar.png"
            alt="post image"
            height={50}
            width={50}
            className="object-cover rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-gray-500">Author</span>
            {post && (
              <Suspense fallback={<div>LOADING</div>}>
                <PostUser userId={post?.userId} />
              </Suspense>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Puplished</span>
            <span>01.01.2024</span>
          </div>
        </div>
        <div>{post?.body}</div>
      </div>
    </div>
  );
}
