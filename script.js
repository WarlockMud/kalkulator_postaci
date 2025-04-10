// Main App Logic
document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
    setupDarkMode();
    setupGpToggle();
    populateGuildSelect();
    populateSemiGuildSelect();
    populateWordsList();
    loadBuildFromURL(); // Load existing build from URL
    calculateAllStats();
});

// Example build data (replace with actual logic later)
const buildData = {
    selectedWords: ["Biegłość w broni długiej"], // Example words
    baseAttackSpeed: 1.2,
    attackSpeedModifiers: {speedBonus: 0.1, speedMalus: 0.05},
    averageDamage: 50,
    baseHP: 1000,
    extraHP: 200,
    baseHPRegen: 5,
    extraHPRegen: 2,
    baseMana: 500,
    extraMana: 100,
    baseManaRegen: 3,
    extraManaRegen: 1,
};

// --- UI Update Functions ---
function setStatsInUI(stats) {
    document.getElementById('totalRunesRequired').textContent = stats.totalRunesRequired;
    document.getElementById('attacksPerSecond').textContent = stats.attacksPerSecond.toFixed(2);
    document.getElementById('dps').textContent = stats.dps.toFixed(2);
    document.getElementById('hp').textContent = stats.hp;
    document.getElementById('hpRegen').textContent = stats.hpRegen.toFixed(2);
    document.getElementById('mana').textContent = stats.mana;
    document.getElementById('manaRegen').textContent = stats.manaRegen.toFixed(2);
}

// --- Calculation Functions ---
function calculateTotalRunesRequired(selectedWords) {
    let totalRunes = 0;
    selectedWords.forEach(wordName => {
        if (slowaRuny[wordName]) {
            totalRunes += slowaRuny[wordName].length;
        }
    });
    return totalRunes;
}

function calculateAttacksPerSecond(baseAttackSpeed, modifiers) {
    let attackSpeed = baseAttackSpeed;
    if (modifiers) {
        if (modifiers.speedBonus) attackSpeed *= (1 + modifiers.speedBonus);
        if (modifiers.speedMalus) attackSpeed *= (1 - modifiers.speedMalus);
    }
    return attackSpeed;
}

function calculateDPS(averageDamage, attacksPerSecond) {
    return averageDamage * attacksPerSecond;
}

function calculateHP(baseHP, extraHP) {
    return baseHP + extraHP;
}

function calculateHPRegen(baseHPRegen, extraHPRegen) {
    return baseHPRegen + extraHPRegen;
}

function calculateMana(baseMana, extraMana) {
    return baseMana + extraMana;
}

function calculateManaRegen(baseManaRegen, extraManaRegen) {
    return baseManaRegen + extraManaRegen;
}

function calculateAllStats() {
    const buildData = getCurrentBuildData();
    const selectedWordsNames = buildData.words.map(word => word.name);
    const totalRunesRequired = calculateTotalRunesRequired(selectedWordsNames);
    const attacksPerSecond = calculateAttacksPerSecond(buildData.baseAttackSpeed, buildData.attackSpeedModifiers);
    const dps = calculateDPS(buildData.averageDamage, attacksPerSecond);
    const hp = calculateHP(buildData.baseHP, buildData.extraHP);
    const hpRegen = calculateHPRegen(buildData.baseHPRegen, buildData.extraHPRegen);
    const mana = calculateMana(buildData.baseMana, buildData.extraMana);
    const manaRegen = calculateManaRegen(buildData.baseManaRegen, buildData.extraManaRegen);

    const stats = {
        totalRunesRequired,
        attacksPerSecond,
        dps,
        hp,
        hpRegen,
        mana,
        manaRegen,
    };

    setStatsInUI(stats);
}

// --- Funkcje populacji (bez zmian) ---
function populateGuildSelect() {
    const guildSelect = document.getElementById('guildSelect');
    // Upewnij się, że guildsData jest dostępne
    if (typeof guildsData !== 'undefined') {
        guildsData.forEach(guild => {
            const option = document.createElement('option');
            option.value = guild.code;
            option.textContent = guild.name;
            guildSelect.appendChild(option);
        });
    } else {
        console.error("guildsData nie jest zdefiniowane!");
    }
}

function populateSemiGuildSelect() {
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    // Upewnij się, że semiGuildsData jest dostępne
    if (typeof semiGuildsData !== 'undefined') {
        semiGuildsData.forEach(guild => {
            const option = document.createElement('option');
            option.value = guild.code;
            option.textContent = guild.name;
            semiGuildSelect.appendChild(option);
        });
    } else {
        console.error("semiGuildsData nie jest zdefiniowane!");
    }
}

function populatePathSelect(guildData, isSemiGuild = false) {
    const pathSelectId = isSemiGuild ? 'semiPathSelect' : 'pathSelect';
    const pathSelect = document.getElementById(pathSelectId);
    if (!pathSelect) {
        console.error(`Nie znaleziono elementu select o id: ${pathSelectId}`);
        return;
    }
    pathSelect.innerHTML = ''; // Clear existing options

    // Default option when no guild is selected
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    if (!guildData) {
        defaultOption.textContent = `Najpierw wybierz ${isSemiGuild ? 'gildię półzawodową' : 'gildię zawodową'}...`;
        pathSelect.appendChild(defaultOption);
        return;
    }

    // Add default option even if guild is selected but before paths
    defaultOption.textContent = `Wybierz ścieżkę...`;
    pathSelect.appendChild(defaultOption);


    const pathsToPopulate = isSemiGuild ? guildData.semipaths : guildData.paths;
    if (pathsToPopulate && pathsToPopulate.length > 0) {
        pathsToPopulate.forEach(path => {
            const option = document.createElement('option');
            option.value = path.name;
            option.textContent = path.name;
            pathSelect.appendChild(option);
        });
        // Trigger change only if there are actual paths added besides the default
        // if (pathSelect.options.length > 1) {
        //     pathSelect.dispatchEvent(new Event('change')); // Don't auto-trigger change on populate
        // }
    } else {
        // If no paths, keep only the default option
        pathSelect.innerHTML = ''; // Clear again
        const noPathOption = document.createElement('option');
        noPathOption.value = '';
        noPathOption.textContent = `Brak ścieżek dla ${isSemiGuild ? 'tej gildii półzawodowej' : 'tej gildii zawodowej'}...`;
        pathSelect.appendChild(noPathOption);
    }
    // Reset path selection to default after populating
    pathSelect.value = '';
}


