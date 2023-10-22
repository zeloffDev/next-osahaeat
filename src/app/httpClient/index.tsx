import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const apiBaseUrl = process.env.BASE_URL;

const useFetchWithAuth = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Lưu trữ token và refreshToken vào state từ local storage hoặc địa điểm lưu trữ khác (nếu cần)

    // Phục hồi token từ lưu trữ (VD: localStorage)
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setAuthToken(storedToken);
    }

    // Phục hồi refreshToken từ lưu trữ (VD: localStorage)
    const storedRefreshToken = localStorage.getItem('refreshToken');
    if (storedRefreshToken) {
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  const fetchWithAuth = async (url: string, options: RequestInit) => {
    // Gắn kết authToken vào header yêu cầu
    const headers: HeadersInit = {
      ...(options.headers || {}),
      Authorization: `Bearer ${authToken}`,
    };

    // Thực hiện yêu cầu gốc với các giá trị đã cập nhật
    const response = await fetch(`${apiBaseUrl}${url}`, { ...options, headers });

    // Kiểm tra xem phản hồi có mã 401 (Unauthorized - Chưa xác thực) không
    if (response.status === 401) {
      // Gửi yêu cầu refresh token để lấy token mới
      const refreshResponse = await fetch(`${apiBaseUrl}/refresh-token`, {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
      });

      if (refreshResponse.ok) {
        const { newToken } = await refreshResponse.json();

        // Cập nhật authToken mới
        setAuthToken(newToken);

        // Lưu trữ lại authToken vào lưu trữ (VD: localStorage)
        localStorage.setItem('authToken', newToken);

        // Thực hiện lại yêu cầu gốc với token mới đã cập nhật
        return fetchWithAuth(url, options);
      } else {
        // Nếu yêu cầu refresh token không thành công, đăng xuất người dùng
        router.push('/logout');
      }
    }

    return response;
  };

  return fetchWithAuth;
};

export default useFetchWithAuth;