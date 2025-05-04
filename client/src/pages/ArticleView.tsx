import axios from "axios"
import { useParams } from "react-router-dom";
import { base_url } from "../config";
import { useEffect, useState } from "react";
import SpinLoader from "../components/wrapper/SpinLoader";
import LikeButton from "../components/articles/LikeButton";
import { MessageSquare } from "lucide-react";
import CommentDialog from "../components/articles/CommentDialog";

export default function ArticleView(){
    const { articleId } = useParams();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [product, setProduct] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleFetch = async () => {
        try {
            setIsLoading(true);
            const res = await axios.get(`${base_url}/api/article/${articleId}`, { withCredentials: true })
            console.log(res);
            if(res.data){
                setId(res.data.id);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setType(res.data.type);
                setProduct(res.data.product);
                const formattedDate = new Date(res.data.createdAt).toLocaleDateString();
                setCreatedAt(formattedDate);
                setLikes(res.data._count.likes);
                setHasLiked(res.data.likes.length>0?true:false)
                setIsLoading(false);
            }
        }
        catch(err) {
            console.error(err);
            setIsLoading(false);
        }
    }
    
    useEffect(() => {
        handleFetch();
    }, []);

    if(isLoading) return (
        <div className="w-full h-full flex justify-center items-center mt-10">
            <SpinLoader size={40}/>
        </div>
    )

    return (
        <div className="w-full flex justify-center">
            <div className="w-1/2 flex flex-col justify-start items-start">
            <div className="w-full mt-4 flex justify-between">
                <p className="text-xs font-medium rounded-full bg-purple-100 text-purple-800 px-2 py-1">{type} POST</p>
                <p className="text-xs font-medium rounded-full bg-purple-100 text-purple-800 px-2 py-1">{product}</p>
            </div>
            <h1 className="text-3xl mt-4 font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">{title}</h1>
            <p className="mt-4 text-md text-gray-500 italic">{createdAt}</p>
            <div className="mt-4">
                <p>{description}</p>
            </div>
            <div className="mt-4 w-full flex justify-start items-center">
                <LikeButton id={id} hasLiked={hasLiked} setHasLiked={setHasLiked} likes={likes} setLikes={setLikes}/>
                {/* <button className="h-9 flex justify-center items-center rounded-md mt-4 ml-4 p-2 opacity-70 hover:opacity-100">
                    <MessageSquare size={20} color="gray"/>
                    <p className="m-1 p-1 text-sm text-gray-500">0</p>
                </button> */}
            </div>
            <hr className="w-full mt-12"></hr>
            <div id="comments-dialog-box" className=" w-full mt-4">
                <CommentDialog articleId={id}/>
            </div>
            </div>
        </div>
    )
}