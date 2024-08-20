import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthSuccess from "./pages/AuthSuccess";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signin" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/dashboard" Component={AuthSuccess} />
          <Route path="/" Component={SignIn} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
