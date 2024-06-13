import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = (props) => {

    const blogs=props.blogs;
    const title=props.title;


    return ( 

        <div className="blog-list">
           <h2>{title}</h2>

        {blogs.map((blog)=> {
        return (
                <div className="blog-preview" key={blogs.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Year of Publishing: {blog.year}</p>
                    </Link>
                </div>
                
        
        )})}
        </div>
     );
}
 
export default BlogList;