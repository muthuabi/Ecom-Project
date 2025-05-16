const ContactUs=()=>{
    return <>
    <section id="contact-us">
      <h2 className="section-head">Contact Us</h2>
      <div className="contact-cards">
        <div className="row gap-3 gap-md-0 d-md-flex d-lg-flex align-items-md-center align-items-lg-center">
          <div className=" col-md-6" >
            <div className="contact-card">

              <div className="sub-contact-card">
                <h4 className="contact-sub-head">Email</h4>
                <b className="lead"><a href="mailto:muthuabi292@gmail.com">muthuabi292@gmail.com</a></b>
              </div>
              <div className="sub-contact-card">
                <h4 className="contact-sub-head">Phone</h4>
                <b className="lead"><a href="tel:+919025190054">+91 90251 90054</a></b>
              </div>
              <div className="sub-contact-card">
                <h4 className="contact-sub-head">Address</h4>
                <b className="lead">22, North Street<br/>Petduraisamypuram, Srivaikuntam Taluk<br/>Thoothukudi District, Tamil
                  Nadu <br/>
                  Pincode - 628601.</b>
              </div>
              <div className="sub-contact-card">
                <h4 className="contact-sub-head">Socials</h4>
                <div className=" social-outer">


                  <a href="https://wa.me/+919025190054/">
                    <div className="socials">
                      <i className="fa fa-whatsapp social-icon"></i>
                    </div>
                  </a>
                  <a href="https://twitter.com/M_Krish_Abi_07/">
                    <div className="socials">
                      <i className="fa fa-twitter  social-icon"></i>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/muthukrishnan-m-800bb7274/">
                    <div className="socials">
                      <i className="fa fa-linkedin social-icon"></i>
                    </div>
                  </a>

                  <a href="https://www.quora.com/profile/Muthukrishnan-M-36">
                    <div className="socials">
                      <i className="fa fa-quora social-icon"></i>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/m.krish_abi_07">
                    <div className="socials">
                      <i className="fa fa-instagram social-icon"></i>
                    </div>
                  </a>



                </div>
              </div>

            </div>
          </div>

          <div className=" col-md-6" >
            <div className="contact-card">
              <h2 className="contact-sub-head connect">Connect</h2>
              <form action="" className="connect-form" id="connect-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" required placeholder="Your Name" className="form-control"/>
                  <small>This field is required</small>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" required id="email" placeholder="Your Email" className="form-control"/>
                  <small>Fill the above field with valid Email ID.</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" required name="subject" id="subject" className="form-control" placeholder="Subject" />
                  <small>Fill this field</small>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" required id="message" className="form-control" placeholder="Your Message"></textarea>
                  <small>Fill this field with your Message/Comments</small>
                </div>
                <button className="btn my-1 btn-dark" type="submit" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </section>
    </>
}
export default ContactUs;