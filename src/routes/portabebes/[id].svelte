<script context="module">
    export async function preload({ params }) {
        let producto = {};
        const response = require('../../productos.json').portabebes[`${params.id}`];
        producto = await response;
        return { producto };
    }

    //kidding
</script>

<script>
    import Carousel from '../../components/Carousel.svelte';
    export let producto;
</script>

<div class="container-fluid">
    <h5>
        <a rel="prefetch" href="/productos">
            <i class="far fa-arrow-alt-circle-left"></i>
            Volver
        </a>
    </h5>
</div>
<div class="container">
    <div class="item">

        <div class="row">
            <div class="col-12 col-lg-7 column">
                <div class="carousel">
                    <Carousel fotos="{producto.fotos}" id="{producto.id}" todo="2" />
                </div>
            </div>
            <div class="col-12 offset-lg-1 offset-xl-0 col-lg-4 col-xl-5 column info">
                <h1>{producto.nombre}</h1>
                <span class="badge badge-danger m-1">{producto.precio}</span>
                <h3>Marca: {producto.marca}</h3>
                <p>{producto.subt}</p>
                <p>{producto.desc}</p>
                <p>{producto.uso}</p>
                <button type="button" class="btn btn-success">
                    <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=5493624260839&text=Me%20interesa%20{producto.nombre}"
                    >
                        <i class="fas fa-shopping-cart"></i>
                        Comprar
                    </a>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    /* @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"); */
    .carousel {
        border: 4px solid rgba(190, 86, 89, 0.5);
        border-radius: 24px;
    }
    .item {
        padding: 50px;
    }
    .info {
        font-family: 'Comic Neue';
        color: rgb(190, 86, 89);
    }
    h1,
    h3 {
        font-weight: bold !important;
    }
    h5 {
        margin: 30px 0 0 40px;
        font-family: 'Comic Neue';
    }
    a {
        text-decoration: inherit;
        color: inherit;
        cursor: pointer;
    }
</style>