function populateWordsList() {
    const wordsList = document.getElementById('wordsList');
    slowaData.forEach(word => {
        const div = document.createElement('div');
        div.className = 'tooltip-trigger relative'; // Added relative for tooltip positioning if needed

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'custom-checkbox';
        checkbox.id = `word_${word.name.replace(/\s+/g, '_')}`; // Ensure valid ID
        checkbox.value = word.name;
        checkbox.dataset.cost = word.cost;

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.className = 'block p-2 border rounded mb-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors';
        label.innerHTML = `${word.name} <span class="text-sm text-gray-500 dark:text-gray-400">(${word.cost})</span>`;

        const tooltip = document.createElement('div');
        // Added Tailwind classes for better default tooltip styling
        tooltip.className = 'tooltip absolute left-full top-0 ml-2 p-2 rounded bg-gray-800 text-white text-xs shadow-lg invisible opacity-0 transition-opacity duration-300 z-10 w-64'; // Adjust width (w-64) as needed
        tooltip.innerHTML = `<p>${word.description}</p>`;

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(tooltip);
        wordsList.appendChild(div);

        // Add hover listeners to the trigger for the tooltip
        div.addEventListener('mouseenter', () => {
            tooltip.classList.remove('invisible', 'opacity-0');
            tooltip.classList.add('visible', 'opacity-100');
        });
        div.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible', 'opacity-100');
            tooltip.classList.add('invisible', 'opacity-0');
        });


        checkbox.addEventListener('change', function () {
            if (this.checked) {
                label.classList.add('selected-item', '!bg-indigo-500', 'dark:!bg-indigo-700', 'text-white'); // Use !important or more specific selectors if needed
            } else {
                label.classList.remove('selected-item', '!bg-indigo-500', 'dark:!bg-indigo-700', 'text-white');
            }
            updateSelectedWordCount();
            updateSkillsSummary(); // Recalculate skills on word change
            updateEffectsSummary();
        });
    });
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    const guildSelect = document.getElementById('guildSelect');
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    const pathSelect = document.getElementById('pathSelect');
    const semiPathSelect = document.getElementById('semiPathSelect');
    const searchWordsInput = document.getElementById('searchWords');
    const clearSelectionsButton = document.getElementById('clearSelections');
    // NOWE Przyciski eksportu
    const exportMdButton = document.getElementById('exportMdButton');
    const exportJsonButton = document.getElementById('exportJsonButton');
    const generateLinkButton = document.getElementById('generateLinkButton');

    // Guild Selection
    guildSelect.addEventListener('change', function () {
        const selectedGuild = (typeof guildsData !== 'undefined') ? guildsData.find(g => g.code === this.value) : null;
        updateRacesAllowed(selectedGuild, false); // Specify it's not semi-guild
        populatePathSelect(selectedGuild, false); // Populate for main guild
        updateSkillsSummary();
        updateActivePlayers();
        // Reset semi-guild path if main guild changes? Optional.
        // document.getElementById('semiPathSelect').value = '';
    });

    // semiGuild Selection
    semiGuildSelect.addEventListener('change', function () {
        const selectedSemiGuild = (typeof semiGuildsData !== 'undefined') ? semiGuildsData.find(g => g.code === this.value) : null;
        updateRacesAllowed(selectedSemiGuild, true); // Specify it's semi-guild
        populatePathSelect(selectedSemiGuild, true); // Populate for semi guild
        updateSkillsSummary();
        updateActivePlayers();
        // Reset main guild path if semi guild changes? Optional.
        // document.getElementById('pathSelect').value = '';
    });

    // Path Selection (Main Guild)
    pathSelect.addEventListener('change', function () {
        updateSkillsSummary();
        updateActivePlayers(); // Update players/specs when path changes
    });

    // Path Selection (Semi Guild)
    semiPathSelect.addEventListener('change', function () {
        updateSkillsSummary();
        updateActivePlayers(); // Update players/specs when path changes
    });

    // Search Words
    searchWordsInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();
        const words = document.querySelectorAll('#wordsList .tooltip-trigger');

        words.forEach(wordDiv => {
            const label = wordDiv.querySelector('label');
            // Ensure label exists and get text content safely
            const wordName = label ? label.textContent.toLowerCase() : '';
            if (wordName.includes(searchTerm)) {
                wordDiv.style.display = '';
            } else {
                wordDiv.style.display = 'none';
            }
        });
    });

    // Clear Selections
    clearSelectionsButton.addEventListener('click', function () {
        // Clear checkboxes and styles
        const checkboxes = document.querySelectorAll('#wordsList input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
            const label = checkbox.nextElementSibling;
            if (label) {
                label.classList.remove('selected-item', '!bg-indigo-500', 'dark:!bg-indigo-700', 'text-white');
            }
        });

        // Reset guild and path selects
        guildSelect.value = '';
        semiGuildSelect.value = '';

        // Repopulate path selects to show default messages
        populatePathSelect(null, false);
        populatePathSelect(null, true);

        // Clear race and player info
        updateRacesAllowed(null); // Call once to reset both sections
        updateActivePlayers();    // Call once to reset both sections

        // Reset search
        searchWordsInput.value = '';
        searchWordsInput.dispatchEvent(new Event('input')); // Trigger search filter reset


        // Update counts and summaries
        updateSelectedWordCount();
        updateSkillsSummary();
        updateEffectsSummary();
    });

    // Export Buttons
    exportMdButton.addEventListener('click', exportToMarkdown);
    exportJsonButton.addEventListener('click', exportToJson);
    generateLinkButton.addEventListener('click', generateAndShowShareableLink);
}

