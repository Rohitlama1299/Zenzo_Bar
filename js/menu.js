// --- State ---
let menuData = null;
let currentCategory = 'all';
let currentSearch = '';
let currentPriceFilter = 'all';

// --- Render helpers ---

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function popularBadgeHtml(item) {
    if (!item.popular) return '';
    return '<span class="popular-badge"><i class="fas fa-fire"></i> Popular</span>';
}

function createPriceTag(label, value) {
    return `
        <div class="glass-bottle-item">
            <div class="text-muted text-xs mb-1">${escapeHtml(label)}</div>
            <div class="price text-lg">&euro;${escapeHtml(value)}</div>
        </div>`;
}

function renderPriceBlock(item) {
    // Special case: price with small/large pairs
    if (item.price && item.price.includes(' / ')) {
        const prices = item.price.split(' / ').map(p => p.trim());
        if (prices.length === 2) {
            return `
                <div class="glass-bottle-container">
                    ${createPriceTag('SMALL', prices[0])}
                    ${createPriceTag('LARGE', prices[1])}
                </div>`;
        }
    }

    const priceParts = [];
    if (item.price) priceParts.push({ label: 'Price', value: item.price });
    if (item.glass) priceParts.push({ label: 'Glass', value: item.glass });
    if (item.bottle) priceParts.push({ label: 'Bottle', value: item.bottle });

    if (priceParts.length === 0) {
        return '<div class="price text-xl">P.O.A.</div>';
    }

    if (priceParts.length === 1 && item.price && !item.glass && !item.bottle) {
        return `<div class="price text-xl">&euro;${escapeHtml(item.price)}</div>`;
    }

    return `
        <div class="glass-bottle-container">
            ${priceParts.map(p => createPriceTag(p.label, p.value)).join('')}
        </div>`;
}

function getItemPrice(item) {
    // Extract the first numeric price from an item for filtering
    const fields = [item.price, item.glass, item.bottle];
    for (const f of fields) {
        if (f) {
            const num = parseFloat(f.replace(/[^0-9.]/g, ''));
            if (!isNaN(num)) return num;
        }
    }
    return null;
}

function matchesSearch(item, query) {
    if (!query) return true;
    const q = query.toLowerCase();
    const name = (item.name || '').toLowerCase();
    const desc = (item.desc || '').toLowerCase();
    return name.includes(q) || desc.includes(q);
}

function matchesPriceFilter(item, filter) {
    if (filter === 'all') return true;
    const price = getItemPrice(item);
    if (price === null) return true; // show items without clear price
    if (filter === '0-10') return price < 10;
    if (filter === '10-15') return price >= 10 && price <= 15;
    if (filter === '15+') return price > 15;
    return true;
}

function filterItems(items) {
    return items.filter(item =>
        matchesSearch(item, currentSearch) && matchesPriceFilter(item, currentPriceFilter)
    );
}

function renderSimpleItem(item) {
    const desc = item.desc ? `<p class="text-muted text-sm mt-1">${escapeHtml(item.desc)}</p>` : '';
    const popular = popularBadgeHtml(item);
    
    // Handle prices with " / " separator (e.g., draft beer sizes)
    const hasGlassBottlePrice = item.glass || item.bottle || (item.price && item.price.includes(' / '));
    const priceDisplay = renderPriceBlock(item);

    if (hasGlassBottlePrice) {
        return `
            <div class="menu-card p-6 rounded-2xl reveal-card">
                <div>
                    <div class="flex items-center gap-2 flex-wrap mb-3">
                        <h3 class="font-semibold text-xl">${escapeHtml(item.name)}</h3>
                        ${popular}
                    </div>
                    ${desc}
                    <div class="mt-4">${priceDisplay}</div>
                </div>
            </div>`;
    }

    // Default single price layout (desktop style with side price)
    return `
        <div class="menu-card p-6 rounded-2xl reveal-card">
            <div class="flex justify-between items-start">
                <div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-semibold text-xl">${escapeHtml(item.name)}</h3>
                        ${popular}
                    </div>
                    ${desc}
                </div>
                <div class="ml-4">${priceDisplay}</div>
            </div>
        </div>`;
}

