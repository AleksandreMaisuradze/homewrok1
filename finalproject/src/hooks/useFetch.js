import { useEffect, useState } from "react"
import { fetchData } from "../api/auth";

const useFetch = (url, options) => {

    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData(url, options).then((d) => {
            setData(d)
        }).catch((err) => {
            setError(err.message)
        }).finally(() => {
            setIsLoading(false)
        })

    }, [url]);
    return [data, error, isLoading];
};



export default useFetch;