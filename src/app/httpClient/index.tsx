import { redirect } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchWithAuth = async (url: string, options: RequestInit) => {
  let headers: HeadersInit = {
    ...(options.headers || {}),
  };
  if (typeof window === "undefined") {
    const { cookies } = await import("next/headers");
    const token = cookies().get("token")?.value;
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  const response = await fetch(`${baseURL}${url}`, { ...options, headers });

  if (!response.ok) {
    if (response.status === 401) {
      // const refreshResponse = await fetch(`${baseURL}/refresh-token`, {
      //   method: "POST",
      //   body: JSON.stringify({ refreshToken }),
      // });
      // if (refreshResponse.ok) {
      //   const { newToken } = await refreshResponse.json();
      //   localStorage.setItem("token",newToken)
      //   return fetchWithAuth(url, options);
      // } else {
      //   router.push("/login");
      // }
    }
    // This will activate the closest `error.js` Error Boundary
    redirect('/login')
  }

 

  return response.json();
};

export default fetchWithAuth;
