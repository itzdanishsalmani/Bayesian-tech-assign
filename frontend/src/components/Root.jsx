import { useState } from "react";
import { DropDownOrg,DropDownDest,Cabin } from "./DropDown"
// import { Card } from "./Card"
import axios from "axios"

export function Root() {
    const [origin, setOrigin] = useState("SYN");
    const [destination, setDestination] = useState("JFK");
    const [cabin, setCabin] = useState("Economy");

    async function receive() {
        await axios.post("http://localhost:3000",{
            origin,
            destination,
            cabin  
        })
        .then((res) => {
            console.log(res.data);
        });
    }
    
    return <div className="text-white">
        <div className="flex flex-col items-center justify-center m-2">
            Choose Origin and Destination Airports:
            <DropDownOrg origin={origin} setOrigin={setOrigin} />
            <DropDownDest destination={destination} setDestination={setDestination} />
            <Cabin cabin={cabin} setCabin={setCabin} fn={receive}/>

            {/* <Card partnerPrograms={"KLM"}
            origin={"SYD"}
            destination={"JFK"}
            departureTimeFrom={"2024/07/09"}
            departureTimeTo={"20241/0/07"}
            min_business_miles={1}
            min_business_tax={1}
            min_economy_miles={53500}
            min_economy_tax={189}
            min_first_miles={1}
            min_first_tax={1} /> */}
        </div>
    </div>
}