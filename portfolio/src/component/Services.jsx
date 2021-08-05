import React from 'react'

function Services() {
    return (
        <>
            <section className="service-sec">
                <div className="about" data-aos="fade-right">
                    <p>Services</p>
                    <h1>My Service</h1>
                </div>
                <div className="container">
                    <div className="row justify-content-center px-1">
                        <div className="col-md-3 m-3" data-aos="fade-right">
                                <i class="fab fa-react"></i>
                                <h5>React Js Development</h5>
                        </div>
                        <div className="col-md-3 m-3" data-aos="fade-right">
                             <i class="fab fa-android"></i>
                                <h5>Android Development</h5>
                        </div>
                        <div className="col-md-3 m-3" data-aos="fade-right">
                        <i class="fab fa-accusoft"></i>
                                <h5>Front End Development</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
