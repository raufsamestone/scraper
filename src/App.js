import "./App.css";
import Link from "react";

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./screenshots", false, /\.(png|jpe?g|svg)$/)
  );
  const reports = importAll(
    require.context("../public/reports", false, /\.(html|json|zip)$/)
  );

  return (
    <div className="App">
      <div className="images">
        {images.map((data, i) => (
          <img key={i} src={data.default} />
        ))}

        {/* {reports.map((data, i) => (
          <a key={i} href={data.default} download>
            {data.default}
          </a>
        ))} */}
      </div>
    </div>
  );
}

export default App;
