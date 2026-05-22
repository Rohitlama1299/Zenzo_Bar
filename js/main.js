document.getElementById("contact-form").addEventListener("submit", function(e) {
  let valid = true;

  // Name Validation
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (name.value.trim() === '') {
    nameError.classList.remove("hidden");
    valid = false;
  } else {
    nameError.classList.add("hidden");
  }

  // Email Validation
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email.value)) {
    emailError.classList.remove("hidden");
    valid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Subject Validation
  const subject = document.getElementById("subject");
  const subjectError = document.getElementById("subjectError");
  if (subject.value === '') {
    subjectError.classList.remove("hidden");
    valid = false;
  } else {
    subjectError.classList.add("hidden");
  }

  // Message Validation
  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  if (message.value.trim() === '') {
    messageError.classList.remove("hidden");
    valid = false;
  } else {
    messageError.classList.add("hidden");
  }

  if (!valid) {
    e.preventDefault(); // Stop form from submitting if invalid
  }
});
 // Language Translation System
 
const translations = {
  
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.vip": "VIP",
    "nav.about": "About",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.subtitle": "Brugge's newest nightlife destination where music, luxury, and unforgettable experiences come together.",
    "hero.vipButton": "VIP Experience",
    "hero.contactButton": "Contact Us",
    
    // Gallery Section
    "gallery.title": "Gallery",
    "gallery.subtitle": "Experience the vibrant atmosphere of Zenzo through our visual journey of unforgettable nights.",
    
    // VIP Section
    "vip.title": "VIP",
    "vip.experience": "Experience",
    "vip.subtitle": "Elevate your night with our exclusive VIP services designed for those who demand the best.",
    "vip.bottleService.title": "Premium Bottle Service",
    "vip.bottleService.description": "Enjoy our selection of premium spirits and champagne served at your private table.",
    "vip.bottleService.benefit1": "Exclusive liquor selection including Dom Pérignon",
    "vip.bottleService.benefit2": "Personalized mixology service",
    "vip.bottleService.benefit3": "Dedicated VIP host",
    "vip.lounge.title": "Private Lounge",
    "vip.lounge.description": "Exclusive lounge areas with privacy and the best views.",
    "vip.lounge.benefit1": "Reserved luxury seating",
    "vip.lounge.benefit2": "Private VIP entrance",
    "vip.lounge.benefit3": "Premium sound system",
    "vip.party.title": "Private Party",
    "vip.party.description": "Host unforgettable events with our private party packages.",
    "vip.party.benefit1": "Dedicated event coordinator",
    "vip.party.benefit2": "Customizable music and lighting",
    "vip.party.benefit3": "Exclusive VIP area access",
    "vip.cta": "Enquire About VIP",
    
    // About Section
    "about.title": "About",
    "about.description1": "Zenzo is Brugge's newest and most exciting nightlife destination, opening its doors to create unforgettable nights. Our vision is to blend cutting-edge music, sophisticated design, and exceptional service.",
    "about.description2": "Featuring a state-of-the-art sound system, immersive lighting design, and carefully curated international DJ talent, Zenzo is set to become the heartbeat of Brugge's nightlife scene.",
    "about.established": "Established",
    "about.vipAreas": "VIP Areas",
    "about.capacity": "Capacity",
    "about.security": "Security",
    "about.premiumTitle": "Premium Experience",
    "about.premiumSubtitle": "Where luxury meets entertainment",
    
    // Contact Section
    "contact.title": "Contact",
    "contact.us": "Us",
    "contact.subtitle": "Get in touch for VIP reservations, private events, or any inquiries about our club.",
    "contact.form.name": "Full Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email Address",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "Select a subject",
    "contact.form.subjectVIP": "VIP Reservations",
    "contact.form.subjectEvents": "Private Events",
    "contact.form.subjectGeneral": "General Inquiry",
    "contact.form.subjectOther": "Other",
    "contact.form.message": "Your Message",
    "contact.form.messagePlaceholder": "Tell us about your inquiry...",
    "contact.infoTitle": "Club Information",
    "contact.infoLocation": "Location",
    "contact.infoPhone": "Phone",
    "contact.infoEmail": "Email",
    "contact.infoHours": "Opening Hours",
    "contact.infoFollow": "Follow Us",
    
    // Footer
    "footer.description": "Brugge's newest premier nightlife destination where music and unforgettable experiences come together.",
    "footer.linksTitle": "Quick Links",
    "footer.contactTitle": "Contact Info",
    "footer.rights": "All Rights Reserved",
    
    // Language Selector
    "language": "Language",
    "nameError": "Name is required.",
    "emailError": "Please enter a valid email address.",
    "phoneError": "Please enter a valid phone number.",
    "subjectError": "Please select a subject.",
    "messageError": "Message is required."
  },
  nl: {
    // Navigation
    "nav.home": "Home",
    "nav.gallery": "Galerij",
    "nav.vip": "VIP",
    "nav.about": "Over Ons",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.subtitle": "Brugge's nieuwste nachtlevenbestemming waar muziek, luxe en onvergetelijke ervaringen samenkomen.",
    "hero.vipButton": "VIP Ervaring",
    "hero.contactButton": "Contacteer Ons",
    
    // Gallery Section
    "gallery.title": "Galerij",
    "gallery.subtitle": "Ervaar de levendige sfeer van Zenzo door onze visuele reis van onvergetelijke nachten.",
    
    // VIP Section
    "vip.title": "VIP",
    "vip.experience": "Ervaring",
    "vip.subtitle": "Verhoog uw nacht met onze exclusieve VIP-diensten ontworpen voor wie het beste eist.",
    "vip.bottleService.title": "Premium Flessen Service",
    "vip.bottleService.description": "Geniet van onze selectie premium likeuren en champagne geserveerd aan uw privétafel.",
    "vip.bottleService.benefit1": "Exclusieve likeurselectie inclusief Dom Pérignon",
    "vip.bottleService.benefit2": "Gepersonaliseerde mixologie service",
    "vip.bottleService.benefit3": "Toegewijde VIP-host",
    "vip.lounge.title": "Privé Lounge",
    "vip.lounge.description": "Exclusieve loungegebieden met privacy en de beste uitzichten.",
    "vip.lounge.benefit1": "Gereserveerde luxe zitplaatsen",
    "vip.lounge.benefit2": "Privé VIP-ingang",
    "vip.lounge.benefit3": "Premium geluidssysteem",
    "vip.party.title": "Privé Feest",
    "vip.party.description": "Organiseer onvergetelijke evenementen met onze privéfeestpakketten.",
    "vip.party.benefit1": "Toegewijde evenementencoördinator",
    "vip.party.benefit2": "Aanpasbare muziek en verlichting",
    "vip.party.benefit3": "Exclusieve toegang tot VIP-gebied",
    "vip.cta": "Vraag naar VIP",
    
    // About Section
    "about.title": "Over",
    "about.description1": "Zenzo is Brugge's nieuwste en meest opwindende nachtlevenbestemming, die zijn deuren opent om onvergetelijke nachten te creëren. Onze visie is om cutting-edge muziek, verfijnd design en uitzonderlijke service te combineren.",
    "about.description2": "Met een state-of-the-art geluidssysteem, meeslepende lichtontwerpen en zorgvuldig gecureerd internationaal DJ-talent, staat Zenzo klaar om het kloppende hart van Brugge's nachtleven te worden.",
    "about.established": "Opgericht",
    "about.vipAreas": "VIP Gebieden",
    "about.capacity": "Capaciteit",
    "about.security": "Beveiliging",
    "about.premiumTitle": "Premium Ervaring",
    "about.premiumSubtitle": "Waar luxe en entertainment samenkomen",
    
    // Contact Section
    "contact.title": "Contact",
    "contact.us": "Ons",
    "contact.subtitle": "Neem contact op voor VIP-reserveringen, privé-evenementen of andere vragen over onze club.",
    "contact.form.name": "Volledige Naam",
    "contact.form.namePlaceholder": "Uw naam",
    "contact.form.email": "E-mailadres",
    "contact.form.emailPlaceholder": "uw@email.com",
    "contact.form.subject": "Onderwerp",
    "contact.form.subjectPlaceholder": "Selecteer een onderwerp",
    "contact.form.subjectVIP": "VIP Reservaties",
    "contact.form.subjectEvents": "Privé Evenementen",
    "contact.form.subjectGeneral": "Algemene Vraag",
    "contact.form.subjectOther": "Anders",
    "contact.form.message": "Uw Bericht",
    "contact.form.messagePlaceholder": "Vertel ons over uw vraag...",
    "contact.form.submit": "Verstuur Bericht",
    "contact.infoTitle": "Club Informatie",
    "contact.infoLocation": "Locatie",
    "contact.infoPhone": "Telefoon",
    "contact.infoEmail": "E-mail",
    "contact.infoHours": "Openingsuren",
    "contact.infoFollow": "Volg Ons",
    
    // Footer
    "footer.description": "Brugge's nieuwste premium nachtlevenbestemming waar muziek en onvergetelijke ervaringen samenkomen.",
    "footer.linksTitle": "Snelle Links",
    "footer.contactTitle": "Contact Info",
    "footer.rights": "Alle Rechten Voorbehouden",
    
    // Language Selector
    "language": "Taal",
    "nameError": "Naam is verplicht.",
    "emailError": "Voer een geldig e-mailadres in.",
    "phoneError": "Voer een geldig telefoonnummer in.",
    "subjectError": "Selecteer een onderwerp.",
    "messageError": "Bericht is verplicht."
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.gallery": "Galerie",
    "nav.vip": "VIP",
    "nav.about": "À Propos",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.subtitle": "La nouvelle destination nightlife de Bruges où la musique, le luxe et des expériences inoubliables se rencontrent.",
    "hero.vipButton": "Expérience VIP",
    "hero.contactButton": "Contactez-Nous",
    
    // Gallery Section
    "gallery.title": "Galerie",
    "gallery.subtitle": "Découvrez l'atmosphère vibrante de Zenzo à travers notre voyage visuel de nuits inoubliables.",
    
    // VIP Section
    "vip.title": "VIP",
    "vip.experience": "Expérience",
    "vip.subtitle": "Élevez votre soirée avec nos services VIP exclusifs conçus pour ceux qui exigent le meilleur.",
    "vip.bottleService.title": "Service Premium en Bouteille",
    "vip.bottleService.description": "Profitez de notre sélection de spiritueux premium et de champagne servis à votre table privée.",
    "vip.bottleService.benefit1": "Sélection exclusive d'alcools incluant Dom Pérignon",
    "vip.bottleService.benefit2": "Service de mixologie personnalisé",
    "vip.bottleService.benefit3": "Hôte VIP dédié",
    "vip.lounge.title": "Lounge Privé",
    "vip.lounge.description": "Espaces lounge exclusifs avec intimité et les meilleures vues.",
    "vip.lounge.benefit1": "Sièges de luxe réservés",
    "vip.lounge.benefit2": "Entrée VIP privée",
    "vip.lounge.benefit3": "Système audio premium",
    "vip.party.title": "Soirée Privée",
    "vip.party.description": "Organisez des événements inoubliables avec nos forfaits de soirée privée.",
    "vip.party.benefit1": "Coordinateur d'événements dédié",
    "vip.party.benefit2": "Musique et éclairage personnalisables",
    "vip.party.benefit3": "Accès exclusif à l'espace VIP",
    "vip.cta": "Renseignements VIP",
    
    // About Section
    "about.title": "À Propos",
    "about.description1": "Zenzo est la destination nightlife la plus récente et excitante de Bruges, ouvrant ses portes pour créer des nuits inoubliables. Notre vision est de mélanger musique de pointe, design sophistiqué et service exceptionnel.",
    "about.description2": "Avec un système son de pointe, un design d'éclairage immersif et des talents de DJ internationaux soigneusement sélectionnés, Zenzo est prêt à devenir le cœur battant de la scène nightlife de Bruges.",
    "about.established": "Établi",
    "about.vipAreas": "Zones VIP",
    "about.capacity": "Capacité",
    "about.security": "Sécurité",
    "about.premiumTitle": "Expérience Premium",
    "about.premiumSubtitle": "Où le luxe rencontre le divertissement",
    
    // Contact Section
    "contact.title": "Contact",
    "contact.us": "Nous",
    "contact.subtitle": "Contactez-nous pour des réservations VIP, événements privés ou toute demande concernant notre club.",
    "contact.form.name": "Nom Complet",
    "contact.form.namePlaceholder": "Votre nom",
    "contact.form.email": "Adresse Email",
    "contact.form.emailPlaceholder": "votre@email.com",
    "contact.form.subject": "Sujet",
    "contact.form.subjectPlaceholder": "Sélectionnez un sujet",
    "contact.form.subjectVIP": "Réservations VIP",
    "contact.form.subjectEvents": "Événements Privés",
    "contact.form.subjectGeneral": "Demande Générale",
    "contact.form.subjectOther": "Autre",
    "contact.form.message": "Votre Message",
    "contact.form.messagePlaceholder": "Parlez-nous de votre demande...",
    "contact.form.submit": "Envoyer le Message",
    "contact.infoTitle": "Informations du Club",
    "contact.infoLocation": "Emplacement",
    "contact.infoPhone": "Téléphone",
    "contact.infoEmail": "Email",
    "contact.infoHours": "Heures d'Ouverture",
    "contact.infoFollow": "Suivez-Nous",
    
    // Footer
    "footer.description": "La nouvelle destination nightlife premium de Bruges où la musique et des expériences inoubliables se rencontrent.",
    "footer.linksTitle": "Liens Rapides",
    "footer.contactTitle": "Informations de Contact",
    "footer.rights": "Tous Droits Réservés",
    // Language Selector
    "language": "Langue",
    "nameError": "Le nom est requis.",
    "emailError": "Veuillez saisir une adresse e-mail valide.",
    "phoneError": "Veuillez saisir un numéro de téléphone valide.",
    "subjectError": "Veuillez sélectionner un sujet.",
    "messageError": "Le message est requis."
  }
};


