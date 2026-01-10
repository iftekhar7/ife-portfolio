import React, { useRef, useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import MapSection from "./OSMMap";
import { socialIconData } from "../data";

interface FormErrors {
  name?: string;
  email?: string;
}

function Contact() {
  const form = useRef<HTMLFormElement>(null); 
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validationHandler = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name cannot be empty";
    }

    if (!email.trim()) {
      newErrors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }; 
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validationHandler() && form.current) {
      emailjs
        .sendForm(
          "service_118im9r",
          "template_9w2y73m",
          form.current,
          "G810kYjrbq7ffQ8SD"
        )
        .then(
          (result) => {
            toast("Request Completed Successfully", {
              type: "success",
            });
            setMessage("");
            setEmail("");
            setName("");
            console.log(result.text);
          },
          (error) => {
            toast(error.text, {
              type: "error",
            });
            console.log(error.text);
          }
        );
    }
  };

  const handleLinkNavigate = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <React.Fragment>
      <>
        <div className="card responsive-card">
          <div className="card-header">
            <h5 className="text-heading mb-0">Get In Touch With Us</h5>
            <p>
              For more info on how we can deliver your project, and anything
              else feel free to get in touch with us.
            </p>
          </div>
          <div className="card-body ">
            <div className="list">
              <div className="list-item">
                <span className="status">
                  <i className="far fa-location-dot" />
                </span>
                <div className="ml-3">
                  <h6 className="text-sub-heading text-secondary-dark mb-0">
                    Address:
                  </h6>
                  <p className={`text-sm`}>
                    Jharsa Village, Sector 39, Gurugram, Haryana 122003
                  </p>
                </div>
              </div>
              <div className="list-item">
                <span className="status">
                  <i className="far fa-phone"></i>
                </span>
                <div className="ml-3">
                  <h6 className="text-sub-heading text-secondary-dark mb-0">
                    Phone:
                  </h6>
                  <p className={`text-sm `}>+91 762-688-3755</p>
                </div>
              </div>
              <div className="list-item">
                <span className="status">
                  <i className="far fa-envelope"></i>
                </span>
                <div className="ml-3">
                  <h6 className="text-sub-heading text-secondary-dark mb-0">
                    Email:
                  </h6>
                  <p className="text-sm text-primary">
                    mohammadiftekhar120@mail.com
                  </p>
                </div>
              </div>
            </div>
            <h6 className="text-sub-heading text-secondary-dark mt-6">Follow Us</h6>
            <div className="social-links mt-0 mb-4">
              {socialIconData.map((item) =>
                item.isTrue ? (
                  <button
                    key={item.id}
                    onClick={() => handleLinkNavigate(item.sourceLink)}
                    className={`btn btn-sm btn-ghost-outlined`}
                  >
                    <i className={item.icon}></i>
                  </button>
                ) : null
              )}
            </div>
          </div>
          <MapSection />
        </div>
        <div className="card">
          <div className="card-header">
            <h4 className="text-heading mb-0">We Want To Here From You</h4>
            <p>
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          <div className="card-body pb-0">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid-responsive"> 
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your good name?"
                      name="from_name"
                      value={name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                      }
                    />
                    {errors.name && (
                      <span className="error">
                        <i className="fas fa-exclamation-circle"></i>{" "}
                        {errors.name}
                      </span>
                    )}
                  </div>  
                  <div className="form-group">
                    <label className="form-label">Your Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email Address"
                      name="from_email"
                      value={email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                    />
                    {errors.email && (
                      <span className="error">
                        <i className="fas fa-exclamation-circle"></i>{" "}
                        {errors.email}
                      </span>
                    )}
                  </div> 
              </div> 
              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea
                  rows={7}
                  className="form-control"
                  placeholder="What you want to say?"
                  name="message"
                  value={message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setMessage(e.target.value)
                  }
                />
              </div> 
              <div className="card-footer">
                <div className="flex-end w-100">
                  <button
                    type="submit"
                    value="Send"
                    className="btn btn-primary"
                    // disabled={!verified}
                  >
                    Send
                    <i className="fa-regular fa-paper-plane ml-2"></i>

                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </React.Fragment>
  );
}

export default Contact;
