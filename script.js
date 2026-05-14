// ==================== SVG ICONS (inline reuse) ====================
const icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    heartFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>',
    chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    messageCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    barChart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    trending: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
};

// ==================== AUTH & USER ====================
let currentUser = AuraAuth.getUser() || {
    id: 'guest',
    name: 'Invité',
    pseudo: 'Guest',
    avatar: '?',
    memberSince: '2026',
    rating: 5.0,
    totalAnnounces: 0,
    totalTrades: 0,
    tradeHistory: [],
};

function refreshUserData() {
    const user = AuraAuth.getUser();
    const userActions = document.getElementById('userActions');
    const loginBtn = document.getElementById('loginBtn');
    
    if (user) {
        currentUser = user;
        if (userActions) userActions.style.display = 'flex';
        if (loginBtn) loginBtn.style.display = 'none';
        
        const avatarEl = document.getElementById('headerAvatar');
        if (avatarEl) {
            avatarEl.textContent = currentUser.avatar;
            if (currentUser.picture) {
                avatarEl.style.backgroundImage = `url(${currentUser.picture})`;
                avatarEl.style.backgroundSize = 'cover';
                avatarEl.textContent = '';
            }
        }
    } else {
        if (userActions) userActions.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'block';
    }
}


const games = [
    { id: 'schoolfr', name: 'School Fr RP', icon: '🏫' },
    { id: 'adoptme', name: 'Adopt Me !', icon: '🐾' },
    { id: 'mm2', name: 'Murder Mystery 2', icon: '🔪' },
    { id: 'petsim', name: 'Pet Simulator X', icon: '💎' },
    { id: 'bloxfruits', name: 'Blox Fruits', icon: '🍎' },
    { id: 'brookhaven', name: 'Brookhaven RP', icon: '🏘️' },
];

let announces = [];
let messages = [];

let nextId = 1;
let currentPage = 'home';
let currentDetailId = null;
let currentCreateStep = 1;
let createData = {};
let activeGameFilter = null;


