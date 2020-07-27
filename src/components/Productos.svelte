<script>
  export let id;
  export let nombre;
  export let precio;
  export let marca;
  export let subt;
  export let desc;
  export let uso;
  export let fotos;
  let control = "myCarousel" + id;
  let idControl = "#myCarousel" + id;
</script>

<style>
  .imagen {
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 600px;
    /* width: 3700px; */
  }
  .carousel-inner {
    height: 600px;
    /* width: 300px; */
  }
  .carousel {
    width: 300px;
  }
  .card {
    width: 300px;
  }
</style>

<div>
  <div class="card rounded">
    <div class="carousel slide" id={control}>
      <div class="carousel-inner">
        {#each fotos as foto, i}
          <div class="carousel-item {i === 1 ? 'active' : ''} ">
            <img alt="" class="d-block w-100 imagen rounded" src={foto} />

          </div>
        {/each}
      </div>
      <a
        class="carousel-control-prev"
        href={idControl}
        data-slide="prev"
        role="button">
        <span aria-hidden="true" class="carousel-control-prev-icon" />
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href={idControl}
        data-slide="next"
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
