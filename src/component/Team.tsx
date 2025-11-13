import '../css/Team.css'
import {FaInstagram,FaTwitter,FaFacebook,FaGoogle   } from "react-icons/fa";
import staffIrene from '../assets/images/staff-irene.jpg'
import staffBrian from '../assets/images/staff-brian.jpg'
import staffBabra from '../assets/images/staff-babra.jpg'
import staffGeorge from '../assets/images/staff-george.jpg'
import staffLinnet from '../assets/images/staff-linnet.jpg'
import staffJoshua from '../assets/images/staff-joshua.jpg'

function Team(){
    return(
         <section className="team-section" id="team">
      <div className="title">
        <p className="title-sub">team</p>
        <h2 className="title-main">our team</h2>
      </div>
      <div className="team-members-container">
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={staffIrene}
              alt="A head-shot of irene"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Irene Mutuku</h3>
            <p className="team-member-position">CEO, Founder</p>
            <div className="team-member-socials">
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
            <FaTwitter />
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebook/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={staffBrian}
              alt="A head-shot of irene"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Brian Nzioka</h3>
            <p className="team-member-position">horse groomer</p>
            <div className="team-member-socials">
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
               <FaTwitter/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebook/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
              <FaGoogle/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={staffBabra}
              alt="A head-shot of Babra"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Babra obare</h3>
            <p className="team-member-position">IT Support</p>
            <div className="team-member-socials">
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebook/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={staffGeorge}
              alt="A head-shot of Fleeky"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Fleeky George</h3>
            <p className="team-member-position">horse trainer</p>
            <div className="team-member-socials">
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
              <FaTwitter/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebook/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={staffLinnet}
              alt="A head-shot of Linet"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Linnet Wanjiku</h3>
            <p className="team-member-position">Human Resource</p>
            <div className="team-member-socials">
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaInstagram/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebook/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img
              src={staffJoshua}
              alt="A head-shot of joshua"
              className="team-member-image"
            />
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Joshua kimani</h3>
            <p className="team-member-position">horse sanctuary</p>
            <div className="team-member-socials">
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
               <FaInstagram/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaTwitter/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaFacebook/>
              </a>
              <a
                href="https://github.com/Winwangit"
                target="_blank"
                className="team-member-social-url"
              >
                <FaGoogle/>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    )
}
export default Team;