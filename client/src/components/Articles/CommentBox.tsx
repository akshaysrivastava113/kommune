import axios from "axios";
import { base_url } from "../../config";
import { useState } from "react";
import { toast } from "react-toastify";
import PrimaryButton from "../wrapper/PrimaryButton";
import SpinLoader from "../wrapper/SpinLoader";

type CommentBoxProps = {
    articleId: string
}
export default function CommentBox(props: CommentBoxProps) {
        // const [hasLiked, setHasLiked] = useState(false);
        const [commentBody, setCommentBody] = useState("");
        const [isSubmitting, setIsSubmitting] = useState(false);

        const handelFetch = async () => {
            console.log("Commented");
            const data = {
                id: "2"
            }
            try {
                // const res = await axios.post(`${base_url}/api/article/${props.id}/like`, data, { withCredentials: true });
            } catch(e){
                console.error(e);
            }
        }


        const handleSubmit = async () => {
            console.log("Commented");
            setIsSubmitting(true);
            const data = {
                body: commentBody 
            }
            try {
                const res = await axios.post(`${base_url}/api/article/${props.articleId}/comments`, data, { withCredentials: true });
                console.log(res);
                setIsSubmitting(false);
                toast.success("Commented");
            } catch(e){
                console.error(e);
                setIsSubmitting(false);
                toast.error("Something went wrong!");
            }
        }

    if(isSubmitting) return <SpinLoader/>
    return (
        <>
            <div className="flex flex-col justify-center items-center border">
                <h3>Comments 1</h3>
                <h3>Comments 1</h3>
                <h3>Comments 1</h3>
            </div>

            <div id="comment-box" className="w-full mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                <h3 className="font-semibold p-2">Add a Comment</h3>
                <textarea onChange={(e) => setCommentBody(e.target.value)} className="w-full mt-2 p-2 border rounded-lg" rows={5} placeholder="Share your thoughts..."></textarea>
                <div className="w-full flex justify-end">
                    <PrimaryButton className={`ml-0 mr-0 mt-2 ${isSubmitting&&'opacity-50 pointer-events-none'}`}><button disabled={isSubmitting} onClick={handleSubmit}>Post Comment</button></PrimaryButton>
                </div>
            </div>
        </>
    )
}