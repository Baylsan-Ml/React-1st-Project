import style from './hero.module.css';
import heroImg from './../../assets/imgs/heroImg.png'


function Hero(){

    return <section className={`${style.heroSec} py-5`}>
        <div className="container">
            <div className="hero-content d-flex flex-column justify-content-center align-items-center gap-3">
                
            <img src={heroImg} className='w-25'/>
        <h1 className='text-uppercase text-light'>start bootstrap</h1>
        <p className={`${style.heroPara} text-light pt-2`}>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        </div>
        
    </section>
}
export default Hero;