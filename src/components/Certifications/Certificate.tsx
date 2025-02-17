"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CertificateType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const Certificate = (props: CertificateType) => {
  const { id, title, description, image } = props;
  return (
    <div className="certificate-card-container md:w-600 sm:w-400 lg:w:400 sm:w-500 border rounded-3xl">
      <div className="certificate-img">
        <Image src={image} alt="sitecore" width={250} height={250} priority />
      </div>
      <div className="certificate-details">
        <Link href={`/certificates/${id}`}>
          <h2>{title.length > 25 ? `${title.substring(0, 25)}...` : title}</h2>
        </Link>
        <div className="certificate-description">
          <p>{description}</p>
        </div>
      </div>
      <Link
        href={`/certificates/${id}`}
        className="primary-button certificate-btn my-[10px]"
      >
        <button>See Details</button>
      </Link>
    </div>
  );
};

export default Certificate;
