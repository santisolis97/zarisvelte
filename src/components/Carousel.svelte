<script>
  export let fotos;
  export let id;
  export let todo;
</script>

<style>
  .imagen-todo {
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 600px;
  }
  .carousel-inner-todo {
    height: 600px;
    /* width: 300px; */
  }
  .carousel-todo {
    width: 300px;
  }
  .imagen-solo {
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 600px;
  }
  .carousel-inner-solo {
    height: 600px;
    /* width: 300px; */
  }
  .carousel-solo {
    width: 500px;
  }
</style>

<div
  id="myCarousel{id}"
  class="carousel slide {todo === true ? 'carousel-todo' : 'carousel-solo'}">
  <div
    class="carousel-inner {todo === true ? 'carousel-inner-todo' : 'carousel-inner-solo'}">
    {#each fotos as foto, i}
      <div
        class="carousel-item {i === 1 ? 'active' : ''}
        "
        data-interval="false">
        <img
          src={foto}
          class="d-block w-100 {todo === true ? 'imagen-todo' : 'imagen-solo'}"
          alt="..." />
      </div>
    {/each}
  </div>
  <a
    class="carousel-control-prev"
    href="#myCarousel{id}"
    role="button"
    data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" />
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#myCarousel{id}"
    role="button"
    data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" />
    <span class="sr-only">Next</span>
  </a>
</div>
