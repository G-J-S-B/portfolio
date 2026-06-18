import './About.css'

function About() {
    return (
        <div className='background-dark content-bright'>
            <div className="container">
                <div className="about-section">
                    <div className="about-image">
                        <img src="/images/second Profile.png" alt="" />
                    </div>
                    <div className="about-content">
                        <div className='about-heading'>
                            <img src="/images/crosses.png" alt="" />
                            <h2>Here's a little about myself</h2>
                        </div>
                        <div className='about-para'>
                            <p>Technical Project manager with a little over 7 years of experience. I’ve been coordinating web and mobile applications, managing and maintaining client relationships through clear and consistent communication, and collaborating with in-house technical teams throughout my career. <br /> <br /> Over the years, I’ve obtained a strong understanding of web technologies, APIs and working knowledge of Front-end and Back-end development. I’m also passionate about digital art and have a keen eye for great design.</p>
                            <img className='about-para-tornado' src="/images/tornado.png" alt="" />
                            <img className='about-para-crosses' src="/images/crosses.png" alt="" />
                        </div>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About
