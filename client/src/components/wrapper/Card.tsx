import { ReactNode } from "react"

type CardProps = {
    children?: ReactNode,
    className?: string
}


export default function Card({children}: CardProps) {
    return (
        <div className="w-48 h-24 rounded-lg border bg-card shadow-md flex justify-center items-center m-2 p-2">
            {children}
        </div>
    )
}