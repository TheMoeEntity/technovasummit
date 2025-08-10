"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/TECHNOVA_LOGO.png";
import HamburgerMenu from "../ui/HamburgerMenu";

const navLinks = [
  { item: "About Us", link: "/about" },
  { item: "", link: "/" },
  { item: "Sponsorship & Enquiries", link: "#" },
];

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute w-full top-0 left-0 z-[10000]">
      <div className="flex w-full lg:flex-col gap-6 justify-between items-center py-4 px-3 m:px-8 lg:px-8">
        {/* Logo (Centered on Mobile, Left on Desktop) */}
        <Link
          href="/"
          className="flex md:hidden lg:justify-start w-[25%] xl:w-auto"
        >
          <Image
            src={logo}
            quality={100}
            sizes="100vw"
            className="object-contain w-full lg:w-[180px] h-auto"
            alt="Amour-Artelia logo."
          />
        </Link>

        {/* Desktop Navigation (Remains Unchanged) */}
        <nav className="hidden lg:mt-5 w-full text-white border-[#DCDCDC] justify-center lg:flex space-x-40 items-center">
          {navLinks.map((link, index) =>
            index == 1 ? (
              <Link
                key={link.item}
                href="/"
                className="flex lg:justify-start w-[25%] xl:w-[26%]"
              >
                <Image
                  src={logo}
                  quality={100}
                  sizes="100vw"
                  className="object-contain w-full h-auto"
                  alt="Technova logo."
                />
              </Link>
            ) : (
              <Link
                key={link.item}
                href={link.link}
                className={`cursor-pointer -mt-10 text-base tracking-wide transition-all duration-300 ${index == 2 && "bg-gradient-to-b from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium px-4 py-2 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 border-0"} ${index == 0 && "border-[#532595] border-[2px] px-6 py-2 rounded-full"}`}
              >
                {link.item}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Menu Button (Visible on Mobile Only) */}
        <HamburgerMenu
          isOpen={menuOpen}
          onToggle={setMenuOpen}
          className="z-[99999] lg:hidden text-xl"
        />
      </div>
      <div
        className={`md:hidden transition-all z-[999999] duration-700 overflow-x-hidden ${
          menuOpen ? "max-h-[490px] py-1" : "max-h-0"
        }`}
      >
        <div className="bg-[var(--artelia-main)] text-white overflow-y-scroll w-full p-5 flex flex-col gap-8">
          <ul className="flex container max-w-[70%] pl-0 font-semibold flex-col gap-4">
            {navLinks.map((link) => (
              <Link href={link.link} key={link.item}>
                <motion.li
                  key={link.item}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMenuOpen(false)}
                  className={`px-5 py-2 ${
                    pathname === link.link
                      ? "font-semibold underline decoration-white underline-offset-4"
                      : ""
                  }`}
                >
                  {link.item}
                </motion.li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* Tab Menu (Only Appears on tabbed Screens) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            style={{ background: "white" }}
            animate={{ x: "30%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 z-[100000] inset-0 bg-white shadow-xl md:flex flex-col items-center justify-center space-y-6 text-lg uppercase hidden xl:hidden"
          >
            {navLinks.map((link) => (
              <motion.div
                className=" w-full pl-13 py-3"
                key={link.item}
                whileTap={{ scale: 0.95 }}
                // onClick={() => setMenuOpen(false)}
              >
                <Link
                  href={link.link}
                  className={`text-gray-700 text-2xl hover:text-black ${
                    pathname === link.link
                      ? "font-semibold underline decoration-black underline-offset-4"
                      : ""
                  }`}
                >
                  {link.item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
