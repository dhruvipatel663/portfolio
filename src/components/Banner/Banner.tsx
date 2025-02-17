"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BannerType = {
  fields: {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
  };
};

const Banner = (props: BannerType) => {
  if (!props.fields) return null;
  const { title, description, image } = props?.fields;
  const textAllignment = "left";
  let classTextAlign;
  if (textAllignment && textAllignment.toString() === "left") {
    classTextAlign = "flex-row";
  } else {
    classTextAlign = "flex-row-reverse";
  }
  return (
    <div
      className={`banner-container ${classTextAlign} flex flex-wrap text-white flex items-center justify-center w-full min-h-[450px] p-[25px] mb-[20px]`}
    >
      <div className="banner-text md:basis-1/2 p-[15px]">
        {title && (
          <h2 className="banner-headline md:text-5xl text-4xl">{title}</h2>
        )}
        {description && <p className="banner-detail my-[5px]">{description}</p>}
        <div className="download-container-banner">
          <button className="button secondary-button !p-0">
            <Link
              href="/PDFs/Dhruvi Patel-Resume.pdf"
              download="Dhruvi Patel_Resume"
              className="flex flex-wrap gap-2"
              target="_blank"
            >
              <Image
                src="/images/download.png"
                alt="download-img"
                width={25}
                height={25}
                priority
              />
              Resume
            </Link>
          </button>
        </div>
      </div>
      {image && (
        <div className="banner-image md:basis-1/2 p-[15px]">
          <Image
            src={image}
            alt="banner-img"
            width={500}
            height={500}
            className="img m-auto"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
