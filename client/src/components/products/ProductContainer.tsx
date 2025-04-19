import { Rss, BookOpenCheck, Newspaper } from "lucide-react";
import PageHeading from "../common/PageHeading";
import Card from "../wrapper/Card";
import { useState } from "react";
import ArticlesList from "../articles/ArticlesList";

type ProductContainerProps = {
    productId: String,
    productTitle: String | any
}
const subPages = ["Blog", "Forum", "Knowledge Base"];

export default function ProductContainer({productId, productTitle}: ProductContainerProps) {
    const [selectedType, setSelectedType] = useState("");
        return (
            <div className="w-1/3 flex flex-col justify-start items-start p-4 m-4">
                <PageHeading>{productTitle}</PageHeading>
                <div className=" bg-brand-gray flex justify-start items-start p-1 m-2 rounded-md">
                    {subPages.map((subPage :string) => {
                        return (
                            <div className="ml-2 mr-2">
                                <button onClick={() => setSelectedType(subPage)}  value={subPage} className={`text-sm font-medium px-3 py-1 rounded ${selectedType === subPage ? 'bg-white text-black' : 'bg-transparent text-[#64748B]'}`}>{subPage}</button>
                            </div>
                            )
                        }
                    )}
                </div>
                <div>
                    <ArticlesList type={selectedType} product={productId} />
                </div>
            </div>
        )
}