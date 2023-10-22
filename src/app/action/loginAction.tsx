"use server";
// import { cookies } from "next/headers";

export const actionServer = async (formData: FormData) => {
  const params = new URLSearchParams();
  const email = formData.get("email");
  const password = formData.get("password");
  params.append("userName", email as string);
  params.append("password", password as string);

  const response = await fetch(`http://localhost:8080/login/signin`, {
    method: "POST",
    body: params,
  });

  const res = await response.json();

  // if (res.success) {
  //   cookies().set("authorization", res.data);
  // }

  return res;
};
