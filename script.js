// Main App Logic
document.addEventListener('DOMContentLoaded', function() {
    populateGuildSelect();
    populateSemiGuildSelect();
    populateWordsList();
    setupEventListeners();
    setupDarkMode();
});

let selectedMainGuildPath = null;

function populateGuildSelect() {
    const guildSelect = document.getElementById('guildSelect');

    guildsData.forEach(guild => {
        const option = document.createElement('option');
        option.value = guild.code;
        option.textContent = guild.name;
        guildSelect.appendChild(option);
    });
}

function populateSemiGuildSelect() {
    const semiGuildSelect = document.getElementById('semiGuildSelect');

    semiGuildsData.forEach(guild => {
        const option = document.createElement('option');
        option.value = guild.code;
        option.textContent = guild.name;
        semiGuildSelect.appendChild(option);
    });
}

function populatePathSelect(guildData, isSemiGuild = false) {
    const pathSelectId = isSemiGuild ? 'semiPathSelect' : 'pathSelect';
    const pathSelect = document.getElementById(pathSelectId);
    if (!pathSelect) {
        console.error(`Nie znaleziono elementu select o id: ${pathSelectId}`);
        return;
    }
    pathSelect.innerHTML = '';

    if (!guildData) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = `Najpierw wybierz ${isSemiGuild ? 'gildię półzawodową' : 'gildię zawodową'}...`;
        pathSelect.appendChild(option);
        return;
    }

    const pathsToPopulate = isSemiGuild ? guildData.semipaths : guildData.paths;

    if (pathsToPopulate) {
        pathsToPopulate.forEach(path => {
            const option = document.createElement('option');
            option.value = path.name;
            option.textContent = path.name;
            pathSelect.appendChild(option);
        });

        // Trigger change to update skills - only if there are paths
        if (pathSelect.options.length > 1) {
            pathSelect.dispatchEvent(new Event('change'));
        }
    } else {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = `Brak ścieżek dla ${isSemiGuild ? 'tej gildii półzawodowej' : 'tej gildii zawodowej'}...`;
        pathSelect.appendChild(option);
    }
}

function populateWordsList() {
    const wordsList = document.getElementById('wordsList');

    slowaData.forEach(word => {
        const div = document.createElement('div');
        div.className = 'tooltip-trigger';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'custom-checkbox';
        checkbox.id = `word_${word.name}`;
        checkbox.value = word.name;
        checkbox.dataset.cost = word.cost;

        const label = document.createElement('label');
        label.htmlFor = `word_${word.name}`;
        label.className = 'block p-2 border rounded mb-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors';
        label.innerHTML = `${word.name} <span class="text-sm text-gray-500 dark:text-gray-400">(${word.cost})</span>`;

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip p-2 rounded bg-gray-800 text-white text-xs shadow-lg';
        tooltip.innerHTML = `<p>${word.description}</p>`;

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(tooltip);
        wordsList.appendChild(div);

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                label.classList.add('selected-item');
            } else {
                label.classList.remove('selected-item');
            }
            updateSelectedWordCount();
            updateSkillsSummary();
            updateEffectsSummary();
        });
    });
}

