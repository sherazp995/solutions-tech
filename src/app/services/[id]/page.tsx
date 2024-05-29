"use client";

import { useState } from "react";
import { services } from "@/data";
import TypingAnimation from "./components/TypingAnimation";

export default function Services({ params }: { params: { id: number } }) {
  const id = params.id;
  const [service, setService] = useState(services.find((s) => s.id == id));

  return (
    <main>
      <section className="bg-accent pb-40">
        <div className="design-grid pt-12 lg:pt-24 pb-24 lg:pb-36">
          <div className="col-span-12 col-start-1 flex flex-col items-center justify-center text-center">
            <h1 className="text-white font-bold text-4xl">{service?.title}</h1>
            <h3 className="mt-4 text-white text-2xl">
              <span className="text-warning typed" id="type-example-1">
                Web Development
              </span>
              <span className="typed-cursor" aria-hidden="true">
                |
              </span>
            </h3>
            <div className="mt-5 flex space-x-4">
              <a
                className="btn btn-lg bg-warning text-black py-2 px-4 flex items-center space-x-2"
                href="/hire-us"
              >
                <span>Hire Us</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right feather-icon"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </a>
              <a
                className="btn btn-lg bg-white text-black py-2 px-4"
                href="/about"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="shape-container shape-position-bottom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z"></path>
          </svg>
        </div>
      </section>
      <section className="design-grid bg-white pb-16">
        <div className="col-span-12 col-start-1 relative z-10">
          <div className="flex flex-wrap">
            {service?.features.map((feature, index) => {
              return (
                <div
                  className="w-full sm:w-1/2 lg:w-1/4 mt-10 sm:mt-0"
                  key={`feature${index}`}
                >
                  <div className="card rounded-xl transform mx-3 bg-white border border-gray-300 hover:translate-y-[-10px] sm:mt-[-10rem] hover:shadow-lg mb-10 lg:mb-0">
                    <div className="card-body p-6">
                      <div className="pb-8">
                        <img
                          alt="#"
                          src={feature.image}
                          className="h-12 w-12"
                        />
                      </div>
                      <div className="pb-3">
                        <h5 className="text-lg text-accent-950 pb-5 font-semibold">
                          {feature.title}
                        </h5>
                        <p className="text-gray-400 mb-0">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="service-title relative z-0 h-screen">
        <div
          className="bg-image -z-10"
          style={{
            backgroundImage:
              "url(https://bitsclan.com/wp-content/uploads/2019/12/mobile-desktop-01-scaled-1.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "cover",
            backgroundAttachment: "scroll",
          }}
        ></div>
        <div className="design-grid z-10 h-full">
          <div className="col-span-12 col-start-1 flex items-center">
            <div className="w-full md:w-1/2">
              <h1
                className="text-5xl pb-1 font-semibold"
                style={{ lineHeight: "60px" }}
              >
                Cloud-Based Web Applications Development
              </h1>
              <hr className="border-accent-600 bg-accent-600 w-1/2 h-2" />
              <p>Rigorously Built Responsive Websites</p>
            </div>
          </div>
        </div>
      </section>
      <section className="design-grid bg-accent-600">
        <div className="col-span-12 col-start-1 pt-9 pb-6">
          <div className="pl-3 border-l-8 border-l-accent-100">
            <h3 className="text-3xl font-semibold mb-4 text-accent-100">
              Cloud-Based Web Applications Development
            </h3>
            <div className="flex flex-col gap-3 text-lg text-accent-100">
              <p>
                Just putting colorful icons and themes to built-up a website
                does not guarantee success. It requires diligent work in
                preparation, scheduling, customization, and targeting.
              </p>
              <p>
                Our efficient Web App Developers work on the immaculate and
                well-designed website with the proficient content, catchy
                layouts and smooth navigation to empower your brand identity and
                compel more people.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="design-grid py-8">
        <div className="col-span-12 col-start-1">
          <div className="flex flex-col gap-8">
            {service?.categories.map((category, index) => {
              return (
                <div className="w-full" key={`category${index}`}>
                  <div
                    className={`flex flex-wrap flex-col-reverse ${
                      index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full md:w-1/2 p-4">
                      <div className="text-left">
                        <h3 className="text-2xl font-bold mb-4 text-accent-950">
                          {category.title}
                        </h3>
                        <div className="flex flex-col gap-5 text-accent-900">
                          {category.sections.map((section, i) => {
                            return <p key={`section${i}`}>{section}</p>;
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                      <img
                        className="max-w-full h-auto"
                        src={category.image}
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
