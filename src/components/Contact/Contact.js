import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="text-center animate__animated animate__bounceIn">
        Get In Touch
      </h1>

      <div className="container mb-5">
        <form className="contact__form" name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Name</label>
            <input type="text" className="form-control" name="name" required />
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
  );
};

export default Contact;
