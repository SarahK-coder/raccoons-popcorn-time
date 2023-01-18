import "./Footer.css";

function Footer(props) {
    return (
        <footer>
            {props.year}, {props.author}
        </footer>
    );
}

export default Footer;