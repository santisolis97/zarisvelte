<script>
  export let segment;
  let logo = "/assets/Images/Logos/logo.png";
</script>

<style>
  .navbar-light .navbar-toggler {
    border-color: rgba(0, 0, 0, 0);
    padding-top: 10px;
  }
  .navbar-light:focus:active .navbar-toggler:focus:active {
    border-color: rgba(0, 0, 0, 0);
    padding-top: 10px;
  }
  nav {
    background: linear-gradient(
      90deg,
      rgb(252, 234, 188) 0,
      rgb(255, 247, 227) 70%,
      rgb(252, 234, 188)
    ) !important;
    font-family: "Comic Neue";
    font-size: 25px;
    font-weight: 800 !important;
    /* border-bottom: 1px solid rgba(255, 62, 0, 0.1); */
    padding: 0 1em;
  }
  li {
    display: block;
    float: left;
  }
  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 0.5em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    color: rgb(190, 86, 89) !important;
    text-decoration: none;
    padding: 0 0.5em;
    display: block;
  }
  a:hover {
    color: #ff7a6d !important;
    text-decoration: none;
    padding: 0 0.5em;
    display: block;
  }
  .navbar-nav {
    text-align: center !important;
  }
  .logo1 {
    max-width: 80px;
  }

  .logo3 {
    max-width: 200px;
  }
</style>

<nav class="navbar container-fluid navbar-expand-lg navbar-light bg-light">
  <a rel="prefetch" class="navbar-brand" href="/">
    <img class="logo1" src="/assets/Images/Logos/logo.png" alt="" />
    <img class="logo3" src="/assets/Images/Logos/logo3.png" alt="" />
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
        class="nav-item active">
        <a
          rel="prefetch"
          aria-current={segment === undefined ? 'page' : undefined}
          class="nav-link"
          href="/">
          Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
        class="nav-item">
        <a
          rel="prefetch"
          aria-current={segment === 'about' ? 'page' : undefined}
          class="nav-link"
          href="/about">
          Quienes Somos?
        </a>
      </li>
      <li
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
        class="nav-item">
        <a
          rel="prefetch"
          aria-current={segment === 'portabebes' ? 'page' : undefined}
          class="nav-link"
          href="/portabebes#">
          Portabebés
        </a>
      </li>
      <li
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
        class="nav-item">
        <a
          rel="prefetch"
          aria-current={segment === 'productos' ? 'page' : undefined}
          class="nav-link"
          href="/productos">
          Productos Respetuosos
        </a>
      </li>

    </ul>
  </div>
</nav>