function renderGlassBottleItem(item) {
    const desc = item.desc ? `<p class="text-muted text-sm">${escapeHtml(item.desc)}</p>` : '';
    const badge = item.badge ? `<span class="wine-type-badge text-xs font-semibold px-3 py-1.5 rounded-full">${escapeHtml(item.badge)}</span>` : '';
    const premiumBadge = item.premium ? '<div class="premium-badge">PREMIUM</div>' : '';
    const vipRibbon = item.vip ? '<div class="vip-ribbon">VIP</div>' : '';
    const extraClasses = item.vip ? ' relative overflow-hidden' : '';
    const popular = popularBadgeHtml(item);

    const priceHtml = renderPriceBlock(item);

    return `
        <div class="spirit-card menu-card p-6 rounded-2xl${extraClasses} reveal-card">
            ${vipRibbon}
            <div class="flex items-start justify-between mb-4">
                <div class="flex-1">
                    ${badge}
                    <div class="flex items-center gap-2 flex-wrap ${badge ? 'mt-3' : ''}">
                        <h3 class="font-semibold text-xl mb-1">${escapeHtml(item.name)}</h3>
                        ${popular}
                    </div>
                    ${desc}
                    ${premiumBadge}
                </div>
            </div>
            ${priceHtml}
        </div>`;
}

function renderCocktailItem(item) {
    const desc = item.desc ? `<p class="text-muted text-sm mt-1">${escapeHtml(item.desc)}</p>` : '';
    const popular = popularBadgeHtml(item);

    // If item has both price and virgin, show them in separate boxes
    if (item.price && item.virgin) {
        let priceHtml = '<div class="glass-bottle-container">';
        priceHtml += `
            <div class="glass-bottle-item">
                <div class="text-muted text-xs mb-1">COCKTAIL</div>
                <div class="price text-lg">&euro;${item.price}</div>
            </div>
            <div class="glass-bottle-item">
                <div class="text-muted text-xs mb-1">MOCKTAIL</div>
                <div class="price text-lg">&euro;${item.virgin}</div>
            </div>`;
        priceHtml += '</div>';

        return `
            <div class="cocktail-card menu-card p-6 rounded-2xl reveal-card">
                <div class="flex flex-col">
                    <div class="flex items-center gap-2 flex-wrap mb-3">
                        <h3 class="font-semibold text-xl">${escapeHtml(item.name)}</h3>
                        ${popular}
                    </div>
                    ${desc}
                </div>
                ${priceHtml}
            </div>`;
    }

    // Default: single price
    let priceText = `&euro;${item.price}`;

    return `
        <div class="cocktail-card menu-card p-6 rounded-2xl reveal-card">
            <div class="flex justify-between items-start">
                <div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-semibold text-xl">${escapeHtml(item.name)}</h3>
                        ${popular}
                    </div>
                    ${desc}
                </div>
                <span class="price text-xl whitespace-nowrap ml-4">${priceText}</span>
            </div>
        </div>`;
}

function renderPackageItem(item) {
    const includesList = item.includes.map(i => `<li>${escapeHtml(i)}</li>`).join('');
    return `
        <div class="package-card p-8 rounded-2xl reveal-card">
            <div class="flex justify-between items-start mb-6">
                <h3 class="text-2xl font-semibold package-name">${escapeHtml(item.name)}</h3>
                <span class="price text-3xl">&euro;${item.price}</span>
            </div>
            <ul class="list-disc list-inside text-muted space-y-3 text-lg">
                ${includesList}
            </ul>
        </div>`;
}

// --- Section renderers ---

function renderSimpleSection(cat) {
    const items = filterItems(cat.items);
    if (items.length === 0) return '';
    return `
        <section id="${cat.id}" class="category-section mb-16 section-transition">
            <div class="flex items-center mb-8">
                <div class="icon-container mr-4"><i class="fas ${cat.icon}"></i></div>
                <h2 class="section-title text-3xl md:text-4xl">${escapeHtml(cat.title)}</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${items.map(renderSimpleItem).join('')}
            </div>
        </section>`;
}

