import React from 'react'
import Footer from '../../../components/Footer'

export const Case2 = () => {
  return (
    <>
      <div className='container' style={{ paddingTop: '9.5rem' }}>
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#1D39E8' }} >
          <div className="col-lg-6 px-0">
            <h1 className="display-4 text-white hero-text">Amanda Todd</h1>
            <p className="lead my-3 text-white">Amanda Todd explica en el vídeo que fue engañada para enseñar sus pechos a través de la webcam, y que su imagen fue utilizada para chantajearla. </p>
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Violencia Digital
          </h3>

          <article className="blog-post" style={{ marginBottom: '5rem' }}>
            <h2 className="display-5 link-body-emphasis mb-1">Amanda Todd</h2>
            <p className="blog-post-meta">Julio 2023 <a href="#">Seminario</a></p>

            <p>Amanda Todd explica en el vídeo que fue engañada para enseñar sus pechos a través de la webcam, y que su imagen fue utilizada para chantajearla. Si no realizaba un striptease online, su agresor publicaría su topless. </p>
            <hr />
            <p>Las amenazas se cumplieron, su imagen fue publicada y distribuida a sus contactos, conocidos y profesores. Su agresor incluso creó un perfil de Facebook con la fotografía en topless como foto de perfil. Amanda tuvo que mudarse y cambiar de colegio huyendo de su agresor.</p>
            <p>Ya en un nuevo colegio, intentando buscar amigos, conoce a un chico que tiene novia, y ésta y sus amigos le agreden en las puertas del colegio, teniendo que ser hospitalizada por la agresión. Tras este acontecimiento, Amanda intenta suicidarse bebiendo lejía.</p>
            <p>Amanda vuelve a mudarse, pero el acoso continúa. El vídeo de la agresión había sido grabado, y los chicos y chicas continúan etiquetándola en Facebook en botes de lejía, instan a que se suicide de nuevo y desean que se muera.
              Amanda termina el vídeo diciendo que está deprimida, en tratamiento psicológico, y que se siente sola y necesita ayuda. (Canarias, 2015)

            </p>
            <p>
              Por otro lado, hoy en día existen muchas herramientas para informar y orientar  a los padres y a los alumnos sobre el bullying y el ciberbullying, aunque no se haga mucha utilidad de ellos.Por lo que, en nuestro caso, como profesores, debemos intentar que en los centros que trabajemos, se lleven a cabo campañas contra el acoso y se oriente a las familias y alumnos sobre esto, ya que debido a la falta de información que familias, padres, alumnos, profesores etc tienen sobre él, el bullying se ha llevado consigo gran cantidad de suicidios de víctimas que lo han sufrido y que no podían soportarlo. El caso de Amanda Todd es uno de los miles que existen y existirán, pero si cambiamos la mentalidad a tiempo, a lo mejor se pueden salvar muchas vidas evitando que menores pasen por este calvario, aunque el bullying no se erradique totalmente sí que podremos ayudar a algún niño que lo esté sufriendo. (ricardofdez, 2014)
            </p>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6yIhGau0qXg" allowFullScreen></iframe>
            </div>
          </article>


        </div>
      </div>
      <Footer></Footer>
    </>

  )
}
