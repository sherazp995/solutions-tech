import Image from "next/image";
import React from "react";

const OurProcess: React.FC = () => {
  return (
    <section className="our-process">
      <div className="container w-container">
        <div className="home-page-heading">
          <h1 className="h2 center _22">
            Our Secret Sauce For Startup Success
          </h1>
          <p className="paragraph hero black">
            Perform <strong>Low Risk, High Leverage</strong> activities, so your
            customers are not surprised by outcomes
          </p>
        </div>
      </div>
      <div className="container m w-container">
        <div className="div-block-79">
          <h1 className="heading-26">01</h1>
          <h1 className="heading-27">Discovery</h1>
        </div>
        <div className="div-block-79">
          <h1 className="heading-26">02</h1>
          <h1 className="heading-27">Planning</h1>
        </div>
        <div className="div-block-79">
          <h1 className="heading-26">03</h1>
          <h1 className="heading-27">Continuous Iteration</h1>
        </div>
        <div className="div-block-79">
          <h1 className="heading-26">04</h1>
          <h1 className="heading-27">Execution &amp; Delivery</h1>
        </div>
      </div>
      {/* <Image
        src="/images/659ea87b14dbb0d3a32dbf49_Frame 1000004908-p-2000.png"
        loading="lazy"
        sizes="100vw"
        width="100vw"
        alt=""
        className="image-65"
      /> */}
      <img
        src="images/659ea87b14dbb0d3a32dbf49_Frame 1000004908-p-2000.png"
        loading="lazy"
        sizes="100vw"
        srcSet="
          659ea87b14dbb0d3a32dbf49_Frame%201000004908-p-500.png   500w,
          659ea87b14dbb0d3a32dbf49_Frame%201000004908-p-800.png   800w,
          659ea87b14dbb0d3a32dbf49_Frame%201000004908-p-1080.png 1080w,
          659ea87b14dbb0d3a32dbf49_Frame%201000004908-p-1600.png 1600w,
          659ea87b14dbb0d3a32dbf49_Frame%201000004908-p-2000.png 2000w,
          659ea87b14dbb0d3a32dbf49_Frame%201000004908-p-2600.png 2600w,
          659ea87b14dbb0d3a32dbf49_Frame%201000004908.png        2766w
        "
        alt=""
        className="image-65"
      />
    </section>
  );
};

export default OurProcess;
