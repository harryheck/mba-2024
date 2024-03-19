<script>
    export let y;

    let tabs = [
        {name: 'Projects', link: '#projects'},
        {name: 'Services', link: '#services'},
        {name: 'About', link: '#about'},
        //{name: 'Contact', link: '#contact'},
        //{name: 'Blog', link: '#blog'}

    ];
</script>

<header 
    class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid ' + ( 
        y > 0 ? 'py-4 bg-slate-950 border-violet-950' : 'py-6 bg-transparent border-transparent'
    )}>

    <h1 class="font-medium">
        <b class="font-bold poppins">Roman</b> <span class="">Schweikert</span>
    </h1> 

    <div class="sm:flex ml-auto pr-4 items-center gap-4 hidden">
        {#each tabs as tab, index}
        <a
            href={tab.link}
            class="duration-200 hover:text-violet-400"
            >
            <p>{tab.name}</p>
        </a>
        {/each}
    </div>


    <a 
        href="mailto:roman.schweikert@gmail.com?subject=Projektanfrage" 
        target="_blank"
        class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
        >
        <div
            class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-30 group-hover:translate-x-full z-0 duration-300"
        />
    <h4 class="relative z-9">Get in touch</h4>
    </a>
</header>