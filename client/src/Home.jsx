import {BrowserRouter as Router, Link, } from 'react-router-dom';
import './Home.css'
import gymvideo from './assets/gymvideo.mp4'

import Rectangle63 from './assets/Rectangle 63.png'
import Rectangle69 from './assets/Rectangle 69.png'
import Rectangle73 from './assets/Rectangle 73.png'
import Rectangle74 from './assets/Rectangle 74.png'
import Ellipse10 from './assets/Ellipse 10.png'
import Ellipse12 from './assets/Ellipse 12.png'
import Ellipse13 from './assets/Ellipse 13.png'
import Rectangle10 from './assets/Rectangle 10.png'
import Rectangle75 from './assets/Rectangle 75.png'
import Rectangle70 from './assets/Rectangle 70.png'
import Rectangle76 from './assets/Rectangle 76.png'
import Rectangle77 from './assets/Rectangle 77.png'
import Rectangle80 from './assets/Rectangle 80.png'
import Facebook from './assets/Facebook.png'
import Instagram from './assets/Instagram.png'
import Whatsapp from './assets/Whatsapp.png'
import Gmail from './assets/Gmail Logo.png'

function Home(){
    return(
//         <div>
      
     

//       <nav class="navbar navbar-expand-sm fixed-top bg-dark">
//   <div class="container-fluid">
//     <a class="navbar-brand text-white fw-bold " href="#">BEING<span className='title'>FIT</span></a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav ms-auto">
        
//         <li class="nav-item">
//           <Link class="nav-link text-white " aria-current="page" to="/">Home</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link text-white" href="#">About</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link text-white" to="/Trainers">Trainers</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link text-white" href="#">Contact</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link text-white" to="/Packages">Packages</Link>
//         </li>
//         <li class="nav-item">
//         <Link class="nav-link" to="/Login">
//         <button >login</button>

//         </Link>
        
        

//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

// <video src={gymvideo} controls autoPlay loop/>


// </div>

<div className="desktop">
<div className="div">
    <div className="overlap">
        <div className="group">
            <div className="overlap-group">
                <p className="BEFIT">
                    <span className="text-wrapper">BE</span>
                    <span className="span">FIT</span>
                </p>
            </div>
        </div>
        <div className="navbar ">
            <Link className="text-wrapper-2" to='/'>HOME</Link>
            <Link className="text-wrapper-3">ABOUT US</Link>
            <Link className="text-wrapper-3">SERVICES</Link>
            <Link className="text-wrapper-3">PACKAGES</Link>
            <Link className="text-wrapper-3" to='/login'>LOGIN</Link>
        </div>
    </div>
    <div className="group-wrapper">
        <div className="group-2">
            <div className="text-wrapper-4">EASY WITH OUR GYM</div>
            <div className="text-wrapper-5">WORK HARDER,GET STRONGER</div>
        </div>
    </div>
    <div className="overlap-2">
        <div className="text-wrapper-6">ABOUT US</div>
        <img className="rectangle" alt="Rectangle" src={Rectangle63} />
        <p className="at-gym-and-fitness">
            At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life.
            Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym
            equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment
            supplier; we aspired to lead the industry.Two decades later, we are proud to have transformed Gym and
            Fitness into one of Australia&#39;s premier online retailers of fitness equipment. We&#39;ve moved beyond
            just supplying gear – we&#39;ve become advocates for fitness, wellbeing and life enrichment. Our commitment
            to excellence is reflected not only in the quality equipment we provide but also in the lives we&#39;ve
            improved.
        </p>
    </div>
    <div className="overlap-3">
        <div className="frame">
            <div className="text-wrapper-7">Click here</div>
        </div>
        <div className="text-wrapper-8">View more</div>
        <div className="div-wrapper">
            <div className="text-wrapper-7">Click here</div>
        </div>
        <div className="frame-2">
            <div className="text-wrapper-7">Click here</div>
        </div>
        <div className="text-wrapper-9">SERVICES</div>
        <img className="img" alt="Rectangle" src={Rectangle69} />
        <img className="rectangle-2" alt="Rectangle" src={Rectangle73} />
        <img className="rectangle-3" alt="Rectangle" src={Rectangle74} />
        <div className="text-wrapper-10">Personal Training</div>
        <div className="text-wrapper-11">Zumba Classes</div>
        <div className="text-wrapper-12">WorldClass Equipments</div>
        <p className="you-and-your">
            You and your dedicated personal trainer will create a plan that&#39;s tailored to your goals—and together,
            you&#39;ll work to unlock the results you want.
        </p>
        <p className="p">
            You and your dedicated personal trainer will create a plan that&#39;s tailored to your goals—and together,
            you&#39;ll work to unlock the results you want.
        </p>
        <p className="you-and-your-2">
            You and your dedicated personal trainer will create a plan that&#39;s tailored to your goals—and together,
            you&#39;ll work to unlock the results you want.
        </p>
    </div>
    <div className="overlap-4">
        <div className="rectangle-4" />
        <div className="text-wrapper-13">GALLERY</div>
        <img className="rectangle-5" alt="Rectangle" src={Rectangle70} />
        <img className="rectangle-6" alt="Rectangle" src={Rectangle76} />
        <img className="rectangle-7" alt="Rectangle" src={Rectangle77}/>
        <img className="rectangle-8" alt="Rectangle" src={Rectangle75} />
        <img className="rectangle-9" alt="Rectangle" src= {Rectangle10}/>
        <div className="rectangle-10" />
        <div className="text-wrapper-14">TRAINERS</div>
        <div className="group-3">
            <img className="ellipse" alt="Ellipse" src={Ellipse10} />
            <div className="text-wrapper-15">POWER TRAINER</div>
            <div className="text-wrapper-16">NAME : VIJESH</div>
            <div className="text-wrapper-17">EXPERIENCE: 2YEARS</div>
            <div className="text-wrapper-18">CERTIFIED</div>
        </div>
        <div className="group-4">
            <img className="ellipse-2" alt="Ellipse" src={Ellipse12} />
            <div className="text-wrapper-15">MUSCLE TRAINER</div>
            <div className="text-wrapper-19">NAME : SANJU</div>
            <div className="text-wrapper-20">EXPERIENCE: 5YEARS</div>
            <div className="text-wrapper-21">CERTIFIED</div>
        </div>
        <div className="group-5">
            <div className="text-wrapper-15">STRENGTH TRAINER</div>
            <div className="text-wrapper-22">NAME : ARUN</div>
            <div className="text-wrapper-23">EXPERIENCE: 4YEARS</div>
            <div className="text-wrapper-24">CERTIFIED</div>
            <img className="ellipse-3" alt="Ellipse" src={Ellipse13} />
        </div>
        <img className="rectangle-11" alt="Rectangle" src={Rectangle80} />
    </div>
    <div className="overlap-5">
        <div className="rectangle-12" />
        <div className="text-wrapper-25">+918289848688</div>
        <div className="text-wrapper-26">+918289848688</div>
        <div className="text-wrapper-27">Home</div>
        <div className="text-wrapper-28">About Us</div>
        <div className="text-wrapper-29">Services</div>
        <div className="text-wrapper-30">News</div>
        <div className="text-wrapper-31">Quick Links</div>
        <div className="text-wrapper-32">Contact us</div>
        <div className="text-wrapper-33">Follow us</div>
        <div className="text-wrapper-34">Our Location</div>
        <div className="rectangle-13" />
        <p className="text-wrapper-35">Copyright © 2024 Fitness studio - Designed by biju</p>
        <img className="facebook" alt="Facebook" src={Facebook}/>
        <img className="whats-app" alt="Whats app" src={Instagram}/>
        <img className="gmail-logo" alt="Gmail logo" src={Gmail} />
        <img className="instagram" alt="Instagram" src={Whatsapp} />
        <div className="second-floor-thachil">
            Second floor,thachil tower
            <br />
            building,Angamaly,Kochi
            <br />
            Kerala
        </div>
        <div className="text-wrapper-36">befit500@gmail.com</div>
    </div>
</div>
</div>


 
    )
}
export default Home;