function renderSubcategoriesSection(cat) {
    let hasItems = false;
    let subsHtml = '';

    cat.subcategories.forEach((sub, idx) => {
        const items = filterItems(sub.items);
        if (items.length === 0) return;
        hasItems = true;
        const isLast = idx === cat.subcategories.length - 1;
        subsHtml += `
            <h3 class="subcategory-title text-xl font-semibold mb-8">${escapeHtml(sub.title)}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isLast ? '' : 'mb-12'}">
                ${items.map(renderGlassBottleItem).join('')}
            </div>`;
    });

    if (!hasItems) return '';

    return `
        <section id="${cat.id}" class="category-section mb-16 section-transition">
            <div class="flex items-center mb-8">
                <div class="icon-container mr-4"><i class="fas ${cat.icon}"></i></div>
                <h2 class="section-title text-3xl md:text-4xl">${escapeHtml(cat.title)}</h2>
            </div>
            ${subsHtml}
        </section>`;
}

function renderSpiritsSection(cat) {
    let hasItems = false;
    let subsHtml = '';
    const noteHtml = cat.note ? `<p class="text-muted mb-8 text-lg">${escapeHtml(cat.note)}</p>` : '';

    cat.subcategories.forEach((sub) => {
        const items = filterItems(sub.items);
        if (items.length === 0) return;
        hasItems = true;
        const noteText = sub.note ? `<p class="text-muted mb-6">${escapeHtml(sub.note)}</p>` : '';
        subsHtml += `
            <h3 class="subcategory-title text-xl font-semibold mb-8">${escapeHtml(sub.title)}</h3>
            ${noteText}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                ${items.map(renderGlassBottleItem).join('')}
            </div>`;
    });

    if (!hasItems) return '';

    return `
        <section id="${cat.id}" class="category-section mb-16 section-transition">
            <div class="flex items-center mb-8">
                <div class="icon-container mr-4"><i class="fas ${cat.icon}"></i></div>
                <h2 class="section-title text-3xl md:text-4xl">${escapeHtml(cat.title)}</h2>
            </div>
            ${noteHtml}
            ${subsHtml}
        </section>`;
}

function renderPackagesSection(cat) {
    const items = filterItems(cat.items);
    if (items.length === 0) return '';
    return `
        <section id="${cat.id}" class="category-section mb-16 section-transition">
            <div class="flex items-center mb-8">
                <div class="icon-container mr-4"><i class="fas ${cat.icon}"></i></div>
                <h2 class="section-title text-3xl md:text-4xl">${escapeHtml(cat.title)}</h2>
            </div>
            <div class="grid grid-cols-1 gap-8">
                ${items.map(renderPackageItem).join('')}
            </div>
        </section>`;
}

function renderCocktailsSection(cat) {
    const items = filterItems(cat.items);
    if (items.length === 0) return '';
    return `
        <section id="${cat.id}" class="category-section mb-16 section-transition">
            <div class="flex items-center mb-8">
                <div class="icon-container mr-4"><i class="fas ${cat.icon}"></i></div>
                <h2 class="section-title text-3xl md:text-4xl">${escapeHtml(cat.title)}</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${items.map(renderCocktailItem).join('')}
            </div>
        </section>`;
}

function renderSection(cat) {
    switch (cat.type) {
        case 'simple': return renderSimpleSection(cat);
        case 'subcategories': return renderSubcategoriesSection(cat);
        case 'spirits': return renderSpiritsSection(cat);
        case 'packages': return renderPackagesSection(cat);
        case 'cocktails': return renderCocktailsSection(cat);
        default: return renderSimpleSection(cat);
    }
}

// --- Category buttons ---

function renderCategoryButtons(categories) {
    const container = document.getElementById('category-buttons');
    if (!container) {
        console.error('Category buttons container not found');
        return;
    }
    let html = `
        <button id="all-category-btn" class="category-btn px-5 py-3 rounded-xl text-sm whitespace-nowrap active-category flex items-center" data-category="all">
            <i class="fas fa-star mr-2"></i> All Items
        </button>`;

    categories.forEach(cat => {
        html += `
            <button class="category-btn px-5 py-3 rounded-xl text-sm whitespace-nowrap flex items-center" data-category="${cat.id}">
                <i class="fas ${cat.icon} mr-2"></i> ${escapeHtml(cat.title)}
            </button>`;
    });

    container.innerHTML = html;
}

