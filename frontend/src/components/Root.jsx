import { useState } from "react";
import { DropDownOrg, DropDownDest, Cabin } from "./DropDown"
import { Card } from "./Card"
import axios from "./axios.js"

export function Root() {
    const [origin, setOrigin] = useState("JFK");
    const [destination, setDestination] = useState("JFK");
    const [cabin, setCabin] = useState("Economy");
    const [fetchData, setFetchData] = useState(null)

    const emptyData = {
        data1: {
            origin: "N/A",
            destination: "N/A",
            departureTimeFrom: "N/A",
            departureTimeTo: "N/A"
        },
        data2: {
            data: [
                {
                    partner_program: "N/A",
                    min_business_miles: "N/A",
                    min_business_tax: "N/A",
                    min_economy_miles: "N/A",
                    min_economy_tax: "N/A",
                    min_first_miles: "N/A",
                    min_first_tax: "N/A"
                }
            ]
        }
    };

    async function receive() {
        await axios.post("/info", {
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

    const defaultData = fetchData || emptyData

    return <div className="text-white">
        <div className="flex flex-col items-center justify-center m-2">
            Choose Origin and Destination Airports:
            <DropDownOrg origin={origin} setOrigin={setOrigin} />
            <DropDownDest destination={destination} setDestination={setDestination} />
            <Cabin cabin={cabin} setCabin={setCabin} fn={receive} />
            <div className="flex space-x-4 mt-8">
                {/* card 1 */}
                {defaultData.data2.data[0] && (
                    <Card
                        partnerPrograms={defaultData.data2.data[0].partner_program}
                        origin={defaultData.data1.origin}
                        destination={defaultData.data1.destination}
                        departureTimeFrom={defaultData.data1.departureTimeFrom}
                        departureTimeTo={defaultData.data1.departureTimeTo}
                        min_business_miles={defaultData.data2.data[0].min_business_miles}
                        min_business_tax={defaultData.data2.data[0].min_business_tax}
                        min_economy_miles={defaultData.data2.data[0].min_economy_miles}
                        min_economy_tax={defaultData.data2.data[0].min_economy_tax}
                        min_first_miles={defaultData.data2.data[0].min_first_miles}
                        min_first_tax={defaultData.data2.data[0].min_first_tax}
                    />
                )}
                {/* card 2 */}

                {defaultData.data2.data[1] && (

                    <Card
                        partnerPrograms={defaultData.data2.data[1].partner_program}
                        origin={defaultData.data1.origin}
                        destination={defaultData.data1.destination}
                        departureTimeFrom={defaultData.data1.departureTimeFrom}
                        departureTimeTo={defaultData.data1.departureTimeTo}
                        min_business_miles={defaultData.data2.data[1].min_business_miles}
                        min_business_tax={defaultData.data2.data[1].min_business_tax}
                        min_economy_miles={defaultData.data2.data[1].min_economy_miles}
                        min_economy_tax={defaultData.data2.data[1].min_economy_tax}
                        min_first_miles={defaultData.data2.data[1].min_first_miles}
                        min_first_tax={defaultData.data2.data[1].min_first_tax}
                    />
                )}
            </div>
        </div>

    </div>
}