import { Link } from "react-router-dom";
import "../componentes/Navbar.css";

function NavButton(props) {
    return (
         <Link className="nav-btn" to={props.href}>
             {props.text}
         </Link>
            );
}
//si no se desestructura (poner {} en nabvar) nomás se crashea el asunto
function Navbar({links}) {
    console.log(links);
    const title = "stespace-app";

    /*const headerStyles = {
        fontSize: "2.5rem",
        margin:"2px",
        background: "-webkit-linear-gradient(#024caa, #ec8305)",
        WebkitBackgroundClip: "text",
        weblinkTextFillColor: "transparent",
    };*/
    
    return (
        <nav>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                {links.map((link, idx) => (
                    <NavButton href={link.href} text={link.text} key={idx} />
                ))}
            </div>
        </nav>
    );
}
export default Navbar;