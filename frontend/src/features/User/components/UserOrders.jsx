import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../../Auth/AuthSlice'
import { FetchUsersOrdersById } from '../User_Api'
import { FetchUserOrdersByIdAsync, userOrdersSelector } from '../UserSlice'
import { discountedPrice } from '../../../app/Constants'

const UserOrders = () => {
    const dispatch = useDispatch()
    const loggedInuser = useSelector(userSelector)
    const orders = useSelector(userOrdersSelector)
    console.log('orders', orders)
    console.log('logedInUser',loggedInuser)
    useEffect(() => {

        dispatch(FetchUserOrdersByIdAsync())

    }, [dispatch])

    return (
        <div className='pt-10'>
            <div className='w-[70%] mx-auto  '>
                <span className='font-bold text-2xl' >My Orders</span>
                {/* {products.length === 0 && <Navigate to={'/'} />} */}
                <div className='flex flex-col gap-6 w-full'>
                    {
                       orders && orders?.map((item) => (
                            <div key={item?.id} className="flex h-full  flex-col bg-white shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-lg font-semibold  text-gray-900">Order #{item?.id}</h3>
                                        <span className=' font-semibold text-red-500'>Order Status:{item?.status}</span>
                                    </div>


                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {/* map it  */}
                                                <li key={item?.id} className="flex py-6">
                                                    {/* inside products use map coz its an array */}
                                                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img alt={'img not found'} src={item?.products?.[0].product?.images?.[0]} className="size-full object-cover" />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <div className='flex flex-col '>
                                                                    <a className='text-gray-900' href={item?.href}>{item?.products[0].title}</a>
                                                                    <span className='text-gray-500'>{item?.products[0].brand}</span>
                                                                </div>
                                                                {/* <p className="ml-4">${item?.products[0].product.price}</p> */}
                                                                <p className="ml-4">${discountedPrice(item?.products[0].product)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <div className="">
                                                                <span className=' font-semibold text-gray-900'>Qty:{item?.products[0].quantity}</span>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Subtotal</p>
                                        <p>${item.subTotal || 0}</p>
                                    </div>

                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <p>Total items in cart</p>
                                        <p>{item.totalItems || 0} items</p>
                                    </div>
                                    {/* shipping Address  */}
                                    <div className='mt-4'>
                                        <span className='text-base'>Shipping Address</span>
                                        <div>
                                            <div className="flex min-w-0 gap-x-4 border border-gray-500 rounded p-3">

                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm/6 font-semibold text-gray-900">{item?.selectedAddress[0]?.name}</p>
                                                    <p className="text-sm/6 text-gray-900">
                                                    {item?.selectedAddress[0]?.street}
                                                    </p>
                                                    <p className="text-xs/5 text-gray-500">
                                                    {item?.selectedAddress[0]?.pinCode}
                                                    </p>
                                                </div>
                                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">

                                                    <p className="text-xs/5 text-gray-500">
                                                        {item?.selectedAddress[0]?.phone || 'N/A'}
                                                    </p>
                                                    <p className="mt-1 text-xs/5 text-gray-500">
                                                        {item?.selectedAddress[0]?.city || 'N/A'}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div >
    )
}

export default UserOrders