function setupEventListeners() {
    const guildSelect = document.getElementById('guildSelect');
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    const pathSelect = document.getElementById('pathSelect');
    const semiPathSelect = document.getElementById('semiPathSelect');
    const searchWordsInput = document.getElementById('searchWords');
    const clearSelectionsButton = document.getElementById('clearSelections');
    const exportButton = document.getElementById('exportButton');

    // Guild Selection
    guildSelect.addEventListener('change', function() {
        const selectedGuild = guildsData.find(g => g.code === this.value);
        updateRacesAllowed(selectedGuild);
        populatePathSelect(selectedGuild); // Wywołanie dla gildii zawodowej
        updateSkillsSummary();
        updateActivePlayers();
    });

    // semiGuild Selection
    semiGuildSelect.addEventListener('change', function() {
        const selectedSemiGuild = semiGuildsData.find(g => g.code === this.value);
        updateRacesAllowed(selectedSemiGuild);
        populatePathSelect(selectedSemiGuild, true); // Wywołanie dla gildii półzawodowej
        updateSkillsSummary();
        updateActivePlayers();
    });

    // Path Selection (Main Guild)
    pathSelect.addEventListener('change', function() {
        updateSkillsSummary();
        updateActivePlayers();
    });

    // Path Selection (Semi Guild)
    semiPathSelect.addEventListener('change', function() {
        updateSkillsSummary();
        updateActivePlayers();
    });

    // Search Words
    searchWordsInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const words = document.querySelectorAll('#wordsList .tooltip-trigger');

        words.forEach(wordDiv => {
            const wordName = wordDiv.querySelector('label').textContent.toLowerCase();
            if (wordName.includes(searchTerm)) {
                wordDiv.style.display = '';
            } else {
                wordDiv.style.display = 'none';
            }
        });
    });

    // Clear Selections
    clearSelectionsButton.addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('#wordsList input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            checkbox.nextElementSibling.classList.remove('selected-item');
        });
        document.getElementById('guildSelect').value = '';
        document.getElementById('pathSelect').innerHTML = '<option value="">Najpierw wybierz gildię...</option>';
        document.getElementById('semiGuildSelect').value = '';
        document.getElementById('semiPathSelect').innerHTML = '<option value="">Najpierw wybierz gildię półzawodową...</option>';
        selectedMainGuildPath = null;
        updateSelectedWordCount();
        updateSkillsSummary();
        updateEffectsSummary();
    });

    // Export Button
    exportButton.addEventListener('click', exportToMarkdown);
}

function setupDarkMode() {
    const themeToggle = document.getElementById('themeToggle');

    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    });
}

function updateRacesAllowed(guild) {
    const racesAllowedDiv = document.getElementById('racesAllowed');
    const semiRacesAllowedDiv = document.getElementById('semiRacesAllowed');

    // Resetuj obie sekcje, gdy nie ma wybranej gildii
    if (!guild) {
        racesAllowedDiv.innerHTML = '<h3 class="font-medium mb-1">Dozwolone rasy (gildia zawodowa):</h3><p class="text-sm">Wybierz gildię zawodową, aby zobaczyć dozwolone rasy.</p>';
        semiRacesAllowedDiv.innerHTML = '<h3 class="font-medium mb-1">Dozwolone rasy (gildia półzawodowa):</h3><p class="text-sm">Wybierz gildię półzawodową, aby zobaczyć dozwolone rasy.</p>';
        return;
    }

    let html = '<h3 class="font-medium mb-1">Dozwolone rasy:</h3>';
    if (guild.races && guild.races.length > 0) {
        html += `<p class="text-sm">${formatRacesList(guild.races)}</p>`;
    } else {
        html += '<p class="text-sm">Brak informacji o dozwolonych rasach.</p>';
    }

    // Sprawdź, czy gildia pochodzi z guildsData czy semiGuildsData
    if (guildsData.some(g => g.code === guild.code)) {
        racesAllowedDiv.innerHTML = `<h3 class="font-medium mb-1">Dozwolone rasy (gildia zawodowa):</h3>${html}`;
        semiRacesAllowedDiv.innerHTML = '<h3 class="font-medium mb-1">Dozwolone rasy (gildia półzawodowa):</h3><p class="text-sm">Wybierz gildię półzawodową, aby zobaczyć dozwolone rasy.</p>';
    } else if (semiGuildsData.some(g => g.code === guild.code)) {
        semiRacesAllowedDiv.innerHTML = `<h3 class="font-medium mb-1">Dozwolone rasy (gildia półzawodowa):</h3>${html}`;
        racesAllowedDiv.innerHTML = '<h3 class="font-medium mb-1">Dozwolone rasy (gildia zawodowa):</h3><p class="text-sm">Wybierz gildię zawodową, aby zobaczyć dozwolone rasy.</p>';
    }
}

function formatRacesList(races) {
    return races.map(race => race.charAt(0).toUpperCase() + race.slice(1)).join(', ');
}

