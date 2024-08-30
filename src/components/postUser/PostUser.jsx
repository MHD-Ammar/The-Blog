import { getUser } from "@/lib/data";

// const userData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     console.log(res);
//     throw new Error("Something went wrong in ");
//   } else return res.json();
// };

export default async function PostUser({ userId }) {
  const user = await getUser(userId);

  console.log(user);

  return <span>{user?.name}</span>;
}
