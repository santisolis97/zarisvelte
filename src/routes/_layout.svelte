<script>
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  // export let productos;
  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 100vw;
    background-color: white;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: linear-gradient(
      90deg,
      rgb(252, 234, 188) 0,
      rgb(255, 247, 227) 70%,
      rgb(252, 234, 188)
    ) !important;
  }
</style>

<svelte:head>
  <title>Zarigueya | Gestando Conciencia</title>
</svelte:head>
<Navbar {segment} />

<main>
  <slot />
</main>

<Footer />
