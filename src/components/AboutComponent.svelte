<script>
  let ale = "assets/Images/about/ale.png";
  let estefi = "assets/Images/about/estefi.png";
</script>

<style>
  .bounce {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  .fa-angle-double-down {
    font-size: 70px !important;
  }
  @media (min-width: 768px) {
    .jumbotron {
      background-image: url("assets/Images/about/espacio.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      color: white;
      height: 90vh;
      margin: 0 !important;
      overflow: hidden;
      padding-top: 15px !important;
      padding-bottom: 0 !important;
      border-radius: 0 !important;
    }
    .arrow {
      text-align: center;
      margin: 8% 0;
      position: absolute;
      top: 80vh;
      left: 48vw;
      color: white;
      padding: 0;
      margin: 0;
      z-index: 4;
      display: inline;
      text-align: center;
      opacity: 0.6;
    }

    .title {
      padding-top: 29vh;
    }
    .lead {
      font-size: 1.7vw;
      padding-bottom: 20px;
      padding-top: 30vh;
    }

    .aleimg {
      max-width: 12vw;
      padding-left: 20px;
    }
  }

  .nosotras-title {
    padding: 15px;
    color: rgb(190, 86, 89) !important;
  }

  @media (max-width: 768px) {
    .jumbotron {
      background-image: url("assets/Images/about/espacio.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      color: white;
      height: auto;
      margin: 0 !important;
      overflow: hidden;
      padding-top: 15px !important;
      padding-bottom: 0 !important;
      border-radius: 0 !important;
    }

    .title {
      padding-top: 10vw;
    }
    .lead {
      font-size: 1.7vw;
      padding-bottom: 20px;
      padding-top: 1vh;
      margin-bottom: 25px;
    }

    .aleimg {
      max-width: 100px;
      padding-left: 20px;
    }
  }

  .fas {
    font-size: 70px;
    color: white !important;
  }

  .align-text-bottom {
    vertical-align: text-bottom !important;
  }

  .media {
    display: -ms-flexbox;
    padding: 5px;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .nosotras {
    padding: 15px;
    color: rgb(190, 86, 89) !important;
  }

  .espacio {
    color: rgb(190, 86, 89) !important;
    padding-bottom: 15px;
  }
  .visita {
    opacity: 0.5;
    padding-bottom: 3px;
  }

  .map {
    width: 100vw;
    height: 40vh;
  }
</style>

<div class="fullcontainer">
  <div class="jumbotron">
    <div class="banner">
      <div class="row">
        <div class="col-12 col-md-6 title pt-xs-10">
          <h1 class="display-2 text-center text-md-left">
            Nuestro
            <br />
            Inicio
          </h1>
        </div>
        <div class="col-12 col-md-6">
          <p class="lead align-text-middle desc">
            Nace de dos amigas con ganas de acompañar al bebé y su familia
            durante el nacimiento y crecimiento para
            <b>gestar</b>
            juntos consciencia sobre
            <b>crianza</b>
            respetuosa.
            <br />
            Sentimos y elegimos hacerlo brindando asesoramiento sobre
            <b>porteo</b>
            ergonómico (tanto particulares como grupales) y a través de la venta
            de
            <b>portabebes y articulos</b>
            respetuosos para los niños.
          </p>
        </div>

      </div>
      <span
        class="arrow bounce align-text-bottom d-none d-md-inline text-center">
        <i class="fas fa-angle-double-down align-text-bottom" />
      </span>
    </div>
  </div>
  <div class="container">
    <div class="row text-center">
      <div class="col">
        <h1 class="nosotras-title">Nosotras</h1>
      </div>
    </div>
    <div class="row nosotras text-center">
      <div class="col-12 col-md-6">
        <img alt="..." class="align-self-center mr-3 aleimg" src={ale} />
        <div class="media row">
          <div class="col-12">
            <div class="media-body">
              <h5 class="mt-0 mb-1">Ale</h5>
              <p>
                Estudiante avanzada de Administración de Empresas y trabaja como
                administrativa contable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <img alt="..." class="align-self-center mr-3 aleimg" src={estefi} />
        <div class="media row">
          <div class="col-12">
            <div class="media-body">
              <h5 class="mt-0 mb-1">Estefi</h5>
              <p>
                Organizadora de eventos/ Doula / Consultora en porteo de Crianza
                en Brazos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container espacio">
    <hr />
    <div class="row">
      <h1>Nuestro Espacio</h1>
    </div>
    <div class="row visita">
      <h5>Pactamos tu visita con previo aviso</h5>
    </div>
    <div class="row">
      <iframe
        title="mapa"
        allowFullScreen=""
        class="map"
        frameBorder="0"
        height="600"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.470949803796!2d-59.00476088484895!3d-27.454593982897237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450c86474e0c27%3A0x66a2b9bcf6bff521!2sCangallo+1137%2C+H3508+Resistencia%2C+Chaco!5e0!3m2!1ses-419!2sar!4v1556198319410!5m2!1ses-419!2sar"
        styles="border:0"
        width="800" />
    </div>
    <div class="row">
      <hr />
    </div>
  </div>
</div>
