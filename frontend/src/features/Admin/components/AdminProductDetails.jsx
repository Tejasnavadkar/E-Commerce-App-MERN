import React, { useEffect } from 'react'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ProductByIdSelector,fetchProductsById } from '../../Product-List/ProductSlice'
import { userSelector } from '../../Auth/AuthSlice'
import { addToCartAsync } from '../../Cart/CartSlice'
import { discountedPrice } from '../../../app/Constants'

const colors = [
  { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
  { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
  { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
]
const sizes = [
  { name: 'XXS', inStock: false },
  { name: 'XS', inStock: true },
  { name: 'S', inStock: true },
  { name: 'M', inStock: true },
  { name: 'L', inStock: true },
  { name: 'XL', inStock: true },
  { name: '2XL', inStock: true },
  { name: '3XL', inStock: true },
]

const details = 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'


const highlights = [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton'
    ]

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AdminProductDetails = () => {

    const [selectedColor, setSelectedColor] = useState(colors[0])
    const [selectedSize, setSelectedSize] = useState(sizes[2])
    const product = useSelector(ProductByIdSelector)
    const user = useSelector(userSelector)
    const {id} =  useParams()
    const dispatch = useDispatch()
    //  const state = useLocation()
     console.log('user',user)
     console.log('product',product)

    useEffect(()=>{
      dispatch(fetchProductsById({id}))
    },[dispatch,id])

    const handleCart = (e) =>{
      e.preventDefault()
      const newProduct = {...product,quantity:1,user:user?.data.id } // dispatch action
      delete newProduct['id']
      console.log('newProduct',newProduct)
      dispatch(addToCartAsync(newProduct))

    }

  console.log('id',id)
  
    return (
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {product?.breadcrumbs && product?.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                      {breadcrumb.name}
                    </a>
                    <svg
                      fill="currentColor"
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a href={product?.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                  {product?.title}
                </a>
              </li>
            </ol>
          </nav>
  
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            
          {product?.images?.map((img,idx)=>(
              <img
              key={idx}
              alt={img}
              src={img}
              className="hidden size-full rounded-lg object-cover lg:block"
            />
            ))}
          </div>
  
          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.title}</h1>
            </div>
  
            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight line text-gray-900">${discountedPrice(product)}</p>
  
              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'size-5 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
  
              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
  
                  <fieldset aria-label="Choose a color" className="mt-4">
                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                      {colors.map((color) => (
                        <Radio
                          key={color.name}
                          value={color}
                          aria-label={color.name}
                          className={classNames(
                            color.selectedClass,
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden data-checked:ring-2 data-focus:data-checked:ring-3 data-focus:data-checked:ring-offset-1',
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={classNames(color.class, 'size-8 rounded-full border border-black/10')}
                          />
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
  
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Size guide
                    </a>
                  </div>
  
                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>
  
                <button
                onClick={handleCart}
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Add to bag
                </button>
              </form>
            </div>
  
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>
                      
                <div className="space-y-6">
                  <p className="text-2xl font-bold text-gray-900">{product?.title}</p>
                </div>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product?.description}</p>
                </div>
              </div>
  
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
  
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
  
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>
  
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default AdminProductDetails
