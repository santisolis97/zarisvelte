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
    border-radius: 20px 20px 0 0;
  }
  .carousel-inner-todo {
    height: 600px;
    border-radius: 20px 20px 0 0;
  }
  .carousel-todo {
    width: 300px;
    border-radius: 20px 20px 0 0;
  }
  .imagen-solo {
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 600px;
    border-radius: 20px 20px 20px 20px;
  }
  .carousel-inner-solo {
    height: 600px;
    border-radius: 20px 20px 20px 20px;
  }
  .carousel-solo {
    width: 500px;
    border-radius: 20px 20px 20px 20px;
  }
  .imagen-prod {
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 600px;
    border-radius: 20px 20px 0 0;
  }
  .carousel-inner-prod {
    height: 600px;
    border-radius: 20px 20px 0 0;
  }
  .carousel-prod {
    width: 400px;
    border-radius: 20px 20px 0 0;
  }
</style>

<div
  id="myCarousel{id}"
  class="carousel slide"
  class:carousel-todo={todo === '1'}
  class:carousel-solo={todo === '2'}
  class:carousel-prod={todo === '3'}>

  <div
    class="carousel-inner"
    class:carousel-inner-todo={todo === '1'}
    class:carousel-inner-solo={todo === '2'}
    class:carousel-inner-prod={todo === '3'}>
    {#each fotos as foto, i}
      <div
        class="carousel-item {i === 0 ? 'active' : ''}"
        data-interval={fotos.length === 1 ? 'true' : 'false'}>
        <img
          src={foto}
          class="d-block w-100"
          class:imagen-todo={todo === '1'}
          class:imagen-solo={todo === '2'}
          class:imagen-prod={todo === '3'}
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
