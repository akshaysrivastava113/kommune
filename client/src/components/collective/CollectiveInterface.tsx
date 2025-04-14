import {ChevronUp, ChevronDown, Brain, SendHorizontal} from "lucide-react";
import { useState } from "react";
export default function CollectiveInterface() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [userQuery, setUserQuery] = useState("");
    const [convoArray, setConvoArray] = useState(["eef"]);
    return (
        <div id="kom-CollectiveInterface" className="flex flex-col w-full">
            <div className="flex justify-between">
            <span className="m-1"><Brain /></span><p className="flex-[3] flex m-1">Collective Intelligence</p>
                <input className="flex-[5] rounded-md p-2" />
                {isExpanded ? <button className="flex-[1] flex justify-center items-center" onClick={() => setIsExpanded(false)}><ChevronUp/></button> : <button className="flex-[1] flex justify-center items-center" onClick={() => setIsExpanded(true)}><ChevronDown /></button>}
            </div>
            
                <div className={`w-full flex flex-col items-center justify-center transition-all duration-300 overflow-hidden ${isExpanded?'max-h-64 py-4' : 'max-h-0 py-0'}`}>
                    <div className="min-h-24 w-full flex flex-col justify-center items-center overflow-y-scroll">
                        {convoArray.map((text) => <p>{text}</p>)}
                    </div>
                    <div className="w-full flex">
                        <textarea rows={1} onChange={(e) => setUserQuery(e.target.value)} className="w-full p-2 m-2 rounded-md resize-none" placeholder="Ask the collective intelligence..."></textarea>
                        <button className="p-3 m-1 rounded-full hover:shadow-lg" onClick={() => setConvoArray([...convoArray, userQuery])}><SendHorizontal /></button>
                    </div>
                </div>

        </div>
    )
}