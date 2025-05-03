import axios from "axios"
import { useParams } from "react-router-dom";
import { base_url } from "../config";
import { useEffect, useState } from "react";
import SpinLoader from "../components/wrapper/SpinLoader";
import { Heart, MessageSquare } from "lucide-react";

export default function ArticleView(){
    const { articleId } = useParams();
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [product, setProduct] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [likes, setlikes] = useState(0);
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
                setlikes(res.data.likes);
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
            <p className="text-xs font-medium rounded-full bg-purple-100 text-purple-800 px-2 py-1 m-2">{type} POST</p>
            <h1 className="text-3xl m-2 font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">{title}</h1>
            <p className="m-1 p-1 text-md text-gray-700">{createdAt}</p>
            <div>
                <p>{description}</p>
            </div>
            <div className="flex justify-center items-center">
                <button className="h-9 flex justify-center items-center bg-[#FBE7F2] opacity-70 rounded-md mt-4 p-2 hover: shadow-md hover:opacity-100">
                    <Heart size={20} color={(likes ?? 0) > 0 ? 'red' : 'gray'} fill={(likes ?? 0) > 0 ? 'red' : 'white'}/>
                    <p className="m-1 p-1 text-sm text-[#9D174D] font-semibold">{likes} likes</p>
                </button>
                <button className="h-9 flex justify-center items-center rounded-md mt-4 ml-4 p-2 opacity-70 hover:opacity-100">
                    <MessageSquare size={20} color="gray"/>
                    <p className="m-1 p-1 text-sm text-gray-500">0</p>
                </button>
            </div>
            <hr className="w-full mt-12"></hr>
            </div>
        </div>
    )
}