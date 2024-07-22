import { useState } from "react"

export function DropDownOrg() {
    const [isOpen,setOpen] = useState(false)

    return <div>
        <button className="border w-48 border-white " onClick={()=>{
            setOpen(!isOpen)
        }} >
            Origin
        </button>
        { isOpen && (

        <div className="bg-red-500 cursor-pointer">
            <ul>
                <li className="border">JFK</li>
                <li className="border">DEL</li>
                <li className="border">SYD</li>
                <li className="border">BOM</li>
                <li className="border">BNE</li>
                <li className="border">BLR</li>
            </ul>
        </div>
            ) }

    </div>
}

export function DropDownDest() {
    const [isOpen,setOpen] = useState(false)

    return <div>
        <button className="border w-48 border-white" onClick={()=>{
            setOpen(!isOpen)
        }} >
            Destination
        </button>
        { isOpen && (

        <div className="bg-red-500 cursor-pointer">
            <ul>
                <li className="border">JFK</li>
                <li className="border">DEL</li>
                <li className="border">SYD</li>
                <li className="border">LHR</li>
                <li className="border">CDG</li>
                <li className="border">DOH</li>
                <li className="border">SIN</li>
            </ul>
        </div>
            ) }
    </div>
}

export function Cabin({fn}) {

    return (
        <div className=" flex flex-col w-48">
            <button>Cabin selection</button>
            <input type="text" placeholder="type" className="border"/>
            <div> 
                <ul>
                    <li>Economy</li>
                    <li>Business</li>
                    <li>First</li>
                </ul>
            </div>
        
                <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={fn}>Search</button>
                </div>
    )
}