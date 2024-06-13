
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return ( 
    <nav className="navbar">
        <img src="https://cdn-icons-png.freepik.com/512/9611/9611762.png"></img>
        <h1>My life in a blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    </nav>
     );
}
 
export default NavBar;

// to have react to handle the browsing on in the browser and handle content changes in the browser itself, instead of using the <a></a> tags we should use <Link></Link> tags
