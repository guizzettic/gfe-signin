import { lazy, Suspense } from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const AuthSuccess = lazy(() => import("./pages/AuthSuccess"));

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/signin" Component={SignIn} />
            <Route path="/signup" Component={SignUp} />
            <Route path="/dashboard" Component={AuthSuccess} />
            <Route path="/" Component={SignIn} />
          </Routes>
        </Router>
      </Suspense>
    </AuthProvider>
  );
};

export default App;
