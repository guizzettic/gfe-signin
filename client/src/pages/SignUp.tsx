import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import AuthForm from "../components/AuthForm";
import signupImage from "../img/sign-up.jpg";
import ErrorMessage from "../components/ErrorMessage";

const SignUp: React.FC = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const { signUp } = useAuth();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-gray-300">
      {formError && <ErrorMessage errorType={formError} />}
      <div className="flex w-full grow flex-col items-center justify-center px-4 py-8 md:p-4">
        <div className="flex w-full max-w-[343px] grow flex-col items-center justify-center rounded-lg bg-white shadow-lg md:max-w-[736px] xl:h-[736px] xl:max-w-[1408px] xl:flex-row">
          <div className="flex flex-col items-center justify-center gap-6 px-3 py-8 md:p-8 xl:w-1/2 xl:px-24 xl:py-8">
            <h1 className="self-start text-3xl font-semibold text-neutral-900 xl:pl-[60px]">
              Create your account
            </h1>
            <AuthForm
              type="signup"
              onSubmit={signUp}
              setFormError={setFormError}
            />
            <p className="text-sm font-medium">
              Already have an account?{" "}
              <a href="/signin" className="text-indigo-700">
                Sign in
              </a>
            </p>
          </div>
          <div className="hidden items-center justify-center xl:flex">
            <img
              src={signupImage}
              alt="Person looking up"
              className="h-[672px] w-[592px] scale-x-[-1] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
