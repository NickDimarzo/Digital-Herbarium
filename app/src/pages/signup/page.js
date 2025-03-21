"use client";
import { useState } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import LoadingBlock from "./components/loading-block";
import NewUserBlock from "./components/newUser-block";

export default function Page() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, createUser, emailSignIn } = useUserAuth();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (strongPassword.test(newPassword)) {
      setPasswordMessage("Password is valid");
    } else {
      setPasswordMessage(
        "Password must be at least 8 characters long, contain both uppercase and lowercase letters"
      );
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (password === newConfirmPassword) {
      setConfirmMessage("Passwords match");
    } else {
      setConfirmMessage("Passwords do not match");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, setLoading);
  };

  return (
    <main className="w-screen h-full flex-col justify-center">
      <div className="flex justify-center">
        <div className="custom-card xl:w-1/3">
          <div className="flex-col justify-center m-8 font-mono bg-white p-5 rounded-3xl text-sm  m:text-lg lg:text-xl xl:text-2xl">
            {loading ? (
              <LoadingBlock />
            ) : user ? (
              <NewUserBlock user={user} />
            ) : (
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center">
                  <h1>Welcome to account</h1>
                </div>
                <div className="flex justify-center items-center">
                  <h1>Sign up</h1>
                </div>
                {/* <div className="flex justify-center w-2/3">
                  <p className="py-4">
                    Please fill out the form below to create an account
                  </p>
                </div> */}
                <div className="flex-col justify-center m-4 w-full">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-end my-4 w-full p-4">
                      <label className="w-full">Email:</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className=" text-black m-2 w-full border-b-2 border-dark-blue outline-none"
                      />
                    </div>
                    <div className="flex flex-col justify-end my-4 w-full p-4">
                      <label className="w-full">Password:</label>
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className=" text-black m-2 w-full border-b-2 border-dark-blue outline-none"
                      />
                    </div>
                    <div className="flex justify-end text-sm lg:text-lg">
                      <small
                        style={{
                          color:
                            passwordMessage === "Password is valid"
                              ? "green"
                              : "red",
                        }}
                        className="w-1/2 flex justify-end"
                      >
                        {passwordMessage}
                      </small>
                    </div>
                    <div className="flex flex-col justify-end my-4 w-full p-4">
                      <label className="w-full">Confirm Password:</label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className=" text-black m-2 w-full border-b-2 border-dark-blue outline-none"
                      />
                    </div>
                    <div className="flex justify-end text-sm lg:text-lg ">
                      <small
                        style={{
                          color:
                            confirmMessage === "Passwords match"
                              ? "green"
                              : "red",
                        }}
                      >
                        {confirmMessage}
                      </small>
                    </div>
                    <div className="flex justify-center px-8 pt-10">
                      <button
                        type="submit"
                        onSubmit={handleSubmit}
                        className="bg-dark-blue text-gray-50 px-10 font-mono m-8 py-4 rounded-xl hover:bg-light-green shadow-2xl shadow-black transition duration-500 hover:-translate-y-1 hover:scale-110"
                      >
                        {" "}
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
