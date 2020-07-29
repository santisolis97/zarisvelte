<script context="module">
  export async function preload() {
    let productos = {};
    const response = require("../../productos.json").productos;
    productos = await response;
    console.log(productos);
    return { productos };
  }
</script>

<script>
  import ProductoCard from "../../components/productoCard.svelte";
  import { onMount } from "svelte";
  import { identity } from "svelte/internal";
  // let productos = require("../../productos.json").portabebes;
  export let productos;
</script>

<style>
  /* @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"); */

  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 30px 0px 0 0;
    padding: 0;
  }
  .title {
    font-family: "Comic Neue";
    font-weight: bold;
    color: rgb(190, 86, 89);
  }
</style>

<div id="Productos">
  <br />
  <h2 class="d-flex justify-content-center title">PRODUCTOS</h2>
  <h2 class="d-flex justify-content-center title">RESPETUOSOS</h2>
  <div class="container-fluid ">
    <ul>
      <div class="row">
        {#each productos as producto (producto.id)}
          <li class="col-12 d-flex justify-content-center">
            <ProductoCard {...producto} />
          </li>
        {/each}
      </div>
    </ul>
  </div>
</div>
