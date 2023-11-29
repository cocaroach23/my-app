
import { useState } from 'react';
import './App.css';
import Header from 'components/Header';
import Product from 'components/Pruduct';
import Footer from 'components/Footer';

function App() {
  const [products, setProducts] = useState([
    {
      id:1,
      nameProduct:'Хлеб'
    },
    {
      id:2,
      nameProduct:'Молоко'
    },
    {
      id:3,
      nameProduct:'Макароны'
    },
    {
      id:4,
      nameProduct:'Гречка'
    },
  ])

  const deleteProduct = (id) => {
    const filteredProducts = products.filter(product => product.id !== id)
    setProducts(filteredProducts)
  }

  return(
    <div>
      <Header />
      <div className='max-w-screen-lg mx-auto min-h-screen'>
        {products.lenght === 0 && (
          <div className='mt-20 text-center text-7xl text-amber-500 font-extrabold'>Нет покупок</div>
        )}

        {products.lenght > 0 && products.map((product) => {
          return(
            <Product key={product.id} product={product} deleteProduct={deleteProduct} />
          )
        })}
      </div>
      <Footer />
    </div>
  )
}
export default App;
