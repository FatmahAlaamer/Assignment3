document.addEventListener("DOMContentLoaded", () => {

    // ── 1. Theme Toggle with LocalStorage ──────────────
    const themeToggle = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = 'Day ☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? 'Day ☀️' : 'Night 🌙';
    });

    // ── 2. Visit Counter (LocalStorage) ────────────────
    const visits = (parseInt(localStorage.getItem('visitCount') || '0')) + 1;
    localStorage.setItem('visitCount', visits);
    const visitEl = document.getElementById('visitCount');
    if (visitEl) visitEl.textContent = visits;

    // ── 3. Time-on-site Timer ───────────────────────────
    let seconds = 0;
    const timerEl = document.getElementById('siteTimer');
    setInterval(() => {
        seconds++;
        const m = Math.floor(seconds / 60);
        const s = String(seconds % 60).padStart(2, '0');
        if (timerEl) timerEl.textContent = m + ':' + s;
    }, 1000);

    // ── 4. Project Filter & Sort ────────────────────────
    const projects = [
        {
            title: "Cartier VR Store",
            tag: "VR",
            date: "2026-03-01",
            desc: "Designed a virtual reality storefront on Spatial based on Cartier's brand identity.",
            details: "Applied Cartier's signature colors and elegant aesthetics to create an immersive, luxury shopping experience in the metaverse.",
            img: "Assets/images/Cartier.jpg"
        },
        {
            title: "SAR UX Optimization",
            tag: "UX",
            date: "2026-01-15",
            desc: "Analyzed and improved the customer journey for the SAR train service in Saudi Arabia.",
            details: "Proposed solutions addressing communication gaps and designed immersive VR/Museum concepts to improve the travel experience.",
            img: "Assets/images/SAR.jpg"
        },
        {
            title: "Medad Food-Sharing Platform",
            tag: "Web",
            date: "2026-04-01",
            desc: "Frontend admin panel for a food-sharing app connecting restaurants with charities.",
            details: "Built with React and React Router. Responsible for the Administrator Control Panel — five screens including analytics, user management, and safety monitoring.",
            img: "Assets/images/Medad.png"
        }
    ];

    let activeFilter = 'all';
    let activeSort = 'newest';

    function renderProjects() {
        let list = [...projects];

        if (activeFilter !== 'all') {
            list = list.filter(p => p.tag === activeFilter);
        }

        if (activeSort === 'newest') list.sort((a, b) => new Date(b.date) - new Date(a.date));
        else if (activeSort === 'oldest') list.sort((a, b) => new Date(a.date) - new Date(b.date));
        else if (activeSort === 'az') list.sort((a, b) => a.title.localeCompare(b.title));

        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        if (!list.length) {
            grid.innerHTML = '<p style="color:#9c8977; font-style:italic;">No projects in this category yet.</p>';
            return;
        }

        grid.innerHTML = list.map((p, i) => `
            <div class="project-card">
                ${p.img
                    ? `<img src="${p.img}" alt="${p.title}" onerror="this.style.display='none'">`
                    : `<div style="height:180px; background:#e8ddd0; border-radius:4px; display:flex; align-items:center; justify-content:center; color:#9c8977; font-size:0.85rem;">No image</div>`
                }
                <div class="card-content">
                    <span class="project-tag-badge" data-tag="${p.tag}">${p.tag}</span>
                    <h3>${p.title}</h3>
                    <p>${p.desc}</p>
                    <div class="project-details" id="details-${i}" style="display:none;">
                        <p><strong>Details:</strong> ${p.details}</p>
                    </div>
                    <button class="view-more-btn" data-target="details-${i}">View Details</button>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.view-more-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = document.getElementById(btn.dataset.target);
                const isHidden = target.style.display === 'none';
                target.style.display = isHidden ? 'block' : 'none';
                btn.textContent = isHidden ? 'Show Less' : 'View Details';
            });
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderProjects();
        });
    });

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            activeSort = sortSelect.value;
            renderProjects();
        });
    }

    renderProjects();

    // ── 5. GitHub API ───────────────────────────────────
    const githubContainer = document.getElementById('githubRepos');
    if (githubContainer) {
        githubContainer.innerHTML = '<p class="api-msg">Loading repositories…</p>';

        fetch('https://api.github.com/users/FatmahAlaamer/repos?sort=updated&per_page=20')
            .then(res => {
                if (!res.ok) throw new Error('GitHub API error: ' + res.status);
                return res.json();
            })
            .then(repos => {
                const allowed = ['Assignment2', 'Assigment-1'];
                const filtered = repos.filter(r => allowed.includes(r.name));

                if (!filtered.length) throw new Error('No repositories found.');

                githubContainer.innerHTML = `<div class="github-grid">${
                    filtered.map(r => `
                        <div class="repo-card">
                            <h3>${r.name}</h3>
                            <p>${r.description || 'No description provided.'}</p>
                            <div class="repo-meta">
                                <span>★ ${r.stargazers_count}</span>
                                ${r.language ? `<span>◉ ${r.language}</span>` : ''}
                            </div>
                            <a href="${r.html_url}" class="repo-link" target="_blank" rel="noopener">Open on GitHub →</a>
                        </div>
                    `).join('')
                }</div>`;
            })
            .catch(err => {
                githubContainer.innerHTML = `<p class="api-msg">Could not load repositories. ${err.message}</p>`;
            });
    }

    // ── 6. Contact Form Validation ──────────────────────
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            [name, email, message].forEach(el => el.classList.remove('invalid'));
            document.querySelectorAll('.field-error').forEach(el => el.style.display = 'none');

            if (!name.value.trim()) {
                name.classList.add('invalid');
                document.getElementById('nameError').style.display = 'block';
                valid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.classList.add('invalid');
                document.getElementById('emailError').style.display = 'block';
                valid = false;
            }

            if (message.value.trim().length < 10) {
                message.classList.add('invalid');
                document.getElementById('msgError').style.display = 'block';
                valid = false;
            }

            if (valid) {
                const feedback = document.getElementById('form-feedback');
                feedback.style.display = 'block';
                feedback.style.background = '#e8f5e9';
                feedback.style.color = '#2e7d32';
                feedback.innerHTML = '✓ Message sent! I\'ll get back to you soon.';
                contactForm.reset();
            }
        });
    }

    // ── 7. Scroll Animations ────────────────────────────
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

});