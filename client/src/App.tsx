import { lazy, Suspense } from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Pricing = lazy(() => import("./Pricing/pages/Pricing"));
const AuthSuccess = lazy(() => import("./pages/AuthSuccess"));

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<AuthSuccess />} />
            <Route path="/" element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
          </Routes>
        </Router>
      </Suspense>
    </AuthProvider>
  );
};

export default App;
