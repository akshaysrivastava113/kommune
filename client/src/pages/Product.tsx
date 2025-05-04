import axios from "axios"
import { useParams } from "react-router-dom";
import ProductContainer from "../components/products/ProductContainer";
import { productTitles } from "../utils/productTitles";

export default function Product(){
    const { productId } = useParams();
    const productTitle = productTitles[productId ?? ''] || "";
    return (
        <div className="flex justify-start">
            <ProductContainer productId={productId} productTitle={productTitle}/>
        </div>
    )
}