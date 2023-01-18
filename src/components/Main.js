//import { useState } from "react";
import "./Main.css";
import Movies from "./Movies";

function Main(props) {
    
    //const titleMessage = props.moviesArr.length ? <h4>Current number of movies: {props.moviesArr.length}</h4> : <h4>Sorry, there are no movies to display</h4>;

    return (
        <main>
            {/* {titleMessage} */}

            {props.moviesArr.map( (movieObj) => {
                return(
                <Movies 
                    key={movieObj.id} 
                    movieDetails={movieObj} 
                    callbackToDelete={props.callbackToDelete} />
                );
            })}

        </main>
    );
}

export default Main;