function updateActivePlayers() {
    const guildSelect = document.getElementById('guildSelect');
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    const pathSelect = document.getElementById('pathSelect');
    const semiPathSelect = document.getElementById('semiPathSelect');
    const activePlayersDiv = document.getElementById('activePlayers');
    const semiActivePlayersDiv = document.getElementById('semiActivePlayers');

    // Resetuj obie sekcje
    activePlayersDiv.innerHTML = '<p>Aktywnych graczy (gildia zawodowa): -</p>';
    semiActivePlayersDiv.innerHTML = '<p>Aktywnych graczy (gildia półzawodowa): -</p>';

    if (semiGuildSelect.value) {
        const selectedSemiGuild = semiGuildsData.find(g => g.code === semiGuildSelect.value);
        const selectedSemiPath = selectedSemiGuild && selectedSemiGuild.semipaths ? selectedSemiGuild.semipaths.find(p => p.name === semiPathSelect.value) : null;
        if (selectedSemiPath) {
            semiActivePlayersDiv.innerHTML = `<p>Aktywnych graczy (półzawodowa): ${selectedSemiPath.activePlayers}</p>`;
            if (selectedSemiPath.specs && selectedSemiPath.specs.length > 0) {
                semiActivePlayersDiv.innerHTML += `<p class="mt-2">Specjalne umiejętności (półzawodowa): ${selectedSemiPath.specs.join(', ')}</p>`;
            }
        }
    }

    if (guildSelect.value) {
        const selectedGuild = guildsData.find(g => g.code === guildSelect.value);
        const selectedPath = selectedGuild && selectedGuild.paths ? selectedGuild.paths.find(p => p.name === pathSelect.value) : null;
        if (selectedPath) {
            activePlayersDiv.innerHTML = `<p>Aktywnych graczy (zawodowa): ${selectedPath.activePlayers}</p>`;
            if (selectedPath.specs && selectedPath.specs.length > 0) {
                activePlayersDiv.innerHTML += `<p class="mt-2">Specjalne umiejętności (zawodowa): ${selectedPath.specs.join(', ')}</p>`;
            }
        }
    }
}


function updateSelectedWordCount() {
    const selectedWords = document.querySelectorAll('#wordsList input[type="checkbox"]:checked');
    document.getElementById('selectedWordCount').textContent = selectedWords.length;
}

function updateSkillsSummary() {
    const guildSelect = document.getElementById('guildSelect');
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    const pathSelect = document.getElementById('pathSelect');
    const semiPathSelect = document.getElementById('semiPathSelect');
    const skillsSummaryDiv = document.getElementById('skillsSummary');

    const selectedMainGuild = guildsData.find(g => g.code === guildSelect.value);
    const selectedSemiGuild = semiGuildsData.find(g => g.code === semiGuildSelect.value);

    const selectedMainPath = selectedMainGuild && selectedMainGuild.paths ? selectedMainGuild.paths.find(p => p.name === pathSelect.value) : null;
    const selectedSemiPath = selectedSemiGuild && selectedSemiGuild.semipaths ? selectedSemiGuild.semipaths.find(sp => sp.name === semiPathSelect.value) : null;

    let baseSkills = {...skillsGp};

    if (selectedMainPath) {
        for (const skill in selectedMainPath.skills) {
            baseSkills[skill] = Math.max(baseSkills[skill] || 0, selectedMainPath.skills[skill]);
        }
    }

    if (selectedSemiPath) {
        for (const skill in selectedSemiPath.skills) {
            baseSkills[skill] = Math.max(baseSkills[skill] || 0, selectedSemiPath.skills[skill]);
        }
    }

    const modifiedSkills = calculateModifiedSkills(baseSkills);

    skillsSummaryDiv.innerHTML = '';

    Object.entries(modifiedSkills).forEach(([skillName, value]) => {
        const displayName = skillName.charAt(0).toUpperCase() + skillName.slice(1);
        const originalBaseValue = baseSkills[skillName] || 0;
        const difference = value - originalBaseValue;

        const skillDiv = document.createElement('div');
        skillDiv.className = 'mb-3 relative'; // Dodajemy 'relative', aby móc pozycjonować absolutnie element z różnicą

        const nameElement = document.createElement('div');
        nameElement.className = 'flex justify-between mb-1';
        nameElement.innerHTML = `
            <span>${displayName}</span>
            <span>${value}</span>
        `;

        // Wyświetlanie różnicy nad paskiem po prawej
        if (difference !== 0) {
            const diffElement = document.createElement('div');
            diffElement.className = 'skill-diff absolute top-[-1.2em] right-0 text-xs'; // Początkowe ustawienie 'right' na 0
            diffElement.textContent = (difference > 0 ? '+' : '') + difference;
            diffElement.classList.add(difference > 0 ? 'text-green-500' : 'text-red-500');
            skillDiv.appendChild(diffElement);
        }

        const barContainer = document.createElement('div');
        barContainer.className = 'skill-bar w-full h-2 rounded-full';

        const barFill = document.createElement('div');
        barFill.className = 'skill-bar-fill h-full rounded-full';
        barFill.style.width = `${Math.min(value, 100)}%`;

        barContainer.appendChild(barFill);
        skillDiv.appendChild(nameElement);
        skillDiv.appendChild(barContainer);

        skillsSummaryDiv.appendChild(skillDiv);
    });
}

