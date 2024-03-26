<script>
	export let modalContent;
</script>

<button on:click|self class='modal shadow-2xl w-11/12 h-11/12 md:w-10/12 md:h-10/12 lg:w-1/2 lg:h-1/2 align-center flex bg-white gap-4 p-5 md:p-8 text-justify text-pretty tracking-tight leading-relaxed align-top rounded-lg'>
    <div class='content overflow-auto gap-4 p-5 md:p-8 text-justify text-pretty tracking-tight leading-relaxed align-top rounded-lg'>
        <svelte:component on:click this={modalContent}/>
        
    </div>
</button>

