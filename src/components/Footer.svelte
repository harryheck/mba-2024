<script>
    import LegalModal from './LegalModal.svelte';

    let showModal = false;
    let modalType = 'imprint';

    function openLegal(type) {
        modalType = type;
        showModal = true;
    }
</script>

<footer class="relative pt-20 pb-10 bg-slate-950 border-t border-white/5 overflow-hidden">
    <!-- Background Blur decoration -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 flex flex-col items-center gap-10 relative z-10">
        
        <!-- Social Grid -->
        <div class="grid grid-cols-4 gap-6 sm:gap-10">
            <a href="https://www.instagram.com/mybestantic/" target="_blank" class="text-slate-400 hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
                <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.youtube.com/@mybestantic" target="_blank" class="text-slate-400 hover:text-red-500 hover:-translate-y-1 transition-all duration-300">
                <i class="fab fa-youtube fa-2x"></i>
            </a>
            <a href="https://www.threads.net/@mybestantic" target="_blank" class="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300">
                <i class="fab fa-threads fa-2x"></i>
            </a>
            <a href="https://www.facebook.com/mybestantic" target="_blank" class="text-slate-400 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
                <i class="fab fa-facebook fa-2x"></i>
            </a>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <button on:click={() => openLegal('imprint')} class="hover:text-white transition-colors hover:underline underline-offset-4">
                Impressum
            </button>
            <span class="text-slate-700">|</span>
            <button on:click={() => openLegal('privacy')} class="hover:text-white transition-colors hover:underline underline-offset-4">
                Datenschutz
            </button>
        </div>

        <p class="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} My Best Antic. Made with <i class="fas fa-heart text-red-900"></i> in Berlin.
        </p>
    </div>

    {#if showModal}
        <LegalModal type={modalType} on:close={() => showModal = false} />
    {/if}
</footer>