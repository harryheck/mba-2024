<script>
    import Step from "./Step.svelte";

    let steps = [
        { name: "Mixing", icon: "fa-solid fa-wave-square" },
        { name: "Recording", icon: "fa-solid fa-microphone-lines" },
        { name: "Songwriting", icon: "fa-solid fa-pencil" },
    ];

    let benefits = [
        {
            name: "a musician at core",
            description:
                "From composing heartfelt melodies to sculpting intricate soundscapes, my goal is always the same: to transport listeners to new worlds, stir their emotions, and leave them craving more.",
        },
        {
            name: "a highly capable mixing engineer",
            description:
                "From composing heartfelt melodies to sculpting intricate soundscapes, my goal is always the same: to transport listeners to new worlds, stir their emotions, and leave them craving more.",
        },
        {
            name: "an overall cool guy",
            description:
                "From composing heartfelt melodies to sculpting intricate soundscapes, my goal is always the same: to transport listeners to new worlds, stir their emotions, and leave them craving more.",
        },
    ];
</script>

<main class="relative py-6 lg:py-12 flex flex-col gap-14 sm:gap-20 md:gap-24 my-auto">
    <section id="introPage" class="h-screen">
        <!-- Your intro content here -->
    </section>
    <section id="music" class="py-32 flex flex-col gap-20 z-10">
        <div class="flex flex-col gap-2 text-center">
            <h3
                class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"
            >
                Music
            </h3>
            <!--
            <h6 class="text-large sm:text-1xl md:text-2xl">
                A few of my recent works.
            </h6>
            -->
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 items-center justify-center mx-auto"
        >
            <iframe
                title="Spotify Player"
                style="border-radius:12px"
                src="https://open.spotify.com/embed/track/7zhfeA51E1vBA6PiTmP8et?utm_source=generator"
                width="250"
                height="360"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            >
            </iframe>
            <iframe
                title="Spotify Player"
                style="border-radius:12px"
                src="https://open.spotify.com/embed/track/4yfRbpAzcvHERqcvgB11Jz?utm_source=generator"
                width="250"
                height="360"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            >
            </iframe>
            <iframe
                title="Spotify Player"
                style="border-radius:12px"
                src="https://open.spotify.com/embed/track/5lub0KpCOpCKeiviwZl9wd?utm_source=generator"
                width="250"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            >
            </iframe>
        </div>

        <!--
            <h4 class="font-semibold text-xl sm:text-2xl md:text-3xl text-center">
                Curious to <span class="poppins text-blue-400">hear</span> more?
            </h4>
            -->
        <a
            href="https://open.spotify.com/artist/69HQoBBRhfFiSVKpjxFOKZ?si=HyKK2pceQz-hRhgK2EA50Q"
            target="_blank"
            class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-blue-400 duration-200"
        >
            <i class="fa-brands fa-spotify"></i>
            <p>Listen on Spotify</p>
        </a>
    </section>

    <section id="live" class="py-6 lg:py-12 flex flex-col gap-14 sm:gap-20 md:gap-24 my-auto">
        <h3
            class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"
        >
            Live
        </h3>  
        <!-- svelte-ignore a11y-missing-content -->
        <a
            href="https://www.songkick.com/artists/8379038"
            class="songkick-widget"
            data-theme="dark"
            data-track-button="off"
            data-detect-style="on"
            data-locale="de"
            data-other-artists="on"
            data-share-button="off"
            data-country-filter="on"
            data-rsvp="on"
            data-request-show="off"
            data-past-events="off"
            data-past-events-offtour="off"
            data-remind-me="off"
        ></a><script src="//widget-app.songkick.com/injector/8379038"></script>
    </section>

    <!--
    <section id="merch" class="py-20 lg:py-32 flex flex-col gap-20">
        <h3
            class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"
        >
            Merch
        </h3>
        <h6 class="text-center text-lg sm:text-2xl md:text-3xl leading-5">
            Coming soon!
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10"></div>
    </section>
    -->

    <section
        id="about"
        class="py-20 lg:py-32 flex flex-col gap-14 sm:gap-20 md:gap-24 mx-auto w-full max-w-[1400px]"
    >
        <h3
            class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"
        >
            About
        </h3>
        <div class="flex flex-col gap-4 relative before:absolute before:top-0 m-auto">
            <h6 class="text-center sm:text-xl md:text-2xl leading-5">
                Aufgewachsen in den goldenen Jahren des Pop-Punk und
                Post-Hardcore haben My Best Antic ihre Liebe für kraftvolle und
                emotionale Musik gefunden und seitdem nie verloren. Die vier
                Jungs aus Dresden schreiben sich den Frust des Lebens mit
                mitreißenden Gitarrenriffs, packenden Rhythmen und
                melodisch-zweistimmigem Gesang von der Seele und erzeugen damit
                einen Sound, der mal zum Tanzen und mal zum Nachdenken anregt.
                „My Best Antic“ - eben die beste Posse des Quartetts - steckt
                voller Zynismus, Kitsch, befreiender Wut und Hoffnung. Untermalt
                von einer starken Liveperformance entsteht so eine Mischung, die
                keine:n Konzertbesucher:in unberührt lässt.
            </h6>
        </div>
    </section>
    <section id="contact" class="py-20 lg:py-32 flex flex-col gap-20">
        <h3
            class="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center"
        >
            Get in touch
        </h3>

        <div class="flex items-center">
            <div class="container mx-auto">
                <div
                    class="max-w-md mx-auto bg-gray-800 p-5 rounded-md shadow-sm"
                >
                    <div class="text-center">
                        <p class="text-gray-600 dark:text-gray-400">
                            Fill up the form below to send us a message.
                        </p>
                    </div>
                    <div class="m-7">
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            id="form"
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value="6aa7cafe-bc6a-44d2-bca6-f43b47815c9e"
                            />
                            <input
                                type="hidden"
                                name="subject"
                                value="New Submission from Web3Forms"
                            />
                            <input
                                type="hidden"
                                name="redirect"
                                value="https://web3forms.com/success"
                            />
                            <input
                                type="checkbox"
                                name="botcheck"
                                id=""
                                style="display: none;"
                            />
                            <div class="mb-6">
                                <label
                                    for="name"
                                    class="block mb-2 font-medium text-sm text-gray-600 dark:text-gray-400"
                                    >Full Name</label
                                >
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="John Dorian"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div class="mb-6">
                                <label
                                    for="email"
                                    class="block mb-2 font-medium text-sm text-gray-600 dark:text-gray-400"
                                    >Email Address</label
                                >
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    required
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                />
                            </div>
                            <div class="mb-6">
                                <label
                                    for="message"
                                    class="block mb-2 font-medium text-sm text-gray-600 dark:text-gray-400"
                                    >Your Message</label
                                >

                                <textarea
                                    rows="5"
                                    name="message"
                                    id="message"
                                    placeholder="Your Message"
                                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    required
                                ></textarea>
                            </div>
                            <div class="mb-6">
                                <button
                                    type="submit"
                                    class="w-full px-3 py-4 text-white bg-blue-700 rounded-md focus:bg-indigo-600 focus:outline-none"
                                >
                                    Send Message
                                </button>
                            </div>
                            <p
                                class="text-base text-center text-gray-400"
                                id="result"
                            ></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!--<div class="flex flex-col gap-4 items-center justify-evenly">

            <form 
                class="flex flex-col gap-4 items-center w-full max-w-md"
                action="https://api.web3forms.com/submit" method="POST"
                    >

                    <input type="hidden" name="access_key" value="6aa7cafe-bc6a-44d2-bca6-f43b47815c9e
                    ">

            <div class="flex gap-4">
                <input type="text" placeholder="First Name" class="px-4 py-2 border border-solid border-gray-300 rounded w-full text-black" />
                <input type="text" placeholder="Last Name" class="px-4 py-2 border border-solid border-gray-300 rounded w-full text-black" />
            </div>
            <input type="email" placeholder="Email" class="px-4 py-2 border border-solid border-gray-300 rounded w-full text-black" />
            <input type="text" placeholder="Subject" class="px-4 py-2 border border-solid border-gray-300 rounded w-full text-black" />
            <textarea placeholder="Message" class="px-4 py-2 border border-solid border-gray-300 rounded w-full h-40 text-black"></textarea>
            <script>

                </script>
                <button type="submit" class="px-4 py-2 bg-blue-400 text-white rounded" on:click={sendEmail}>Submit</button>
            
            </form>

                            
-->
    </section>
</main>
