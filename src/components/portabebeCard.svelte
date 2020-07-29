<script>
  import Carousel from "./Carousel.svelte";

  export let id;
  export let nombre;
  export let precio;
  export let marca;
  export let subt;
  export let desc;
  export let uso;
  export let fotos;
  let todo = "1";
</script>

<style>
  .card {
    width: 300px;
    border-radius: 20px;
  }
  span {
    margin: 2px !important;
  }
  p {
    margin-bottom: 0;
  }
  a {
    text-decoration: inherit;
    color: inherit;
    cursor: pointer;
  }
  h5 {
    color: rgb(190, 86, 89);
  }
  h5:hover {
    color: #ff7a6d;
  }
</style>

<div>
  <div class="card">
    <Carousel {fotos} {id} {todo} />
    <div class="container badgecontainer">
      <div class="row d-flex pt-1">
        <div class="badges">
          <span class="badge badge-danger m-1">{precio}</span>
          <span class="badge badge-danger m-1">Marca:{marca}</span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <a href="/portabebes/{id}">

        <h5 class="card-title">
          {nombre}
          <span />

          <i class="fas fa-external-link-alt" />
        </h5>
      </a>
      <h6 class="card-subtitle">{subt}</h6>
      <p class="card-text">{desc}</p>
      <p class="card-text">{uso}</p>
    </div>
  </div>
</div>
