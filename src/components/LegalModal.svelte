<script>
    import { createEventDispatcher } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    
    export let type = 'imprint'; 
    const dispatch = createEventDispatcher();

    function close() {
        dispatch('close');
    }
</script>

<div class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" transition:fade={{ duration: 200 }}>
    <!-- Backdrop: Klick hier schließt das Modal -->
    <div class="absolute inset-0 bg-black/90 backdrop-blur-md" on:click={close}></div>

    <!-- Modal Box -->
    <div 
        class="relative bg-slate-950 border border-white/10 w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        transition:scale={{ start: 0.95, duration: 200 }}
    >
        <!-- Header -->
        <div class="flex justify-between items-center p-6 border-b border-white/10 bg-slate-900/50">
            <h2 class="text-xl font-bold uppercase tracking-wider text-white">
                {type === 'imprint' ? 'Impressum' : 'Datenschutzerklärung'}
            </h2>
            <button on:click={close} class="text-slate-400 hover:text-white transition-colors p-2">
                <i class="fas fa-times text-xl"></i>
            </button>
        </div>

        <!-- Scrollable Content -->
        <div class="overflow-y-auto p-6 md:p-8 text-slate-300 text-sm leading-relaxed legal-text">
            {#if type === 'imprint'}
                <!-- IMPRESSUM -->
                <div class="space-y-6">
                    <div>
                        <h3 class="text-white font-bold text-lg mb-2">Angaben gemäß § 5 TMG</h3>
                        <p>My Best Antic</p>
                        <p>Huttenstr. 68</p>
                        <p>10553 Berlin</p>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-1">Vertreten durch:</h4>
                        <p>Roman Schweikert</p>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-1">Kontakt:</h4>
                        <p>E-Mail: <a href="mailto:mybestantic@gmail.com" class="text-blue-400 hover:underline">mybestantic@gmail.com</a></p>
                    </div>

                    <div>
                        <h4 class="text-white font-bold mb-1">Redaktionell Verantwortlicher:</h4>
                        <p>Roman Schweikert</p>
                    </div>
                    
                    <div class="pt-4 border-t border-white/10">
                        <h3 class="text-white font-bold mb-2">Haftung und Urheberrecht</h3>
                        <p class="mb-2"><strong>Haftung für Inhalte:</strong> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
                        <p class="mb-2"><strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                        <p><strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.</p>
                    </div>
                </div>
            {:else}
                <!-- DATENSCHUTZ (Modernisiert für Vercel/Svelte/No-Cookie) -->
                <div class="space-y-6">
                    <p class="text-slate-400 italic">Stand: November 2025</p>

                    <section>
                        <h3 class="text-white font-bold text-lg mb-2">1. Datenschutz auf einen Blick</h3>
                        <p>
                            Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <div class="mt-2">
                            <strong>Das Wichtigste vorab:</strong>
                            <ul class="list-disc list-inside mt-1 ml-2 space-y-1">
                                <li>Wir setzen <strong>keine Tracking-Cookies</strong> oder Analyse-Tools (wie Google Analytics) ein.</li>
                                <li>Wir speichern keine IP-Adressen in Logs, die eine dauerhafte Identifizierung ermöglichen.</li>
                                <li>Diese Webseite dient rein informativen Zwecken.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h3 class="text-white font-bold text-lg mb-2">2. Hosting (Vercel)</h3>
                        <p>
                            Unsere Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet.
                        </p>
                        <p class="mt-2">
                            Damit unsere Webseite angezeigt werden kann, muss deine IP-Adresse technisch bedingt kurzzeitig an die Server von Vercel übermittelt werden. Vercel verwendet Serverstandorte weltweit (CDN), um die Seite schnell auszuliefern. Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Vercel speichert Zugriffslogs nur zur Fehleranalyse und Abwehr von Angriffen, die in der Regel nach kurzer Zeit gelöscht werden.
                        </p>
                    </section>

                    <section>
                        <h3 class="text-white font-bold text-lg mb-2">3. Externe Dienste & Inhalte</h3>
                        <p>Wir binden Inhalte von externen Anbietern ein, um dir Musik und Tourdaten direkt anzuzeigen. Wenn du diese Inhalte lädst, wird eine direkte Verbindung zwischen deinem Browser und den Servern des jeweiligen Anbieters hergestellt.</p>
                        
                        <div class="mt-4 pl-4 border-l-2 border-white/10 space-y-4">
                            <div>
                                <h4 class="text-white font-semibold">Spotify</h4>
                                <p>Wir nutzen den Spotify Player zur Wiedergabe unserer Musik (Anbieter: Spotify AB, Regeringsgatan 19, Stockholm, Schweden). Beim Laden des Players erfährt Spotify deine IP-Adresse und ggf. technische Geräteinformationen, um die Musik auszuliefern.</p>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold">Bandsintown</h4>
                                <p>Für die Anzeige unserer Tourdaten und Ticket-Links nutzen wir das Widget von Bandsintown (Anbieter: Bandsintown, LLC, USA). Auch hier wird technisch bedingt deine IP-Adresse an den Anbieter übermittelt, um die aktuellen Daten abzurufen.</p>
                            </div>
                            <div>
                                <h4 class="text-white font-semibold">FontAwesome (Icons)</h4>
                                <p>Für die Darstellung von Icons (z.B. Social Media Logos) laden wir Schriftarten von Fonticons, Inc. (USA). Deine IP-Adresse wird hierbei an die Server von FontAwesome übertragen.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 class="text-white font-bold text-lg mb-2">4. Kontakt per E-Mail</h3>
                        <p>
                            Wenn du uns per E-Mail (mybestantic@gmail.com) kontaktierst, erfolgt dies über dein eigenes E-Mail-Programm. Die Daten, die du uns dabei sendest (z.B. Name, Absenderadresse, Inhalt der Mail), werden von uns nur zur Bearbeitung deiner Anfrage gespeichert und selbstverständlich nicht ohne deine Einwilligung an Dritte weitergegeben.
                        </p>
                    </section>

                    <section>
                        <h3 class="text-white font-bold text-lg mb-2">5. Deine Rechte</h3>
                        <p>
                            Du hast jederzeit das Recht auf unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Bitte wende dich dazu einfach an die im Impressum angegebene Adresse oder E-Mail.
                        </p>
                    </section>
                </div>
            {/if}
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-white/10 bg-slate-900/50 text-right">
            <button on:click={close} class="px-6 py-2 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg text-slate-300 text-sm transition-colors font-medium">
                Schließen
            </button>
        </div>
    </div>
</div>