// --- Dark Mode Setup ---
function setupDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    // Apply theme on initial load
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        themeToggle.checked = true;
    } else {
        document.documentElement.classList.remove('dark');
        themeToggle.checked = false;
    }
    document.getElementById('themeToggle').addEventListener('change', function () {
        setTimeout(applyDarkModeToRuneCosts, 50); // Small delay to ensure DOM is updated
    });

    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
        setTimeout(applyDarkModeToRuneCosts, 50);
    });
}


// Apply on page load
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(applyDarkModeToRuneCosts, 100); // Delay to ensure content is loaded
});

// Apply whenever the runeCostsSummary content changes
// This uses a MutationObserver to watch for changes
const runeCostsObserver = new MutationObserver(function (mutations) {
    applyDarkModeToRuneCosts();
});

// Start observing once the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const runeCostsSummary = document.getElementById('runeCostsSummary');
    if (runeCostsSummary) {
        runeCostsObserver.observe(runeCostsSummary, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true
        });
    }
});


// Function to apply dark mode styling to rune costs table
function applyDarkModeToRuneCosts() {
    const isDarkMode = document.body.classList.contains('dark');
    const runeCostsSummary = document.getElementById('runeCostsSummary');

    if (!runeCostsSummary) return;

    // Apply styles to the container
    runeCostsSummary.style.backgroundColor = isDarkMode ? '#2d3748' : '#ffffff';
    runeCostsSummary.style.color = isDarkMode ? '#f8f9fa' : '#212529';

    // Find and style all children elements
    const allElements = runeCostsSummary.querySelectorAll('*');
    allElements.forEach(el => {
        if (el.tagName === 'TABLE' || el.tagName === 'TR' || el.tagName === 'TD' ||
            el.tagName === 'TH' || el.tagName === 'DIV') {
            el.style.backgroundColor = isDarkMode ? '#2d3748' : '#ffffff';
            el.style.color = isDarkMode ? '#f8f9fa' : '#212529';
            if (el.tagName === 'TD' || el.tagName === 'TH') {
                el.style.borderColor = isDarkMode ? '#4a5568' : '#dee2e6';
            }
        }
    });
}

// --- NOWOŚĆ: GP Skills Toggle Setup ---
function setupGpToggle() {
    const gpSkillsToggle = document.getElementById('gpSkillsToggle');
    const gpSkillsStatusSpan = document.getElementById('gpSkillsStatus'); // <-- NOWOŚĆ: Pobierz span statusu

    // Funkcja pomocnicza do aktualizacji statusu
    const updateGpToggleStatus = (enabled) => {
        if (enabled) {
            gpSkillsStatusSpan.textContent = 'ON';
            gpSkillsStatusSpan.classList.remove('text-red-500', 'dark:text-red-400');
            gpSkillsStatusSpan.classList.add('text-green-600', 'dark:text-green-400');
        } else {
            gpSkillsStatusSpan.textContent = 'OFF';
            gpSkillsStatusSpan.classList.remove('text-green-600', 'dark:text-green-400');
            gpSkillsStatusSpan.classList.add('text-red-500', 'dark:text-red-400');
        }
    };

    // Apply state on initial load, default to true (ON) if not set
    const gpEnabled = localStorage.getItem('gpSkillsEnabled') !== 'false'; // Default true
    gpSkillsToggle.checked = gpEnabled;
    updateGpToggleStatus(gpEnabled); // <-- NOWOŚĆ: Ustaw początkowy status

    // Store initial state explicitly if it wasn't set
    if (localStorage.getItem('gpSkillsEnabled') === null) {
        localStorage.setItem('gpSkillsEnabled', 'true');
    }


    gpSkillsToggle.addEventListener('change', function () {
        const isEnabled = this.checked; // <-- Zapisz stan
        if (isEnabled) {
            localStorage.setItem('gpSkillsEnabled', 'true');
        } else {
            localStorage.setItem('gpSkillsEnabled', 'false');
        }
        updateGpToggleStatus(isEnabled); // <-- NOWOŚĆ: Zaktualizuj status
        updateSkillsSummary(); // Recalculate skills when toggle changes
    });
}

// --- Update Functions (Races, Players, Word Count - drobne poprawki) ---
function updateRacesAllowed(guild, isSemiGuild) {
    const racesAllowedDiv = document.getElementById('racesAllowed');
    const semiRacesAllowedDiv = document.getElementById('semiRacesAllowed');

    // If guild is null, reset both sections specifically
    if (guild === null) {
        racesAllowedDiv.innerHTML = '<h3 class="font-medium mb-1 text-sm">Dozwolone rasy (zawodowa):</h3><p class="text-xs italic">Wybierz gildię...</p>';
        semiRacesAllowedDiv.innerHTML = '<h3 class="font-medium mb-1 text-sm">Dozwolone rasy (półzawodowa):</h3><p class="text-xs italic">Wybierz gildię...</p>';
        return;
    }

    let html = '';
    if (guild && guild.races && guild.races.length > 0) {
        html += `<p class="text-xs">${formatRacesList(guild.races)}</p>`;
    } else {
        html += '<p class="text-xs italic">Brak informacji o rasach.</p>';
    }

    // Update the correct section based on isSemiGuild flag
    if (isSemiGuild) {
        semiRacesAllowedDiv.innerHTML = `<h3 class="font-medium mb-1 text-sm">Dozwolone rasy (półzawodowa):</h3>${html}`;
        // Optionally reset the other section if you want only one active at a time
        // racesAllowedDiv.innerHTML = '<h3 class="font-medium mb-1 text-sm">Dozwolone rasy (zawodowa):</h3><p class="text-xs italic">Wybierz gildię...</p>';
    } else {
        racesAllowedDiv.innerHTML = `<h3 class="font-medium mb-1 text-sm">Dozwolone rasy (zawodowa):</h3>${html}`;
        // Optionally reset the other section
        // semiRacesAllowedDiv.innerHTML = '<h3 class="font-medium mb-1 text-sm">Dozwolone rasy (półzawodowa):</h3><p class="text-xs italic">Wybierz gildię...</p>';
    }
}


