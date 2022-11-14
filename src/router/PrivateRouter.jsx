import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // const user = useSelector((state)=> state.auth.user);
  const {user} = useSelector((state)=> state.auth); //! desc.

  return user.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
