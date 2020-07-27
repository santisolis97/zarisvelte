<script>
  import AboutComponent from "../components/AboutComponent.svelte";
</script>

<style>
  .containerfluid {
    background: linear-gradient(
      90deg,
      rgb(252, 234, 188) 0,
      rgb(255, 247, 227) 70%,
      rgb(252, 234, 188)
    ) !important;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>
<div class="containerfluid">
  <AboutComponent />
</div>