// --- Full re-render ---

function renderMenu() {
    const menuContent = document.getElementById('menu-content');
    const noResults = document.getElementById('no-results');
    const searchBar = document.getElementById('search-results-bar');
    const searchText = document.getElementById('search-results-text');

    if (!menuContent) {
        console.error('Menu content element not found');
        return;
    }

    // Filter categories to show
    let categoriesToRender = menuData.categories;
    if (currentCategory !== 'all') {
        categoriesToRender = categoriesToRender.filter(c => c.id === currentCategory);
    }

    const html = categoriesToRender.map(renderSection).join('');

    // Fade out, swap, fade in
    menuContent.classList.add('fading-out');

    setTimeout(() => {
        menuContent.innerHTML = html;

        // Count visible items
        const visibleCards = menuContent.querySelectorAll('.reveal-card');
        const hasResults = visibleCards.length > 0;

        noResults.classList.toggle('hidden', hasResults);
        menuContent.classList.toggle('hidden', !hasResults);

        // Search results bar
        if (currentSearch || currentPriceFilter !== 'all') {
            searchBar.classList.remove('hidden');
            const parts = [];
            if (currentSearch) parts.push(`"${currentSearch}"`);
            if (currentPriceFilter !== 'all') parts.push(`price: ${currentPriceFilter}`);
            searchText.textContent = `${visibleCards.length} result${visibleCards.length !== 1 ? 's' : ''} for ${parts.join(', ')}`;
        } else {
            searchBar.classList.add('hidden');
        }

        menuContent.classList.remove('fading-out');
        menuContent.classList.add('fading-in');
        setTimeout(() => menuContent.classList.remove('fading-in'), 300);

        // Trigger scroll reveal for new cards
        initScrollReveal();
    }, 150);
}

// --- Scroll reveal (staggered fade-in) ---

function initScrollReveal() {
    const cards = document.querySelectorAll('.reveal-card:not(.revealed)');
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        let delay = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                setTimeout(() => {
                    card.classList.add('revealed');
                }, delay);
                delay += 60;
                observer.unobserve(card);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    cards.forEach(card => observer.observe(card));
}

// --- Category filtering ---

function initCategoryFiltering() {
    const container = document.getElementById('category-buttons');
    if (!container) {
        console.error('Category buttons container not found for event listeners');
        return;
    }
    container.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-btn');
        if (!btn) return;

        const category = btn.getAttribute('data-category');
        currentCategory = category;

        container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active-category'));
        btn.classList.add('active-category');

        // Update all button text
        if (category === 'all') {
            updateAllButtonText();
        } else {
            const allBtn = document.getElementById('all-category-btn');
            if (allBtn) {
                allBtn.innerHTML = `<i class="fas fa-star mr-2"></i> All Items`;
            }
        }

        // Auto-scroll the button bar to keep active button visible
        btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

        renderMenu();

        // Scroll to top of content
        if (category === 'all') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setTimeout(() => {
                const target = document.getElementById(category);
                if (target) {
                    const header = document.querySelector('header');
                    const headerHeight = header.offsetHeight;
                    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
                    window.scrollTo({ top: targetTop, behavior: 'smooth' });
                }
            }, 200);
        }
    });
}

// --- Search ---

function initSearch() {
    const input = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear');
    const resultsClearBtn = document.getElementById('search-results-clear');

    if (!input || !clearBtn || !resultsClearBtn) {
        console.error('Search elements not found');
        return;
    }
    let debounceTimer;

    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            currentSearch = input.value.trim();
            clearBtn.classList.toggle('hidden', !currentSearch);
            renderMenu();
        }, 250);
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        currentSearch = '';
        clearBtn.classList.add('hidden');
        renderMenu();
    });

    resultsClearBtn.addEventListener('click', () => {
        input.value = '';
        currentSearch = '';
        currentPriceFilter = 'all';
        clearBtn.classList.add('hidden');
        document.querySelectorAll('.price-option').forEach(o => o.classList.remove('active'));
        document.querySelector('.price-option[data-price="all"]').classList.add('active');
        renderMenu();
    });
}

