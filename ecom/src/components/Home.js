import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import HomeBg from '../assets/images/home-bg.jpg';
import { Link } from 'react-router-dom';
const Home=()=>{
    return <>
    <section id="home" className='d-flex align-items-center justify-content-center'  >

        <div className="d-flex flex-column align-items-center gap-2">
          {/* <h3>Hey There, I am</h3> */}
          <h1 className="head-name head-role">Welcome to E-Mart</h1>
          {/* <h2 className="head-role">Software Developer</h2> */}
          <p className="lead text-center">
          Where You Can Find Everything!</p>
          <Link to="/store" className="btn btn-lg btn-dark px-5">Go to Store</Link>
        </div>
        
        {/* <div className="col-md-6">
          <div className="img-container rounded-circle ">
            <img src={logo} alt="Image Not Loaded" className="img-fluid"/>
          </div>
        </div> */}
   
    </section>
       <AboutUs/>
       <ContactUs/>
    </>
}
export default Home;