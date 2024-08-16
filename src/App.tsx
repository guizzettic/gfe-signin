import { useState } from "react";
import "./App.css";
import signinImage from "./img/sign-in.jpg";

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-gray-300">
      <div className="flex w-full grow flex-col items-center justify-center px-4 py-8 md:p-4">
        <div className="flex w-full max-w-[343px] grow flex-col items-center justify-center rounded-lg bg-white shadow-lg md:max-w-[736px] xl:h-[736px] xl:max-w-[1408px] xl:flex-row">
          {/* Form Side */}
          <div className="py- flex flex-col items-center justify-center gap-6 px-3 md:p-8 xl:mx-24 xl:w-1/3 xl:py-8">
            <h1 className="self-start text-3xl font-semibold text-neutral-900 xl:pl-[10px]">
              Log in to your account
            </h1>

            {/* Form Content */}
            <form className="w-full space-y-6 md:w-[456px] xl:w-96">
              <div className="gap-1.5">
                <label
                  htmlFor="email-field"
                  className="text-sm font-medium text-neutral-700"
                >
                  Email
                </label>
                <input
                  id="email-field"
                  className="w-full rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-500"
                  type="email"
                  placeholder="john@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
              </div>
              <div className="gap-1.5">
                <label
                  htmlFor="password-field"
                  className="text-sm font-medium text-neutral-700"
                >
                  Password
                </label>
                <input
                  id="password-field"
                  className="w-full rounded border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-900 placeholder-neutral-500"
                  type="password"
                  placeholder="**********"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  required
                />
              </div>

              {/* Action Buttons */}
              <button
                type="submit"
                className="w-full rounded bg-indigo-700 px-3.5 py-2.5 text-sm font-medium text-white"
              >
                Submit
              </button>
            </form>
            <p className="text-sm font-medium">
              Don't have an account?{" "}
              <a href="#" className="text-indigo-700">
                Sign up
              </a>
            </p>
          </div>

          {/* Image Content */}
          <div className="hidden items-center justify-center xl:flex">
            <img
              src={signinImage}
              alt="Person using VR headset"
              className="h-[672px] w-[592px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
