import './Hero.css'

function Hero()
{
    return (
        <div className="background-dark content-bright">
            <div className="container">
                <div className='hero-section'>
                    <img src="/images/page-graphic.png" alt="" />
                    <div className='hero-layout'>
                        <div className='hero-content'>
                            <img className='tornado' src="/images/tornado.png" alt="" />
                            <img className='crosses' src="/images/crosses.png" alt="" />
                            <img className='crosses2' src="/images/crosses.png" alt="" />
                            <h1>Gerrard <br />J.S <br /> Barrows</h1>
                            <h2> Technical Project Manager <br /> - <br />  Digital Project Coordinator</h2>
                        </div>
                        <div className='hero-profile'>
                            <img className='arrow' src="/images/arrow.png" alt="" />
                            <div className="profile-card">
                                <img src="/images/Profile.png" alt="" />
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Hero
