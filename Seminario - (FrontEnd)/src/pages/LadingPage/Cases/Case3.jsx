import React from 'react'
import Footer from '../../../components/Footer'

export const Case3 = () => {
  return (
    <>
      <div className='container' style={{ paddingTop: '9.5rem' }}>
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#1D39E8' }} >
          <div className="col-lg-6 px-0">
            <h1 className="display-4 text-white hero-text">Carla Díaz</h1>
            <p className="lead my-3 text-white">Carla Díaz se suicidó a los 14 años, en abril de 2013, víctima de acoso escolar. La condena de las dos menores encontradas responsables de ese hecho ha planteado de nuevo el problema del bullying. </p>
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Violencia Digital
          </h3>

          <article className="blog-post" style={{ marginBottom: '5rem' }}>
            <h2 className="display-5 link-body-emphasis mb-1">Carla Díaz</h2>
            <p className="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

            <p>Carla Díaz se suicidó a los 14 años, en abril de 2013, víctima de acoso escolar. La condena de las dos menores encontradas responsables de ese hecho ha planteado de nuevo el problema del bullying. </p>
            <hr />
            <p>Ante una tragedia semejante, sólo queda el limitado consuelo de aprovechar la terrible experiencia para evitar que se repita. Por desgracia, de los temas educativos nos acordamos sólo cuando hay malas noticias. En 1983 se comenzó a tratar con rigor el acoso cuando, en Noruega, se suicidaron tres chicos de edades entre 13 y 14 años por esa causa. Se emprendió una campaña en educación primaria y secundaria, dirigida por Dan Olweus, que se convirtió en la autoridad de referencia en este tema. En España la preocupación se despertó con el suicido de Jokin, en 2006. </p>
            <p>
              A pesar de esto, para el juez no hubo suficientes pruebas y archivó su caso, ahora de nuevo reabierto con dos jóvenes imputadas. “Con las nuevas denuncias formuladas se aportaron más pruebas y todas las declaraciones que se formularon en fase de investigación entre fiscalía han venido a determinar la existencia no solo de indicios sino de pruebas concluyentes” explica Luis Manuel Fernández, abogado de la familia de Carla.
            </p>
            <p>
              Montserrat y sus abogados acusan a cuatro compañeras de Carla, pero, según el fiscal, solo dos serían culpables. También piden responsabilidades al colegio por no haber actuado a tiempo: “Desde el momento en que mi hija sale de casa a las ocho menos diez hasta las ocho y cuarto que es la hora de entrada, hasta las once de la mañana que el forense dictamina la hora del fallecimiento yo ahí hubiera tenido tiempo de localizarla”.
            </p>
            <p>
              Sobretodo exigen una sentencia firme que condene a las presuntas acosadoras de Carla por lo que aseguran que fue una persecución que acabó con su vida tipificado como un delito contra la integridad moral.
            </p>
            <p>
              En todas partes la preocupación es suscitada por hechos dramáticos. En Massachussets se promulgaron en abril de 2010 leyes estatales que exigen que los casos más severos de acoso escolar sean denunciados a las autoridades, después del suicidio de Phoebe Prince, de 15 años, harta del bullying de que era objeto. Muchos pensaron que una ley penal no resolvía el problema. En 2012, el caso de Amanda Todd, una niña que se suicidó después de dejar un video contando su historia, volvió a estremecer a Estados Unidos.
            </p>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ZT-N4dgqAgU" allowFullScreen></iframe>
            </div>
          </article>


        </div>
      </div>


      <Footer></Footer>
    </>
  )
}
