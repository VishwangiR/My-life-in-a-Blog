import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-found">
        <h2>Invalid request, page not found</h2>
        <Link to='/'>Go back to the home page...</Link>
        </div>
     );
}
 
export default NotFound;