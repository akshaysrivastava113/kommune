export default function Alert(props: any) {
    console.log(props);
    return (
        <h3 id="display-message" className={`mt-2 mb-4 bg-${props.color}-50 text-${props.color}-800 p-2 border-${props.color}-500 border-s-4 rounded-sm shadow-sm transition-all duration-300 ease-in-out`}>{props.text}</h3>
    )
}