function formatRacesList(races) {
    // Capitalize first letter of each race
    return races.map(race => race.charAt(0).toUpperCase() + race.slice(1)).join(', ');
}

function updateActivePlayers() {
    const guildSelect = document.getElementById('guildSelect');
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    const pathSelect = document.getElementById('pathSelect');
    const semiPathSelect = document.getElementById('semiPathSelect');
    const activePlayersDiv = document.getElementById('activePlayers');
    const semiActivePlayersDiv = document.getElementById('semiActivePlayers');

    // Reset both sections initially
    activePlayersDiv.innerHTML = '<p class="text-xs">Aktywni (zawodowa): -</p>';
    semiActivePlayersDiv.innerHTML = '<p class="text-xs">Aktywni (półzawodowa): -</p>';

    // Update Semi-Guild Players/Specs
    if (semiGuildSelect.value && typeof semiGuildsData !== 'undefined') {
        const selectedSemiGuild = semiGuildsData.find(g => g.code === semiGuildSelect.value);
        if (selectedSemiGuild && selectedSemiGuild.semipaths) {
            const selectedSemiPath = selectedSemiGuild.semipaths.find(p => p.name === semiPathSelect.value);
            if (selectedSemiPath) {
                let semiHtml = `<p class="text-xs">Aktywni (półzawodowa): ${selectedSemiPath.activePlayers ?? '-'}</p>`;
                if (selectedSemiPath.specs && selectedSemiPath.specs.length > 0) {
                    semiHtml += `<p class="mt-1 text-xs">Spec: ${selectedSemiPath.specs.join(', ')}</p>`;
                }
                semiActivePlayersDiv.innerHTML = semiHtml;
            }
        }
    }

    // Update Main Guild Players/Specs
    if (guildSelect.value && typeof guildsData !== 'undefined') {
        const selectedGuild = guildsData.find(g => g.code === guildSelect.value);
        if (selectedGuild && selectedGuild.paths) {
            const selectedPath = selectedGuild.paths.find(p => p.name === pathSelect.value);
            if (selectedPath) {
                let mainHtml = `<p class="text-xs">Aktywni (zawodowa): ${selectedPath.activePlayers ?? '-'}</p>`;
                if (selectedPath.specs && selectedPath.specs.length > 0) {
                    mainHtml += `<p class="mt-1 text-xs">Spec: ${selectedPath.specs.join(', ')}</p>`;
                }
                activePlayersDiv.innerHTML = mainHtml;
            }
        }
    }
}

function updateSelectedWordCount() {
    const selectedWords = document.querySelectorAll('#wordsList input[type="checkbox"]:checked');
    document.getElementById('selectedWordCount').textContent = selectedWords.length;
}

