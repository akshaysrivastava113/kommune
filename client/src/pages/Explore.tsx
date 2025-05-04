import axios from "axios";
import { useEffect, useState } from "react";
import SpinLoader from "../components/wrapper/SpinLoader";

export default function Explore(){
    const [isLoading, setIsLoading] = useState(false);
    const [allArticles, setAllArticles] = useState([]);
    function fetchAllArticles() {
        setIsLoading(true);
        axios.get("http://localhost:3000/api/article/all", { withCredentials: true })
        .then((res) => {
            console.log("res fe", res);
            setAllArticles(res.data);
        })
        .finally(() => {
            setIsLoading(false);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    
    useEffect(() => {
        fetchAllArticles();
    }, []);

    return (
        <div id="explore-page" className="flex justify-center items-center">
            {isLoading?
                <SpinLoader />:
                allArticles.map((article: any) => {
                    return (
                        <p>{article.title}</p>
                    )
                })
            }
        </div>
    )
}