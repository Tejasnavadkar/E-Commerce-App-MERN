import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { cartSelector, deleteCartItemAsync, updateCartQuantityAsync } from '../CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { discountedPrice } from '../../../app/Constants'
import { toast } from 'react-toastify'

// const products = [
//     {
//         id: 1,
//         name: 'Throwback Hip Bag',
//         href: '#',
//         color: 'Salmon',
//         price: '$90.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//         imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//     },
//     {
//         id: 2,
//         name: 'Medium Stuff Satchel',
//         href: '#',
//         color: 'Blue',
//         price: '$32.00',
//         quantity: 1,
//         imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//         imageAlt:
//             'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//     },

//     // More products...
// ]

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector(cartSelector)
    console.log('cartItem', products)
    
    const subTotal = Math.round(products?.reduce((acc, item) => discountedPrice(item) * item?.quantity + acc, 0))
    const totalItems = products.reduce((acc, item) => parseInt(item?.quantity) + acc, 0)


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
       const removedCartItem = dispatch(deleteCartItemAsync(itemId))
         toast.promise(
            removedCartItem,
             {
               pending: 'Removing..',
               success: 'Item removed from cart👌',
               error: 'unable to remove item 🤯'
             }
           )
    }

    // const HandleOrder = () => {
        
    //     if(selectedAddress && selectedPaymentMethod){
    //         const order = {user,products,subTotal,totalItems,selectedAddress,selectedPaymentMethod,status:'pending'}  // we changed status after placed
    //         dispatch(createOrderAsync(order))

    //     }else{
    //         alert('select address and payment method')
    //     }
    //     //todo when order created succefully navigate to success page
    //     // todo: also cleare all carts after order in db and redux state also
    //     //todo: on server change stock number of items

    // }


    return (
        <div className='pt-10'>
            {products.length === 0 && <Navigate to={'/'} />}
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
                                            <img alt={item?.imageAlt} src={item?.images?.[0]} className="size-full object-cover" />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href={item?.href}>{item?.title}</a>
                                                    </h3>
                                                    <p className="ml-4">${discountedPrice(item)}</p>
                                                    
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
                                                    <button onClick={() => RemoveCartItem(item?.id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
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
                    <Link to = { '/checkout' }
                            className = "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                        >
                            Checkout
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
        </div >
    )
}

export default Cart
