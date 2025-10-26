import style from './hero.module.css';
import heroImg from './../../assets/imgs/heroImg.png'

function Hero(){

    return <section className={`${style.heroSec} py-5`}>
        <div className="hero-content d-flex flex-column justify-content-center align-items-center">
            <img src={heroImg} />
        <h1 className='text-uppercase text-light'>start bootstrap</h1>
        </div>
    
    </section>
}
export default Hero;