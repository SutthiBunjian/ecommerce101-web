import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import config from "../config";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext is undefined");
  }
  // const { isLoggedIn, setIsLoggedIn } = userContext;

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      navigate("/home");
    }
  });

  const sendData = () => {
    axios
      .post(`${config.api.baseUrl}/users/login`, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("THIS IS WORKING", res.data);
        // setIsLoggedIn(true);
        if (res.data) {
          localStorage.setItem("userInfo", JSON.stringify(res.data.data));
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          navigate("/home");
        } else {
          alert("Error login");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        alert("Invalid username or password");
      });
  };

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    sendData();
  }

  return (
    <div className="bg-background">
      <div className="flex items-center justify-center h-screen">
        <div className="">
          <div className="box-content bg-gray-800 h-80 w-96 p-8 border-4 border-gray-500 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-center text-white">
              Sign In
            </h1>

            <form onSubmit={handleLogin}>
              <div className="mt-6">
                <label className="text-white text-sm">
                  Please Sign in to your account{" "}
                </label>
              </div>

              <div className="relative my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 pointer-events-none text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <input
                  type="text"
                  className="block w-96 py-2.5 pl-10 
                                pr-2 text-sm text-white rounded-xl 
                                bg-gray-700 border-gray-300"
                  placeholder="Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="relative my-4">
                <input
                  type="password"
                  className="block w-96 py-2.5 pl-10 pr-2 text-sm text-white rounded-xl bg-gray-700 border-gray-300"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 pointer-events-none text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>

              <div className=" ">
                <button
                  className="bg-blue-400 py-2.5 rounded-2xl w-96 mt-5 "
                  type="submit"
                >
                  LogIn
                </button>
              </div>

              <div className="mt-5 text-center">
                <label className="text-white text-sm ">
                  Have not registered?{" "}
                </label>
                <a
                  href="#"
                  onClick={() => navigate("/users/signup")}
                  className="text-blue-600 hover:text-purple-400"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
