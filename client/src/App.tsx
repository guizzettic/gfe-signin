import { lazy, Suspense } from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Pricing = lazy(() => import("./Pricing/pages/Pricing"));
const HeroSection = lazy(() => import("./Hero_Section/pages/HeroSection"));
const AuthSuccess = lazy(() => import("./pages/AuthSuccess"));

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-gray-50 to-[#d2d6db]">
          <Router>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/hero_section" element={<HeroSection />} />
              <Route path="/dashboard" element={<AuthSuccess />} />
              <Route path="/" element={<SignIn />} />
              <Route path="*" element={<SignIn />} />
            </Routes>
          </Router>
        </div>
      </Suspense>
    </AuthProvider>
  );
};

export default App;
