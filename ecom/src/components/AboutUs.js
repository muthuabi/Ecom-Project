import logo from '../logo.svg';
const AboutUs=(props)=>{
    return(

    <section id="about-us">
      <h2 className="section-head">About Us</h2>
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <div className="img-outer rounded-bottom">
            <img src={logo} alt="Image Not Loaded" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 my-4">
          <div className="sub-content">
            <h2 className="sub-head-text">React Js</h2>
            <p className="text-justify">Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nam culpa
              vel at delectus voluptatem amet perspiciatis
              ducimus ut rem, nesciunt esse accusantium et,
              repellat facere dicta assumenda vero! Conseq
              uatur explicabo et dolorum facilis voluptatib
              us nobis deserunt placeat inventore nostrum?
              Cum architecto sint nesciunt enim porro rat
              ione voluptas dolorum error delectus.
            </p>
            <p className="text-justify">Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nam culpa
              vel at delectus voluptatem amet perspiciatis
              ducimus ut rem, nesciunt esse accusantium et,
              repellat facere dicta assumenda vero! Conseq
              uatur explicabo et dolorum facilis voluptatib
              us nobis deserunt placeat inventore nostrum?
              Cum architecto sint nesciunt enim porro rat
              ione voluptas dolorum error delectus.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default AboutUs;