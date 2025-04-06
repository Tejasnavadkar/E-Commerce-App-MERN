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

export const FetchAllProductsByFilters = async (filter) => {

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
    for(let key in filter){
        queryString += `${key}=${filter[key]}&`
    }
    try {
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
       console.log(`http://localhost:8000/products?_sort=${payload.sort}&_order=${payload.order}`)
        const response = await fetch(`http://localhost:8000/products?_sort=${payload.sort}&_order=${payload.order}`)
        const data = await response.json()
        return data

    } catch (error) {

        //    throw Error('error while fetching products in ProductList_Api-',error) 
        console.log('error while fetching products in ProductList_Api-', error)
    }
}