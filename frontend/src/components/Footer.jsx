import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Intrusion Detection System. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="/about"
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
