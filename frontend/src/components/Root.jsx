import { DropDownOrg,DropDownDest,Cabin } from "./DropDown"
import { Card } from "./Card"
import axios from "axios"

export function Root() {

    async function receive() {
        await axios.get("http://localhost:3000",{  
        })
        .then(res =>
            res.data)  
            console.log(res.data) 
    }
    
    return <div className="text-white">
        <div className="flex flex-col items-center justify-center m-2">
            Choose Origin and Destination Airports:
            <DropDownOrg />
            <DropDownDest />
            <Cabin fn={receive}/>
            <Card partnerPrograms={"KLM"}
            origin={"SYD"}
            destination={"JFK"}
            departureTimeFrom={"2024/07/09"}
            departureTimeTo={"20241/0/07"}
            min_business_miles={1}
            min_business_tax={1}
            min_economy_miles={53500}
            min_economy_tax={189}
            min_first_miles={1}
            min_first_tax={1} />
        </div>
    </div>
}