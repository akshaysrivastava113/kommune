import axios from "axios";
import { base_url } from "../../config";
import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import PrimaryButton from "../wrapper/PrimaryButton";
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
// const tempComment = {
//     id: 1,
//     body: commentBody,
//     postedDate: new Date(),
//     authorId: 10,
//     articleId: 13,
//     author: {
//         "id": 10,
//         "email": "aksh1@test.com",
//         "password": "$2b$10$GyIP2OxXCWouoPMqDA8wyOSKRp1pWZrJySeKPr0hwH5WLetCzgIWO"
//     }
// }

type CommentDialogProps = {
    articleId: string
}
const userEmail = String(Cookies.get('user'));
export default function CommentDialog(props: CommentDialogProps) {

    const [allComments, setAllComments] = useState<Array<{
        id?: number;
        body: string;
        postedDate: Date;
        authorId?: number;
        articleId?: number;
        author: {
            id?: number;
            email: string;
        };
    }>>([]);
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

    const handleSubmit = async () => {
        console.log("Commented");
        setIsSubmitting(true);
        const optimisticCommentData = {
            body: commentBody,
            postedDate: new Date(),
            author: {
                "email": userEmail
            }
        }
        setAllComments((prev) => [...prev, optimisticCommentData]);


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
            await wait(2000); // wait for 2 seconds
            handelFetch();
        } catch(e){
            console.error(e);
            setIsSubmitting(false);
            toast.error("Something went wrong!", {
                position: "bottom-right"
            });
        }
    }

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