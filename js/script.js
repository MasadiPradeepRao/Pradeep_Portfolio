document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const boot = document.getElementById('boot-screen');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const translations = {
        en: {
            'skip-link':'Skip to content','skip-intro':'Skip intro','nav-about':'About','nav-stack':'Stack','nav-projects':'Projects','nav-education':'Education','nav-contact':'Contact','nav-lets-talk':'Let’s talk',
            'hero-eyebrow':'DEVOPS & CLOUD ENGINEER','hero-greeting':'Reliable systems.','hero-headline':'Confident releases.','hero-description':'I build cloud infrastructure and delivery pipelines that make software releases repeatable, observable, and secure.','hero-projects':'Explore projects','hero-resume':'Download résumé','hero-focus':'FOCUS','pipeline-message':'infrastructure as code · delivery automated · observability enabled','scroll-story':'SCROLL TO EXPLORE',
            'section-about':'ABOUT','about-kicker':'BUILDING THE PATH TO PRODUCTION','about-title':'Reliability is built<br>into the process.','about-lead':'I’m a DevOps and Cloud Engineer focused on AWS infrastructure, CI/CD automation, and containerized deployments.','about-copy':'I build repeatable infrastructure with Terraform, automate software delivery, and use monitoring to help teams detect issues and release with confidence. My background in telecommunication systems brings a strong foundation in networks and connected platforms.','principle-automation':'Automate the repeatable','principle-observe':'Make systems observable','principle-reliable':'Design for reliability',
            'section-stack':'STACK','stack-kicker':'TOOLS ARE ONLY PART OF THE SYSTEM','stack-title':'The toolchain,<br>declared.','stack-description':'A practical toolkit for building, securing, shipping, and observing cloud platforms.','stack-cloud':'Cloud platforms','stack-delivery':'CI/CD & GitOps','stack-runtime':'Containers & orchestration','stack-iac':'Infrastructure as Code','stack-observe':'Monitoring & observability','stack-systems':'Scripting & systems',
            'section-projects':'PROJECTS','projects-kicker':'SELECTED BUILDS','projects-title':'From commit<br>to cloud.','projects-description':'A couple of practical projects where application delivery meets infrastructure and operations.','hourlog-description':'A production-oriented time-tracking application with PostgreSQL and role-based access control. Automated build and deployment with GitHub Actions; hosted on Linux behind NGINX.','open-project':'OPEN PROJECT','cloud-project-title':'Cloud infrastructure<br>& monitoring','cloud-project-description':'Deployed OpenStack resources, configured HAProxy and NGINX load balancing, and built Prometheus and Grafana dashboards. Used load testing and automated scaling to improve availability and resource utilization.','view-repository':'VIEW REPOSITORY',
            'section-education':'EDUCATION','education-kicker':'FOUNDATIONS','education-title':'Learning that<br>connects systems.','msc-title':'Master’s in Telecommunication Systems','btech-title':'Bachelor’s in Electronics and Communication Engineering','credentials-label':'SELECTED CREDENTIALS','languages-label':'LANGUAGES',
            'section-contact':'CONTACT','contact-kicker':'PING PRADEEP RAO MASADI','contact-title':'Ready to build<br>something reliable?','contact-description':'Let’s talk about cloud infrastructure, automation, or making delivery more predictable.','contact-status':'OPEN TO A CONVERSATION','contact-button':'Start a conversation','footer-status':'BUILT WITH CARE · DEPLOYED WITH INTENT','back-top':'BACK TO TOP ↑'
        },
        sv: {
            'skip-link':'Hoppa till innehåll','skip-intro':'Hoppa över intro','nav-about':'Om mig','nav-stack':'Teknik','nav-projects':'Projekt','nav-education':'Utbildning','nav-contact':'Kontakt','nav-lets-talk':'Kontakta mig',
            'hero-eyebrow':'DEVOPS- OCH MOLNINGENJÖR','hero-greeting':'Tillförlitliga system.','hero-headline':'Trygga releaser.','hero-description':'Jag bygger molninfrastruktur och leveransflöden som gör programvarureleaser repeterbara, observerbara och säkra.','hero-projects':'Utforska projekt','hero-resume':'Ladda ner CV','hero-focus':'FOKUS','pipeline-message':'infrastruktur som kod · automatiserad leverans · aktiverad övervakning','scroll-story':'RULLA FÖR ATT UTFORSKA',
            'section-about':'OM MIG','about-kicker':'VÄGEN TILL PRODUKTION','about-title':'Tillförlitlighet byggs<br>in i processen.','about-lead':'Jag är DevOps- och molningenjör med fokus på AWS-infrastruktur, CI/CD-automatisering och containerbaserade driftsättningar.','about-copy':'Jag bygger repeterbar infrastruktur med Terraform, automatiserar programvaruleveranser och använder övervakning för att upptäcka problem och skapa trygga releaser. Min bakgrund inom telekommunikationssystem ger en stark grund inom nätverk och uppkopplade plattformar.','principle-automation':'Automatisera det repetitiva','principle-observe':'Gör system observerbara','principle-reliable':'Bygg för tillförlitlighet',
            'section-stack':'TEKNIK','stack-kicker':'VERKTYGEN ÄR EN DEL AV SYSTEMET','stack-title':'Verktygskedjan,<br>deklarerad.','stack-description':'Verktyg för att bygga, säkra, leverera och övervaka molnplattformar.','stack-cloud':'Molnplattformar','stack-delivery':'CI/CD och GitOps','stack-runtime':'Containrar och orkestrering','stack-iac':'Infrastruktur som kod','stack-observe':'Övervakning och observerbarhet','stack-systems':'Skript och system',
            'section-projects':'PROJEKT','projects-kicker':'UTVALDA BYGGEN','projects-title':'Från commit<br>till molnet.','projects-description':'Praktiska projekt där applikationsleverans möter infrastruktur och drift.','hourlog-description':'En tidsrapporteringsapplikation med PostgreSQL och rollbaserad åtkomst. Automatiserat bygge och driftsättning med GitHub Actions; körs på Linux bakom NGINX.','open-project':'ÖPPNA PROJEKT','cloud-project-title':'Molninfrastruktur<br>och övervakning','cloud-project-description':'Driftsatte OpenStack-resurser, konfigurerade lastbalansering med HAProxy och NGINX och byggde instrumentpaneler i Prometheus och Grafana. Använde belastningstester och automatisk skalning för bättre tillgänglighet och resursutnyttjande.','view-repository':'VISA REPOSITORY',
            'section-education':'UTBILDNING','education-kicker':'GRUND','education-title':'Kunskap som<br>kopplar samman system.','msc-title':'Masterexamen i telekommunikationssystem','btech-title':'Kandidatexamen i elektronik och kommunikationsteknik','credentials-label':'UTVALDA MERITER','languages-label':'SPRÅK',
            'section-contact':'KONTAKT','contact-kicker':'PING PRADEEP RAO MASADI','contact-title':'Ska vi bygga något<br>tillförlitligt?','contact-description':'Hör av dig om molninfrastruktur, automatisering eller hur leveranser kan bli mer förutsägbara.','contact-status':'ÖPPEN FÖR KONTAKT','contact-button':'Starta en konversation','footer-status':'BYGGT MED OMSORG · DRIFTSATT MED AVSIKT','back-top':'TILL TOPPEN ↑'
        }
    };
    const store = {get(key){try{return localStorage.getItem(key)}catch{return null}},set(key,value){try{localStorage.setItem(key,value)}catch{}}};

    const finishBoot = () => {
        if (!boot || boot.classList.contains('is-done')) return;
        boot.classList.add('is-done');
        window.setTimeout(() => boot.remove(), 800);
    };
    if (boot && !reducedMotion) {
        const messages = ['building asset bundle…','running quality checks…','provisioning cloud delivery…','release ready · welcome'];
        const timers = [];
        document.querySelectorAll('.pipeline-step').forEach((step,index) => timers.push(window.setTimeout(() => {
            step.classList.add('is-done');
            document.querySelector('.pipeline-track span').style.width = `${(index + 1) * 25}%`;
            document.getElementById('boot-message').textContent = messages[index];
            document.getElementById('boot-percent').textContent = `${[23,49,76,100][index]}%`;
        }, 260 + index * 430)));
        timers.push(window.setTimeout(finishBoot, 2300));
        document.querySelector('.boot-skip').addEventListener('click', () => { timers.forEach(clearTimeout); finishBoot(); });
        document.addEventListener('keydown', event => { if (event.key === 'Escape') { timers.forEach(clearTimeout); finishBoot(); } }, {once:true});
    } else finishBoot();

    const applyLanguage = lang => {
        const dictionary = translations[lang] || translations.en;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang]').forEach(element => {
            if (dictionary[element.dataset.lang]) element.innerHTML = dictionary[element.dataset.lang];
        });
        document.querySelectorAll('.lang-btn').forEach(button => button.classList.toggle('active', button.dataset.langVal === lang));
        store.set('portfolio-language',lang);
    };
    applyLanguage(store.get('portfolio-language') || 'en');
    document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click',() => applyLanguage(button.dataset.langVal)));

    const themeButton = document.querySelector('.theme-toggle');
    const setTheme = theme => {
        body.classList.toggle('dark-mode',theme === 'dark');
        themeButton.innerHTML = theme === 'dark' ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-regular fa-moon"></i>';
        themeButton.setAttribute('aria-label',theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
        document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#101713' : '#f6f8f4';
        store.set('portfolio-theme',theme);
    };
    setTheme(store.get('portfolio-theme') || 'light');
    themeButton.addEventListener('click',() => setTheme(body.classList.contains('dark-mode') ? 'light' : 'dark'));

    const menuButton = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');
    const closeMenu = () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded','false'); menuButton.setAttribute('aria-label','Open navigation'); menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>'; };
    menuButton.addEventListener('click',() => {
        const open = menu.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded',String(open));
        menuButton.setAttribute('aria-label',open ? 'Close navigation' : 'Open navigation');
        menuButton.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
    document.addEventListener('keydown',event => { if (event.key === 'Escape') closeMenu(); });

    const progress = document.querySelector('.scroll-progress span');
    const updateProgress = () => { const max = document.documentElement.scrollHeight - window.innerHeight; progress.style.transform = `scaleX(${max > 0 ? Math.max(0,Math.min(1,window.scrollY / max)) : 0})`; };
    window.addEventListener('scroll',updateProgress,{passive:true}); updateProgress();
    const revealTargets = document.querySelectorAll('.section-label,.hero-copy,.deploy-card,.stack-card,.project-card,.education-item,.credentials-row,.contact-main,.contact-side');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.12});
        revealTargets.forEach((element,index) => { element.style.setProperty('--reveal-delay',`${(index % 4) * 65}ms`); element.classList.add('reveal'); revealObserver.observe(element); });
        const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            document.querySelectorAll('.nav-menu a').forEach(link => link.classList.toggle('is-active',link.getAttribute('href') === `#${entry.target.id}`));
        }),{rootMargin:'-25% 0px -62% 0px'});
        document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
    } else revealTargets.forEach(element => element.classList.add('is-visible'));
    const nameText = document.querySelector('.name-text');
    const decodeHeroName = () => {
        if (reducedMotion || !nameText) return;
        const finalName = 'PRADEEP RAO MASADI';
        const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&';
        let started = 0;
        const drawFrame = now => {
            if (!started) started = now;
            const progress = Math.min(1,(now - started) / 1250);
            const settled = Math.floor(progress * (finalName.length + 2));
            nameText.textContent = Array.from(finalName,(character,index) => {
                if (character === ' ' || index < settled) return character;
                return glyphs[Math.floor(Math.random() * glyphs.length)];
            }).join('');
            if (progress < 1) requestAnimationFrame(drawFrame);
            else nameText.textContent = finalName;
        };
        requestAnimationFrame(drawFrame);
    };
    window.setTimeout(decodeHeroName,reducedMotion ? 0 : 2450);

    const siteHeader = document.querySelector('.site-header');
    const heroName = document.querySelector('.hero-person-name');
    const brandName = document.querySelector('.brand-name');
    const nameFlight = document.createElement('span');
    nameFlight.className = 'name-flight';
    nameFlight.textContent = 'Pradeep Rao Masadi';
    nameFlight.setAttribute('aria-hidden','true');
    body.appendChild(nameFlight);
    const updateHeaderTransition = () => {
        const scrollY = window.scrollY;
        siteHeader.classList.toggle('is-scrolled',scrollY > 24);
        if (reducedMotion) return;
        const raw = Math.max(0,Math.min(1,(scrollY - 3) / 265));
        if (raw === 0 || raw === 1) {
            nameFlight.style.opacity = '0';
            heroName.style.opacity = '';
            brandName.style.opacity = '';
            return;
        }
        const progress = raw * raw * (3 - 2 * raw);
        const from = heroName.getBoundingClientRect();
        const to = brandName.getBoundingClientRect();
        const fromStyle = getComputedStyle(heroName);
        const toStyle = getComputedStyle(brandName);
        nameFlight.style.left = `${from.left + (to.left - from.left) * progress}px`;
        nameFlight.style.top = `${from.top + (to.top - from.top) * progress}px`;
        nameFlight.style.fontSize = `${parseFloat(fromStyle.fontSize) + (parseFloat(toStyle.fontSize) - parseFloat(fromStyle.fontSize)) * progress}px`;
        nameFlight.style.width = `${from.width + (to.width - from.width) * progress}px`;
        nameFlight.style.whiteSpace = progress > .94 ? 'nowrap' : 'normal';
        nameFlight.style.lineHeight = `${parseFloat(fromStyle.lineHeight) + (parseFloat(toStyle.lineHeight) - parseFloat(fromStyle.lineHeight)) * progress}px`;
        nameFlight.style.fontWeight = fromStyle.fontWeight;
        nameFlight.style.letterSpacing = `${parseFloat(fromStyle.letterSpacing) + (parseFloat(toStyle.letterSpacing) - parseFloat(fromStyle.letterSpacing)) * progress}px`;
        nameFlight.style.fontFamily = fromStyle.fontFamily;
        nameFlight.style.color = `color-mix(in srgb, ${fromStyle.color} ${(1-progress)*100}%, ${toStyle.color})`;
        nameFlight.style.opacity = '1';
        heroName.style.opacity = '0';
        brandName.style.opacity = '0';
    };
    let headerFrame = false;
    const scheduleHeaderTransition = () => {
        if (headerFrame) return;
        headerFrame = true;
        requestAnimationFrame(() => { updateHeaderTransition(); headerFrame = false; });
    };
    window.addEventListener('scroll',scheduleHeaderTransition,{passive:true});
    window.addEventListener('resize',scheduleHeaderTransition);
    updateHeaderTransition();

    const profileCard = document.querySelector('.profile-card');
    if (profileCard && !reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let cardFrame = false;
        profileCard.addEventListener('pointermove',event => {
            if (cardFrame) return;
            cardFrame = true;
            requestAnimationFrame(() => {
                const bounds = profileCard.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - .5;
                const y = (event.clientY - bounds.top) / bounds.height - .5;
                profileCard.style.setProperty('--card-tilt-x',`${-y * 2.4}deg`);
                profileCard.style.setProperty('--card-tilt-y',`${x * 2.4}deg`);
                cardFrame = false;
            });
        });
        profileCard.addEventListener('pointerleave',() => {
            profileCard.style.setProperty('--card-tilt-x','0deg');
            profileCard.style.setProperty('--card-tilt-y','0deg');
        });
    }

    if (!reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const cursorOrb = document.createElement('span');
        cursorOrb.className = 'cursor-orb';
        cursorOrb.setAttribute('aria-hidden','true');
        body.appendChild(cursorOrb);
        let cursorFrame = false;
        document.addEventListener('pointermove',event => {
            if (cursorFrame) return;
            cursorFrame = true;
            requestAnimationFrame(() => {
                cursorOrb.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0) translate(-50%,-50%)`;
                cursorFrame = false;
            });
        },{passive:true});
        document.querySelectorAll('a,button,.profile-card').forEach(element => {
            element.addEventListener('pointerenter',() => cursorOrb.classList.add('is-over-interactive'));
            element.addEventListener('pointerleave',() => cursorOrb.classList.remove('is-over-interactive'));
        });
    }

    document.querySelectorAll('.nav-menu a,.theme-toggle,.lang-btn,.menu-toggle,.hero-actions .button,.back-top').forEach(control => {
        control.addEventListener('click',() => { if (navigator.vibrate) navigator.vibrate(8); });
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
