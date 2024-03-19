/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/IProduct"

export type ProductCard = {
    product: IProduct;
    formatVnd: any
}
const ProductCard: React.FC<ProductCard> = ({product, formatVnd}) => {
  return (
          <div className="product-item">
            <div className="product-media">
              <img
                src={product.image}
                className="product-media__img"
                alt=""
              />
              <span className={product.sales?.saleNumber ? "product-media__label" : ""} style={{backgroundColor: product.sales?.saleBackgroud}}>{product.sales?.saleNumber || ""}</span>
            </div>
            <div className="product-content">
              <h3 className="product__name">
                <a href="">{product.title}</a>
              </h3>
              <a className="product__category" href="">
                {product.category}
              </a>
              <div className="product-price">
                <span className="product-price__new">{formatVnd.format(product.price)}</span>
                {product.oldprice && <span className="product-price__old">{formatVnd.format(product.oldprice)}</span>}
              </div>
            </div>
            <div className="product-actions">
              <button className="product-actions__addtocart">
                Add To Cart
              </button>
              <Link to={`/detail/${product.id}`} className="product-actions__viewdetail">
                View Detail
              </Link>
              <ul className="product-actions__more">
                <li>
                  <a href="">
                    <img src="./public/share.png" alt="" />
                    Share
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="./public/compare.png" alt="" />
                    Compare
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="./public/Heartcard.png" alt="" />
                    Like
                  </a>
                </li>
              </ul>
            </div>
          </div>
  )
}

export default ProductCard
