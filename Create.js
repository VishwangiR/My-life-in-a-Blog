import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle]=useState(''); //initially empty
    const [body, setBody]=useState('');
    const [year, setYear]=useState();
    const [isPending, setisPending]=useState(false); //initially not pending
    const history=useHistory();

    const handleSubmit=async (e)=>{
        e.preventDefault(); //to prevent form from reloading whenever it is submitted

        const blog={title,body,year}; //till now we have just created an object to store the values, we are yet to update it in our database
        setisPending(true); //it is getting uploaded

        const data=await fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog) //the actual data to be sent, you need to convert blog into json format hence used stringfy
        })
        const finalData=data.json();
        console.log("blog added succesfully");
        setisPending(false); //added succesfully
        history.push('/'); //go to home page after adding blog
        
    }

    return ( 
        <div className="create">
        <h2>Add a new blog !</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text" required 
            value={title}
            onChange={(e)=>{
                setTitle(e.target.value);
            }}
            />

            <label>Blog body:</label>
            <textarea required
            value={body}
            onChange={(e)=>{
                setBody(e.target.value);
            }}
            ></textarea>

            <label>Year of publishing:</label>
            <input type="number" required
            value={year}
            onChange={(e)=>{
                setYear(e.target.value);
            }}
            />
            
            {isPending && <button disabled>Adding the blog...</button>}
            {!isPending && <button>Add blog</button>}
        </form>
        </div>
     );
}
 
export default Create;

//useHistory hook allows us to navigate through different pages similar to the arrow button, we can go back in history and go forward in history too
// history(-+x) will take us x steps behind or x steps forward in history
// history.push('path') will take us to that path 