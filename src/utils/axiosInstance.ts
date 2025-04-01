import axios from "axios";
import AuthService from "../services/authService";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
});

// add interceptor for requests
axiosInstance.interceptors.request.use((config) => {
    const token = AuthService.getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// handle 401 (Unauthorized)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            AuthService.logout(); // delete token
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);


// prepare refresh logic
// axiosInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         if (error.response?.status === 401 && !error.config._retry) {
//             error.config._retry = true;
//             try {
//                 const refreshResponse = await axios.post("/auth/refresh", {
//                     refreshToken: AuthService.getRefreshToken(),
//                 });
//                 AuthService.setToken(refreshResponse.data.token);
//                 error.config.headers.Authorization = `Bearer ${refreshResponse.data.token}`;
//                 return axiosInstance(error.config);
//             } catch (refreshError) {
//                 AuthService.logout();
//                 window.location.href = "/login";
//             }
//         }
//         return Promise.reject(error);
//     }
// );

export default axiosInstance;
