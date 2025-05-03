import { ReactNode } from "react"

type PrimaryButtonProps = {
    children?: ReactNode,
    className?: string
}

export default function PrimaryButton({ children, className = "" }: PrimaryButtonProps) {
    return (
        <div className={`primary-btn bg-brand-primary font-medium text-white p-2 ml-2 mr-2 rounded-md ${className} hover:shadow-lg hover:brightness-90`}>
            {children}
        </div>
    )
}