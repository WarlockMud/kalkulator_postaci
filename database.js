// Database module for character profiles
const DB_NAME = 'warlockCharacterProfiles';
const DB_VERSION = 1;
const STORE_NAME = 'profiles';

let db = null;
let dbInitialized = false;

// Initialize the database
function initDB() {
    return new Promise((resolve, reject) => {
        if (dbInitialized && db) {
            resolve(db);
            return;
        }

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            console.error('Error opening database');
            reject(request.error);
        };

        request.onsuccess = () => {
            db = request.result;
            dbInitialized = true;
            resolve(db);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        };
    });
}

function updateProfile(id, buildData) {
    return new Promise((resolve, reject) => {
        initDB().then(() => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const profile = store.get(id);
            if(!profile) {
                reject(new Error('Profile not found'));
                return;
            }

            profile.onsuccess = () => {
                const updatedProfile = {
                    ...profile.result,
                    data: buildData,
                    timestamp: new Date().toISOString()
                };
                console.log(updatedProfile);
                const request = store.put(updatedProfile);
                
                request.onsuccess = () => { 
                    resolve(request.result);
                };
                request.onerror = () => {
                    reject(request.error);
                };            
            };
            profile.onerror = () => {
                reject(profile.error);
            };

            
            
        }).catch(reject);;
    });
}
// Save a profile to the database
function saveProfile(profileName, buildData) {
    return new Promise((resolve, reject) => {
        initDB().then(() => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            
            
            const profile = {
                name: profileName,
                data: buildData,
                timestamp: new Date().toISOString()
            };

            const request = store.add(profile);

            request.onsuccess = () => {
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        }).catch(reject);
    });
}

// Load all profiles from the database
function loadAllProfiles() {
    return new Promise((resolve, reject) => {
        initDB().then(() => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.getAll();

            request.onsuccess = () => {                
                console.log(request.result)
                resolve(request.result);
            };

            request.onerror = () => {
                reject(request.error);
            };
        }).catch(reject);
    });
}

// Load a specific profile by ID
function loadProfile(id) {
    return new Promise((resolve, reject) => {
        initDB().then(() => {
            const transaction = db.transaction([STORE_NAME], 'readonly');
            const store = transaction.objectStore(STORE_NAME);
            
            // Ensure id is a number
            const numericId = Number(id);
            if (isNaN(numericId)) {
                reject(new Error('Invalid profile ID'));
                return;
            }

            console.log('Loading profile with ID:', numericId);
            const request = store.get(numericId);
            
            request.onsuccess = () => {
                console.log('Profile load result:', request.result);
                if (!request.result) {
                    reject(new Error('Profile not found'));
                    return;
                }
                resolve(request.result);
            };

            request.onerror = () => {
                console.error('Error loading profile:', request.error);
                reject(request.error);
            };

            // Handle transaction completion
            transaction.oncomplete = () => {
                console.log('Transaction completed');
            };

            transaction.onerror = () => {
                console.error('Transaction error:', transaction.error);
                reject(transaction.error);
            };
        }).catch(error => {
            console.error('Database initialization error:', error);
            reject(error);
        });
    });
}

// Delete a profile by ID
function deleteProfile(id) {
    return new Promise((resolve, reject) => {
        initDB().then(() => {
            const transaction = db.transaction([STORE_NAME], 'readwrite');
            const store = transaction.objectStore(STORE_NAME);
            const request = store.delete(id);

            request.onsuccess = () => {
                resolve();
            };

            request.onerror = () => {
                reject(request.error);
            };
        }).catch(reject);
    });
}

// Initialize the database when the module is loaded
initDB().catch(error => {
    console.error('Failed to initialize database:', error);
}); 