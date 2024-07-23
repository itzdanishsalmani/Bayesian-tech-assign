import { useState } from "react"

export function DropDownOrg({origin,setOrigin}) {

    return <div>
                    Origin
        <select value={origin} className="border w-48 border-white " onChange={(e)=>{
setOrigin(e.target.value)
        }} >
                <option value="JFK">JFK</option>
                <option value="DEL">DEL</option>
                <option value="SYD">SYD</option>
                <option value="BOM">BOM</option>
                <option value="BNE">BNE</option>
                <option value="BLR">BLR</option>

        </select>

    </div>
}

export function DropDownDest({destination,setDestination}) {

    return <div>
                    Destination
        <select value={destination} className="border w-48 border-white" onChange={(e)=>{
           setDestination( e.target.value)
        }} >
                <option value="JFK" >JFK</option>
                <option value="DEL" >DEL</option>
                <option value="SYD" >SYD</option>
                <option value="LHR" >LHR</option>
                <option value="CDG" >CDG</option>
                <option value="DOH" >DOH</option>
                <option value="SIN" >SIN</option>
        </select>
    </div>
}

export function Cabin({cabin,setCabin,fn}) {

    return (
        <div className="flex flex-col w-48">
            Cabin selection<select className="border"  value={cabin} onChange={(e)=>{
                setCabin(e.target.value)
            }} >
                    <option value="Economy"  >Economy</option   >
                    <option value="Business"  >Business</option  >
                    <option value="First"  >First</option >
            </select>
        
                <button className="bg-blue-500 mt-8 w-20 text-white p-2 rounded-lg" onClick={fn}>Search</button>
                </div>
    )
}