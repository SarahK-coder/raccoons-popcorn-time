import "./Header.css";

function Header(props) {
    return (
        <header>
            <h4>Current number of movies: {props.numberOfMovies}</h4>
        </header>
    );
}
export default Header;