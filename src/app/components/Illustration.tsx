import React, { useState } from "react";

function HoverableItem(props: any) {
  let { id, title, content, label } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={"relative mil-item mil-item-" + id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mil-plus">
        {isHovered && (
          <div className="mil-hover-window">
            <div className="mil-window-content">
              <h5 className="mil-dark mb-4">{title}</h5>
              <div className="mil-divider mb-4" />
              <p className="text-sm">{content}</p>
            </div>
          </div>
        )}
        <div className={"mil-item-hover" + (isHovered ? " hover" : "")}>
          <div className="mil-plus-icon text-2xl">+</div>
          <h6 className="mil-light mt-2">{label}</h6>
        </div>
      </div>
    </div>
  );
}

const Illustration = () => {
  return (
    <div className="w-full xl:w-3/12 mil-illustration-1">
      <HoverableItem
        id={1}
        title="Dedicated Team"
        content="Don't get stuck waiting on your project. We have a dedicated team ready to jump in and work directly with you, using their skills to get things done quickly and smoothly."
        label="Dedicated Team"
      />
      <HoverableItem
        id={2}
        title="Developers"
        content="Our developers turn ideas into reality. We build the technology that powers your vision."
        label="Developers"
      />
      <HoverableItem
        id={3}
        title="Designers"
        content="Our designers bring your vision to life. They create beautiful and user-friendly experiences"
        label="Designers"
      />
    </div>
  );
};

export default Illustration;
