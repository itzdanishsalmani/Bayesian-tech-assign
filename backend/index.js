const express = require ("express");
const cors = require ("cors");

const app = express()
app.use(cors())

app.get("/", (req,res)=>{

    const jsonData = {
        origin: 'SYD',
        destination: 'JFK',
        partnerPrograms: [
            'Air Canada',
            'United Airlines',
            'KLM',
            'Qantas',
            'American Airlines',
            'Etihad Airways',
            'Alaska Airlines',
            'Qatar Airways',
            'LifeMiles',
        ],
        stops: 2,
        departureTimeFrom: '2024-07-09T00:00:00Z',
        departureTimeTo: '2024-10-07T00:00:00Z',
        isOldData: false,
        limit: 302,
        offset: 0,
        cabinSelection: [
            'Business',
        ],
        date: '2024-07-09T12:00:17.796Z',
    };

    const response = {
        data: [
            {
                min_business_miles: null,
                min_business_tax: null,
                min_economy_miles: 53500,
                min_economy_tax: 189,
                min_first_miles: null,
                min_first_tax: null,
                partner_program: "KLM"
            },
            {
                min_business_miles: 144600,
                min_business_tax: 177,
                min_economy_miles: 55200,
                min_economy_tax: 158,
                min_first_miles: null,
                min_first_tax: null,
                partner_program: "Qantas"
            }
        ]
    };

    res.json(jsonData,response);
});

app.listen(3000,()=>{
    console.log("Server is running")
})