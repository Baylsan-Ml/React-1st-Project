import style from './hero.module.css';
import heroImg from './../../assets/imgs/heroImg.png'


function Hero(){

    return <section className={`${style.heroSec} py-5 `}>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className={`${style.heroContent} col-md-8 d-flex flex-column justify-content-center align-items-center gap-3`}>
            <img src={heroImg} className=''/>
        <h1 className='text-uppercase text-light'>start bootstrap</h1>
        <p className={`${style.heroPara} text-light pt-2`}>Graphic Artist - Web Designer - Illustrator</p>
        </div>
            </div>
        </div>  
    </section>
}
export default Hero;