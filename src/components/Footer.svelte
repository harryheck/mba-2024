<script>
    /** import Modal from "./ModalOld.svelte"; */
    import Modal from './Modal.svelte'

    import Component1 from './Component1.svelte'
	import Component2 from './Component2.svelte'

    let showModal = false;
	let modalContent;
    function toggleModal(component) {
		modalContent = component;
		showModal = !showModal;
	}
</script>

<footer
    class="inset-0 py-32 bg-black border-t border-solid border-blue-950 flex flex-col gap-4 sm:gap-8 items-center"
    style="background-image: url('images/bg.jpg');"
>
    <p class="px-4 py-2 bg-white text-slate-950 font-medium shadow-xl">
        Connect with us &darr;
    </p>

    <div
        class="grid grid-cols-4 gap-4 md:gap-4 items-center justify-center mx-auto shadow-xl"
    >
        <a
            href="https://www.instagram.com/mybestantic/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="fab fa-instagram fa-2x hover:text-pink-400 duration-200"
            ></i>
        </a>

        <a
            href="https://www.youtube.com/@mybestantic"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="fab fa-youtube fa-2x hover:text-red-400 duration-200"></i>
        </a>

        <a
            href="https://www.threads.net/@mybestantic"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="fab fa-threads fa-2x hover:text-gray-400 duration-200"
            ></i>
        </a>

        <a
            href="https://www.facebook.com/mybestantic"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i class="fab fa-facebook fa-2x hover:text-blue-400 duration-200"
            ></i>
        </a>
    </div>

    <div class="flex">
        <button 
            class="bg-transparent text-white rounded-md px-2 py-2 hover:bg-blue-700 transition"
            on:click={() => (toggleModal(Component1))}
        >
            Impressum
        </button>
        <button 
            class="bg-transparent text-white rounded-md px-2 py-2 hover:bg-blue-700 transition"
            on:click={() => (toggleModal(Component2))}
        >
            Datenschutzerklärung
        </button>
    </div>
    
    {#if showModal}
        <Modal on:click={toggleModal} {modalContent} />
    {/if}
    
    <p class="text-xs shadow-xl">
        <i class="fa-regular fa-copyright"></i>
        My Best Antic 2024 🤍
    </p>

    
    

    
    
    
    
    <!-- 
    <button 
    class="bg-transparent text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
    on:click={() => (showModal = true)}>Impressum</button>

    <Modal bind:showModal>
        <h2 slot="header">Impressum</h2>

        <div class="container">
            <p>Angaben gemäß § 5 TMG</p>
            <p></p>
            <p>My Best Antic</p>
            <p>Huttenstr. 68</p>
            <p>10553 Berlin</p>
            <p></p>
            <p>Vertreten durch:</p>
            <p>Roman Schweikert</p>
            <p></p>
            <p>Kontakt</p>
            <p>E-Mail: mybestantic@gmail.com</p>
            <p></p>
            <p>Redaktionell Verantwortlicher</p>
            <p>Roman Schweikert</p>
            <p></p>
            <p>Verbraucherstreitbeilegung/Universalschlichtungsstelle</p>
            <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p></p>
            <p>Haftung für Inhalte</p>
            <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
            </p>
            <p></p>
            <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
            </p>
            <p></p>
            <p>Haftung für Links</p>
            <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
            </p>
            <p></p>
            <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
            </p>
            <p></p>
            <p>Urheberrecht</p>
            <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
            </p>
            <p></p>
            <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
            </p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </Modal>

    <button 
    class="bg-transparent text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
    on:click={() => (showModal = true)}>DSGVO Disclaimer</button>

    <Modal bind:showModal>
        <h2 slot="header">DSGVO Disclaimer</h2>

        <div class="container">
            awdawaw
        </div>
    </Modal>

    -->
</footer>


<!-- multiple Modals am besten so lösen: https://svelte.dev/repl/4624e3f0f3684ddcb2e2da10592f6df1?version=3.38.2 -->