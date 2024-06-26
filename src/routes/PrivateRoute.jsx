/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
