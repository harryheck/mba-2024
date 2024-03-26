<script>
    import Step from "./Step.svelte";

    import { fade } from "svelte/transition";

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

<main class="relative flex flex-col overflow-hidden">
    <section id="introPage" class="inset-0 min-h-screen z-[-10] border-b border-solid border-blue-950">
        <img
            class="inset-0 w-full h-full bg-auto min-h-screen object-cover"
            src="images/bg.jpg"
            alt="bg"
        />
        <div class="svg hidden">
            <svg>
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.6"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix
                        in="colorNoise"
                        type="matrix"
                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
                    />
                    <feComposite
                        operator="in"
                        in2="SourceGraphic"
                        result="monoNoise"
                    />
                    <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
                </filter>
            </svg>
        </div>
    </section>

    <section id="music" class="py-32 flex flex-col gap-20">
        <div class="flex flex-col gap-2 text-center">
            <h3
                class="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase"
            >
                Music
            </h3>
            <!--
            <h6 class="text-large sm:text-1xl md:text-2xl">
                A few of our recent songs.
            </h6>
            -->
        </div>

        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 items-center mx-auto"
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

    <section
        id="live"
        class="py-32 flex flex-col gap-14 sm:gap-20 md:gap-24 my-auto"
    >
        <h3
            class="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase"
        >
            Live
        </h3>

        <div class="w-full mx-auto max-w-[1400px] items-center">
            <script
                charset="utf-8"
                src="https://widgetv3.bandsintown.com/main.min.js"
            ></script>
            <a
                class="bit-widget-initializer"
                href="/foo"
                data-artist-name="id_10560649"
                data-background-color="rgba(2,6,23,1)"
                data-separator-color="rgba(159,159,159,1)"
                data-text-color="rgba(255,255,255,1)"
                data-font="Poppins"
                data-auto-style="true"
                data-button-label-capitalization="capitalize"
                data-header-capitalization="undefined"
                data-location-capitalization="capitalize"
                data-venue-capitalization="capitalize"
                data-local-dates-position=""
                data-display-details="true"
                data-display-lineup="true"
                data-display-start-time="true"
                data-social-share-icon="false"
                data-display-limit="5"
                data-date-format="MMM. DD YYYY"
                data-date-orientation="vertical"
                data-date-border-color="#4A4A4A"
                data-date-border-width="0px"
                data-date-capitalization="uppercase"
                data-date-border-radius="200px"
                data-event-ticket-cta-size="medium"
                data-event-custom-ticket-text=""
                data-event-ticket-text="TICKETS"
                data-event-ticket-icon="true"
                data-event-ticket-cta-text-color="#FFFFFF"
                data-event-ticket-cta-bg-color="#1d4ed8"
                data-event-ticket-cta-border-color="#4A4A4A"
                data-event-ticket-cta-border-width="0px"
                data-event-ticket-cta-border-radius="4px"
                data-sold-out-button-text-color="#FFFFFF"
                data-sold-out-button-background-color="#4A4A4A"
                data-sold-out-button-border-color="#4A4A4A"
                data-sold-out-button-clickable="true"
                data-event-rsvp-position="left"
                data-event-rsvp-cta-size="medium"
                data-event-rsvp-only-show-icon="undefined"
                data-event-rsvp-text="REMIND ME"
                data-event-rsvp-icon=""
                data-event-rsvp-cta-text-color="#4A4A4A"
                data-event-rsvp-cta-bg-color="#FFFFFF"
                data-event-rsvp-cta-border-color="#4A4A4A"
                data-event-rsvp-cta-border-width="1px"
                data-event-rsvp-cta-border-radius="4px"
                data-follow-section-position="hidden"
                data-follow-section-alignment="center"
                data-follow-section-header-text="Get updates on new shows, new music, and more."
                data-follow-section-cta-size="medium"
                data-follow-section-cta-text="FOLLOW"
                data-follow-section-cta-icon="true"
                data-follow-section-cta-text-color="#FFFFFF"
                data-follow-section-cta-bg-color="#4A4A4A"
                data-follow-section-cta-border-color="#4A4A4A"
                data-follow-section-cta-border-width="0px"
                data-follow-section-cta-border-radius="4px"
                data-play-my-city-position="hidden"
                data-play-my-city-alignment="Center"
                data-play-my-city-header-text="Don’t see a show near you?"
                data-play-my-city-cta-size="medium"
                data-play-my-city-cta-text="REQUEST A SHOW"
                data-play-my-city-cta-icon="true"
                data-play-my-city-cta-text-color="#FFFFFF"
                data-play-my-city-cta-bg-color="#4A4A4A"
                data-play-my-city-cta-border-color="#4A4A4A"
                data-play-my-city-cta-border-width="0px"
                data-play-my-city-cta-border-radius="4px"
                data-optin-font=""
                data-optin-text-color=""
                data-optin-bg-color=""
                data-optin-cta-text-color=""
                data-optin-cta-bg-color=""
                data-optin-cta-border-width=""
                data-optin-cta-border-radius=""
                data-optin-cta-border-color=""
                data-language="en"
                data-layout-breakpoint="900"
                data-app-id=""
                data-affil-code=""
                data-bit-logo-position="hidden"
                data-bit-logo-color="#CCCCCC"
            ></a>
        </div>
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
        class="py-32 flex flex-col gap-14 sm:gap-20 md:gap-24 mx-auto w-full max-w-[1400px]"
    >
        <h3
            class="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase"
        >
            About
        </h3>
        <div
            class="flex flex-col gap-4 relative before:absolute before:top-0 m-auto"
        >
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

    <section id="contact" class="py-32 flex flex-col gap-20">
        <h3
            class="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center uppercase"
        >
            Contact
        </h3>

        <div class="flex items-start">
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
    </section>
</main>
