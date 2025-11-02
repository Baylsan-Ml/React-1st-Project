import cabin from './../../assets/imgs/cabin.png'
import cake from './../../assets/imgs/cake.png'
import circus from './../../assets/imgs/circus.png'
import game from './../../assets/imgs/game.png'
import safe from './../../assets/imgs/safe.png'
import submarine from './../../assets/imgs/submarine.png'
import style from './portfolio.module.css'

function Portfolio(){

    return <section className={`${style.portfolioSec} p-5 text-center`}>
        <h2 className="text-uppercase py-5">Portfolio</h2>
        <div className="container ">
            <div className="row justify-content-center ">
                <div className="col-md-4 col-sm-6">
                    <img src={cabin} className='w-100 mb-5 rounded-2' alt=".." />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src={cake} className='w-100 mb-5 rounded-2' alt=".." />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src={circus} className='w-100 mb-5 rounded-2' alt=".." />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src={game} className='w-100 mb-5 rounded-2' alt=".." />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src={safe} className='w-100 mb-5 rounded-2' alt=".." />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src={submarine} className='w-100 mb-5 rounded-2' alt=".." />
                </div>
                
            </div>
        </div>
    </section>
}
export default Portfolio;