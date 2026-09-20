/* ==========================================================
   JAVASCRIPT FILE (Har page ke buttons aur interaction ke liye)
   ========================================================== */

// 1. Mod Pack Download Button dabane par confirmation message
function downloadModpack() {
    alert("🔥 Tanjiro FPS & PvP Modpack downloading... Enjoy 100+ FPS!");
}

// 2. Social Links copy karne ka simple function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
}

// ==========================================================
// 3. MOBILE HAMBURGER MENU (3 Lines Toggle Logic)
// ==========================================================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
    // 3 lines par click karne se menu khulega/band hoga
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navLinks.classList.toggle('open');
    });

    // Menu khula hone par kisi bhi link par click karte hi menu apne aap band ho jaye
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-active');
            navLinks.classList.remove('open');
        });
    });
}