"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const BackToTop = () => {
  const [visibilityClass, setVisibilityClass] = useState("hidden");
  const [opacity, setOpacity] = useState("0");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisibilityClass("visible");
        setOpacity("1");
      } else {
        setVisibilityClass("hidden");
        setOpacity("0");
      }
    });
  }, []);
  const handleOnClick = (
    e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={(e) => handleOnClick(e)}
      id="button"
      className={`${visibilityClass} opacity-${opacity} w-[50px] h-[50px] p-[5px]`}
    >
      <Image
        src="/images/up-chevron.png"
        alt="up-arraw-img"
        width={50}
        height={50}
        priority
      />
    </div>
  );
};

export default BackToTop;
