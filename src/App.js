import react from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav'

function App() {
    return ( 
        <div className = "app" >
            <Nav />
            <Banner />
           

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

             <Row 
                isLargeRow={true}
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals} 
                
            />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Shows" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="TV Shows" fetchUrl={requests.fetchtTvShows} />

            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Thriller Movies" fetchUrl={requests.fetchThriller} />
            <Row title="Other Shows" fetchUrl={requests.fetchOtherShows} />


        </div >
    );
}

export default App;