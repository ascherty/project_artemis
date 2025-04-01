class AuthService {
    setToken(token: string) {
        localStorage.setItem("token", token);
    }

    getToken(): string | null {
        return localStorage.getItem("token");
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    logout() {
        localStorage.removeItem("token");
    }
}

export default new AuthService();