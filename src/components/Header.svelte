<script>
    export let y;
    import { fly, slide } from 'svelte/transition';

    let isMenuOpen = false;

    let tabs = [
        { name: "Music", link: "#music" },
        { name: "Live", link: "#live" },
        { name: "About", link: "#about" },
        { name: "Contact", link: "#contact" },
    ];

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function scrollToSection(link) {
        isMenuOpen = false;
        const target = document.querySelector(link);
        if (target) target.scrollIntoView({ behavior: "smooth" });
    }

    function goTop() {
        document.body.scrollIntoView({ behavior: "smooth" });
    }
</script>

<header
    class={"fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 backdrop-blur-md " +
        (y > 50 ? "bg-slate-950/80 py-3" : "bg-transparent py-5")}
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <!-- Logo -->
        <button
            on:click={goTop}
            class="font-poppins text-xl md:text-2xl font-bold tracking-tighter uppercase hover:text-blue-500 transition-colors"
        >
            My Best Antic
        </button>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8">
            {#each tabs as tab}
                <a
                    href={tab.link}
                    on:click|preventDefault={() => scrollToSection(tab.link)}
                    class="text-sm font-medium uppercase tracking-widest hover:text-blue-400 transition-colors relative group"
                >
                    {tab.name}
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
            {/each}
            
            <!-- Social Icons Mini (Desktop) -->
            <div class="flex items-center gap-4 ml-4 border-l border-white/10 pl-4 text-slate-400">
                <a href="https://www.instagram.com/mybestantic/" target="_blank" class="hover:text-pink-500 transition-colors"><i class="fab fa-instagram text-lg"></i></a>
                <a href="https://www.youtube.com/@mybestantic" target="_blank" class="hover:text-red-500 transition-colors"><i class="fab fa-youtube text-lg"></i></a>
            </div>
        </nav>

        <!-- Mobile Menu Button -->
        <button on:click={toggleMenu} class="md:hidden text-2xl focus:outline-none">
            <i class="fas {isMenuOpen ? 'fa-times' : 'fa-bars'}"></i>
        </button>
    </div>

    <!-- Mobile Nav -->
    {#if isMenuOpen}
        <div 
            transition:slide 
            class="md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-white/10 backdrop-blur-xl shadow-2xl"
        >
            <div class="flex flex-col p-6 gap-6 items-center">
                {#each tabs as tab}
                    <a
                        href={tab.link}
                        on:click|preventDefault={() => scrollToSection(tab.link)}
                        class="text-xl font-bold uppercase tracking-widest hover:text-blue-400"
                    >
                        {tab.name}
                    </a>
                {/each}
                <div class="flex gap-6 mt-4 text-slate-400">
                    <a href="https://www.instagram.com/mybestantic/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                    <a href="https://www.youtube.com/@mybestantic" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
                    <a href="https://www.facebook.com/mybestantic" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
                </div>
            </div>
        </div>
    {/if}
</header>