import "./App.css";
import React, {useState} from 'react'
import Link from "react";
import {warningMessage} from "../src/contents/content"
// import firebase from "./firebase/firebase";

function App() {

  // firebase
  //   .firestore()
  //   .collection('books')
  //   .onSnapshot(snap => {
  //     const blogs = snap.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }))
  //     setBlogs(blogs)
  //   })

  // const [blogs, setBlogs] = useState([])

  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("./screenshots", false, /\.(png|jpe?g|svg)$/)
  );
  const results = importAll(
    require.context("./search_results", false, /\.(html|json|zip)$/)
  );

  const updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="App">

<form>
     <input
       type="text"
       name="fullname"
       placeholder="Full name"
       onChange={updateInput}
      />
      </form>

{!results ? 
      results.map((data, i) => (
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
      :
      <div className='query_box'>
      <div className='query_box_title'> 
      <h2>       
     {warningMessage}
       </h2>
        </div>
        </div>
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
