import style from './navbar.module.css';

function Navbar(){

    return <>
        <nav className= {`${style.navbar} subColor-Bg navbar navbar-expand-lg text-uppercase fixed-top`}>
  <div className={`container`}>
    <a className={`${style.navbarBrand} navbar-brand`} href="#">START A BOOTSTRAP</a>
    <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className={`navbar-toggler-icon`}></span>
    </button>
    <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
      <ul className={`navbar-nav ms-auto mb-2 mb-lg-0`}>
        <li className={`nav-item`}>
          <a className={`nav-link`} aria-current="page" href="#">PORTFOLIO</a>
        </li>
        <li className={`nav-item`}>
          <a className={`nav-link`} href="#">ABOUT</a>
        </li>
        <li className={`nav-item`}>
          <a className={`nav-link`} href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
}
export default Navbar;