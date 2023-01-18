function Movies(props) {
    //const [moviesArr, setMoviesArr] = useState(moviesFromJson);
    // const [amountMovies, setAmount] = useState(moviesFromJson.length); // using the single source of truth: moviesArr
    /*
    const deleteMovie = (id) => {
        console.log('Delete Movie', id);
        const filteredMovies = moviesArr.filter( (movie) => {
            return movie.id !== id;
        });
        // Update State
        setMoviesArr(filteredMovies);
    }
    */
    
    return (
        <>
        <div className="card-container">
            <div className="card movie">
                {props.movieDetails.imgURL 
                ? <img src={props.movieDetails.imgURL} alt="" />
                : <img src="https://via.placeholder.com/182x268" alt="" />
                }
                <br />
                {props.movieDetails.title} - {props.movieDetails.year}
                <br />
                {/* Inline If with Logical && Operator => returns ONE value */}
                {props.movieDetails.rating > 8 && <b className="badge">Recommended</b>}
                <i><small>Rating: {props.movieDetails.rating}</small></i>
                
                <button onClick={() => {props.callbackToDelete(props.movieDetails.id)}} className="btn">Delete</button>
            </div>
        </div>
        </>
    );
}

export default Movies;