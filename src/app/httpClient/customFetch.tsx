interface APIResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

class CustomFetch {
  public static async request<T>(
    url: string,
    method: string,
    data?: any
  ): Promise<APIResponse<T>> {
    const requestOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        // Các tiêu đề khác (nếu cần thiết)
      },
    };

    if (data) {
      requestOptions.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url, requestOptions);
      const responseData = await response.json();

      if (response.ok) {
        return responseData;
      } else {
        throw new Error(responseData.message);
      }
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  public static async get<T>(url: string): Promise<APIResponse<T>> {
    return CustomFetch.request<T>(url, "GET");
  }

  public static async post<T>(url: string, data: any): Promise<APIResponse<T>> {
    return CustomFetch.request<T>(url, "POST", data);
  }

  public static async put<T>(url: string, data: any): Promise<APIResponse<T>> {
    return CustomFetch.request<T>(url, "PUT", data);
  }

  public static async delete<T>(url: string): Promise<APIResponse<T>> {
    return CustomFetch.request<T>(url, "DELETE");
  }
}

export default CustomFetch;