translations.en["contact.form.phone"] = "Phone Number";
translations.en["contact.form.phonePlaceholder"] = "Your phone number";
translations.nl["contact.form.phone"] = "Telefoonnummer";
translations.nl["contact.form.phonePlaceholder"] = "Uw telefoonnummer";
translations.fr["contact.form.phone"] = "Numéro de téléphone";
translations.fr["contact.form.phonePlaceholder"] = "Votre numéro de téléphone";

// Add to your existing translations object
translations.en["nav.lostFound"] = "Lost & Found";
translations.en["contact.form.subjectLostFound"] = "Lost & Found";

translations.nl["nav.lostFound"] = "Verloren Voorwerpen";
translations.nl["contact.form.subjectLostFound"] = "Verloren Voorwerpen";

translations.fr["nav.lostFound"] = "Objets Trouvés";
translations.fr["contact.form.subjectLostFound"] = "Objets Trouvés";


translations.en["contact.infoHoursDetails"] = "Monday - Sunday : 2 PM - 5 AM";
translations.nl["contact.infoHoursDetails"] = "Mandag - Zondag : 2u - 5u";
translations.fr["contact.infoHoursDetails"] = "Lundi - Dimanche : 2h - 5h";


translations.en["contact.infoHoursDetails2"] = "Monday - Tuesday: Closed";
translations.nl["contact.infoHoursDetails2"] = "Maandag - Dinsdag: Gesloten";
translations.fr["contact.infoHoursDetails2"] = "Lundi - Mardi: Fermé";

