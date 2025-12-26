import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import ActionButton from "../ActionButton/ActionButton";
import { MdSend } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { TbBrandGithubFilled } from "react-icons/tb";


export default () => {
  return (
    <footer className="py-5 bg-white">
      <div className="container">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="h-100">
              <h2 className="fw-bold mt-2">Let's <span className="theme-text-primary">Connect</span> There</h2>
            </div>
          </div>
           <div className="col-md-6">
            <div className="h-100 d-md-flex justify-content-end">
              <div>
              <ActionButton
                to="/"
                text="Hiii, Hire Me Now."
                outerClass="bg-dark"
                iconBg="#fff"
                iconColor="#000"
                textBg="var(--color-secondary)"
                textColor="#000"
              />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="h-100 py-5">
              <hr />
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100">
              <h5 className="fw-bold">DK</h5>
              <p className="text-muted">Building modern, scalable web applications with a focus on clean code and great user experience.</p>
              <p className="text-muted">Creating reliable digital solutions through thoughtful design, efficient development, and continuous learning.</p>
              <div className="d-flex gap-2 mt-4">
                <span className="social-icons"><FaLinkedinIn /></span>
                <span className="social-icons"><TbBrandGithubFilled /></span>
                <span className="social-icons"><BiLogoInstagramAlt /></span>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="h-100">
              <h5 className="theme-text-primary fw-bold mb-4">Navigation</h5>
              <ul type="none" className="m-0 p-0">
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">Home</Link></li>
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">Services</Link></li>
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">About</Link></li>
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">Projects</Link></li>
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">Blogs</Link></li>
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">FAQs</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="h-100">
              <h5 className="theme-text-primary fw-bold mb-4">Contact</h5>
              <ul type="none" className="m-0 p-0">
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">+91 63828 10681</Link></li>
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">developerdhiva.com</Link></li>
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">dhiva106@gmail.com</Link></li>
                  <li className="mb-3"><Link className="text-decoration-none text-muted" to="/">Panagulam North, Alangudi(Tk), Pudukkottai(Dt), 614624.</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="h-100">
              <h5 className="theme-text-primary fw-bold mb-4">Get Latest Information</h5>
              <div className="email-wrap">
                <div className="input-wrap">
                  <input placeholder="Email address" type="text" />
                </div>
                <div className="icon-wrap">
                  <MdSend />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="h-100 py-5">
              <hr />
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100">
              <h5 className="mb-4">Copyright &copy; {new Date().getFullYear()} <span className="theme-text-primary">DK</span>. All Rights Reserved.</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100">
              <h5 className="mb-4 text-md-end">User Terms & Conditions | Privacy Policy</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
