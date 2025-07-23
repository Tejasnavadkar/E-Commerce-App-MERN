import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Cart from '../features/Cart/components/Cart'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {  userSelector,updateUserAsync } from '../features/Auth/AuthSlice'
import { userInfoSelector } from '../features/User/UserSlice'
import { cartSelector, deleteCartItemAsync, resetCartAsync, updateCartQuantityAsync } from '../features/Cart/CartSlice'
import { createOrderAsync, selectCurrentOrder } from '../features/Orders/Orders_Slice'
import { discountedPrice } from '../app/Constants'
import { toast } from 'react-toastify'

// const addreses = [
//     {
//         name: 'Leslie Alexander',
//         email: 'leslie.alexander@example.com',
//         imageUrl:
//             'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         street: 'main street',
//         city: 'pune',
//         pincode: '100124',
//         phone: '69534562'
//     },
//     {
//         name: 'Michael Foster',
//         email: 'michael.foster@example.com',
//         imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         street: 'fear street',
//         city: 'pune',
//         pincode: '100124',
//         phone: '69534561232'
//     },

// ]


const CheckOutPage = () => {

    const [selectedAddress, setAddress] = useState(null)
    const [selectedPaymentMethod, setPaymentMethod] = useState("cash")
    const dispatch = useDispatch()
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const loggedInUser = useSelector(userSelector)
    const navigate = useNavigate()
    const products = useSelector(cartSelector)
    const currentOrder = useSelector(selectCurrentOrder)
    const user = loggedInUser
    const userInfo = useSelector(userInfoSelector)

    // console.log('loggedInuser',loggedInUser)
    // console.log('cartItem', products)
    console.log('user', loggedInUser)
    // console.log('selectedAddress', selectedAddress)
    // console.log('selectedPayment', selectedPaymentMethod)


    const subTotal = Math.round(products.reduce((acc, item) => discountedPrice(item.product) * item.quantity + acc, 0))
    const totalItems = products.reduce((acc, item) => parseInt(item.quantity) + acc, 0)

    const handleAddress = (index) => {  // we cant pass directly pass object from radio input
        console.log('addd----',loggedInUser.addresses[index])
        setAddress(loggedInUser.addresses[index])
    }

    const handlePaymentMethod = (method) => {  // we cant pass directly pass object from radio input
        setPaymentMethod(method)
    }

    const handleFormSubmit = (data) => {
        const userData = { ...loggedInUser, addresses: [...(loggedInUser.addresses || []), data] } //loggedInUser.addreses might be undefined when trying to spread it in the handleFormSubmit function so add a check
        console.log('userData', userData)
       const addAddress = dispatch(updateUserAsync(userData)).unwrap()  // dispatch action //here we basically update the current loggedin user with this additional info like address city etc
       reset()

       toast.promise(
        addAddress,
        {
            pending: 'Loading..',
            success: ' Add address successfully👌',
            error: 'Unable to add address 🤯'
          }
       )
    }

    const handleQuantity = (e, item) => {
        // console.log('item--',item)
        // delete item.id
        const newItem = { ...item, quantity: e.target.value }  // here we pass copy of updated item

       const updateCartQuantity = dispatch(updateCartQuantityAsync(newItem))

       toast.promise(
        updateCartQuantity,
        {
            pending: 'Loading..',
            success: ' Quantity updated👌',
            error: 'Unable to update quantity 🤯'
          }
       )

    }

    const RemoveCartItem = (itemId) => {
       const removedCartItem = dispatch(deleteCartItemAsync(itemId)).unwrap()
        toast.promise(
                    removedCartItem,
                     {
                       pending: 'Removing..',
                       success: 'Item removed from cart👌',
                       error: 'unable to remove item 🤯'
                     }
                   )
    }

    const HandleOrder = async () => {
       console.log({
        selectedAddress,
        selectedPaymentMethod
       })
        if (selectedAddress && selectedPaymentMethod) {

            try {
                const order = { user:user.id, products, subTotal, totalItems, selectedAddress, selectedPaymentMethod, status: 'pending' }  // we changed status after placed
            
           await dispatch(createOrderAsync(order)).unwrap()
           toast.success('order created successfully')
            dispatch(resetCartAsync())
            } catch (error) {
                console.log('error in order--',error)
                toast.error(error || 'cant place order..')
            }
            
        //    toast.promise(
        //     createOrder,
        //     {
        //         pending:'creating order..',
        //         success:'order created successfully',
        //         error:'unable to create order'
        //     }
        //    )
           

        } else {
            // alert('select address and payment method')
            toast.error('select address and payment method')
        }
        //todo when order created succefully navigate to success page
        // todo: also cleare all carts after order in db and redux state also
        //todo: on server change stock number of items

    }





    return (
        <div className='grid grid-cols-5 space-x-2.5 mx-auto w-[90%] sm:max-w-7xl'>
            <div className='col-span-5 md:col-span-3 bg-white mt-10 px-4 py-4'>
                <div>
                    {/* form to add address */}
                    <form onSubmit={handleSubmit(handleFormSubmit)} >
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
                                            className={`block w-full rounded-md ${errors.street  ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                        />
                                        {/* <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        /> */}
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
                                            className={`block w-full rounded-md ${errors.street  ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
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
                                            className={`block w-full rounded-md ${errors.city  ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
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
                                            className={`block w-full rounded-md ${errors.state  ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
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
                                            className={`block w-full rounded-md ${errors.pinCode  ? 'border border-red-600' : 'border'} bg-white px-3 py-1.5 text-base text-gray-900  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                                        />
                                        {errors.pinCode && <span className='text-xs text-red-600'>{errors.pinCode.message}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Buttons  */}
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add address
                            </button>
                        </div>
                    </form>
                     
                     {/* select address and select payment mode  */}
                    <div className="border-b border-gray-900/10 pb-12">
                        <div>
                            <h2 className="text-base/7 font-semibold text-gray-900">Address</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                Choose from existing address.
                            </p>
                            <div>
                                <ul role="list" className="divide-y divide-gray-100">
                                    {loggedInUser?.addresses?.map((address, idx) => (
                                        <li key={idx} className="flex justify-between gap-x-6 py-5">

                                            <div className="flex min-w-0 gap-x-4">
                                                <input type="radio" name="address" onChange={() => handleAddress(idx)} id="" />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm/6 font-semibold text-gray-900">{address.name}</p>
                                                    <p className="text-sm/6 text-gray-900">
                                                        {address.street}
                                                    </p>
                                                    <p className="text-xs/5 text-gray-500">
                                                        {address.pincode}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">

                                                <p className="text-xs/5 text-gray-500">
                                                    Phone:{address.phone}
                                                </p>
                                                <p className="mt-1 text-xs/5 text-gray-500">
                                                    {address.city}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 space-y-10">

                            <fieldset>
                                <legend className="text-sm/6 font-semibold text-gray-900">Payment Methods</legend>
                                <p className="mt-1 text-sm/6 text-gray-600">Choose Mode</p>
                                <div className="mt-6 space-y-6">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="cash"
                                            name="Payment-Method"
                                            type="radio"
                                            checked={selectedPaymentMethod === 'cash'}
                                            onChange={() => handlePaymentMethod('cash')}
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                        />
                                        <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                                            Cash
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="card"
                                            name="Payment-Method"
                                            type="radio"
                                            checked={selectedPaymentMethod === 'card'}
                                            onChange={() => handlePaymentMethod('card')}
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                                        />
                                        <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                                            Card Payment
                                        </label>
                                    </div>

                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-5 md:col-span-2'>
                {/* Cart  */} 

                {/* <div className='pt-10'>
                    <div className="flex h-full mx-auto  flex-col bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <h3 className="text-lg font-medium text-gray-900">Shopping cart</h3>
                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {products.map((product) => (
                                            <li key={product.id} className="flex py-6">
                                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href={product.href}>{product.name}</a>
                                                            </h3>
                                                            <p className="ml-4">{product.price}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <div className="text-gray-500 flex gap-2">
                                                            <span>Qty</span>
                                                            <select name="" id="" className='px-2'>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </div>

                                                        <div className="flex">
                                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>$262.00</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                                <Link to={'/pay'}
                                    href="#"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                                >
                                    Pay and order
                                </Link>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    or{' '}
                                    <button
                                        type="button"
                                        onClick={() => { navigate('/') }}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <Cart OrderButton={true} selectedAddress={selectedAddress} selectedPaymentMethod={selectedPaymentMethod} /> */}

                <div className='pt-10'>
                    {products.length === 0 && <Navigate to={'/'} replace={true} />}
                    {currentOrder && <Navigate to={`/order-success/${currentOrder.id}`} replace={true} />}
                    <div className="flex h-full w-[70%] mx-auto  flex-col bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <h3 className="text-lg font-medium text-gray-900">Shopping cart</h3>
                            </div>

                            <div className="mt-8">
                                <div className="flow-root">
                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                        {products?.map((item) => (
                                            <li key={item?.id} className="flex py-6">
                                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img alt={`img not found`} src={item?.product.images[0]} className="size-full object-cover" />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a href={item?.href}>{item?.title}</a>
                                                            </h3>
                                                            <p className="ml-4">${discountedPrice(item.product)}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{item?.color}</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <div className="text-gray-500 flex gap-2">
                                                            <span>Qty</span>
                                                            <select name="" id="" onChange={(e) => handleQuantity(e, item)} value={item?.quantity} className='px-2'>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                            </select>
                                                        </div>

                                                        <div className="flex">
                                                            <button onClick={() => RemoveCartItem(item.id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Subtotal</p>
                                <p>${subTotal || 0}</p>
                            </div>

                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Total items in cart</p>
                                <p>{totalItems || 0} items</p>
                            </div>

                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                            <div className="mt-6">
                                <button  // in checkout page show order button otherwise show Checkout button
                                    onClick={HandleOrder}
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                                >
                                    Order
                                </button>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    or{' '}
                                    <button
                                        type="button"
                                        onClick={() => { navigate('/') }}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default CheckOutPage
