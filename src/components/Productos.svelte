<script>
  import { fix_position } from "svelte/internal";
  import About from "../routes/about.svelte";

  export let id;
  export let nombre;
  export let precio;
  export let marca;
  export let subt;
  export let desc;
  export let uso;
  export let fotos;
  console.log(fotos.length);
</script>

<style>
  .imagen {
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 500px !important;
    width: 370px;
    z-index: 4 !important;
  }
  .carousel-item {
    height: 500px;
    /* width: 370px; */
  }
</style>

<div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
  <div class="card rounded" styles="width: 18rem;">
    <div class="carousel slide" data-interval="false" {id}>
      <div class="carousel-inner">
        {#each fotos as foto, i}
          <div class="carousel-item {i === 1 ? 'active' : ''} ">
            <img alt="" class="d-block w-100 imagen rounded" src={foto} />
            <p>{foto}</p>
          </div>
        {/each}
      </div>
      <a
        class="carousel-control-prev"
        data-slide="prev"
        href="#{id}"
        role="button">
        <span aria-hidden="true" class="carousel-control-prev-icon" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        data-slide="next"
        href={id}
        role="button">
        <span aria-hidden="true" class="carousel-control-next-icon" />
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="container badgecontainer">
      <div class="row d-flex pt-1">
        <div class="badges">
          <span class="badge badge-danger m-1" />
          <span class="badge badge-danger m-1">Marca:{marca}</span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{nombre}</h5>
      <h6 class="card-subtitle">{subt}</h6>
      <p class="card-text">{desc}</p>
      <p class="card-text">{uso}</p>
    </div>
  </div>
</div>
