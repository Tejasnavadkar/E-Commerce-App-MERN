import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchAllOrdersAsync } from '../../Product-List/ProductSlice'
import { discountedPrice, PAGE_PER_LIMIT } from '../../../app/Constants'
import { fetchAllOrdersAsync, ordersPagesSelector, ordersSelectorForAdmin, totalOrdersCountSelector, updateOrderAsync } from '../../Orders/Orders_Slice'
import { EyeIcon, PencilIcon} from '@heroicons/react/24/solid'
import Pagination from '../../Common/Pagination'
import { ArrowDownCircleIcon, ArrowUpCircleIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

const AdminOrders = () => {

    const [activePage, setActivePage] = useState(1)
    const [editableOrderId,setEditableOrderId] = useState(-1)
    const dispatch = useDispatch()
    const orders = useSelector(ordersSelectorForAdmin)
    const totalOrders = useSelector(totalOrdersCountSelector)
    const orderPages = useSelector(ordersPagesSelector)
    const [sort,setSort] = useState({})

    // console.log('orders--', orders)
    // console.log('totalOrders--', totalOrders)
    console.log('editableOrderId--', editableOrderId)

    useEffect(() => {
        const pagination = {
            _page: activePage,
            _per_page: PAGE_PER_LIMIT
        }
        dispatch(fetchAllOrdersAsync({pagination,sort}))
    }, [dispatch, activePage,sort])

    const handleEdit = (order) =>{
        console.log('edit')
        setEditableOrderId(order.id)

    }

    const handleChange = (e,order) =>{
        console.log(e.target.value)

        const updatedOrder = {...order,status:e.target.value}
    
        dispatch(updateOrderAsync(updatedOrder))  // dispatch a action to update order status
        setEditableOrderId(-1)
    }

    const handleShow = () =>{
        console.log('show')

    }

    const chooseColor = (status) =>{  // pick color according to the status
        switch (status) {
            case 'pending':
            return "bg-purple-200 text-purple-600"   

            case 'dispatched':
            return "bg-yellow-200 text-yellow-600" 

            case 'delievered':
            return "bg-green-200 text-green-600" 

            case 'cancelled':
            return "bg-red-200 text-red-600" 
                
            default:
            return "bg-purple-200 text-purple-600" 
        }
    }

    const handlePagination = (Page) =>{
        setActivePage(Page)
    }

    const handleSort = (payload) =>{

     const newsort = {_sort:payload.orderId,_order:payload.order}
     setSort(newsort)

     console.log('sort',newsort)

    }

    return (
        <div className="overflow-x-auto">
            <div className="min-w-screen  flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                <div className="w-full lg:w-5/6">
                    <div className="bg-white shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th onClick={()=>handleSort({orderId:'id',order: sort._order === 'desc' ? 'asc' : 'desc'})} className="py-3 px-6 text-left flex gap-2 cursor-pointer">
                                       <span> Order #</span>
                                      { sort._order == 'desc' ? <ArrowUpCircleIcon className='h-6 w-6'/> : <ArrowDownCircleIcon className='h-6 w-6'/>}
                                        
                                    </th>
                                    <th className="py-3 px-6 text-left">items</th>
                                    <th onClick={()=>handleSort({orderId:'subTotal',order: sort._order === 'desc' ? 'asc' : 'desc'})}  className="py-3 px-6 flex gap-2 text-center cursor-pointer">
                                        <span>Total Amount</span>
                                        { sort._order == 'desc' ? <ArrowUpCircleIcon className='h-6 w-6'/> : <ArrowDownCircleIcon className='h-6 w-6'/>}
                                    </th>
                                    <th className="py-3 px-6 text-center">Shipping Address</th>
                                    <th className="py-3 px-6 text-center">Status</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">

                                {orders?.map((order) => (
                                    <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            <div className="flex items-center">

                                                <span className="font-medium">{order.id}</span>
                                            </div>
                                        </td>

                                        <td className="py-3 px-6 text-left">
                                            {order.products.map((item) => (
                                                <div className="flex items-center">
                                                    <div className="mr-2">
                                                        <img
                                                            className="w-6 h-6 rounded-full"
                                                            src={`${item.thumbnail}`}
                                                        />
                                                    </div>
                                                    <span className='text-xs'>{item.title}-{item.quantity}-${discountedPrice(item)}</span>
                                                </div>
                                            ))}
                                        </td>

                                        <td className="py-3 px-6 text-center">
                                            ${order.subTotal}
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div>{order.selectedAddress.name}</div>
                                            <div>{order.selectedAddress.street}</div>
                                            <div>{order.selectedAddress.city}</div>
                                            <div>{order.selectedAddress.state}</div>
                                        </td>

                                        <td className="py-3 px-6 text-center">
                                            {
                                                order.id == editableOrderId ? (<span className=" py-1 px-3 rounded-full border">
                                                    <select onChange={(e)=>handleChange(e,order)} >
                                                      <option value="pending">Pending</option>
                                                      <option value="dispached">Dispatched</option>
                                                      <option value="delievered">Delievered</option>
                                                      <option value="cancelled">Cancelled</option>
                                                    </select>
                                                  </span>)  : (<span className={`${chooseColor(order.status)} py-1 px-3 rounded-full text-xs`}> {/* set color according o the status */}
                                                    {order.status}
                                                </span>) 
                                            } 
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex justify-center gap-2">
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <button onClick={()=>handleShow()} className="flex item-center justify-center cursor-pointer">
                                                        <EyeIcon className='w-6 h-6' />
                                                    </button>
                                                </div>
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <button onClick={()=>handleEdit(order)} className="flex item-center justify-center cursor-pointer">
                                                        <PencilIcon className='w-5 h-5' />
                                                    </button>
                                                </div>
                                               
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        {/* pagination */}
                        <Pagination activePage={activePage} setActivePage={setActivePage} handlePagination={handlePagination} limit={5} totalProducts={totalOrders} pages={orderPages}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminOrders
