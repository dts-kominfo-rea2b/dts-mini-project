import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

const ProtectedRoute = (props) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/unauthorized" replace />;
  }

  return props.children;
};

export default ProtectedRoute;
