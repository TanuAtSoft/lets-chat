import React from "react";
const Login = React.lazy(() => import("../pages/Login"));

const PrivateRoute = ({ children }) => {
//   let token = JSON.parse(localStorage.getItem("token"));

//   if (!token) {
//     return <Login />;
//   } else {
    return children;
//   }
};

export default PrivateRoute;
