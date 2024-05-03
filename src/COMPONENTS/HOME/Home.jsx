import React  from "react";
import './Home.css';
import Navbar from '../NAVBAR/Navbar';
import Banner from './BANNER/Banner';
import Footer from '../FOOTER/Footer';
import heart from './IMAGES/heart.png';
import child from './IMAGES/child.png';

const Home = () => {
     return (
          <div>
           <Navbar />
           <Banner />
          
           <div className="image-container">
  <div className="image-item">
    <a href="/findDoctors">
      <img src="https://img.freepik.com/free-photo/portrait-female-health-worker_23-2148980792.jpg?t=st=1714051902~exp=1714055502~hmac=2b6695221019e9e19ceaf05b826fc8b7f9df979a54d327cf828a01493ba77b81&w=360" alt="img1" />
      <div className="content">
        <p>Find Doctors Near You</p>
        <p>Free Audio Call</p>
      </div>
    </a>
  </div>
  <div className="image-item">
    <a href="/videoConsult">
      <img src="https://img.freepik.com/free-photo/portrait-doctor-video-call-virtual-appointment-with-patient_58466-15765.jpg?t=st=1714030473~exp=1714034073~hmac=a9699d2eeffa044314134c270c91ffffb957fbc5f2182dd2f45624484af4db5e&w=900" alt="img2" />
      <div className="content">
        <p>Instant Video Consult</p>
        <p>Connect in 60 sec</p>
      </div>
    </a>
  </div>
  <div className="image-item">
    <a href="/medicine">
      <img src="https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-stethoscope-holding-blister-with-pills-looking-it-with-serious-face_141793-46544.jpg?t=st=1714030604~exp=1714034204~hmac=be707a01ed397493b6d70679471c34f331980a54ad4a5fad4ee0f8301073dcb2&w=900" alt="img3" />
      <div className="content">
        <p>Order Medicine</p>
        <p>Get in 2 days</p>
      </div>
    </a>
  </div>
  <div className="image-item">
    <a href="/labtest">
      <img src="https://img.freepik.com/free-photo/view-laboratory-test-tube-samples-with-copy-space_23-2151053764.jpg?t=st=1714030861~exp=1714034461~hmac=bf8d26216be57c890fdf46831592360ff8ca314ce7e77b93a6987bd3dabbc27e&w=360" alt="img4" />
      <div className="content">
        <p>Book Labtest</p>
        <p>Get digital report</p>
      </div>
    </a>
  </div>
  <div className="image-item">
    <a href="/findDoctors">
      <img src="https://img.freepik.com/free-photo/flat-lay-paper-heart-with-paper-hands_23-2148635162.jpg?t=st=1714030984~exp=1714034584~hmac=ec49f4967d515578f00ff5bc20f9ff9909ec8b69f0cfdf11acb89e51501e59dd&w=740" alt="img5" />
      <div className="content">
        <p>Need Any Help</p>
        <p>Click here and solve</p>
      </div>
    </a>
  </div>
</div>
             <h1 className="home-heading">
                Common health issue and cure from specialists
             </h1>
        <div className="image-container-2">
            <div className="image-item-2">
                <img src='https://img.freepik.com/free-vector/woman-skin-problem-vector-illustration_1284-52676.jpg?size=626&ext=jpg&ga=GA1.1.1242019508.1710815286&semt=sph' alt="img" />
            <div className="image-content-2">
                <p>Dermatologist</p>
                <p>acne,pimple,skin</p>
            </div>
            </div>

            <div className="image-item-2">
                <img src='https://img.freepik.com/premium-vector/man-cover-his-sneeze-with-handkerchief-white-background-sneezing-man-green-shirt-with-virus_573942-1758.jpg?w=740' alt="img" />
            <div className="image-content-2">
                <p>Ganarel Physician</p>
                <p>cold,cough,fever</p>
            </div>
            </div>

            <div className="image-item-2">
                <img src='https://img.freepik.com/free-vector/tooth-glyph-style_78370-4792.jpg?t=st=1714199375~exp=1714202975~hmac=e7747f69fdf3c5053066414f0912def696a08e783957981c502649248e4c6aa1&w=740' alt="img" />
            <div className="image-content-2">
                <p>Dentist</p>
                <p>teeth,gum,mouth</p>
            </div>
            </div>

            <div className="image-item-2">
                <img src={heart} alt="img" />
            <div className="image-content-2">
                <p>Cardiologist</p>
                <p>heart health issue</p>
            </div>
            </div>

            <div className="image-item-2">
                <img src={child} alt="img" />
            <div className="image-content-2">
                 <p>Child Sprcialist</p>
                <p>baby not well</p>
            </div>
            </div>
            </div>

        <div className="home-heading-2">
           <p> Why Choose Us! </p>
            <ul> 
                <li>Thousands+ Genuine Doctors</li>
                <li>Thousands+ Happy Patients</li>
                <li>Easy To Use && Trusted</li>
            </ul>
        </div>

           <Footer />
          </div>
     );
};
     export default Home;