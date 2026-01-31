import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'



const ProductList = () => {
  const {products, addToCart } = useContext(ShopContext);

  return (
    <div className='max-w-7xl mx-auto px-6 text-center mt-20'>
      <h2 className='text-3xl font-semibold mb-8 text-gray-800'>Our Awesome Foods</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((product) =>{
          const {id, image, name, price} = product
          return (
            <div key={id} className='bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform duration-200 hover:transition-y-1'>
                <img src={image} alt="" className='h-64 w-full object-cover rounded-lg transform hover:scale-103 transition-transform duration-200 cursor-pointer'/>
                <div className='mt-4'>
                  <h4 className='text-lg font-semibold text-gray-900'>{name}</h4>
                  <p className='text-gray-600'>$ {price}</p>
                </div>
                <button onClick={() => addToCart(product, id)} className='w-full py-2 mt-4 text-lg font-medium text-white bg-amber-500 rounded-md hover:bg-amber-600 transition duration-300 cursor-pointer'>Add To Cart</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
