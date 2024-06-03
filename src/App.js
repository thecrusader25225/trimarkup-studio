import { useEffect, useState } from "react";
import { FaBeer, FaCss3, FaHtml5, FaJs } from "react-icons/fa";
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
    <div className="h-screen w-screen absolute overflow-x-hidden p-4 bg-slate-950">
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
        <iframe srcDoc={sol} title="output" className="w-full h-full"></iframe>
      </div>
    </div>
  );
}

export default App;
