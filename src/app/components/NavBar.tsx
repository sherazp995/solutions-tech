"use client";

import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import MegaMenu from "./MegaMenu";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const navRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const colorChange = () => {
      const show = window.scrollY >= window.innerHeight - 50;
      setDark(!show);
    };

    window.addEventListener("scroll", colorChange);

    return () => window.removeEventListener("scroll", colorChange);
  }, [dark]);

  return (
    <>
      <nav
        ref={navRef}
        className={
          (dark ? "" : "bg-white shadow-xl") +
          " design-grid sticky top-0 left-0 right-0 z-50"
        }
      >
        <div className="col-start-1 col-span-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img className="h-8" src="images/logo.svg" alt="Workflow" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className={
                    (dark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-800 hover:text-accent-500") +
                    " px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Home
                </a>

                <a
                  href="#"
                  className={
                    (dark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-800 hover:text-accent-500") +
                    " px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  About
                </a>

                <a
                  href="#"
                  className={
                    (dark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-800 hover:text-accent-500") +
                    " px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Portfolio
                </a>

                <MegaMenu dark={dark} />

                <a
                  href="#"
                  className={
                    (dark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-800 hover:text-accent-500") +
                    " px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Services
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div
            className={
              (dark ? "" : "bg-gray-500") +
              " md:hidden col-span-12 col-start-1 fixed z-50"
            }
            style={{ top: navRef.current?.clientHeight || 0 }}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Portfolio
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
