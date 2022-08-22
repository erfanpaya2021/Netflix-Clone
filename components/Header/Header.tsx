import { FC, useState, useEffect } from "react";
import Image from "next/image";

import { IMAGES, SOLID_ICONS } from "@/constants/index";

import { Navbar } from "./Navbar";
import Link from "next/link";

const { SearchIcon, BellIcon } = SOLID_ICONS;

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      {/* LeftSide = Netflix Logo + Navbar Links */}
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* Netflix Logo */}
        <Image
          src={IMAGES.NetflixLogo}
          alt="netflix logo"
          width={100}
          height={50}
          objectFit={"contain"}
        />

        {/* Navbar Links */}
        <Navbar />
      </div>

      {/* RightSide - Icons */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden w-6 h-6 cursor-pointer sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="hidden w-6 h-6 cursor-pointer sm:inline" />
        <Link href="/account">
          <a>
            <Image
              src={IMAGES.AccountLogo}
              width={32}
              height={32}
              className="cursor-pointer rounded"
            />
          </a>
        </Link>
      </div>
    </header>
  );
};
