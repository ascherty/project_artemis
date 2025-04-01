import { Navigate } from "react-router-dom";
import AuthService from "../services/authService";
import {JSX} from "react";

interface ProtectedRouteProps {
    children: JSX.Element;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    return AuthService.isAuthenticated() ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;