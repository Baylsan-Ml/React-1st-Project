import style from './footer.module.css';

function Footer(){

    return <>
    <footer className={`${style.footer} mt-5  py-5 text-center`}>
        <div className="container">
            <div className="row ">
                <div className="col-md-4 mt-4">
                    <h4 className="text-uppercase mb-4">location</h4>
                    <p className='mb-0'>2215 John Daniel Drive
                    <br />
                    Clark, MO 65243</p>
                </div>
                <div className="col-md-4 mt-4">
                    <h4 className="text-uppercase mb-4">around the web</h4>
                    <div className={`${style.footerIcons} d-flex gap-3 justify-content-center`}>
                    <a href="#" className='border border-2 rounded-circle p-2 py-2'><i className="fa-brands fa-facebook-f fa-xl" style={{ color: "#ffffff" }}></i></a>
                    <a href="#" className='border border-2 rounded-circle p-2 py-2'><i className="fa-brands fa-twitter fa-xl" style={{ color: "#ffffff" }}></i></a>
                    <a href="#" className='border border-2 rounded-circle p-2 py-2'><i className="fa-brands fa-linkedin-in fa-xl" style={{ color: "#ffffff" }}></i></a>
                    <a href="#" className='border border-2 rounded-circle p-2 py-2'><i className="fa-solid fa-globe fa-xl" style="color: #ffffff;" style={{ color: "#ffffff" }}></i></a>
                    </div>
                </div>

                <div className="col-md-4 mt-4">
                     <h4 className="text-uppercase mb-4">about the freelancer</h4>
                     <p >Freelance is a free to use, MIT licensed Bootstrap theme created by
                        <a href="https://startbootstrap.com/" className='mainColor ms-2'>Start Bootstrap</a>
                        .
                     </p>
                </div>
            </div>
        </div>
    </footer>

    <div className={`${style.copyRight} py-4 text-center text-white`}>
        <small>Copyright © Your Website 2023</small>
    </div>
    </>
}
export default Footer;