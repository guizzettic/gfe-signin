import { useState } from "react";
import "./App.css";
import signinimage from "./img/sign-in.jpg";

function App() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-300">
      <div className="flex max-h-[780px] w-[343px] grow flex-col items-center justify-center gap-10 rounded-lg border-2 border-black bg-white px-3 py-8 shadow-xl md:max-h-[992px] md:w-[736px] md:p-4 xl:max-h-[736px] xl:w-[1408px] xl:flex-row xl:justify-around">
        <form className="flex flex-col items-center justify-center gap-6 md:w-[456px] xl:w-[384px]">
          <h1 className="text-3xl font-semibold text-neutral-900 md:ml-[-125px] xl:ml-[-55px]">
            Log in to your account
          </h1>

          <div className="flex flex-col gap-6 self-stretch">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email-field"
                className="text-sm font-medium text-neutral-700"
              >
                Email
              </label>
              <div className="flex items-center rounded border border-solid border-neutral-200 bg-neutral-50 px-3.5 py-2.5">
                <input
                  id="email-field"
                  className="bg-neutral-50 text-sm font-normal text-neutral-500"
                  type="text"
                  placeholder="john@example.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  aria-label="Enter email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password-field"
                className="text-sm font-medium text-neutral-700"
              >
                Password
              </label>
              <div className="flex items-center rounded border border-solid border-neutral-200 bg-neutral-50 px-3.5 py-2.5">
                <input
                  id="password-field"
                  className="bg-neutral-50 text-sm font-normal text-neutral-500"
                  type="password"
                  placeholder="**********"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  aria-label="Enter password"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 self-stretch">
            <button
              type="submit"
              className="self-stretch rounded bg-indigo-700 px-3.5 py-2.5 text-white"
            >
              Submit
            </button>
            <span>
              Don't have an account?{" "}
              <button className="text-indigo-700">Sign up</button>
            </span>
          </div>
        </form>

        <img
          src={signinimage}
          className="hidden h-[672px] w-[592px] rounded-md xl:block"
        />
      </div>
    </div>
  );
}

export default App;
