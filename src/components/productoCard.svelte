<script>
    import Carousel from './Carousel.svelte';
    export let id;
    export let nombre;
    export let precio;
    export let marca;
    export let desc;
    export let fotos;
    let todo = '3';
</script>

<div class="font">
    <div class="card">
        <Carousel {fotos} {id} {todo} />
        <div class="container badgecontainer">
            <div class="badges">
                <span class="badge badge-danger m-1">{precio}</span>
                <span class="badge badge-danger m-1">{marca}</span>
            </div>
        </div>
        <div class="card-body">
            <a href="/productos/{id}">

                <h4 class="card-title">
                    {nombre}
                    <span></span>
                    <i class="fas fa-external-link-alt"></i>
                </h4>
            </a>
            <p class="card-text">{desc}</p>
        </div>
    </div>
</div>

<style>
    .font {
        font-family: 'Comic Neue';
    }
    @media (min-width: 768px) {
        .card {
            width: 70vw;
        }
    }

    @media (max-width: 768px) {
        .card {
            width: 90vw;
        }
    }
    .card-body {
        padding-top: 10px;
    }
    .badgecontainer {
        padding-top: 5px;
    }

    .card {
        border-radius: 23px;
        border: 3px solid rgba(190, 86, 89, 0.8);
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
    h4 {
        color: rgb(190, 86, 89);
    }
    h4:hover {
        color: #ff7a6d;
    }
</style>
