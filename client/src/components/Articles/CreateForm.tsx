import { useState } from "react";
import PageHeading from "../common/PageHeading";
import PrimaryButton from "../wrapper/PrimaryButton";
import axios from "axios";
import { ArticleType, Product } from "../../utils/constants";
import { base_url } from "../../config";

export default function CreateForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitArticle =  async() => {
        try{
            const data = {
                title,
                description,
                type: ArticleType.BLOG,
                product: Product.PRODUCTONE
            }
            console.log(data);
            const res = await axios.post(`${base_url}/api/article/`, data, {withCredentials: true});
            console.log(res);
            if(res.data.status == 201){
                //Success alert or redirect to article page
            } else {

            }
        } catch( err ) {
           console.error(err);
        }
    }

    return (
        <div className="w-1/3 flex flex-col justify-center items-start p-4 m-4">
            <PageHeading>Create New Article</PageHeading>
            <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="p-2 mt-2 border rounded-md w-full"></input>
            <textarea onChange={(e) => setDescription(e.target.value)} rows={5} placeholder="Description" className="p-2 mt-2 border rounded-md w-full"></textarea>
            <div className="w-full flex justify-end">
                <PrimaryButton className="ml-0 mr-0 mt-2"><button onClick={submitArticle}>Submit</button></PrimaryButton>
            </div>
        </div>
    )
}