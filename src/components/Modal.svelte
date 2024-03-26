<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>



<div>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    class="gap-4 p-5 md:p-8 text-justify text-pretty tracking-tight leading-relaxed align-top rounded-lg"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}

    
>
<!-- svelte-ignore a11y-autofocus -->
<div class="flex justify-end p-2">
    <button autofocus on:click={() => dialog.close()}
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
    </button>
</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div 
    class="p-6 gap-4"
    on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />

	</div>
    



</dialog>
</div>
