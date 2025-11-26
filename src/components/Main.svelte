<script>
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    
    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    let spotifyLinks = [
        "https://open.spotify.com/embed/track/7zhfeA51E1vBA6PiTmP8et?utm_source=generator&theme=0",
        "https://open.spotify.com/embed/track/4yfRbpAzcvHERqcvgB11Jz?utm_source=generator&theme=0",
        "https://open.spotify.com/embed/track/5lub0KpCOpCKeiviwZl9wd?utm_source=generator&theme=0"
    ];

    let streamingLinks = [
        { name: 'Spotify', icon: 'fa-brands fa-spotify', url: 'https://open.spotify.com/artist/69HQoBBRhfFiSVKpjxFOKZ', color: 'hover:text-green-500' },
        { name: 'Apple Music', icon: 'fa-brands fa-apple', url: 'https://music.apple.com/us/artist/my-best-antic/1112963926', color: 'hover:text-pink-500' },
        { name: 'Deezer', icon: 'fa-brands fa-deezer', url: 'https://www.deezer.com/en/artist/10345832', color: 'hover:text-purple-500' },
        { name: 'Tidal', icon: 'fa-solid fa-gem', url: 'https://tidal.com/artist/9907729', color: 'hover:text-white' }, 
        { name: 'Amazon Music', icon: 'fa-brands fa-amazon', url: 'https://www.amazon.de/music/player/artists/B01FJ2AH60/my-best-antic', color: 'hover:text-blue-400' }
    ];
</script>

<!-- Noise Texture für "Grainy" Look -->
<div class="bg-noise"></div>

<!-- Background Orbs -->
<div class="orb bg-blue-600 top-[-10%] left-[-10%] w-[50vw] h-[50vw]"></div>
<div class="orb bg-purple-600 bottom-[10%] right-[-10%] w-[40vw] h-[40vw]"></div>

