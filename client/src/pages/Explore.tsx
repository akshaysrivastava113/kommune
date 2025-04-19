import axios, { all } from "axios";
import { useEffect, useState } from "react";

export default function Explore(){
    const [allArticles, setAllArticles] = useState([]);
    function fetchAllArticles() {
        axios.get("http://localhost:3000/api/article/all", { withCredentials: true })
        .then((res) => {
            console.log("res fe", res);
            setAllArticles(res.data);
        }) 
        .catch((err) => {
            console.error(err);
        })
    }
    
    useEffect(() => {
        fetchAllArticles();
    }, []);

    return (
        <div id="explore-page" className="flex">
            {allArticles.map((article: any) => {
                return (
                    <p>{article.title}</p>
                )
            })}
        </div>
    )
}