// Language Management
let currentLanguage = 'en';

function setLanguage(lang) {
  if (translations[lang]) {
    currentLanguage = lang;

    // Update current language indicator
    document.getElementById('current-lang').textContent = lang.toUpperCase();

    // Update flag icon
    const flagMap = {
      en: 'gb',
      nl: 'nl',
      fr: 'fr'
    };
    const flagCode = flagMap[lang] || 'gb';
    const flagImg = document.getElementById('current-lang-flag');
    if (flagImg) {
      flagImg.src = `https://flagcdn.com/${flagCode}.svg`;
      flagImg.alt = lang.toUpperCase();
    }
    

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });


    // Update all placeholder elements with data-translate-placeholder attribute
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translations[lang][key]) {
        element.setAttribute('placeholder', translations[lang][key]);
      }
    });
    
    // Update all option elements with data-translate attribute inside select elements
    document.querySelectorAll('select option[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Update current language indicator
    document.getElementById('current-lang').textContent = lang.toUpperCase();
    
    // Save language preference to localStorage
    localStorage.setItem('zenzo-language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }
}

function initLanguage() {
  const savedLanguage = localStorage.getItem('zenzo-language');
  if (savedLanguage && translations[savedLanguage]) {
    setLanguage(savedLanguage);
  } else {
    setLanguage('nl'); // Default to Nederlands if no saved language
  }
}

// Set up language selector event listeners
function setupLanguageSelectors() {
  // Desktop dropdown - prevent dropdown from closing too quickly
  document.querySelectorAll('.language-dropdown a').forEach(link => {
    link.addEventListener('mousedown', function(e) {
      e.preventDefault();
    });
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
      dropdown.style.display = 'none';
    });
  });

  // Mobile buttons
  document.querySelectorAll('.language-btn').forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Improved dropdown hover logic
  const languageSelector = document.querySelector('.language-selector');
  const dropdown = document.querySelector('.language-dropdown');
  let dropdownTimeout;

  if (languageSelector && dropdown) {
    languageSelector.addEventListener('mouseenter', function() {
      clearTimeout(dropdownTimeout);
      dropdown.style.display = 'block';
    });
    languageSelector.addEventListener('mouseleave', function() {
      dropdownTimeout = setTimeout(() => {
        dropdown.style.display = 'none';
      }, 200);
    });
    dropdown.addEventListener('mouseenter', function() {
      clearTimeout(dropdownTimeout);
      dropdown.style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', function() {
      dropdownTimeout = setTimeout(() => {
        dropdown.style.display = 'none';
      }, 200);
    });
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  initLanguage();
  setupLanguageSelectors();
});

    // Custom Cursor System
    let cursor = document.querySelector('.cursor');
    let cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      
      requestAnimationFrame(animateFollower);
    }
    
    animateFollower();

    // Magnetic Button Effects
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
      btn.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });
      
      btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0px, 0px)';
      });
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
const newMobileMenu = document.getElementById('new-mobile-menu');
const newCloseMobileMenu = document.getElementById('new-close-mobile-menu');

