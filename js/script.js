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
            'section-contact':'CONTACT','contact-kicker':'PING PRADEEP@CLOUD','contact-title':'Ready to build<br>something reliable?','contact-description':'Let’s talk about cloud infrastructure, automation, or making delivery more predictable.','contact-status':'OPEN TO A CONVERSATION','contact-button':'Start a conversation','footer-status':'BUILT WITH CARE · DEPLOYED WITH INTENT','back-top':'BACK TO TOP ↑'
        },
        sv: {
            'skip-link':'Hoppa till innehåll','skip-intro':'Hoppa över intro','nav-about':'Om mig','nav-stack':'Teknik','nav-projects':'Projekt','nav-education':'Utbildning','nav-contact':'Kontakt','nav-lets-talk':'Kontakta mig',
            'hero-eyebrow':'DEVOPS- OCH MOLNINGENJÖR','hero-greeting':'Tillförlitliga system.','hero-headline':'Trygga releaser.','hero-description':'Jag bygger molninfrastruktur och leveransflöden som gör programvarureleaser repeterbara, observerbara och säkra.','hero-projects':'Utforska projekt','hero-resume':'Ladda ner CV','hero-focus':'FOKUS','pipeline-message':'infrastruktur som kod · automatiserad leverans · aktiverad övervakning','scroll-story':'RULLA FÖR ATT UTFORSKA',
            'section-about':'OM MIG','about-kicker':'VÄGEN TILL PRODUKTION','about-title':'Tillförlitlighet byggs<br>in i processen.','about-lead':'Jag är DevOps- och molningenjör med fokus på AWS-infrastruktur, CI/CD-automatisering och containerbaserade driftsättningar.','about-copy':'Jag bygger repeterbar infrastruktur med Terraform, automatiserar programvaruleveranser och använder övervakning för att upptäcka problem och skapa trygga releaser. Min bakgrund inom telekommunikationssystem ger en stark grund inom nätverk och uppkopplade plattformar.','principle-automation':'Automatisera det repetitiva','principle-observe':'Gör system observerbara','principle-reliable':'Bygg för tillförlitlighet',
            'section-stack':'TEKNIK','stack-kicker':'VERKTYGEN ÄR EN DEL AV SYSTEMET','stack-title':'Verktygskedjan,<br>deklarerad.','stack-description':'Verktyg för att bygga, säkra, leverera och övervaka molnplattformar.','stack-cloud':'Molnplattformar','stack-delivery':'CI/CD och GitOps','stack-runtime':'Containrar och orkestrering','stack-iac':'Infrastruktur som kod','stack-observe':'Övervakning och observerbarhet','stack-systems':'Skript och system',
            'section-projects':'PROJEKT','projects-kicker':'UTVALDA BYGGEN','projects-title':'Från commit<br>till molnet.','projects-description':'Praktiska projekt där applikationsleverans möter infrastruktur och drift.','hourlog-description':'En tidsrapporteringsapplikation med PostgreSQL och rollbaserad åtkomst. Automatiserat bygge och driftsättning med GitHub Actions; körs på Linux bakom NGINX.','open-project':'ÖPPNA PROJEKT','cloud-project-title':'Molninfrastruktur<br>och övervakning','cloud-project-description':'Driftsatte OpenStack-resurser, konfigurerade lastbalansering med HAProxy och NGINX och byggde instrumentpaneler i Prometheus och Grafana. Använde belastningstester och automatisk skalning för bättre tillgänglighet och resursutnyttjande.','view-repository':'VISA REPOSITORY',
            'section-education':'UTBILDNING','education-kicker':'GRUND','education-title':'Kunskap som<br>kopplar samman system.','msc-title':'Masterexamen i telekommunikationssystem','btech-title':'Kandidatexamen i elektronik och kommunikationsteknik','credentials-label':'UTVALDA MERITER','languages-label':'SPRÅK',
            'section-contact':'KONTAKT','contact-kicker':'PING PRADEEP@CLOUD','contact-title':'Ska vi bygga något<br>tillförlitligt?','contact-description':'Hör av dig om molninfrastruktur, automatisering eller hur leveranser kan bli mer förutsägbara.','contact-status':'ÖPPEN FÖR KONTAKT','contact-button':'Starta en konversation','footer-status':'BYGGT MED OMSORG · DRIFTSATT MED AVSIKT','back-top':'TILL TOPPEN ↑'
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
    const updateProgress = () => { const max = document.documentElement.scrollHeight - window.innerHeight; progress.style.width = `${max > 0 ? window.scrollY / max * 100 : 0}%`; };
    window.addEventListener('scroll',updateProgress,{passive:true}); updateProgress();
    const revealTargets = document.querySelectorAll('.section-label,.hero-copy,.deploy-card,.stack-card,.project-card,.education-item,.credentials-row,.contact-main,.contact-side');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }),{threshold:.12});
        revealTargets.forEach(element => { element.classList.add('reveal'); revealObserver.observe(element); });
        const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            document.querySelectorAll('.nav-menu a').forEach(link => link.classList.toggle('is-active',link.getAttribute('href') === `#${entry.target.id}`));
        }),{rootMargin:'-25% 0px -62% 0px'});
        document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
    } else revealTargets.forEach(element => element.classList.add('is-visible'));
    document.getElementById('year').textContent = new Date().getFullYear();
});
