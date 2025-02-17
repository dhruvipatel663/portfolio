"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [inputs, setInputs] = useState<FormInputs>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validateForm(inputs);
    // console.log("newErrors:", newErrors);
    setErrors(newErrors);
    // console.log("After seeting new errors:", errors);
    // console.log("newErrors.name:", newErrors.name);
    if (
      newErrors.name === "" &&
      newErrors.email === "" &&
      newErrors.message === ""
    ) {
      //Object.keys(newErrors).length === 0
      // Form submission logic here
      emailjs
        .sendForm("service_7cy3dg4", "template_o73city", form.current || "", {
          publicKey: "A0DeHau9aguf748tt",
        })
        .then(
          () => {
            // console.log("SUCCESS!");
            setSubmitted(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      // console.log("inputs:", inputs);
      // console.log("Form submitted successfully!");
    } else {
      setSubmitted(false);
      // setErrors({ name: "", email: "", message: "" });
      // console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data: FormInputs) => {
    // console.log("data inside validateForm:", data);
    const errors = {
      name: "",
      email: "",
      message: "",
    };
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address.";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    // console.log("errors:", errors);
    return errors;
  };

  return (
    <>
      <div className="md:m-10 m-[5px]">
        <h2 className="text-center font-black text-4xl">Get in Touch</h2>

        <div className="form-container md:grid md:grid-cols-2 md:mx-10 md:min-w-[500px]">
          <div className="form relative bg-white text-center md:m-[5px] m-10 border rounded-2xl border-gray-300 text-white grid">
            <div className="contact-form-container m-auto">
              {!submitted ? (
                <form
                  noValidate
                  className="contact-form"
                  onSubmit={handleSubmit}
                  ref={form}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={inputs.name || ""}
                    // value={name}
                    className="input name-input lg:w-[400px] w-[240px]"
                    // onChange={(e) => setName(e.target.value)}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && (
                    <>
                      <br />
                      <span className="error-message font-red-300">
                        {errors.name}
                      </span>
                    </>
                  )}
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={inputs.email || ""}
                    // value={email}
                    className="input email-input lg:w-[400px] w-[240px]"
                    // onChange={(e) => setEmail(e.target.value)}
                    onChange={handleChange}
                    required
                  />

                  {errors.email && (
                    <>
                      <br />
                      <span className="error-message font-red-300">
                        {errors.email}
                      </span>
                    </>
                  )}
                  <br />
                  <textarea
                    name="message"
                    value={inputs.message || ""}
                    // value={message}
                    placeholder="Message*"
                    className="input message-input lg:w-[400px] w-[240px]"
                    rows={3}
                    // onChange={(e) => setMessage(e.target.value)}
                    onChange={handleChange}
                    required
                  ></textarea>

                  {errors.message && (
                    <>
                      <br />
                      <span className="error-message font-red-300">
                        {errors.message}
                      </span>
                    </>
                  )}
                  <br />
                  <input
                    type="submit"
                    className="primary-button cursor-pointer"
                    value="Send"
                  />
                </form>
              ) : (
                <div>
                  <h2 className="font-black md:text-4xl text-black text-2xl">
                    Thank you for contacting
                  </h2>
                </div>
              )}
            </div>
          </div>
          <div className="bg-red-300 text-center md:m-[5px] m-10 border rounded-2xl border-gray-300">
            <Image
              src="/images/contact-ne.jpg"
              alt="contact"
              width={500}
              height={500}
              className="form-img border rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
