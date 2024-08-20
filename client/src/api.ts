const API_URL = "http://localhost:5001/api/auth";

export const signIn = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
};

export const signUp = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const ErrorData = await response.json();
    throw new Error(ErrorData.message);
  }

  return response.json();
};

export const signOut = async (token: string) => {
  const response = await fetch(`${API_URL}/signout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const ErrorData = await response.json();
    throw new Error(ErrorData.message);
  }

  return response.json();
};

const getAuthHeaders = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user.token ? { Authorization: `Bearer ${user.token}` } : {};
};

export const fetchProtectedData = async () => {
  console.log(getAuthHeaders);

  const response = await fetch(`${API_URL}/protected-route`, {
    headers: {
      // ...getAuthHeaders() ,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  return response.json();
};
