import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants/contants";
import { link } from "fs";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-center gap-6">
          <Image 
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-obtain"
          />
          <p className="text-base text-gray-700">
            Tellso CarHub 2023 
            <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((items) => (
                <Link
                  key={items.title}
                  href={items.url}
                  className="text-gray"
                >
                  {items.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>© 2023 All Rights Reserved, Tellso CarHub</p>
          <div 
            className="footer__copyrights-link">
            <Link 
              href="/"
              className="text-gray-500"
            >
              Privacy policy
            </Link>
            <Link 
              href="/"
              className="text-gray-500"
            >
              Terms of use
            </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer