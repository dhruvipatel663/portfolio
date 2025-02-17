"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container !text-white flex p-[30px] md:justify-around md:items-initial flex-wrap md:flex-row flex-col">
        <div className="p-[10px] md:border-none border-b border-dashed w-full md:w-auto">
          <div className="text-xl">Follow me:</div>
          <div className="soicial-links flex flex-col gap-4">
            <div className="follow-me-link">
              <Link
                href="https://www.linkedin.com/in/dhruvi-patel-565285190/"
                className="social-link-item underline underline-offset-[5px]"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
            <div className="follow-me-link">
              <Link
                href="https://dhruvipatelblog9.wordpress.com/"
                className="social-link-item underline underline-offset-[5px]"
                target="_blank"
              >
                Technical Blogs
              </Link>
            </div>
            <div className="follow-me-link">
              <Link
                href="https://www.hackerrank.com/profile/dhruvip734"
                className="social-link-item underline underline-offset-[5px]"
                target="_blank"
              >
                Hackerrank
              </Link>
            </div>
          </div>
        </div>
        <div className="logo !text-white p-[10px]">
          <h1 className="logo-headline">
            <Link href="/">
              Dhruvi&apos;s <span className="logo-span">Portfolio</span>
            </Link>
          </h1>
        </div>
        {/* <Logo /> */}
      </div>
    </>
  );
};

export default Footer;
