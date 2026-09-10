import "./contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { AnalyticsEvents } from "../../analytics/events";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "03ea8a07-b4cf-4757-8748-b917dfa42030");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    // A captcha token is single use, so clear it either way - otherwise the
    // button stays enabled with a token the server will reject next time.
    recaptchaRef.current?.reset();
    setRecaptchaToken(null);

    if (res.success) {
      AnalyticsEvents.contactFormSubmit();
      form.reset();
      alert("Message sent Successfully");
    } else {
      alert(res.message || "Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <section className=" contact" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="col-md-12 mt-3 mb-1 text-center">
          Get in Touch
        </h2>
        <hr />
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="/connect.jpeg"
                    alt="Get in touch with Mirza Zia ul Qamar"
                    className="image"
                    width="474"
                    height="226"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href="https://www.linkedin.com/in/zia-mern-developer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Mirza Zia ul Qamar on LinkedIn"
                      >
                        <BsLinkedin color="blue" size={30} className="ms-2" />
                      </a>
                      <a
                        href="https://github.com/Zia-Ul-Qamar-Tech-Notes"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Mirza Zia ul Qamar on GitHub"
                      >
                        <BsGithub color="black" size={30} className="ms-2" />
                      </a>
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        aria-label="Your name"
                        placeholder="Enter your Name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        aria-label="Your email address"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        aria-label="Your message"
                        placeholder="Write your message"
                        className="mb-3"
                      />
                    </div>

                    <div className="row px-3 recaptcha-row">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_REACT_RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                        onExpired={() => setRecaptchaToken(null)}
                        onErrored={() => setRecaptchaToken(null)}
                      />
                    </div>

                    <div className="row px-3">
                      <button disabled={!recaptchaToken} className="button">
                        SEND MESSAGE
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
