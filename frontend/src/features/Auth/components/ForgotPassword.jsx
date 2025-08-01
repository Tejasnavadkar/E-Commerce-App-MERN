import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ForgotPasswordAsync, mailCheckSelector } from '../AuthSlice';
import { toast } from 'react-toastify';

const ForgotPassword = () => {

     const { register, handleSubmit,formState: { errors } } = useForm({});
     const isMailSent = useSelector(mailCheckSelector)
     const dispatch = useDispatch()

     const handleFormData = async (data) =>{
      
        console.log('email',data)
        // forgot password api call (dispatch action)
        
        const result = dispatch(ForgotPasswordAsync(data.email)).unwrap()
        // console.log({isMailSent,result})
          toast.promise(
                result,
                {
                    pending: 'Loading..',
                    success: ' verification mail sent👌',
                    error: 'Unable to send verification mail🤯'
                  }
               )


     }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        alt="Your Company"
        src="/ecommerce.png"
        className="mx-auto h-10 w-auto"
      />
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Enter Email
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit(handleFormData)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              {...register('email', { required: "email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'email is not valid' } })}
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            {errors?.email && <span className='text-sm text-red-700'>{errors?.email?.message}</span>}
            {isMailSent && <span className='text-sm text-green-700'>mail sent</span>}
          </div>
        </div>


        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?{' '}
        <Link to={'/signup'} className="font-semibold text-indigo-600 hover:text-indigo-500">
          go back to login
        </Link>
      </p>
    </div>
  </div>
  )
}

export default ForgotPassword
