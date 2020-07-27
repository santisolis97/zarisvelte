<script>
  import Productos from "../components/Productos";
  import { onMount } from "svelte";
  import { identity } from "svelte/internal";
  let productos = require("../productos.json").portabebes;
</script>

<style>
  ul {
    list-style: none;
  }
</style>

<div>
  <ul>
    {#each productos as producto (producto.id)}
      <li>
        <Productos {...producto} />
      </li>
    {/each}

  </ul>
</div>
<!-- <Productos portabebes={productosJSON} /> -->
