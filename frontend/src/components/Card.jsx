export function Card({partnerPrograms, origin, destination, departureTimeFrom, 
    departureTimeTo, min_business_miles, min_business_tax, min_economy_miles,
    min_economy_tax, min_first_miles, min_first_tax
}) {
    return (
        <div>
            <div className="parent flex flex-col items-center w-48 h-72 border">
                <img src="" alt="logo" />
                <div className="text-lg">{partnerPrograms}</div>
                <div>{origin} to {destination}</div>
                <div>{departureTimeFrom} {departureTimeTo}</div>
                <div> {min_business_miles} {min_business_tax}</div>
                <div>Min Business Miles </div>

            <div>{min_economy_miles} {min_economy_tax}</div>
            <div>Min Economy Miles</div>

            <div>{min_first_miles} {min_first_tax}</div>
            <div>Min First Miles</div>

            </div>
        </div>
    )
}