"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-container text-white">
        <div className="flex p-[30px] md:justify-around md:items-initial flex-wrap md:flex-row flex-col">
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
              <div className="follow-me-link">
                <Link
                  href="https://github.com/dhruvipatel663"
                  className="social-link-item underline underline-offset-[5px]"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
              <div className="follow-me-link">
                <Link
                  href="https://leetcode.com/u/dhruvi_r_patel/"
                  className="social-link-item underline underline-offset-[5px]"
                  target="_blank"
                >
                  LeetCode
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
        </div>
        <div className="copyright m-auto md:w-[500px] text-center px-[10px] py-[30px]">
          &copy; {currentYear} Dhruvi Patel, All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
