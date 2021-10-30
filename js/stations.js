var stations = [
    {
        city: "Oslo",
        coords:[59.9139, 10.7522],
        stations: [
            {
                name:"Aker Brygge",
                coords: [59.90986575304959, 10.726450606945129],
                vehicles:{
                    cars: [{model: "TESLA Model 3 (TESLA-1)", quantity: 5}],
                    boats: [{model: "Hydrolift X-22 (HYDRO-1) med Evoy Galeforce Outboard (EVOY-1)", quantity:3}]
                },
                description: `Sentrum - Aker brygge (tid)
                gå 23 min bli 7 min
                * buss 10-14 min
                
                Buss + Trykk
                12 Majorstuen (trykk) [Aker brygge] 54 Tjuvholmen (buss) [Vika Atrium]
                81 Filipstad (buss) [Vika Atrium] 32 Voksen skog (buss) [Vika Atrium]
                - man kan også ta tog til nationaltheartret også gå derfra til aker brygge.
                
                Nær hotel:
                Thon hotel vika atrium Hotel nær
                * The theif spa
                
                Rund in i Aker brygge er det mange matbruktikker og serverignsteder. Det er også toaletter er tilgjengelig. Det er flere steder rund aker brygge der man har mulighet til å parkere.`,
                address:"Aker brygge, 0250 Oslo",
                img: "",
                chargers: {
                    car: 6,
                    boat: 4
                }
            }
        ],
        
    },
    {
        city: "Bergen",
        coords: [60.3913, 5.3221],
        stations: [
            {
                name:"Marineholmen",
                coords: [60.38154003563324, 5.329989669622447],
                vehicles:{
                    cars: [{model: "TESLA Model 3 (TESLA-1)", quantity: 5}],
                    boats: [{model: "Hydrolift X-22 (HYDRO-1) med Evoy Galeforce Outboard (EVOY-1)", quantity:3}]
                },
                description: "",
                img:"",
                chargers: {
                    car: 6,
                    boat: 4
                }
            }
        ]
    },
    {
        city: "Førde",
        coords: [61.4536, 5.8497],
        stations: [
            {
                name:"Førde Båtklubb",
                coords: [61.45840280666341, 5.845483798503867],
                vehicles:{
                    cars: [{model: "TESLA Model 3 (TESLA-1)", quantity: 5}],
                    boats: [{model: "Hydrolift X-22 (HYDRO-1) med Evoy Galeforce Outboard (EVOY-1)", quantity:3}]
                },
                description: `Førde Båtklubb ligger under 10 minutter fra Førde sentrum. I sentrum er det matbuttiker og serveringsteder. Det er også toalett tilgjengelig. Båtklubben ligger ikkje langt fra hovudveien, som har flere buss stop langs vegen.
                På utlånstedet har vi lademuligheter for biler og båter. Det er også lademuligheter i sentrum, for eksempel med elvetorget.`,
                address: "Firdavegen 22, 6800 Førde",
                img:"",
                chargers: {
                    car: 6,
                    boat: 4
                }
            }
        ]
    }
];
