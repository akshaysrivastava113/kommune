import axios from "axios";
import { base_url } from "../../config";
import { useEffect, useState } from "react";
import { Heart, MessageSquare } from "lucide-react";
import CommentsList from "./CommentsList";
import CommentBox from "./CommentBox";
import { toast } from "react-toastify";
import SpinLoader from "../wrapper/SpinLoader";
import PrimaryButton from "../wrapper/PrimaryButton";

type CommentDialogProps = {
    articleId: string
}
export default function CommentDialog(props: CommentDialogProps) {

    const [allComments, setAllComments] = useState([]);
    const [commentsNumber, setCommentsNumber] = useState([]);
    const [commentBody, setCommentBody] = useState("");
    const [isLoading, setIsSLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handelFetch = async () => {
        console.log("Get comments");
        setIsSLoading(true);
        try {
            const res = await axios.get(`${base_url}/api/article/${props.articleId}/comments`, { withCredentials: true });
            console.log("comments", res);
            setAllComments(res.data.comments);
            setCommentsNumber(res.data._count.comments);
            setIsSLoading(false);
        } catch(e){
            console.error(e);
            setIsSLoading(false);
        }
    }

    useEffect(() => {
        handelFetch();
    }, []);

    useEffect(() => {
        handelFetch();
    }, [isSubmitting]);

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
            toast.success("Commented", {
                position: "bottom-right"
            });
        } catch(e){
            console.error(e);
            setIsSubmitting(false);
            toast.error("Something went wrong!", {
                position: "bottom-right"
            });
        }
    }

    if(isLoading) return <div className="w-full h-full flex justify-center items-center mt-10">
                <SpinLoader size={40}/>
            </div>
    return (
        <div className="flex flex-col justify-center items-start">
            <div className="flex justify-center items-center p-2">
                <MessageSquare size={20}/>
                <h1 className="ml-2 text-lg font-semibold">Comments ({commentsNumber})</h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
               {allComments.map((comment: any) => {
                const formattedDate = new Date(comment.postedDate).toLocaleString();
                return (
                    <div className="w-full flex justify-between bg-brand-gray rounded-md m-2 p-2 ">
                        <div className="flex flex-col">
                            <h1 className="font-medium">{comment.author.email}</h1>
                            <h2 className="font-light">{comment.body}</h2>
                        </div>
                        <p className="text-sm italic">{formattedDate}</p>
                    </div>
                )
               })}
            </div>

            <div id="comment-box" className="w-full mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                <h3 className="font-semibold p-2">Add a Comment</h3>
                <textarea onChange={(e) => setCommentBody(e.target.value)} className="w-full mt-2 p-2 border rounded-lg" rows={5} placeholder="Share your thoughts..."></textarea>
                <div className="w-full flex justify-end">
                    <PrimaryButton className={`ml-0 mr-0 mt-2 ${isSubmitting&&'opacity-50 pointer-events-none'}`}><button disabled={isSubmitting} onClick={handleSubmit}>Post Comment</button></PrimaryButton>
                </div>
            </div>
        </div>
    )
}