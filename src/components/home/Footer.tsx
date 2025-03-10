// app/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-deep-navy-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">
              ValutHomes NG
            </h3>
            <p className="text-sm font-inter text-soft-gray mb-4">
              Africa’s trusted real estate marketplace with cutting-edge
              technology.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="p-2 rounded-md bg-white text-deep-navy-blue focus:outline-none focus:ring-2 focus:ring-rich-gold"
              />
              <button className="bg-rich-gold text-deep-navy-blue px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-inter text-soft-gray">
              <li>
                <Link href="/properties" className="hover:text-rich-gold">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-rich-gold">
                  Find an Agent
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-rich-gold">
                  Sell Your Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="hover:text-rich-gold"
              >
                <SlSocialFacebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-rich-gold">
                <FaXTwitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="hover:text-rich-gold"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">
              Contact Us
            </h4>
            <p className="text-sm font-inter text-soft-gray">
              Email: support@valuthomesng.com
              <br />
              Phone: +234 800 123 4567
            </p>
          </div>
        </motion.div>
        <div className="mt-8 text-center text-sm font-inter text-soft-gray">
          © {new Date().getFullYear()} ValutHomes NG. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
