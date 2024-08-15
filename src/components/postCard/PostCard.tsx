import React, { Dispatch } from "react";
import Image from "next/image";
import Link from "next/link";

// interface CreateUserFormProps {
//   closeModal: Dispatch<SetStateAction<boolean>>
// }

// const CreateUserForm: FC<CreateUserFormProps> = ({ closeModal }) => {
interface postCardProps {
  title: string;
  body: string;
  id: number;
}
// type postCardProps ={ //can use any one
//   title: string;
//   body: string;
//   id: number;
// }
export default function PostCard(props: postCardProps) {
  return (
    <div className="flex flex-col gap-5 mb-5 w-[400px]">
      <div className="flex ">
        <div className="w-11/12 relative h-[400px]">
          <Image
            src="/noavatar.png"
            alt="post image"
            fill
            className="object-cover"
          />
        </div>
        <span className="rotate-90 m-auto">10.01.2024</span>
      </div>
      <div>
        <h1 className="text-2xl mb-5">{props.title}</h1>
        <p className="mb-5 font-light text-gray-500 w-5/6 text-justify">
          {props.body}
        </p>
        <Link href={`/blog/${props.id}`} className="underline">
          Read more
        </Link>
      </div>
    </div>
  );
}
