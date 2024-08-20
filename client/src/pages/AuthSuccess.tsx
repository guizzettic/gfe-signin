import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthSuccess: React.FC = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-300">
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-2xl font-semibold text-green-600">Success!</h1>
        <p className="text-gray-700">
          Your account has been created successfully.
        </p>
        <button
          className="mt-5 w-full rounded bg-indigo-700 px-3.5 py-2.5 text-sm font-medium text-white"
          type="submit"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
export default AuthSuccess;
