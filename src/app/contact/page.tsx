import Banner from "@/components/Banner/Banner";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";

const contact = () => {
  const ContactBanner = {
    title: "Contact me",
    description: "",
    image: "",
  };

  return (
    <>
      <Banner fields={ContactBanner} />
      <ContactForm />
    </>
  );
};

export default contact;
