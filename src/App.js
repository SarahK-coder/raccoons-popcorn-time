import { useState } from "react";
import moviesFromJson from "./components/data/movies.json";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const deleteMovie = (idOfTheMovieToDelete) => {
    //calc the new list of movies
    const newListOfMovies = moviesArr.filter((movie) => {
      return movie.id !== idOfTheMovieToDelete;
    });
    //update state
    setMoviesArr(newListOfMovies);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user submitted form.....")
  }

  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length} />


      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="enter the title" />
        <button>Create</button>
      </form>


      <Main moviesArr={moviesArr} callbackToDelete={deleteMovie} />
      <Footer year={2023} author={"Remote Raccoons"} />
    </div>
  );
}

export default App;
