<script>
    import Carousel from './Carousel.svelte';
    export let id;
    export let nombre;
    export let precio;
    export let marca;
    export let subt;
    export let desc;
    export let uso;
    export let fotos;
    let todo = '1';
</script>

<div class="font">
    <div class="card">
        <Carousel {fotos} {id} {todo} />
        <div class="container badgecontainer">
            <div class="badges">
                <span class="badge badge-danger m-1">{precio}</span>
                <span class="badge badge-danger m-1">Marca:{marca}</span>
            </div>
        </div>
        <div class="card-body">
            <a rel="prefetch" href="/portabebes/{id}">

                <h4 class="card-title">
                    {nombre}
                    <span></span>

                    <i class="fas fa-external-link-alt"></i>
                </h4>
            </a>
            <h6 class="card-subtitle">{subt}</h6>
            <p class="card-text">{desc}</p>
            <p class="card-text">{uso}</p>
        </div>
    </div>
</div>

<style>
    .font {
        font-family: 'Comic Neue';
    }
    @media (min-width: 991px) {
        .card {
            width: 25vw;
        }
    }
    @media (max-width: 991px) and (min-width: 768px) {
        .card {
            width: 40vw;
        }
    }
    @media (max-width: 768px) {
        .card {
            width: 90vw;
        }
    }
    .card {
        border-radius: 23px;
        border: 3px solid rgba(190, 86, 89, 0.5);
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
    .card-body {
        padding-top: 10px;
    }
    .badgecontainer {
        padding-top: 5px;
    }
    h4 {
        color: rgb(190, 86, 89);
    }
    h4:hover {
        color: #ff7a6d;
    }
</style>
