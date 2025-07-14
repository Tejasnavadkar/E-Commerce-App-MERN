import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { userSelector, createUserAsync, errorSelector } from '../AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../app/store'
import { toast } from 'react-toastify'


const Signup = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({});
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logedInUser = useSelector(userSelector)
  const stateError = useSelector(errorSelector)

  const handleFormData = async (data) => {
    try {
      const result = dispatch(createUserAsync({
        email: data.email,
        password: data.password,
        addreses: [],
        role:'user'
      }))

      // toast.promise(
      //      result,
      //         {
      //             pending: 'Loading..',
      //             success: ' User Created Successfully👌',
      //             error: 'Unable to create user 🤯'
      //           }
      //        )

      // Handle successful signup here if needed
      console.log('User created:', result);

    } catch (error) {
      console.error('Failed to create user:', error);
    }
  }

  useEffect(() => {
    console.log('[Lifecycle] Signup component mounted');

    // Add state change monitoring
    const unsubscribe = store.subscribe(() => {
      console.log('[Redux State] Auth state changed:', store.getState().Auth);
    });

    return () => {
      console.log('[Lifecycle] Signup component unmounting...');
      unsubscribe();
    };
  }, []);

  useEffect(() => {
     if (stateError) {
        toast.error(`${stateError}`);
      }

    if (logedInUser) {
      toast.success(' User Created Successfully👌')
      navigate('/')
    }
  }, [navigate, logedInUser,stateError])

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
        <form noValidate onSubmit={handleSubmit(handleFormData)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                {...register('email', { required: "email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'email is not valid' } })}
                type="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors?.email && <span className='text-sm text-red-700'>{errors?.email?.message}</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <Link to={'/forgot-password'} className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                {...register('password', {
                  required: "password is required", pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                    message: (
                      <>
                        <div>- at least 8 characters</div>
                        <div>- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number</div>
                        <div>- Can contain special characters</div>
                      </>
                    )
                  }
                })}
                type="password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors?.password && <span className='text-sm text-red-700'>{errors?.password?.message}</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor=" Confirm-Password" className="block text-sm/6 font-medium text-gray-900">
                Confirm Password
              </label>
            </div>

            <div className="mt-2">
              <input
                id="Confirm-Password"
                {...register('confirmPassword', {
                  required: "Confirm Password is required",
                  validate: (value, formValues) => value === formValues.password || 'password not matching'  // validate accept callback & it get all form values so we can compare it here if password not match it shows msg
                })}
                type="password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {errors?.confirmPassword && <span className='text-sm text-red-700'>{errors?.confirmPassword?.message}</span>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{' '}
          <Link to={'/login'} className="font-semibold text-indigo-600 hover:text-indigo-500">
            Already have an account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
