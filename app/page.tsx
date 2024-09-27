import { Button } from "@/components/ui/button";
import Link from "next/link";
import { logoutAction } from "./action";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href={"/auth/login"}>Login</Link>
      <Link href={"/auth/register"}>register</Link>
      <form action={logoutAction}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
}