// --- Price Filter ---

function initPriceFilter() {
    const btn = document.getElementById('price-filter-btn');
    const dropdown = document.getElementById('price-dropdown');

    if (!btn || !dropdown) {
        console.error('Price filter elements not found');
        return;
    }

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
        dropdown.classList.add('hidden');
    });

    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
        const option = e.target.closest('.price-option');
        if (!option) return;

        dropdown.querySelectorAll('.price-option').forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        currentPriceFilter = option.getAttribute('data-price');
        dropdown.classList.add('hidden');

        // Update button appearance
        btn.classList.toggle('price-filter-active', currentPriceFilter !== 'all');

        renderMenu();
    });
}

// --- Theme toggle ---

function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');

    if (!toggle || !icon) {
        console.error('Theme toggle elements not found');
        return;
    }
    const saved = localStorage.getItem('zenzo-theme') || 'dark';

    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved, icon);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('zenzo-theme', next);
        updateThemeIcon(next, icon);
    });
}

function updateThemeIcon(theme, icon) {
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// --- Init ---

// --- Init ---

function initMenu(data) {
    menuData = data;
    renderCategoryButtons(data.categories);
    renderMenu();
    updateAllButtonText();
    initCategoryFiltering();
    initSearch();
    initPriceFilter();
    initTheme();

    // Start the loader hide sequence after menu is initialized
    setTimeout(() => {
        hideLoader();
    }, 500);
}

// --- Init ---

// More robust initialization with multiple checks
function initApp() {

    function checkAndInit() {
        const elements = {
            'category-buttons': document.getElementById('category-buttons'),
            'menu-content': document.getElementById('menu-content'),
            'search-input': document.getElementById('search-input'),
            'price-filter-btn': document.getElementById('price-filter-btn'),
            'theme-toggle': document.getElementById('theme-toggle')
        };

        const missingElements = Object.entries(elements)
            .filter(([name, element]) => !element)
            .map(([name]) => name);

        if (missingElements.length > 0) {
            console.error('Missing DOM elements:', missingElements);
            // Try again in 100ms
            setTimeout(checkAndInit, 100);
            return;
        }
        fetch('data/menu.json')
            .then(res => res.json())
            .then(data => initMenu(data))
            .catch(error => console.error('Failed to load menu data:', error));
    }

    // Start checking immediately
    checkAndInit();
}

initApp();

// --- Loader ---
function hideLoader() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('menu-content');

    if (!content) {
        console.error('Menu content element not found');
        return;
    }

    content.style.opacity = '0';

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                content.style.opacity = '1';
                content.style.transition = 'opacity 0.5s ease-in';
            }, 500);
        }
    }, 2000); // Reduced from 2500 to 2000 since menu is already loaded
}

// --- Scroll behavior ---
const logo = document.querySelector('.logo-container');
const scrollThreshold = 100;
let logoHidden = false;

function getCurrentSection() {
    const sections = document.querySelectorAll('.category-section');
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;

    for (let section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionHeight = rect.height;

        // If the section is in view (considering some threshold)
        if (scrollY + windowHeight / 2 >= sectionTop && scrollY + windowHeight / 2 < sectionTop + sectionHeight) {
            return section.id;
        }
    }
    return null;
}

function updateAllButtonText() {
    if (currentCategory !== 'all') return; // Only update when showing all items

    const currentSectionId = getCurrentSection();
    const allBtn = document.getElementById('all-category-btn');
    if (!allBtn) return;

    if (currentSectionId && menuData) {
        const category = menuData.categories.find(cat => cat.id === currentSectionId);
        if (category) {
            allBtn.innerHTML = `<i class="fas ${category.icon} mr-2"></i> ${escapeHtml(category.title)}`;
        }
    } else {
        allBtn.innerHTML = `<i class="fas fa-star mr-2"></i> All Items`;
    }
}

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 10 && logoHidden) {
        logoHidden = false;
        logo.classList.remove('logo-hidden');
    } else if (currentScroll > scrollThreshold && !logoHidden) {
        logoHidden = true;
        logo.classList.add('logo-hidden');
    }
    updateAllButtonText();
}, { passive: true });

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
