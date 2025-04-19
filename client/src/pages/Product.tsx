import axios from "axios"
import { useParams } from "react-router-dom";
import PageHeading from "../components/common/PageHeading";
import ProductContainer from "../components/products/ProductContainer";
import { productTitles } from "../utils/productTitles";

export default function Product(){
    const { productId } = useParams();
    const productTitle = productTitles[productId ?? ''] || "";
    function sampleCall() {
        console.log(productId);
        axios.get("http://localhost:3000/api/", { withCredentials: true })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    return (
        <div className="flex justify-start">
            <ProductContainer productId={productId} productTitle={productTitle}/>
        </div>
    )
}