mobileMenuButton.addEventListener('click', function() {
  newMobileMenu.style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
});

newCloseMobileMenu.addEventListener('click', function() {
  newMobileMenu.style.transform = 'translateX(100%)';
  document.body.style.overflow = '';
});

// Close menu when clicking a link
newMobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function() {
    newMobileMenu.style.transform = 'translateX(100%)';
    document.body.style.overflow = '';
  });
});

// Language buttons
newMobileMenu.querySelectorAll('.language-btn').forEach(button => {
  button.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    setLanguage(lang);
    newMobileMenu.style.transform = 'translateX(100%)';
    document.body.style.overflow = '';
  });
});

    // Navbar scroll effects and progress bar
    const nav = document.getElementById("navbar");
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener("scroll", () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollProgress.style.width = scrollPercentage + '%';
      
      if (window.scrollY > 50) {
        nav.classList.add("bg-black/90", "backdrop-blur-md", "shadow-2xl");
      } else {
        nav.classList.remove("bg-black/90", "backdrop-blur-md", "shadow-2xl");
      }
      
      // Back to top button
      const backToTop = document.getElementById('back-to-top');
      if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');
      } else {
        backToTop.classList.remove('opacity-100', 'visible');
        backToTop.classList.add('opacity-0', 'invisible');
      }
    });

    // Particle System
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      const particleBg = document.querySelector('.particle-bg');
      if (particleBg) {
        particleBg.appendChild(particle);
        
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 20000);
      }
    }
    
    // Create particles periodically
    setInterval(createParticle, 500);

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        const hashIndex = href.indexOf('#');
        const targetId = hashIndex !== -1 ? href.substring(hashIndex + 1).split('?')[0] : href.split('?')[0];
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    // Handle Lost & Found link clicks
    document.querySelectorAll('a[href="#contact?type=lost-found"]').forEach(link => {
      link.addEventListener('click', function() {
        setTimeout(() => {
          const subjectSelect = document.getElementById('subject');
          if (subjectSelect) {
            subjectSelect.value = 'lost-found';
          }
        }, 100);
      });
    });

       // Intersection Observer for Animations
    const sections = document.querySelectorAll('.section');
    const textReveals = document.querySelectorAll('.text-reveal');
    
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { 
      threshold: 0.15, 
      rootMargin: '0px 0px -50px 0px' 
    });

    sections.forEach(section => {
      scrollObserver.observe(section);
    });
    
    textReveals.forEach(reveal => {
      scrollObserver.observe(reveal);
    });

    // 3D Card Effects
    document.querySelectorAll('.card-3d').forEach(card => {
      card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        const cardInner = this.querySelector('.card-inner');
        if (cardInner) {
          cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });
      
      card.addEventListener('mouseleave', function() {
        const cardInner = this.querySelector('.card-inner');
        if (cardInner) {
          cardInner.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
      });
    });

    // Ripple Effect
    document.querySelectorAll('.ripple').forEach(button => {
      button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}px;
          top: ${y}px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
       document.head.appendChild(style);

    // Enhanced Form Handling

    // Counter Animation for About Section
    function animateCounters() {
      const counters = document.querySelectorAll('[data-count]');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        if (target && !counter.classList.contains('animated')) {
          counter.classList.add('animated');
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const displayValue = Math.floor(current);
            if (counter.textContent.includes('+')) {
              counter.textContent = displayValue + '+';
            } else if (counter.textContent.includes('/')) {
              counter.textContent = displayValue + '/7';
            } else {
              counter.textContent = displayValue;
            }
          }, 50);
        }
      });
    }

    // Trigger counter animation when about section is visible
    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
        }
      });
    }, { threshold: 0.5 });

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutObserver.observe(aboutSection);
    }

    // Enhanced Form Input Effects
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 10px 25px rgba(255, 77, 0, 0.2)';
      });
      
      input.addEventListener('blur', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
      });
    });

    // Initialize animations on page load
    document.addEventListener('DOMContentLoaded', function() {
      // Trigger hero text animations
      setTimeout(() => {
        document.querySelectorAll('#home .text-reveal').forEach((element, index) => {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 200);
        });
      }, 500);

      // Start particle system
      for (let i = 0; i < 3; i++) {
        setTimeout(createParticle, i * 1000);
      }
    });

    // Parallax effect for hero section
    const heroImg = document.querySelector('#home img');
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (heroImg) {
        heroImg.style.transform = `translateY(${rate}px)`;
      }
    });

    console.log('🎉 Zenzo Nightclub Enhanced Experience Loaded! 🎊');

   
