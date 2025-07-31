import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { errorSelector, ResetPasswordAsync, resetPasswordSelector } from '../AuthSlice';
import { toast } from 'react-toastify';

const ResetPassword = () => {

    
         const { register, handleSubmit, formState: { errors }, getValues } = useForm({});
         const dispatch = useDispatch()
         const isPasswordReset = useSelector(resetPasswordSelector)
         const error = useSelector(errorSelector)
          const urlParams = new URLSearchParams(window.location.search);
          const token = urlParams.get('token')
          const email = urlParams.get('email')
          console.log({token,email})

           const handleFormData = async (data) =>{
            //  setError(null)
            // if(data.password !== data.confirmPassword){
            //     return setError({msg:'password not matched'})
            // }
            console.log(data)
            // forgot password api call (dispatch action)

            const result = dispatch(ResetPasswordAsync({password:data.password,token:token,email:email})).unwrap()
             toast.promise(
                            result,
                            {
                                pending: 'Loading..',
                                success: 'password reset successfully👌',
                                error: 'Unable to reset password🤯'
                              }
                           )

         
          }

  return (
    email && token ? (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/ecommerce.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Enter New password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(handleFormData)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                password
              </label>
              <div className="mt-2">
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
                  type={`password`}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors?.password && <span className='text-sm text-red-700'>{errors?.password?.message}</span>}
               
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  {...register('confirmPassword', { 
                    required: "confirmPassword is required",
                    validate: value => value === getValues('password') || "Passwords do not match"
                  })}
                  type="password"
                  required
                  //   autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.confirmPassword && <span className='text-sm text-red-700'>{errors.confirmPassword.message}</span>}
                 {isPasswordReset && <span className='text-sm text-green-700'>password reset successfully</span>}
                {error && <span className='text-sm text-red-700'>{error}</span>}
              </div>
            </div>


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset Password
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{' '}
            <Link to={'/signup'} className="font-semibold text-indigo-600 hover:text-indigo-500">
              go back to SignUp
            </Link>
          </p>
        </div>
      </div>
    ) : <p className='text-2xl font-semibold'>Link is expired</p>
  )
}

export default ResetPassword
