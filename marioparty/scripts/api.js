const API_URL = "https://marioparty-backend.onrender.com";

// Player Routes ----------------------------------------------------------------------------------
export function addPlayer(session_id, name, character) {
    // Report to console the call
    console.log(`Calling: 'POST | ${API_URL}/api/players/${session_id}'`)
    
    // Call the API
    fetch(`${API_URL}/api/players/${session_id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, character })
    })
    .then(res => res.json())
    .catch(err => console.error('Error adding player:', err));
}

export function deletePlayer(player_id) {
    // Report to console the call
    console.log(`Calling: 'DELETE | ${API_URL}/api/players/${player_id}'`)
    
    // Call the API
    fetch(`${API_URL}/api/players/${player_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .catch(err => console.error('Error deleting player:', err));
}

export function updateCoins(player_id, coins) {
    // Report to console the call
    console.log(`Calling: 'PUT | ${API_URL}/api/players/${player_id}/coins'`)
    
    // Call the API
    fetch(`${API_URL}/api/players/${player_id}/coins`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ coins })
    })
    .then(res => res.json())
    .catch(err => console.error('Error updating coins:', err));
}

export function updateStars(player_id, stars) {
    // Report to console the call
    console.log(`Calling: 'PUT | ${API_URL}/api/players/${player_id}/stars'`)
    
    // Call the API
    fetch(`${API_URL}/api/players/${player_id}/stars`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ stars })
    })
    .then(res => res.json())
    .catch(err => console.error('Error updating stars:', err));
}

export async function getAllActivePlayers() {
    // Get Active session_id
    const session = await getActiveSession();
    const session_id = session.result[0].session_id
    setTimeout(1500)

    // Report to console the call
    console.log(`Calling: 'GET | ${API_URL}/api/players/${session_id}'`)

    try {
        // Call the API with await
        const response = await fetch(`${API_URL}/api/players/${session_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        // Log the server error if any
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`${errorMessage}`)
        }
        // Report response
        const activePlayers = await response.json();
        return activePlayers;

    // Catch an error if any
    } catch (err) {
        console.error("Error fetching active players: ", err)
        return null;
    }
}


// Item Routes ------------------------------------------------------------------------------------
export function addItem(session_id, player_id, item_name) {
    // Report to console the call
    console.log(`Calling: 'POST | ${API_URL}/api/items/${session_id}'`)
    
    // Call the API
    fetch(`${API_URL}/api/items/${session_id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ player_id, item_name })
    })
    .then(res => res.json())
    .catch(err => console.error('Error adding item:', err));
}

export function deleteItem(item_id) {
    // Report to console the call
    console.log(`Calling: 'DELETE | ${API_URL}/api/items/${item_id}'`)
    
    // Call the API
    fetch(`${API_URL}/api/items/${item_id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .catch(err => console.error('Error deleting item:', err));
}

export async function getAllActiveItems() {
    // Get Active session_id
    const session = await getActiveSession();
    const session_id = session.result[0].session_id
    setTimeout(1500)

    // Report to console the call
    console.log(`Calling: 'GET | ${API_URL}/api/items/${session_id}'`)

    try {
        // Call the API with await
        const response = await fetch(`${API_URL}/api/items/${session_id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        // Log the server error if any
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`${errorMessage}`)
        }
        // Report response
        const activeItems = await response.json();
        return activeItems;

    // Catch an error if any
    } catch (err) {
        console.error("Error fetching active items: ", err)
        return null;
    }
}

// Session Routes ---------------------------------------------------------------------------------
export function addSession(session_id) {
    // Report to console the call
    console.log(`Calling: 'POST | ${API_URL}/api/sessions'`)
    
    // Call the API
    fetch(`${API_URL}/api/sessions`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ session_id })
    })
    .then(res => res.json())
    .catch(err => console.error('Error adding session:', err));
}

export function deleteSession() {
    // Report to console the call
    console.log(`Calling: 'DELETE | ${API_URL}/api/sessions'`)
    
    // Call the API
    fetch(`${API_URL}/api/sessions`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .catch(err => console.error('Error deleting session:', err));
}

export async function getActiveSession() {
    // Report to console the call
    console.log(`Calling: 'GET | ${API_URL}/api/sessions'`)
    setTimeout(1500)

    try {
        // Call the API with await
        const response = await fetch(`${API_URL}/api/sessions`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        // Log the server error if any
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`${errorMessage}`)
        }
        // Report response
        const activeSession = await response.json();
        return activeSession;

    // Catch an error if any
    } catch (err) {
        console.error("Error fetching active session: ", err)
        return null;
    }
}