"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    // console.log("clicked:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinksData = [
    {
      id: 1,
      linkURL: "/",
      linkText: "Home",
    },
    {
      id: 2,
      linkURL: "/certificates",
      linkText: "Certificates",
    },
    {
      id: 3,
      linkURL: "/about",
      linkText: "About",
    },
    {
      id: 4,
      linkURL: "/contact",
      linkText: "Contact",
    },
    {
      id: 5,
      linkURL: "/gallery",
      linkText: "Gallery",
    },
  ];

  type NavLink = {
    id: number;
    linkURL: string;
    linkText: string;
  };
  return (
    <>
      <nav className="nav-bar w-full flex lg:justify-between justify-around bg-white px-[30px]">
        <Logo />
        <div
          className={`nav-links hidden md:flex justify-center items-center text-xl`}
        >
          {navLinksData?.map((navlink: NavLink, index: number) => {
            return (
              <Link
                key={index}
                href={navlink?.linkURL}
                className={`${
                  pathname.toLocaleLowerCase() ===
                  navlink?.linkURL.toLocaleLowerCase()
                    ? "nav-link-active"
                    : "nav-link-hover"
                } no-underline nav-link p-[15px]`}
              >
                {navlink?.linkText}
              </Link>
            );
          })}
          <Link
            href="/PDFs/Dhruvi Patel-Resume.pdf"
            download="Dhruvi Patel_Resume"
            className="flex gap-2 primary-button"
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
        </div>

        <div
          className={`hamburger md:hidden ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
        {isMenuOpen && (
          <div
            className={`nav-links md:hidden flex flex-col border-l-[4px] gap-[8px] justify-center text-xl px-[5px] h-[250px]`}
          >
            {navLinksData?.map((navlink: NavLink, index: number) => {
              return (
                <Link
                  key={index}
                  href={navlink?.linkURL}
                  className={`${
                    pathname.toLocaleLowerCase() ===
                    navlink?.linkURL.toLocaleLowerCase()
                      ? "nav-link-active"
                      : "nav-link-hover"
                  } nav-link no-underline`}
                >
                  {navlink?.linkText}
                </Link>
              );
            })}
            <Link
              href="/PDFs/Dhruvi Patel-Resume.pdf"
              download="Dhruvi Patel_Resume"
              className="flex gap-2 primary-button !px-[3px] !text-base"
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
          </div>
        )}
      </nav>
    </>
  );
};
export default Header;
