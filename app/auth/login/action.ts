"use server";

import { key } from "@/key";
import { LoginSchema } from "@/schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as z from "zod";

export const loginAction = async (
  _: unknown,
  data: z.infer<typeof LoginSchema>
) => {
  const requestOptions: RequestInit = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${key.endPoint}/${key.version1}/auth/signin`,
      requestOptions
    );
    const result = await response.json();

    console.log(result);
    if (!response.ok) return result.message;
    cookies().set(key.dreamLab_token, result.access_token);
    redirect("/");
  } catch (error) {
    throw error;
  }
};

export const registerAction = async (
  _: unknown,
  data: z.infer<typeof LoginSchema>
) => {
  const requestOptions: RequestInit = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `${key.endPoint}/${key.version1}/auth/signup`,
      requestOptions
    );
    const result = await response.json();

    console.log(result);
    if (!response.ok) return result.message;
    cookies().set(key.dreamLab_token, result.access_token);
    redirect("/");
  } catch (error) {
    throw error;
  }
};
