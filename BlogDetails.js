import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {

    const {id}=useParams();
    const {data , isLoading , error}=useFetch('http://localhost:8000/blogs/');
    const [blog, setBlog]=useState(null);
    const history=useHistory();

    useEffect(()=>{
        if(data){
        const desiredBlog=data.find((blog)=>blog.id==id);
        setBlog(desiredBlog);
        }
    },[data , id]);

    const handleClick=async ()=>{
        const deleteBlog=await fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE'
        });
        const finalDeleteBlog=deleteBlog.json();
        history.push('/');
    }

    return ( 
    <div class="blog-details">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Year of publishing: {blog.year}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete blog</button>
            </article>
        )}
        {!blog && (
            <h2>blog does not exist</h2>
        )}
    </div>
     );
}
 
export default BlogDetails;