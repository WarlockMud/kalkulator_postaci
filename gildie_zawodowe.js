 // Guild Data Structure
        const guildsData = [
            {
                name: "Szermierze",
                code: "sz",
                type: "zawodowa",
                races: ["czlowiek", "elf", "niziolek", "kmaran", "gnom", "reptilion"],
                paths: [
                    {
                        name: "fechmistrz",
                        activePlayers: 4,
                        specs: ["pchniecie szermierzy", "rozbrojenie szermierzy"],
                        skills: {
                            "miecze": 85,
                            "sztylety": 91,
                            "walke dwiema bronmi": 70,
                            "parowanie": 70,
                            "uniki": 70,
                            "ocene przeciwnika": 70,
                            "ocene obiektu": 60,
                            "opieke nad zwierzetami": 50,
                            "spostrzegawczosc": 60,
                            "jezdziectwo": 50,
                            "znajomosc jezykow": 50,
                            "fechtunek": 100
                        }
                    },
                    {
                        name: "zaklinacz ostrzy",
                        activePlayers: 0,
                        specs: [],
                        skills: {
                            "miecze": 95,
                            "maczugi": 95,
                            "parowanie": 80,
                            "uniki": 75,
                            "ocene przeciwnika": 70,
                            "ocene obiektu": 60,
                            "opieke nad zwierzetami": 50,
                            "spostrzegawczosc": 60,
                            "jezdziectwo": 50,
                            "znajomosc jezykow": 50,
                            "koncentracje": 60,
                            "koncentracje w walce": 70,
                            "rozpraszanie": 80
                        }
                    }
                ]
            },
            {
                name: "Magowie Minas-Morgul",
                code: "mm",
                type: "zawodowa",
                races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "ork", "kmaran", "gnom", "niziolek"],
                paths: [
                    {
                        name: "mroczny wojownik",
                        activePlayers: 1,
                        specs: ["widmowe ciecie Morgulu"],
                        skills: {
                            "miecze": 90,
                            "mloty": 90,
                            "bronie drzewcowe": 90,
                            "parowanie": 85,
                            "uniki": 75,
                            "ocene przeciwnika": 50,
                            "ocene obiektu": 50,
                            "opieke nad zwierzetami": 50,
                            "wyczucie kierunku": 70,
                            "spostrzegawczosc": 65,
                            "jezdziectwo": 60,
                            "znajomosc jezykow": 65,
                            "niematerialne ciecie": 100
                        }
                    },
                    {
                        name: "mroczny kaplan",
                        activePlayers: 2,
                        specs: ["tchnienie Morgulu"],
                        skills: {
                            "sztylety": 70,
                            "bicze": 70,
                            "parowanie": 50,
                            "uniki": 50,
                            "ocene przeciwnika": 50,
                            "ocene obiektu": 50,
                            "opieke nad zwierzetami": 50,
                            "wyczucie kierunku": 70,
                            "spostrzegawczosc": 65,
                            "jezdziectwo": 60,
                            "znajomosc jezykow": 65,
                            "magie mroku": 85,
                            "koncentracje": 80,
                            "koncentracje w walce": 80,
                            "iluzje": 80
                        }
                    },
                    {
                        name: "rycerz morgulu",
                        activePlayers: 8,
                        specs: ["manewry Morgulu"],
                        skills: {
                            "sztylety": 80,
                            "mloty": 80,
                            "walke dwiema bronmi": 65,
                            "parowanie": 65,
                            "uniki": 65,
                            "tarczownictwo": 65,
                            "ocene przeciwnika": 50,
                            "ocene obiektu": 50,
                            "opieke nad zwierzetami": 50,
                            "wyczucie kierunku": 70,
                            "spostrzegawczosc": 65,
                            "jezdziectwo": 60,
                            "znajomosc jezykow": 65,
                            "manewry bojowe": 100
                        }
                    }
                ]
            },
            {
                name: "Ludzie Piaskow",
                code: "lp",
                type: "zawodowa",
                races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "ork", "kmaran", "gnom", "niziolek"],
                paths: [
                    {
                        name: "krytyki",
                        activePlayers: 0,
                        specs: [],
                        skills: {
                            "szable": 90,
                            "sztylety": 100,
                            "walke dwiema bronmi": 60,
                            "parowanie": 70,
                            "uniki": 70,
                            "wyczucie kierunku": 55,
                            "tropienie": 60,
                            "spostrzegawczosc": 80,
                            "skradanie sie": 50,
                            "ukrywanie sie": 50,
                            "wyczucie slabosci": 60,
                            "rzut piaskiem": 100,
                            "ciecie": 100
                        }
                    },
                    {
                        name: "default",
                        activePlayers: 2,
                        specs: ["sypniecie piaskiem", "dzgniecie"],
                        skills: {
                            "szable": 90,
                            "sztylety": 100,
                            "walke dwiema bronmi": 60,
                            "parowanie": 70,
                            "uniki": 70,
                            "wyczucie kierunku": 55,
                            "tropienie": 60,
                            "spostrzegawczosc": 80,
                            "skradanie sie": 50,
                            "ukrywanie sie": 50,
                            "rzut piaskiem": 100,
                            "ciecie": 100
                        }
                    }
                ]
            },
            {
                name: "Lesne Legendy",
                code: "ll",
                type: "zawodowa",
                races: ["goblin"],
                paths: [
                    {
                        name: "default",
                        activePlayers: 4,
                        specs: ["chlasniecie toporem"],
                        skills: {
                            "topory": 80,
                            "maczugi": 80,
                            "walke dwiema bronmi": 70,
                            "parowanie": 60,
                            "uniki": 70,
                            "ocene przeciwnika": 50,
                            "ocene obiektu": 50,
                            "szacowanie": 50,
                            "wyczucie kierunku": 61,
                            "tropienie": 60,
                            "spostrzegawczosc": 60,
                            "skradanie sie": 60,
                            "ukrywanie sie": 70,
                            "regeneracje": 100,
                            "odpornosc": 100,
                            "chlasniecie": 100
                        }
                    }
                ]
            },
            {
                name: "Lesne Duchy",
                code: "ld",
                type: "zawodowa",
                races: ["elf"],
                paths: [
                    {
                        name: "miecz",
                        activePlayers: 3,
                        specs: ["taniec broni"],
                        skills: {
                            "miecze": 90,
                            "sztylety": 90,
                            "walke dwiema bronmi": 60,
                            "parowanie": 60,
                            "uniki": 70,
                            "wyczucie kierunku": 70,
                            "tropienie": 70,
                            "spostrzegawczosc": 80,
                            "skradanie sie": 80,
                            "ukrywanie sie": 80,
                            "taniec broni": 100
                        }
                    },
                    {
                        name: "wlocznia",
                        activePlayers: 0,
                        specs: ["taniec broni"],
                        skills: {
                            "sztylety": 90,
                            "wlocznie": 90,
                            "parowanie": 90,
                            "uniki": 80,
                            "wyczucie kierunku": 70,
                            "tropienie": 70,
                            "spostrzegawczosc": 80,
                            "skradanie sie": 80,
                            "ukrywanie sie": 80,
                            "taniec broni": 100
                        }
                    }
                ]
            },
            {
                name: "Khazad-Dum",
                code: "kd",
                type: "zawodowa",
                races: ["krasnolud", "gnom"],
                paths: [
                    {
                        name: "default",
                        activePlayers: 2,
                        specs: ["krasnoludzka riposta"],
                        skills: {
                            "topory": 85,
                            "mloty": 85,
                            "walke w ciemnosci": 70,
                            "parowanie": 60,
                            "tarczownictwo": 80,
                            "walke w szyku": 55,
                            "ocene przeciwnika": 60,
                            "ocene obiektu": 60,
                            "plywanie": 75,
                            "wspinaczke": 80,
                            "wyczucie kierunku": 70,
                            "tropienie": 75,
                            "spostrzegawczosc": 70,
                            "znajomosc jezykow": 60,
                            "riposte": 100
                        }
                    }
                ]
            },
            {
                name: "Gwardia Katana",
                code: "gk",
                type: "zawodowa",
                races: ["ork", "czlowiek"],
                paths: [
                    {
                        name: "default",
                        activePlayers: 2,
                        specs: ["uderzenie tarcza", "ciecie szabla"],
                        skills: {
                            "szable": 95,
                            "bronie lancuchowe": 95,
                            "parowanie": 70,
                            "tarczownictwo": 75,
                            "walke w szyku": 70,
                            "ocene przeciwnika": 50,
                            "ocene obiektu": 50,
                            "szacowanie": 50,
                            "plywanie": 60,
                            "wspinaczke": 80,
                            "wyczucie kierunku": 50,
                            "tropienie": 60,
                            "spostrzegawczosc": 60,
                            "uderzenie tarcza": 100,
                            "gwardyjski cios": 100
                        }
                    }
                ]
            },
            {
                name: "Druidzki Krag",
                code: "dr",
                type: "zawodowa",
                races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "kmaran", "gnom", "niziolek"],
                paths: [
                    {
                        name: "zmiennoksztaltny",
                        activePlayers: 7,
                        specs: ["zwinny cios"],
                        skills: {
                            "walke bez broni": 80,
                            "uniki": 75,
                            "ocene przeciwnika": 55,
                            "opieke nad zwierzetami": 60,
                            "wyczucie kierunku": 60,
                            "tropienie": 50,
                            "spostrzegawczosc": 60,
                            "jezdziectwo": 50,
                            "skradanie sie": 40,
                            "ukrywanie sie": 40,
                            "zwinny cios": 100,
                            "koncentracje": 50,
                            "koncentracje w walce": 50,
                            "przemiane": 80,
                            "przywolywanie": 40
                        }
                    },
                    {
                        name: "przywolywacz",
                        activePlayers: 7,
                        specs: [],
                        skills: {
                            "bronie drzewcowe": 60,
                            "wlocznie": 60,
                            "parowanie": 70,
                            "ocene przeciwnika": 55,
                            "opieke nad zwierzetami": 60,
                            "wyczucie kierunku": 60,
                            "tropienie": 50,
                            "spostrzegawczosc": 60,
                            "jezdziectwo": 50,
                            "skradanie sie": 40,
                            "ukrywanie sie": 40,
                            "koncentracje": 70,
                            "koncentracje w walce": 50,
                            "iluzje": 70,
                            "przywolywanie": 80
                        }
                    }
                ]
            },
			{
                name: "Armia Saurona",
                code: "ar",
                type: "zawodowa",
                races: ["ork", "goblin", "reptilion"],
                paths: [
                    {
                        name: "default",
                        activePlayers: 7,
                        specs: ["crush"],
                        skills: {
                            "miecze": 85,
                            "topory": 85,
                            "maczugi": 85,
                            "mloty": 85,
                            "parowanie": 75,
                            "tarczownictwo": 75,
                            "walke w szyku": 65,
                            "ocene przeciwnika": 70,
                            "wspinaczke ": 70,
                            "wyczucie kierunku": 70,
                            "spostrzegawczosc": 75,
                            "walke tarcza": 100
                        }
                    },
                    
                ]
            },
            {
                name: "Bractwo Zywiolow",
                code: "bz_o",
                type: "zawodowa",
                races: ["czlowiek", "elf", "krasnolud", "reptilion", "kmaran", "gnom", "niziolek"],
                paths: [
                    {
                        name: "occ_magia ognia",
                        activePlayers: 2,
                        specs: [],
                        skills: {
                            "ocene obiektu": 40,
                            "szacowanie": 40,
                            "znajomosc jezykow": 55,
                            "magie ognia": 99,
                            "magie powietrza": 67,
                            "magie ziemi": 67,
                            "magie wody": 67,
                            "koncentracje": 90,
                            "koncentracje w walce": 70,
                            "magie runiczna": 40,
                            "czarodziejstwo": 40,
                            "przemiane": 40,
                            "zaklinanie": 35,
                            "rozpraszanie": 40
                        }
                    },
                    {
                        name: "occ_magia powietrza",
                        activePlayers: 1,
                        specs: [],
                        skills: {
                            "ocene obiektu": 40,
                            "szacowanie": 40,
                            "znajomosc jezykow": 55,
                            "magie ognia": 67,
                            "magie powietrza": 99,
                            "magie ziemi": 67,
                            "magie wody": 67,
                            "koncentracje": 90,
                            "koncentracje w walce": 70,
                            "magie runiczna": 40,
                            "czarodziejstwo": 40,
                            "przemiane": 40,
                            "zaklinanie": 35,
                            "rozpraszanie": 40
                        }
                    },
                    {
                        name: "occ_magia wody",
                        activePlayers: 1,
                        specs: [],
                        skills: {
                            "ocene obiektu": 40,
                            "szacowanie": 40,
                            "znajomosc jezykow": 55,
                            "magie ognia": 67,
                            "magie powietrza": 67,
                            "magie ziemi": 67,
                            "magie wody": 99,
                            "koncentracje": 90,
                            "koncentracje w walce": 70,
                            "magie runiczna": 40,
                            "czarodziejstwo": 40,
                            "przemiane": 40,
                            "zaklinanie": 35,
                            "rozpraszanie": 40
                        }
                    },
                    {
                        name: "occ_general",
                        activePlayers: 1,
                        specs: [],
                        skills: {
                            "ocene obiektu": 40,
                            "szacowanie": 40,
                            "znajomosc jezykow": 55,
                            "magie ognia": 75,
                            "magie powietrza": 75,
                            "magie ziemi": 75,
                            "magie wody": 75,
                            "koncentracje": 90,
                            "koncentracje w walce": 70,
                            "magie runiczna": 40,
                            "czarodziejstwo": 40,
                            "przemiane": 40,
                            "zaklinanie": 35,
                            "rozpraszanie": 40
                        }
                    },
                    {
                        name: "occ_magia ziemi",
                        activePlayers: 1,
                        specs: [],
                        skills: {
                            "ocene obiektu": 40,
                            "szacowanie": 40,
                            "znajomosc jezykow": 55,
                            "magie ognia": 67,
                            "magie powietrza": 67,
                            "magie ziemi": 99,
                            "magie wody": 67,
                            "koncentracje": 90,
                            "koncentracje w walce": 70,
                            "magie runiczna": 40,
                            "czarodziejstwo": 40,
                            "przemiane": 40,
                            "zaklinanie": 35,
                            "rozpraszanie": 40
                        }
                    }
                ]
            }
        ];