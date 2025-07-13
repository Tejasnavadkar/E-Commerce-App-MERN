import axios from 'axios'

// here place api call and import in extraReducers

export const FetchAllProducts = async () => {
    try {

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/fetchAllProducts`)
        //  const response = await fetch('http://localhost:8080/api/product/fetchAllProducts')
        const data = response.data.allProducts
        return data

    } catch (error) {

        console.log('error while fetching products in ProductList_Api-', error)
           throw new Error(error.message) 
    }
}

export const FetchProductById = async ({ id }) => {
    try {

         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/fetchProductById/${id}`)
        const data = response.data.product
        return data

    } catch (error) {

        console.log('error while fetching products by id in ProductList_Api-', error)
           throw new Error(error.message) 
    }
}

export const FetchAllCategories = async () => {
    try {

         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/categories/fetchCategories`)
        const data = response.data.categories
        return data

    } catch (error) {

        console.log('error while fetching products in ProductList_Api-', error)
           throw new Error(error.message)
    }
}

export const FetchAllBrands = async () => {
    try {

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/brands/fetchBrands`)
        const data = response.data.brands
        return data

    } catch (error) {

        console.log('error while fetching products in ProductList_Api-',error) 
        throw new Error(error.message)
    }
}

export const FetchAllProductsByFilters = async ({ filter, sort, pagination,role }) => {
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
     for (let key in role) {
        queryString += `${key}=${role[key]}&`
    }

    try {
        
        // const response = await fetch(`http://localhost:8000/products?${queryString}`)
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/fetchAllProducts?${queryString}`)
        const products = await response.data.allProducts
        console.log('response in product slice--',response)
        console.log('prod----',products)
        const pages = response.headers['x-total-count']
        const items = response.headers['x-total-items']  // not needed

        const payload = {
            products,
            totalProducts:pages,
            items
        }
        return payload

    } catch (error) {

        console.log('error while fetching products in ProductList_Api-', error)
        throw new Error(error.message | 'cant fetch products') 
    }
}

export const sortProducts = async (payload) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/product/fetchAllProducts?_sort=${payload.sort}&_order=${payload.order}`)
        const data = response.data.allProducts
        return data

    } catch (error) {

        console.log('error while fetching products in ProductList_Api-', error)
           throw new Error(error.message) 
    }
}

export const createProduct = async (payload) => {

    try {

        // const response = await fetch(`http://localhost:8000/products`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(payload)
        // })

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/product/createProduct`,payload)

        const data = response.data.product
        return data

    } catch (error) {

        throw new Error(error.message)

    }
}

export const updateProductById = async (payload) => {

    try {
          
        // const response = await fetch(`http://localhost:8000/products/${JSON.parse(payload.id)}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // 'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(payload)
        // })

        const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/api/product/updateProduct/${payload.id}`,payload)
        const data = response.data.updatedProduct
        return data
    } catch (error) {
        console.log('err--',error)
        throw new Error(error.message)
    }

}