function calculateModifiedSkills(baseSkills) {
    const modifiedSkills = {...baseSkills};
    const selectedWords = document.querySelectorAll('#wordsList input[type="checkbox"]:checked');

    console.log("Selected words: ", baseSkills);
    selectedWords.forEach(checkbox => {
        const wordName = checkbox.value;
        const word = slowaData.find(w => w.name === wordName);

        if (word && word.effects) {
            word.effects.forEach(effect => {
                const effectValue = parseInt(effect.value);

                if (modifiedSkills.hasOwnProperty(effect.stat)) {
                    modifiedSkills[effect.stat] += effectValue;
                } else if (effect.stat === "umiejetnosci walki wszystkimi bronmi") {
                    const combatSkills = ["miecze", "sztylety", "topory", "mloty", "wlocznie", "szable", "bronie drzewcowe", "bronie lancuchowe", "maczugi"];
                    combatSkills.forEach(skill => {
                        if (modifiedSkills.hasOwnProperty(skill)) {
                            modifiedSkills[skill] += effectValue;
                        }
                    });
                } else if (effect.stat === "umiejetnosci ze wszystkich szkol magii") {
                    const magicSkills = ["magia ognia", "magia wody", "magia ziemi", "magia powietrza", "magia mroku", "iluzje", "przemiane", "przywolywanie", "magia runiczna", "czarodziejstwo"];
                    magicSkills.forEach(skill => {
                        if (modifiedSkills.hasOwnProperty(skill)) {
                            modifiedSkills[skill] += effectValue;
                        }
                    });
                }
                // Specyficzne mapowania umiejętności
                else if (effect.stat === "umiejetnosc w unikaniu ciosow przeciwnika" && modifiedSkills.hasOwnProperty("uniki")) {
                    modifiedSkills["uniki"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w parowaniu ciosow przeciwnika" && modifiedSkills.hasOwnProperty("parowanie")) {
                    modifiedSkills["parowanie"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w walce dwiema bronmi jednoczesnie" && modifiedSkills.hasOwnProperty("walka dwiema bronmi")) {
                    modifiedSkills["walka dwiema bronmi"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w skutecznym uzywaniu tarczy" && modifiedSkills.hasOwnProperty("tarczownictwo")) {
                    modifiedSkills["tarczownictwo"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w poslugiwaniu sie magia ognia" && modifiedSkills.hasOwnProperty("magia ognia")) {
                    modifiedSkills["magia ognia"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w poslugiwaniu sie magia wody" && modifiedSkills.hasOwnProperty("magia wody")) {
                    modifiedSkills["magia wody"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w poslugiwaniu sie magia ziemi" && modifiedSkills.hasOwnProperty("magia ziemi")) {
                    modifiedSkills["magia ziemi"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w poslugiwaniu sie magia powietrza" && modifiedSkills.hasOwnProperty("magia powietrza")) {
                    modifiedSkills["magia powietrza"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w poslugiwaniu sie magia mroku" && modifiedSkills.hasOwnProperty("magia mroku")) {
                    modifiedSkills["magia mroku"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w koncentrowaniu swoich magicznych zdolnosci" && modifiedSkills.hasOwnProperty("koncentracje")) {
                    modifiedSkills["koncentracje"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w koncentrowaniu swoich magicznych zdolnosci podczas walki" && modifiedSkills.hasOwnProperty("koncentracje w walce")) {
                    modifiedSkills["koncentracje w walce"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w rozpraszaniu zaklec" && modifiedSkills.hasOwnProperty("rozpraszanie")) {
                    modifiedSkills["rozpraszanie"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w poslugiwaniu sie magia przemiany" && modifiedSkills.hasOwnProperty("przemiane")) {
                    modifiedSkills["przemiane"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w magii tworzenia i przywolywania" && modifiedSkills.hasOwnProperty("przywolywanie")) {
                    modifiedSkills["przywolywanie"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w poslugiwaniu sie magia iluzji" && modifiedSkills.hasOwnProperty("iluzje")) {
                    modifiedSkills["iluzje"] += effectValue;
                }
                else if (effect.stat === "umiejetnosc w walce bez broni" && modifiedSkills.hasOwnProperty("walke bez broni")) {
                    modifiedSkills["walke bez broni"] += effectValue;
                }
                else if (effect.stat === "wytrzymalosc" && modifiedSkills.hasOwnProperty("wytrzymalosc")) {
                    modifiedSkills["wytrzymalosc"] += effectValue;
                }
                else if (effect.description === "zamienia ze soba umiejetnosci w skutecznym uzywaniu tarczy i w walce dwiema bronmi jednoczesnie") {
                    const diff = baseSkills["tarczownictwo"] - baseSkills["walka dwiema bronmi"];
                    modifiedSkills["tarczownictwo"] -= diff
                    modifiedSkills["walka dwiema bronmi"] += diff
                    console.log("Zamiana umiejętności tarczownictwo i walka dwiema bronmi diff " + diff + " tt " + baseSkills["tarczownictwo"] + " wb " + baseSkills["walka dwiema bronmi"]);
                }
                else if (effect.description === "zamienia ze soba umiejetnosci w poslugiwaniu sie magia zycia i w poslugiwaniu sie magia mroku") {
                    const diff = baseSkills["magia zycia"] - baseSkills["magia mroku"];
                    modifiedSkills["magia zycia"] -= diff
                    modifiedSkills["magia mroku"] += diff
                    console.log("Zdrada " + diff + " tt " + baseSkills["magia zycia"] + " wb " + baseSkills["magia mroku"]);
                }
            });
        }
    });

    return modifiedSkills;
}

function updateEffectsSummary() {
    const effectsSummaryDiv = document.getElementById('effectsSummary');
    const selectedWords = document.querySelectorAll('#wordsList input[type="checkbox"]:checked');

    if (selectedWords.length === 0) {
        effectsSummaryDiv.innerHTML = '<p>Wybierz słowa, aby zobaczyć ich efekty.</p>';
        return;
    }

    let html = '<ul class="list-disc pl-5">';
    let totalCost = 0;

    selectedWords.forEach(checkbox => {
        const wordName = checkbox.value;
        const word = slowaData.find(w => w.name === wordName);
        totalCost += parseInt(word.cost);

        html += `<li class="mb-2"><span class="font-medium">${wordName}</span> (${word.cost}) - ${word.description}</li>`;
    });

    html += '</ul>';
    html = `<p class="mb-2 font-bold">Łączny koszt: ${totalCost}</p>` + html;

    effectsSummaryDiv.innerHTML = html;
}

function exportToMarkdown() {
    let markdown = "# Podsumowanie Postaci Warlock MUD\n\n";

    // Sekcja Gildii Zawodowej
    const guildSelect = document.getElementById('guildSelect');
    const pathSelect = document.getElementById('pathSelect');
    const racesAllowed = document.getElementById('racesAllowed').querySelector('p');
    const activePlayers = document.getElementById('activePlayers').querySelector('p');

    if (guildSelect.value) {
        markdown += "## Gildia Zawodowa\n";
        markdown += `**Gildia:** ${guildSelect.options[guildSelect.selectedIndex].text}\n`;
        if (pathSelect.value) {
            markdown += `**Ścieżka:** ${pathSelect.value}\n`;
        }
        if (racesAllowed && racesAllowed.textContent.includes(':')) {
            markdown += `**Dozwolone rasy:** ${racesAllowed.textContent.split(': ')[1]}\n`;
        } else if (racesAllowed) {
            markdown += `**Dozwolone rasy:** ${racesAllowed.textContent}\n`;
        }
        if (activePlayers && activePlayers.textContent.includes(':')) {
            markdown += `${activePlayers.textContent}\n`;
        } else if (activePlayers) {
            markdown += `${activePlayers.textContent}\n`;
        }
        markdown += "\n";
    }

    // Sekcja Gildii Półzawodowej
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    const semiPathSelect = document.getElementById('semiPathSelect');
    const semiRacesAllowed = document.getElementById('semiRacesAllowed').querySelector('p');
    const semiActivePlayers = document.getElementById('semiActivePlayers').querySelector('p');

    if (semiGuildSelect.value) {
        markdown += "## Gildia Półzawodowa\n";
        markdown += `**Gildia:** ${semiGuildSelect.options[semiGuildSelect.selectedIndex].text}\n`;
        if (semiPathSelect.value) {
            markdown += `**Ścieżka:** ${semiPathSelect.value}\n`;
        }
        if (semiRacesAllowed && semiRacesAllowed.textContent.includes(':')) {
            markdown += `**Dozwolone rasy:** ${semiRacesAllowed.textContent.split(': ')[1]}\n`;
        } else if (semiRacesAllowed) {
            markdown += `**Dozwolone rasy:** ${semiRacesAllowed.textContent}\n`;
        }
        if (semiActivePlayers && semiActivePlayers.textContent.includes(':')) {
            markdown += `${semiActivePlayers.textContent}\n`;
        } else if (semiActivePlayers) {
            markdown += `${semiActivePlayers.textContent}\n`;
        }
        markdown += "\n";
    }

    // Sekcja Wybranych Słów
    const selectedWordsContainer = document.getElementById('wordsList');
    const selectedWordCheckboxes = selectedWordsContainer.querySelectorAll('input[type="checkbox"]:checked + label');

    if (selectedWordCheckboxes.length > 0) {
        markdown += "## Wybrane Słowa\n";
        selectedWordCheckboxes.forEach(label => {
            markdown += `- ${label.textContent}\n`;
        });
        markdown += "\n";
    }

    // Sekcja Podsumowania Umiejętności (będzie wymagała dostosowania do Twojej implementacji)
    const skillsSummary = document.getElementById('skillsSummary');
    if (skillsSummary.textContent !== 'Wybierz gildię i ścieżkę, aby zobaczyć umiejętności.') {
        markdown += "## Podsumowanie Umiejętności\n";
        markdown += skillsSummary.textContent + "\n\n"; // Może wymagać bardziej złożonego formatowania
    }

    // Sekcja Efektów Wybranych Słów (będzie wymagała dostosowania do Twojej implementacji)
    const effectsSummary = document.getElementById('effectsSummary');
    if (effectsSummary.textContent !== 'Wybierz słowa, aby zobaczyć ich efekty.') {
        markdown += "## Efekty Wybranych Słów\n";
        markdown += effectsSummary.textContent + "\n\n"; // Może wymagać bardziej złożonego formatowania
    }

    const filename = 'podsumowanie_postaci.md';
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
