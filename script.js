/* ==========================================================
   1. SCROLL KARNE PAR AKATSUKI MEMBER BACKGROUND CHANGER
   Ye code check karta hai ki abhi screen par kaunsa section hai
   aur uske hisaab se background photo aur quote badal deta hai.
   ========================================================== */
const sections = document.querySelectorAll('.scroll-section');
const bgSlides = document.querySelectorAll('.bg-slide');
const memberNameEl = document.getElementById('activeMemberName');
const memberQuoteEl = document.getElementById('activeMemberQuote');

// IntersectionObserver settings (Jab section 35% screen ke andar aaye tab trigger ho)
const observerOptions = {
  root: null,
  rootMargin: '-35% 0px -35% 0px',
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // HTML ke data-index, data-name aur data-quote attributes se value lena
      const index = parseInt(entry.target.getAttribute('data-index'), 10);
      const memberName = entry.target.getAttribute('data-name');
      const memberQuote = entry.target.getAttribute('data-quote');

      // 1. Background image slide change karo (Agar multiple slides hain)
      if (bgSlides.length > 1) {
        bgSlides.forEach((slide, idx) => {
          if (idx === index) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });
      }

      // 2. Bottom-right HUD me Akatsuki Member ka naam aur quote update karo
      if (memberNameEl && memberQuoteEl && memberName && memberQuote) {
        memberNameEl.innerText = memberName;
        memberQuoteEl.innerText = `"${memberQuote}"`;
      }
    }
  });
}, observerOptions);

// Har section par observer chalu karo
sections.forEach(section => {
  sectionObserver.observe(section);
});

/* ==========================================================
   2. MODPACK DOWNLOAD BUTTON FUNCTION
   Jab koi user Download par click karega to ye message aayega.
   Baad me tum yaha window.location.href = "your-link" bhi laga sakte ho.
   ========================================================== */
function downloadModpack(packName) {
  alert(`☁ AKATSUKI VAULT // Downloading: ${packName}\nGet ready for 200+ Boosted FPS!`);
}

/* ==========================================================
   3. COPY GAMERTAG TO CLIPBOARD (Join Clan page ke liye)
   ========================================================== */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert(`✅ Copied to clipboard: ${text}\nSee you in the arena!`);
}

/* ==========================================================
   4. MOBILE HAMBURGER MENU (3 Lines Toggle)
   Mobile screen par menu kholne aur band karne ke liye.
   ========================================================== */
const mobileMenuBtn = document.getElementById('mobileMenu');
const navLinksContainer = document.getElementById('navLinks');

if (mobileMenuBtn && navLinksContainer) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('open');
  });

  // Kisi bhi link par click karne par mobile menu band ho jaye
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
    });
  });
}