import { useEffect, useState } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    //since fetching data from data base may take time we may need to show a message that data is being fetched
    const [isLoading, setIsLoading] = useState(true);
    //a state to show that data could not be fetched, initially no error so null
    const [error, setError] = useState(null);


    //useeffect cannot run an async function directly so you need to nest another async function inside it and then call that function. once you have called you can simply update blogs after fetching the promise in appropriate json format
    useEffect(() => {

        const abortCont=new AbortController(); //this allows us to abort the fetch midway

        const fetchData = async () => {

            try {
                const data = await fetch(url,{signal : abortCont.signal }); //passed as an second argument to indicate to stop fetching mid way
                if (!data.ok) {
                    //here it throws an error in case we could not grab the blogs, which is catched by the "catch" and then it displays the error content as error.message
                    throw Error("Desired data could not be fetched");
                }
                const finalData = await data.json();
                console.log(finalData);
                setData(finalData); //updating blogs
                setIsLoading(false); //once data is fetched and put into blogs , update the isLoading to show that process is complete
                setError(null); //once data is fetched update this to null to prevent error in any future runs
            }

            catch (error) {
                //only on catching any error other than abort we update the states, on catching an error update error state and the loading state as once error found we are no longer loading
                if(error.name==='AbortError'){
                    console.log("fetch aborted");
                }
                else{
                setError(error.message);
                setIsLoading(false);
                }
            }

        }
        fetchData();

        return ()=> abortCont.abort(); // a function that the hook returns is a clean up fxn. abrotcont.abort() aborts the fetch it is associated with

    }, []);

    return { data, isLoading, error };
    //just like useState returns an array , this returns an object with 3 states which are used by us in the main home.js file
}

export default useFetch;


// we have replace dblogs w data as we have here created a custom fetch hook to get data which can be anything depending on the url that we give.
//hence url needs to be passed as dependency in useFetch

// sometimes when you do quick switching between pages using link, it may happen that in the prev page some fetch operation had started but before it could complete you switched. this would lead to an error as once fetch completes, the browser no longer has the previous page to display the data hence we have to perform useFetch clean up function to stop fetching as soon as page changed

// clean up function is written inside the useFetch hook itself and this hook returns the cleanup fxn everytime the component which uses this hook is unmounted from the dom.