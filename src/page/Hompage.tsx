/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import '../style/Hompage.scss'
import { ProductContext } from '../context/ProductContextProvider'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { IProduct } from '../interfaces/IProduct'
const Hompage = () => {
    const {products, dispatch, formatVnd} = useContext(ProductContext)

    useEffect(()=>{
        (async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/products`)
                dispatch({type: "SET_PRODUCTS", payload: data})
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        })()
    },[])


  return (
    <>
  <section className="banner">
    <img src="./public/banner.png" alt="" className="banner__img" />
  </section>
  <section className="news">
    <div className="container">
      <div className="handing">
        <h1 className="handing__title">News</h1>
      </div>
      <div className="body">
        <div className="product-list">
        {products?.value.map((item: IProduct, index: number )=> index < 4 && ( 
            <ProductCard key={index} product={item} formatVnd={formatVnd}/>
        ))}
        </div>
      </div>
    </div>
  </section>
  <section className="shop">
    <div className="container">
      <div className="handing">
        <h1 className="handing__title">Shop</h1>
      </div>
      <div className="shop-body">
        <div className="shop-product">
          <img src="./public/shop1.png" alt="" />
          <img src="./public/shop2.png" alt="" />
          <img src="./public/shop3.png" alt="" />
          <img src="./public/shop4.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section className="blog">
    <div className="container">
      <div className="handing">
        <h1 className="handing__title">Blog</h1>
      </div>
      <div className="blog_inner">
        <div className="blog_box">
          <img src="./public/blog1.png" alt="" />
          <div className="blog_box__text">
            <div className="blog_box__text__desc">
              <h3>THE ULTIMATE SOFA BUYING GUIDE</h3>
              <p>
                The versatility of our living space is more crucial than ever.
                But buying a sofa might be a difficult undertaking. Your needs
                and the size of your living area will determine everything,
                However, don’t worry, were are here to help you
              </p>
            </div>
            <div className="blog_box__action">
              <a href="">
                <span>ABOUT</span>
                <img src="./public/arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog_box">
          <img src="./public/blog2.png" alt="" />
          <div className="blog_box__text">
            <div className="blog_box__text__desc">
              <h3>A BEDROOM MUST HAVE SOME THING LIKE THIS</h3>
              <p>
                Your level of comfort when geting into and out of bed can be
                greatly influenced by the bed frame you choose. It may
                significantly affect how want your bedroom to feet and look
              </p>
            </div>
            <div className="blog_box__action">
              <a href="">
                <span>ABOUT</span>
                <img src="./public/arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog_box">
          <img src="./public/blog3.png" alt="" />
          <div className="blog_box__text">
            <div className="blog_box__text__desc">
              <h3>WHY IS A TV CONSOLE A MUST IN EVERY HOUSE</h3>
              <p>
                People do a lot of research to make sure they purchase the ideal
                televisoin. And like the rest of us, you want to keep that
                gorgeous flat srceen in your living or bedroom on a table or
                stand
              </p>
            </div>
            <div className="blog_box__action">
              <a href="">
                <span>ABOUT</span>
                <img src="./public/arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="role">
    <div className="role_inner">
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./public/trophy.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>High Quality</h4>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./public/guarantee.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./public/shipping.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className="role_inner__box">
        <div className="role_inner__box__img">
          <img src="./public/customer.png" alt="" />
        </div>
        <div className="ole_inner__box__text">
          <h4>24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default Hompage
