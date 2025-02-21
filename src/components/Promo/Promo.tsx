"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PromoType = {
  fields: {
    title: string;
    description: string;
    alignImage: string;
    image: string;
    primaryCTALink: string;
    primaryCTAText: string;
    secondaryCTALink: string;
    secondaryCTAText: string;
  };
};

const Promo = (props: PromoType) => {
  if (!props.fields) return null;

  const flexDirection =
    props?.fields.alignImage === "right" ? "flex-row" : "flex-row-reverse";
  const mediaContainerMargin =
    props?.fields.alignImage === "right" ? "md:ml-[-50px]" : "md:mr-[-50px]";
  const promoContainerLeftPadding =
    props?.fields.alignImage === "right" ? "md:pl-[50px]" : "md:pl-[10px]";
  const promoContainerRightPadding =
    props?.fields.alignImage === "right" ? "md:pr-[10px]" : "md:pr-[50px]";

  const {
    title,
    description,
    image,
    primaryCTALink,
    primaryCTAText,
    secondaryCTALink,
    secondaryCTAText,
  } = props?.fields;

  return (
    <div
      className={`promo-container flex ${flexDirection} md:py-[20px] ${promoContainerLeftPadding} ${promoContainerRightPadding}`}
    >
      <div className="content-container md:px-[90px] md:py-[40px] px-[30px] py-[20px] text-justify">
        <h2 className="promo-headline">{title}</h2>
        <p>{description}</p>
        <div className="promo-ctas">
          <Link href={primaryCTALink} target="_blank" rel="noopener noreferrer">
            <button className="primary-button">{primaryCTAText}</button>{" "}
          </Link>
          <Link
            href={secondaryCTALink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="secondary-button">{secondaryCTAText}</button>
          </Link>
        </div>
      </div>
      <div className={`media-container ${mediaContainerMargin}`}>
        <Image src={image} alt="Promo" width={400} height={400} priority />
      </div>
    </div>
  );
};

export default Promo;
