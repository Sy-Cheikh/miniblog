import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() =>{
            fetch(url, { signal: abortCont.signal })
            .then(res =>{
                if(!res.ok){ // error coming from server
                    throw Error ('Could not fatch the data for that resource');
                 }
                 
                return res.json();
            })
            .then(data =>{
                setLoading(false);
                setData(data);
                setError(null);
            })
            .catch(err =>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setLoading(false);
                    setError(err.message);
                }
               
            })
            
        },1000);

        return () => abortCont.abort();
    },[url]);

    return {data, isLoading, error}

}
export default useFetch;