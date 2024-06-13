import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="All blogs" ></BlogList>}
        </div>
    );
}

export default Home;



       //1

/*selective blog array formation using filter
 <BlogList blogs={blogs.filter((blog)=>{
    return blog.year>=2022;
})} title="Out of school edition !"></BlogList>*/

       //2

/*use effect for some dependencies
const [name,setName]=useState("mario");

useEffect(()=>{
    console.log("use effect ran");
},[name]);

<p>{name}</p>
        <button onClick={()=>{
            setName("saru")
        }}>click me</button> 
        */

        //3

/* you have to use js {blogs && --} because you want to establish a condition that second half of this js is run only when first half is true ie blogs are not null. initially blogs are null and since program runs instantly it was passing null to bloglist.js which created error with blogs.map as blogs==null
in such conditional statements , second half of it is executed iff the first half is true */
 
        //4

/* how to handle delete
const handleDelete=(id)=>{
        const newBlog=blogs.filter((blog)=>{
            return blog.id!=id;
        });
        setBlogs(newBlog);
    }
     you also need to pass "handleDelete={handleDelete}" as a props to BlogList 
     it accepts it as 
     const handleDelete=props.handleDelete;
     and then simply 
     <button onClick={()=>{
     handleDelete(blog.id);
     }}>delete</button>
     */
