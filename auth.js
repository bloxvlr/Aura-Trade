// ============================================================
// Aura Trade — Auth System (Google + Supabase)
// ============================================================

const SESSION_KEY = 'aura_user';

// Supabase Configuration
const SUPABASE_URL = 'https://yudjbsbtbllnqaxezcjx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZGpic2J0YmxsbnFheGV6Y2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NjMxMjIsImV4cCI6MjA5NDMzOTEyMn0.u97tioJzQHIcMD8uVihJWV0wFA69ay5R2G_M3JBc0JI';

// Initialize Supabase Client
let _supabase = null;
if (typeof supabase !== 'undefined') {
    const { createClient } = supabase;
    _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// --- Decode a Google JWT ---
function parseJwt(token) {
    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    } catch { return null; }
}

// --- Save user session & Update Supabase ---
async function saveSession(payload) {
    let existingProfile = null;
    if (_supabase) {
        try {
            const { data } = await _supabase.from('profiles').select('*').eq('id', payload.sub).single();
            existingProfile = data;
        } catch(e) {}
    }

    const user = {
        id:      payload.sub,
        name:    payload.name,
        pseudo:  existingProfile?.pseudo || payload.name.split(' ')[0] + Math.floor(Math.random() * 1000),
        email:   payload.email,
        picture: payload.picture,
        avatar:  payload.name.charAt(0),
        exp:     payload.exp,
        rating:  existingProfile?.rating || 5.0,
        trades:  existingProfile?.trades || 0
    };
    
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));

    if (_supabase) {
        try {
            await _supabase.from('profiles').upsert({
                id: payload.sub,
                email: payload.email,
                full_name: payload.name,
                avatar_url: payload.picture,
                pseudo: user.pseudo,
                last_seen: new Date().toISOString()
            });
        } catch (e) { console.error('Supabase Profile Sync failed:', e); }
    }
    return user;
}

// --- Get current user ---
function getUser() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const user = JSON.parse(raw);
        if (user.exp && Date.now() / 1000 > user.exp) {
            localStorage.removeItem(SESSION_KEY);
            return null;
        }
        return user;
    } catch { return null; }
}

// --- Auth Controls ---
function logOut() {
    const user = getUser();
    if (typeof google !== 'undefined' && google.accounts) {
        if (user && user.email) {
            google.accounts.id.revoke(user.email, () => {});
        }
        google.accounts.id.disableAutoSelect();
    }
    localStorage.removeItem(SESSION_KEY);
    window.location.href = 'login.html?logout=true';
}

function requireAuth() {
    if (!getUser()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function redirectIfLoggedIn(destination = 'index.html') {
    if (getUser()) { window.location.href = destination; }
}

function initGoogleAuth({ onSuccess, onError } = {}) {
    google.accounts.id.initialize({
        client_id: '688061297329-cdikima6fsre1r4k5id9v7qsatqm0diu.apps.googleusercontent.com',
        locale: 'fr',

        callback: async (response) => {
            const payload = parseJwt(response.credential);
            if (!payload) { onError?.('Token invalide'); return; }
            const user = await saveSession(payload);
            onSuccess?.(user);
        },
        auto_select: false,
    });
}

function renderGoogleButton(containerId, theme = 'outline') {
    const el = document.getElementById(containerId);
    if (!el) return;
    google.accounts.id.renderButton(el, {
        type: 'standard', size: 'large', theme: theme,
        text: 'signin_with', shape: 'pill', width: 300
    });
}

window.AuraAuth = { getUser, logOut, requireAuth, redirectIfLoggedIn, initGoogleAuth, renderGoogleButton, _supabase };
