import "./App.css";
import Link from "react";

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./screenshots", false, /\.(png|jpe?g|svg)$/)
  );
  const results = importAll(
    require.context("./search_results", false, /\.(html|json|zip)$/)
  );


  return (
    <div className="App">
      {results.map((data, i) => (
        <div key={i} className='query_box'>
        Search For "<h1>Başlık</h1>"
          {data.map((data, i) => (
            <ul key={i}>
              <li>
                <div className='query_box_title'>
                  <span>{i}</span>
                  <h2>{data.name}</h2>
                </div>
                {data.pageDate}
                <br />  <br />
                <a href={data.domain}>{data.domain}</a>
              </li>
            </ul>
          ))}
        </div>
      ))
      }

      {/*
      IMAGES FOR SS
       <div className="images">
        {images.map((data, i) => (
          <div className='image-list-wrapper'>
            <img key={i} src={data.default} />
            <text> {data.default} </text>
          </div>
        ))} */}

      {/* {reports.map((data, i) => (
          <a key={i} href={data.default} download>
            {data.default}
          </a>
        ))} */}

    </div >
  );
}

export default App;
