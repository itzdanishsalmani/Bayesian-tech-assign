export function Card({ partnerPrograms, origin, destination, departureTimeFrom,
    departureTimeTo, min_business_miles, min_business_tax, min_economy_miles,
    min_economy_tax, min_first_miles, min_first_tax
}) {
    return (
        <div>
            <div className="bg-green-900 parent flex flex-col items-center w-48 h-72 rounded-lg">
                <img src="" alt="logo" />
                <div className="text-lg">{partnerPrograms}</div>
                <div>{origin} to {destination}</div>
                <div>{departureTimeFrom} {departureTimeTo}</div>
                <div> <span className="text-2xl">{min_business_miles}</span> 
                <span>{min_business_tax}</span></div>
                <div>Min Business Miles </div>

                <div><span className="text-2xl">{min_economy_miles}</span> +<span>${min_economy_tax}</span></div>
                <div>Min Economy Miles</div>

                <div><span className="text-2xl">{min_first_miles}</span> {min_first_tax}</div>
                <div>Min First Miles</div>

            </div>
        </div>
    )
}