// import "./Home.css";

// export const Home = () => {
//     return (
//         <div className="desktop">
//             <div className="div">
//                 <div className="overlap">
//                     <div className="group">
//                         <div className="overlap-group">
//                             <p className="BEFIT">
//                                 <span className="text-wrapper">BE</span>
//                                 <span className="span">FIT</span>
//                             </p>
//                         </div>
//                     </div>
//                     <div className="navbar">
//                         <div className="text-wrapper-2">HOME</div>
//                         <div className="text-wrapper-3">ABOUT US</div>
//                         <div className="text-wrapper-3">SERVICES</div>
//                         <div className="text-wrapper-3">PACKAGES</div>
//                         <div className="text-wrapper-3">CONTACT US</div>
//                     </div>
//                 </div>
//                 <div className="group-wrapper">
//                     <div className="group-2">
//                         <div className="text-wrapper-4">EASY WITH OUR GYM</div>
//                         <div className="text-wrapper-5">WORK HARDER,GET STRONGER</div>
//                     </div>
//                 </div>
//                 <div className="overlap-2">
//                     <div className="text-wrapper-6">ABOUT US</div>
//                     <img className="rectangle" alt="Rectangle" src="rectangle-63.png" />
//                     <p className="at-gym-and-fitness">
//                         At Gym and Fitness, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life.
//                         Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym
//                         equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment
//                         supplier; we aspired to lead the industry.Two decades later, we are proud to have transformed Gym and
//                         Fitness into one of Australia&#39;s premier online retailers of fitness equipment. We&#39;ve moved beyond
//                         just supplying gear – we&#39;ve become advocates for fitness, wellbeing and life enrichment. Our commitment
//                         to excellence is reflected not only in the quality equipment we provide but also in the lives we&#39;ve
//                         improved.
//                     </p>
//                 </div>
//                 <div className="overlap-3">
//                     <div className="frame">
//                         <div className="text-wrapper-7">Click here</div>
//                     </div>
//                     <div className="text-wrapper-8">View more</div>
//                     <div className="div-wrapper">
//                         <div className="text-wrapper-7">Click here</div>
//                     </div>
//                     <div className="frame-2">
//                         <div className="text-wrapper-7">Click here</div>
//                     </div>
//                     <div className="text-wrapper-9">SERVICES</div>
//                     <img className="img" alt="Rectangle" src="rectangle-69.png" />
//                     <img className="rectangle-2" alt="Rectangle" src="rectangle-73.png" />
//                     <img className="rectangle-3" alt="Rectangle" src="rectangle-74.png" />
//                     <div className="text-wrapper-10">Personal Training</div>
//                     <div className="text-wrapper-11">Zumba Classes</div>
//                     <div className="text-wrapper-12">WorldClass Equipments</div>
//                     <p className="you-and-your">
//                         You and your dedicated personal trainer will create a plan that&#39;s tailored to your goals—and together,
//                         you&#39;ll work to unlock the results you want.
//                     </p>
//                     <p className="p">
//                         You and your dedicated personal trainer will create a plan that&#39;s tailored to your goals—and together,
//                         you&#39;ll work to unlock the results you want.
//                     </p>
//                     <p className="you-and-your-2">
//                         You and your dedicated personal trainer will create a plan that&#39;s tailored to your goals—and together,
//                         you&#39;ll work to unlock the results you want.
//                     </p>
//                 </div>
//                 <div className="overlap-4">
//                     <div className="rectangle-4" />
//                     <div className="text-wrapper-13">GALLERY</div>
//                     <img className="rectangle-5" alt="Rectangle" src="rectangle-70.png" />
//                     <img className="rectangle-6" alt="Rectangle" src="rectangle-76.png" />
//                     <img className="rectangle-7" alt="Rectangle" src="rectangle-77.png" />
//                     <img className="rectangle-8" alt="Rectangle" src="rectangle-75.png" />
//                     <img className="rectangle-9" alt="Rectangle" src="image.png" />
//                     <div className="rectangle-10" />
//                     <div className="text-wrapper-14">TRAINERS</div>
//                     <div className="group-3">
//                         <img className="ellipse" alt="Ellipse" src="ellipse-13.png" />
//                         <div className="text-wrapper-15">POWER TRAINER</div>
//                         <div className="text-wrapper-16">NAME : VIJESH</div>
//                         <div className="text-wrapper-17">EXPERIENCE: 2YEARS</div>
//                         <div className="text-wrapper-18">CERTIFIED</div>
//                     </div>
//                     <div className="group-4">
//                         <img className="ellipse-2" alt="Ellipse" src="ellipse-12.png" />
//                         <div className="text-wrapper-15">MUSCLE TRAINER</div>
//                         <div className="text-wrapper-19">NAME : SANJU</div>
//                         <div className="text-wrapper-20">EXPERIENCE: 5YEARS</div>
//                         <div className="text-wrapper-21">CERTIFIED</div>
//                     </div>
//                     <div className="group-5">
//                         <div className="text-wrapper-15">STRENGTH TRAINER</div>
//                         <div className="text-wrapper-22">NAME : ARUN</div>
//                         <div className="text-wrapper-23">EXPERIENCE: 4YEARS</div>
//                         <div className="text-wrapper-24">CERTIFIED</div>
//                         <img className="ellipse-3" alt="Ellipse" src="ellipse-10.png" />
//                     </div>
//                     <img className="rectangle-11" alt="Rectangle" src="rectangle-80.png" />
//                 </div>
//                 <div className="overlap-5">
//                     <div className="rectangle-12" />
//                     <div className="text-wrapper-25">+918289848688</div>
//                     <div className="text-wrapper-26">+918289848688</div>
//                     <div className="text-wrapper-27">Home</div>
//                     <div className="text-wrapper-28">About Us</div>
//                     <div className="text-wrapper-29">Services</div>
//                     <div className="text-wrapper-30">News</div>
//                     <div className="text-wrapper-31">Quick Links</div>
//                     <div className="text-wrapper-32">Contact us</div>
//                     <div className="text-wrapper-33">Follow us</div>
//                     <div className="text-wrapper-34">Our Location</div>
//                     <div className="rectangle-13" />
//                     <p className="text-wrapper-35">Copyright © 2024 Fitness studio - Designed by biju</p>
//                     <img className="facebook" alt="Facebook" src="facebook.svg" />
//                     <img className="whats-app" alt="Whats app" src="whats-app.svg" />
//                     <img className="gmail-logo" alt="Gmail logo" src="gmail-logo.svg" />
//                     <img className="instagram" alt="Instagram" src="instagram.svg" />
//                     <div className="second-floor-thachil">
//                         Second floor,thachil tower
//                         <br />
//                         building,Angamaly,Kochi
//                         <br />
//                         Kerala
//                     </div>
//                     <div className="text-wrapper-36">befit500@gmail.com</div>
//                 </div>
//             </div>
//         </div>
//     );
// };
