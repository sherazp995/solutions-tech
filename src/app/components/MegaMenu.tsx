import React, { useState } from "react";

const MegaMenu = (props: any) => {
  let { dark } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        className={
          (dark ? "text-gray-300" : "text-gray-800") +
          " hover:text-accent-500 px-3 py-2 rounded-md text-sm font-medium"
        }
        href="#"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Services
      </a>
      {isOpen && (
        <div
          className="absolute mt-2 min-w-72 rounded-lg -left-80 bg-white shadow-lg z-10"
          style={{ width: "40rem" }}
        >
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 py-8 px-10">
              <div className="flex items-start py-4 px-2.5 gap-4">
                <figure className="max-w-14">
                  <img
                    alt="Web Development"
                    src="img/clients/svg/webdev.svg"
                    className="h-12"
                  />
                </figure>
                <div>
                  <a
                    href="/web-development"
                    className="block text-sm font-semibold"
                  >
                    Web Development
                  </a>
                  <small className="text-xs text-gray-500">
                    Crafting Your Web Future
                  </small>
                </div>
              </div>
              <div className="flex items-start py-4 px-2.5 gap-4">
                <figure className="max-w-14">
                  <img
                    alt="E-Commerce Development"
                    src="img/clients/svg/e-com.svg"
                    className="h-12"
                  />
                </figure>
                <div>
                  <a href="/e-commerce" className="block text-sm font-semibold">
                    E-Commerce Development
                  </a>
                  <small className="text-xs text-gray-500">
                    Online Market Excellence
                  </small>
                </div>
              </div>
              <div className="flex items-start py-4 px-2.5 gap-4">
                <figure className="max-w-14">
                  <img
                    alt="App Development"
                    src="img/clients/svg/appdev.svg"
                    className="h-12"
                  />
                </figure>
                <div>
                  <a
                    href="/app-development"
                    className="block text-sm font-semibold"
                  >
                    App Development
                  </a>
                  <small className="text-xs text-gray-500">
                    Innovative App Creations
                  </small>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-8 px-10 bg-gray-100">
              <div className="flex items-start py-4 px-2.5 gap-4">
                <figure className="max-w-14">
                  <img
                    alt="Software Development"
                    src="img/clients/svg/softdev.svg"
                    className="h-12"
                  />
                </figure>
                <div>
                  <a
                    href="/software-development"
                    className="block text-sm font-semibold"
                  >
                    Software Development
                  </a>
                  <small className="text-xs text-gray-500">
                    Next-Gen Software Builds
                  </small>
                </div>
              </div>
              <div className="flex items-start py-4 px-2.5 gap-4">
                <figure className="max-w-14">
                  <img
                    alt="Digital Marketing"
                    src="img/clients/svg/digital.svg"
                    className="h-12"
                  />
                </figure>
                <div>
                  <a
                    href="/digital-marketing"
                    className="block text-sm font-semibold"
                  >
                    Digital Marketing
                  </a>
                  <small className="text-xs text-gray-500">
                    Elevating Your Digital Reach
                  </small>
                </div>
              </div>
              <div className="flex items-start py-4 px-2.5 gap-4">
                <figure className="max-w-14">
                  <img
                    alt="UI/UX Development"
                    src="img/clients/svg/uicol.svg"
                    className="h-12"
                  />
                </figure>
                <div>
                  <a href="/ui-ux" className="block text-sm font-semibold">
                    UI/UX Development
                  </a>
                  <small className="text-xs text-gray-500">
                    Enhancing User Experience
                  </small>
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
