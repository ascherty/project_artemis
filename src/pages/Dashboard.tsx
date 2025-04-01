import AuthService from "../services/authService";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        navigate("/login");
    };

    return (
        <div>
            <h1>Личный кабинет</h1>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    );
}

export default Dashboard;