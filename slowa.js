const slowaData = [
    {
        "name": "wybraniec losu",
        "cost": 10,
        "effects": [
            ["_pb_prop", "_live_i_rune_extra_levels", 3],
        ],
        "runes": ["Ko", "Dol", "El"],
    },
    {
        "name": "widzacy",
        "cost": 10,
        "effects": [
            ["_pb_skill", 101, 20],
            ["_pb_skill", 102, 20],
            ["_pb_prop", "_live_i_see_dark", 4],
            ["_pb_prop", "_live_i_see_magic", 100],
        ],
        "runes": ["Sol", "Tir", "Ral"],
    },
    {
        "name": "leniuszek",
        "cost": 20,
        "effects": [
            ["_pb_skill", 101, 20],
            ["_pb_prop", "_player_i_have_leniuch", 1],
        ],
        "runes": ["Nef", "Hel", "Ko"],
    },
    {
        "name": "duzo wiecej",
        "cost": 10,
        "effects": [
            ["_pb_prop", "_live_i_rune_extra_chance", 150],
        ],
        "runes": ["Ort", "Hel", "Io"],
    },
    {
        "name": "jajoglowy",
        "cost": 10,
        "effects": [
            ["_pb_prop", "_live_i_extra_remembered_spells", 6],
            ["_pb_prop", "_live_i_extra_auto_cast", 3],
        ],
        "runes": ["Sol", "Tal", "Thul"],
    },
    {
        "name": "spekulant",
        "cost": 20,
        "effects": [
            ["_pb_skill", 110, 20],
        ],
        "runes": ["Thul", "Ort", "Amn"],
    },
    {
        "name": "profesor",
        "cost": 20,
        "effects": [
            ["_pb_prop", "_live_i_extra_exp_modifier_3", 1500],
            ["_pb_prop", "_live_i_extra_exp_modifier_4", 1500],
        ],
        "runes": ["Dol", "Tir", "Tal"],
    },
    {
        "name": "miesniak",
        "cost": 20,
        "effects": [
            ["_pb_prop", "_live_i_extra_exp_modifier_0", 1000],
            ["_pb_prop", "_live_i_extra_exp_modifier_1", 1000],
            ["_pb_prop", "_live_i_extra_exp_modifier_2", 1000],
        ],
        "runes": ["El", "Ral", "Dol"],
    },
    {
        "name": "heros",
        "cost": 20,
        "effects": [
            ["_pb_prop", "_live_i_extra_exp_modifier_5", 2000],
        ],
        "runes": ["Tal", "Hel", "Amn"],
    },
    {
        "name": "kopacz",
        "cost": 10,
        "effects": [
            ["_pb_skill", 112, 20],
        ],
        "runes": ["El", "Amn", "Ith"],
    },
    {
        "name": "wytapiacz",
        "cost": 10,
        "effects": [
            ["_pb_skill", 114, 20],
        ],
        "runes": ["Amn", "Eld", "Eth"],
    },
    {
        "name": "kolekcjoner",
        "cost": 20,
        "effects": [
            ["_pb_prop", "_live_i_allowed_keep_forever", 1],
        ],
        "runes": ["Tir", "Dol", "Ort"],
    },
    {
        "name": "szczesciarz",
        "cost": 10,
        "effects": [
            ["_pb_prop", "_live_i_rune_extra_levels", 2],
        ],
        "runes": ["Ith", "Tir", "Eld"],
    },
    {
        "name": "wiecej",
        "cost": 10,
        "effects": [
            ["_pb_prop", "_live_i_rune_extra_chance", 75],
        ],
        "runes": ["El", "Eth", "Nef"],
    },
    {
        "name": "witalny",
        "cost": 20,
        "effects": [
            ["_pb_prop", "_live_i_hp_regen_increased", 100],
        ],
        "runes": ["Shael", "Eld", "Thul"],
    },
    {
        "name": "uduchowiony",
        "cost": 20,
        "effects": [
            ["_pb_prop", "_live_i_mana_regen_increased", 5],
        ],
        "runes": ["Io", "Ith", "Tir"],
    },
    {
        "name": "niezmordowany",
        "cost": 20,
        "effects": [
            ["_pb_prop", "_live_i_fatigue_regen_increased", 40],
        ],
        "runes": ["Eth", "El", "Hel"],
    },
    {
        "name": "farciarz",
        "cost": 20,
        "effects": [
            ["_pb_prop", "_live_i_luck_increased", 50],
        ],
        "runes": ["Lum", "Ral", "Dol"],
    },
    {
        "name": "silny",
        "cost": 30,
        "effects": [
            ["_pb_stat", 0, 20],
        ],
        "runes": ["Tir", "Ort", "Amn"],
    },
    {
        "name": "zreczny",
        "cost": 30,
        "effects": [
            ["_pb_stat", 1, 20],
        ],
        "runes": ["Amn", "Eth", "El"],
    },
    {
        "name": "wytrzymaly",
        "cost": 30,
        "effects": [
            ["_pb_stat", 2, 20],
        ],
        "runes": ["Thul", "Amn", "Eld"],
    },
    {
        "name": "inteligentny",
        "cost": 30,
        "effects": [
            ["_pb_stat", 3, 20],
        ],
        "runes": ["Eth", "Amn", "Ral"],
    },
    {
        "name": "madry",
        "cost": 30,
        "effects": [
            ["_pb_stat", 4, 20],
        ],
        "runes": ["Nef", "Ral", "Amn"],
    },
    {
        "name": "odwazny",
        "cost": 30,
        "effects": [
            ["_pb_stat", 5, 20],
        ],
        "runes": ["Amn", "Tal", "Ort"],
    },
    {
        "name": "szampierz",
        "cost": 30,
        "effects": [
            ["_pb_skill_weapon", 10],
        ],
        "runes": ["Tal", "Eld", "Sol"],
    },
    {
        "name": "karateka",
        "cost": 30,
        "effects": [
            ["_pb_skill", 21, 10],
        ],
        "runes": ["Tir", "Amn", "Tal"],
    },
    {
        "name": "patelnia",
        "cost": 30,
        "effects": [
            ["_pb_skill", 26, 10],
        ],
        "runes": ["Eth", "Tal", "Sol"],
    },
    {
        "name": "lewak",
        "cost": 30,
        "effects": [
            ["_pb_skill", 23, 10],
        ],
        "runes": ["Tal", "Amn", "Ral"],
    },
    {
        "name": "wicher",
        "cost": 30,
        "effects": [
            ["_pb_skill", 24, 10],
        ],
        "runes": ["Ith", "Ort", "Amn"],
    },
    {
        "name": "tancerz",
        "cost": 30,
        "effects": [
            ["_pb_skill", 20, 10],
        ],
        "runes": ["Dol", "El", "Ith"],
    },
    {
        "name": "koniuszy",
        "cost": 30,
        "effects": [
            ["_pb_skill", 25, 20],
        ],
        "runes": ["Ort", "Nef", "Thul"],
    },
    {
        "name": "przyboczny",
        "cost": 30,
        "effects": [
            ["_pb_skill", 31, 20],
        ],
        "runes": ["Sol", "Ith", "Nef"],
    },
    {
        "name": "przywodca",
        "cost": 30,
        "effects": [
            ["_pb_skill", 30, 20],
        ],
        "runes": ["Thul", "Hel", "Dol"],
    },
    {
        "name": "ogien",
        "cost": 30,
        "effects": [
            ["_pb_skill", 300, 10],
        ],
        "runes": ["Shael", "Thul", "Tir"],
    },
    {
        "name": "powietrze",
        "cost": 30,
        "effects": [
            ["_pb_skill", 301, 10],
        ],
        "runes": ["Ort", "Ith", "Shael"],
    },
    {
        "name": "ziemia",
        "cost": 30,
        "effects": [
            ["_pb_skill", 302, 10],
        ],
        "runes": ["Thul", "Shael", "Eld"],
    },
    {
        "name": "woda",
        "cost": 30,
        "effects": [
            ["_pb_skill", 303, 10],
        ],
        "runes": ["Shael", "Eth", "El"],
    },
    {
        "name": "zycie",
        "cost": 30,
        "effects": [
            ["_pb_skill", 304, 10],
        ],
        "runes": ["El", "Tir", "Shael"],
    },
    {
        "name": "smierc",
        "cost": 30,
        "effects": [
            ["_pb_skill", 305, 10],
        ],
        "runes": ["Shael", "Nef", "Ort"],
    },
    {
        "name": "przemiana",
        "cost": 30,
        "effects": [
            ["_pb_skill", 332, 10],
        ],
        "runes": ["Ith", "Shael", "Tal"],
    },
    {
        "name": "mistycyzm",
        "cost": 30,
        "effects": [
            ["_pb_skill", 334, 10],
        ],
        "runes": ["Ort", "Eld", "Shael"],
    },
    {
        "name": "zaklinanie",
        "cost": 30,
        "effects": [
            ["_pb_skill", 335, 10],
        ],
        "runes": ["Shael", "Tal", "Tir"],
    },
    {
        "name": "przywolywanie",
        "cost": 30,
        "effects": [
            ["_pb_skill", 336, 10],
        ],
        "runes": ["Shael", "Ral", "Nef"],
    },
    {
        "name": "iluzja",
        "cost": 30,
        "effects": [
            ["_pb_skill", 333, 10],
        ],
        "runes": ["Nef", "Shael", "Tal"],
    },
    {
        "name": "rozpraszanie",
        "cost": 30,
        "effects": [
            ["_pb_skill", 337, 10],
        ],
        "runes": ["Ith", "El", "Shael"],
    },
    {
        "name": "czarodziejstwo",
        "cost": 30,
        "effects": [
            ["_pb_skill", 313, 10],
        ],
        "runes": ["Eth", "Shael", "Tir"],
    },
    {
        "name": "runy",
        "cost": 30,
        "effects": [
            ["_pb_skill", 312, 10],
        ],
        "runes": ["Eld", "Tal", "Shael"],
    },
    {
        "name": "koncentracja",
        "cost": 30,
        "effects": [
            ["_pb_skill", 310, 10],
        ],
        "runes": ["Ith", "Dol", "El"],
    },
    {
        "name": "waleczny spokoj",
        "cost": 30,
        "effects": [
            ["_pb_skill", 311, 20],
        ],
        "runes": ["Dol", "Nef", "Tal"],
    },
    {
        "name": "wojownik",
        "cost": 50,
        "effects": [
            ["_pb_skill_learn_weapon", 60],
            ["_pb_skill_learn", 26, 45],
            ["_pb_skill_learn", 23, 45],
            ["_pb_skill_learn", 24, 45],
        ],
        "runes": ["Ral", "Tir", "Nef"],
    },
    {
        "name": "mag",
        "cost": 50,
        "effects": [
            ["_pb_skill_learn_magic_all", 40],
            ["_pb_skill_learn", 310, 60],
            ["_pb_skill_learn", 311, 50],
        ],
        "runes": ["Eth", "Ral", "Tir"],
    },
    {
        "name": "galop",
        "cost": 40,
        "effects": [
            ["_pb_skill", 111, 25],
            ["_pb_skill", 25, 30],
            ["_pb_skill_weapon", 10],
        ],
        "runes": ["Eld", "Eth", "Hel"],
    },
    {
        "name": "mikstura",
        "cost": 40,
        "effects": [
            ["_pb_skill", 331, 20],
            ["_pb_skill", 330, 20],
            ["_pb_skill", 332, 10],
        ],
        "runes": ["Dol", "Thul", "Ral"],
    },
    {
        "name": "berserker",
        "cost": 40,
        "effects": [
            ["_pb_skill_weapon", 20],
            ["_pb_skill", 21, 20],
            ["_pb_skill", 24, -10],
            ["_pb_skill", 23, -10],
            ["_pb_skill", 26, -10],
            ["_pb_stat", 2, -10],
        ],
        "runes": ["Tir", "Lum", "Eth"],
    },
    {
        "name": "barbarzynca",
        "cost": 40,
        "effects": [
            ["_pb_skill_weapon", 15],
            ["_pb_skill", 21, 15],
            ["_pb_skill", 24, 5],
            ["_pb_skill", 23, 5],
            ["_pb_skill", 26, 5],
            ["_pb_prop", "_live_m_magic_blocked", "Twoja moc uleciala."],
        ],
        "runes": ["Lum", "Nef", "Ith"],
    },
    {
        "name": "mag bojowy",
        "cost": 40,
        "effects": [
            ["_pb_skill_weapon", 5],
            ["_pb_skill", 311, 15],
            ["_pb_skill", 24, 5],
            ["_pb_skill", 23, 5],
            ["_pb_skill", 26, 5],
            ["_pb_prop", "_live_i_mage_armour_weight_increased", -25],
        ],
        "runes": ["Eth", "Io", "Thul"],
    },
    {
        "name": "tarczownik",
        "cost": 40,
        "effects": [
            ["_pb_skill_weapon", -5],
            ["_pb_skill", 21, -5],
            ["_pb_skill", 24, 15],
            ["_pb_skill", 23, 15],
            ["_pb_skill", 26, 15],
            ["_pb_skill", 31, 15],
            ["_pb_hp", 1000],
        ],
        "runes": ["Io", "Ith", "Ral"],
    },
    {
        "name": "celny",
        "cost": 40,
        "effects": [
            ["_pb_skill", 20, 10],
            ["_pb_prop", "_live_i_ac_penetration", 20],
        ],
        "runes": ["Amn", "Ort", "Hel"],
    },
    {
        "name": "szybki",
        "cost": 40,
        "effects": [
            ["_pb_stat", 1, 10],
            ["_pb_stat", 0, -10],
            ["_pb_prop", "_live_i_quickness", 20],
            ["_pb_skill", 207, -10],
        ],
        "runes": ["Thul", "Hel", "Eld"],
    },
    {
        "name": "silacz",
        "cost": 40,
        "effects": [
            ["_pb_skill", 20, 5],
            ["_pb_prop", "_live_i_allow_wield_2h_in_1h", 2],
            ["_pb_prop", "_live_i_fatigue_regen_increased", 15],
        ],
        "runes": ["Fal", "Thul", "Ith"],
    },
    {
        "name": "mesmer",
        "cost": 40,
        "effects": [
            ["_pb_skill", 310, 10],
            ["_pb_skill_magic_all", 5],
            ["_pb_mana", 300],
        ],
        "runes": ["Sol", "Eth", "Lum"],
    },
    {
        "name": "specjalista",
        "cost": 40,
        "effects": [
            ["_pb_prop", "_live_i_special_attack_quickness", 15],
        ],
        "runes": ["Shael", "Io", "Sol"],
    },
    {
        "name": "kaplan bitewny",
        "cost": 40,
        "effects": [
            ["_pb_skill", 304, 5],
            ["_pb_skill", 311, 10],
            ["_pb_skill", 24, 5],
            ["_pb_skill", 23, 5],
            ["_pb_skill", 26, 5],
            ["_pb_prop", "_live_i_concentrate_use_defense", 1],
        ],
        "runes": ["Dol", "Tir", "Io"],
    },
    {
        "name": "zdrada",
        "cost": 10,
        "effects": [
            ["_pb_stat", 3, 5],
            ["_pb_skill_swap", 304, 305],
        ],
        "runes": ["Io", "Tal", "El"],
    },
    {
        "name": "podmiana",
        "cost": 10,
        "effects": [
            ["_pb_stat", 0, 5],
            ["_pb_skill_swap", 26, 20],
        ],
        "runes": ["Eld", "Io", "Thul"],
    },
    {
        "name": "bestia",
        "cost": 40,
        "effects": [
            ["_pb_skill", 21, 10],
            ["_pb_skill", 332, 10],
        ],
        "runes": ["Hel", "El", "Dol"],
    },
    {
        "name": "wladca bestii",
        "cost": 40,
        "effects": [
            ["_pb_skill", 336, 10],
            ["_pb_prop", "_live_i_allow_extra_summons", 1],
            ["_pb_prop", "_live_i_summons_mana_usage_increased", -35],
        ],
        "runes": ["Io", "Amn", "Nef"],
    },
    {
        "name": "kaznodzieja",
        "cost": 40,
        "effects": [
            ["_pb_skill", 304, 10],
            ["_pb_skill", 334, 10],
            ["_pb_stat", 4, 10],
            ["_pb_prop", "_obj_magic_i_res_death", 10],
            ["_pb_prop", "_live_i_spell_strenght_increased_4", 10],
        ],
        "runes": ["Sol", "Hel", "Ort"],
    },
    {
        "name": "sila smoka",
        "cost": 60,
        "effects": [
            ["_pb_special", "sila smoka", "/d/Warlock/common/runes/spec_ciecie", "laczy ducha wlasciciela z duchem pradawnego smoka"],
        ],
        "runes": ["Tal", "Dol", "Ko"],
    },
    {
        "name": "ciezkozbrojny",
        "cost": 40,
        "effects": [
            ["_pb_stat", 0, 5],
            ["_pb_skill_weapon", 5],
            ["_pb_skill", 26, 5],
            ["_pb_prop", "_live_i_encumberance_swing_fatigue_increased", -50],
        ],
        "runes": ["Lum", "Eth", "Eld"],
    },
    {
        "name": "wladca ciemnosci",
        "cost": 40,
        "effects": [
            ["_pb_skill", 305, 10],
            ["_pb_prop", "_live_i_allow_extra_summons", 1],
            ["_pb_prop", "_live_i_summons_mana_usage_increased", -35],
        ],
        "runes": ["Nef", "Sol", "Io"],
    },
    {
        "name": "kamiennoskory",
        "cost": 40,
        "effects": [
            ["_pb_prop", "_obj_magic_i_res_impale", 18],
            ["_pb_prop", "_obj_magic_i_res_slash", 18],
            ["_pb_prop", "_obj_magic_i_res_bludgeon", 18],
        ],
        "runes": ["Ko", "Eld", "Ith"],
    },
    {
        "name": "antymagia",
        "cost": 40,
        "effects": [
            ["_pb_prop", "_obj_magic_i_res_air", 40],
            ["_pb_prop", "_obj_magic_i_res_earth", 40],
            ["_pb_prop", "_obj_magic_i_res_fire", 40],
            ["_pb_prop", "_obj_magic_i_res_water", 40],
            ["_pb_prop", "_obj_magic_i_res_life", 40],
            ["_pb_prop", "_obj_magic_i_res_death", 40],
        ],
        "runes": ["Ort", "Ko", "El"],
    },
    {
        "name": "lekkozbrojny",
        "cost": 40,
        "effects": [
            ["_pb_stat", 1, 5],
            ["_pb_skill_weapon", 5],
            ["_pb_skill", 24, 5],
            ["_pb_prop", "_live_i_encumberance_swing_fatigue_increased", 100],
            ["_pb_prop", "_live_i_enemy_defese_penalty_reduction", 4],
            ["_pb_prop", "_live_i_ac_penetration", 10],
        ],
        "runes": ["Eld", "Ral", "Lum"],
    },
    {
        "name": "mistrz harmonii",
        "cost": 40,
        "effects": [
            ["_pb_prop", "_live_i_allow_extra_aura", 1],
            ["_pb_prop", "_live_i_auras_mana_usage_increased", -30],
            ["_pb_prop", "_live_i_spell_strenght_increased_8", 5],
            ["_pb_prop", "_live_i_spell_strenght_increased_16", 5],
        ],
        "runes": ["Eld", "Ko", "Shael"],
    },
    {
        "name": "przewrotnosc",
        "cost": 10,
        "effects": [
            ["_pb_stat", 1, 5],
            ["_pb_skill_swap", 23, 24],
        ],
        "runes": ["Tir", "Amn", "Hel"],
    },
    {
        "name": "wszechstronny",
        "cost": 40,
        "effects": [
            ["_pb_prop", "_live_i_spell_mana_increased", -40],
            ["_pb_prop", "_live_i_spell_rest_decreased", -100],
            ["_pb_prop", "_live_i_spell_cast_decreased", -10],
            ["_pb_prop", "_live_i_extra_auto_cast", 5],
            ["_pb_skill", 300, 8],
            ["_pb_skill", 303, 8],
            ["_pb_skill", 302, 8],
            ["_pb_skill", 301, 8],
        ],
        "runes": ["Gul", "Dol", "Ral"],
    },
    {
        "name": "wampir",
        "cost": 40,
        "effects": [
            ["_pb_prop", "_live_i_life_steal", 40],
            ["_pb_prop", "_live_i_cannot_be_healed", 1],
        ],
        "runes": ["Tal", "Hel", "Gul"],
    },
    {
        "name": "sama magia",
        "cost": 40,
        "effects": [
            ["_pb_prop", "_live_i_spell_mana_increased", -15],
            ["_pb_prop", "_live_i_spell_rest_decreased", 20],
            ["_pb_prop", "_live_i_spell_cast_decreased", 20],
            ["_pb_prop", "_live_i_quickness", -1000],
            ["_pb_prop", "_live_i_special_attack_quickness", -1000],
        ],
        "runes": ["Lum", "Ist", "Eld"],
    },
    {
        "name": "cien",
        "cost": 40,
        "effects": [
            ["_pb_prop", "_live_i_resistance_penetration", 20],
            ["_pb_prop", "_live_i_ac_penetration", 30],
            ["_pb_prop", "_live_i_fight_armour_weight_increased", 100],
            ["_pb_prop", "_live_i_mage_armour_weight_increased", 500],
            ["_pb_prop", "_obj_magic_i_res_impale", -25],
            ["_pb_prop", "_obj_magic_i_res_slash", -25],
            ["_pb_prop", "_obj_magic_i_res_bludgeon", -25],
            ["_pb_prop", "_obj_magic_i_res_air", -25],
            ["_pb_prop", "_obj_magic_i_res_earth", -25],
            ["_pb_prop", "_obj_magic_i_res_fire", -25],
            ["_pb_prop", "_obj_magic_i_res_water", -25],
            ["_pb_prop", "_obj_magic_i_res_life", -25],
            ["_pb_prop", "_obj_magic_i_res_death", -25],
        ],
        "runes": ["Fal", "Thul", "Vex"],
    },
]
