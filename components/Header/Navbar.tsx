import { FC } from "react";
import Link from "next/link";

import { NAV_LINKS } from "@/constants/index";

export const Navbar: FC = () => {
  return (
    <nav>
      <ul className="hidden space-x-4 md:flex">
        {NAV_LINKS.map((nav) => (
          <li key={nav.title} className="headerLink normalColorTransition">
            <Link href={nav.path}>
              <a>{nav.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
