export const PAGE_PER_LIMIT = 10

export const discountedPrice = (item) =>{
    
    let price = parseInt(item.price) 
    let discount = parseInt(item.discountPercentage)

    return Math.round(price * (1-discount/100))
}