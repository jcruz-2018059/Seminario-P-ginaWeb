import React from 'react'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export const CasePage = () => {
    return (
        <> 
            <div className='container' style={{ paddingTop: '9.5rem' }}>
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#1D39E8' }}>
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <div>
                                <h1 className="hero-text text-white" style={{ fontSize: '30px' }}>Casos de Violencia</h1>
                                <p className="hero-text my-3 text-white">Explora nuestros artículos, consejos prácticos y testimonios para comprender mejor la violencia digital y encontrar recursos que te ayuden a enfrentarla. Juntos, podemos trabajar para construir un entorno digital seguro y respetuoso para todos.</p>
                                <p className="lead mb-0"><a href="#" className="btn btn-primary fw-bold text-white">Conoce más</a></p>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                            <img className='img-fluid' src="https://i.ibb.co/6vq8b47/Casos.png" alt="" width='400px' />
                        </div>
                    </div>
                </div>
      

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">Caso</strong>
                            <h3 className="mb-0">Isabella Techenor</h3>
                            <div className="mb-1 text-body-secondary">Jul 2023</div>
                            <p className="card-text mb-auto">Isabella "Izzy" Tichenor, una niña de 10 años residente en Utah (Estados Unidos), se ha suicidado después de sufrir acoso escolar por parte de algunos de sus compañeros. </p>
                            <Link to='caseOne' className="icon-link gap-1 icon-link-hover stretched-link">
                                Continuar Leyendo
                                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src="https://people.com/thmb/hY00H4p9l3MbZ4rCA4ShzaaC3gQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(710x554:712x556)/Isabella-Tichenor-2-d4619c5195494105a61830517c94649c.jpg" width='200' height='250' />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success-emphasis">Caso</strong>
                            <h3 className="mb-0">Amanda Todd</h3>
                            <div className="mb-1 text-body-secondary">Jul 2023</div>
                            <p className="mb-auto">Amanda Todd explica en el vídeo que fue engañada para enseñar sus pechos a través de la webcam, y que su imagen fue utilizada para chantajearla. </p>
                            <Link to='caseTwo' className="icon-link gap-1 icon-link-hover stretched-link">
                                Continuar Leyendo
                                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                        <img className='' src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/AmandaToddVideo.jpg/240px-AmandaToddVideo.jpg" width='200' height='250' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2 pb-5">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary-emphasis">Caso</strong>
                            <h3 className="mb-0">Carla Díaz</h3>
                            <div className="mb-1 text-body-secondary">Jul 2023</div>
                            <p className="card-text mb-auto">Carla Díaz se suicidó a los 14 años, en abril de 2013, víctima de acoso escolar. La condena de las dos menores encontradas responsables de ese hecho ha planteado de nuevo el problema del bullying. </p>
                            <Link to='caseThree' className="icon-link gap-1 icon-link-hover stretched-link">
                                Continuar Leyendo
                                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                        <img className='' src="https://www.cartasaldirector.org/wp-content/uploads/2015/01/carla_20571_11.jpg" width='200' height='250' />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success-emphasis">Caso</strong>
                            <h3 className="mb-0">Victor Becerra</h3>
                            <div className="mb-1 text-body-secondary">Jul 2023</div>
                            <p className="mb-auto">Víctor Becerra, un estudiante de primaria en la escuela Gabe P. Allen, vivió en silencio el acoso constante de sus compañeros durante casi un año. </p>
                            <Link to='caseFour' className="icon-link gap-1 icon-link-hover stretched-link">
                                Continuar Leyendo
                                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                        <img className='' src="https://st1.uvnimg.com/dims4/default/4fa95d7/2147483647/thumbnail/1240x698/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F7a%2Ff4%2F112cb64342d883ec3b694bd83035%2Fdf360c7d15e9427ebcb735d5a8d586fe" width='200' height='250' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <Footer></Footer>

        </>
    )
}
