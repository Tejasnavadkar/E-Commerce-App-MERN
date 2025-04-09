
import React, { useEffect, useState } from 'react'
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
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { productSelector, fetchProductsByFilterAsync, categoriesSelector, brandsSelector,FetchAllCategoriesAsync,FetchAllBrandsAsync } from '../ProductSlice'
import { PAGE_PER_LIMIT } from '../../../app/Constants'

const sortOptions = [

    { name: 'Best Rating', value: 'rating', order: 'desc', current: false },
    { name: 'Price: Low to High', value: 'price', order: 'asc', current: false },
    { name: 'Price: High to Low', value: 'price', order: 'desc', current: false },

]




function classNames(...classes) {
    return classes.filter(Boolean).join(' ') // The .filter(Boolean) part removes any falsy values (false, 0, null, undefined, "", NaN) It keeps only truthy values
}


const ProductList = () => {

   
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [filter, setfilter] = useState({})
    const [sort,setSort] = useState({})
    const [activePage,setActivePage] = useState(1)

    const { allProducts,pages,items} = useSelector(productSelector)
    const categories = useSelector(categoriesSelector)
    const brands = useSelector(brandsSelector)
    const dispatch = useDispatch()
   
    const filters = [
        {
            id: 'category',
            name: 'Category',
            options: categories
        },
        {
            id: 'brand',
            name: 'Brand',
            options:brands
        },
    ]


    const handleFilter = (e, section, option) => {

        const isChecked = e.target.checked; 
        const newFilter = {...filter}   // not need to spread bcoz key is same so it override prev value not retain prev value
        console.log('newFilter--1',newFilter)

        if(isChecked) { // agar filter uncheck kiya to firse reset ho jayega 
            if(newFilter[section.id]){
                newFilter[section.id].push(option.value)
            }else{
                newFilter[section.id] = [option.value]
            }
             
         }else{ // when uncheck remove from newFilter
            const index = newFilter[section.id].findIndex((elem)=>elem === option.value)   // find index of element
            console.log('index--',index)
            
                newFilter[section.id].splice(index,1)
        
         }
        console.log('newFilter--2',newFilter)
        setfilter(newFilter)
        
      
        // dispatch(fetchProductsByFilterAsync(newFilter))
    }

    const handleSort = (sortItem) => {
        console.log(sortItem)

        const payload = {
            _sort: sortItem.value,
            _order: sortItem.order
        }
        // dispatch(sortProductsAsync(payload))
        setSort(payload)
    }

    const handlePagination = (Page) =>{
        setActivePage(Page)
    }

    useEffect(() => {
        console.log('activepage--',activePage)
        const pagination = {
            _page:activePage,
            _per_page:PAGE_PER_LIMIT
        }
        // dispatch(fetchProducts())
        dispatch(fetchProductsByFilterAsync({filter,sort,pagination}))
    }, [dispatch,filter,sort,activePage])

    useEffect(()=>{
        setActivePage(1) // when filter change or sort change move to first page 
    },[items,sort])

    useEffect(()=>{
        // console.log('useEffect for category')
        dispatch(FetchAllCategoriesAsync())
        dispatch(FetchAllBrandsAsync())
    },[dispatch])



    // if (isLoading) {  // this sffetcs Discloure components state it close the Discloure section
    //     return <div className='h-screen w-full flex justify-center items-center text-2xl'>
    //         Loading..
    //     </div>
    // }

    // if (error) {
    //     return <div className='h-screen w-full flex justify-center items-center text-red-500 text-2xl'>
    //         {error}
    //     </div>
    // }

    return (

        <div className="bg-white">
            <div>
                <MobileFilter filters={filters} mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} handleFilter={handleFilter}/>

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
                                                <span
                                                    onClick={() => handleSort(option)}
                                                    className={classNames(
                                                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                        'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                                                    )}
                                                >
                                                    {option.name}
                                                </span>
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
                            <DesktopFilter 
                            handleFilter={handleFilter}
                            filters={filters}
                            />

                            {/* Product grid */}
                            <ProductGrid products={allProducts} />
                           
                        </div>
                    </section>

                    {/* Pagination component */}
                    <Pagination activePage={activePage} setActivePage={setActivePage} handlePagination={handlePagination} limit={PAGE_PER_LIMIT} pages={pages} totalProducts={items}   />

                </main>
            </div>
        </div>
    )
}

export default ProductList


// child components

const MobileFilter = ({mobileFiltersOpen, setMobileFiltersOpen,handleFilter,filters}) => {
    
    return (
        <>
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
                                                                // checked={filter[section.id] === option.value} // Dynamically set checked state
                                                                onChange={(e) => handleFilter(e, section, option)}
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
                                                        {option?.label}
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
        </>
    )
}

const DesktopFilter = ({handleFilter,filters}) => {
    return (
        <>
            <form className="hidden lg:block">
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
                                                    // defaultChecked={option.checked}
                                                    id={`filter-${section.id}-${optionIdx}`}
                                                    name={`${section.id}[]`}
                                                    type="checkbox"
                                                    // checked={filter[section.id] === option.value} // Dynamically set checked state
                                                    // checked={filter[section.id]?.includes(option.value) || false} // Check if the value is in the array
                                                    onChange={(e) => handleFilter(e, section, option)}
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
        </>
    )
}

const Pagination = ({activePage,setActivePage,handlePagination,limit,totalProducts,pages}) => {
    return (
        <>
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <button
                         onClick={()=>handlePagination(prev => prev > 1 ? activePage-1 : prev)}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    <button
                         onClick={()=>handlePagination(prev=> prev < pages ? prev + 1 : prev)}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{(activePage-1)*limit+1}</span> to <span className="font-medium">{activePage * limit > totalProducts ? totalProducts  : activePage * limit }</span> of{' '}
                            <span className="font-medium">{totalProducts}</span> results
                        </p>
                    </div>
                    <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                            <button
                                onClick={()=>setActivePage(prev => prev > 1 ? activePage-1 : prev)}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon aria-hidden="true" className="size-5" />
                            </button>
                            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                            {Array.from({length:pages || (totalProducts/limit)}).map((_,idx)=>(
                                <button
                                key={idx}
                                onClick={()=>handlePagination(idx+1)}
                                aria-current="page"
                                className={`relative z-10 inline-flex items-center ${activePage === idx + 1 && 'bg-indigo-600 text-white'} border border-gray-400  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                            >
                                {idx + 1}
                            </button>
                            ))}
                           
                            <button
                                onClick={()=>handlePagination(prev=> prev < pages ? prev + 1 : prev)}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon aria-hidden="true" className="size-5" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProductGrid = ({products}) => {
    // const navigate = useNavigate()
    return (
       <>
        <div className="lg:col-span-3">
                                {/* Your content */}
                                <div className="bg-white">
                                    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                        {/* <h3 className='text-2xl font-bold block tracking-tight '>Products</h3> */}
                                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                            {products.map((product) => (
                                                <Link to={`/product-details/${product.id}`}  key={product.id} className=' group relative border-1 border-gray-500 p-2'> {/*onClick={() => navigate(`/product-details`,{state:{id:product.id}})}*/}
                                                    <div className="">
                                                        <img
                                                            alt={product.thumbnail}
                                                            src={product.thumbnail}
                                                            className="h-full w-full overflow-hidden object-cover object-center lg:h-full lg:w-full"
                                                        />
                                                        <div className="mt-4 flex justify-between">
                                                            <div>
                                                                <h3 className="text-sm text-gray-700">
                                                                    <span to={'#'}>
                                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                                        {product.title}
                                                                    </span>
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
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
       </>
    )
}



