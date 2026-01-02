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
                        <li><a href="contact.html">Kontakt</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h3>Ressourcen</h3>
                    <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="index.html#usp">USP</a></li>
                        <li><a href="services.html">Dienstleistungen</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h3>Rechtliches</h3>
                    <ul>
                        <li><a href="privacy.html">Datenschutz</a></li>
                        <li><a href="impressum.html">Impressum</a></li>
                        <li><a href="cookies.html">Cookie-Richtlinie</a></li>
                    </ul>
                </div>
                <div class="footer__section">
                    <h3>Kontaktdetails</h3>
                    <ul>
                        <li><a href="tel:051138820364">Telefonnummer</a></li>
                        <li><a href="mailto:info@usp-hannover.de">E-Mail</a></li>
                        <li><a href="https://maps.app.goo.gl/GUmaispUuEY9H1nw6" target="_blank">Firmenstandort</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__bottom">
                <p class="copy">&copy; 2026 USP Hannover GmbH. Alle Rechte vorbehalten.</p>
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