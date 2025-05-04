import PageHeading from "../common/PageHeading";
import { useState } from "react";
import ArticlesList from "../articles/ArticlesList";

type ProductContainerProps = {
    productId: String | any,
    productTitle: String | any
}
const subPages = ["Blog", "Forum", "KnowledgeBase"];

export default function ProductContainer({productId, productTitle}: ProductContainerProps) {
    const [selectedType, setSelectedType] = useState("Blog");
        return (
            <div className="w-full flex flex-col justify-start items-start p-4 m-4">
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
                <div className="w-full">
                    <ArticlesList product={productId} type={selectedType} />
                </div>
            </div>
        )
}