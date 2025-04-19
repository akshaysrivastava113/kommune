import axios from "axios"
import { useEffect, useState } from "react";

type ArticlesListProps = {
    product: String,
    type: String
}

export default function ArticlesList({product, type }: ArticlesListProps){
    const [articlesList, setArticlesList] = useState([]);
    let productToSend = product.toUpperCase();
    let typeToSend = type.toUpperCase();
    useEffect(() => {
        const data = {
            product: productToSend,
            type: typeToSend
        }
        axios.post("http://localhost:3000/api/article/filter", data, { withCredentials: true })
        .then((res) => {
            console.log(res);
            setArticlesList(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, [type]);
    return (
        <div className="flex justify-start">
            {articlesList.map((article) => <p>{article.title}</p>)}
        </div>
    )
}