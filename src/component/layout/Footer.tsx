import Link from "next/link";
import { Globe, X, Instagram, Facebook, Mail } from "lucide-react";
import Image from "next/image";
import logo from "../../../public/TECHNOVA_LOGO.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8">
          <div className="flex items-center space-x-4 mb-6 sm:mb-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center">
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

        {/* Separator Line */}
        <div className="border-t border-[0.25px] border-[#1C1231] my-8"></div>

        {/* Bottom Section - Social Media Icons */}
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:technovasummit@gmail.com"
            aria-label="Email"
            className="text-[#CC99FD] transition-colors"
          >
            <Mail className="h-16 w-11" />
          </a>
          <Link
            href="https://x.com/technovasummit"
            aria-label="X (Twitter)"
            className="text-[#CC99FD] transition-colors"
          >
            <X className="h-16 w-11" />
          </Link>
          <Link
            href="https://www.instagram.com/technovasummit"
            aria-label="Instagram"
            target="_blank"
            className="text-[#CC99FD] transition-colors"
          >
            <Instagram className="h-16 w-11" />
          </Link>
          <Link
            href="https://www.facebook.com/share/1LW8rw2wY9/"
            aria-label="Facebook"
            className="text-[#CC99FD] transition-colors"
          >
            <Facebook className="h-16 w-11" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
