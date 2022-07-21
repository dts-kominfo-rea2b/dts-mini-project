import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const ProtectedRoute = ({children, loginOnly = true}) => {
        const [user] = useAuthState(auth);
        const navigate = useNavigate();

        if (!user && loginOnly){
                navigate("/login");
        }

        if (user && !loginOnly){
                navigate("/home");
        }

        return children;
}

export default ProtectedRoute;