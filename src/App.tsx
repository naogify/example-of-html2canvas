import React from "react";
import "./styles.css";
import html2canvas from "html2canvas";

interface CanvasElement extends HTMLCanvasElement {
  captureStream(): null;
}

export default function App() {
  const container = React.useRef<HTMLDivElement>(null);
  const video = React.useRef<HTMLVideoElement>(null);

  const capturePage = () => {
    console.log("Hello");
    if (!container.current || !video) {
      return;
    }
    console.log("Hello2");

    html2canvas(container.current).then(canvas => {
      console.log(canvas);
      let canvasDom = canvas as CanvasElement;
      let stream: MediaStream | null = canvasDom.captureStream();
      video.current!.srcObject = stream;
    });
  };

  return (
    <div className="App">
      <video ref={video} autoPlay muted />
      <div id={"canvas"} ref={container}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={capturePage}>Take ScreenShot!</button>
      </div>
    </div>
  );
}
