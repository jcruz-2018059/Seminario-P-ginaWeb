import React from 'react'
import Footer from '../../components/Footer'

export const HomePage = () => {
  return (
    <>
    <header className="masthead" style={{ paddingTop: '9.5rem', paddingBottom: '5rem' }}>
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className="col-lg-6">
            <div className="mb-5 mb-lg-0 text-center text-lg-start">
              <p className="fw-bold hero-text">Violencia Cibernética</p>
              <h1 className="hero-title mb-3">Conciencia Digital</h1>
              <p className="lead fw-normal text-muted mb-5 normal-text">Tu voz tiene poder para detener la violencia" o Juntos
                podemos crear un entorno escolar seguro y libre de violencia.</p>
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <button className="btn btn-primary btn-lg px-5 py-2 me-sm-3 fs-6 rounded-0">Conocer</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="masthead-device-mockup">
              <img className="img-fluid" src="src\assets\ImageHero.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="bg-gradient-primary-to-secondary text-white" style={{ backgroundColor: '#1D39E8', paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container px-5 my-5">
        <div className="text-center">
          <h4 className="normal-text">
            <strong>Es hora de detener la violencia cibernética</strong>
            <br className="d-sm-none d-lg-block" /> y motivar a los jóvenes a encontrar su pasión. ¡Se parte del cambio!
          </h4>
        </div>
      </div>
    </section>

    <div className="container col-xxl-8">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-lg-6">
          <h4 style={{ fontSize: '20px' }}>¿Qué es?</h4>
          <h1 className="normal-title">Violencia</h1>
          <h1 className="normal-title color-text pb-5">Cibernética</h1>
          <p className="lead hero-text">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="src\assets\Imagen2.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
      </div>
    </div>

    <div className="container col-xxl-8">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6 d-none d-lg-block">
      <img src="src\assets\Imagen1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
    </div>
    <div className="col-lg-6 text-end">
      <h4 style={{ fontSize: '20px' }}>¿Qué es?</h4>
      <h1 className="normal-title">Violencia</h1>
      <h1 className="normal-title color-text pb-5">Cibernética</h1>
      <p className="lead hero-text">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    </div>
  </div>
</div>

    <div className="box">
      <div className="container text-center">
        <h1 className="fw-bold normal-text m-5" style={{ fontSize: '2rem' }}>Tipos de Violencia</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box-part text-center" style={{ backgroundColor: '#001179' }}>
              <div className="title text-white">
                <h4>Ciberacoso</h4>
              </div>
              <div className="text text-white">
                <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="box-part text-center" style={{ backgroundColor: '#F37587' }}>
              <div className="title text-white">
                <h4>Sexting no consensuado</h4>
              </div>
              <div className="text text-white">
                <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="box-part text-center" style={{ backgroundColor: '#601FD9' }}>
              <div className="title text-white">
                <h4>Grooming en línea</h4>
              </div>
              <div className="text text-white">
                <span>Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </>
  )
}
