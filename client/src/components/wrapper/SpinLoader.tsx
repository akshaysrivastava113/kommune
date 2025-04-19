import { ClipLoader } from 'react-spinners';
interface SpinLoaderProps  {
    color?: string
}
export default function SpinLoader({color}: SpinLoaderProps) {
    return (
        <div>
            <ClipLoader color={color} />
        </div>
    )
}