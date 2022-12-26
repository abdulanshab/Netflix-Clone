import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending" fetchUrl={requests.fetchTrending} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Documenteries Movies" fetchUrl={requests.fetchDocumenteries}/>
      </div>
    </>
  );
}

export default App;
