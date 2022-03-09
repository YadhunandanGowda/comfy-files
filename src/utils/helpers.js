export const formatPrice = (price) => {
    const formattedPrice = Intl.NumberFormat("en-US",{
        style: 'currency',
        currency: "USD"
    }).format(price/100)
    return formattedPrice;
}

export const getUniqueValues = (products,type) => {
    let unique = products.map((prod)=> prod[type]);
    if(type === "colors") {
        unique = unique.flat();
    }
    return ["all",...new Set(unique)]
}
