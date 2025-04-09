// Slowa Data Structure
const slowaData = [
    { name: "wybraniec losu", cost: 10, description: "podnosi zauwazalnie prawdopodobienstwo zdobycia lepszych run (3)", effects: [{ type: "increase", stat: "prawdopodobienstwo zdobycia lepszych run", value: 3, intensity: "zauwazalnie" }] },
    {
        name: "widzacy", cost: 10, description: "podnosi troche umiejetnosc w ocenianiu wlasnosci przedmiotow (20), troche umiejetnosc w szacowaniu wartosci przedmiotow (20) oraz sporo widzenie w ciemnosci (4) ponadto pozwala widziec magiczna energie (100)", effects: [
            { type: "increase", stat: "umiejetnosc w ocenianiu wlasnosci przedmiotow", value: 20, intensity: "troche" },
            { type: "increase", stat: "umiejetnosc w szacowaniu wartosci przedmiotow", value: 20, intensity: "troche" },
            { type: "increase", stat: "widzenie w ciemnosci", value: 4, intensity: "sporo" },
            { type: "special", description: "pozwala widziec magiczna energie", value: 100 }
        ]
    },
    {
        name: "leniuszek", cost: 20, description: "podnosi troche umiejetnosc w ocenianiu wlasnosci przedmiotow (20) ponadto juz nigdy nie bedziesz musial odwiedzac kowala (1)", effects: [
            { type: "increase", stat: "umiejetnosc w ocenianiu wlasnosci przedmiotow", value: 20, intensity: "troche" },
            { type: "special", description: "juz nigdy nie bedziesz musial odwiedzac kowala", value: 1 }
        ]
    },
    {
        name: "duzo wiecej", cost: 10, description: "podnosi zauwazalnie prawdopodobienstwo zdobycia dodatkowych run (150)", effects: [
            { type: "increase", stat: "prawdopodobienstwo zdobycia dodatkowych run", value: 150, intensity: "zauwazalnie" }
        ]
    },
    {
        name: "jajoglowy", cost: 10, description: "podnosi sporo ilosc zapamietanych czarow (6) oraz nieco wielkosc listy dozwolonych czarow (3)", effects: [
            { type: "increase", stat: "ilosc zapamietanych czarow", value: 6, intensity: "sporo" },
            { type: "increase", stat: "wielkosc listy dozwolonych czarow", value: 3, intensity: "nieco" }
        ]
    },
    {
        name: "spekulant", cost: 20, description: "podnosi troche umiejetnosc w zawieraniu korzystnych transakcji handlowych (20)", effects: [
            { type: "increase", stat: "umiejetnosc w zawieraniu korzystnych transakcji handlowych", value: 20, intensity: "troche" }
        ]
    },
    {
        name: "profesor", cost: 20, description: "podnosi nieznacznie ilosc doswiadczenia przekazywanego na inteligencje (1500) oraz nieznacznie ilosc doswiadczenia przekazywanego na madrosc (1500)", effects: [
            { type: "increase", stat: "ilosc doswiadczenia przekazywanego na inteligencje", value: 1500, intensity: "nieznacznie" },
            { type: "increase", stat: "ilosc doswiadczenia przekazywanego na madrosc", value: 1500, intensity: "nieznacznie" }
        ]
    },
    {
        name: "miesniak", cost: 20, description: "podnosi minimalnie ilosc doswiadczenia przekazywanego na sile (1000), minimalnie ilosc doswiadczenia przekazywanego na zrecznosc (1000) oraz minimalnie ilosc doswiadczenia przekazywanego na wytrzymalosc (1000)", effects: [
            { type: "increase", stat: "ilosc doswiadczenia przekazywanego na sile", value: 1000, intensity: "minimalnie" },
            { type: "increase", stat: "ilosc doswiadczenia przekazywanego na zrecznosc", value: 1000, intensity: "minimalnie" },
            { type: "increase", stat: "ilosc doswiadczenia przekazywanego na wytrzymalosc", value: 1000, intensity: "minimalnie" }
        ]
    },
    {
        name: "heros", cost: 20, description: "podnosi nieznacznie ilosc doswiadczenia przekazywanego na odwage (2000)", effects: [
            { type: "increase", stat: "ilosc doswiadczenia przekazywanego na odwage", value: 2000, intensity: "nieznacznie" }
        ]
    },
    {
        name: "kopacz", cost: 10, description: "podnosi troche umiejetnosc w wydobywaniu mineralow spod ziemi (20)", effects: [
            { type: "increase", stat: "umiejetnosc w wydobywaniu mineralow spod ziemi", value: 20, intensity: "troche" }
        ]
    },
    {
        name: "wytapiacz", cost: 10, description: "podnosi troche umiejetnosc w metalurgii (20)", effects: [
            { type: "increase", stat: "umiejetnosc w metalurgii", value: 20, intensity: "troche" }
        ]
    },
    {
        name: "kolekcjoner", cost: 20, description: "podnosi nieznacznie ilosc przedmiotow ktore mozesz trwale zabezpieczyc (1)", effects: [
            { type: "increase", stat: "ilosc przedmiotow ktore mozesz trwale zabezpieczyc", value: 1, intensity: "nieznacznie" }
        ]
    },
    {
        name: "szczesciarz", cost: 10, description: "podnosi nieco prawdopodobienstwo zdobycia lepszych run (2)", effects: [
            { type: "increase", stat: "prawdopodobienstwo zdobycia lepszych run", value: 2, intensity: "nieco" }
        ]
    },
    {
        name: "wiecej", cost: 10, description: "podnosi nieco prawdopodobienstwo zdobycia dodatkowych run (75)", effects: [
            { type: "increase", stat: "prawdopodobienstwo zdobycia dodatkowych run", value: 75, intensity: "nieco" }
        ]
    },
    {
        name: "witalny", cost: 20, description: "podnosi ogromnie regeneracje kondycji (100)", effects: [
            { type: "increase", stat: "regeneracje kondycji", value: 100, intensity: "ogromnie" }
        ]
    },
    {
        name: "uduchowiony", cost: 20, description: "podnosi minimalnie regeneracje many (5)", effects: [
            { type: "increase", stat: "regeneracje many", value: 5, intensity: "minimalnie" }
        ]
    },
    {
        name: "niezmordowany", cost: 20, description: "podnosi troche regeneracje zmeczenia (40)", effects: [
            { type: "increase", stat: "regeneracje zmeczenia", value: 40, intensity: "troche" }
        ]
    },
    {
        name: "farciarz", cost: 20, description: "podnosi zauwazalnie szczescie (50)", effects: [
            { type: "increase", stat: "szczescie", value: 50, intensity: "zauwazalnie" }
        ]
    },
    {
        name: "silny", cost: 30, description: "podnosi nieznacznie sile (20)", effects: [
            { type: "increase", stat: "sile", value: 20, intensity: "nieznacznie" }
        ]
    },
    {
        name: "zreczny", cost: 30, description: "podnosi nieznacznie zrecznosc (20)", effects: [
            { type: "increase", stat: "zrecznosc", value: 20, intensity: "nieznacznie" }
        ]
    },
    {
        name: "wytrzymaly", cost: 30, description: "podnosi nieznacznie wytrzymalosc (20)", effects: [
            { type: "increase", stat: "wytrzymalosc", value: 20, intensity: "nieznacznie" }
        ]
    },
    {
        name: "inteligentny", cost: 30, description: "podnosi nieznacznie inteligencje (20)", effects: [
            { type: "increase", stat: "inteligencje", value: 20, intensity: "nieznacznie" }
        ]
    },
    {
        name: "madry", cost: 30, description: "podnosi nieznacznie madrosc (20)", effects: [
            { type: "increase", stat: "madrosc", value: 20, intensity: "nieznacznie" }
        ]
    },
    {
        name: "odwazny", cost: 30, description: "podnosi nieznacznie odwage (20)", effects: [
            { type: "increase", stat: "odwage", value: 20, intensity: "nieznacznie" }
        ]
    },
    {
        name: "szampierz", cost: 30, description: "podnosi nieznacznie umiejetnosci walki wszystkimi bronmi (10)", effects: [
            { type: "increase", stat: "umiejetnosci walki wszystkimi bronmi", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "karateka", cost: 30, description: "podnosi nieznacznie umiejetnosc w walce bez broni (10)", effects: [
            { type: "increase", stat: "umiejetnosc w walce bez broni", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "patelnia", cost: 30, description: "podnosi nieznacznie umiejetnosc w skutecznym uzywaniu tarczy (10)", effects: [
            { type: "increase", stat: "umiejetnosc w skutecznym uzywaniu tarczy", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "lewak", cost: 30, description: "podnosi nieznacznie umiejetnosc w parowaniu ciosow przeciwnika (10)", effects: [
            { type: "increase", stat: "umiejetnosc w parowaniu ciosow przeciwnika", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "wicher", cost: 30, description: "podnosi nieznacznie umiejetnosc w unikaniu ciosow przeciwnika (10)", effects: [
            { type: "increase", stat: "umiejetnosc w unikaniu ciosow przeciwnika", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "tancerz", cost: 30, description: "podnosi nieznacznie umiejetnosc w walce dwiema bronmi jednoczesnie (10)", effects: [
            { type: "increase", stat: "umiejetnosc w walce dwiema bronmi jednoczesnie", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "koniuszy", cost: 30, description: "podnosi troche umiejetnosc w walce z konskiego grzbietu (20)", effects: [
            { type: "increase", stat: "umiejetnosc w walce z konskiego grzbietu", value: 20, intensity: "troche" }
        ]
    },
    {
        name: "przyboczny", cost: 30, description: "podnosi troche umiejetnosc w walce w szyku (20)", effects: [
            { type: "increase", stat: "umiejetnosc w walce w szyku", value: 20, intensity: "troche" }
        ]
    },
    {
        name: "przywodca", cost: 30, description: "podnosi troche umiejetnosc w wywieraniu wplywu na innych (20)", effects: [
            { type: "increase", stat: "umiejetnosc w wywieraniu wplywu na innych", value: 20, intensity: "troche" }
        ]
    },
    {
        name: "ogien", cost: 30, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia ognia (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia ognia", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "powietrze", cost: 30, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia powietrza (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia powietrza", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "ziemia", cost: 30, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia ziemi (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia ziemi", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "woda", cost: 30, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia wody (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia wody", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "zycie", cost: 30, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia zycia (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia zycia", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "smierc", cost: 30, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia mroku (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia mroku", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "przemiana", cost: 30, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia przemiany (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia przemiany", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "mistycyzm", cost: 30, description: "podnosi nieznacznie umiejetnosc w mistycyzmie (10)", effects: [
            { type: "increase", stat: "umiejetnosc w mistycyzmie", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "zaklinanie", cost: 30, description: "podnosi nieznacznie umiejetnosc w zaklinaniu (10)", effects: [
            { type: "increase", stat: "umiejetnosc w zaklinaniu", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "przywolywanie", cost: 30, description: "podnosi nieznacznie umiejetnosc w magii tworzenia i przywolywania (10)", effects: [
            { type: "increase", stat: "umiejetnosc w magii tworzenia i przywolywania", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "iluzja", cost: 30, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia iluzji (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia iluzji", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "rozpraszanie", cost: 30, description: "podnosi nieznacznie umiejetnosc w rozpraszaniu zaklec (10)", effects: [
            { type: "increase", stat: "umiejetnosc w rozpraszaniu zaklec", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "czarodziejstwo", cost: 30, description: "podnosi nieznacznie umiejetnosc w znajomosci i uzywaniu magii (10)", effects: [
            { type: "increase", stat: "umiejetnosc w znajomosci i uzywaniu magii", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "runy", cost: 30, description: "podnosi nieznacznie umiejetnosc w pisaniu i uzywaniu run (10)", effects: [
            { type: "increase", stat: "umiejetnosc w pisaniu i uzywaniu run", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "koncentracja", cost: 30, description: "podnosi nieznacznie umiejetnosc w koncentrowaniu swoich magicznych zdolnosci (10)", effects: [
            { type: "increase", stat: "umiejetnosc w koncentrowaniu swoich magicznych zdolnosci", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "waleczny spokoj", cost: 30, description: "podnosi troche umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki (20)", effects: [
            { type: "increase", stat: "umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki", value: 20, intensity: "troche" }
        ]
    },
    {
        name: "wojownik", cost: 50, description: "pozwala trenowac umiejetnosci walki wszystkimi bronmi na poprawnie (60), pozwala trenowac umiejetnosc w skutecznym uzywaniu tarczy na znosnie (45), pozwala trenowac umiejetnosc w parowaniu ciosow przeciwnika na znosnie (45) oraz pozwala trenowac umiejetnosc w unikaniu ciosow przeciwnika na znosnie (45)", effects: [
            { type: "special", description: "pozwala trenowac umiejetnosci walki wszystkimi bronmi na poprawnie", value: 60 },
            { type: "special", description: "pozwala trenowac umiejetnosc w skutecznym uzywaniu tarczy na znosnie", value: 45 },
            { type: "special", description: "pozwala trenowac umiejetnosc w parowaniu ciosow przeciwnika na znosnie", value: 45 },
            { type: "special", description: "pozwala trenowac umiejetnosc w unikaniu ciosow przeciwnika na znosnie", value: 45 }
        ]
    },
    {
        name: "mag", cost: 50, description: "pozwala trenowac umiejetnosci ze wszystkich szkol magii na powierzchownie (40), pozwala trenowac umiejetnosc w koncentrowaniu swoich magicznych zdolnosci na poprawnie (60) oraz pozwala trenowac umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki na znosnie (50)", effects: [
            { type: "special", description: "pozwala trenowac umiejetnosci ze wszystkich szkol magii na powierzchownie", value: 40 },
            { type: "special", description: "pozwala trenowac umiejetnosc w koncentrowaniu swoich magicznych zdolnosci na poprawnie", value: 60 },
            { type: "special", description: "pozwala trenowac umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki na znosnie", value: 50 }
        ]
    },
    {
        name: "galop", cost: 40, description: "podnosi zauwazalnie umiejetnosc w jezdzie konnej (25), sporo umiejetnosc w walce z konskiego grzbietu (30) oraz nieznacznie umiejetnosci walki wszystkimi bronmi (10)", effects: [
            { type: "increase", stat: "umiejetnosc w jezdzie konnej", value: 25, intensity: "zauwazalnie" },
            { type: "increase", stat: "umiejetnosc w walce z konskiego grzbietu", value: 30, intensity: "sporo" },
            { type: "increase", stat: "umiejetnosci walki wszystkimi bronmi", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "mikstura", cost: 40, description: "podnosi troche umiejetnosc w warzeniu i rozpoznawaniu mikstur (20), troche umiejetnosc w znajdowaniu i rozpoznawaniu ziol (20) oraz nieznacznie umiejetnosc w poslugiwaniu sie magia przemiany (10)", effects: [
            { type: "increase", stat: "umiejetnosc w warzeniu i rozpoznawaniu mikstur", value: 20, intensity: "troche" },
            { type: "increase", stat: "umiejetnosc w znajdowaniu i rozpoznawaniu ziol", value: 20, intensity: "troche" },
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia przemiany", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "berserker", cost: 40, description: "podnosi troche umiejetnosci walki wszystkimi bronmi (20) oraz troche umiejetnosc w walce bez broni (20) natomiast obniza nieznacznie umiejetnosc w unikaniu ciosow przeciwnika (-10), nieznacznie umiejetnosc w parowaniu ciosow przeciwnika (-10), nieznacznie umiejetnosc w skutecznym uzywaniu tarczy (-10) oraz minimalnie wytrzymalosc (-10)", effects: [
            { type: "increase", stat: "umiejetnosci walki wszystkimi bronmi", value: 20, intensity: "troche" },
            { type: "increase", stat: "umiejetnosc w walce bez broni", value: 20, intensity: "troche" },
            { type: "decrease", stat: "umiejetnosc w unikaniu ciosow przeciwnika", value: -10, intensity: "nieznacznie" },
            { type: "decrease", stat: "umiejetnosc w parowaniu ciosow przeciwnika", value: -10, intensity: "nieznacznie" },
            { type: "decrease", stat: "umiejetnosc w skutecznym uzywaniu tarczy", value: -10, intensity: "nieznacznie" },
            { type: "decrease", stat: "wytrzymalosc", value: -10, intensity: "minimalnie" }
        ]
    },
    {
        name: "barbarzynca", cost: 40, description: "podnosi nieco umiejetnosci walki wszystkimi bronmi (15), nieco umiejetnosc w walce bez broni (15), minimalnie umiejetnosc w unikaniu ciosow przeciwnika (5), minimalnie umiejetnosc w parowaniu ciosow przeciwnika (5) oraz minimalnie umiejetnosc w skutecznym uzywaniu tarczy (5) ponadto blokuje uzywanie jakiekolwiek magii", effects: [
            { type: "increase", stat: "umiejetnosci walki wszystkimi bronmi", value: 15, intensity: "nieco" },
            { type: "increase", stat: "umiejetnosc w walce bez broni", value: 15, intensity: "nieco" },
            { type: "increase", stat: "umiejetnosc w unikaniu ciosow przeciwnika", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w parowaniu ciosow przeciwnika", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w skutecznym uzywaniu tarczy", value: 5, intensity: "minimalnie" },
            { type: "special", description: "blokuje uzywanie jakiekolwiek magii" }
        ]
    },
    {
        name: "mag bojowy", cost: 40, description: "podnosi minimalnie umiejetnosci walki wszystkimi bronmi (5), nieco umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki (15), minimalnie umiejetnosc w unikaniu ciosow przeciwnika (5), minimalnie umiejetnosc w parowaniu ciosow przeciwnika (5) oraz minimalnie umiejetnosc w skutecznym uzywaniu tarczy (5) natomiast obniza nieco wplyw wagi zbroi na czarowanie (-25)", effects: [
            { type: "increase", stat: "umiejetnosci walki wszystkimi bronmi", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki", value: 15, intensity: "nieco" },
            { type: "increase", stat: "umiejetnosc w unikaniu ciosow przeciwnika", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w parowaniu ciosow przeciwnika", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w skutecznym uzywaniu tarczy", value: 5, intensity: "minimalnie" },
            { type: "decrease", stat: "wplyw wagi zbroi na czarowanie", value: -25, intensity: "nieco" }
        ]
    },
    {
        name: "tarczownik", cost: 40, description: "podnosi nieco umiejetnosc w unikaniu ciosow przeciwnika (15), nieco umiejetnosc w parowaniu ciosow przeciwnika (15), nieco umiejetnosc w skutecznym uzywaniu tarczy (15), nieco umiejetnosc w walce w szyku (15) oraz nieco maksymalna kondycje (1000) natomiast obniza minimalnie umiejetnosci walki wszystkimi bronmi (-5) oraz minimalnie umiejetnosc w walce bez broni (-5)", effects: [
            { type: "increase", stat: "umiejetnosc w unikaniu ciosow przeciwnika", value: 15, intensity: "nieco" },
            { type: "increase", stat: "umiejetnosc w parowaniu ciosow przeciwnika", value: 15, intensity: "nieco" },
            { type: "increase", stat: "umiejetnosc w skutecznym uzywaniu tarczy", value: 15, intensity: "nieco" },
            { type: "increase", stat: "umiejetnosc w walce w szyku", value: 15, intensity: "nieco" },
            { type: "increase", stat: "maksymalna kondycje", value: 1000, intensity: "nieco" },
            { type: "decrease", stat: "umiejetnosci walki wszystkimi bronmi", value: -5, intensity: "minimalnie" },
            { type: "decrease", stat: "umiejetnosc w walce bez broni", value: -5, intensity: "minimalnie" }
        ]
    },
    {
        name: "celny", cost: 40, description: "podnosi nieznacznie umiejetnosc w walce dwiema bronmi jednoczesnie (10) oraz nieznacznie ilosc obrazen ktore pomijaja zbroje (20)", effects: [
            { type: "increase", stat: "umiejetnosc w walce dwiema bronmi jednoczesnie", value: 10, intensity: "nieznacznie" },
            { type: "increase", stat: "ilosc obrazen ktore pomijaja zbroje", value: 20, intensity: "nieznacznie" }
        ]
    },
    {
        name: "szybki", cost: 40, description: "podnosi minimalnie zrecznosc (10) oraz nieznacznie szybkosc wyprowadzanych atakow (20) natomiast obniza minimalnie sile (-10) oraz nieznacznie umiejetnosc w wyczuwaniu slabosci wroga (-10)", effects: [
            { type: "increase", stat: "zrecznosc", value: 10, intensity: "minimalnie" },
            { type: "increase", stat: "szybkosc wyprowadzanych atakow", value: 20, intensity: "nieznacznie" },
            { type: "decrease", stat: "sile", value: -10, intensity: "minimalnie" },
            { type: "decrease", stat: "umiejetnosc w wyczuwaniu slabosci wroga", value: -10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "silacz", cost: 40, description: "podnosi minimalnie umiejetnosc w walce dwiema bronmi jednoczesnie (5) oraz nieznacznie regeneracje zmeczenia (15) ponadto pozwala dobywac dwureczne bronie jedna reka (2)", effects: [
            { type: "increase", stat: "umiejetnosc w walce dwiema bronmi jednoczesnie", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "regeneracje zmeczenia", value: 15, intensity: "nieznacznie" },
            { type: "special", description: "pozwala dobywac dwureczne bronie jedna reka", value: 2 }
        ]
    },
    {
        name: "mesmer", cost: 40, description: "podnosi nieznacznie umiejetnosc w koncentrowaniu swoich magicznych zdolnosci (10), minimalnie umiejetnosci ze wszystkich szkol magii (5) oraz nieznacznie maksymalna mane (300)", effects: [
            { type: "increase", stat: "umiejetnosc w koncentrowaniu swoich magicznych zdolnosci", value: 10, intensity: "nieznacznie" },
            { type: "increase", stat: "umiejetnosci ze wszystkich szkol magii", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "maksymalna mane", value: 300, intensity: "nieznacznie" }
        ]
    },
    {
        name: "specjalista", cost: 40, description: "podnosi nieznacznie ilosc wyprowadzanych atakow specjalnych (15)", effects: [
            { type: "increase", stat: "ilosc wyprowadzanych atakow specjalnych", value: 15, intensity: "nieznacznie" }
        ]
    },
    {
        name: "kaplan bitewny", cost: 40, description: "podnosi minimalnie umiejetnosc w poslugiwaniu sie magia zycia (5), nieznacznie umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki (10), minimalnie umiejetnosc w unikaniu ciosow przeciwnika (5), minimalnie umiejetnosc w parowaniu ciosow przeciwnika (5) oraz minimalnie umiejetnosc w skutecznym uzywaniu tarczy (5) ponadto pozwala uzywac tarczy, parowac i unikac podczas czarowania (1)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia zycia", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki", value: 10, intensity: "nieznacznie" },
            { type: "increase", stat: "umiejetnosc w unikaniu ciosow przeciwnika", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w parowaniu ciosow przeciwnika", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w skutecznym uzywaniu tarczy", value: 5, intensity: "minimalnie" },
            { type: "special", description: "pozwala uzywac tarczy, parowac i unikac podczas czarowania", value: 1 }
        ]
    },
    {
        name: "zdrada", cost: 10, description: "podnosi minimalnie inteligencje (5) ponadto zamienia ze soba umiejetnosci w poslugiwaniu sie magia zycia i w poslugiwaniu sie magia mroku", effects: [
            { type: "increase", stat: "inteligencje", value: 5, intensity: "minimalnie" },
            { type: "special", description: "zamienia ze soba umiejetnosci w poslugiwaniu sie magia zycia i w poslugiwaniu sie magia mroku" }
        ]
    },
    {
        name: "podmiana", cost: 10, description: "podnosi minimalnie sile (5) ponadto zamienia ze soba umiejetnosci w skutecznym uzywaniu tarczy i w walce dwiema bronmi jednoczesnie", effects: [
            { type: "increase", stat: "sile", value: 5, intensity: "minimalnie" },
            { type: "special", description: "zamienia ze soba umiejetnosci w skutecznym uzywaniu tarczy i w walce dwiema bronmi jednoczesnie" }
        ]
    },
    {
        name: "bestia", cost: 40, description: "podnosi nieznacznie umiejetnosc w walce bez broni (10) oraz nieznacznie umiejetnosc w poslugiwaniu sie magia przemiany (10)", effects: [
            { type: "increase", stat: "umiejetnosc w walce bez broni", value: 10, intensity: "nieznacznie" },
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia przemiany", value: 10, intensity: "nieznacznie" }
        ]
    },
    {
        name: "wladca bestii", cost: 40, description: "podnosi nieznacznie umiejetnosc w magii tworzenia i przywolywania (10) natomiast obniza troche ilosc many potrzebna do utrzymania przywolancow (-35) ponadto pozwala przywolac jednego dodatkowego, innego niz juz wezwany przywolanca (1)", effects: [
            { type: "increase", stat: "umiejetnosc w magii tworzenia i przywolywania", value: 10, intensity: "nieznacznie" },
            { type: "decrease", stat: "ilosc many potrzebna do utrzymania przywolancow", value: -35, intensity: "troche" },
            { type: "special", description: "pozwala przywolac jednego dodatkowego, innego niz juz wezwany przywolanca", value: 1 }
        ]
    },
    {
        name: "kaznodzieja", cost: 40, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia zycia (10), nieznacznie umiejetnosc w mistycyzmie (10), minimalnie madrosc (10), nieznacznie odpornosc na obrazenia magii smierci (10) oraz minimalnie sile czarow leczacych (10)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia zycia", value: 10, intensity: "nieznacznie" },
            { type: "increase", stat: "umiejetnosc w mistycyzmie", value: 10, intensity: "nieznacznie" },
            { type: "increase", stat: "madrosc", value: 10, intensity: "minimalnie" },
            { type: "increase", stat: "odpornosc na obrazenia magii smierci", value: 10, intensity: "nieznacznie" },
            { type: "increase", stat: "sile czarow leczacych", value: 10, intensity: "minimalnie" }
        ]
    },
    {
        name: "sila smoka", cost: 60, description: "laczy ducha wlasciciela z duchem pradawnego smoka", effects: [
            { type: "special", description: "laczy ducha wlasciciela z duchem pradawnego smoka" }
        ]
    },
    {
        name: "ciezkozbrojny", cost: 40, description: "podnosi minimalnie sile (5), minimalnie umiejetnosci walki wszystkimi bronmi (5) oraz minimalnie umiejetnosc w skutecznym uzywaniu tarczy (5) natomiast obniza zauwazalnie wplyw przeciazenia na zmeczenie w walce (-50)", effects: [
            { type: "increase", stat: "sile", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosci walki wszystkimi bronmi", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w skutecznym uzywaniu tarczy", value: 5, intensity: "minimalnie" },
            { type: "decrease", stat: "wplyw przeciazenia na zmeczenie w walce", value: -50, intensity: "zauwazalnie" }
        ]
    },
    {
        name: "wladca ciemnosci", cost: 40, description: "podnosi nieznacznie umiejetnosc w poslugiwaniu sie magia mroku (10) natomiast obniza troche ilosc many potrzebna do utrzymania przywolancow (-35) ponadto pozwala przywolac jednego dodatkowego, innego niz juz wezwany przywolanca (1)", effects: [
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia mroku", value: 10, intensity: "nieznacznie" },
            { type: "decrease", stat: "ilosc many potrzebna do utrzymania przywolancow", value: -35, intensity: "troche" },
            { type: "special", description: "pozwala przywolac jednego dodatkowego, innego niz juz wezwany przywolanca", value: 1 }
        ]
    },
    {
        name: "kamiennoskory", cost: 40, description: "podnosi nieco odpornosc na obrazenia klute (18), nieco odpornosc na obrazenia ciete (18) oraz nieco odpornosc na obrazenia obuchowe (18)", effects: [
            { type: "increase", stat: "odpornosc na obrazenia klute", value: 18, intensity: "nieco" },
            { type: "increase", stat: "odpornosc na obrazenia ciete", value: 18, intensity: "nieco" },
            { type: "increase", stat: "odpornosc na obrazenia obuchowe", value: 18, intensity: "nieco" }
        ]
    },
    {
        name: "antymagia", cost: 40, description: "podnosi zauwazalnie odpornosc na obrazenia magii powietrza (40), zauwazalnie odpornosc na obrazenia magii ziemi (40), zauwazalnie odpornosc na obrazenia magii ognia (40), zauwazalnie odpornosc na obrazenia magii wody (40), zauwazalnie odpornosc na obrazenia magii zycia (40) oraz zauwazalnie odpornosc na obrazenia magii smierci (40)", effects: [
            { type: "increase", stat: "odpornosc na obrazenia magii powietrza", value: 40, intensity: "zauwazalnie" },
            { type: "increase", stat: "odpornosc na obrazenia magii ziemi", value: 40, intensity: "zauwazalnie" },
            { type: "increase", stat: "odpornosc na obrazenia magii ognia", value: 40, intensity: "zauwazalnie" },
            { type: "increase", stat: "odpornosc na obrazenia magii wody", value: 40, intensity: "zauwazalnie" },
            { type: "increase", stat: "odpornosc na obrazenia magii zycia", value: 40, intensity: "zauwazalnie" },
            { type: "increase", stat: "odpornosc na obrazenia magii smierci", value: 40, intensity: "zauwazalnie" }
        ]
    },
    {
        name: "lekkozbrojny", cost: 40, description: "podnosi minimalnie zrecznosc (5), minimalnie umiejetnosci walki wszystkimi bronmi (5), minimalnie umiejetnosc w unikaniu ciosow przeciwnika (5), ogromnie wplyw przeciazenia na zmeczenie w walce (100), bardzo ilosc przeciwnikow z ktorymi mozemy walczyc bez utraty sprawnosci (4) oraz minimalnie ilosc obrazen ktore pomijaja zbroje (10)", effects: [
            { type: "increase", stat: "zrecznosc", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosci walki wszystkimi bronmi", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "umiejetnosc w unikaniu ciosow przeciwnika", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "wplyw przeciazenia na zmeczenie w walce", value: 100, intensity: "ogromnie" },
            { type: "increase", stat: "ilosc przeciwnikow z ktorymi mozemy walczyc bez utraty sprawnosci", value: 4, intensity: "bardzo" },
            { type: "increase", stat: "ilosc obrazen ktore pomijaja zbroje", value: 10, intensity: "minimalnie" }
        ]
    },
    {
        name: "mistrz harmonii", cost: 40, description: "podnosi minimalnie sile czarow wzmacniajacych (5) oraz minimalnie sile czarow oslabiajacych (5) natomiast obniza nieco ilosc many potrzebna do utrzymania aur (-30) ponadto pozwala utrzymywac jedna dodatkowa aure (1)", effects: [
            { type: "increase", stat: "sile czarow wzmacniajacych", value: 5, intensity: "minimalnie" },
            { type: "increase", stat: "sile czarow oslabiajacych", value: 5, intensity: "minimalnie" },
            { type: "decrease", stat: "ilosc many potrzebna do utrzymania aur", value: -30, intensity: "nieco" },
            { type: "special", description: "pozwala utrzymywac jedna dodatkowa aure", value: 1 }
        ]
    },
    {
        name: "przewrotnosc", cost: 10, description: "podnosi minimalnie zrecznosc (5) ponadto zamienia ze soba umiejetnosci w parowaniu ciosow przeciwnika i w unikaniu ciosow przeciwnika", effects: [
            { type: "increase", stat: "zrecznosc", value: 5, intensity: "minimalnie" },
            { type: "special", description: "zamienia ze soba umiejetnosci w parowaniu ciosow przeciwnika i w unikaniu ciosow przeciwnika" }
        ]
    },
    {
        name: "wszechstronny", cost: 40, description: "podnosi zauwazalnie wielkosc listy dozwolonych czarow (5), nieznacznie umiejetnosc w poslugiwaniu sie magia ognia (8), nieznacznie umiejetnosc w poslugiwaniu sie magia wody (8), nieznacznie umiejetnosc w poslugiwaniu sie magia ziemi (8) oraz nieznacznie umiejetnosc w poslugiwaniu sie magia powietrza (8) natomiast obniza troche koszt czarow (-40), nieco szybkosc odnawiania czarow (-100) oraz minimalnie szybkosc czarowania (-10)", effects: [
            { type: "increase", stat: "wielkosc listy dozwolonych czarow", value: 5, intensity: "zauwazalnie" },
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia ognia", value: 8, intensity: "nieznacznie" },
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia wody", value: 8, intensity: "nieznacznie" },
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia ziemi", value: 8, intensity: "nieznacznie" },
            { type: "increase", stat: "umiejetnosc w poslugiwaniu sie magia powietrza", value: 8, intensity: "nieznacznie" },
            { type: "decrease", stat: "koszt czarow", value: -40, intensity: "troche" },
            { type: "decrease", stat: "szybkosc odnawiania czarow", value: -100, intensity: "nieco" },
            { type: "decrease", stat: "szybkosc czarowania", value: -10, intensity: "minimalnie" }
        ]
    },
    {
        name: "wampir", cost: 40, description: "podnosi troche ilosc zycia wykradanego przy atakach (40) ponadto sprawia ze nie mozesz byc magicznie uleczony (1)", effects: [
            { type: "increase", stat: "ilosc zycia wykradanego przy atakach", value: 40, intensity: "troche" },
            { type: "special", description: "sprawia ze nie mozesz byc magicznie uleczony", value: 1 }
        ]
    },
    {
        name: "sama magia", cost: 40, description: "podnosi minimalnie szybkosc odnawiania czarow (20) oraz minimalnie szybkosc czarowania (20) natomiast obniza nieznacznie koszt czarow (-15), ogromnie szybkosc wyprowadzanych atakow (-1000) oraz ogromnie ilosc wyprowadzanych atakow specjalnych (-1000)", effects: [
            { type: "increase", stat: "szybkosc odnawiania czarow", value: 20, intensity: "minimalnie" },
            { type: "increase", stat: "szybkosc czarowania", value: 20, intensity: "minimalnie" },
            { type: "decrease", stat: "koszt czarow", value: -15, intensity: "nieznacznie" },
            { type: "decrease", stat: "szybkosc wyprowadzanych atakow", value: -1000, intensity: "ogromnie" },
            { type: "decrease", stat: "ilosc wyprowadzanych atakow specjalnych", value: -1000, intensity: "ogromnie" }
        ]
    },
    {
        name: "cien", cost: 40, description: "podnosi nieznacznie ilosc obrazen ktore pomijaja odpornosci (20), nieco ilosc obrazen ktore pomijaja zbroje (30), ogromnie wplyw wagi zbroi na szybkosc walki (100) oraz ogromnie wplyw wagi zbroi na czarowanie (500) natomiast obniza nieco odpornosc na obrazenia klute (-25), nieco odpornosc na obrazenia ciete (-25), nieco odpornosc na obrazenia obuchowe (-25), nieco odpornosc na obrazenia magii powietrza (-25), nieco odpornosc na obrazenia magii ziemi (-25), nieco odpornosc na obrazenia magii ognia (-25), nieco odpornosc na obrazenia magii wody (-25), nieco odpornosc na obrazenia magii zycia (-25) oraz nieco odpornosc na obrazenia magii smierci (-25)", effects: [
            { type: "increase", stat: "ilosc obrazen ktore pomijaja odpornosci", value: 20, intensity: "nieznacznie" },
            { type: "increase", stat: "ilosc obrazen ktore pomijaja zbroje", value: 30, intensity: "nieco" },
            { type: "increase", stat: "wplyw wagi zbroi na szybkosc walki", value: 100, intensity: "ogromnie" },
            { type: "increase", stat: "wplyw wagi zbroi na czarowanie", value: 500, intensity: "ogromnie" },
            { type: "decrease", stat: "odpornosc na obrazenia klute", value: -25, intensity: "nieco" },
            { type: "decrease", stat: "odpornosc na obrazenia ciete", value: -25, intensity: "nieco" },
            { type: "decrease", stat: "odpornosc na obrazenia obuchowe", value: -25, intensity: "nieco" },
            { type: "decrease", stat: "odpornosc na obrazenia magii powietrza", value: -25, intensity: "nieco" },
            { type: "decrease", stat: "odpornosc na obrazenia magii ziemi", value: -25, intensity: "nieco" },
            { type: "decrease", stat: "odpornosc na obrazenia magii ognia", value: -25, intensity: "nieco" },
            { type: "decrease", stat: "odpornosc na obrazenia magii wody", value: -25, intensity: "nieco" },
            { type: "decrease", stat: "odpornosc na obrazenia magii zycia", value: -25, intensity: "nieco" },
            { type: "decrease", stat: "odpornosc na obrazenia magii smierci", value: -25, intensity: "nieco" }
        ]
    },
    // Dodaj więcej słów według potrzeb
];