import "./Contact.css";
import ActionButton from "../../../components/ActionButton/ActionButton";
import { FaPhoneVolume, FaEnvelopeOpenText, FaLocationDot } from "react-icons/fa6";

export default () => {

  return (
    <section className="theme-primary py-5">
      <div className="container">
        <div className="row py-5 g-4">

          {/* Heading */}
          <div className="col-md-6">
            <div className="h-100 p-2">
              <h6 className="fs-3 text-white">
                <span className="fw-bold">-</span> Contact Us
              </h6>
              <h1 className="fw-bold display-5 text-white my-3">
                Let's <span className="theme-text-secondary">Connect</span> & <span className="theme-text-secondary">Collaborate</span>
              </h1>
              <p className="text-white">Feel free to reach out for project collaborations, freelance work, or any development-related inquiries. I'm always open to discussing new ideas and opportunities.</p>
              <ul type="none" className="m-0 p-0">
                  <li className="mb-4 d-flex align-items-center text-white"><span className="me-3 contact-icons"><FaPhoneVolume /></span>+91 63828 10681</li>
                  <li className="mb-4 d-flex align-items-center text-white"><span className="me-3 contact-icons"><FaEnvelopeOpenText /></span>dhiva106@gmail.com</li>
                  <li className="mb-4 d-flex align-items-center text-white"><span className="me-3 contact-icons"><FaLocationDot /></span>Pudukkottai (Dt), 614624.</li>
              </ul>
            </div>
          </div>

          {/* Button */}
          <div className="col-md-6">
            <div className="h-100 p-2">
              <form className="row g-4 contact-form">
                  <div className="col-md-6">
                    <div className="h-100">
                      <input placeholder="First Name *" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100">
                        <input placeholder="Last Name *" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100">
                      <input placeholder="Email *" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100">
                        <input placeholder="Phone Number *" type="text" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="h-100">
                      <input placeholder="Subject *" type="text" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="h-100">
                        <textarea placeholder="Message *" rows="4" name="" id=""></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="h-100">
                      <ActionButton
                        to="/"
                        text=". Send Message ."
                      />
                    </div>
                  </div>
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
