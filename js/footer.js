document.addEventListener("DOMContentLoaded", function() {
	const footerHTML = `
		 <footer class="modern__footer">
        <div class="footer__content">
            <div class="footer__grid">
                <div class="footer__section">
                    <h3>Über Uns</h3>
                    <ul>
                        <li><a href="index.html">Unternehmen</a></li>
                        <li><a href="about.html">Team</a></li>
                        <li><a href="careers.html">Karriere</a></li>
                        <li><a href="news.html">Aktuelles</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h3>Leistungen</h3>
                    <ul>
                        <li><a href="services/digitalization.html">Digitalisierung</a></li>
                        <li><a href="services/consulting.html">Unternehmensberatung</a></li>
                        <li><a href="services/hr.html">Personalwesen</a></li>
                        <li><a href="services/innovation.html">Innovation</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h3>Ressourcen</h3>
                    <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="case-studies.html">Fallstudien</a></li>
                        <li><a href="whitepaper.html">Whitepaper</a></li>
                        <li><a href="events.html">Veranstaltungen</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h3>Rechtliches</h3>
                    <ul>
                        <li><a href="privacy.html">Datenschutz</a></li>
                        <li><a href="impressum.html">Impressum</a></li>
                        <li><a href="terms.html">AGB</a></li>
                        <li><a href="cookies.html">Cookie-Richtlinie</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__bottom">
                <p class="copy">&copy; 2025 USP Hannover GmbH. Alle Rechte vorbehalten.</p>
                <p class="credit">Réalisé par 
                    <a href="https://huhpact.dev?utm_source=usphnvr&utm_medium=webbrowser&utm_campaign=usp">
                        <img class="img__credit" src="https://huhpact.dev/s/logo-huhpact.png" alt="huh(pact)">
                    </a>
                </p>
            </div>
        </div>
    </footer>
	`;
	
	document.body.insertAdjacentHTML("beforeend", footerHTML);
});