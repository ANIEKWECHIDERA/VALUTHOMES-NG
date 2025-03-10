// app/terms/page.tsx
"use client";

import Navbar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-soft-gray">
        <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-playfair text-deep-navy-blue text-center mb-8"
          >
            Terms and Conditions
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 font-inter text-gray-600"
          >
            <section>
              <h2 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using ValutHomes NG, you agree to be bound by
                these Terms and Conditions. If you do not agree, please do not
                use our services.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-2">
                2. Use of Services
              </h2>
              <p>
                You agree to use ValutHomes NG for lawful purposes only. You may
                not use our platform to engage in fraudulent activities,
                including misrepresentation of property listings.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-2">
                3. Privacy Policy
              </h2>
              <p>
                Your use of ValutHomes NG is also governed by our{" "}
                <a href="/privacy" className="text-rich-gold hover:underline">
                  Privacy Policy
                </a>
                , which outlines how we collect, use, and protect your personal
                information.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-2">
                4. Limitation of Liability
              </h2>
              <p>
                ValutHomes NG is not liable for any damages arising from your
                use of our platform, including but not limited to financial
                losses or property disputes.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-2">
                5. Changes to Terms
              </h2>
              <p>
                We may update these Terms and Conditions from time to time. You
                will be notified of significant changes via email or through a
                notice on our platform.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-poppins font-semibold text-deep-navy-blue mb-2">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, please reach out to
                us at{" "}
                <a
                  href="mailto:support@valuthomesng.com"
                  className="text-rich-gold hover:underline"
                >
                  support@valuthomesng.com
                </a>
                .
              </p>
            </section>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
