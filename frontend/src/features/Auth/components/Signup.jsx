import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userSelector, createUserAsync, errorSelector, loaderSelector } from "../AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../app/store";
import { toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const [showPassword, setShowPassword] = useState(false);
  const [isActive, setActive] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logedInUser = useSelector(userSelector);
  const stateError = useSelector(errorSelector);
  const isLoading = useSelector(loaderSelector)

  const handleFormData = async (data) => {
    try {
      const result = dispatch(
        createUserAsync({
          email: data.email,
          password: data.password,
          addreses: [],
          role: "user",
        })
      );

      // toast.promise(
      //      result,
      //         {
      //             pending: 'Loading..',
      //             success: ' User Created Successfully👌',
      //             error: 'Unable to create user 🤯'
      //           }
      //        )

      // Handle successful signup here if needed
      console.log("User created:", result);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  const PasswordToggel = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    console.log("[Lifecycle] Signup component mounted");

    // Add state change monitoring
    const unsubscribe = store.subscribe(() => {
      console.log("[Redux State] Auth state changed:", store.getState().Auth);
    });

    return () => {
      console.log("[Lifecycle] Signup component unmounting...");
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (stateError) {
      toast.error(`${stateError}`);
    }

    if (logedInUser) {
      toast.success(" User Created Successfully👌");
      navigate("/");
    }
  }, [navigate, logedInUser, stateError]);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      {/* {logedInUser[} */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="/ecommerce.png"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          noValidate
          onSubmit={handleSubmit(handleFormData)}
          className="space-y-6"
        >
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
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                      message: (
                        <>
                          <div>- at least 8 characters</div>
                          <div>
                            - must contain at least 1 uppercase letter, 1
                            lowercase letter, and 1 number
                          </div>
                          <div>- Can contain special characters</div>
                        </>
                      ),
                    },
                  })}
                  onKeyDown={() => setActive(true)}
                  type={`${showPassword ? "text" : "password"}`}
                  className="w-full outline-none"
                />
                {isActive && (
                  <button type="button" onClick={PasswordToggel} className="">
                    {showPassword ? <IoMdEye /> : <IoEyeOff />}
                  </button>
                )}
              </div>
              {errors?.password && (
                <span className="text-sm text-red-700">
                  {errors?.password?.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=" Confirm-Password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm Password
              </label>
            </div>

            <div className="mt-2">
              <input
                id="Confirm-Password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value, formValues) =>
                    value === formValues.password || "password not matching", // validate accept callback & it get all form values so we can compare it here if password not match it shows msg
                })}
                type="password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors?.confirmPassword && (
                <span className="text-sm text-red-700">
                  {errors?.confirmPassword?.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             {isLoading ? (
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 me-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Loading...
                  </div>
                ) : (
                  "Sign up"
                )}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <Link
            to={"/login"}
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Already have an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
