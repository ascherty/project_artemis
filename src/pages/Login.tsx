import { useState } from "react";
import Api from "../api/api";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await Api.login(username, password);
            localStorage.setItem("token", token);
            alert("Успешный вход!");
        } catch (error) {
            alert("Ошибка авторизации");
        }
    };

    return (
        <div>
            <h1>Логин</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
}

export default Login;
