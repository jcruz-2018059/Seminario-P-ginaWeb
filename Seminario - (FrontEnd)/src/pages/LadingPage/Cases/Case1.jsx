import React from 'react'
import Footer from '../../../components/Footer'

export const Case1 = () => {
  return (
    <>
      <div className='container' style={{ paddingTop: '9.5rem' }}>
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#1D39E8' }} >
          <div className="col-lg-6 px-0">
            <h1 className="display-4 text-white hero-text">Isabella Techenor</h1>
            <p className="lead my-3 text-white">Isabella "Izzy" Tichenor, una niña de 10 años residente en Utah (Estados Unidos), se ha suicidado después de sufrir acoso escolar por parte de algunos de sus compañeros.</p>
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Violencia Digital
          </h3>

          <article className="blog-post" style={{ marginBottom: '5rem' }}>
            <h2 className="display-5 link-body-emphasis mb-1">Isabella Techenor</h2>
            <p className="blog-post-meta">Julio 2023 <a href="#">Seminario</a></p>

            <p>Isabella "Izzy" Tichenor, una niña de 10 años residente en Utah (Estados Unidos), se ha suicidado después de sufrir acoso escolar por parte de algunos de sus compañeros.</p>
            <hr />
            <p>"Izzy era una niña feliz. Era una niña feliz, le iba bien en la escuela. Todo lo que quería era estar conectada con familiares y amigos", ha explicado el abogado de la familia. La joven comenzó a ser acosada a principios de septiembre. Los padres aseguran a la 'CNN' que hablaron con el profesor de la niña para comentarles el problema.</p>
            <p>La tragedia se produce pocas semanas después de que el Departamento de Justicia detallara públicamente un patrón perturbador en el que los estudiantes afroamericanos y asiático-americanos en el Distrito Escolar de Davis en Farmington, Utah, han sido acosados durante años y los funcionarios ignoraron deliberadamente las quejas de padres y estudiantes.</p>
            <p>
              Los padres explican que "cuando se dieron cuenta de que no estaban avanzando fueron al director". Éste les pasó con el subdirector, con quien sintieron quien se sintieron "muy desatendidos". Los padres explican que la niña sufría trastorno del espectro autista (TEA) y algunos compañeros utilizaron esta afección neurológica para reírse de ella. El Departamento de Justicia de Utah está "profundamente entristecido" por la muerte de Izzy, dijo a 'CNN' una portavoz del Departamento de Justicia.
            </p>
            <p>
              La 'CNN' se ha comunicado con la Junta de Educación del Distrito Escolar de Davis y la escuela primaria Foxboro para corroborar las acusaciones vertidas sobre este suceso, pero el distrito escolar se negó a comentar sobre los detalles, citando preocupaciones de privacidad, y en su lugar compartió un comunicado de prensa enviado a los medios locales. "La muerte de Izzy es trágica y devastadora. Nuestros corazones continúan estando con la familia, los amigos y la comunidad que están sufriendo esta pérdida. El bienestar de nuestros estudiantes siempre será una prioridad, y estamos comprometidos a evitar que esto suceda en el futuro ", ha manifestado el distrito escolar.
            </p>

            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/QUh4IlBdhCc" allowFullScreen></iframe>
            </div>
          </article>


        </div>
      </div>
      <Footer></Footer>
    </>

  )
}
