import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"

export default function AdminGuard({ children }) {

    // Check if user is admin
    const { user } = useUser();

    

    return user?.role === "admin" ? children : <Navigate to="/" replace />
}
