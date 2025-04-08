const semiGuildsData = [
  {
    name: "Wyznawcy Graama",
    code: "zsk",
    type: "polzawodowa",
    description: "Zakon Srebrnego Kielicha to stowarzyszenie polzawodowe, ktore skupia wszelkiej masci kaplanow, uzdrowicieli i pogromcow nieumarlych. Jedynym sposobem awansu w hierarchii Zakonu Graama jest odprawianie pogrzebow. Po wstapieniu do gildii postac otrzymuje szereg umiejetnosci obejmujacy glownie szkoly magii zycia, mistycyzmu oraz czarodziejstwa.",
    races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "ork", "kmaran", "gnom", "niziolek"],
    semipaths: [
      {
        name: "default",
        activePlayers: 11,
        skills: {
          "wyczucie kierunku": 60,
          "znajomosc jezykow": 60,
          "magie zycia": 80,
          "koncentracje": 60,
          "koncentracje w walce": 60,
          "czarodziejstwo": 50,
          "mistycyzm": 80
        }
      }
    ]
  },
  {
    name: "Rycerze Srebrnego Kielicha",
    code: "rsk",
    type: "polzawodowa",
    description: "Brak.",
    races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "ork", "kmaran", "gnom", "niziolek"],
    semipaths: [
      {
        name: "tarcza",
        activePlayers: 2,
        skills: {
          "tarczownictwo": 60,
          "walke w szyku": 70,
          "magie zycia": 60,
          "koncentracje": 50,
          "koncentracje w walce": 70,
          "zaklinanie": 60
        }
      },
      {
        name: "parowanie",
        activePlayers: 0,
        skills: {
          "parowanie": 60,
          "walke w szyku": 70,
          "magie zycia": 60,
          "koncentracje": 50,
          "koncentracje w walce": 70,
          "zaklinanie": 60
        }
      },
      {
        name: "uniki",
        activePlayers: 0,
        skills: {
          "uniki": 60,
          "walke w szyku": 70,
          "magie zycia": 60,
          "koncentracje": 50,
          "koncentracje w walce": 70,
          "zaklinanie": 60
        }
      }
    ]
  },
  {
    name: "Mistrzowie",
    code: "mi",
    type: "polzawodowa",
    description: "Brak.",
    races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "ork", "kmaran", "gnom", "niziolek"],
    semipaths: [
      {
        name: "precyzja",
        activePlayers: 2,
        specs: ["mistrzowie precyzja"],
        skills: {
          "miecze": 60,
          "szable": 60,
          "sztylety": 60,
          "topory": 60,
          "maczugi": 60,
          "mloty": 60,
          "bronie drzewcowe": 60,
          "wlocznie": 60,
          "bronie lancuchowe": 60,
          "walke dwiema bronmi": 40,
          "walke w ciemnosci": 60,
          "ocene przeciwnika": 45,
          "ocene obiektu": 70,
          "szacowanie": 50,
          "wspinaczke": 65,
          "wyczucie kierunku": 50,
          "tropienie": 50,
          "spostrzegawczosc": 60,
          "skradanie sie": 50,
          "ukrywanie sie": 50,
          "rozpraszanie": 50,
          "precyzyjne uderzenie": 100
        }
      },
      {
        name: "obszarowy",
        activePlayers: 4,
        specs: ["mistrzowie obszarowy"],
        skills: {
          "miecze": 60,
          "szable": 60,
          "sztylety": 60,
          "topory": 60,
          "maczugi": 60,
          "mloty": 60,
          "bronie drzewcowe": 60,
          "wlocznie": 60,
          "bronie lancuchowe": 60,
          "walke dwiema bronmi": 40,
          "walke w ciemnosci": 60,
          "ocene przeciwnika": 45,
          "ocene obiektu": 70,
          "szacowanie": 50,
          "wspinaczke": 65,
          "wyczucie kierunku": 50,
          "tropienie": 50,
          "spostrzegawczosc": 60,
          "skradanie sie": 50,
          "ukrywanie sie": 50,
          "rozpraszanie": 50,
          "potezny zamach": 100
        }
      }
    ]
  },
  {
    name: "Lesni Szamani",
    code: "ls",
    type: "polzawodowa",
    description: "Brak.",
    races: ["goblin"],
    semipaths: [
      {
        name: "default",
        activePlayers: 2,
        skills: {
          "znajomosc jezykow": 50,
          "magie zycia": 40,
          "koncentracje": 60,
          "koncentracje w walce": 40,
          "przemiane": 60,
          "mistycyzm": 60,
          "zaklinanie": 80
        }
      }
    ]
  },
  {
    name: "Kult Smoka",
    code: "ks_l",
    type: "polzawodowa",
    description: "Brak.",
    races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "ork", "kmaran", "gnom", "niziolek"],
    semipaths: [
      {
        name: "priest",
        activePlayers: 0,
        skills: {
          "tropienie": 60,
          "spostrzegawczosc": 60,
          "znajomosc jezykow": 60,
          "skradanie sie": 60,
          "ukrywanie sie": 60
        }
      },
      {
        name: "rune master",
        activePlayers: 1,
        skills: {
          "tropienie": 60,
          "spostrzegawczosc": 60,
          "znajomosc jezykow": 60,
          "skradanie sie": 60,
          "ukrywanie sie": 60,
          "koncentracje": 60,
          "magie runiczna": 80
        }
      },
      {
        name: "dark mage",
        activePlayers: 5,
        skills: {
          "tropienie": 60,
          "spostrzegawczosc": 60,
          "znajomosc jezykow": 60,
          "skradanie sie": 60,
          "ukrywanie sie": 60,
          "magie mroku": 80,
          "koncentracje": 60,
          "koncentracje w walce": 70,
          "magie runiczna": 60
        }
      }
    ]
  },
  {
    name: "Kompania Handlowa",
    code: "kh",
    type: "polzawodowa",
    description: "Brak.",
    races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "ork", "kmaran", "gnom", "niziolek"],
    semipaths: [
      {
        name: "default",
        activePlayers: 5,
        skills: {
          "zdolnosci przywodcze": 80,
          "ocene przeciwnika": 60,
          "ocene obiektu": 80,
          "szacowanie": 90,
          "opieke nad zwierzetami": 70,
          "wyczucie kierunku": 70,
          "spostrzegawczosc": 70,
          "targowanie sie": 90,
          "jezdziectwo": 60,
          "znajomosc jezykow": 60
        }
      }
    ]
  },
  {
    name: "Bractwo Zywiolow",
    code: "bz_l",
    type: "polzawodowa",
    description: "Brak.",
    races: ["czlowiek", "elf", "krasnolud", "goblin", "reptilion", "ork", "kmaran", "gnom", "niziolek"],
    semipaths: [
      {
        name: "lay_magia wody",
        activePlayers: 0,
        skills: {
          "ocene obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magie ognia": 46,
          "magie powietrza": 46,
          "magie ziemi": 46,
          "magie wody": 81,
          "koncentracje": 70,
          "koncentracje w walce": 60,
          "czarodziejstwo": 40,
          "przemiane": 35,
          "rozpraszanie": 35
        }
      },
      {
        name: "lay_magia ziemi",
        activePlayers: 1,
        skills: {
          "ocene obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magie ognia": 46,
          "magie powietrza": 46,
          "magie ziemi": 81,
          "magie wody": 46,
          "koncentracje": 70,
          "koncentracje w walce": 60,
          "czarodziejstwo": 40,
          "przemiane": 35,
          "rozpraszanie": 35
        }
      },
      {
        name: "lay_magia powietrza",
        activePlayers: 1,
        skills: {
          "ocene obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magie ognia": 46,
          "magie powietrza": 81,
          "magie ziemi": 46,
          "magie wody": 46,
          "koncentracje": 70,
          "koncentracje w walce": 60,
          "czarodziejstwo": 40,
          "przemiane": 35,
          "rozpraszanie": 35
        }
      },
      {
        name: "lay_general",
        activePlayers: 0,
        skills: {
          "ocene obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magie ognia": 55,
          "magie powietrza": 55,
          "magie ziemi": 55,
          "magie wody": 55,
          "koncentracje": 70,
          "koncentracje w walce": 60,
          "czarodziejstwo": 40,
          "przemiane": 35,
          "rozpraszanie": 35
        }
      },
      {
        name: "lay_magia ognia",
        activePlayers: 0,
        skills: {
          "ocene obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magie ognia": 81,
          "magie powietrza": 46,
          "magie ziemi": 46,
          "magie wody": 46,
          "koncentracje": 70,
          "koncentracje w walce": 60,
          "czarodziejstwo": 40,
          "przemiane": 35,
          "rozpraszanie": 35
        }
      }
    ]
  }
];