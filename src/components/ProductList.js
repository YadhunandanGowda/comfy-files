import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'
import Product from './Product'

const ProductList = () => {
  const {filtered_products:products, grid_view} = useFilterContext();
  console.log(products)
  if(products.length <1) {
    return <h5 style={{textTransform:"none"}}>Sorry, no products matched your search.</h5>
    }
    if(grid_view) {
      return <GridView products={products}>product list</GridView>
    }
    
  return <ListView products={products}>product list</ListView>
}

export default ProductList
