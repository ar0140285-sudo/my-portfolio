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