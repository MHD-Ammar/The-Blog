import Image from "next/image";

const geData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Something went wrong in singale post page");
  } else return res.json();
};

export default async function SinglePostPage({ params }) {
  console.log(params);
  const { slug } = params;
  const post = await geData(slug);
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
        <h1 className="text-4xl font-bold">{post.title}</h1>
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
            <span>Terry Jefferson</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Puplished</span>
            <span>01.01.2024</span>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in dicta
          adipisci nam aut iste, necessitatibus alias aliquid nobis dolorem
          ratione dolore at, veniam repellendus, animi possimus odit rerum quis.
        </div>
      </div>
    </div>
  );
}