<main class="relative flex flex-col w-full overflow-x-hidden">

    <!-- HERO SECTION -->
    <section id="home" class="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
        
        <!-- Live Image Background mit Overlay -->
        <div class="absolute inset-0 z-0">
            <!-- 
               Wichtig: Stelle sicher, dass 'bg.jpg' unter static/images/bg.jpg liegt.
               Die Klasse 'mix-blend-overlay' sorgt dafür, dass das Bild mit dem dunklen Hintergrund verschmilzt.
            -->
            <img 
                src="images/bg.jpg" 
                alt="My Best Antic Live" 
                class="w-full h-full object-cover opacity-40 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-[3s] scale-105"
            />
            <!-- Gradient Overlay für Lesbarkeit -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/30"></div>
        </div>

        {#if mounted}
            <div in:fly={{ y: 50, duration: 1000 }} class="z-10 flex flex-col items-center gap-6">
                <h1 class="text-5xl sm:text-7xl md:text-9xl font-bold font-poppins tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 drop-shadow-2xl">
                    MY BEST ANTIC
                </h1>
                <p class="text-lg md:text-2xl font-light text-slate-200 tracking-widest uppercase text-shadow-lg">
                    Pop-Punk / Post-Hardcore // Dresden
                </p>
                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a href="#music" class="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                        Listen Now
                    </a>
                    <a href="#live" class="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all text-white">
                        Tour Dates
                    </a>
                </div>
            </div>
        {/if}
    </section>

    <!-- MUSIC SECTION -->
    <section id="music" class="py-32 px-4 max-w-7xl mx-auto w-full relative z-10">
        <div class="flex flex-col gap-12">
            <h2 class="text-4xl md:text-6xl font-bold text-center uppercase tracking-tighter mb-8 text-white">
                Latest <span class="text-blue-500">Music</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {#each spotifyLinks as link}
                    <div class="group relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                        <iframe
                            title="Spotify"
                            style="border-radius:12px"
                            src={link}
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            class="w-full"
                        ></iframe>
                    </div>
                {/each}
            </div>

            <!-- Streaming Links Leiste -->
            <div class="flex flex-col items-center gap-6 mt-12">
                <p class="text-slate-400 uppercase tracking-widest text-sm">Stream us on</p>
                <div class="flex flex-wrap justify-center gap-6 md:gap-10">
                    {#each streamingLinks as service}
                        <a 
                            href={service.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <div class="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                <i class="{service.icon} text-2xl md:text-3xl {service.color} transition-colors"></i>
                            </div>
                            <span class="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0">{service.name}</span>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </section>

    <!-- LIVE SECTION -->
    <section id="live" class="py-32 bg-slate-950/50 border-y border-white/5 backdrop-blur-sm relative z-10">
        <div class="max-w-5xl mx-auto px-4 w-full text-center">
            <h2 class="text-4xl md:text-6xl font-bold mb-16 uppercase tracking-tighter text-white">Live</h2>
            
            <div class="bg-slate-900/40 p-4 rounded-xl border border-white/5 min-h-[400px]">
                <script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></script>
                <a
                    class="bit-widget-initializer"
                    data-artist-name="id_10560649"
                    data-background-color="rgba(0,0,0,0)"
                    data-separator-color="rgba(255,255,255,0.1)"
                    data-text-color="rgba(255,255,255,1)"
                    data-font="Poppins"
                    data-auto-style="true"
                    data-button-label-capitalization="capitalize"
                    data-location-capitalization="capitalize"
                    data-venue-capitalization="capitalize"
                    data-display-details="true"
                    data-display-lineup="false"
                    data-display-start-time="true"
                    data-social-share-icon="false"
                    data-display-limit="5"
                    data-date-format="MMM DD, YYYY"
                    data-date-orientation="horizontal"
                    data-date-border-color="#4A4A4A"
                    data-event-ticket-cta-size="medium"
                    data-event-ticket-text="TICKETS"
                    data-event-ticket-cta-bg-color="#2563eb"
                    data-event-ticket-cta-text-color="#FFFFFF"
                ></a>
            </div>
        </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-32 px-4 max-w-4xl mx-auto relative z-10">
        <div class="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
            <i class="fas fa-quote-left absolute -top-6 -left-6 text-6xl text-blue-600/20"></i>
            
            <h2 class="text-3xl md:text-5xl font-bold mb-8 text-center uppercase text-white">About Us</h2>
            
            <p class="text-lg md:text-xl text-slate-300 leading-relaxed text-justify hyphens-auto">
                Aufgewachsen in den goldenen Jahren des Pop-Punk und Post-Hardcore haben <strong class="text-white">My Best Antic</strong> ihre Liebe für kraftvolle und emotionale Musik gefunden und seitdem nie verloren. Die vier Jungs aus Dresden schreiben sich den Frust des Lebens mit mitreißenden Gitarrenriffs, packenden Rhythmen und melodisch-zweistimmigem Gesang von der Seele und erzeugen damit einen Sound, der mal zum Tanzen und mal zum Nachdenken anregt. „My Best Antic“ - eben die beste Posse des Quartetts - steckt voller Zynismus, Kitsch, befreiender Wut und Hoffnung.
            </p>
        </div>
    </section>

    <!-- CONTACT SECTION (E-Mail only) -->
    <section id="contact" class="py-32 px-4 mb-20 relative z-10">
        <div class="max-w-2xl mx-auto w-full text-center flex flex-col items-center gap-10">
            <h2 class="text-4xl md:text-6xl font-bold mb-4 uppercase text-white">Contact</h2>
            
            <p class="text-slate-400 text-lg md:text-xl max-w-lg">
                Booking, Fragen oder einfach nur "Was geht" sagen? <br>
                Schreib uns direkt eine Mail.
            </p>

            <a 
                href="mailto:mybestantic@gmail.com"
                class="group relative inline-flex items-center justify-center gap-4 px-10 py-6 bg-slate-900 border border-white/10 rounded-2xl hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
                <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="text-left">
                    <span class="block text-xs text-slate-400 uppercase tracking-wider">Email us at</span>
                    <span class="block text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">mybestantic@gmail.com</span>
                </div>
            </a>
        </div>
    </section>

</main>