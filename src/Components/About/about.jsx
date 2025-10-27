
import style from './../../Components/About/about.module.css';

function About(){

    return <section className={`${style.aboutSec} py-5 text-center`}>
        <h2 className="text-uppercase py-5">About</h2>
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-4 ms-auto text-light">
                    <p className={style.lead}>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-4 me-auto text-light">
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
                <div className='mt-4'>
                    <a className={`${style.downlodBtn} btn btn-xl btn-outline-light`} href="">
                        <i className="fa-solid fa-download me-2"></i>
                      Free Download!</a>
                </div>
            </div>

        </div>
    </section>
}
export default About;