import  { useContext, useEffect, useState  } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import '../style/Shop.scss'
import axios from 'axios'
import { IProduct } from '../interfaces/IProduct'
import ProductCard from '../components/ProductCard'
import { Link, useSearchParams } from 'react-router-dom'
import classNames from 'classnames'

const LIMIT = 8;
const Shoppage = () => {
  const {products, dispatch, formatVnd} = useContext(ProductContext)
  const [totalProducts, setTotal] = useState(0)

  const fetchProduct = async()=>{
      try {
        const {data} = await axios.get(`http://localhost:3000/products?_page=${page}&_per_page=${LIMIT}`)
        dispatch({type: "SET_PRODUCTS", payload: data.data})
        console.log(data)
        setTotal(Math.ceil(data.items / LIMIT))
      } catch (error) {
        console.log(error)
      }
  }

  useEffect(()=>{
    fetchProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const [searchParams] = useSearchParams()
  const searchParamsObject = Object.fromEntries([...searchParams]) 
  const page = Number(searchParamsObject._page) || 1

  return (
    
    <>
      <>
  <section className="banner">
    <img src="./public/bannershop.png" alt="" className="banner__img" />
  </section>
  <section className="action-bar">
    <div className="container">
      <div className="action-bar_inner">
        <div className="action-bar_inner_left">
          <div className="action-bar_inner_left_filter">
            <div>
              <a href="">
                <img src="./img/option.png" alt="" />
              </a>
            </div>
            <a href="">
              <span>Filter</span>
            </a>
          </div>
          <div className="action-bar_inner_left_dot">
            <a href="">
              <img src="./img/dot.png" alt="" />
            </a>
          </div>
          <div className="action-bar_inner_left_viewlist">
            <a href="">
              <img src="./img/viewlist.png" alt="" />
            </a>
          </div>
          <div className="action-bar_inner_left_showing">
            <span>Showing 1-16 of 32 results</span>
          </div>
        </div>
        <div className="action-bar_inner_right">
          <div className="action-bar_inner_right_action">
            <span>Show</span>
            <span className="action-bar_inner_right_box">16</span>
          </div>
          <div className="action-bar_inner_right_action">
            <span>Short by</span>
            <span className="action-bar_inner_right_default">Default</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="products">
    <div className="container">
      <div className="product_inner">
        <div className="product_list">
          {products?.value.map((item: IProduct, index: number)=>(
            <ProductCard key={index} product={item} formatVnd={formatVnd}/>
          ))}
        </div>
      </div>
     <div className="product_action">
           {page == 1 ? (
             <span className="product_action_disable">Prev</span>
           ):(
             <Link onClick={()=>fetchProduct()} to={`/shop?_page=${page - 1}`} className="product_action_btn">Prev</Link>
           )}
        {Array(totalProducts).fill(0).map((_, index)=>{
          const pageNumber = index + 1

          return(
             <Link onClick={()=>fetchProduct()} key={pageNumber} to={`/shop?_page=${pageNumber}`} 
             className={classNames('', {
              'product_action_active' : page == pageNumber,'product_action_btn' : page != pageNumber
             })
            }>{index + 1}</Link>
          )
        })}
      
         {page === totalProducts ? (
           <span className="product_action_disable">Next</span>
         ): (
           <Link onClick={()=>fetchProduct()} to={`/shop?_page=${page + 1}`} className="product_action_btn">Next</Link>
         )}
        </div>
    </div>
  </section>
  <section className="role">
    <div className="role_inner">
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./img/trophy.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./img/guarantee.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./img/shipping.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./img/customer.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  </section>
</>

    </>
  )
}

export default Shoppage
