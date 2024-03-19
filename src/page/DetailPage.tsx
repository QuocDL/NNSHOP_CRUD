/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import '../style/Detailpage.scss';
import { ProductContext } from '../context/ProductContextProvider';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
    const {products, dispatch, formatVnd} = useContext(ProductContext);
    const {id} = useParams();
    useEffect(()=>{
        (async()=>{
            try {
                const {data} = await axios.get(`http://localhost:3000/products/${id}`)
                dispatch({type: "GET_PROID", payload: data} )
                document.title =`Chi tiết sản phẩm ${data.title}`
            } catch (error) {
                console.log(error)
            }
        })()
    },[]);
  return (
      <>
  <section className="action-bar">
    <div className="container">
      <div className="action-bar_inner">
        <div className="action-bar_inner_left">
          <div className="action-bar_inner_left_filter">
            <a href="index.html">
              <span>Home</span>
            </a>
            <div>
              <a href="">
                <img src="/public/arrownav.png" alt="" />
              </a>
            </div>
          </div>
          <div className="action-bar_inner_left_filter">
            <a href="shop.html">
              <span>Shop</span>
            </a>
            <div>
              <a href="">
                <img src="/public/arrownav.png" alt="" />
              </a>
            </div>
          </div>
          <div className="action-bar_inner_left_showing">
            <span>{products.proID.title}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="detail">
    <div className="container">
      <div className="detail_inner">
        <div className="detail_media">
          <div className="detail_media_slide">
            <div>
              <img src="/public/slide1.png" alt="" />
            </div>
            <div>
              <img src="/public/slide2.png" alt="" />
            </div>
            <div>
              <img src="/public/slide3.png" alt="" />
            </div>
            <div>
              <img src="/public/slide4.png" alt="" />
            </div>
          </div>
          <div className="detail_media_thumbnail">
            <div className="detail_media_thumbnail__bg">
              <img src={`${products.proID.image}`}  alt="not" />
            </div>
          </div>
        </div>
        <div className="detail_content">
          <div className="detail_content">
            <h2>{products.proID.title}</h2>
            <div className="detail_content_price">
            <span>{formatVnd.format(products.proID.price)}</span>
            { products.proID.oldprice && <span className='detail_content_price__old'>{formatVnd.format(products.proID.oldprice)}</span>}
            </div>
            <div className="detail_content__star">
              <div className="star_fill">
                <img src="/public/star.png" alt="" />
                <img src="/public/star.png" alt="" />
                <img src="/public/star.png" alt="" />
                <img src="/public/star.png" alt="" />
                <img src="/public/star_half.png" alt="" />
              </div>
              <div className="detail_content__star__view">
                <span>5 Customer Review</span>
              </div>
            </div>
            <p>
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
            <div className="detail_content__size">
              <span>Size</span>
              <div className="detail_content__size__btn">
                <button>L</button>
                <button>XL</button>
                <button>XS</button>
              </div>
            </div>
            <div className="detail_content__color">
              <span>Color</span>
              <div className="detail_content__color__btn">
                <button className="violet" />
                <button className="black" />
                <button className="brown" />
              </div>
            </div>
            <div className="detail_content_action">
              <div className="detail_content_action__number">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
              <div className="detail_content_action__addcart">
                <button>Add To Cart</button>
                <button>+ Compare</button>
              </div>
            </div>
            <div className="handle" />
            <div className="detail_content_more">
              <div className="detail_content_more_box">
                <div className="name_more">
                  <span>SKU</span>
                </div>
                <span className="detail_content_more__dot">:</span>
                <span>SS001</span>
              </div>
              <div className="detail_content_more_box">
                <div className="name_more">
                  <span>Category</span>
                </div>
                <span className="detail_content_more__dot">:</span>
                <span>Sofas</span>
              </div>
              <div className="detail_content_more_box">
                <div className="name_more">
                  <span>Tags</span>
                </div>
                <span className="detail_content_more__dot">:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="detail_content_more_box">
                <div className="name_more">
                  <span>Share</span>
                </div>
                <span className="detail_content_more__dot">:</span>
                <span className="detail_content_more__share">
                  <img src="./img/fbicon.png" alt="" />
                  <img src="./img/akaricon.png" alt="" />
                  <img src="./img/twicon.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="description">
    <div className="container">
      <div className="description_inner">
        <div className="description_title">
          <h2 className="actived">Description</h2>
          <h2>Additional Information</h2>
          <h2>Reviews [5]</h2>
        </div>
        <div className="description_content">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="description_media">
          <img src="./img/desimg1.png" alt="" />
          <img src="./img/desimg2.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <div className="related">
    <div className="container">
      <div className="related_title">
        <span>Related Products</span>
      </div>
      <div className="related_products">
        <div className="product-list">
          <div className="product-item">
            <div className="product-media">
              <img
                src="/public/product1.png"
                className="product-media__img"
                alt=""
              />
              <span className="product-media__label">- 30%</span>
            </div>
            <div className="product-content">
              <h3 className="product__name">
                <a href="">Syltherine</a>
              </h3>
              <a className="product__category" href="">
                Stylish cafe chair
              </a>
              <div className="product-price">
                <span className="product-price__new">2.500.000</span>
                <span className="product-price__old">3.500.000đ</span>
              </div>
            </div>
            <div className="product-actions">
              <button className="product-actions__addtocart">
                Add To Cart
              </button>
              <a href="detail.html" className="product-actions__viewdetail">
                View Detail
              </a>
              <ul className="product-actions__more">
                <li>
                  <a href="">
                    <img src="/img/share.png" alt="" />
                    Share
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/img/compare.png" alt="" />
                    Compare
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/img/Heartcard.png" alt="" />
                    Like
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-item">
            <div className="product-media">
              <img
                src="/public/product2.png"
                className="product-media__img"
                alt=""
              />
            </div>
            <div className="product-content">
              <h3 className="product__name">
                <a href="">Leviosa</a>
              </h3>
              <a className="product__category" href="">
                Stylish cafe chair
              </a>
              <div className="product-price">
                <span className="product-price__new">2.500.000</span>
              </div>
            </div>
            <div className="product-actions">
              <button className="product-actions__addtocart">
                Add To Cart
              </button>
              <a href="detail.html" className="product-actions__viewdetail">
                View Detail
              </a>
              <ul className="product-actions__more">
                <li>
                  <a href="">
                    <img src="/img/share.png" alt="" />
                    Share
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/img/compare.png" alt="" />
                    Compare
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/img/Heartcard.png" alt="" />
                    Like
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-item">
            <div className="product-media">
              <img
                src="/public/product3.png"
                className="product-media__img"
                alt=""
              />
              <span className="product-media__label">- 50%</span>
            </div>
            <div className="product-content">
              <h3 className="product__name">
                <a href="">Lolito</a>
              </h3>
              <a className="product__category" href="">
                Luxury big sofa
              </a>
              <div className="product-price">
                <span className="product-price__new">7.500.000</span>
                <span className="product-price__old">14.000.000đ</span>
              </div>
            </div>
            <div className="product-actions">
              <button className="product-actions__addtocart">
                Add To Cart
              </button>
              <a href="detail.html" className="product-actions__viewdetail">
                View Detail
              </a>
              <ul className="product-actions__more">
                <li>
                  <a href="">
                    <img src="/public/share.png" alt="" />
                    Share
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/public/compare.png" alt="" />
                    Compare
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/public/Heartcard.png" alt="" />
                    Like
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-item">
            <div className="product-media">
              <img
                src="/public/product4.png"
                className="product-media__img"
                alt=""
              />
              <span className="product-media__label__new">New</span>
            </div>
            <div className="product-content">
              <h3 className="product__name">
                <a href="">Respira</a>
              </h3>
              <a className="product__category" href="">
                Outdoor bar table and stool
              </a>
              <div className="product-price">
                <span className="product-price__new">5.000.000</span>
              </div>
            </div>
            <div className="product-actions">
              <button className="product-actions__addtocart">
                Add To Cart
              </button>
              <a href="detail.html" className="product-actions__viewdetail">
                View Detail
              </a>
              <ul className="product-actions__more">
                <li>
                  <a href="">
                    <img src="/public/share.png" alt="" />
                    Share
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/public/compare.png" alt="" />
                    Compare
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/public/Heartcard.png" alt="" />
                    Like
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="related_action">
        <button>Show More</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default DetailPage
