import { useState } from "react";
import PageHeading from "../common/PageHeading";
import PrimaryButton from "../wrapper/PrimaryButton";
import axios from "axios";
import { base_url } from "../../config";
import { toast } from "react-toastify";

export default function CreateForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState("");
    const [type, setType] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitArticle =  async() => {
        setIsSubmitting(true);
        try{
            const data = {
                title,
                description,
                product,
                type
            }
            console.log(data);
            const res = await axios.post(`${base_url}/api/article/`, data, {withCredentials: true});
            toast.success("Created")
            setIsSubmitting(false);
            console.log(res);
        } catch( err: any ) {
           console.error(err);
           switch(err.status){
            case 409: 
                toast.error("There is a conflict");
                break;
            default: 
                toast.error("Something went wrong!");
           }
        }
    }

    return (
        <div className="w-1/3 flex flex-col justify-center items-start p-4 m-4">
            <PageHeading>Create New Article</PageHeading>

            <div className="w-full mt-6">
                <label className=" text-gray-600">Product</label>
                <select id="product-select" onChange={(e) => setProduct(e.target.value)} className="p-2 mt-2 border rounded-md w-full">
                    <option selected disabled></option>
                    <option value="PRODUCTONE">Product One</option>
                    <option value="PRODUCTTWO">Product Two</option>
                    <option value="PRODUCTTHREE">Product Three</option>
                </select>
            </div>

            <div className="w-full mt-6">
                <label className="text-gray-600">Article Type</label>
                <select id="product-select" onChange={(e) => setType(e.target.value)} className="p-2 mt-2 border rounded-md w-full">
                    <option selected disabled></option>
                    <option value="BLOG">Blog</option>
                    <option value="KNOWLEDGEBASE">Knowledge Base</option>
                    <option value="FORUM">Forum</option>
                </select>
            </div>

            <div className="w-full mt-6">
                <input onChange={(e) => setTitle(e.target.value)} placeholder="Enter title..." className="p-2 border rounded-md w-full"></input>
            </div>
            <div className="w-full mt-6">
                <textarea onChange={(e) => setDescription(e.target.value)} rows={5} placeholder="Write a brief summary..." className="p-2 border rounded-md w-full"></textarea>
            </div>
            <div className="w-full flex justify-end">
                <PrimaryButton className={`ml-0 mr-0 mt-2 ${isSubmitting&&'opacity-50 pointer-events-none'}`}><button disabled={isSubmitting} onClick={submitArticle}>Submit</button></PrimaryButton>
            </div>
        </div>
    )
}