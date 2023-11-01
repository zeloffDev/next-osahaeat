"use server";
import { cookies } from "next/headers";
import fetchWithAuth from "../httpClient";
import { redirect } from "next/navigation";

export const actionServer = async (formData: FormData) => {
  const params = new URLSearchParams();
  const email = formData.get("email");
  const password = formData.get("password");
  params.append("userName", email as string);
  params.append("password", password as string);

  const response = await fetchWithAuth(`/login/signin`, {
    method: "POST",
    body: params,
    cache: "force-cache",
  });

  if (response.success) {
    cookies().set("token", response.data);
  }

  return response;
};

export const logoutActionServer = async () => {
  cookies().delete("token");
  redirect("/login");
};
