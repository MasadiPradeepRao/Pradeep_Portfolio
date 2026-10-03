/* 
   Project: Personal Portfolio
   Author: Pradeep Rao Masadi
   Date: 2026
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Safe Storage Wrapper ---
    const storage = {
        getItem: (key) => {
            try {
                return localStorage.getItem(key);
            } catch (e) {
                console.warn('Storage access failed:', e);
                return null;
            }
        },
        setItem: (key, value) => {
            try {
                localStorage.setItem(key, value);
            } catch (e) {
                console.warn('Storage write failed:', e);
            }
        }
    };

    // --- Language Translation Logic ---
    const content = {
        en: {
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-education": "Education",
            "nav-contact": "Contact",
            "hero-subtitle": "DevOps Engineer | Cloud Engineer",
            "hero-desc": "Building reliable cloud infrastructure and automated delivery pipelines with AWS, Kubernetes, and Infrastructure as Code.",
            "hero-btn-projects": "View Projects",
            "hero-btn-resume": "Download Resume/CV",
            "about-title": "About Me",
            "about-p1": "I am a DevOps and Cloud Engineer focused on AWS infrastructure, CI/CD automation, and containerized deployments. I build repeatable infrastructure with Terraform, automate delivery pipelines, and monitor cloud systems for reliability.",
            "about-interests-label": "Career Interests:",
            "about-interests-list": "AWS, DevOps, CI/CD, Kubernetes, Infrastructure as Code, and Cloud Reliability.",
            "skills-title": "Skills & Technologies",
            "skills-prog": "💻 Programming Languages",
            "skills-cloud": "☁️ Cloud & DevOps",
            "skills-monitoring": "🔍 Monitoring & Observability",

            "projects-title": "Projects",
            "skills-deployment": "🚀 DevOps & CI/CD",
            "btn-view-project": "View Project",
            "education-title": "Education",
            "edu-msc": "Master’s in Telecommunication Systems",
            "edu-btech": "Bachelor’s in Electronics and Communication Engineering",
            "publication-title": "Publications",
            "btn-show-pub": "Show Publication",
            "certification-title": "Certifications",
            "btn-show-cert": "Show Certificate",
            "contact-title": "Contact Me",
            "label-name": "Name",
            "label-email": "Email ID",
            "label-message": "Message",
            "ph-name": "Your Name",
            "ph-email": "Your Email",
            "ph-message": "Your Message (Max 1000 words)",
            "btn-send": "Send Message",
            "btn-view-pub": "View Publication"
        },
        sv: {
            "nav-about": "Om mig",
            "nav-skills": "Kompetenser",
            "nav-projects": "Projekt",
            "nav-education": "Utbildning",
            "nav-contact": "Kontakt",
            "hero-subtitle": "DevOps Engineer | Molningenjör",
            "hero-desc": "Bygger tillförlitlig molninfrastruktur och automatiserade leveransflöden med AWS, Kubernetes och Infrastructure as Code.",
            "hero-btn-projects": "Visa projekt",
            "hero-btn-resume": "Ladda ner CV",
            "about-title": "Om mig",
            "about-p1": "Jag är DevOps- och molningenjör med fokus på AWS-infrastruktur, CI/CD-automatisering och containerbaserade driftsättningar. Jag bygger repeterbar infrastruktur med Terraform, automatiserar leveransflöden och övervakar molnsystem för tillförlitlighet.",
            "about-interests-label": "Karriärintressen:",
            "about-interests-list": "AWS, DevOps, CI/CD, Kubernetes, Infrastructure as Code och molntillförlitlighet.",
            "skills-title": "Kompetenser & teknologier",
            "skills-prog": "💻 Programmeringsspråk",
            "skills-cloud": "☁️ Moln & DevOps",
            "skills-monitoring": "🔍 Övervakning & Observerbarhet",

            "projects-title": "Projekt",
            "skills-deployment": "🚀 DevOps & CI/CD",
            "btn-view-project": "Visa projekt",
            "education-title": "Utbildning",
            "edu-msc": "Masterexamen i telekommunikationssystem",
            "edu-btech": "Kandidatexamen i elektronik och kommunikationsteknik",
            "publication-title": "Publikationer",
            "btn-show-pub": "Visa publikation",
            "certification-title": "Certifieringar",
            "btn-show-cert": "Visa certifikat",
            "contact-title": "Kontakta mig",
            "label-name": "Namn",
            "label-email": "E-post",
            "label-message": "Meddelande",
            "ph-name": "Ditt namn",
            "ph-email": "Din e-post",
            "ph-message": "Ditt meddelande (max 1000 ord)",
            "btn-send": "Skicka meddelande",
            "btn-view-pub": "Visa publikation"
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');

    // Function to switch language
    const switchLanguage = (lang) => {
        // Update Content
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            if (content[lang][key]) {
                // If it's a button with an icon, we preserve the icon
                if (el.querySelector('i')) {
                    const icon = el.querySelector('i').outerHTML;
                    // Replace only text content
                    // We reconstruct the HTML to include the icon
                    el.innerHTML = `${icon} ${content[lang][key]}`;
                } else {
                    // Regular text
                    el.textContent = content[lang][key];
                }
            }
        });

        // Update Placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
            if (content[lang][key]) {
                el.placeholder = content[lang][key];
            }
        });

        // Update Toggle Buttons UI
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang-val') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Persist selection
        storage.setItem('language', lang);
    };

    // Initialize Language
    const savedLang = storage.getItem('language') || 'en'; // Default to English
    switchLanguage(savedLang);

    // Event Listeners for Buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-val');
            switchLanguage(lang);
        });
    });

    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Optional: Toggle icon between hamburger and close
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // --- Close Mobile Menu on Link Click ---
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // --- Active Link Highlighting & Sticky Navbar Shadow ---
    const sections = document.querySelectorAll('section, header#hero');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const activeLinkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                navLinksItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${currentId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-20% 0px -50% 0px" // Adjust for sticky header
    });

    sections.forEach(section => activeLinkObserver.observe(section));

    // --- Scroll Fade-in Animation ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section-title, .skill-card, .project-card, .about-content p, .education-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Helper class for animation triggers
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // --- Hero Name Scroll Transformation ---
    const heroNameFull = document.querySelector('.hero-name-full');
    const navbarLogo = document.querySelector('.logo');

    if (heroNameFull && navbarLogo) {
        navbarLogo.style.opacity = '0';

        let startRect, endRect;

        function updatePositions() {
            heroNameFull.style.transform = 'none';
            navbarLogo.style.opacity = '1';

            const scroll = window.scrollY;
            const r1 = heroNameFull.getBoundingClientRect();
            const r2 = navbarLogo.getBoundingClientRect();

            startRect = {
                top: r1.top + scroll,
                left: r1.left,
                width: r1.width,
                fontSize: parseFloat(window.getComputedStyle(heroNameFull).fontSize)
            };

            endRect = {
                top: r2.top + scroll,
                left: r2.left,
                fontSize: parseFloat(window.getComputedStyle(navbarLogo).fontSize)
            };

            // Reset
            navbarLogo.style.opacity = '0';
        }

        window.addEventListener('load', updatePositions);
        window.addEventListener('resize', updatePositions);

        window.addEventListener('scroll', () => {
            if (!startRect || !endRect) return;

            const scrollY = window.scrollY;
            const animationDistance = 300;
            let progress = Math.min(scrollY / animationDistance, 1);

            if (progress >= 1) {
                heroNameFull.style.opacity = '0';
                navbarLogo.style.opacity = '1';
                heroNameFull.style.transform = `none`;
                return;
            }

            heroNameFull.style.opacity = '1';
            navbarLogo.style.opacity = '0';

            const currentLogoRect = navbarLogo.getBoundingClientRect();

            const currentHeroY = startRect.top - scrollY;
            const currentHeroX = startRect.left;

            const targetX = currentLogoRect.left;
            const targetY = currentLogoRect.top;

            const deltaX = targetX - currentHeroX;
            const deltaY = targetY - currentHeroY;

            const scale = startRect.fontSize ? endRect.fontSize / startRect.fontSize : 0.5;
            const currentScale = 1 + (scale - 1) * progress;

            const currentDeltaX = deltaX * progress;
            const currentDeltaY = deltaY * progress;

            heroNameFull.style.transformOrigin = '0 0';
            heroNameFull.style.transform = `translate(${currentDeltaX}px, ${currentDeltaY}px) scale(${currentScale})`;
        });
    }

    // --- Contact Form Handler (Formspree AJAX) ---
    const contactForm = document.getElementById('contact-form');
    const contactStatus = document.getElementById('contact-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);

            // UI Feedback: Disable button to prevent double submits
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitButton.innerText;
            submitButton.disabled = true;
            submitButton.innerText = 'Sending...';

            // Reset status
            contactStatus.style.display = 'none';
            contactStatus.className = 'contact-status'; // Reset classes

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success
                    contactStatus.innerText = "Thank you! I'll get back to you soon.";
                    contactStatus.classList.add('success');
                    contactStatus.style.display = 'block'; // Force display
                    contactForm.reset(); // Clear form
                } else {
                    // Error from server
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        contactStatus.innerText = data.errors.map(error => error.message).join(", ");
                    } else {
                        contactStatus.innerText = "Oops! There was a problem sending your message.";
                    }
                    contactStatus.classList.add('error');
                    contactStatus.style.display = 'block'; // Force display
                }
            } catch (error) {
                // Network error
                contactStatus.innerText = "Oops! There was a network problem. Please try again later.";
                contactStatus.classList.add('error');
                contactStatus.style.display = 'block'; // Force display
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.innerText = originalBtnText;
            }
        });
    }

    // --- DARK MODE TOGGLE ---
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    if (themeToggle) {
        const icon = themeToggle.querySelector('i');

        // Check Local Storage or System Preference
        const savedTheme = storage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            body.classList.add('dark-mode');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            // Update Icon & Save
            if (body.classList.contains('dark-mode')) {
                if (icon) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                }
                storage.setItem('theme', 'dark');
            } else {
                if (icon) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
                storage.setItem('theme', 'light');
            }
        });
    }
});
