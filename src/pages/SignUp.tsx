import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { userBasePath } from "../utils/common";
import { v4 as uuidv4 } from "uuid";

function SignUp() {
  const inputStyle =
    "block w-full py-2.5 px-2 text-sm text-white rounded-xl bg-gray-700 border-gray-300";
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  const sendData = () => {
    axios
      .post(userBasePath + "register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        dateOfBirth: dateOfBirth,
        password: password,
        address: address,
        uid: uuidv4(),
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("RegisteruserInfo", JSON.stringify(res.data));
        alert("Successfully signup");
        navigate("/");
      })
      .catch((error) => {
        console.error("Signup failed:", error);
        alert("Signup error");
      });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password != confirmpassword) {
      alert("The password and the confirm password do not match");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    sendData();
  };

  return (
    <div className="bg-background h-screen">
      <div className="flex items-center justify-center h-full w-screen">
        <div className="max-w-xl w-10/12 h-3/4 p-8 border-4 border-gray-500 rounded-lg shadow-lg bg-gray-800 ">
          <h1 className="text-4xl font-bold text-center text-white">Sign Up</h1>

          <form className="p-4" onSubmit={handleSubmit}>
            <div className="p-2 text-white">
              <div className="flex justify-between">
                <div className="w-1/2">
                  <label className="">Firstname: </label>
                  <br />
                  <input
                    className={inputStyle}
                    type="text"
                    name="firstName"
                    placeholder="Firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className=" w-1/2 ml-5">
                  <label>Lastname: </label>
                  <br />
                  <input
                    className={inputStyle}
                    type="text"
                    name="lastName"
                    placeholder="Lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div className="w-1/2">
                  <label className="">Email: </label>
                  <br />
                  <input
                    className={inputStyle}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="w-1/2 ml-5">
                  <label className="">Date of Birth: </label>
                  <br />
                  <input
                    className={inputStyle}
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-1/2">
                  <label className="">Password: </label>
                  <br />
                  <input
                    className={inputStyle}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="w-1/2 ml-5">
                  <label>Confirm Password: </label>
                  <br />
                  <input
                    className={inputStyle}
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label>Address:</label>
                <textarea
                  className={inputStyle}
                  rows={3}
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-between pt-10">
                <button
                  className="bg-blue-400 py-2.5 rounded-2xl w-full ml-1"
                  type="submit"
                  onSubmit={() => {
                    handleSubmit;
                  }}
                >
                  Submit
                </button>
                <button
                  className="bg-blue-400 py-2.5 rounded-2xl w-full ml-1"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
