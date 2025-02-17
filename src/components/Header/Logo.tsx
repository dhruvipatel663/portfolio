"use client";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <h1 className="logo-headline">
        <Link href="/">
          Dhruvi&apos;s <span className="logo-span">Portfolio</span>
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