function updateSkillsSummary() {
    const gpSkillsToggle = document.getElementById('gpSkillsToggle');
    const skillsSummaryDiv = document.getElementById('skillsSummary');
    const guildSelect = document.getElementById('guildSelect');
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    const pathSelect = document.getElementById('pathSelect');
    const semiPathSelect = document.getElementById('semiPathSelect');
    // Guard against missing elements
    if (!gpSkillsToggle || !skillsSummaryDiv || !guildSelect || !semiGuildSelect || !pathSelect || !semiPathSelect) {
        console.error("Missing one or more required elements for updateSkillsSummary.");
        return;
    }
    // Guard against missing data
    if (typeof guildsData === 'undefined' || typeof semiGuildsData === 'undefined' || typeof skills === 'undefined') {
        console.error("Missing data for updateSkillsSummary.");
        skillsSummaryDiv.innerHTML = '<p class="text-red-500">Błąd ładowania danych.</p>';
        return;
    }
    const gpEnabled = gpSkillsToggle.checked;
    // Find selected guilds and paths data
    const selectedMainGuild = guildSelect.value ?
        guildsData.find(g => g.code === guildSelect.value) : null;
    const selectedSemiGuild = semiGuildSelect.value ? semiGuildsData.find(g => g.code === semiGuildSelect.value) : null;
    const selectedMainPath = (selectedMainGuild && selectedMainGuild.paths && pathSelect.value)
        ?
        selectedMainGuild.paths.find(p => p.name === pathSelect.value) : null;
    const selectedSemiPath = (selectedSemiGuild && selectedSemiGuild.semipaths && semiPathSelect.value)
        ?
        selectedSemiGuild.semipaths.find(sp => sp.name === semiPathSelect.value) : null;
    const baseSkills = getGuildSkills(selectedMainPath, selectedSemiPath, gpEnabled);
    const modifiedSkills = calculateModifiedSkills(baseSkills);

    // Calculate final skills
    // --- Display Logic ---
    skillsSummaryDiv.innerHTML = '';
    // Clear previous summary
    if (Object.keys(modifiedSkills).length === 0) {
        skillsSummaryDiv.innerHTML = '<p class="text-center col-span-1 md:col-span-2 italic text-sm py-4">Wybierz gildię/ścieżkę lub włącz GP Skills, aby zobaczyć umiejętności.</p>';
        return;
    }
    // Sort skills alphabetically for consistent display
    const sortedSkillNames = Object.keys(modifiedSkills).sort((a, b) => a.localeCompare(b));
    sortedSkillNames.forEach(skillName => {
        let finalValue = Math.max(0, Math.min(modifiedSkills[skillName], 200)); // Clamp to 0-200
        // Ensure baseSkills considers the GP toggle state correctly before word mods
        const baseValueBeforeWords = baseSkills[skillName] || 0;
        const difference = finalValue - baseValueBeforeWords;
        const skillDiv = document.createElement('div');
        skillDiv.className = 'mb-0.5 relative min-w-0';  // Further reduced margin
        const nameElement = document.createElement('div');
        nameElement.className = 'flex justify-between items-baseline mb-0.5 text-sm'; // Further reduced margin
        nameElement.innerHTML = `
  <span class="truncate pr-1">${skillName.charAt(0).toUpperCase() + skillName.slice(1)}</span>
  <span class="font-semibold whitespace-nowrap">${finalValue}</span>
  `;
        if (difference !== 0) {
            const diffElement = document.createElement('div');
            diffElement.className = 'skill-diff absolute -top-1 right-0 text-xs font-bold';
            diffElement.textContent = (difference > 0 ? '+' : '') + difference;
            diffElement.classList.add(difference > 0 ? 'text-green-500' : 'text-red-500');
            // Add margin to the value span to prevent overlap with the difference indicator
            const valueSpan = nameElement.querySelector('.font-semibold');
            if (valueSpan) valueSpan.style.marginRight = '2.5em';
            skillDiv.appendChild(diffElement);
        }
        const barContainer = document.createElement('div');
        barContainer.className = 'skill-bar w-full h-1.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden'; // Reduced height
        const barFill = document.createElement('div');
        barFill.className = 'skill-bar-fill h-full rounded-full transition-width duration-300 ease-in-out';
        // Calculate color
        const red = Math.round(255 * (200 - finalValue) / 200);
        const green = Math.round(255 * finalValue / 200);
        barFill.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
        barFill.style.width = `${(finalValue / 200) * 100}%`;  // Calculate width based on 200
        barContainer.appendChild(barFill);
        skillDiv.appendChild(nameElement);
        skillDiv.appendChild(barContainer);
        skillsSummaryDiv.appendChild(skillDiv);
    });
}

function getGuildSkills(selectedMainPath, selectedSemiPath, gpEnabled) {
    const combinedGuildSkills = {};
    // 1. Combine skills from selected main and semi guild paths, taking the higher value
    if (selectedMainPath && selectedMainPath.skills) {
        for (const skill in selectedMainPath.skills) {
            combinedGuildSkills[skill] = Math.max(combinedGuildSkills[skill] || 0, selectedMainPath.skills[skill]);
        }
    }
    if (selectedSemiPath && selectedSemiPath.skills) {
        for (const skill in selectedSemiPath.skills) {
            combinedGuildSkills[skill] = Math.max(combinedGuildSkills[skill] || 0, selectedSemiPath.skills[skill]);
        }
    }
    // 2. Incorporate GP skills based on the toggle state
    if (gpEnabled) {
        for (const [skill, skillData] of Object.entries(skills)) {
            combinedGuildSkills[skill] = Math.max(combinedGuildSkills[skill] || 0, skillData.gp);
        }
    }
    return combinedGuildSkills;
}

function skillIdToName(id) {
    const skillKey = Object.keys(skills).find(key => skills[key].id === id);
    return skillKey || null;
}

function calculateModifiedSkills(baseSkills) {
    const modifiedSkills = {...baseSkills}; // Work on a copy
    const selectedWords = document.querySelectorAll('#wordsList input[type="checkbox"]:checked');

    selectedWords.forEach(checkbox => {
        const wordName = checkbox.value;
        const word = slowaData.find(w => w.name === wordName)
        let effectValue
        if (word && word.effects) {
            word.effects.forEach(effect => {
                const effectType = effect[0]
                console.log(`Processing effect type: ${effectType} for word: ${wordName}`)
                switch (effectType) {
                    case '_pb_skill':
                        const targetSkill = skillIdToName(effect[1])
                        effectValue = parseInt(effect[2])
                        if (modifiedSkills.hasOwnProperty(targetSkill)) {
                            modifiedSkills[targetSkill] = (modifiedSkills[targetSkill] || 0) + effectValue
                        }
                        break
                    case '_pb_skill_weapon':
                        effectValue = parseInt(effect[1]);
                        const combatSkills = ["miecze", "sztylety", "topory", "mloty", "wlocznie", "szable", "bronie drzewcowe", "bronie lancuchowe", "maczugi", "bicze", "luki", "kusze"];
                        combatSkills.forEach(skill => {
                            if (modifiedSkills.hasOwnProperty(skill)) {
                                modifiedSkills[skill] = (modifiedSkills[skill] || 0) + effectValue;
                            }
                        })
                        break
                    case '_pb_skill_magic_all':
                        effectValue = parseInt(effect[1]);
                        const magicSkills = ["magia ognia", "magia wody", "magia ziemi", "magia powietrza", "magia mroku", "iluzja", "przemiana", "przywolywanie", "magia runiczna", "czarodziejstwo", "magia zycia", "mistycyzm", "zaklinanie"];
                        magicSkills.forEach(skill => {
                            if (modifiedSkills.hasOwnProperty(skill)) {
                                modifiedSkills[skill] = (modifiedSkills[skill] || 0) + effectValue;
                            }
                        })
                        break
                    case '_pb_skill_swap':
                        const skill1 = skillIdToName(effect[1]);
                        const skill2 = skillIdToName(effect[2]);
                        const val1 = baseSkills[skill1] || 0;
                        const val2 = baseSkills[skill2] || 0;
                        const diff = val1 - val2;
                        modifiedSkills[skill1] = (modifiedSkills[skill1] || 0) - diff;
                        modifiedSkills[skill2] = (modifiedSkills[skill2] || 0) + diff;
                        break
                }
            });
        }
    });

    // Ensure skills don't go below 0 (or other floor if needed)
    for (const skill in modifiedSkills) {
        if (modifiedSkills[skill] < 0) {
            modifiedSkills[skill] = 0;
        }
    }

    return modifiedSkills;
}

