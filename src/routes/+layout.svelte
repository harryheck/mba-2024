<script>
  import "@fontsource/poppins";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  
  let y = 0;
  
  function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<div class="font-poppins relative flex flex-col min-h-screen text-slate-50">
  <Header {y} />
  
  <!-- Main Content -->
  <slot />
  
  <Footer />

  <!-- Scroll to Top Button -->
  <div 
    class={"fixed bottom-8 right-8 z-50 transition-all duration-300 pointer-events-none " +
    (y > 300 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}
  >
    <button
      on:click={goTop}
      class="pointer-events-auto bg-blue-600 hover:bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg shadow-blue-900/50 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
      aria-label="Scroll to top"
    >
      <i class="fa-solid fa-arrow-up text-lg"></i>
    </button>
  </div>

</div>

<svelte:window bind:scrollY={y} />