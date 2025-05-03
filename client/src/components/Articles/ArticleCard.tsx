import { Heart, MessageSquare } from "lucide-react"
import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

type ArticleCardProps = {
    id?: string,
    title?: string,
    description?: string,
    createdAt?: string,
    postType?: string,
    postLikes?: number,
    commentsSize?: number
}

export default function ArticleCard({id, title, description, createdAt, postType, postLikes, commentsSize}: ArticleCardProps) {
const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/article/${id}`)} className="rounded-lg border bg-card shadow-md flex flex-col justify-center items-start m-2 p-2 cursor-pointer">
            <p className="text-xs font-medium rounded-full bg-purple-100 text-purple-800 px-2 py-1 m-1">{postType}</p>
            <h2 className="w-full m-1 p-1 text-xl font-semibold mb-2 text-foreground/90 truncate ">{title}</h2>
            <p className="w-full m-1 p-1 text-sm text-muted-foreground mb-4 truncate">{description}</p>
            <div className="flex w-full justify-start items-center">
                <p className="m-1 p-1 text-sm text-gray-700">{createdAt}</p>
                <span className="pb-4 m-2 text-2xl text-gray-400">.</span>
                <Heart size={20} color={(postLikes ?? 0) > 0 ? 'red' : 'gray'} fill={(postLikes ?? 0) > 0 ? 'red' : 'white'}/>
                <p className="m-1 p-1 text-sm text-gray-700">{postLikes}</p>
                <span className="pb-4 m-2 text-2xl text-gray-400">.</span>
                <MessageSquare size={20} color="gray"/>
                <p className="m-1 p-1 text-sm text-gray-700">{commentsSize}</p>
            </div>
        </div>
    )
}