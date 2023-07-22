import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoutes = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <h1>Loading...</h1>;

  if (!isAuthenticated && !loading) return navigate("/login");

  return <Outlet />;
};

export default ProtectedRoutes;
