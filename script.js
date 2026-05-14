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
        if (currentUser.email === 'the.furtive.guys@gmail.com') currentUser.is_premium = true;
        if (userActions) userActions.style.display = 'flex';
        if (loginBtn) loginBtn.style.display = 'none';
        
        if (AuraAuth._supabase && currentUser.id !== 'guest') {
            AuraAuth._supabase.from('profiles').upsert({
                id: currentUser.id,
                email: currentUser.email,
                pseudo: currentUser.pseudo,
                last_seen: new Date().toISOString()
            }, { onConflict: 'id' }).then();
        }

        const avatarEl = document.getElementById('headerAvatar');
        if (avatarEl) {
            avatarEl.textContent = currentUser.avatar;
            if (currentUser.picture) {
                avatarEl.style.backgroundImage = `url(${currentUser.picture})`;
                avatarEl.style.backgroundSize = 'cover';
                avatarEl.textContent = '';
            }
        }
        
        // Update Premium Button
        const premiumBtn = document.querySelector('.premium-header-btn');
        if (premiumBtn) {
            if (currentUser.is_premium) {
                premiumBtn.innerHTML = '⚙️ Config Premium';
                premiumBtn.onclick = () => navigate('config_premium');
            } else {
                premiumBtn.innerHTML = '⭐ Premium';
                premiumBtn.onclick = () => navigate('premium');
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
    const authRequired = ['detail', 'create', 'messages', 'profile', 'favorites', 'settings', 'admin', 'config_premium'];
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
        'admin': renderAdmin,
        'premium': renderPremium,
        'config_premium': renderConfigPremium,
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
    const premiumClass = a.sellerPremium ? 'premium-card' : '';
    const pseudoClass = a.sellerPremium ? `animated-pseudo ${a.sellerPremiumStyle || 'anim-gold'}` : '';
    const badge = a.sellerPremium ? `<span class="premium-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg></span>` : '';
    
    return `

    <div class="card ${premiumClass}" onclick="navigate('detail', ${a.id})">
        <div class="card-image ${a.rarityClass}" style="${imageStyle}">
            ${!a.imageUrl ? `<span class="item-emoji">${a.imageEmoji}</span>` : ''}
            <span class="card-rarity rarity-${a.rarityClass}">${a.rarity}</span>
        </div>
        <div class="card-body">
            <div class="card-game">${a.gameName}</div>
            <div class="card-title">${a.title}</div>
            <div class="card-search">Cherche : ${a.searchFor}</div>
            <div style="font-size:0.8rem;color:var(--white-50);margin-top:8px;display:flex;align-items:center;gap:6px;">
                <div class="avatar-sm" style="width:20px;height:20px;font-size:0.7rem;${a.sellerPicture ? `background-image:url(${a.sellerPicture});background-size:cover;color:transparent;` : ''}">${a.sellerPicture ? '' : (a.sellerAvatar || '?')}</div>
                <span>Par <span class="${pseudoClass}">${a.sellerName}</span>${badge}</span>
            </div>
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
    // Premium announces get a large score boost to be at the top of featured
    const getScore = (a) => ((a.views || 0) + (a.likes || 0)*5) + (a.sellerPremium ? 10000 : 0);
    const featured = [...announces].sort((a, b) => getScore(b) - getScore(a)).slice(0, 5);
    const recent = [...announces].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0)).slice(0, 6);


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
                            <div class="seller-name ${a.sellerPremium ? `animated-pseudo ${a.sellerPremiumStyle || 'anim-gold'}` : ''}">${a.sellerName} ${a.sellerPremium ? '<span class="premium-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"/></svg></span>' : ''}</div>
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
        <div class="form-group"><label>Uploader une image (Max 8 MB)</label>
            <input type="file" id="createImageFile" accept="image/*" style="padding:10px;background:var(--bg-card);border:1px solid var(--border-light);border-radius:var(--radius-md);width:100%;color:var(--white);">
            <p style="font-size:0.7rem;color:var(--white-30);margin-top:4px;">Sélectionne une capture d'écran de ton item.</p>
        </div>
        <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="prevStep()">${icons.arrowLeft} Retour</button>
            <button class="btn btn-primary" onclick="nextStepImage()">Continuer ${icons.arrowRight}</button>
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
        // Image logic is handled in nextStepImage()
    }

    if (currentCreateStep < 4) { currentCreateStep++; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
}

async function nextStepImage() {
    const fileInput = document.getElementById('createImageFile');
    const sf = document.getElementById('createSearchFor')?.value;
    if (!sf || !sf.trim()) return showToast('⚠️ Décris ce que tu recherches');
    createData.searchFor = sf.trim();

    if (fileInput && fileInput.files[0]) {
        const file = fileInput.files[0];
        if (file.size > 8 * 1024 * 1024) return showToast("⚠️ L'image ne doit pas dépasser 8 MB");
        
        // Compress image using canvas
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800; const MAX_HEIGHT = 800;
                let width = img.width; let height = img.height;
                if (width > height && width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; }
                else if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; }
                canvas.width = width; canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                createData.imageUrl = canvas.toDataURL('image/jpeg', 0.8);
                if (currentCreateStep < 4) { currentCreateStep++; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
            }
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        createData.imageUrl = null;
        if (currentCreateStep < 4) { currentCreateStep++; renderApp(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    }
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
        sellerPicture: currentUser.picture || null,
        sellerRating: currentUser.rating,
        sellerTrades: currentUser.trades || 0,
        sellerPremium: currentUser.is_premium || false,
        sellerPremiumStyle: currentUser.premium_style || 'anim-gold',
        views: 0,

        likes: 0,

        likedBy: [],
        editCount: 0,
        date: new Date().toISOString(),
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
                <label>Nom d'utilisateur (Pseudo) ${currentUser.is_premium ? '<span style="color:#FFD700;font-size:0.7rem;">(Premium: Pas de délai)</span>' : '<span style="color:var(--white-50);font-size:0.7rem;">(Changeable tous les 24h)</span>'}</label>
                <input type="text" id="settingsPseudo" value="${currentUser.pseudo}" placeholder="Ton pseudo Roblox...">
            </div>
            ${currentUser.is_premium ? `
            <div class="form-group">
                <label style="color:#FFD700;">Avatar Premium (URL ou GIF)</label>
                <input type="text" id="settingsAvatarUrl" value="${currentUser.picture || ''}" placeholder="Lien vers une image ou un GIF (Imgur, Discord...)">
            </div>
            ` : `
            <div class="form-group" style="opacity:0.5;pointer-events:none;">
                <label>Avatar Personnalisé <span style="color:#FFD700;font-size:0.7rem;">(⭐ Réservé Premium)</span></label>
                <input type="text" placeholder="Débloque le Premium pour utiliser un GIF !">
            </div>
            `}
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
        
        ${currentUser.email === 'the.furtive.guys@gmail.com' ? `
        <div class="sidebar-card mt-4" style="background:rgba(255,107,43,0.1);border-color:var(--orange);">
            <h3 class="section-title" style="color:var(--orange);">Mode Administrateur</h3>
            <button class="btn btn-primary btn-block" onclick="navigate('admin')">Accéder au Panel Admin</button>
        </div>` : ''}
    </div>
`;
}

function renderAdmin() {
    if (currentUser.email !== 'the.furtive.guys@gmail.com') return '<div class="container">Accès refusé</div>';
    
    // Simulate some stats if DB fetch is slow or unavailable for all profiles
    const totalAnnounces = announces.length;
    
    return `
    <div class="container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
            <h2 style="font-size:1.6rem;font-weight:800;color:var(--orange);">👑 Panel d'Administration</h2>
            <button class="btn btn-secondary" onclick="navigate('settings')">Retour</button>
        </div>

        <div class="grid-3" style="margin-bottom:24px;">
            <div class="sidebar-card"><div style="color:var(--white-50);">Total Annonces</div><div style="font-size:1.5rem;font-weight:800;">${totalAnnounces}</div></div>
            <div class="sidebar-card">
                <div style="color:var(--white-50);">Gérer Utilisateurs</div>
                <button class="btn btn-secondary btn-sm mt-2" onclick="adminShowUsers()">Ouvrir</button>
            </div>
            <div class="sidebar-card"><div style="color:var(--white-50);">Modération Annonces</div><button class="btn btn-secondary btn-sm mt-2" onclick="adminShowAnnounces()">Ouvrir</button></div>
        </div>
        
        <div class="sidebar-card" style="margin-bottom:24px;border-color:#A23AFF;">
            <h3 class="section-title" style="color:#A23AFF;">Donner Premium par Email</h3>
            <div style="display:flex;gap:10px;">
                <input type="text" id="adminGrantEmail" placeholder="adresse@email.com" style="flex:1;">
                <button class="btn btn-primary" style="background:#A23AFF;border:none;" onclick="adminGrantPremiumByEmail()">Activer Premium</button>
            </div>
        </div>

        <div id="adminView" class="sidebar-card">
            <p style="color:var(--white-50);">Sélectionnez une action ci-dessus.</p>
        </div>

    </div>
    `;
}

async function adminShowUsers() {
    const view = document.getElementById('adminView');
    view.innerHTML = '<p>Chargement des utilisateurs...</p>';
    if (!AuraAuth._supabase) return view.innerHTML = '<p>Erreur: Supabase non connecté.</p>';
    
    const { data: users, error } = await AuraAuth._supabase.from('profiles').select('*');
    if (error) return view.innerHTML = '<p>Erreur: ' + error.message + '</p>';
    
    const onlineUsers = users.filter(u => u.last_seen && (Date.now() - new Date(u.last_seen).getTime()) < 3600000).length;
    
    view.innerHTML = `
        <h3 class="section-title">Utilisateurs inscrits (${users.length} total, ${onlineUsers} en ligne récemment)</h3>
        <div style="max-height:400px;overflow-y:auto;">
            ${users.map(u => `
                <div style="padding:10px; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong style="color:var(--white);">${u.pseudo || 'Sans pseudo'}</strong>
                        <div style="font-size:0.8rem;color:var(--white-50);">${u.email || 'Email masqué'}</div>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <button class="btn btn-secondary btn-sm" onclick="adminEditPseudo('${u.id}', '${u.pseudo}')">Renommer</button>
                        ${u.is_premium ? `<button class="btn btn-ghost btn-sm" style="color:#FFD700;" onclick="adminRevokePremium('${u.id}')">Retirer Premium</button>` 
                                       : `<button class="btn btn-ghost btn-sm" style="color:#FFD700;" onclick="adminGrantPremium('${u.id}')">⭐ Donner Premium</button>`}
                        <button class="btn btn-secondary btn-sm" onclick="adminContact('${u.id}', '${u.pseudo}')">Message</button>
                        <button class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="adminBan('${u.id}')">Bannir</button>

                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

async function adminEditPseudo(userId, currentPseudo) {
    const p = prompt('Nouveau pseudo pour ' + currentPseudo + ' :');
    if (!p) return;
    await AuraAuth._supabase.from('profiles').update({ pseudo: p }).eq('id', userId);
    showToast('✅ Pseudo mis à jour');
    adminShowUsers();
}

async function adminContact(userId, pseudo) {
    const m = prompt('Message pour ' + pseudo + ' :');
    if (!m) return;
    await AuraAuth._supabase.from('messages').insert([{
        fromUserId: currentUser.id,
        toUserId: userId,
        content: "[Message de l'Admin] " + m,
        date: new Date().toISOString()
    }]);
    showToast('✉️ Message envoyé');
}

async function adminBan(userId) {
    if (!confirm('Bannir définitivement cet utilisateur ? (Nécessite la colonne "banned" dans la table profiles)')) return;
    await AuraAuth._supabase.from('profiles').update({ banned: true }).eq('id', userId);
    showToast('🚫 Utilisateur banni');
}

function adminShowAnnounces() {
    const view = document.getElementById('adminView');
    view.innerHTML = `
        <h3 class="section-title">Toutes les annonces</h3>
        <div style="max-height:400px;overflow-y:auto;">
            ${announces.map(a => `
                <div style="padding:10px; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong style="color:var(--white);">${a.title}</strong>
                        <div style="font-size:0.8rem;color:var(--white-50);">Par ${a.sellerName} (ID: ${a.id})</div>
                    </div>
                    <button class="btn btn-ghost btn-sm" style="color:var(--danger);" onclick="adminDeleteAnnounce(${a.id})">Supprimer</button>
                </div>
            `).join('')}
        </div>
    `;
}

async function adminDeleteAnnounce(id) {
    if (!confirm('Supprimer cette annonce ?')) return;
    await AuraAuth._supabase.from('announces').delete().eq('id', id);
    announces = announces.filter(a => a.id !== id);
    showToast('🗑️ Annonce supprimée');
    adminShowAnnounces();
}

async function adminGrantPremiumByEmail() {
    const email = document.getElementById('adminGrantEmail')?.value.trim();
    if (!email) return showToast('⚠️ Entrez une adresse email');
    if (!AuraAuth._supabase) return showToast('❌ Supabase non connecté');
    
    // Fetch profile by email first
    const { data: users, error: fetchErr } = await AuraAuth._supabase.from('profiles').select('id').eq('email', email);
    if (fetchErr) return showToast('❌ Erreur de recherche : ' + fetchErr.message);
    if (!users || users.length === 0) return showToast('❌ Aucun utilisateur trouvé avec cet email');
    
    const userId = users[0].id;
    
    const { error: updateErr } = await AuraAuth._supabase.from('profiles').update({ is_premium: true }).eq('id', userId);
    if (updateErr) return showToast('❌ Erreur mise à jour : ' + updateErr.message);
    
    showToast('⭐ Premium accordé à ' + email);
    document.getElementById('adminGrantEmail').value = '';
    if (document.getElementById('adminView').innerHTML.includes('Utilisateurs inscrits')) {
        adminShowUsers();
    }
}


async function adminGrantPremium(userId) {

    if (!confirm('Donner le grade Premium à cet utilisateur ? (Nécessite la colonne is_premium)')) return;
    await AuraAuth._supabase.from('profiles').update({ is_premium: true }).eq('id', userId);
    showToast('⭐ Premium accordé');
    adminShowUsers();
}

async function adminRevokePremium(userId) {
    if (!confirm('Retirer le grade Premium à cet utilisateur ?')) return;
    await AuraAuth._supabase.from('profiles').update({ is_premium: false }).eq('id', userId);
    showToast('❌ Premium retiré');
    adminShowUsers();
}

function renderPremium() {
    const checkIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
    
    return `
    <div class="container" style="max-width:800px; padding: 40px 14px;">
        <div class="premium-hero">
            <h1 style="font-size:2.8rem;font-weight:900;color:#A23AFF;margin-bottom:16px;letter-spacing:-0.03em;">Aura Trade <span style="color:#FFD700;">Premium</span></h1>
            <p style="color:var(--white-70);font-size:1.1rem;max-width:600px;margin:0 auto;">
                L'abonnement ultime pour dominer le marché. Obtenez une visibilité inégalée et un statut exclusif sur la plateforme.
            </p>
        </div>

        <div class="pricing-card">
            <h3 style="color:#A23AFF; text-transform:uppercase; font-size:0.85rem; letter-spacing:0.1em; margin-bottom:12px; font-weight:800;">Abonnement Élitis</h3>
            <div class="pricing-price">Sur Devis <span>/ à vie</span></div>
            <p style="color:var(--white-50);font-size:0.9rem;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:24px;margin-bottom:24px;">Places strictement limitées. Soumis à validation.</p>
            
            <ul class="pricing-features">
                <li>${checkIcon} <strong>Logo Certifié</strong> officiel à côté de votre pseudo</li>
                <li>${checkIcon} <strong>Pseudo Animé</strong> avec effet de dégradé exclusif</li>
                <li>${checkIcon} <strong>Changement de Pseudo illimité</strong> (plus d'attente de 24h)</li>
                <li>${checkIcon} <strong>Boost Algorithmique :</strong> Annonces toujours en tête de l'Accueil</li>
                <li>${checkIcon} <strong>Cartes Premium :</strong> Effet de lueur dorée sur vos annonces</li>
                <li>${checkIcon} <strong>Avatar GIF :</strong> Débloquez les photos de profil animées</li>
            </ul>

            <div style="background:var(--bg-tertiary);border-radius:var(--radius-lg);padding:20px;text-align:center;margin-top:30px;">
                <p style="font-weight:600;color:var(--white-90);margin-bottom:12px;font-size:0.9rem;">Pour souscrire, contactez la direction sur Discord :</p>
                <div style="display:flex;align-items:center;justify-content:center;gap:12px;">
                    <code style="background:var(--bg-body);padding:10px 20px;border-radius:var(--radius-md);font-size:1.1rem;color:#A23AFF;font-weight:bold;letter-spacing:1px;">blox.vlr.</code>
                    <button class="btn btn-purple" style="width:auto;padding:10px 20px;" onclick="navigator.clipboard.writeText('blox.vlr.');showToast('📋 Pseudo Discord copié !')">Copier</button>
                </div>
            </div>
        </div>
    </div>
    `;
}
function renderConfigPremium() {
    if (!currentUser.is_premium) return '<div class="container">Accès réservé aux membres Premium.</div>';
    
    const currentStyle = currentUser.premium_style || 'anim-gold';
    
    return `
    <div class="container" style="max-width:600px;">
        <h2 style="font-size:1.6rem;font-weight:800;color:#A23AFF;margin-bottom:24px;">⚙️ Configuration Premium</h2>
        
        <div class="sidebar-card" style="border:1px solid rgba(162,58,255,0.3); background:rgba(162,58,255,0.05);">
            <h3 class="section-title" style="color:#A23AFF;">Apparence de votre Pseudo</h3>
            <p style="color:var(--white-50);font-size:0.9rem;margin-bottom:16px;">Choisissez le dégradé animé qui apparaîtra sur toutes vos annonces et votre profil.</p>
            
            <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">
                <label style="display:flex;align-items:center;gap:12px;cursor:pointer;">
                    <input type="radio" name="premiumStyle" value="anim-gold" ${currentStyle === 'anim-gold' ? 'checked' : ''}>
                    <span class="animated-pseudo anim-gold" style="font-size:1.2rem;">Or Classique</span>
                </label>
                <label style="display:flex;align-items:center;gap:12px;cursor:pointer;">
                    <input type="radio" name="premiumStyle" value="anim-rgb" ${currentStyle === 'anim-rgb' ? 'checked' : ''}>
                    <span class="animated-pseudo anim-rgb" style="font-size:1.2rem;">Arc-en-ciel (RGB)</span>
                </label>
                <label style="display:flex;align-items:center;gap:12px;cursor:pointer;">
                    <input type="radio" name="premiumStyle" value="anim-purple" ${currentStyle === 'anim-purple' ? 'checked' : ''}>
                    <span class="animated-pseudo anim-purple" style="font-size:1.2rem;">Élitis (Violet)</span>
                </label>
                <label style="display:flex;align-items:center;gap:12px;cursor:pointer;">
                    <input type="radio" name="premiumStyle" value="anim-ocean" ${currentStyle === 'anim-ocean' ? 'checked' : ''}>
                    <span class="animated-pseudo anim-ocean" style="font-size:1.2rem;">Océan Glacé</span>
                </label>
            </div>
            
            <button class="btn btn-purple" onclick="savePremiumConfig()">Sauvegarder mon Style</button>
        </div>
        
        <div class="sidebar-card mt-4" style="border:1px solid rgba(255,215,0,0.3); background:rgba(255,215,0,0.05);">
            <h3 class="section-title" style="color:#FFD700;">Avatar Animé (GIF)</h3>
            <p style="color:var(--white-50);font-size:0.9rem;margin-bottom:16px;">Collez le lien direct (URL) d'un GIF pour l'utiliser comme photo de profil.</p>
            <div class="form-group">
                <input type="text" id="configAvatarUrl" value="${currentUser.picture || ''}" placeholder="https://exemple.com/mon-gif.gif">
            </div>
            <button class="btn btn-primary" style="background:#FFD700;color:#000;border:none;" onclick="savePremiumConfig()">Mettre à jour l'Avatar</button>
        </div>
    </div>
    `;
}

async function savePremiumConfig() {
    const styleRadios = document.getElementsByName('premiumStyle');
    let selectedStyle = 'anim-gold';
    for (const r of styleRadios) { if (r.checked) selectedStyle = r.value; }
    
    const newAvatar = document.getElementById('configAvatarUrl')?.value.trim() || currentUser.picture;
    
    currentUser.premium_style = selectedStyle;
    currentUser.picture = newAvatar;
    localStorage.setItem('aura_user', JSON.stringify(currentUser));
    
    if (AuraAuth._supabase) {
        try {
            await AuraAuth._supabase.from('profiles').update({ 
                premium_style: selectedStyle,
                avatar_url: newAvatar
            }).eq('id', currentUser.id);
            showToast('✨ Configuration Premium sauvegardée !');
        } catch (e) {
            console.error(e);
            showToast('❌ Erreur de sauvegarde DB');
        }
    }
    refreshUserData();
    renderApp();
}


async function confirmDeleteAccount() {
    if (confirm("⚠️ Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible et supprimera votre profil ainsi que toutes vos annonces.")) {
        if (AuraAuth._supabase) {
            try {
                // Delete profile from DB (announces will cascade if foreign key is set to cascade)
                await AuraAuth._supabase.from('profiles').delete().eq('id', currentUser.id);
            } catch (e) {
                console.error(e);
            }
        }
        
        // Force logout locally regardless of DB success
        showToast('👋 Compte supprimé avec succès.');
        localStorage.removeItem('aura_user');
        setTimeout(() => { window.location.href = 'index.html'; }, 800);
    }
}



async function updateProfile() {
    const newPseudo = document.getElementById('settingsPseudo')?.value.trim();
    if (!newPseudo) return showToast('⚠️ Le pseudo ne peut pas être vide');
    
    let updates = {};
    let needsUpdate = false;
    
    if (newPseudo !== currentUser.pseudo) {
        // Check 24h cooldown if NOT premium
        if (!currentUser.is_premium) {
            const lastChange = localStorage.getItem('last_pseudo_change');
            if (lastChange) {
                const hoursPassed = (Date.now() - parseInt(lastChange)) / (1000 * 60 * 60);
                if (hoursPassed < 24) {
                    const hoursLeft = Math.ceil(24 - hoursPassed);
                    return showToast(`⏳ Attends encore ${hoursLeft}h pour changer de pseudo.`);
                }
            }
        }
        currentUser.pseudo = newPseudo;
        updates.pseudo = newPseudo;
        needsUpdate = true;
        localStorage.setItem('last_pseudo_change', Date.now().toString());
    }

    if (currentUser.is_premium) {
        const newAvatar = document.getElementById('settingsAvatarUrl')?.value.trim();
        if (newAvatar !== currentUser.picture) {
            currentUser.picture = newAvatar;
            updates.avatar_url = newAvatar;
            needsUpdate = true;
        }
    }
    
    if (!needsUpdate) return showToast('⚠️ Aucune modification détectée');
    
    localStorage.setItem('aura_user', JSON.stringify(currentUser)); // Save locally
    
    if (AuraAuth._supabase) {
        try {
            const { error } = await AuraAuth._supabase.from('profiles').update(updates).eq('id', currentUser.id);
            if (error) throw error;
            showToast('✅ Profil mis à jour !');
        } catch (e) { 
            console.error(e); 
            showToast('❌ Erreur base de données (Profil local mis à jour)'); 
        }
    } else {
        showToast('✅ Profil mis à jour !');
    }
    
    refreshUserData();
    renderApp();
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
        <div class="grid-3">${myAnnounces.map(a => renderMyAnnounceCard(a)).join('')}</div>
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

function renderMyAnnounceCard(a) {
    const imageStyle = a.imageUrl ? `background-image:url(${a.imageUrl}); background-size:cover;` : '';
    const premiumClass = a.sellerPremium ? 'premium-card' : '';
    
    return `
    <div class="card ${premiumClass}">
        <div class="card-image ${a.rarityClass}" style="${imageStyle}">
            ${!a.imageUrl ? `<span class="item-emoji">${a.imageEmoji}</span>` : ''}
            <span class="card-rarity rarity-${a.rarityClass}">${a.rarity}</span>
        </div>
        <div class="card-body">
            <div class="card-game">${a.gameName}</div>
            <div class="card-title">${a.title}</div>
            <div style="font-size:0.8rem;color:var(--white-50);margin-top:8px;">Modifications : ${a.editCount || 0}/2</div>
            <div class="card-footer" style="margin-top:16px;">
                <button class="btn btn-secondary btn-sm" style="flex:1;" onclick="editMyAnnounce(${a.id})">✏️ Modifier</button>
                <button class="btn btn-ghost btn-sm" style="flex:1;color:var(--danger);" onclick="deleteMyAnnounce(${a.id})">🗑️ Supprimer</button>
            </div>
        </div>
    </div>
    `;
}

async function editMyAnnounce(id) {
    const a = announces.find(ann => ann.id === id);
    if (!a) return;
    if ((a.editCount || 0) >= 2) return showToast('⚠️ Limite de modifications atteinte (2/2)');
    
    const newDesc = prompt('Nouvelle description :', a.description);
    if (newDesc === null) return; // cancelled
    
    const newCount = (a.editCount || 0) + 1;
    
    a.description = newDesc;
    a.editCount = newCount;
    
    if (AuraAuth._supabase) {
        await AuraAuth._supabase.from('announces').update({ description: newDesc, editCount: newCount }).eq('id', id);
    }
    showToast('✏️ Annonce modifiée (' + newCount + '/2)');
    renderApp();
}

async function deleteMyAnnounce(id) {
    if (!confirm('Voulez-vous vraiment supprimer cette annonce ?')) return;
    announces = announces.filter(a => a.id !== id);
    if (AuraAuth._supabase) {
        await AuraAuth._supabase.from('announces').delete().eq('id', id);
    }
    showToast('🗑️ Annonce supprimée');
    renderApp();
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
    // Mandatory: no overlay click closing
}


async function saveInitialPseudo() {
    const p = document.getElementById('setupPseudo')?.value.trim();
    if (!p) return showToast('⚠️ Entre un pseudo !');
    
    currentUser.pseudo = p;
    localStorage.setItem('aura_user', JSON.stringify(currentUser));
    localStorage.setItem('last_pseudo_change', Date.now().toString());
    
    if (AuraAuth._supabase) {
        await AuraAuth._supabase.from('profiles').update({ pseudo: p }).eq('id', currentUser.id);
    }
    const modal = document.getElementById('activeModal');
    if (modal) modal.remove();
    
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
        
        const now = new Date().getTime();
        const validAnnounces = [];
        
        for (const a of (data || [])) {
            // Auto-delete logic
            const dateObj = new Date(a.date);
            // If date is invalid or old format without hours, assume midnight of that day
            const ageHours = (now - dateObj.getTime()) / (1000 * 60 * 60);
            const maxHours = a.sellerPremium ? (5 * 24) : 48;
            
            if (ageHours > maxHours) {
                // Delete from DB
                await AuraAuth._supabase.from('announces').delete().eq('id', a.id);
            } else {
                validAnnounces.push(a);
            }
        }
        
        announces = validAnnounces;
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
    if (currentUser.id !== 'guest' && !currentUser.pseudo) {
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
