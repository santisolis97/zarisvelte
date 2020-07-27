<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

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

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