// Function to calculate and display rune costs
function calculateRuneCosts(selectedWords) {
    // Check if slowaRuny is defined
    if (typeof slowaRuny === 'undefined') {
        console.error("slowaRuny is not defined!");
        return {html: '', totalRuneCount: 0};
    }

    // Initialize an object to count runes
    const runeCounts = {};
    let totalRuneCount = 0;

    // Count all required runes from selected words
    selectedWords.forEach(checkbox => {
        const wordName = checkbox.value;
        if (slowaRuny.hasOwnProperty(wordName)) {
            const runes = slowaRuny[wordName];
            runes.forEach(rune => {
                runeCounts[rune] = (runeCounts[rune] || 0) + 1;
                totalRuneCount++;
            });
        }
    });

    // If no runes are required, return empty string
    if (totalRuneCount === 0) {
        return {html: '', totalRuneCount: 0};
    }

    // Create HTML for rune display
    let html = '<div class="mt-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">';
    html += '<h4 class="font-bold mb-2">Wymagane runy:</h4>';
    html += '<div class="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5">';

    // Sort runes alphabetically for better readability
    const sortedRunes = Object.keys(runeCounts).sort();

    sortedRunes.forEach(rune => {
        html += `
            <div class="bg-white dark:bg-gray-700 rounded p-2 text-center shadow-sm">
                <span class="font-medium">${rune}</span>
                <span class="ml-1 text-gray-500 dark:text-gray-300">x${runeCounts[rune]}</span>
            </div>
        `;
    });

    html += '</div></div>';

    return {html, totalRuneCount};
}

// Update the updateEffectsSummary function to include rune costs
function updateEffectsSummary() {
    const effectsSummaryDiv = document.getElementById('effectsSummary');
    const selectedWords = document.querySelectorAll('#wordsList input[type="checkbox"]:checked');

    if (selectedWords.length === 0) {
        effectsSummaryDiv.innerHTML = '<p>Wybierz słowa, aby zobaczyć ich efekty.</p>';
        return;
    }

    let html = '<ul class="list-disc pl-5">';
    let totalCost = 0;
    let selectedWordItems = [];

    selectedWords.forEach(checkbox => {
        const wordName = checkbox.value;
        const word = slowaData.find(w => w.name === wordName);
        if (word) {
            totalCost += parseInt(word.cost);
            selectedWordItems.push(`<li class="mb-2"><span class="font-medium">${wordName}</span> (${word.cost}) - ${word.description}</li>`);
        }
    });

    html += selectedWordItems.join('');
    html += '</ul>';

    // Add total cost summary
    html = `<p class="mb-2 font-bold">Łączny koszt: ${totalCost}</p>` + html;

    // Add rune cost information
    const {html: runeHtml, totalRuneCount} = calculateRuneCosts(selectedWords);
    if (totalRuneCount > 0) {
        html += runeHtml;
    }

    effectsSummaryDiv.innerHTML = html;
}

// --- Helper to get current build data ---
function getCurrentBuildData() {
    const guildSelect = document.getElementById('guildSelect');
    const pathSelect = document.getElementById('pathSelect');
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    const semiPathSelect = document.getElementById('semiPathSelect');
    const selectedWordCheckboxes = document.querySelectorAll('#wordsList input[type="checkbox"]:checked');

    const selectedMainGuild = (typeof guildsData !== 'undefined' && guildSelect.value) ? guildsData.find(g => g.code === guildSelect.value) : null;
    const selectedSemiGuild = (typeof semiGuildsData !== 'undefined' && semiGuildSelect.value) ? semiGuildsData.find(g => g.code === semiGuildSelect.value) : null;
    const selectedMainPath = (selectedMainGuild && selectedMainGuild.paths && pathSelect.value) ? selectedMainGuild.paths.find(p => p.name === pathSelect.value) : null;
    const selectedSemiPath = (selectedSemiGuild && selectedSemiGuild.semipaths && semiPathSelect.value) ? selectedSemiGuild.semipaths.find(sp => sp.name === semiPathSelect.value) : null;

    const selectedWords = [];
    let totalCost = 0;
    if (typeof slowaData !== 'undefined') {
        selectedWordCheckboxes.forEach(cb => {
            const word = slowaData.find(w => w.name === cb.value);
            if (word) {
                selectedWords.push({name: word.name, cost: word.cost, description: word.description});
                totalCost += parseInt(word.cost) || 0;
            }
        });
    }

    // Recalculate base and modified skills to ensure consistency
    const gpEnabled = document.getElementById('gpSkillsToggle').checked;

    const finalSkills = calculateModifiedSkills(getGuildSkills(selectedMainPath, selectedSemiPath, gpEnabled));

    return {
        mainGuild: selectedMainGuild ? {name: selectedMainGuild.name, code: selectedMainGuild.code} : null,
        mainPath: selectedMainPath ? {name: selectedMainPath.name} : null,
        semiGuild: selectedSemiGuild ? {name: selectedSemiGuild.name, code: selectedSemiGuild.code} : null,
        semiPath: selectedSemiPath ? {name: selectedSemiPath.name} : null,
        words: selectedWords,
        totalWordCost: totalCost,
        finalSkills: finalSkills,
        timestamp: new Date().toISOString() // Add timestamp for context
    };
}


