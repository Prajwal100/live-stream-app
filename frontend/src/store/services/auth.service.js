import api from "./api";

const register = async (data) => {
  try {
    let res = await api.post("/api/v1/auth/register", data);
    if (res.accessToken) {
      localStorage.setItem("access_token", res.accessToken);
    }
    return res.user;
  } catch (e) {
    return "Something went wrong!";
  }
};

const login = async (data) => {
  try {
    let res = await api.post("/api/v1/auth/login", data);

    if (res.accessToken) {
      localStorage.setItem("access_token", res.accessToken);
    }
    return res.user;
  } catch (e) {
    return "Something went wrong!";
  }
};

const logout = async () => {
  try {
    let res = await api.post("/api/v1/auth/logout", data);
    if (res.ok) {
      localStorage.remove("access_token");
    }
  } catch (e) {
    return "Something went wrong!";
  }
};

export default authService = {
  login,
  logout,
  register,
};
