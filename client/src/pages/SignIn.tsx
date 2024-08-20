import { useState } from "react";
import AuthForm from "../components/AuthForm";
import ErrorMessage from "../components/ErrorMessage";
import useAuth from "../hooks/useAuth";
import signinImage from "../img/sign-in.jpg";

export const SignIn: React.FC = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const { signIn } = useAuth();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-gray-300">
      <div className="flex w-full grow flex-col items-center justify-center px-4 py-8 md:p-4">
        {formError && <ErrorMessage errorType={formError} />}
        <div className="flex w-full max-w-[343px] grow flex-col items-center justify-center rounded-lg bg-white shadow-lg md:max-w-[736px] xl:h-[736px] xl:max-w-[1408px] xl:flex-row">
          <div className="flex flex-col items-center justify-center gap-6 px-3 py-8 md:p-8 xl:w-1/2 xl:px-24 xl:py-8">
            <h1 className="self-start text-3xl font-semibold text-neutral-900 xl:pl-[60px]">
              Log in to your account
            </h1>
            <AuthForm
              type="signin"
              onSubmit={signIn}
              setFormError={setFormError}
            />
            <p className="text-sm font-medium">
              Don't have an account?{" "}
              <a href="/signup" className="text-indigo-700">
                Sign up
              </a>
            </p>
          </div>
          <div className="hidden items-center justify-center xl:flex">
            <img
              src={signinImage}
              alt="Person using VR headset"
              className="h-[672px] w-[592px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
