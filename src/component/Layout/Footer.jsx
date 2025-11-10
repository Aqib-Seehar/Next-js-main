// src/components/Layout/Footer.jsx (NEW COMPONENT)

import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* 1. Newsletter Section (Dark Blue Background) */}
      <div className="bg-blue-600  py-8">
        {/* Constrain and Center Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-0">
            Subscribe To Our Newsletter
            <p className="text-xs text-white font-sans font-extralight">
              Sign up today Writing copy is time-consuming and difficult.
              Headlinme's artificial intelligence can take your thoughts
            </p>
          </h1>

          <div className="bg-white flex w-full md:w-auto rounded-md overflow-hidden py-1.5 px-1.5">
            {" "}
            {/* Removed 'border' and added 'overflow-hidden' for clean rounded corners */}
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-2 w-full md:w-80 rounded-l-md text-sm text-gray-900 border border-transparent  outline-none" // Added rounded-l-md and outline-none
            />
            <button
              className="bg-gray-800 text-white px-4 py-1.5 text-sm font-medium hover:bg-gray-700 transition rounded-md" // Adjusted padding (py-1.5), background, and removed rounded-r
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links Section (Darker Background) */}
      <div className="bg-[#111827] py-12">
        {/* 💡 Constrain and Center Content (max-w-7xl mx-auto) */}
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10 mb-8">
            {/* Logo/Description Column */}
            <div className="col-span-2 md:col-span-2 space-y-4">
              <div className="text-lg font-bold text-white">SILVER RIVER</div>
              <p className="text-xs text-white leading-relaxed max-w-md">
                Silver River Motor Company offers quality vehicles and trusted
                services, making car buying transparent, convenient, and
                reliable. We make it easy for every customer!
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white">
                    Search Vehicle
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Center Column */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Help Center</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 ml-1">
                Connect
              </h4>

              <div className="flex items-center space-x-2">
                {/* Your SVG Icon */}
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                  />
                </svg>

                {/* The Text Element */}
                <span className="text-gray-800 dark:text-white">
                  888-418-1212
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-4 ml-1 my-6">
                  Follow Us
                </h4>
              </div>
              <div className="flex items-center space-x-2">
                {/* Your SVG Icon */}

                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                    clip-rule="evenodd"
                  />
                </svg>

                {/* The Text Element */}
              </div>
              {/* Social Icons Placeholder */}
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="flex justify-between items-center text-xs text-white">
            <span>
              Copyright © 2025 Silver River Motor. All Rights Reserved.
            </span>
            <div className="space-x-4">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
