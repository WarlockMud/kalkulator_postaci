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
          "magia zycia": 80,
          "koncentracja": 60,
          "koncentracja w walce": 60,
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
          "magia zycia": 60,
          "koncentracja": 50,
          "koncentracja w walce": 70,
          "zaklinanie": 60
        }
      },
      {
        name: "parowanie",
        activePlayers: 0,
        skills: {
          "parowanie": 60,
          "walke w szyku": 70,
          "magia zycia": 60,
          "koncentracja": 50,
          "koncentracja w walce": 70,
          "zaklinanie": 60
        }
      },
      {
        name: "uniki",
        activePlayers: 0,
        skills: {
          "uniki": 60,
          "walke w szyku": 70,
          "magia zycia": 60,
          "koncentracja": 50,
          "koncentracja w walce": 70,
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
          "walka dwiema bronmi": 40,
          "walka w ciemnosci": 60,
          "ocena przeciwnika": 45,
          "ocena obiektu": 70,
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
          "walka dwiema bronmi": 40,
          "walka w ciemnosci": 60,
          "ocena przeciwnika": 45,
          "ocena obiektu": 70,
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
          "magia zycia": 40,
          "koncentracja": 60,
          "koncentracja w walce": 40,
          "przemiana": 60,
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
          "koncentracja": 60,
          "magia runiczna": 80
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
          "magia mroku": 80,
          "koncentracja": 60,
          "koncentracja w walce": 70,
          "magia runiczna": 60
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
          "ocena przeciwnika": 60,
          "ocena obiektu": 80,
          "szacowanie": 90,
          "opieka nad zwierzetami": 70,
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
          "ocena obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magia ognia": 46,
          "magia powietrza": 46,
          "magia ziemi": 46,
          "magia wody": 81,
          "koncentracja": 70,
          "koncentracja w walce": 60,
          "czarodziejstwo": 40,
          "przemiana": 35,
          "rozpraszanie": 35
        }
      },
      {
        name: "lay_magia ziemi",
        activePlayers: 1,
        skills: {
          "ocena obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magia ognia": 46,
          "magia powietrza": 46,
          "magia ziemi": 81,
          "magia wody": 46,
          "koncentracja": 70,
          "koncentracja w walce": 60,
          "czarodziejstwo": 40,
          "przemiana": 35,
          "rozpraszanie": 35
        }
      },
      {
        name: "lay_magia powietrza",
        activePlayers: 1,
        skills: {
          "ocena obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magia ognia": 46,
          "magia powietrza": 81,
          "magia ziemi": 46,
          "magia wody": 46,
          "koncentracja": 70,
          "koncentracja w walce": 60,
          "czarodziejstwo": 40,
          "przemiana": 35,
          "rozpraszanie": 35
        }
      },
      {
        name: "lay_general",
        activePlayers: 0,
        skills: {
          "ocena obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magia ognia": 55,
          "magia powietrza": 55,
          "magia ziemi": 55,
          "magia wody": 55,
          "koncentracja": 70,
          "koncentracja w walce": 60,
          "czarodziejstwo": 40,
          "przemiana": 35,
          "rozpraszanie": 35
        }
      },
      {
        name: "lay_magia ognia",
        activePlayers: 0,
        skills: {
          "ocena obiektu": 35,
          "szacowanie": 35,
          "znajomosc jezykow": 45,
          "magia ognia": 81,
          "magia powietrza": 46,
          "magia ziemi": 46,
          "magia wody": 46,
          "koncentracja": 70,
          "koncentracja w walce": 60,
          "czarodziejstwo": 40,
          "przemiana": 35,
          "rozpraszanie": 35
        }
      }
    ]
  }
];
