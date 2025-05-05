import axios from "axios";
import { base_url } from "../../config";
import { useState } from "react";
import { Heart } from "lucide-react";

type LikeButtonProps = {
    id: string
    likes: number
    setLikes: any
    hasLiked: any
    setHasLiked: any
}
export default function LikeButton(props: LikeButtonProps) {
        // const [hasLiked, setHasLiked] = useState(false);
        console.log("Comp loaded");
        const handleLike = async () => {
            console.log("Pressed like");
            if(!props.hasLiked){
                props.setHasLiked(true);
                props.setLikes((likes:any) => likes+1)
            } else {
                props.setHasLiked(false);
                props.setLikes((likes:any) => likes>0?likes-1:0)
            }
            const data = {
                id: props.id
            }
            try {
                if(!props.hasLiked){
                    console.log("Liked");
                    const res = await axios.post(`${base_url}/api/article/${props.id}/like`, data, { withCredentials: true });
                    
                    console.log(res);
                } else {
                    //unlike
                    console.log("Unliked");
                    const res = await axios.delete(`${base_url}/api/article/${props.id}/like`, { withCredentials: true });
                    console.log(res);
                }
            } catch(e){
                console.error(e);
            }
        }

    return (
        <div onClick={() => handleLike()} className="flex justify-center items-center">
        <button  className="h-9 flex justify-center items-center bg-[#FBE7F2] opacity-70 rounded-md mt-4 p-2 hover: shadow-md hover:opacity-100">
            <Heart size={20} color='red' fill={props.hasLiked? 'red' : 'white'}/>
            <p className="m-1 p-1 text-sm text-red-700 font-semibold">{props.likes} likes</p>
        </button>
    </div>
    )
}