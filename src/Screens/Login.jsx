import { type } from "@testing-library/user-event/dist/type";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const username = useRef();
  const password = useRef();
  const [err, setErr] = React.useState(false);
  const navi = useNavigate();
  const handleLogin = () => {
    if (
      username.current.value === "admin" &&
      password.current.value === "admin"
    ) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navi("/home");
    } else setErr(true);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[350px] h-[300px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 ">
        <div className="w-full h-full flex flex-col gap-5 justify-center">
          <div className="w-full h-full flex flex-col gap-5 justify-center">
            <p className="text-center text-xl text-white font-medium">Login</p>
            <input
              ref={username}
              onChange={() => setErr(false)}
              className="h-fit p-2 rounded  w-full focus:outline-none border-none"
              type="text"
            />
            <input
              ref={password}
              onChange={() => setErr(false)}
              className="h-fit p-2 rounded w-full focus:outline-none border-none"
              type="password"
            />
            {err && (
              <p className="text-center text-sm text-red-500">
                Incorrect Inputs...
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-white w-full h-fit p-2 rounded active:scale-95 transition-all duration-75 ease-in-out"
            onClick={handleLogin}
          >
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
