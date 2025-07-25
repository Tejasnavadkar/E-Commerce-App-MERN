import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { errorSelector, loginUserAsync, userSelector } from "../AuthSlice";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({});

  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setActive] = useState(false);

  const user = useSelector(userSelector);
  const stateError = useSelector(errorSelector);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleFormData = async (data, e) => {
    e.preventDefault();
    console.log(data);
    try {
      dispatch(
        loginUserAsync({
          // this returns promise
          email: data.email,
          password: data.password,
        })
      );
      // Handle successful signup here if needed
      console.log("User checked:", user);
      // if(stateError !== null ) {
      //   return  toast.error(`${stateError}`)
      // }
      //  console.log('stateError-inside-handleFormData',stateError)
      // toast.success('Login Successfull..')
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  const PasswordToggel = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (stateError) {
      toast.error(`${stateError}`);
    }
    if (user) {
      toast.success("Login successful");
      navigate("/");
    }
  }, [user, stateError, navigate]);

  // if (stateError !== null) {
  //   toast.error(`${stateError}`);
  // }
  // if (user !== null) {
  //   toast.success("login successfull");
  // }

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [navigate, user]);

  return (
    <>
      {/* to navigate */}
      {/* {user && <Navigate to={'/'} replace={true} />}   */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/ecommerce.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(handleFormData)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "email is not valid",
                    },
                  })}
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors?.email && (
                  <span className="text-sm text-red-700">
                    {errors?.email?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to={"/forgot-password"}
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <input
                    id="password"
                    {...register("password", {
                      required: "password is required",
                    })}
                    onKeyDown={() => setActive(true)}
                    type={`${showPassword ? "text" : "password"}`}
                    required
                    autoComplete="current-password"
                    className="w-full outline-none"
                  />
                  {isActive && (
                    <button type="button" onClick={PasswordToggel} className="">
                      {showPassword ? <IoMdEye /> : <IoEyeOff />}
                    </button>
                  )}
                </div>
                {errors?.password && (
                  <span className="text-sm text-red-700 block">
                    {errors?.password?.message}
                  </span>
                )}
                {stateError && (
                  <span className="text-sm text-red-700">{stateError}</span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              to={"/signup"}
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Don't have an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
