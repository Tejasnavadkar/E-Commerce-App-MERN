import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchUserInfoByIdAsync, updateUserAsync, userInfoSelector } from '../UserSlice'
import { userSelector } from '../../Auth/AuthSlice'
import { useForm } from 'react-hook-form'

const UserProfile = () => {

    const [selectedIndexedForm, setSelectedIndexedForm] = useState(-1)
    const [addAddressForm, setAddAddressForm] = useState(false)

    const dispatch = useDispatch()
    const loggedInUser = useSelector(userSelector)
    const userInfo = useSelector(userInfoSelector)
    console.log('userInfo', userInfo)
    console.log('loggedInUser', loggedInUser)

    const { handleSubmit, register, reset, setValue, formState: { errors } } = useForm()

    // to open form for edit with existing values
    const HandleEdit = (idx, item) => {  // this fn open form with existing value to edit the form

        setSelectedIndexedForm(idx)
        // setValue hook-form feature that allows to set input value
        setValue('name', item.name)
        setValue('email', item.email)
        setValue('phone', item.phone)
        setValue('street', item.street)
        setValue('city', item.city)
        setValue('state', item.state)
        setValue('pinCode', item.pinCode)
        // const newAddress = [...(userInfo.addreses || [])]
        // newAddress[idx] = data
        // const newUser = {...userInfo,userInfo,addreses:newAddress}
        // console.log('id',idx)
        // dispatch(updateUserAsync(newUser))

    }

    // to remove address
    const HandleRemove = (idx) => {
        const newUser = { ...userInfo, addreses: [...userInfo.addreses] }
        newUser.addreses.splice(idx, 1)
        dispatch(updateUserAsync(newUser))

    }

    // to edit the address
    const SubmitEditedAddress = (data) => {
        const newUser = { ...userInfo, addreses: [...userInfo.addreses] }
        newUser.addreses.splice(selectedIndexedForm, 1, data) // remove previous one[1-index] & add new one
        dispatch(updateUserAsync(newUser))
    }

    // add new address to profile
    const AddNewAddress = (data) =>{
        const newUser = { ...userInfo, addreses: [...userInfo.addreses,data] }
        dispatch(updateUserAsync(newUser))
        setAddAddressForm(false)
    }

    useEffect(() => {
        dispatch(FetchUserInfoByIdAsync(loggedInUser.data.id))
    }, [dispatch, loggedInUser])
    return (
        <div>
            <div>
                <div className="mx-auto mt-12 bg-white max-w-7x1 px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <h1 className="text-4xl my-5 font-bold tracking-tight Otext-gray-900">
                            | Name: {userInfo?.name ? userInfo.name : 'New User'}
                        </h1>
                        <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
                            email: {userInfo?.email}
                        </h3>
                        {userInfo?.role === 'admin' && (
                            <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
                            role: {userInfo.role ? userInfo.role : null}
                        </h3>
                        )}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6 space-y-4 ">

                        <div>
                            <div>
                               {!addAddressForm && <button
                                    onClick={() =>{
                                        reset()
                                        setAddAddressForm(true)
                                        setSelectedIndexedForm(-1) // second form should not open
                                    }}
                                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add New Address
                                </button>}
                            </div>
                            <div>
                                {/* form */}
                                { addAddressForm && <form onSubmit={handleSubmit(AddNewAddress)} >
                                            <div className="border-b border-gray-900/10 pb-12">
                                                <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                                                <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                                            Full Name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="Full-Name"
                                                                {...register('name', { required: 'name is required' })}
                                                                type="text"
                                                                autoComplete="given-name"
                                                                className={`block w-full rounded-md ${errors.name ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.name && <span className='text-xs text-red-600'>{errors.name.message}</span>}
                                                        </div>
                                                    </div>


                                                    <div className="sm:col-span-4">
                                                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                                            Email address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="email"
                                                                {...register('email', { required: 'email is required' })}
                                                                type="email"
                                                                autoComplete="email"
                                                                className={`block w-full rounded-md ${errors.email ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.email && <span className='text-xs text-red-600'>{errors.email.message}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                                            Phone
                                                        </label>
                                                        <div className="mt-2 grid grid-cols-1">
                                                            <input
                                                                id="phone"
                                                                {...register('phone', { required: 'phone is required' })}
                                                                type="tel"
                                                                className={`block w-full rounded-md ${errors.street ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />

                                                        </div>
                                                        {errors.phone && <span className='text-xs text-red-600'>{errors.phone.message}</span>}
                                                    </div>

                                                    <div className="col-span-full">
                                                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                                            Street address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="street-address"
                                                                {...register('street', { required: 'street is required' })}
                                                                type="text"
                                                                autoComplete="street-address"
                                                                className={`block w-full rounded-md ${errors.street ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.street && <span className='text-xs text-red-600'>{errors.street.message}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2 sm:col-start-1">
                                                        <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                                            City
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="city"
                                                                {...register('city', { required: 'city is required' })}
                                                                type="text"
                                                                autoComplete="address-level2"
                                                                className={`block w-full rounded-md ${errors.city ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.city && <span className='text-xs text-red-600'>{errors.city.message}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                                            State / Province
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="region"
                                                                {...register('state', { required: 'state is required' })}
                                                                type="text"
                                                                autoComplete="address-level1"
                                                                className={`block w-full rounded-md ${errors.state ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.state && <span className='text-xs text-red-600'>{errors.state.message}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                                            ZIP / Postal code
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                {...register('pinCode', { required: 'PinCode is required' })}
                                                                type="text"
                                                                className={`block w-full rounded-md ${errors.pinCode ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.pinCode && <span className='text-xs text-red-600'>{errors.pinCode.message}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Buttons  */}
                                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                                <button onClick={() =>{setAddAddressForm(false)}} type="button" className="text-sm/6 font-semibold text-gray-900">
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Add address
                                                </button>
                                            </div>
                                        </form>}
                            </div>
                        </div>

                        <div>
                            <p className="mt-0.5 text-sm text-gray-500">Your Addresses :</p>
                            {
                                userInfo?.addreses.map((item, idx) => (
                                    <div key={idx} className='mt-4 space-y-4'>
                                        {selectedIndexedForm === idx && <form onSubmit={handleSubmit(SubmitEditedAddress)} >
                                            <div className="border-b border-gray-900/10 pb-12">
                                                <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                                                <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                                            Full Name
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="Full-Name"
                                                                {...register('name', { required: 'name is required' })}
                                                                type="text"
                                                                autoComplete="given-name"
                                                                className={`block w-full rounded-md ${errors.name ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.name && <span className='text-xs text-red-600'>{errors.name.message}</span>}
                                                        </div>
                                                    </div>


                                                    <div className="sm:col-span-4">
                                                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                                            Email address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="email"
                                                                {...register('email', { required: 'email is required' })}
                                                                type="email"
                                                                autoComplete="email"
                                                                className={`block w-full rounded-md ${errors.email ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.email && <span className='text-xs text-red-600'>{errors.email.message}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-3">
                                                        <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                                            Phone
                                                        </label>
                                                        <div className="mt-2 grid grid-cols-1">
                                                            <input
                                                                id="phone"
                                                                {...register('phone', { required: 'phone is required' })}
                                                                type="tel"
                                                                className={`block w-full rounded-md ${errors.street ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />

                                                        </div>
                                                        {errors.phone && <span className='text-xs text-red-600'>{errors.phone.message}</span>}
                                                    </div>

                                                    <div className="col-span-full">
                                                        <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                                                            Street address
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="street-address"
                                                                {...register('street', { required: 'street is required' })}
                                                                type="text"
                                                                autoComplete="street-address"
                                                                className={`block w-full rounded-md ${errors.street ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.street && <span className='text-xs text-red-600'>{errors.street.message}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2 sm:col-start-1">
                                                        <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                                            City
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="city"
                                                                {...register('city', { required: 'city is required' })}
                                                                type="text"
                                                                autoComplete="address-level2"
                                                                className={`block w-full rounded-md ${errors.city ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.city && <span className='text-xs text-red-600'>{errors.city.message}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                                                            State / Province
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                id="region"
                                                                {...register('state', { required: 'state is required' })}
                                                                type="text"
                                                                autoComplete="address-level1"
                                                                className={`block w-full rounded-md ${errors.state ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.state && <span className='text-xs text-red-600'>{errors.state.message}</span>}
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                                                            ZIP / Postal code
                                                        </label>
                                                        <div className="mt-2">
                                                            <input
                                                                {...register('pinCode', { required: 'PinCode is required' })}
                                                                type="text"
                                                                className={`block w-full rounded-md ${errors.pinCode ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                                            />
                                                            {errors.pinCode && <span className='text-xs text-red-600'>{errors.pinCode.message}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Buttons  */}
                                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                                <button onClick={() => setSelectedIndexedForm(-1)} type="button" className="text-sm/6 font-semibold text-gray-900">
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    Edit address
                                                </button>
                                            </div>
                                        </form>}
                                        <div>
                                            <div className="flex min-w-0 gap-x-4 border border-gray-500 rounded p-3">

                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm/6 font-semibold text-gray-900">{item?.name}</p>
                                                    <p className="text-sm/6 text-gray-900">
                                                        {item?.street}
                                                    </p>
                                                    <p className="text-xs/5 text-gray-500">
                                                        {item?.pinCode}
                                                    </p>
                                                </div>
                                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">

                                                    <p className="text-xs/5 text-gray-500">
                                                        {item?.phone || 'N/A'}
                                                    </p>
                                                    <p className="mt-1 text-xs/5 text-gray-500">
                                                        {item?.city || 'N/A'}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col ">
                                                    <button onClick={() => HandleEdit(idx, item)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Edit
                                                    </button>

                                                    <button onClick={() => HandleRemove(idx)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        remove
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserProfile
