import api from "./api";

const register = async (data) => {
  try {
    let res = await api.post("/api/v1/auth/register", data);
    if (res.accessToken) {
      localStorage.setItem("access_token", res.accessToken);
    }
    localStorage.setItem("user", JSON.stringify(res.data));

    return res.data;
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
    localStorage.setItem("user", JSON.stringify(res.data));

    return res;
  } catch (e) {
    return "Something went wrong!";
  }
};

const logout = async (data) => {
  try {
    let res = await api.post("/api/v1/auth/logout", data);
    if (res.ok) {
      localStorage.remove("access_token");
    }
  } catch (e) {
    return "Something went wrong!";
  }
};

const authService = {
  login,
  logout,
  register,
};

export default authService;
