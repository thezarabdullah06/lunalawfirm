/* Shared app: i18n, header/footer injection, lang toggle, cookie, WhatsApp, icons */
const I18N = {
  id: {
    "nav.home": "Beranda", "nav.about": "Tentang Kami", "nav.practices": "Bidang Praktik", "nav.team": "Tim Advokat", "nav.articles": "Artikel", "nav.contact": "Kontak", "nav.careers": "Karier", "nav.consult": "Jadwalkan Konsultasi",
    "hero.badge": "Anggota PERADI Terdaftar", "hero.btn1": "Jadwalkan Konsultasi", "hero.btn2": "Chat WhatsApp",
    "cookie.text": "Situs ini memakai cookie untuk statistik anonim. Tanpa persetujuan, skrip analitik tidak dijalankan.",
    "cookie.accept": "Setuju", "cookie.decline": "Tolak",
    "footer.nav": "Navigasi", "footer.practice": "Bidang Praktik", "footer.legal": "Legal & Kepatuhan", "footer.contact": "Hubungi Kami",
    "legal.privacy": "Kebijakan Privasi", "legal.disclaimer": "Disclaimer", "legal.terms": "Syarat Penggunaan",
    "footer.rights": "Hak cipta dilindungi. Seluruh konten bersifat informasi umum, bukan nasihat hukum.",
    "read.more": "Baca selengkapnya", "view.profile": "Lihat Profil", "back": "Kembali",
    "search.ph": "Cari artikel hukum…", "filter.all": "Semua", "filter.partner": "Partner", "filter.associate": "Associate",
    "page.next": "Berikutnya", "page.prev": "Sebelumnya", "empty": "Tidak ada hasil yang cocok.",
    "consult.cta": "Jadwalkan Konsultasi Gratis", "wa.chat": "Chat WhatsApp",
    "th.page": "Halaman", "greeting": "Halo Wijaya & Rekan, "
  },
  en: {
    "nav.home": "Home", "nav.about": "About Us", "nav.practices": "Practice Areas", "nav.team": "Our Lawyers", "nav.articles": "Articles", "nav.contact": "Contact", "nav.careers": "Careers", "nav.consult": "Book a Consultation",
    "hero.badge": "Registered PERADI Member", "hero.btn1": "Book a Consultation", "hero.btn2": "Chat on WhatsApp",
    "cookie.text": "This site uses cookies for anonymous statistics. No analytics scripts run without your consent.",
    "cookie.accept": "Accept", "cookie.decline": "Decline",
    "footer.nav": "Navigation", "footer.practice": "Practice Areas", "footer.legal": "Legal & Compliance", "footer.contact": "Contact",
    "legal.privacy": "Privacy Policy", "legal.disclaimer": "Disclaimer", "legal.terms": "Terms of Use",
    "footer.rights": "© 2026 Wijaya & Rekan. Content is general information, not legal advice.",
    "read.more": "Read more", "view.profile": "View Profile", "back": "Back",
    "search.ph": "Search legal articles…", "filter.all": "All", "filter.partner": "Partner", "filter.associate": "Associate",
    "page.next": "Next", "page.prev": "Previous", "empty": "No matching results.",
    "consult.cta": "Book a Free Consultation", "wa.chat": "Chat on WhatsApp",
    "th.page": "Page", "greeting": "Hello Wijaya & Rekan, "
  }
};
const T = (k) => (I18N[window.__LANG] && I18N[window.__LANG][k]) || I18N.id[k] || k;
document.documentElement.lang = window.__LANG === "en" ? "en" : "id";
document.title = document.title.replace(/\s*\|\s*Wijaya & Rekan.*$/, "") + " | Wijaya & Rekan";

function tr(el) { const k = el.getAttribute("data-i18n"); if (k) el.textContent = T(k); }
function trAll() { document.querySelectorAll("[data-i18n]").forEach(tr); }

