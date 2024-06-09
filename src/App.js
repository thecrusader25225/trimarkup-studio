import { useEffect, useState } from "react";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import htmlImg from "./html.png";
import cssImg from "./css3.png";
import jsImg from "./js.png";
import full_logo from "./full_logo.png";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [sol, setSol] = useState("");

  useEffect(() => {
    const time = setTimeout(() => {
      setSol(`<html>
    <style>${css}</style>
    <body>${html}</body>
    <script>${js}</script>
  </html>`);
    }, 250);
    return () => clearTimeout(time);
  }, [html, css, js]);
  return (
    <>
      <div className="h-full w-screen absolute overflow-x-hidden p-4 pt-16 bg-slate-950">
        <div className="upper">
          <div className="container">
            <div className=" header">
              <FaHtml5 className=" mt-1" />
              <p>HTML</p>
            </div>
            <textarea
              className=" editor"
              value={html}
              onChange={(e) => {
                setHtml(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="container ">
            <div className="header">
              <FaCss3 className="mt-1" />
              <p>CSS</p>
            </div>
            <textarea
              className=" editor"
              value={css}
              onChange={(e) => {
                setCss(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="container ">
            <div className=" header">
              <FaJs className="mt-1" />
              <p>JS</p>
            </div>
            <textarea
              className=" editor"
              value={js}
              onChange={(e) => {
                setJs(e.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div className="display">
          <iframe
            srcDoc={sol}
            title="output"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="fixed top-0 left-0 h-16 w-full bg-neutral-900 text-neutral-400 font-extrabold text-3xl italic font-mono flex justify-between gap-1 items-center px-2">
          <img src={full_logo} className="h-16" alt="" />
          <span className="flex gap-1">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noreferrer"
            >
              <img src={htmlImg} className="w-10 h-10" alt="" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/css"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cssImg} className="w-10 h-10" alt="" />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/javascript"
              target="_blank"
              rel="noreferrer"
            >
              <img src={jsImg} className="w-10 h-10" alt="" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
