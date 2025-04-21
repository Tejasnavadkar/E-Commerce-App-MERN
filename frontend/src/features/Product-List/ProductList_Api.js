// here place api call and import in extraReducers

export const FetchAllProducts = async () => {
    try {

        const response = await fetch('http://localhost:8000/products')
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching products in ProductList_Api-', error)
    }
}

export const FetchProductById = async ({ id }) => {
    try {

        const response = await fetch(`http://localhost:8000/products/${id}`)
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching products by id in ProductList_Api-', error)
    }
}

export const FetchAllCategories = async () => {
    try {

        const response = await fetch('http://localhost:8000/categories')
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching products in ProductList_Api-', error)
    }
}

export const FetchAllBrands = async () => {
    try {

        const response = await fetch('http://localhost:8000/brands')
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching products in ProductList_Api-', error)
    }
}

export const FetchAllProductsByFilters = async ({ filter, sort, pagination }) => {
    // let queryString = '';

    // for (let key in filter) {
    //     if (Array.isArray(filter[key])) {
    //         // If the value is an array, append each value with the same key
    //         filter[key].forEach((value) => {
    //             queryString += `${key}=${encodeURIComponent(value)}&`;
    //         });
    //     } else {
    //         // If the value is a single string, append it directly
    //         queryString += `${key}=${encodeURIComponent(filter[key])}&`;
    //     }
    // }

    // try {
    //     const response = await fetch(`http://localhost:8000/products?${queryString}`);
    //     const data = await response.json();
    //     return data;
    // } catch (error) {
    //     console.log('Error while fetching products in ProductList_Api:', error);
    // }

    let queryString = ''
    // todo 
    // filter = {"category": ["smartphone","laptops"]}
    // sort = {_sort:"price",_order="desc"}
    // TODO: on server we will support multiple values in filter
    // pagination : _page=1&_limit=10

    for (let key in filter) {
        if (filter[key].length > 0) {
            const categories = filter[key]
            const lastCategory = categories[categories.length - 1]
            queryString += `${key}=${lastCategory || ''}&`
        }
        // queryString += `${key}=${filter[key]}&`
    }

    for (let key in sort) {
        queryString += `${key}=${sort[key]}&`
    }
    // pagination object iteration

    for (let key in pagination) {
        queryString += `${key}=${pagination[key]}&`
    }

    try {
        // console.log('queryString--',queryString)
        const response = await fetch(`http://localhost:8000/products?${queryString}`)
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching products in ProductList_Api-', error)
    }
}

export const sortProducts = async (payload) => {
    try {
        const response = await fetch(`http://localhost:8000/products?_sort=${payload.sort}&_order=${payload.order}`)
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching products in ProductList_Api-', error)
    }
}

export const createProduct = async (payload) => {

    try {

        const response = await fetch(`http://localhost:8000/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        const data = await response.json()
        return data

    } catch (error) {

        throw new Error(error)

    }
}

export const updateProductById = async (payload) => {

    try {
          
        const response = await fetch(`http://localhost:8000/products/${JSON.parse(payload.id)}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log('err--',error)
        throw new Error('err in updateProductById_api',error)
    }

}

