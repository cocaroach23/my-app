const Product = (props) => {
    const {product, deleteProduct} = props
    return (
        <div className='bg-lime-500 m-10 py-6 px-8'>
        <p className='text-xl font-bold'>{product.nameProduct}</p>

        <a className="hover:underline сursor-pointer" onClick={() => deleteProduct(product.id)}>Куплено</a>
      </div>
      )
}

export default Product