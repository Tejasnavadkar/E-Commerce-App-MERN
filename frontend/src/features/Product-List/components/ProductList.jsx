
import React, { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid'

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
// const subCategories = [
//     { name: 'Totes', href: '#' },
//     { name: 'Backpacks', href: '#' },
//     { name: 'Travel Bags', href: '#' },
//     { name: 'Hip Bags', href: '#' },
//     { name: 'Laptop Sleeves', href: '#' },
// ]
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]
// const items = [
//     { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//     { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
//     { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
//   ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ') // The .filter(Boolean) part removes any falsy values (false, 0, null, undefined, "", NaN) It keeps only truthy values
}


const ProductList = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    // const products = [
    //     {
    //         id: 1,
    //         name: 'Basic Tee',
    //         href: '#',
    //         thumbnail: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Black',
    //     },
    //     {
    //         id: 2,
    //         name: 'Basic Tee',
    //         href: '#',
    //         thumbnail: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Black',
    //     },
    //     {
    //         id: 3,
    //         name: 'Basic Tee',
    //         href: '#',
    //         thumbnail: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Black',
    //     },
    //     // {
    //     //     id: 4,
    //     //     name: 'Basic Tee',
    //     //     href: '#',
    //     //     thumbnail: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //     //     imageAlt: "Front of men's Basic Tee in black.",
    //     //     price: '$35',
    //     //     color: 'Black',
    //     // },
    //     // {
    //     //     id: 5,
    //     //     name: 'Basic Tee',
    //     //     href: '#',
    //     //     thumbnail: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //     //     imageAlt: "Front of men's Basic Tee in black.",
    //     //     price: '$35',
    //     //     color: 'Black',
    //     // },
    //     // {
    //     //     id: 6,
    //     //     name: 'Basic Tee',
    //     //     href: '#',
    //     //     thumbnail: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //     //     imageAlt: "Front of men's Basic Tee in black.",
    //     //     price: '$35',
    //     //     color: 'Black',
    //     // },
    //     // {
    //     //     id: 7,
    //     //     name: 'Basic Tee',
    //     //     href: '#',
    //     //     thumbnail: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //     //     imageAlt: "Front of men's Basic Tee in black.",
    //     //     price: '$35',
    //     //     color: 'Black',
    //     // },
    //     // {
    //     //     id: 8,
    //     //     name: 'Basic Tee',
    //     //     href: '#',
    //     //     thumbnail: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //     //     imageAlt: "Front of men's Basic Tee in black.",
    //     //     price: '$35',
    //     //     color: 'Black',
    //     // },
    //     // More products...
    // ]
    const products = [

        {
            "id": 121,
            "title": "iPhone 5s",
            "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
            "category": "smartphones",
            "price": 199.99,
            "discountPercentage": 11.85,
            "rating": 3.92,
            "stock": 65,
            "tags": [
                "smartphones",
                "apple"
            ],
            "brand": "Apple",
            "sku": "AZ1L68SM",
            "weight": 4,
            "dimensions": {
                "width": 8.49,
                "height": 25.34,
                "depth": 18.12
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Highly impressed!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Wyatt Perry",
                    "reviewerEmail": "wyatt.perry@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Awesome product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Olivia Anderson",
                    "reviewerEmail": "olivia.anderson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Mateo Nguyen",
                    "reviewerEmail": "mateo.nguyen@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "2903942810911",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png"
        },
        {
            "id": 122,
            "title": "iPhone 6",
            "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
            "category": "smartphones",
            "price": 299.99,
            "discountPercentage": 4.54,
            "rating": 3.76,
            "stock": 99,
            "tags": [
                "smartphones",
                "apple"
            ],
            "brand": "Apple",
            "sku": "ZPXH3X9J",
            "weight": 8,
            "dimensions": {
                "width": 16.21,
                "height": 22.94,
                "depth": 5.63
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Nicholas Bailey",
                    "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Clara Berry",
                    "reviewerEmail": "clara.berry@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Not as described!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Gavin Stanley",
                    "reviewerEmail": "gavin.stanley@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 3,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "2517230562429",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png"
        },
        {
            "id": 123,
            "title": "iPhone 13 Pro",
            "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
            "category": "smartphones",
            "price": 1099.99,
            "discountPercentage": 18.3,
            "rating": 3.42,
            "stock": 26,
            "tags": [
                "smartphones",
                "apple"
            ],
            "brand": "Apple",
            "sku": "YGQKHPGK",
            "weight": 8,
            "dimensions": {
                "width": 22.39,
                "height": 9.77,
                "depth": 19.6
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Highly impressed!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Aria Roberts",
                    "reviewerEmail": "aria.roberts@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Ryan Graham",
                    "reviewerEmail": "ryan.graham@x.dummyjson.com"
                },
                {
                    "rating": 2,
                    "comment": "Poor quality!",
                    "date": "2024-05-23T08:56:21.625Z",
                    "reviewerName": "Mason Wright",
                    "reviewerEmail": "mason.wright@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.625Z",
                "updatedAt": "2024-05-23T08:56:21.625Z",
                "barcode": "2986724589988",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/2.png",
                "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/3.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png"
        }
    ]

    return (

        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */}
                <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel
                            transition
                            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
                        >
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button
                                    type="button"
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                {/* <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href} className="block px-2 py-3">
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul> */}

                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                        <h3 className="-mx-2 -my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                                                    <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-6">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            <div className="group grid size-4 grid-cols-1">
                                                                <input
                                                                    defaultValue={option.value}
                                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                >
                                                                    <path
                                                                        d="M3 8L6 11L11 3.5"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-checked:opacity-100"
                                                                    />
                                                                    <path
                                                                        d="M3 7H11"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label
                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                            className="min-w-0 flex-1 text-gray-500"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Products</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                                        />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <MenuItem key={option.name}>
                                                <a
                                                    href={option.href}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                                                    )}
                                                >
                                                    {option.name}
                                                </a>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon aria-hidden="true" className="size-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon aria-hidden="true" className="size-5" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <form className="hidden lg:block">
                                {/* <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                        </li>
                                    ))}
                                </ul> */}

                                {filters.map((section) => (
                                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                                        <h3 className="-my-3 flow-root">
                                            <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                                                    <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                                                    <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                                                </span>
                                            </DisclosureButton>
                                        </h3>
                                        <DisclosurePanel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex gap-3">
                                                        <div className="flex h-5 shrink-0 items-center">
                                                            <div className="group grid size-4 grid-cols-1">
                                                                <input
                                                                    defaultValue={option.value}
                                                                    defaultChecked={option.checked}
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    type="checkbox"
                                                                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                                />
                                                                <svg
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                                                                >
                                                                    <path
                                                                        d="M3 8L6 11L11 3.5"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-checked:opacity-100"
                                                                    />
                                                                    <path
                                                                        d="M3 7H11"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        className="opacity-0 group-has-indeterminate:opacity-100"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-3">
                                {/* Your content */}
                                <div className="bg-white">
                                    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                                        {/* <h3 className='text-2xl font-bold block tracking-tight '>Products</h3> */}
                                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                            {products.map((product) => (
                                               <div key={product.id} className='border-1 border-gray-500 p-2'>
                                                 <div  className="">
                                                    <img
                                                        alt={product.thumbnail}
                                                        src={product.thumbnail}
                                                        className="h-full w-full overflow-hidden object-cover object-center lg:h-full lg:w-full"
                                                    />
                                                    <div className="mt-4 flex justify-between">
                                                        <div>
                                                            <h3 className="text-sm text-gray-700">
                                                                <a href={product.href}>
                                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                                    {product.title}
                                                                </a>
                                                            </h3>
                                                            <div className='flex items-center gap-1'>
                                                                <span><StarIcon className='h-5 w-5' /></span>
                                                                <p className="mt-1 text-sm text-gray-500">{product.rating}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span>
                                                                <p className="text-sm font-medium text-gray-900">${Math.round(product.price * (1 - product.discountPercentage / 100))}</p>
                                                            </span>
                                                            <span>
                                                                <p className="text-sm font-medium text-gray-500 line-through">${product.price}</p>
                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                               </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pagination component */}

                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <a
                                href="#"
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Previous
                            </a>
                            <a
                                href="#"
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Next
                            </a>
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                    <span className="font-medium">97</span> results
                                </p>
                            </div>
                            <div>
                                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <ChevronLeftIcon aria-hidden="true" className="size-5" />
                                    </a>
                                    {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                                    <a
                                        href="#"
                                        aria-current="page"
                                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        1
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        2
                                    </a>
                                    <a
                                        href="#"
                                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                    >
                                        3
                                    </a>
                                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                                        ...
                                    </span>
                                    <a
                                        href="#"
                                        className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                    >
                                        8
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        9
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        10
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Next</span>
                                        <ChevronRightIcon aria-hidden="true" className="size-5" />
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>



    )
}

export default ProductList
