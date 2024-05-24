import Image from "next/image";
import CanvasAnimation from "./CanvasAnimation";

export default function HeroSection() {
  return (
    <div
      data-w-id="2079e88b-06ab-8352-ee74-f1d52a092ddb"
      className="hero-section"
    >
      <header id="nav" className="sticky-nav">
        <nav className="w-container">
          <ul role="list" className="nav-grid w-list-unstyled">
            <li id="w-node-_5302d05a-a720-7f31-47f9-684873bdfe4b-8a39f585">
              <img
                src="/images/62a8b7a83bb39854e92f3cd5_Groxup%206421.png"
                loading="lazy"
                width="132"
                alt="Logo White"
              />
            </li>
            <li className="list-item-25">
              <a href="#" className="nav-link selected">
                Home
              </a>
            </li>
            <li className="list-item-24">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="list-item-23">
              <a href="/portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="list-item-22">
              <a href="/services" className="nav-link">
                Services
              </a>
            </li>
            <li className="list-item-20">
              <a
                data-w-id="5302d05a-a720-7f31-47f9-684873bdfe55"
                href="#"
                className="button w-button"
              >
                Get in touch
              </a>
            </li>
            <li
              id="w-node-b62c323f-eeb0-87a4-61e0-3fcf3828c707-8a39f585"
              className="burgermenudark"
            >
              <div
                data-w-id="b62c323f-eeb0-87a4-61e0-3fcf3828c708"
                className="menu dark-back"
              >
                -<br />-<br />-
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <CanvasAnimation />

      <div className="container w-container">
        <div className="home-page-heading hero">
          <div className="we-build">
            <h1 className="heading">Lorem ipsum dolor sit amet consectetur.</h1>
            <h1 className="typed-words"></h1>
          </div>
          <p className="paragraph hero">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            fugit.
          </p>
          <div className="div-block-47">
            <a href="#" className="link-block-9 w-inline-block">
              <div
                data-w-id="6432dee4-33e6-94f8-0b6b-cb6d5597ff7a"
                className="div-block-3 button"
              >
                <div className="text-block">
                  <strong className="bold-text-2">Schedule A Call</strong>
                </div>
                <img
                  src="653fd30890aee72d4e142f2a_Group%201000005589.svg"
                  loading="lazy"
                  data-w-id="6d0fc3d9-e494-da11-138e-97bc873662c6"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
