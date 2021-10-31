var stations = [
    {
        city: "Oslo",
        coords:[59.9139, 10.7522],
        stations: [
            {
                name:"Aker Brygge",
                coords: [59.90986575304959, 10.726450606945129],
                vehicles:{
                    cars: [{model: "TESLA Model 3 (TESLA-1)", quantity: 5}, {model: "Toyota", quantity: 5}],
                    boats: [{model: "Hydrolift X-22 (HYDRO-1) med Evoy Galeforce Outboard (EVOY-1)", quantity:3}]
                },
                description: `I Aker Brygge er det mange matbruktikker, serverignsteder og toaletter. Det er flere parkeringsplasser i området. I nærheten finner man Thon Hotel Vika Atrium og The Thief Spa.

                Avstand fra sentrum:
                Gå: 23 min
                Bil: 7 min
                Buss: 10-14 min

                Buss og Trikk ruter:
                12 Majorstuen (trikk) [Aker brygge]
                54 Tjuvholmen (buss) [Vika Atrium]
                81 Filipstad (buss) [Vika Atrium]
                32 Voksen Skog (buss) [Vika Atrium]
                
                Man kan også ta tog til nationaltheatret også gå derfra til aker brygge.`,
                address:"Aker brygge,\n0250 Oslo",
                img: "images/aker-brygge.png",
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
                description: `Marineholmen ligger ca 20 minutter med gå-avstand til Bergen sentrum. I nærheten finner man blandt annet en del kafeer og spisesteder. Det er også veldig kort avstand til Nygårdparken og VilVite, samt Institutt for biovitenskap ved Univeristetet i Bergen og Handels Høyskolen.
                Det er også lett tilgang til både Bybane og Buss.
                
                Kollektivtransport:
                Buss
                Bybane
                
                Avstand til sentrum:
                Gå: 20 min
                Bil: 6 min
                Bane: 8 min
                
                (Bergen er en by der det regner mye så her er det lurt å sjekke værmeldingen før man bruker båt)`,
                address: "5006 Marineholmen",
                img:"images/Marineholmen.jpg",
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
                img:"images/fordebaatklubb.png",
                chargers: {
                    car: 6,
                    boat: 4
                }
            }
        ]
    }
];