// ==================== NAVIGATION ====================
function navigate(page, param) {
    // Pages requiring authentication
    const authRequired = ['detail', 'create', 'messages', 'profile', 'favorites', 'settings'];
    if (authRequired.includes(page) && !AuraAuth.getUser()) {
        window.location.href = 'login.html';
        return;
    }

    currentPage = page;
    if (page === 'detail') currentDetailId = param;
    if (page === 'create') { currentCreateStep = 1; createData = {}; }
    if (page === 'explore') {
        if (typeof param === 'string' && param.startsWith('search:')) {
            activeSearchQuery = param.replace('search:', '');
            activeGameFilter = null;
        } else if (param) {
            activeGameFilter = param;
            activeSearchQuery = '';
        } else if (currentPage !== 'explore') {
            activeGameFilter = null;
            activeSearchQuery = '';
        }
    }
    renderApp();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



// ==================== RENDER ====================
function renderApp() {
    const container = document.getElementById('appContent');
    const pages = {
        'home': renderHome,
        'detail': () => renderDetail(currentDetailId),
        'create': renderCreate,
        'explore': renderExplore,
        'profile': renderProfile,
        'messages': renderMessages,
        'favorites': renderFavorites,
        'settings': renderSettings,
    };
    container.innerHTML = (pages[currentPage] || renderHome)();
    attachListeners();
    updateBadges();
}


function updateBadges() {
    const unread = messages.filter(m => m.toUserId === currentUser.id && !m.read).length;
    const badge = document.getElementById('msgBadge');
    if (badge) badge.style.display = unread > 0 ? 'block' : 'none';
}

function renderCard(a) {
    const isLiked = (a.likedBy || []).includes(currentUser.id);
    const imageStyle = a.imageUrl ? `background-image:url(${a.imageUrl}); background-size:cover;` : '';
    return `
    <div class="card" onclick="navigate('detail', ${a.id})">
        <div class="card-image ${a.rarityClass}" style="${imageStyle}">
            ${!a.imageUrl ? `<span class="item-emoji">${a.imageEmoji}</span>` : ''}
            <span class="card-rarity rarity-${a.rarityClass}">${a.rarity}</span>
        </div>
        <div class="card-body">
            <div class="card-game">${a.gameName}</div>
            <div class="card-title">${a.title}</div>
            <div class="card-search">Cherche : ${a.searchFor}</div>
            <div class="card-footer">
                <div class="card-stats">
                    <span>${icons.eye} ${a.views || 0}</span>
                    <span>${icons.heart} ${a.likes || 0}</span>
                </div>
                <button class="card-like-btn ${isLiked ? 'liked' : ''}" onclick="event.stopPropagation();toggleLike(${a.id}, this)" title="J'aime">
                    ${isLiked ? icons.heartFilled : icons.heart}
                </button>
            </div>
        </div>
    </div>
`;
}


function renderHome() {
    const featured = [...announces].sort((a, b) => (b.views + b.likes*5) - (a.views + a.likes*5)).slice(0, 5);
    const recent = [...announces].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

    return `
    <div class="container">
        <section class="hero">
            <div class="hero-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Plus de 200 échanges réalisés ce mois
            </div>
            <h1>Le <span class="highlight">bon coin</span> des items Roblox</h1>
            <p>Échangez vos items en toute simplicité. Gratuit, sécurisé, sans argent.</p>
            <div class="hero-search-wrap">
                ${icons.search}
                <input type="text" placeholder="Cherchez un item, un jeu..." id="heroSearchInput">
            </div>
        </section>

        <section class="section">
            <div class="section-header">
                <h2>${icons.trending} Offres à la une</h2>
                <span class="section-link" onclick="navigate('explore')">Tout voir ${icons.chevronRight}</span>
            </div>
            <div class="carousel-wrap">
                <button class="carousel-btn prev" onclick="scrollCarousel('featured', -1)">${icons.chevronLeft}</button>
                <div class="carousel" id="carouselFeatured">
                    ${featured.length > 0 ? featured.map(a => renderCard(a)).join('') : '<p class="empty-msg">Aucune offre à la une pour le moment.</p>'}
                </div>
                <button class="carousel-btn next" onclick="scrollCarousel('featured', 1)">${icons.chevronRight}</button>
            </div>
        </section>

        <section class="section">
            <div class="section-header">
                <h2>${icons.clock} Dernières offres</h2>
                <span class="section-link" onclick="navigate('explore')">Tout voir ${icons.chevronRight}</span>
            </div>
            <div class="grid-3">
                ${recent.length > 0 ? recent.map(a => renderCard(a)).join('') : '<p class="empty-msg" style="grid-column: 1 / -1;">Aucune annonce publiée récemment.</p>'}
            </div>
        </section>

    </div>
`;
}

function renderDetail(id) {
    const a = announces.find(ann => ann.id === id);
    if (!a) return '<div class="container"><p style="color:var(--white-50);padding:60px 0;text-align:center;">Annonce introuvable.</p></div>';
    
    // Increment views in Supabase
    if (AuraAuth._supabase) {
        AuraAuth._supabase.rpc('increment_views', { announce_id: a.id });
    }
    a.views = (a.views || 0) + 1;

    
    const isLiked = (a.likedBy || []).includes(currentUser.id);
    const similar = announces.filter(ann => ann.id !== a.id && ann.gameId === a.gameId).slice(0, 4);
    
    return `
    <div class="container">
        <a class="back-link" onclick="navigate('explore')">
            <span class="icon-wrap-sm">${icons.arrowLeft}</span>
            Retour aux annonces
        </a>
        
        <div class="detail-layout">
            <div class="detail-main">
                <div class="detail-hero-card">
                    <div class="detail-image-lg ${a.rarityClass}">
                        <span class="item-emoji-lg">${a.imageEmoji}</span>
                        <div class="detail-rarity-badge rarity-${a.rarityClass}">${a.rarity}</div>
                    </div>
                    
                    <div class="detail-header-info">
                        <div class="detail-game-label">${a.gameName}</div>
                        <h1 class="detail-title-lg">${a.title}</h1>
                        <div class="detail-meta-row">
                            <span class="meta-item"><span class="icon-inline">${icons.clock}</span> Publié le ${a.date}</span>
                            <span class="meta-item"><span class="icon-inline">${icons.eye}</span> ${a.views} vues</span>
                        </div>
                    </div>
                </div>

                <div class="detail-content-section">
                    <h3 class="section-title">Description</h3>
                    <p class="detail-description-text">${a.description || 'Aucune description fournie.'}</p>
                </div>

                <div class="detail-content-section highlight-box">
                    <div class="search-for-header">
                        <span class="icon-wrap-md">${icons.search}</span>
                        <h3 class="section-title">Ce que je recherche</h3>
                    </div>
                    <p class="search-for-text">${a.searchFor}</p>
                </div>

                <div class="detail-tags">
                    <span class="tag">${a.gameName}</span>
                    <span class="tag">${a.rarity}</span>
                </div>
            </div>

            <div class="detail-sidebar">
                <div class="sidebar-card seller-card">
                    <div class="seller-header">
                        <div class="avatar-md">${a.sellerAvatar}</div>
                        <div class="seller-meta">
                            <div class="seller-name">${a.sellerName}</div>
                            <div class="seller-rating">
                                ${icons.star} <span>${a.sellerRating || '5.0'}</span>
                                <span class="dot">·</span>
                                <span>${a.sellerTrades || 0} échanges</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sidebar-actions">
                        <button class="btn btn-primary btn-block btn-lg" onclick="openContactModal(${a.id})">
                            <span class="icon-inline">${icons.messageCircle}</span> Proposer un échange
                        </button>
                        <button class="btn btn-secondary btn-block" onclick="toggleLike(${a.id})">
                            <span class="icon-inline">${isLiked ? icons.heartFilled : icons.heart}</span> 
                            ${isLiked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                        </button>
                    </div>
                </div>

                <div class="sidebar-card stats-card">
                    <h4 class="sidebar-title">Informations complémentaires</h4>
                    <div class="sidebar-stats-list">
                        <div class="stat-row">
                            <span class="stat-label">Identifiant</span>
                            <span class="stat-value">#${a.id}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Popularité</span>
                            <span class="stat-value"><span class="icon-inline" style="color:var(--danger)">${icons.heart}</span> ${a.likes || 0}</span>
                        </div>
                        <div class="stat-row">
                            <span class="stat-label">Statut</span>
                            <span class="stat-value status-online">Disponible</span>
                        </div>
                    </div>
                    <button class="btn btn-ghost btn-block mt-4" onclick="shareAnnounce(${a.id})">
                        <span class="icon-inline">${icons.share}</span> Partager l'annonce
                    </button>
                </div>

                <div class="sidebar-card safety-tip-card">
                    <div class="safety-header">
                        <span class="icon-wrap-sm" style="color:var(--success)">${icons.shield}</span>
                        <span>Conseil de sécurité</span>
                    </div>
                    <p class="safety-text">Réalisez toujours vos échanges directement dans le jeu Roblox. Ne partagez jamais vos identifiants.</p>
                </div>
            </div>
        </div>

        ${similar.length > 0 ? `
        <section class="section" style="margin-top:60px;">
            <div class="section-header">
                <h2>${icons.plus} Annonces similaires</h2>
            </div>
            <div class="carousel-wrap">
                <button class="carousel-btn prev" onclick="scrollCarousel('similar', -1)">${icons.chevronLeft}</button>
                <div class="carousel" id="carouselSimilar">${similar.map(a => renderCard(a)).join('')}</div>
                <button class="carousel-btn next" onclick="scrollCarousel('similar', 1)">${icons.chevronRight}</button>
            </div>
        </section>` : ''}
    </div>
    `;
}


function renderCreate() {
    const steps = ['Le jeu', 'Ce que je possède', 'Ce que je recherche', 'Récapitulatif'];
    return `
    <div class="container" style="max-width:600px;">
        <h2 style="font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:4px;">📝 Publier une annonce</h2>
        <p style="color:var(--white-50);margin-bottom:20px;">Étape ${currentCreateStep}/4 · ${steps[currentCreateStep-1]}</p>
        <div class="stepper">
            ${steps.map((_, i) => `<div class="step-dot ${i+1 < currentCreateStep ? 'done' : ''} ${i+1 === currentCreateStep ? 'active' : ''}"></div>`).join('')}
        </div>
        ${renderCreateStep()}
    </div>
`;
}

function renderCreateStep() {
    if (currentCreateStep === 1) {
        return `
        <div class="form-group"><label>Jeu Roblox *</label>
            <select id="createGame">
                <option value="">Sélectionnez un jeu...</option>
                ${games.map(g => `<option value="${g.id}" ${createData.gameId===g.id?'selected':''}>${g.icon} ${g.name}</option>`).join('')}
                <option value="other">✨ Autre (précisez)</option>
            </select>
        </div>
        <div class="form-group hidden" id="otherGameGroup">
            <label>Nom du jeu</label>
            <input type="text" id="createOtherGame" placeholder="Ex: Mon Jeu RP..." value="${createData.otherGame||''}">
        </div>
        <button class="btn btn-primary" onclick="nextStep()">Continuer ${icons.arrowRight}</button>
    `;
    } else if (currentCreateStep === 2) {
        return `
        <div class="form-group"><label>Nom de l'item que tu possèdes *</label>
            <input type="text" id="createTitle" placeholder="Ex: Aura Légendaire du Dragon" value="${createData.title||''}">
        </div>
        <div class="form-group"><label>Rareté</label>
            <select id="createRarity">
                <option value="Commun" ${createData.rarity==='Commun'?'selected':''}>Commun</option>
                <option value="Rare" ${createData.rarity==='Rare'?'selected':''}>Rare</option>
                <option value="Ultra-Rare" ${createData.rarity==='Ultra-Rare'?'selected':''}>Ultra-Rare</option>
                <option value="Légendaire" ${createData.rarity==='Légendaire'?'selected':''}>Légendaire</option>
                <option value="Mythique" ${createData.rarity==='Mythique'?'selected':''}>Mythique</option>
            </select>
        </div>
        <div class="form-group"><label>Description</label>
            <textarea id="createDescription" rows="3" placeholder="Décris ton item (effets, particularités, état...)">${createData.description||''}</textarea>
        </div>
        <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="prevStep()">${icons.arrowLeft} Retour</button>
            <button class="btn btn-primary" onclick="nextStep()">Continuer ${icons.arrowRight}</button>
        </div>
    `;
    } else if (currentCreateStep === 3) {
        return `
        <div class="form-group"><label>Ce que tu recherches en échange *</label>
            <textarea id="createSearchFor" rows="3" placeholder="Décris ce que tu veux recevoir en échange...">${createData.searchFor||''}</textarea>
        </div>
        <div class="form-group"><label>Lien d'une capture d'écran (optionnel)</label>
            <input type="text" id="createImageUrl" placeholder="https://..." value="${createData.imageUrl||''}">
            <p style="font-size:0.7rem;color:var(--white-30);margin-top:4px;">Colle le lien d'une image (Imgur, Discord, etc.) pour illustrer ton offre.</p>
        </div>
        <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="prevStep()">${icons.arrowLeft} Retour</button>
            <button class="btn btn-primary" onclick="nextStep()">Continuer ${icons.arrowRight}</button>
        </div>

    `;
    } else {
        const gameName = createData.otherGame || games.find(g => g.id === createData.gameId)?.name || createData.gameId;
        const rcMap = { 'Commun': 'common', 'Rare': 'rare', 'Ultra-Rare': 'ultra-rare', 'Légendaire': 'legendary', 'Mythique': 'legendary' };
        const rc = rcMap[createData.rarity] || 'common';
        return `
        <div style="background:var(--bg-card);border:1px solid var(--border-light);border-radius:var(--radius-xl);padding:22px;margin-bottom:16px;">
            <div class="card-image ${rc}" style="height:110px;border-radius:var(--radius-lg);margin-bottom:14px;">
                <span class="item-emoji">📦</span>
                <span class="card-rarity rarity-${rc}">${createData.rarity}</span>
            </div>
            <h3 style="color:var(--white);">${createData.title}</h3>
            <p style="color:var(--white-50);">${gameName} · ${createData.rarity}</p>
            <p style="color:var(--white-70);margin-top:8px;">${createData.description || 'Aucune description'}</p>
            <div style="background:var(--bg-tertiary);padding:12px 14px;border-radius:var(--radius-md);margin-top:12px;border:1px solid var(--border-light);">
                <strong style="color:var(--white);">🔍 Recherche :</strong>
                <span style="color:var(--white-70);">${createData.searchFor}</span>
            </div>
        </div>
        <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="prevStep()">${icons.arrowLeft} Retour</button>
            <button class="btn btn-primary" onclick="publishAnnounce()">${icons.check} Publier l'annonce</button>
        </div>
    `;
    }
}

function nextStep() {
    if (currentCreateStep === 1) {
        const gameId = document.getElementById('createGame')?.value;
        const otherGame = document.getElementById('createOtherGame')?.value;
        if (!gameId) return showToast('⚠️ Sélectionne un jeu');
        if (gameId === 'other' && !otherGame) return showToast('⚠️ Entre le nom du jeu');
        createData.gameId = gameId;
        createData.otherGame = otherGame || null;
    } else if (currentCreateStep === 2) {
        const title = document.getElementById('createTitle')?.value;
        if (!title || !title.trim()) return showToast('⚠️ Entre le nom de ton item');
        createData.title = title.trim();
        createData.rarity = document.getElementById('createRarity')?.value || 'Commun';
        createData.description = document.getElementById('createDescription')?.value || '';
    } else if (currentCreateStep === 3) {
        const sf = document.getElementById('createSearchFor')?.value;
        if (!sf || !sf.trim()) return showToast('⚠️ Décris ce que tu recherches');
        createData.searchFor = sf.trim();
        createData.imageUrl = document.getElementById('createImageUrl')?.value.trim();
    }

    if (currentCreateStep < 4) { currentCreateStep++; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

function prevStep() {
    if (currentCreateStep > 1) { currentCreateStep--; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

async function publishAnnounce() {
    const gameName = createData.otherGame || games.find(g => g.id === createData.gameId)?.name || createData.gameId;
    const rcMap = { 'Commun': 'common', 'Rare': 'rare', 'Ultra-Rare': 'ultra-rare', 'Légendaire': 'legendary', 'Mythique': 'legendary' };
    const emojiMap = { 'Commun': '⚪', 'Rare': '💙', 'Ultra-Rare': '💜', 'Légendaire': '⭐', 'Mythique': '🌟' };
    
    const newAnnounce = {
        gameId: createData.gameId,
        gameName: gameName,
        title: createData.title,
        rarity: createData.rarity || 'Commun',
        rarityClass: rcMap[createData.rarity] || 'common',
        imageEmoji: emojiMap[createData.rarity] || '📦',
        imageUrl: createData.imageUrl || null,
        description: createData.description || '',
        searchFor: createData.searchFor,
        sellerId: currentUser.id,
        sellerName: currentUser.pseudo,
        sellerAvatar: currentUser.avatar,
        sellerRating: currentUser.rating,
        sellerTrades: currentUser.trades || 0,
        views: 0,
        likes: 0,
        likedBy: [],
        date: new Date().toISOString().split('T')[0],
    };


    if (AuraAuth._supabase) {
        try {
            const { data, error } = await AuraAuth._supabase.from('announces').insert([newAnnounce]).select();
            if (error) throw error;
            announces.unshift(data[0]);
        } catch (e) {
            console.error('Supabase save failed:', e);
            newAnnounce.id = Date.now();
            announces.unshift(newAnnounce);
        }
    } else {
        newAnnounce.id = Date.now();
        announces.unshift(newAnnounce);
    }

    showToast('✅ Annonce publiée avec succès !');
    navigate('home');
}


function renderExplore() {
    let filtered = announces;
    if (activeGameFilter) filtered = filtered.filter(a => a.gameId === activeGameFilter);
    if (activeSearchQuery) {
        const q = activeSearchQuery.toLowerCase();
        filtered = filtered.filter(a => a.title.toLowerCase().includes(q) || a.gameName.toLowerCase().includes(q) || a.description.toLowerCase().includes(q));
    }
    const gameName = activeGameFilter ? games.find(g => g.id === activeGameFilter)?.name : (activeSearchQuery ? `Résultats pour "${activeSearchQuery}"` : 'Tous les jeux');
    return `
    <div class="container">
        <div style="display:flex;gap:24px;align-items:flex-start;">
            <div class="explore-sidebar">
                <div class="filter-card">
                    <h3 class="filter-title">Catégories</h3>
                    <div class="filter-list">
                        <span class="filter-item ${!activeGameFilter && !activeSearchQuery ? 'active' : ''}" onclick="activeGameFilter=null;activeSearchQuery='';navigate('explore')">🌟 Tous les jeux</span>
                        ${games.map(g => `
                            <span class="filter-item ${activeGameFilter===g.id ? 'active' : ''}" onclick="navigate('explore', '${g.id}')">${g.icon} ${g.name}</span>
                        `).join('')}
                    </div>
                    <button class="btn btn-secondary btn-sm btn-block mt-4" onclick="activeGameFilter=null;activeSearchQuery='';navigate('explore')">Effacer</button>
                </div>
            </div>
            <div style="flex:1;">
                <h2 style="font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:6px;">🔍 ${gameName}</h2>
                <p style="color:var(--white-50);margin-bottom:20px;">${filtered.length} annonce${filtered.length>1?'s':''} trouvée${filtered.length>1?'s':''}</p>
                <div class="grid-3">${filtered.map(a => renderCard(a)).join('')}</div>
                ${filtered.length===0 ? '<p class="empty-msg">Aucune annonce trouvée pour votre recherche.</p>' : ''}
            </div>
        </div>
    </div>
`;
}

function renderFavorites() {
    const favs = announces.filter(a => (a.likedBy || []).includes(currentUser.id));
    return `
    <div class="container">
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--white);margin-bottom:20px;">❤️ Mes favoris</h2>
        ${favs.length > 0 ? `<div class="grid-3">${favs.map(a => renderCard(a)).join('')}</div>` : '<p class="empty-msg">Vous n\'avez pas encore d\'annonces en favoris.</p>'}
    </div>
`;
}

function renderSettings() {
    return `
    <div class="container" style="max-width:600px;">
        <h2 style="font-size:1.6rem;font-weight:800;color:var(--white);margin-bottom:24px;">⚙️ Paramètres</h2>
        
        <div class="sidebar-card">
            <h3 class="section-title">Profil</h3>
            <div class="form-group">
                <label>Nom d'utilisateur (Pseudo)</label>
                <input type="text" id="settingsPseudo" value="${currentUser.pseudo}" placeholder="Ton pseudo Roblox...">
            </div>
            <button class="btn btn-primary" onclick="updateProfile()">Enregistrer les modifications</button>
        </div>

        <div class="sidebar-card mt-4">
            <h3 class="section-title">Sécurité & Compte</h3>
            <p style="color:var(--white-50);font-size:0.9rem;margin-bottom:16px;">
                Connecté avec : <strong style="color:var(--white);">${currentUser.email || 'Google Account'}</strong>
            </p>
            <div style="display:flex;flex-direction:column;gap:10px;">
                <button class="btn btn-secondary btn-block" onclick="AuraAuth.logOut()">
                    Se déconnecter
                </button>
                <button class="btn btn-ghost btn-block" style="color:var(--danger);border:1px solid rgba(255, 69, 58, 0.2);" onclick="confirmDeleteAccount()">
                    Supprimer mon compte Aura Trade
                </button>
            </div>
        </div>

        <div class="sidebar-card mt-4" style="background:rgba(255, 255, 255, 0.02);border-style:dashed;">
            <h3 class="section-title" style="font-size:0.9rem;">Besoin d'aide ?</h3>
            <p style="font-size:0.8rem;color:var(--white-30);">Si vous rencontrez un problème technique ou souhaitez signaler un bug, contactez le support Aura Trade.</p>
        </div>
    </div>
`;
}

async function confirmDeleteAccount() {
    if (confirm("⚠️ Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible et supprimera votre profil ainsi que toutes vos annonces.")) {
        if (AuraAuth._supabase) {
            try {
                // Delete profile from DB (announces will cascade if foreign key is set to cascade)
                const { error } = await AuraAuth._supabase.from('profiles').delete().eq('id', currentUser.id);
                if (error) throw error;
                
                showToast('👋 Compte supprimé avec succès.');
                AuraAuth.logOut();
            } catch (e) {
                console.error(e);
                showToast('❌ Erreur lors de la suppression.');
            }
        } else {
            AuraAuth.logOut();
        }
    }
}


async function updateProfile() {
    const newPseudo = document.getElementById('settingsPseudo')?.value.trim();
    if (!newPseudo) return showToast('⚠️ Le pseudo ne peut pas être vide');
    
    currentUser.pseudo = newPseudo;
    if (AuraAuth._supabase) {
        try {
            const { error } = await AuraAuth._supabase.from('profiles').update({ pseudo: newPseudo }).eq('id', currentUser.id);
            if (error) throw error;
            showToast('✅ Profil mis à jour !');
            refreshUserData();
            renderApp();
        } catch (e) { console.error(e); showToast('❌ Erreur lors de la mise à jour'); }
    } else {
        showToast('✅ Profil mis à jour !');
        refreshUserData();
        renderApp();
    }
}


function renderProfile() {
    const myAnnounces = announces.filter(a => a.sellerId === currentUser.id);
    return `
    <div class="container" style="max-width:800px;">
        <div class="profile-header-card">
            <div class="avatar-lg" style="margin:0 auto 14px;">${currentUser.avatar}</div>
            <h2 style="font-weight:800;color:var(--white);">${currentUser.pseudo}</h2>
            <p style="color:var(--white-50);">${currentUser.name} · Membre depuis ${currentUser.memberSince}</p>
            <div class="profile-stats-row">
                <div class="profile-stat"><div class="val">${myAnnounces.length}</div><div class="lbl">Annonces</div></div>
                <div class="profile-stat"><div class="val">${currentUser.trades || 0}</div><div class="lbl">Échanges</div></div>
                <div class="profile-stat"><div class="val">⭐ ${currentUser.rating || 5.0}</div><div class="lbl">Note</div></div>
            </div>
            <button class="btn btn-secondary mt-4" onclick="navigate('settings')">⚙️ Paramètres</button>
        </div>


        <div style="display:flex;gap:4px;margin-bottom:20px;border-bottom:1px solid var(--border);">
            <button class="btn btn-ghost" style="border-bottom:2px solid var(--orange);border-radius:0;color:var(--white);">Mes annonces</button>
            <button class="btn btn-ghost" style="border-radius:0;" onclick="document.getElementById('tradeHistorySection').scrollIntoView({behavior:'smooth'})">Historique d'échanges</button>
        </div>
        <div class="grid-3">${myAnnounces.map(a => renderCard(a)).join('')}</div>
        ${myAnnounces.length===0 ? '<p style="text-align:center;color:var(--white-50);padding:40px 0;">Aucune annonce publiée.</p>' : ''}
        <div id="tradeHistorySection" style="margin-top:40px;">
            <div class="section-header"><h2>${icons.barChart} Historique d'échanges</h2></div>
            ${currentUser.tradeHistory.map(t => `
                <div class="trade-history-item">
                    <div class="avatar-sm">${t.with[0]}</div>
                    <div style="flex:1;">
                        <strong style="color:var(--white);">${t.with}</strong>
                        <div style="font-size:0.8rem;color:var(--white-50);">${t.given} ↔️ ${t.received}</div>
                    </div>
                    <span class="trade-arrow">↔️</span>
                    <div style="text-align:right;">
                        <div style="color:var(--legendary);">${'⭐'.repeat(t.rating)}</div>
                        <div style="font-size:0.72rem;color:var(--white-30);">${t.date}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;
}

function renderMessages() {
    messages.forEach(m => { if (m.toUserId === currentUser.id) m.read = true; });
    const conversations = {};
    messages.forEach(m => {
        const otherId = m.fromUserId === currentUser.id ? m.toUserId : m.fromUserId;
        if (!conversations[otherId]) conversations[otherId] = [];
        conversations[otherId].push(m);
    });
    const usersMap = { 'user2': { name: 'EmmaDubois', avatar: 'E' }, 'user3': { name: 'TheoGamer', avatar: 'T' }, 'user4': { name: 'SarahPets', avatar: 'S' }, 'user5': { name: 'KnifeKing', avatar: 'K' } };
    return `
    <div class="container" style="max-width:700px;">
        <h2 style="font-size:1.4rem;font-weight:800;color:var(--white);margin-bottom:20px;">💬 Messages</h2>
        ${Object.keys(conversations).length === 0 ? '<p style="text-align:center;color:var(--white-50);padding:60px 0;">Aucun message.</p>' :
        Object.keys(conversations).map(otherId => {
            const conv = conversations[otherId].sort((a,b)=>new Date(b.date)-new Date(a.date));
            const last = conv[0];
            const u = usersMap[otherId] || {name:'Utilisateur',avatar:'?'};
            const hasUnread = conv.some(m=>m.toUserId===currentUser.id&&!m.read);
            const announce = announces.find(a=>a.id===conv[0].announceId);
            return `
            <div class="msg-preview ${hasUnread?'unread':''}" onclick="openChat('${otherId}')">
                <div class="avatar-sm">${u.avatar}</div>
                <div style="flex:1;">
                    <strong style="color:var(--white);">${u.name}</strong>
                    <p style="font-size:0.78rem;color:var(--white-50);">${announce ? 'Re: '+announce.title : 'Conversation'}</p>
                    <p style="font-size:0.75rem;color:var(--white-30);">${last.content.substring(0,55)}...</p>
                </div>
                ${hasUnread ? '<span style="width:8px;height:8px;background:var(--orange);border-radius:50%;flex-shrink:0;"></span>' : ''}
            </div>`;
        }).join('')}
    </div>
`;
}

// ==================== MODALS ====================
function openContactModal(announceId) {
    const a = announces.find(ann => ann.id === announceId);
    if (!a) return;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'activeModal';
    overlay.innerHTML = `
    <div class="modal">
        <h3>💬 Contacter ${a.sellerName}</h3>
        <p class="subtitle">Annonce : <strong style="color:var(--white);">${a.title}</strong><br>Recherche : ${a.searchFor}</p>
        <div class="form-group">
            <label>Ton message</label>
            <textarea id="contactMsg" placeholder="Explique ce que tu proposes en échange..."></textarea>
        </div>
        <div class="modal-actions">
            <button class="btn btn-secondary" onclick="closeModal()">Annuler</button>
            <button class="btn btn-primary" onclick="sendContactMsg(${announceId})">${icons.send} Envoyer</button>
        </div>
    </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

async function sendContactMsg(announceId) {
    const content = document.getElementById('contactMsg')?.value.trim();
    if (!content) return showToast('⚠️ Écris un message');
    const a = announces.find(ann => ann.id === announceId);
    if (!a) return;
    
    const newMsg = {
        announceId,
        fromUserId: currentUser.id,
        toUserId: a.sellerId,
        content,
        date: new Date().toISOString(),
        read: false
    };

    if (AuraAuth._supabase) {
        try {
            const { data, error } = await AuraAuth._supabase.from('messages').insert([newMsg]).select();
            if (error) throw error;
            messages.push(data[0]);
        } catch (e) {
            console.error('Send message failed:', e);
            messages.push(newMsg);
        }
    } else {
        messages.push(newMsg);
    }

    closeModal();
    showToast('✅ Message envoyé à ' + a.sellerName);
    updateBadges();
}


function openChat(otherId) {
    const conv = messages.filter(m =>
        (m.fromUserId === currentUser.id && m.toUserId === otherId) ||
        (m.toUserId === currentUser.id && m.fromUserId === otherId)
    ).sort((a, b) => new Date(a.date) - new Date(b.date));
    const usersMap = { 'user2': { name: 'EmmaDubois', avatar: 'E' }, 'user3': { name: 'TheoGamer', avatar: 'T' }, 'user4': { name: 'SarahPets', avatar: 'S' }, 'user5': { name: 'KnifeKing', avatar: 'K' } };
    const u = usersMap[otherId] || { name: 'Utilisateur', avatar: '?' };
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'activeModal';
    overlay.innerHTML = `
    <div class="modal" style="max-width:540px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <div class="avatar-sm">${u.avatar}</div>
            <strong style="color:var(--white);">${u.name}</strong>
        </div>
        <div class="msg-thread" id="chatThread">
            ${conv.map(m => `
                <div class="msg-bubble ${m.fromUserId===currentUser.id?'sent':'received'}">
                    ${m.content}
                    <div class="time">${new Date(m.date).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}</div>
                </div>
            `).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:14px;">
            <input type="text" id="chatInput" placeholder="Écris ton message..." style="flex:1;padding:11px 14px;background:var(--bg-input);border:1.5px solid var(--border);border-radius:var(--radius-full);color:var(--white);font-family:'Inter',sans-serif;outline:none;">
            <button class="btn btn-primary" onclick="sendChatMsg('${otherId}')">${icons.send}</button>
        </div>
    </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    setTimeout(() => { const t = document.getElementById('chatThread'); if (t) t.scrollTop = t.scrollHeight; }, 150);
}

async function sendChatMsg(otherId) {
    const input = document.getElementById('chatInput');
    const content = input?.value.trim();
    if (!content) return;
    const refMsg = messages.find(m =>
        (m.fromUserId === currentUser.id && m.toUserId === otherId) ||
        (m.toUserId === currentUser.id && m.fromUserId === otherId)
    );
    
    const newMsg = {
        announceId: refMsg?.announceId || 1,
        fromUserId: currentUser.id,
        toUserId: otherId,
        content,
        date: new Date().toISOString(),
        read: false
    };

    if (AuraAuth._supabase) {
        try {
            const { data, error } = await AuraAuth._supabase.from('messages').insert([newMsg]).select();
            if (error) throw error;
            messages.push(data[0]);
            closeModal();
            openChat(otherId);
        } catch (e) {
            console.error('Chat send failed:', e);
            messages.push(newMsg);
            closeModal();
            openChat(otherId);
        }
    } else {
        messages.push(newMsg);
        closeModal();
        openChat(otherId);
    }
}


function closeModal() {
    const m = document.getElementById('activeModal');
    if (m) m.remove();
}

// ==================== ACTIONS ====================
async function toggleLike(announceId, btnEl) {
    if (!AuraAuth.getUser()) {
        window.location.href = 'login.html';
        return;
    }
    const a = announces.find(ann => ann.id === announceId);
    if (!a) return;

    const idx = (a.likedBy || []).indexOf(currentUser.id);
    if (idx > -1) { 
        a.likedBy.splice(idx, 1); 
        a.likes = Math.max(0, a.likes - 1); 
    } else { 
        if (!a.likedBy) a.likedBy = [];
        a.likedBy.push(currentUser.id); 
        a.likes++; 
    }

    if (AuraAuth._supabase) {
        AuraAuth._supabase.from('announces').update({ likes: a.likes, likedBy: a.likedBy }).eq('id', a.id).then();
    }

    if (btnEl) { btnEl.classList.add('just-liked'); setTimeout(() => btnEl.classList.remove('just-liked'), 400); }
    renderApp();
}

function openPseudoSetupModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'activeModal';
    overlay.innerHTML = `
    <div class="modal">
        <h3>✨ Bienvenue sur Aura Trade !</h3>
        <p class="subtitle">Pour commencer, choisis ton pseudo de trader Roblox.</p>
        <div class="form-group">
            <label>Ton Pseudo</label>
            <input type="text" id="setupPseudo" placeholder="Ex: MasterTrader_99">
        </div>
        <div class="modal-actions">
            <button class="btn btn-primary btn-block" onclick="saveInitialPseudo()">Commencer l'aventure</button>
        </div>
    </div>`;
    document.body.appendChild(overlay);
}

async function saveInitialPseudo() {
    const p = document.getElementById('setupPseudo')?.value.trim();
    if (!p) return showToast('⚠️ Entre un pseudo !');
    
    currentUser.pseudo = p;
    if (AuraAuth._supabase) {
        await AuraAuth._supabase.from('profiles').update({ pseudo: p }).eq('id', currentUser.id);
    }
    closeModal();
    showToast('🚀 C\'est parti, ' + p + ' !');
    refreshUserData();
    renderApp();
}



function shareAnnounce(id) {
    const url = window.location.origin + window.location.pathname + '?page=detail&id=' + id;
    if (navigator.clipboard) { navigator.clipboard.writeText(url).then(() => showToast('📋 Lien copié !')); } else showToast('📋 Lien: ' + url);
}

function scrollCarousel(name, dir) {
    const el = document.getElementById(name === 'featured' ? 'carouselFeatured' : 'carouselSimilar');
    if (el) el.scrollBy({ left: dir * 290, behavior: 'smooth' });
}

function showToast(msg) {
    const container = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    container.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(120%)'; t.style.transition = '0.3s ease'; setTimeout(() => t.remove(), 350); }, 2600);
}

// ==================== LISTENERS ====================
function attachListeners() {
    document.getElementById('heroSearchInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') { navigate('explore', 'search:' + this.value); }
    });
    document.getElementById('headerSearchInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') { navigate('explore', 'search:' + this.value); }
    });

    const cg = document.getElementById('createGame');
    if (cg) {
        cg.addEventListener('change', function() {
            const og = document.getElementById('otherGameGroup');
            if (og) og.classList.toggle('hidden', this.value !== 'other');
        });
        if (cg.value === 'other') document.getElementById('otherGameGroup')?.classList.remove('hidden');
    }
}

// ==================== DATABASE ====================
async function fetchAnnounces() {
    if (!AuraAuth._supabase) return;
    try {
        const { data, error } = await AuraAuth._supabase.from('announces').select('*').order('date', { ascending: false });
        if (error) throw error;
        announces = data || [];
        renderApp();
    } catch (e) { console.error('Fetch failed:', e); }
}

async function fetchMessages() {
    if (!AuraAuth._supabase || !currentUser.id) return;
    try {
        const { data, error } = await AuraAuth._supabase.from('messages')
            .select('*')
            .or(`fromUserId.eq.${currentUser.id},toUserId.eq.${currentUser.id}`)
            .order('date', { ascending: false });
        if (error) throw error;
        messages = data || [];
        updateBadges();
    } catch (e) { console.error('Fetch messages failed:', e); }
}

// ==================== INIT ====================
async function init() {
    refreshUserData();
    await fetchAnnounces();
    await fetchMessages();
    
    // Check if user needs to set a pseudo
    if (currentUser.id !== 'guest' && (!currentUser.pseudo || currentUser.pseudo.startsWith('User_'))) {
        openPseudoSetupModal();
    }
    
    const params = new URLSearchParams(window.location.search);



    const page = params.get('page');
    const id = params.get('id');
    if (page === 'detail' && id) navigate('detail', parseInt(id));
    else if (page === 'explore') navigate('explore');
    else navigate('home');
}
init();
console.log('%c⚡ Aura Trade %cPrototype Pro %cChargé', 'color:#FF6B2B;font-size:1.4em;font-weight:900;', 'color:#fff;font-size:1em;', 'color:#aaa;');
