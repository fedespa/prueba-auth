
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-2">
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
