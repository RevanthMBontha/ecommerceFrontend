import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "../components/Button";

const loginURL =
  "https://ecommercebackend-rt0y.onrender.com/api/v1/users/login";
const signupURL =
  "https://ecommercebackend-rt0y.onrender.com/api/v1/users/signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationFn: async (signupData) => {
      const response = await axios.post(signupURL, signupData);
      return response;
    },
    onSuccess: () => {
      toast.success("User signed up successfully!");
      setTimeout(() => {
        setIsLogin(true);
      }, 1000);
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (loginData) => {
      const response = await axios.post(loginURL, loginData);
      return response;
    },
    onSuccess: (response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("id", response.data.id);
      toast.success("User logged in successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    },
  });

  if (isLogin) {
    return (
      <div className="lg:p- flex h-full w-full items-center justify-center bg-gray-200 p-12">
        <div className="custom-shadow flex flex-col rounded-md bg-white p-8">
          <div className="flex justify-center">
            <img
              className="h-[64px] w-[64px]"
              src="/images/crown_primary.svg"
              alt="logo"
            />
          </div>
          <h1 className="mb-12 text-center text-3xl font-semibold">Login</h1>
          <div className="mb-8 flex flex-col">
            <label className="font-thin" htmlFor="email">
              Enter your email:
            </label>
            <input
              className="h-8 w-[300px] rounded-md bg-gray-200 pl-2 lg:w-[450px]"
              type="text"
              name="email"
              placeholder="Enter your mail"
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
          </div>

          <div className="mb-8 flex flex-col">
            <label className="font-thin" htmlFor="password">
              Enter your password:
            </label>
            <input
              className="h-8 w-[300px] rounded-md bg-gray-200 pl-2 lg:w-[450px]"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
          </div>

          <div className="mb-8 text-center">
            New here?{" "}
            <span
              className="cursor-pointer text-blue-400 hover:underline"
              onClick={() => setIsLogin(false)}
            >
              Sign up!
            </span>
          </div>
          <Button
            style="text-white text-lg mx-auto"
            onClick={() => loginMutation.mutate(loginDetails)}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-200 p-12 lg:p-8">
      <div className="custom-shadow flex flex-col rounded-md bg-white p-8">
        <div className="flex justify-center">
          <img
            className="h-[64px] w-[64px]"
            src="/images/crown_primary.svg"
            alt="logo"
          />
        </div>
        <h1 className="mb-12 text-center text-3xl font-semibold">Register</h1>
        <div className="mb-8 flex flex-col">
          <label className="font-thin" htmlFor="email">
            Enter your first name:
          </label>
          <input
            className="h-8 w-[300px] rounded-md bg-gray-200 pl-2 lg:w-[450px]"
            type="text"
            name="email"
            placeholder="Enter your first name"
            value={signupDetails.firstName}
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, firstName: e.target.value })
            }
          />
        </div>

        <div className="mb-8 flex flex-col">
          <label className="font-thin" htmlFor="email">
            Enter your last name:
          </label>
          <input
            className="h-8 w-[300px] rounded-md bg-gray-200 pl-2 lg:w-[450px]"
            type="text"
            name="email"
            placeholder="Enter your last name"
            value={signupDetails.lastName}
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, lastName: e.target.value })
            }
          />
        </div>

        <div className="mb-8 flex flex-col">
          <label className="font-thin" htmlFor="email">
            Enter your email:
          </label>
          <input
            className="h-8 w-[300px] rounded-md bg-gray-200 pl-2 lg:w-[450px]"
            type="text"
            name="email"
            placeholder="Enter your mail"
            value={signupDetails.email}
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, email: e.target.value })
            }
          />
        </div>

        <div className="mb-8 flex flex-col">
          <label className="font-thin" htmlFor="password">
            Enter your password:
          </label>
          <input
            className="h-8 w-[300px] rounded-md bg-gray-200 pl-2 lg:w-[450px]"
            type="password"
            name="password"
            placeholder="Add a password"
            value={signupDetails.password}
            onChange={(e) =>
              setSignupDetails({ ...signupDetails, password: e.target.value })
            }
          />
        </div>

        <div className="mb-8 flex flex-col">
          <label className="font-thin" htmlFor="password">
            Confirm your password:
          </label>
          <input
            className="h-8 w-[300px] rounded-md bg-gray-200 pl-2 lg:w-[450px]"
            type="password"
            name="password"
            placeholder="Confirm your password"
            value={signupDetails.passwordConfirm}
            onChange={(e) =>
              setSignupDetails({
                ...signupDetails,
                passwordConfirm: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-8 text-center">
          Already have an account?{" "}
          <span
            className="cursor-pointer text-blue-400 hover:underline"
            onClick={() => setIsLogin(true)}
          >
            Sign in!
          </span>
        </div>
        <Button
          style="text-white text-lg mx-auto"
          onClick={() => signupMutation.mutate(signupDetails)}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Auth;
