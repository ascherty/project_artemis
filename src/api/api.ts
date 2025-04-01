import axiosInstance from "../utils/axiosInstance";

class Api {
    async login(username: string, password: string): Promise<string> {
        const response = await axiosInstance.post("/auth/login", { username, password });
        return response.data.token;
    }

    async register(username: string, password: string, email: string): Promise<void> {
        await axiosInstance.post("/auth/register", { username, password, email });
    }
}

export default new Api();