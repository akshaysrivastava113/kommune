import axios from "axios"
import { useEffect, useState } from "react";
import { base_url } from "../../config";
import SpinLoader from "../wrapper/SpinLoader";
import ArticleCard from "./ArticleCard";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type ArticlesListProps = {
    product: String,
    type: String
}

type Article = {
    id: string,
    title: string;
    description: string;
    createdAt: string;
    type: string;
    likes: number;
    comments: { length: number };
};

export default function ArticlesList({product, type }: ArticlesListProps){

    
    const [articlesList, setArticlesList] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const {isLoggedIn} = useAuth();
    const navigate = useNavigate();
    // let productToSend = product.toUpperCase();
    // let typeToSend = type.toUpperCase();
    const handleFetch = async () => {
        try{
            setIsLoading(true);
            const res = await axios.get(`${base_url}/api/article?product=${product}&type=${type}`, { withCredentials: true });
            setArticlesList(res.data);
            setIsLoading(false);
            console.log(res.data);
        }
        catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        handleFetch();
    }, [product, type]);

    if(!isLoggedIn) navigate('/login');

    if(isLoading) return (
        <div className="w-full h-full flex justify-center items-center mt-10">
            <SpinLoader size={40}/>
        </div>
    );
    return (
        <div className="grid grid-cols-4 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articlesList.map((article) => {
                const formattedDate = new Date(article.createdAt).toLocaleDateString();
                return (
                        <ArticleCard id={article.id} title={article.title} description={article.description} createdAt={formattedDate} postType={article.type} postLikes={article.likes} commentsSize={article.comments?.length??0}/>
                    )
                }
            )}
        </div>
    )
}