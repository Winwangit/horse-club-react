import '../css/Team.css'
import { FaInstagram, FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";

function Team() {
  return (
    <section className="team-section" id="team">
      <div className="title">
        <p className="title-sub">team</p>
        <h2 className="title-main">our team</h2>
      </div>
      <div className="team-members-container">

        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img src="/images/staff-irene.jpg" alt="A head-shot of Irene" className="team-member-image"/>
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Irene Mutuku</h3>
            <p className="team-member-position">CEO, Founder</p>
            <div className="team-member-socials">
              <a href="#" target="_blank" className="team-member-social-url"><FaInstagram /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaTwitter /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaGoogle /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaFacebook /></a>
            </div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img src="/images/staff-brian.jpg" alt="A head-shot of Brian" className="team-member-image"/>
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Brian Nzioka</h3>
            <p className="team-member-position">horse groomer</p>
            <div className="team-member-socials">
              <a href="#" target="_blank" className="team-member-social-url"><FaInstagram /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaTwitter /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaFacebook /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaGoogle /></a>
            </div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img src="/images/staff-babra.jpg" alt="A head-shot of Babra" className="team-member-image"/>
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Babra Obare</h3>
            <p className="team-member-position">IT Support</p>
            <div className="team-member-socials">
              <a href="#" target="_blank" className="team-member-social-url"><FaInstagram /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaTwitter /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaFacebook /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaGoogle /></a>
            </div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img src="/images/staff-george.jpg" alt="A head-shot of George" className="team-member-image"/>
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Fleeky George</h3>
            <p className="team-member-position">horse trainer</p>
            <div className="team-member-socials">
              <a href="#" target="_blank" className="team-member-social-url"><FaInstagram /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaTwitter /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaFacebook /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaGoogle /></a>
            </div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img src="/images/staff-linnet.jpg" alt="A head-shot of Linnet" className="team-member-image"/>
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Linnet Wanjiku</h3>
            <p className="team-member-position">Human Resource</p>
            <div className="team-member-socials">
              <a href="#" target="_blank" className="team-member-social-url"><FaInstagram /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaTwitter /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaFacebook /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaGoogle /></a>
            </div>
          </div>
        </div>

        <div className="team-member-card">
          <div className="team-member-image-wrapper">
            <img src="/images/staff-joshua.jpg" alt="A head-shot of Joshua" className="team-member-image"/>
          </div>
          <div className="team-member-information">
            <h3 className="team-member-name">Joshua Kimani</h3>
            <p className="team-member-position">horse sanctuary</p>
            <div className="team-member-socials">
              <a href="#" target="_blank" className="team-member-social-url"><FaInstagram /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaTwitter /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaFacebook /></a>
              <a href="#" target="_blank" className="team-member-social-url"><FaGoogle /></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Team;
