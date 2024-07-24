import { useState } from "react";
import { DropDownOrg,DropDownDest,Cabin } from "./DropDown"
import { Card } from "./Card"
import axios from "axios"

export function Root() {
    const [origin, setOrigin] = useState("JFK");
    const [destination, setDestination] = useState("JFK");
    const [cabin, setCabin] = useState("Economy");
    const [fetchData,setFetchData] = useState(null)

    async function receive() {
        await axios.post("http://localhost:9000",{
            origin,
            destination,
            cabin  
        })
        .then((res) => {
             console.log(res.data);
             setFetchData(res.data)
             console.log(fetchData)
        });
    }
    
    return <div className="text-white">
        <div className="flex flex-col items-center justify-center m-2">
            Choose Origin and Destination Airports:
            <DropDownOrg origin={origin} setOrigin={setOrigin} />
            <DropDownDest destination={destination} setDestination={setDestination} />
            <Cabin cabin={cabin} setCabin={setCabin} fn={receive}/>
            {fetchData && (
                    
            <Card 
            partnerPrograms={fetchData.data2.data[0].partnerPrograms}
            origin={fetchData.data1.origin}
            destination={fetchData.data1.destination}
            departureTimeFrom={fetchData.data1.departureTimeFrom}
            departureTimeTo={fetchData.data1.departureTimeTo}
            min_business_miles={ fetchData.data2.data[0].min_business_miles}
            min_business_tax=  { fetchData.data2.data[0].min_business_tax}
            min_economy_miles={fetchData.data2.data[0].min_economy_miles}
            min_economy_tax={fetchData.data2.data[0].min_economy_tax}
            min_first_miles={fetchData.data2.data[0].min_first_miles}
            min_first_tax={fetchData.data2.data[0].min_first_tax} />
            ) }
        </div>
    </div>
}