"use server";

import { key } from "@/key";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logoutAction = async () => {
  cookies().delete(key.dreamLab_token);
  redirect("/auth/login");
};
