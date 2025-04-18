import { ReactNode } from "react"

type SecondaryButtonProps = {
    children?: ReactNode,
    className?: string
}

export default function SecondaryButton({ children, className = "" }: SecondaryButtonProps) {
    return (
        <div className={`secondary-btn bg-white border border-brand-primary font-medium text-brand-primary p-2 ml-2 mr-2 rounded-md hover:shadow-lg hover:brightness-90 ${className}`}>
            {children}
        </div>
    )
}