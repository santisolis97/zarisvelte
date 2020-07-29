<script context="module">
  export async function preload() {
    let portabebes = {};
    const response = require("../../productos.json").portabebes;
    portabebes = await response;
    return { portabebes };
  }
</script>

<script>
  import PortabebeCard from "../../components/portabebeCard.svelte";
  import { identity } from "svelte/internal";
  // let portabebes = require("../../portabebes.json").portabebes;
  export let portabebes;
</script>

<style>
  /* @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"); */

  ul {
    list-style: none;
  }
  li {
    margin: 30px 0px 0 0;
  }
  .title {
    font-family: "Comic Neue";
    font-weight: bold;
    color: rgb(190, 86, 89);
  }
</style>

<br />
<h2 class="d-flex justify-content-center title">PORTABEBES</h2>
<div class="container ">
  <ul>
    <div class="row">
      {#each portabebes as portabebe (portabebe.id)}
        <li class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">

          <PortabebeCard {...portabebe} />
        </li>
      {/each}
    </div>
  </ul>
</div>