// Replace your contact form submit handler with this version

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    // Save the original form HTML
    const originalFormHTML = contactForm.innerHTML;

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = new FormData(contactForm);

      fetch('https://formspree.io/f/mblzkkvn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          contactForm.reset();
          contactForm.innerHTML = `
            <div class="text-center py-8">
              <h3 class="text-2xl font-bold text-primary-400 mb-4">Thank you!</h3>
              <p class="text-gray-300">Your message has been sent. We will get back to you soon.</p>
            </div>
          `;
          // Restore the form after 5 seconds
          setTimeout(() => {
            contactForm.innerHTML = originalFormHTML;
          }, 4000);
        } else {
          response.json().then(data => {
            alert(data.error || "Sorry, there was a problem sending your message.");
          });
        }
      })
      .catch(() => {
        alert("Sorry, there was a problem sending your message.");
      });
    });
  }

  // Form validation
  const nameInput = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  nameInput.addEventListener('blur', function() {
    if (this.value.trim() === '') {
      nameError.classList.remove('hidden');
    } else {
      nameError.classList.add('hidden');
    }
  });

  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  emailInput.addEventListener('blur', function() {
    if (!emailPattern.test(this.value)) {
      emailError.classList.remove('hidden');
    } else {
      emailError.classList.add('hidden');
    }
  });

  const phoneInput = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  const phonePattern = /^\+?[0-9]{7,15}$/;
  phoneInput.addEventListener('blur', function() {
    if (this.value && !phonePattern.test(this.value)) {
      phoneError.classList.remove('hidden');
    } else {
      phoneError.classList.add('hidden');
    }
  });

  const subjectSelect = document.getElementById('subject');
  const subjectError = document.getElementById('subjectError');
  subjectSelect.addEventListener('change', function() {
    if (this.value === '') {
      subjectError.classList.remove('hidden');
    } else {
      subjectError.classList.add('hidden');
    }
  });

  const messageTextarea = document.getElementById('message');
  const messageError = document.getElementById('messageError');
  messageTextarea.addEventListener('blur', function() {
    if (this.value.trim() === '') {
      messageError.classList.remove('hidden');
    } else {
      messageError.classList.add('hidden');
    }
  });

  // Check for URL parameters to pre-select form options
  const hash = window.location.hash;
  const queryIndex = hash.indexOf('?');
  if (queryIndex !== -1) {
    const queryString = hash.substring(queryIndex + 1);
    const urlParams = new URLSearchParams(queryString);
    const type = urlParams.get('type');
    if (type === 'lost-found') {
      const subjectSelect = document.getElementById('subject');
      if (subjectSelect) {
        subjectSelect.value = 'lost-found';
      }
    }
  }
});
// Gallery functionality with infinite loop and auto-scroll
const Gallery = {
  container: null,
  scrollContent: null,
  isDragging: false,
  startX: 0,
  currentX: 0,
  autoScrollSpeed: 0.5,
  halfWidth: 0,

  init() {
    this.container = document.querySelector('.scroll-container');
    this.scrollContent = document.querySelector('.scroll-content');
    if (!this.container || !this.scrollContent) return;

    // Wait for images to load to get correct width
    setTimeout(() => {
      this.halfWidth = this.scrollContent.scrollWidth / 2;
      this.setupEvents();
      this.autoScroll();
    }, 100);
  },

  autoScroll() {
    if (!this.isDragging) {
      this.currentX -= this.autoScrollSpeed;

      // Loop when reaching halfway point
      if (Math.abs(this.currentX) >= this.halfWidth) {
        this.currentX = 0;
      }

      this.scrollContent.style.transform = `translateX(${this.currentX}px)`;
    }
    requestAnimationFrame(() => this.autoScroll());
  },

  setupEvents() {
    // Mouse down on container
    this.container.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.isDragging = true;
      this.startX = e.pageX - this.currentX;
    });

    // Mouse move anywhere on document
    document.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      e.preventDefault();
      this.currentX = e.pageX - this.startX;

      // Loop boundaries
      if (this.currentX > 0) this.currentX = -this.halfWidth;
      if (this.currentX < -this.halfWidth) this.currentX = 0;

      this.scrollContent.style.transform = `translateX(${this.currentX}px)`;
    });

    // Mouse up anywhere on document
    document.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch start on container
    this.container.addEventListener('touchstart', (e) => {
      this.isDragging = true;
      this.startX = e.touches[0].pageX - this.currentX;
    }, { passive: true });

    // Touch move anywhere on document
    document.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;
      this.currentX = e.touches[0].pageX - this.startX;

      // Loop boundaries
      if (this.currentX > 0) this.currentX = -this.halfWidth;
      if (this.currentX < -this.halfWidth) this.currentX = 0;

      this.scrollContent.style.transform = `translateX(${this.currentX}px)`;
    }, { passive: true });

    // Touch end anywhere on document
    document.addEventListener('touchend', () => {
      this.isDragging = false;
    });
  }
};

// Image enlargement functionality
function enlargeImage(img) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm';
  
  const enlargedImg = document.createElement('img');
  enlargedImg.src = img.src;
  enlargedImg.className = 'max-h-[90vh] max-w-[90vw] object-contain';
  
  modal.addEventListener('click', () => {
    modal.remove();
  });
  
  modal.appendChild(enlargedImg);
  document.body.appendChild(modal);
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  Gallery.init();
});

