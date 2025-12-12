"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="flex items-center justify-between max-w-6xl mx-auto px-4 md:flex">
          <Link href="/">
            <h1 className="text-4xl font-bold text-left">
              JP
              <span className="text-secondary">axtor</span>
            </h1>
          </Link>

          <div className="flex items-center justify-center gap-4">
            {" "}
            {/* Reducido a gap-4 */}
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
