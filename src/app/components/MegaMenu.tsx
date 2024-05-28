import React, { useState } from "react";

const MegaMenu = ({ dark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        className={
          (dark
            ? "text-gray-300 hover:text-white"
            : "text-gray-800 hover:text-accent-500") +
          " px-3 py-2 rounded-md text-sm font-medium"
        }
        href="#"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Services
      </a>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-lg z-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 p-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <figure className="w-5 h-5">
                    <img
                      alt="Web Development"
                      src="img/clients/svg/webdev.svg"
                      className="w-full h-full"
                    />
                  </figure>
                  <div>
                    <a
                      href="/web-development"
                      className="block text-lg font-semibold"
                    >
                      Web Development
                    </a>
                    <small className="text-sm text-gray-500">
                      Crafting Your Web Future
                    </small>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <figure className="w-5 h-5">
                    <img
                      alt="E-Commerce Development"
                      src="img/clients/svg/e-com.svg"
                      className="w-full h-full"
                    />
                  </figure>
                  <div>
                    <a
                      href="/e-commerce"
                      className="block text-lg font-semibold"
                    >
                      E-Commerce Development
                    </a>
                    <small className="text-sm text-gray-500">
                      Online Market Excellence
                    </small>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <figure className="w-5 h-5">
                    <img
                      alt="App Development"
                      src="img/clients/svg/appdev.svg"
                      className="w-full h-full"
                    />
                  </figure>
                  <div>
                    <a
                      href="/app-development"
                      className="block text-lg font-semibold"
                    >
                      App Development
                    </a>
                    <small className="text-sm text-gray-500">
                      Innovative App Creations
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4 bg-gray-100">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <figure className="w-5 h-5">
                    <img
                      alt="Software Development"
                      src="img/clients/svg/softdev.svg"
                      className="w-full h-full"
                    />
                  </figure>
                  <div>
                    <a
                      href="/software-development"
                      className="block text-lg font-semibold"
                    >
                      Software Development
                    </a>
                    <small className="text-sm text-gray-500">
                      Next-Gen Software Builds
                    </small>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <figure className="w-5 h-5">
                    <img
                      alt="Digital Marketing"
                      src="img/clients/svg/digital.svg"
                      className="w-full h-full"
                    />
                  </figure>
                  <div>
                    <a
                      href="/digital-marketing"
                      className="block text-lg font-semibold"
                    >
                      Digital Marketing
                    </a>
                    <small className="text-sm text-gray-500">
                      Elevating Your Digital Reach
                    </small>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <figure className="w-5 h-5">
                    <img
                      alt="UI/UX Development"
                      src="img/clients/svg/uicol.svg"
                      className="w-full h-full"
                    />
                  </figure>
                  <div>
                    <a href="/ui-ux" className="block text-lg font-semibold">
                      UI/UX Development
                    </a>
                    <small className="text-sm text-gray-500">
                      Enhancing User Experience
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </span>
  );
};

export default MegaMenu;