// --- Export Functions ---

// Zmodyfikowana funkcja - teraz pobiera dane z getCurrentBuildData
function exportToMarkdown() {
    const buildData = getCurrentBuildData();
    let markdown = "# Podsumowanie Postaci Warlock MUD\n\n";

    // Sekcja Gildii Zawodowej
    if (buildData.mainGuild) {
        markdown += "## Gildia Zawodowa\n";
        markdown += `**Gildia:** ${buildData.mainGuild.name} (${buildData.mainGuild.code})\n`;
        if (buildData.mainPath) {
            markdown += `**Ścieżka:** ${buildData.mainPath.name}\n`;
        }
        // Add races and active players if needed (get from original data source based on code/path)
        const guildInfo = (typeof guildsData !== 'undefined') ? guildsData.find(g => g.code === buildData.mainGuild.code) : null;
        if (guildInfo && guildInfo.races) {
            markdown += `**Dozwolone rasy:** ${formatRacesList(guildInfo.races)}\n`;
        }
        const pathInfo = guildInfo && guildInfo.paths && buildData.mainPath ? guildInfo.paths.find(p => p.name === buildData.mainPath.name) : null;
        if (pathInfo) {
            markdown += `**Aktywni gracze:** ${pathInfo.activePlayers ?? '-'}\n`;
            if (pathInfo.specs && pathInfo.specs.length > 0) {
                markdown += `**Specjalne:** ${pathInfo.specs.join(', ')}\n`;
            }
        }

        markdown += "\n";
    }

    // Sekcja Gildii Półzawodowej
    if (buildData.semiGuild) {
        markdown += "## Gildia Półzawodowa\n";
        markdown += `**Gildia:** ${buildData.semiGuild.name} (${buildData.semiGuild.code})\n`;
        if (buildData.semiPath) {
            markdown += `**Ścieżka:** ${buildData.semiPath.name}\n`;
        }
        const semiGuildInfo = (typeof semiGuildsData !== 'undefined') ? semiGuildsData.find(g => g.code === buildData.semiGuild.code) : null;
        if (semiGuildInfo && semiGuildInfo.races) {
            markdown += `**Dozwolone rasy:** ${formatRacesList(semiGuildInfo.races)}\n`;
        }
        const semiPathInfo = semiGuildInfo && semiGuildInfo.semipaths && buildData.semiPath ? semiGuildInfo.semipaths.find(p => p.name === buildData.semiPath.name) : null;
        if (semiPathInfo) {
            markdown += `**Aktywni gracze:** ${semiPathInfo.activePlayers ?? '-'}\n`;
            if (semiPathInfo.specs && semiPathInfo.specs.length > 0) {
                markdown += `**Specjalne:** ${semiPathInfo.specs.join(', ')}\n`;
            }
        }
        markdown += "\n";
    }

    // Sekcja Wybranych Słów
    if (buildData.words.length > 0) {
        markdown += "## Wybrane Słowa\n";
        markdown += `**Łączny koszt:** ${buildData.totalWordCost}\n\n`;
        buildData.words.forEach(word => {
            markdown += `- **${word.name}** (${word.cost}): ${word.description}\n`;
        });
        markdown += "\n";
    }

    // Sekcja Podsumowania Umiejętności
    if (Object.keys(buildData.finalSkills).length > 0) {
        markdown += "## Podsumowanie Umiejętności\n";
        const sortedSkills = Object.entries(buildData.finalSkills).sort(([, a], [, b]) => b - a); // Sort descending by value
        sortedSkills.forEach(([skill, value]) => {
            markdown += `- ${skill.charAt(0).toUpperCase() + skill.slice(1)}: ${value}\n`;
        });
        markdown += "\n";
    }

    // Trigger download
    downloadFile(markdown, 'podsumowanie_postaci.md', 'text/markdown');
}

// NOWOŚĆ: Eksport do JSON
function exportToJson() {
    const buildData = getCurrentBuildData();
    const jsonString = JSON.stringify(buildData, null, 2); // Pretty print JSON
    downloadFile(jsonString, 'build_postaci.json', 'application/json');
}

