import { ClipLoader } from 'react-spinners';
interface SpinLoaderProps  {
    color?: string,
    size?: number
}
export default function SpinLoader({color, size=25}: SpinLoaderProps) {
    return (
        <div>
            <ClipLoader color={color} size={size}/>
        </div>
    )
}