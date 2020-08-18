<script context="module">
  export async function preload({ params }) {
    let producto = {};
    const response = require("../../productos.json").portabebes[`${params.id}`];
    producto = await response;
    return { producto };
  }

  //kidding
</script>

<script>
  import Carousel from "../../components/Carousel.svelte";
  export let producto;
</script>

<style>
  .nombreprod {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  /* @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"); */
  .carousel {
    border: 4px solid rgba(190, 86, 89, 0.5);
    border-radius: 24px;
  }
  .item {
    padding: 50px;
  }
  .info {
    font-family: "Comic Neue";
    color: rgb(190, 86, 89);
  }
  h1,
  h3 {
    font-weight: bold !important;
  }
  h5 {
    margin: 30px 0 0 40px;
    font-family: "Comic Neue";
  }
  a {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }
</style>

<div class="container-fluid">
  <h5>
    <a rel="prefetch" href="/portabebes">
      <i class="far fa-arrow-alt-circle-left" />
      Volver
    </a>
  </h5>
</div>
<div class="container">
  <div class="item">
    <h1 class="nombreprod info">{producto.nombre}</h1>
    <div class="row">
      <div class="col-12 col-lg-7 column">
        <div class="carousel">
          <Carousel fotos={producto.fotos} id={producto.id} todo="2" />
        </div>
      </div>
      <div class="col-12 offset-lg-1 offset-xl-0 col-lg-4 col-xl-5 column info">

        <span class="badge badge-danger m-1">Marca: {producto.marca}</span>
        {#each producto.fulldesc as fulldesc, i}
          <p>{fulldesc}</p>
        {/each}
        <button type="button" class="btn btn-success">
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5493624260839&text=Me%20interesa%20{producto.nombre}">
            <i class="fas fa-shopping-cart" />
            Comprar
          </a>
        </button>
      </div>
    </div>
  </div>
</div>
