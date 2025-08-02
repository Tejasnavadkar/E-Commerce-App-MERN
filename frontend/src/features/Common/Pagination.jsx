import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"



 const Pagination = ({activePage,setActivePage,handlePagination,limit,totalProducts,pages}) => {

    console.log({activePage,setActivePage,handlePagination,limit,totalProducts,pages})

    return (
        <>
            <div className="flex items-center justify-between border w-full border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
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

export default Pagination