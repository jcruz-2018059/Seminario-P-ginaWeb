import React from 'react'
import Footer from '../../../components/Footer'

export const Case4 = () => {
  return (
    <>
      <div className='container' style={{ paddingTop: '9.5rem' }}>
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#1D39E8' }} >
          <div className="col-lg-6 px-0">
            <h1 className="display-4 text-white hero-text">Victor Becerra</h1>
            <p className="lead my-3 text-white">Víctor Becerra, un estudiante de primaria en la escuela Gabe P. Allen, vivió en silencio el acoso constante de sus compañeros durante casi un año. </p>
          </div>
        </div>
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Violencia Digital
          </h3>

          <article className="blog-post" style={{ marginBottom: '5rem' }}>
            <h2 className="display-5 link-body-emphasis mb-1">Victor Becerra</h2>
            <p className="blog-post-meta">Julio 2023 <a href="#">Seminario</a></p>

            <p>Víctor Becerra, un estudiante de primaria en la escuela Gabe P. Allen, vivió en silencio el acoso constante de sus compañeros durante casi un año. </p>
            <hr />
            <p>Los ataques constantes comenzaron a afectar su bienestar emocional y académico, hasta que finalmente decidió romper el silencio y contarle a sus padres lo que estaba experimentando.</p>
            <p>
              La valentía de Víctor al hablar sobre el acoso con sus padres resultó ser un punto de inflexión en su vida. Sus padres, conmocionados y preocupados por la situación de su hijo, tomaron medidas inmediatas para abordar el problema. Se reunieron con los maestros y directores de la escuela para informarles sobre la situación y exigir una intervención adecuada.

              La historia de Víctor inspiró a la comunidad escolar a tomar conciencia sobre el acoso y sus consecuencias. Los maestros y directores se comprometieron a implementar programas educativos y medidas disciplinarias más efectivas para prevenir y abordar el acoso escolar.

            </p>
            <p>
              Víctor recibió apoyo tanto de sus padres como de la comunidad escolar. Se le brindaron recursos emocionales y se le animó a hablar abiertamente sobre sus sentimientos. Además, se le ofreció asesoramiento y orientación para ayudarlo a recuperar su autoestima y confianza.

              Con el tiempo, Víctor logró superar el acoso y comenzó a reconstruir su vida. Desarrolló una mentalidad resiliente y se convirtió en un defensor activo contra el acoso escolar. Compartió su historia en charlas y eventos escolares, inspirando a otros a hablar y buscar ayuda.

            </p>
            <p>
              La historia de Víctor es un recordatorio de la importancia de abordar el acoso escolar de manera valiente y efectiva. Destaca la necesidad de una mayor conciencia y educación para prevenir este tipo de comportamiento dañino en las escuelas y comunidades. Con la intervención adecuada y el apoyo de los padres y la comunidad, cada estudiante puede tener la oportunidad de superar el acoso y tener una vida escolar positiva y segura.
            </p>

            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/TwnrKUceJbQ" allowFullScreen></iframe>
            </div>
          </article>


        </div>
      </div>

      <Footer></Footer>

    </>
  )
}
