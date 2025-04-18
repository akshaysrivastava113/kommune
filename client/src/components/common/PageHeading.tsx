import { ReactNode } from "react"

type PageHeadingProps = {
    children: ReactNode
}
export default function PageHeading({children}: PageHeadingProps) {
    return (
        <h1 className="text-brand-primary text-3xl font-bold bg-gradient-to-tr from-brand-primary to-brand-light bg-clip-text text-transparent m-2 p-2">{children}</h1>
    )
}