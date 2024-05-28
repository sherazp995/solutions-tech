import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { clientReviews } from "../../data";

export default function ClientReviews() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="design-grid pb-28 reaview-section bg-white">
      <div className="col-span-12 col-start-1">
        <div className="text-center mb-28">
          <h6>Why Partner With Us?</h6>
          <h2>What Our Clients Said About Solution Tech</h2>
          <img alt="line" src="images/headingline.png" className="mx-auto" />
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={width > 640 ? 2 : 1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {clientReviews.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="iq-testimonial-info">
                  <div className="iq-testimonial-avtar">
                    <img
                      decoding="async"
                      alt="image-testimonial"
                      className="img-fluid center-block "
                      src={review.image}
                    />
                  </div>
                  <div className="iq-testimonial-details">
                    <div className="xamin-post-ratings">
                      {new Array(review.rating ?? 0).fill(0).map((_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                      ))}
                    </div>
                    <div className="iq-testimonial-content">
                      <p>{review.review}</p>
                    </div>
                    <div className="iq-testimonial-member">
                      <div className="avtar-name">
                        <h5 className="iq-lead">{review.name}, </h5>
                        <span className="iq-post-meta">{review.post}</span>
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
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
