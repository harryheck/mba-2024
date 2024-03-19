<script>
    import Step from "./Step.svelte";

    let steps = [
        {name: 'Mixing', icon: 'fa-solid fa-wave-square'},
        {name: 'Recording', icon: 'fa-solid fa-microphone-lines'},
        {name: 'Songwriting', icon: 'fa-solid fa-pencil'},
    ]

    let benefits = [
        {name: 'a musician at core', description: 'From composing heartfelt melodies to sculpting intricate soundscapes, my goal is always the same: to transport listeners to new worlds, stir their emotions, and leave them craving more.'},
        {name: 'a highly capable mixing engineer', description: 'From composing heartfelt melodies to sculpting intricate soundscapes, my goal is always the same: to transport listeners to new worlds, stir their emotions, and leave them craving more.'},
        {name: 'an overall cool guy', description: 'From composing heartfelt melodies to sculpting intricate soundscapes, my goal is always the same: to transport listeners to new worlds, stir their emotions, and leave them craving more.'},
    ]
</script>

<main class="flex flex-col flex-1 p-4">
    <section 
        id="introPage" 
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div 
        class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
            >
            <h2 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Hi! I'm <span class="poppins text-violet-400">Roman</span> 
                <br/>Schweikert
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I'm a <span class="text-violet-400">music </span>producer, mixer and songwriter based in Berlin, Germany. I specialize in guitar-driven music, audio description and sound design for film, TV and video games.
            </p>
            <button
            on:click={() => {
                const contactSection = document.getElementById('contact');
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }}
                class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-30 group-hover:translate-x-full z-0 duration-300"
                />
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </button>
            </div>
            
            <div class="relative shadow-2xl grid place-items-center">
                <img src={"images/rsprofile.png"} alt="Roman Schweikert"
                    class="object-cover z-[2] max-h-[70vh]"
                />
            </div>
    </section>



    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-20">
        <div class="flex flex-col gap-2 text-center">
            <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
                Recent Works
            </h3>
            <!--
            <h6 class="text-large sm:text-1xl md:text-2xl">
                A few of my recent works.
            </h6>
            -->
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 items-center justify-center mx-auto">

                <iframe 
                    title="Spotify Player"
                    style="border-radius:12px" src="https://open.spotify.com/embed/track/0zORRpenY5gJGcErcCjYCF?utm_source=generator" width="250" height="360" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>
                <iframe 
                    title="Spotify Player"
                    style="border-radius:12px" src="https://open.spotify.com/embed/track/7zhfeA51E1vBA6PiTmP8et?utm_source=generator" width="250" height="360" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>
                <iframe 
                    title="Spotify Player"
                    style="border-radius:12px" src="https://open.spotify.com/embed/track/15ifnorH9EWg2ZukT2Me6g?utm_source=generator" width="250" height="360" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>

            </div>

        
            <h4 class="font-semibold text-xl sm:text-2xl md:text-3xl text-center">
                Curious to <span class="poppins text-violet-400">hear</span> more?
            </h4>

            <a 
                href="https://open.spotify.com/playlist/0ParKjVggC9wXMnOWfxjis?si=39b18b67ce014a28"
                target="_blank"
                class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
                >
                <i class="fa-brands fa-spotify"></i>
                <p>Listen on Spotify</p>
            </a>
        </section>

        <section id="services" class="py-20 lg:py-32 flex flex-col gap-20">
            <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
                Services
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    <strong class="text-violet-400"> Mixing </strong>
                   refers to the process of making sure all the instruments in a track sound good together. This step is normally done by a mixing engineer using a DAW (or Digital Audio Workstation) and various mixing plug-ins. The mixing engineer’s goal is to polish up all the audio and get it to fit together using tools like EQ, compression, reverb, delay, panning, etc.
                </p>
                
            </Step>
            <Step step={steps[1]}>
                <p>
                    Once a song is written and arranged, it’s time to hit the studio to <strong class="text-violet-400"> record</strong>. A recording engineer is usually brought in to help choose the right microphones for the job, set up all the recording equipment, manage the levels on the mixing console, and oversee the entire recording process from start to finish. 
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    <strong class="text-violet-400">Songwriting</strong> refers to crafting the lyrics and melody of a piece of music. Lyricists can even work independently from songwriters. Songwriting is usually done by the artist or band, often with help from their producer. Sometimes music producers will hire a dedicated songwriter for a given project, or even act as the songwriter for the artists they’re working with.
                </p>
            </Step>

            </div>
        </section>

        <section 
            id="about" 
            class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
            >
            <div 
                class="flex flex-col gap-2 text-center relative before:absolute before:top-0
                before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
                after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
                >
                <h6 class="text-lg sm:text-2xl md:text-3xl">Want to know more?</h6>
                <h3>A bit <span class="poppins text-violet-400">about</span> me.
                </h3>
            </div>
            <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . . </p>
            <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
                {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500
                    font-semibold">
                    0{index+1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
                </div>
                {/each}
            </div>
    </section>
    <section 
        id="contact" 
        class="py-20 lg:py-32 flex flex-col gap-20"
        >
        <h3 class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Get in touch
        </h3>
        <div class="flex flex-col gap-4 items-center justify-center">

            <form class="flex flex-col gap-4 items-center w-full max-w-md">
                <div class="flex gap-4">
                    <input type="text" placeholder="First Name" class="px-4 py-2 border border-solid border-gray-300 rounded w-full text-black" />
                    <input type="text" placeholder="Last Name" class="px-4 py-2 border border-solid border-gray-300 rounded w-full text-black" />
                </div>
                <input type="email" placeholder="Email" class="px-4 py-2 border border-solid border-gray-300 rounded w-full text-black" />
                <input type="text" placeholder="Subject" class="px-4 py-2 border border-solid border-gray-300 rounded w-full text-black" />
                <textarea placeholder="Message" class="px-4 py-2 border border-solid border-gray-300 rounded w-full h-40 text-black"></textarea>
                <script>

                </script>
                <button type="submit" class="px-4 py-2 bg-violet-400 text-white rounded" on:click={sendEmail}>Submit</button>
            
            </form>

                            

        </section>

</main>