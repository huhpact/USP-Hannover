function createBanner() {
  const banner = document.createElement('div');
  banner.className = 'cookie__banner';
  banner.innerHTML = `
    <div class="cookie__content">
      <div class="cookie__text">
        <h2>Datenschutzeinstellungen</h2>
        <p>Wir verwenden Cookies und ähnliche Technologien, um Ihnen ein optimales Webseitenerlebnis zu bieten. Dazu gehören Cookies, die für den Betrieb der Seite notwendig sind, sowie solche, die nur zu anonymen Statistikzwecken genutzt werden. Sie können selbst entscheiden, welche Kategorien Sie zulassen möchten. Bitte beachten Sie, dass auf Basis Ihrer Einstellungen womöglich nicht mehr alle Funktionalitäten der Seite zur Verfügung stehen.</p>
      </div>
      
      <div class="cookie__buttons">
        <button class="cookie__button primary" id="acceptAll">Alle akzeptieren</button>
        <button class="cookie__button secondary" id="showOptions">Weitere Optionen</button>
      </div>

      <div class="cookie__options" id="cookieOptions">
        <div class="cookie__option">
          <input type="checkbox" id="essentialCookies" checked disabled>
          <label for="essentialCookies">
            <strong>Technisch notwendige Cookies</strong>
            <p>Diese Cookies sind für den Betrieb der Seite notwendig und können nicht deaktiviert werden.</p>
          </label>
        </div>

        <div class="cookie__option">
          <input type="checkbox" id="analyticsCookies">
          <label for="analyticsCookies">
            <strong>Analyse Cookies</strong>
            <p>Diese Cookies ermöglichen es uns, die Nutzung der Website zu analysieren und die Besuchererfahrung zu verbessern.</p>
          </label>
        </div>

        <div class="cookie__option">
          <input type="checkbox" id="marketingCookies">
          <label for="marketingCookies">
            <strong>Marketing Cookies</strong>
            <p>Diese Cookies werden verwendet, um Besuchern auf anderen Websites personalisierte Werbung anzuzeigen.</p>
          </label>
        </div>

        <div class="cookie__buttons">
          <button class="cookie__button primary" id="savePreferences">Einstellungen speichern</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(banner);
  return banner;
}

function saveConsent(preferences) {
  localStorage.setItem('cookieConsent', JSON.stringify({
    preferences,
    timestamp: new Date().toISOString()
  }));
}

function hasConsent() {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) return false;
  
  const { timestamp } = JSON.parse(consent);
  const consentDate = new Date(timestamp);
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  
  return consentDate > sixMonthsAgo;
}

function hideBanner(banner) {
  banner.classList.remove('show');
  setTimeout(() => banner.remove(), 300);
}

function initCookieBanner() {
  if (hasConsent()) return;

  const banner = createBanner();
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      banner.classList.add('show');
    });
  });

  banner.querySelector('#acceptAll').addEventListener('click', () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true
    });
    hideBanner(banner);
  });

  banner.querySelector('#showOptions').addEventListener('click', () => {
    banner.querySelector('#cookieOptions').classList.toggle('show');
  });

  banner.querySelector('#savePreferences').addEventListener('click', () => {
    saveConsent({
      essential: true,
      analytics: banner.querySelector('#analyticsCookies').checked,
      marketing: banner.querySelector('#marketingCookies').checked
    });
    hideBanner(banner);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieBanner);
} else {
  initCookieBanner();
}