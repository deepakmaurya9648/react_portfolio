import React from 'react'

function Contact() {
    return (
       <>
       <section className="contact-us">
       <div className="about">
                        <p>Conatct</p>
                        <h1>Conatct Me</h1>
                    </div>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <i class="fas fa-map-marker-alt"></i>
                    <div className="detail">
                        <h5>My Address</h5>
                        <p>Varanasi,UP,221307</p>
                    </div>
                </div>
                <div className="col-md-6">
                <i class="fas fa-envelope"></i>
                    <div className="detail">
                        <h5>Email Me</h5>
                        <p>dkmaurya9648@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-6">
                <i class="fas fa-share-alt"></i>
                    <div className="detail">
                        <h5>Socail Profile</h5>
                        <div className="social-icon">
                            <a href=""><i class="fab fa-github"></i></a>
                            <a href=""><i class="fab fa-linkedin"></i></a>
                            <a href=""><i class="fab fa-instagram-square"></i></a>
                            <a href=""><i class="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <i class="fas fa-phone-volume"></i>
                    <div className="detail">
                        <h5>Call Me</h5>
                        <p>+917985171758</p>
                    </div>
                </div>
            </div>
            </div>            
       </section>
       </>
    )
}

export default Contact
