import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineGlobal,
  AiOutlineGithub,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="text-center animate__animated animate__bounceIn">
        Get In Touch
      </h1>

      <div className="container my-5 animate__animated animate__zoomIn">
        <div className="row">
          <div className="container col-lg-6 mb-5">
            <div>
              <p className="h4">Email:</p>
              <p>russelltelen@gmail.com</p>
            </div>
            <div>
              <p className="h4">Phone:</p>
              <p>778-869-2774</p>
            </div>
            <div>
              <p className="h4">Follow:</p>
              <div className="row">
                <a
                  href="https://www.instagram.com/russtelen/"
                  className="col-2 "
                >
                  <AiOutlineInstagram size={45} />
                </a>
                <a
                  className="col-2 "
                  href="https://www.instagram.com/russtelen/"
                >
                  <AiOutlineFacebook size={45} />
                </a>
                <a className="col-2 " href="https://www.russtelen.me/">
                  <AiOutlineGlobal size={45} />
                </a>
                <a className="col-2 " href="https://github.com/russtelen">
                  <AiOutlineGithub size={45} />
                </a>
              </div>
            </div>
          </div>

          <div className="container col-lg-6">
            <form className="contact__form" name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-sm btn-light">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
