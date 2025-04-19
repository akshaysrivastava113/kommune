import { useState } from "react";
import PageHeading from "../common/PageHeading";
import PrimaryButton from "../wrapper/PrimaryButton";
import axios from "axios";
import { Products } from "../../utils/productValues";

export default function CreateForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitArticle = () => {
        const data = {
            title,
            description,
            type: "BLOG",
            product: Products.PRODUCTONE
        }
        axios.post(`http://localhost:3000/api/article/create`, data, {withCredentials: true})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return (
        <div className="border w-1/3 flex flex-col justify-center items-center p-4 m-4">
            <PageHeading>Create New Article</PageHeading>
            <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="p-2 m-2 border rounded-md w-full"></input>
            <textarea onChange={(e) => setDescription(e.target.value)} rows={5} placeholder="Description" className="p-2 m-2 border rounded-md w-full"></textarea>
            <PrimaryButton><button onClick={submitArticle}>Submit</button></PrimaryButton>
        </div>
    )
}