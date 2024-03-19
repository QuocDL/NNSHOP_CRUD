import '../style/Footer.scss'
const Footer = () => {
  return (
    <>
      <footer className="footer">
  <div className="container">
    <div className="footer_inner">
      <div className="footer_inner_list">
        <div className="footer_inner_list__information">
          <h3>Funiro.</h3>
          <p>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>
        <div className="footer_inner_list__link">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_inner_list__link">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="">Payment Options</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Privacy Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer_inner_list__newsletter">
          <h3>Newsletter</h3>
          <div className="footer_inner_list__newsletter__formSubmit">
            <input placeholder="Enter Your Email Address" type="text" />
            <button>SUBCRIBE</button>
          </div>
        </div>
      </div>
    </div>
    <span className="footer_end">2023 furino. All rights reverved</span>
  </div>
</footer>

    </>
  )
}

export default Footer
