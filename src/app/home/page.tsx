"use client";

import { useRef } from "react";
import CanvasAnimation from "../components/CanvasAnimation";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "@headlessui/react";
import Illustration from "../components/Illustration";
import FunFactSection from "../components/FunFactSection";

export default function Home() {
  const facts = [
    { target: "12", duration: 2, suffix: "K+", label: "Project Completed" },
    { target: "20", duration: 2, suffix: "+", label: "Industry Experience" },
    { target: "10", duration: 2, suffix: "K+", label: "Happy Clients" },
    { target: "32", duration: 2, suffix: "+", label: "Awards Winner" },
  ];
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const gotoAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main>
      <CanvasAnimation />
      <section className="design-grid">
        <div className="col-span-12 col-start-1">
          <div className="flex flex-wrap items-center justify-start text-start h-screen">
            <div className="w-full xl:w-9/12">
              <span className="block mb-12 text-xl">
                <span className="text-gray-300">Our</span>{" "}
                <span className="text-accent">Inspiration</span>
              </span>
              <h1 className="mb-8 font-bold leading-tight">
                <span className="uppercase text-gray-300">The</span>{" "}
                <span className="font-bold text-accent">Freedom</span>{" "}
                <span className="uppercase text-gray-300">
                  to focus on <br />
                  improving
                </span>{" "}
                <span className="font-bold text-accent">Your</span>{" "}
                <span className="uppercase text-gray-300">
                  business or idea
                </span>{" "}
              </h1>

              <div className="flex justify-start">
                <Button
                  onClick={gotoAbout}
                  className="btn bg-accent text-white py-2 px-6 rounded-lg"
                >
                  <span>Read More</span>
                </Button>
              </div>
              <p className="text-lg text-gray-400 mt-14">
                <span>
                  Your success is our passion. We take the time to get to know
                  your business,
                  <br /> so we can build something amazing that goes beyond your
                  needs.
                </span>
              </p>
            </div>
            <Illustration />
          </div>
        </div>
      </section>
      <FunFactSection facts={facts} />
      <section ref={aboutRef} className="design-grid pt-28 bg-white">
        <div className="mx-auto col-span-12 col-start-1">
          <div className="flex flex-wrap">
            <div className="hidden sm:block w-full lg:w-1/2">
              <div className="welcome relative mb-20 me-3">
                <img alt="img" src="images/welcome-1.jpg" />
                <img
                  alt="img"
                  className="img-welcome"
                  src="images/welcome-2.jpg"
                />
                <img alt="dots" className="dots" src="images/dots.png" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-16">
              <div className="about-right-content">
                <h2 className="title">ABOUT COMPANY</h2>
                <h3 className="sub-title">
                  Our approach ensures flexibility, adaptability, &amp; rapid
                  response.
                </h3>
                <p className="text">
                  Welcome to Solutions Tech, where innovation meets
                  implementation, &amp; technology transforms possibilities into
                  realities. Established with a vision to redefine the landscape
                  of IT solutions, we are a dynamic and forward-thinking company
                  committed to delivering cutting-edge services.
                  <span>
                    our mission is clear - to provide comprehensive and
                    customized IT solution that align seamlessly with your
                    business objectives. We believe in not just meeting but
                    exceeding expectations.
                  </span>
                </p>
                <div className="ceo-content">
                  <h2>Sania Sajid</h2>
                  <span>CEO &amp; Founder of Solutions Tech</span>
                  <div className="signeture">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className="w-full" alt="line" src="images/line.jpg" />{" "}
      <section className="how-it-works pb-28 bg-white">
        <div className="container mx-auto">
          <div className="heading z-10 relative">
            <h6>How It Works?</h6>
            <h2>
              We Are Strategic-
              <br />
              Creative Digital Agency.
            </h2>
            <img alt="line" src="images/headingline.png" />
          </div>
          <div className="flex flex-wrap py-16">
            <div className="w-full lg:w-1/2">
              <div className="strategic relative z-10">
                <h2 className="text-accent-200">O1/</h2>
                <div className="sm:pl-56">
                  <h4 className="text-accent-950">Planning</h4>
                  <p>
                    Let&apos;s talk about what you have in mind for this
                    project. We&apos;ll figure out what needs to be done and
                    come up with some cool ideas to get us started on the right
                    track.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="strategic relative z-10">
                <h2 className="text-accent-200">O2/</h2>
                <div className="sm:pl-56">
                  <h4 className="text-accent-950">Design & Development</h4>
                  <p>
                    We create user-friendly interfaces for applications, write
                    the code that makes them work, organize data efficiently,
                    and keep everything looking on-brand for a seamless user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="strategic relative z-10">
                <h2 className="text-accent-200">O3/</h2>
                <div className="sm:pl-56">
                  <h4 className="text-accent-950">Testing</h4>
                  <p>
                    We test thoroughly , fix bugs and double-check everything to
                    make sure it runs smoothly and lightning fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="strategic relative z-10">
                <h2 className="text-accent-200">O4/</h2>
                <div className="sm:pl-56">
                  <h4 className="text-accent-950">Launch</h4>
                  <p>
                    Once we&apos;ve rigorously tested everything and made sure
                    the website is running smoothly and efficiently, we&apos;ll
                    be thrilled to launch it! This means the website will be
                    officially live and accessible to everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-28 reaview-section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-28">
            <h6>Why Partner With Us?</h6>
            <h2>What Our Clients Said About Solutions Tech</h2>
            <img alt="line" src="images/headingline.png" className="mx-auto" />
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="iq-testimonial-info">
                <div className="iq-testimonial-avtar">
                  <img
                    decoding="async"
                    alt="image-testimonial"
                    className="img-fluid center-block "
                    src="https://wordpress.iqonic.design/product/wp/xamin-elementor/wp-content/uploads/2019/09/01-min.jpg"
                  />
                </div>
                <div className="iq-testimonial-details">
                  <div className="xamin-post-ratings">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </div>
                  <div className="iq-testimonial-content">
                    <p>
                      My good friend suggested that I purchase this template. I
                      did and was delighted that I got it. Formatting the
                      products now becomes extremely simple, and convenient.
                    </p>
                  </div>
                  <div className="iq-testimonial-member">
                    <div className="avtar-name">
                      <h5 className="iq-lead">Mark McManus, </h5>
                      <span className="iq-post-meta"> COO</span>
                    </div>
                    <div className="iq-testimonial-quote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M0,288h92.48l-32,160h128.624l34.576-172.8L224,64H0V288z M32,96h160v174.4L162.896,416H99.52l32-160H32V96z" />
                              <path d="M288,64v224h92.48l-32,160h128.624l34.576-172.8L512,64H288z M480,270.4L450.896,416H387.52l32-160H320V96h160V270.4z" />
                            </g>
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iq-testimonial-info">
                <div className="iq-testimonial-avtar">
                  <img
                    decoding="async"
                    alt="image-testimonial"
                    className="img-fluid center-block "
                    src="https://wordpress.iqonic.design/product/wp/xamin-elementor/wp-content/uploads/2019/09/04-min.jpg"
                  />
                </div>
                <div className="iq-testimonial-details">
                  <div className="xamin-post-ratings">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </div>
                  <div className="iq-testimonial-content">
                    <p>
                      Happy to purchase your product, I sent them an example of
                      my problem, to my surprise, they sent me an updated
                      template within hours. Thanks to all the folks.
                    </p>
                  </div>
                  <div className="iq-testimonial-member">
                    <div className="avtar-name">
                      <h5 className="iq-lead">Jack White, </h5>
                      <span className="iq-post-meta"> CEO</span>
                    </div>
                    <div className="iq-testimonial-quote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M0,288h92.48l-32,160h128.624l34.576-172.8L224,64H0V288z M32,96h160v174.4L162.896,416H99.52l32-160H32V96z" />
                              <path d="M288,64v224h92.48l-32,160h128.624l34.576-172.8L512,64H288z M480,270.4L450.896,416H387.52l32-160H320V96h160V270.4z" />
                            </g>
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="iq-testimonial-info">
                <div className="iq-testimonial-avtar">
                  <img
                    decoding="async"
                    alt="image-testimonial"
                    className="img-fluid center-block "
                    src="https://wordpress.iqonic.design/product/wp/xamin-elementor/wp-content/uploads/2019/09/03-min.jpg"
                  />
                </div>
                <div className="iq-testimonial-details">
                  <div className="xamin-post-ratings">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </div>
                  <div className="iq-testimonial-content">
                    <p>
                      It was a pleasure using your template. Your template saved
                      us hours of frustration, your template is fabulous. It
                      worked like a champ. Every page was exactly how I wanted.
                    </p>
                  </div>
                  <div className="iq-testimonial-member">
                    <div className="avtar-name">
                      <h5 className="iq-lead">Walhan Bobe, </h5>
                      <span className="iq-post-meta"> Business Advisor</span>
                    </div>
                    <div className="iq-testimonial-quote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <g>
                              <path d="M0,288h92.48l-32,160h128.624l34.576-172.8L224,64H0V288z M32,96h160v174.4L162.896,416H99.52l32-160H32V96z" />
                              <path d="M288,64v224h92.48l-32,160h128.624l34.576-172.8L512,64H288z M480,270.4L450.896,416H387.52l32-160H320V96h160V270.4z" />
                            </g>
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}
