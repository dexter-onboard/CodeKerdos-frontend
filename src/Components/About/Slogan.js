import "./Slogan.css"
import IconCloudDemo from "./IconCloudDemo";
import MarqueeDemo from "./MarqueeDemo";
export default function Slogan() {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>About Us</h2>
                </div>
                <div className="text">AtCodeKerdos,
                  we empower college students with comprehensive coding education through live,
                 interactive webinars in Hindi and English.
                  Our platform makes coding accessible to all, regardless of language or skill level.We provide 12/6 personalized support, ensuring every student has the resources to succeed.
                  Beyond teaching, we offer aunique internship placement program that connects students with real-world experience, helping them launch successful careers in the tech industry.</div>
                <div className="text">
                  <p>
                   Our vision
                    is to create an inclusive learning environment where every student, regardless of their background or circumstances, has the opportunity to succeed in coding.
                    We are committed to complete transparency and providingpersonalized guidance,
                    ensuring no student is left behind. Through individualized support, root cause analysis for those facing difficulties, and continuous mentorship, we empower aspiring
                   coders to achieve their dreams with confidence, one step at a time.
                  </p>
                </div>
                <div className="btn-box">
                  <a href="/" className="theme-btn btn-style-one">Contact Us</a>
                </div>
              </div>
            </div>

            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">              
                <figure className="image-1">
                  <IconCloudDemo />
                </figure>

              </div>
            </div>

          </div>
          <div className="sec-title mt-[10rem]">
                  <hr/>
            <h2 className="text-black"> <i
              className="text-[#3B81F6] fa-solid fa-award"></i> What <span style={{ textDecoration: 'underline', textDecorationColor: '#3B81F6' }}>value's</span> will you receive from our platform<span classNameName="text-white">?</span></h2>
              <p className="text-[2rem]">From Zero to Code '<span className="text-[#3B81F6]"><strong>HERO</strong></span>' with '<span className="text-[#3B81F6]"><strong>CodeKerdos</strong></span>' and Bridging the Gap Between Learning & Earning. So, <span className="text-[#3B81F6]"><strong>Learn Today</strong></span>,<span className="text-[#3B81F6]"><strong>Earn Tomorrow</strong></span>. </p> 
          </div>
          <MarqueeDemo />
        </div>
      </section>
    </>
  );
}
