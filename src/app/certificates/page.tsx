import Banner from "@/components/Banner/Banner";
import CertificateLanding from "@/components/Certifications/CertificateLanding";
import React from "react";

const certificates = () => {
  const CertificateBanner = {
    title: "Certificates",
    description: "",
    image: "",
  };
  return (
    <>
      <Banner fields={CertificateBanner} />
      <CertificateLanding />
    </>
  );
};

export default certificates;