function downloadFile(content, filename, contentType) {
    const blob = new Blob([content], {type: contentType});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Koduje obiekt danych bildu do formatu Base64-JSON.
 */
function encodeBuildData(buildData) {
    try {
        const jsonString = JSON.stringify(buildData);
        return btoa(jsonString); // Kodowanie do Base64
    } catch (error) {
        console.error("Błąd podczas kodowania danych bildu:", error);
        return null;
    }
}

/**
 * Dekoduje dane bildu z formatu Base64-JSON.
 */
function decodeBuildData(encodedData) {
    try {
        const jsonString = atob(encodedData); // Dekodowanie z Base64
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Błąd podczas dekodowania lub parsowania danych bildu:", error);
        return null; // Zwróć null w razie błędu
    }
}

/**
 * Stosuje wczytane dane bildu do interfejsu użytkownika.
 * Ważna jest kolejność i wywoływanie eventów/aktualizacji.
 */
async function applyBuildData(buildData) {
    if (!buildData) return;

    // 1. Odznacz wszystkie słowa i usuń podświetlenie
    document.querySelectorAll('#wordsList input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
        const label = checkbox.nextElementSibling;
        if (label && label.tagName === 'LABEL') {
            label.classList.remove('selected-item');
        }
    });

    // 2. Zaznacz wybrane słowa i dodaj podświetlenie
    if (buildData.words && Array.isArray(buildData.words)) {
        buildData.words.forEach(wordValue => {
            const checkbox = document.querySelector(`#wordsList input[value="${wordValue}"]`);
            if (checkbox) {
                checkbox.checked = true;
                const label = checkbox.nextElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.classList.add('selected-item');
                }
            }
        });
    }

    // 3. Ustaw gildię zawodową i poczekaj na załadowanie ścieżek
    const guildSelect = document.getElementById('guildSelect');
    if (buildData.guild && guildSelect.querySelector(`option[value="${buildData.guild}"]`)) {
        guildSelect.value = buildData.guild;
        // Ręcznie wywołaj logikę, która normalnie dzieje się po zmianie gildii
        const selectedGuildData = guildsData.find(g => g.code === buildData.guild);
        updateRacesAllowed(selectedGuildData); // Zaktualizuj rasy od razu
        populatePathSelect(selectedGuildData, false); // Wypełnij ścieżki dla tej gildii

        // Ustaw ścieżkę zawodową (teraz, gdy opcje są dostępne)
        const pathSelect = document.getElementById('pathSelect');
        if (buildData.path && pathSelect.querySelector(`option[value="${buildData.path}"]`)) {
            pathSelect.value = buildData.path;
        } else {
            pathSelect.value = ''; // Jeśli zapisana ścieżka nie istnieje lub jest null
        }
    } else {
        guildSelect.value = ''; // Resetuj, jeśli brak danych lub nieprawidłowe
        populatePathSelect(null, false); // Wyczyść ścieżki
        updateRacesAllowed(null); // Resetuj rasy
    }

    // 4. Ustaw gildię półzawodową i poczekaj na załadowanie ścieżek
    const semiGuildSelect = document.getElementById('semiGuildSelect');
    if (buildData.semiGuild && semiGuildSelect.querySelector(`option[value="${buildData.semiGuild}"]`)) {
        semiGuildSelect.value = buildData.semiGuild;
        // Ręcznie wywołaj logikę, która normalnie dzieje się po zmianie gildii półzawodowej
        const selectedSemiGuildData = semiGuildsData.find(g => g.code === buildData.semiGuild);
        updateRacesAllowed(selectedSemiGuildData); // Zaktualizuj rasy
        populatePathSelect(selectedSemiGuildData, true); // Wypełnij ścieżki

        // Ustaw ścieżkę półzawodową
        const semiPathSelect = document.getElementById('semiPathSelect');
        if (buildData.semiPath && semiPathSelect.querySelector(`option[value="${buildData.semiPath}"]`)) {
            semiPathSelect.value = buildData.semiPath;
        } else {
            semiPathSelect.value = '';
        }
    } else {
        semiGuildSelect.value = '';
        populatePathSelect(null, true);
        // updateRacesAllowed wywołane już przy głównej gildii, może nie trzeba drugi raz
    }

    // 5. Zaktualizuj wszystkie podsumowania i liczniki
    // Ważne: Wywołaj *po* ustawieniu wszystkich wartości
    updateSelectedWordCount();
    updateSkillsSummary();
    updateEffectsSummary();
    updateActivePlayers();
    // updateRacesAllowed zostało wywołane w krokach 3 i 4
}

/**
 * Sprawdza URL przy ładowaniu strony i wczytuje konfigurację, jeśli jest obecna.
 */
function loadBuildFromURL() {
    if (window.location.hash && window.location.hash.length > 1) {
        const encodedData = window.location.hash.substring(1); // Usuń '#'
        const buildData = decodeBuildData(encodedData);

        if (buildData) {
            console.log("Wczytywanie konfiguracji z URL...");
            applyBuildData(buildData).then(() => {
                console.log("Konfiguracja z URL wczytana pomyślnie.");
            }).catch(error => {
                console.error("Błąd podczas stosowania konfiguracji z URL:", error);
            });
        } else {
            console.warn("Nie udało się zdekodować danych z fragmentu URL.");
            // Opcjonalnie: wyczyść hash, jeśli jest nieprawidłowy
            // window.location.hash = '';
        }
    } else {
        console.log("Brak konfiguracji w URL do wczytania.");
    }
}


/**
 * Generuje link udostępniania, wyświetla go w polu input ORAZ kopiuje do schowka.
 */
function generateAndShowShareableLink() {
    const buildData = getCurrentBuildData();
    const encodedData = encodeBuildData(buildData);

    if (encodedData) {
        const baseUrl = window.location.origin + window.location.pathname;
        const shareableLink = baseUrl + '#' + encodedData;

        const linkInput = document.getElementById('shareLinkInput');

        // 1. Wypełnij pole input (nadal przydatne, aby użytkownik widział link)
        if (linkInput) {
            linkInput.value = shareableLink;
        }
        console.log("Wygenerowany link:", shareableLink);

        // 2. Skopiuj link do schowka
        navigator.clipboard.writeText(shareableLink).then(() => {
            // Sukces - poinformuj użytkownika
            // alert("Link do bildu został skopiowany do schowka!");

            // Opcjonalnie: Możesz na chwilę zmienić tekst przycisku
            const button = document.getElementById('generateLinkButton');
            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Skopiowano!';
                button.disabled = true; // Zapobiegaj szybkiemu ponownemu klikaniu
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000); // Zmień z powrotem po 2 sekundach
            }

        }).catch(err => {
            // Błąd - poinformuj użytkownika i zaloguj błąd
            console.error('Nie udało się skopiować linku do schowka: ', err);
            alert("Nie udało się automatycznie skopiować linku. Możesz skopiować go ręcznie z pola powyżej.");

            // W przypadku błędu, upewnij się, że pole input jest widoczne i zaznaczone
            if (linkInput) {
                linkInput.select();
                linkInput.setSelectionRange(0, 99999); // Dla urządzeń mobilnych
            }
        });

        // Opcjonalnie: zaktualizuj hash w bieżącym URL bez przeładowania strony
        // window.location.hash = encodedData;

    } else {
        alert("Wystąpił błąd podczas generowania linku.");
    }
}
