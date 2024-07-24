
export function DropDownOrg({ origin, setOrigin }) {

    return <div className="p-2 rounded bg-black">
        Origin <br />
        <select value={origin} className="bg-black w-64" onChange={(e) => {
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

export function DropDownDest({ destination, setDestination }) {

    return <div className="p-2 mt-4 rounded bg-black">
        Destination <br />
        <select value={destination} className="bg-black w-64 " onChange={(e) => {
            setDestination(e.target.value)
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

export function Cabin({ cabin, setCabin, fn }) {

    return (
        <div className=" mt-4  w-64">
            <div className="flex flex-col ">
                <span className="p-2 bg-black rounded">Cabin selection  </span>
            <select className="bg-black p-2 rounded" value={cabin} onChange={(e) => {
                setCabin(e.target.value)
            }} >
                <option value="Economy"  >Economy</option   >
                <option value="Business"  >Business</option  >
                <option value="First"  >First</option >
            </select>
            <button className="bg-blue-500 mt-4 w-20 text-white p-2 rounded-lg" onClick={fn}>Search</button>
            </div>
        </div>
    )
}