function headerHTML() {
  const F = window.FIRM_DATA.firm, B = window.__BASE;
  const link = (path, key, extra) => `<a ${extra||""} class="nav-link" href="${window.__HREF(path)}" data-i18n="${key}">${T(key)}</a>`;
  return `<a class="skip" href="#main">Skip</a>
  <header class="site-header" style="position:sticky;top:0;z-index:50;background:var(--navy);color:#fff">
    <div class="wrap" style="display:flex;align-items:center;gap:18px;padding:14px 20px">
      <a href="${window.__HREF('/')}" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:#fff;flex-shrink:0">
        <span style="width:38px;height:38px;border-radius:9px;background:var(--bronze);display:flex;align-items:center;justify-content:center"><i data-lucide="scale" style="color:#fff"></i></span>
        <span style="line-height:1.1"><strong style="font-family:'EB Garamond',serif;font-size:20px;display:block">Wijaya & Rekan</strong><small style="color:#B9C4D6;letter-spacing:.14em;text-transform:uppercase;font-size:10px">${T('nav.home')} • Est. 2009</small></span>
      </a>
      <nav style="margin-left:auto;display:flex;gap:4px;flex-wrap:wrap;align-items:center" class="main-nav" id="mainNav">
        ${link('/', 'nav.home')}${link('/tentang-kami', 'nav.about')}${link('/bidang-praktik', 'nav.practices')}${link('/tim-advokat', 'nav.team')}${link('/artikel', 'nav.articles')}${link('/kontak', 'nav.contact')}${link('/karier', 'nav.careers')}
      </nav>
      <div style="display:flex;gap:8px;align-items:center;flex-shrink:0">
        <a href="${window.__HREF('/konsultasi')}" class="btn btn-primary" style="padding:10px 18px;font-size:14px" data-i18n="nav.consult">${T('nav.consult')}</a>
        <button class="lang-switch" onclick="switchLang()" aria-label="Switch language" style="background:#1B2E4B;border:1px solid #3A5478;color:#fff;padding:8px 12px;border-radius:8px;cursor:pointer;font-weight:700;min-height:40px">${window.__LANG === 'en' ? 'ID' : 'EN'}</button>
        <button class="burger" onclick="document.getElementById('mainNav').classList.toggle('open')" aria-label="Menu" style="background:#1B2E4B;border:1px solid #3A5478;color:#fff;padding:8px;border-radius:8px;cursor:pointer;min-height:40px"><i data-lucide="menu"></i></button>
      </div>
    </div>
  </header>`;
}
function footerHTML() {
  const F = window.FIRM_DATA.firm;
  const practices = window.FIRM_DATA.practices.map(p => `<a href="${window.__HREF('/bidang-praktik/' + p.slug)}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0">${window.t(p.name)}</a>`).join("");
  return `<footer style="background:var(--navy);color:#B9C4D6;padding:56px 0 0">
    <div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:32px;padding-bottom:36px">
      <div>
        <strong style="font-family:'EB Garamond',serif;font-size:22px;color:#fff">Wijaya & Rekan</strong>
        <p style="font-size:14px;margin:12px 0">${F.address}</p>
        <p style="font-size:14px;margin:6px 0">${F.hours}<br>${F.phone}<br><a href="mailto:${F.email}" style="color:var(--bronze-2)">${F.email}</a></p>
      </div>
      <div><h4 style="color:#fff;margin:0 0 12px" data-i18n="footer.nav">${T('footer.nav')}</h4>
        <a href="${window.__HREF('/tentang-kami')}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0" data-i18n="nav.about">${T('nav.about')}</a>
        <a href="${window.__HREF('/tim-advokat')}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0" data-i18n="nav.team">${T('nav.team')}</a>
        <a href="${window.__HREF('/artikel')}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0" data-i18n="nav.articles">${T('nav.articles')}</a>
        <a href="${window.__HREF('/kontak')}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0" data-i18n="nav.contact">${T('nav.contact')}</a>
        <a href="${window.__HREF('/karier')}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0" data-i18n="nav.careers">${T('nav.careers')}</a>
      </div>
      <div><h4 style="color:#fff;margin:0 0 12px" data-i18n="footer.practice">${T('footer.practice')}</h4>${practices}</div>
      <div><h4 style="color:#fff;margin:0 0 12px" data-i18n="footer.legal">${T('footer.legal')}</h4>
        <a href="${window.__HREF('/kebijakan-privasi')}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0" data-i18n="legal.privacy">${T('legal.privacy')}</a>
        <a href="${window.__HREF('/disclaimer')}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0" data-i18n="legal.disclaimer">${T('legal.disclaimer')}</a>
        <a href="${window.__HREF('/syarat-penggunaan')}" style="display:block;color:#B9C4D6;text-decoration:none;padding:4px 0" data-i18n="legal.terms">${T('legal.terms')}</a>
        <p style="font-size:12px;margin-top:14px">${F.peradi}</p>
      </div>
    </div>
    <div style="border-top:1px solid #263B5E;padding:16px 20px;text-align:center;font-size:12.5px" data-i18n="footer.rights">${T('footer.rights')}</div>
  </footer>
  <div id="cookieBanner" style="display:none;position:fixed;left:16px;right:16px;bottom:16px;z-index:80;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 18px 40px rgba(16,30,51,.25);padding:16px 18px;max-width:720px;margin:0 auto">
    <p style="margin:0 0 12px;font-size:14px" data-i18n="cookie.text">${T('cookie.text')}</p>
    <div style="display:flex;gap:8px"><button class="btn btn-navy" onclick="cookieConsent(true)" data-i18n="cookie.accept">${T('cookie.accept')}</button><button class="btn btn-outline" onclick="cookieConsent(false)" data-i18n="cookie.decline">${T('cookie.decline')}</button></div>
  </div>
  <a id="waFloat" href="${window.__WA()}" target="_blank" rel="noopener" aria-label="WhatsApp" style="position:fixed;right:20px;bottom:20px;z-index:70;width:56px;height:56px;border-radius:50%;background:#128C4B;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 24px rgba(18,140,75,.45)">
    <i data-lucide="message-circle" style="color:#fff;width:26px;height:26px"></i>
  </a>`;
}
function mount() {
  const h = document.getElementById("site-header"); if (h) h.innerHTML = headerHTML();
  const f = document.getElementById("site-footer"); if (f) f.innerHTML = footerHTML();
  document.querySelectorAll(".nav-link").forEach(a => { a.style.cssText = "color:#D7DEE9;text-decoration:none;padding:10px 12px;font-size:14.5px;font-weight:600;border-radius:8px;min-height:44px;display:inline-flex;align-items:center"; });
  const style = document.createElement("style"); style.textContent = ".skip{position:absolute;left:-9999px}.skip:focus{left:12px;top:12px;background:#fff;color:#101E33;padding:10px 16px;border-radius:8px;z-index:100}@media(max-width:920px){.main-nav{display:none!important}.main-nav.open{display:flex!important;position:absolute;top:100%;left:0;right:0;background:var(--navy);flex-direction:column;padding:14px;box-shadow:0 16px 32px rgba(0,0,0,.35)}.burger{display:flex!important}}@media(min-width:921px){.burger{display:none}}";
  document.head.appendChild(style);
  if (!localStorage.getItem("wr_cookie")) { const b = document.getElementById("cookieBanner"); if (b) b.style.display = "block"; }
  if (window.lucide) window.lucide.createIcons();
  trAll();
}
function cookieConsent(v) { localStorage.setItem("wr_cookie", v ? "accepted" : "declined"); const b = document.getElementById("cookieBanner"); if (b) b.style.display = "none"; }
function switchLang() {
  const next = window.__LANG === "en" ? "id" : "en";
  localStorage.setItem("wr_lang", next);
  location.reload();
}
function crumb(items) {
  const html = items.map((it, idx) => {
    const last = idx === items.length - 1;
    return last ? `<span>${it.label}</span>` : `<a href="${it.href}">${it.label}</a>`;
  }).join(' <span aria-hidden="true">›</span> ');
  return `<nav class="crumb" aria-label="Breadcrumb">${html}</nav>`;
}
document.addEventListener("DOMContentLoaded", mount);
