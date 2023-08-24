import { lazy, Suspense,useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Chats = lazy(() => import("./pages/Chats"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const ProfileSettings = lazy(()=>import("./pages/ProfileSettings"))

function App() {
  const [expiry, setExpiry] = useState(0);
  return (
    <div className="App">
      <Router>
        {/* <div className="header"></div> */}
        <Suspense fallback={<p>Loading..</p>}>
          <Routes>
            <Route
              exact
              path="/"
              name="Login Page"
              element={<Navigate to="/login" replace />}
            />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              element={<Register />}
            />
            <Route
              exact
              path="/reset-password/:token"
              name="Register Page"
              element={<ResetPassword />}
            />
            <Route
              exact
              path="/dashboard"
              name="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              exact
              path="/forgot-password"
              name="Register Page"
              element={<ForgotPassword />}
            />

            <Route
              path="/profile"
              name="profile"
              element={
                <PrivateRoute>
                  <ProfileSettings />
                </PrivateRoute>
              }
            />
            <Route
              path="/chats/:id"
              name="chats"
              element={
                <PrivateRoute>
                  <Chats />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
