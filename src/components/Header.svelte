<script>
    export let y;

    let tabs = [
        { name: "Music", link: "#music" },
        { name: "Live", link: "#live" },
        { name: "About", link: "#about" },
        { name: "Contact", link: "#contact" },
        //{name: 'Merch', link: '#merch'}
        //{name: 'Blog', link: '#blog'}
    ];

    function goTop() {
        document.body.scrollIntoView({ behavior: "smooth" });
    }
</script>

<header
    class={"sticky z-[10] top-0 duration-300 px-3 md:px-6 flex w-auto " +
        (y > 0
            ? "py-4 bg-gray-950 bg-opacity-75 border-transparent"
            : "py-4 bg-gray-950 bg-opacity-50 border-transparent")}
>
    <button
        on:click={goTop}
        class="font-poppins text-xl md:text-2xl uppercase duration-200 hover:text-blue-400"
    >
        <b>My Best Antic</b>
    </button>

    <div
        class="hidden md:grid md:grid-cols-4 ml-auto place-items-center gap-0 md:gap-2 lg:gap-5 font-semibold sm:text-sm md:text-sm"
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

    <div
        class="font-poppins sm:flex ml-auto items-center gap-4 font-semibold md:text-xl  uppercase"
    >
        {#each tabs as tab, index}
            <a
                href={tab.link}
                on:click={(event) => {
                    event.preventDefault();
                    const target = document.querySelector(tab.link);
                    target.scrollIntoView({ behavior: "smooth" });
                }}
                class="duration-200 hover:text-blue-400"
            >
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
</header>
