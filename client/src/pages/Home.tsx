import axios from "axios"

export default function Home(){

    function sampleCall() {
        axios.get("http://localhost:3000/api/", { withCredentials: true })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    return (
        <div className="">
            <p className="h-96">Home</p>
            <button onClick={sampleCall}>Click</button>
        </div>
    )
}