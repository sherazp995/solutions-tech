"use client";

import Script from "next/script";

export default function CanvasAnimation() {
  return (
    <>
      <canvas
        id="dotted-canvas"
        className="bg-black fixed top-0 -z-10"
      ></canvas>
      <Script src="js/canvasScript.js" />
    </>
  );
}
