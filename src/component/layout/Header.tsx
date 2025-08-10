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
        <Link href="/" className="flex md:hidden lg:justify-start w-[190px]">
          <Image
            src={logo}
            quality={100}
            sizes="100vw"
            className="object-contain w-full h-auto"
            alt="Technova logo."
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
                className={`cursor-pointer -mt-10 text-base tracking-wide transition-all duration-300 ${
                  index == 2 &&
                  "bg-gradient-to-b from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium px-4 py-2 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 border-0"
                } ${
                  index == 0 &&
                  "border-[#532595] border-[2px] px-6 py-2 rounded-full"
                }`}
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

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[99998] md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#1a0d2e] via-[#2d1b4e] to-[#4a2a7a] z-[99999] md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-purple-400/20">
                  <div className="flex items-center space-x-3">
                    <Link href="/" className="flex lg:justify-start w-[210px]">
                      <Image
                        src={logo}
                        quality={100}
                        sizes="100vw"
                        className="object-contain w-full h-auto"
                        alt="Technova logo."
                      />
                    </Link>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => {
                      if (index === 1) return null;

                      return (
                        <motion.li
                          key={link.item}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.link}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group ${
                              pathname === link.link
                                ? "bg-purple-600/30 border-l-4 border-purple-400"
                                : "hover:bg-purple-500/20"
                            } ${
                              index === 2
                                ? "bg-gradient-to-r from-purple-600/30 to-purple-700/30 border border-purple-400/30"
                                : ""
                            }`}
                          >
                            <div className="flex-shrink-0">
                              {index === 0 && (
                                <svg
                                  className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                  />
                                </svg>
                              )}
                              {index === 2 && (
                                <svg
                                  className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                  />
                                </svg>
                              )}
                            </div>
                            <div className="flex-1">
                              <span className="text-white font-medium text-base group-hover:text-purple-100 transition-colors">
                                {link.item}
                              </span>
                            </div>
                            <div className="flex-shrink-0">
                              <svg
                                className="w-4 h-4 text-purple-400 opacity-60 group-hover:opacity-100 group-hover:text-white transition-all"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-purple-400/20">
                  <div className="text-center text-purple-300 text-sm">
                    <p>© 2025 TechNova</p>
                    <p className="mt-1 text-xs opacity-70">
                      Empowering Innovation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
