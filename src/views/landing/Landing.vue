<template >
  <Landing>
    <main class="bg-dark text-white">
      <section class="py-5 text-center header container-fluid">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <p class="lead text-white">
              HAS OLVIDADO LA RENOVACION DE TU SOAT?
            </p>
            <p class="lead text-white">
              NO RECUERDAS EL ULTIMO CAMBIO DE ACEITE?
            </p>
            <p class="lead text-white">SOMOS LA SOLUCION A TUS NECESIDADES!</p>
            <p>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=co.com.cvcar.user"
                class="btn bg-danger text-white my-2"
                >DESCARGA LA APP</a
              >
            </p>
          </div>
        </div>
      </section>
      <section class="py-3 mt-5 text-center text-dark bg-white container">
        <div class="row py-lg-5">
          <div class="col-lg-8 mx-auto">
            <h2><span class="text-danger">CV</span> Usuarios</h2>
            <p class="lead mt-5">
              Propietarios de un automovil o motocicleta, consumidores de los
              productos o servicios que ofrecen nuestros cvaliados.
            </p>
            <p class="lead mb-5">
              Nuestos cvusuarios pueden registrar su automotor y llevar el
              registro de todos sus vencimientos o mantenimientos hechos a la
              fecha.
            </p>
            <p>
              <router-link to="/register" class="btn bg-danger text-white my-2"
                >REGISTRARME</router-link
              >
            </p>
          </div>
          <div class="col-lg-4 mx-auto">
            <img
              src="../../assets/img/img2.jpeg"
              class="img-fluid img-thumbnail"
            />
          </div>
        </div>
      </section>
      <section class="py-3 mt-5 text-center text-dark bg-white container">
        <div class="row py-lg-5">
          <div class="col-lg-4 mx-auto">
            <img
              src="../../assets/img/img1.jpeg"
              class="img-fluid img-thumbnail"
            />
          </div>
          <div class="col-lg-8 mx-auto">
            <h2><span class="text-danger">CV</span> Aliados</h2>
            <p class="lead mt-5">
              Es todo aquel establecimiento que comercializa o provee productos
              y/o servicios al sector automotriz.
            </p>
            <p class="lead mb-5">
              A traves de nuestra app tendras acceso a promociones, bonos,
              descuentos y premios por parte de nuestros cvaliados.
            </p>
            <p>
              <router-link to="/register" class="btn bg-danger text-white my-2"
                >REGISTRARME</router-link
              >
            </p>
          </div>
        </div>
      </section>
      <section class="py-5 bg-dark text-center container-fluid">
        <div class="row container py-lg-5">
          <div class="col-lg-12 mx-auto">
            <h2 class="text-danger">NUESTRA TRAYECTORIA</h2>
            <p class="lead mt-5 mb-5 text-white">
              <span class="text-danger">CV</span>CAR es un proyecto que inicia
              en el 2018 y a través de los años nos hemos presentado en
              diferentes eventos donde hemos obtenido premios por nuestras
              propuesta tecnologica, innovadora y de gran acogida.
            </p>
          </div>
        </div>
        <div class="row container">
          <div class="col-lg-4 mx-auto">
            <h4 class="text-white">APPS.CO 2018</h4>
            <img
              src="../../assets/img/img4.png"
              height="150"
              class="rounded-circle"
            />
          </div>
          <div class="col-lg-4 mx-auto">
            <h4 class="text-white">APPS.CO 2019</h4>
            <img
              src="../../assets/img/img3.png"
              height="150"
              class="rounded-circle"
            />
          </div>
          <div class="col-lg-4 mx-auto">
            <h4 class="text-white">FONDO EMPRENDER 2021</h4>
            <img
              src="../../assets/img/img5.png"
              height="150"
              class="rounded-circle"
            />
          </div>
        </div>
        <div class="row container py-lg-5">
          <div class="col-lg-4 mx-auto">
            <h4 class="text-white">STARCO CARIBE 2021</h4>
            <img
              src="../../assets/img/img6.png"
              height="150"
              class="rounded-circle"
            />
          </div>
          <div class="col-lg-4 mx-auto">
            <h4 class="text-white">STARCO MEDELLIN 2022</h4>
            <img
              src="../../assets/img/img7.png"
              height="150"
              class="rounded-circle"
            />
          </div>
          <div class="col-lg-4 mx-auto">
            <h4 class="text-white">FERIA MEDELLIN AUTOPARTES</h4>
            <img
              src="../../assets/img/img8.png"
              height="150"
              class="rounded-circle"
            />
          </div>
        </div>
      </section>
    </main>
  </Landing>
</template>

<script>
import Landing from "@/components/layout/Landing.vue";

export default {
  name: "landing",
  components: {
    Landing,
  },
};
</script>