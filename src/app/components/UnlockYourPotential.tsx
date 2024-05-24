import React from "react";

const UnlockYourPotential: React.FC = () => {
  return (
    <div className="unlock-your-potential">
      <div className="container _4 w-container">
        <div className="div-block-16">
          <div className="w-row">
            <div className="column w-col w-col-6">
              <div className="w-embed w-iframe">
                <iframe
                  style={{ border: "none" }}
                  width="300"
                  height="300"
                  src="https://rive.app/s/fTDSYGQKZ0iHkIlVI4sSDQ/embed"
                  allowFullScreen
                ></iframe>
              </div>
              <img
                src="65cab724bf07d672a8bd06c9_NewArtboard-Animation12-ezgif.com-video-to-gif-converter.gif"
                loading="eager"
                height="300"
                alt=""
                width="297"
                className="image-95"
              />
            </div>
            <div className="column-2 w-col w-col-6">
              <h1 className="heading-25">
                Unlock Your Potential or Risk Falling Behind!
              </h1>
              <div className="paragraph-medium l">
                <strong>90% of startups fail</strong> within their first year of
                operation.
              </div>
            </div>
          </div>
        </div>
        <div className="columns-11 _2 w-row">
          <div className="column w-col w-col-6">
            <h1 className="h3-new medium">We See Founders Struggle With</h1>
          </div>
          <div className="column-2 w-col w-col-6">
            <ul role="list" className="home-list">
              <li className="paragraph-medium l space">
                Scope goes over time and budget constraints due to execution
                misalignment.
              </li>
              <li className="paragraph-medium l space">
                Faulty planning around UX causes costly rework.
              </li>
              <li className="paragraph-medium l">
                No Plan, around how it will be deployed,
                <br />
                sold and improved over time.
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockYourPotential;
