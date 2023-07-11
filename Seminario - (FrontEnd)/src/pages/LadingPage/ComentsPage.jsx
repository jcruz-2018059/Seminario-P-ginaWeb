import React from 'react'
import Footer from '../../components/Footer'
import { Coment } from '../../components/Coment'

export const ComentsPage = () => {
    return (
        <>
            <div className='container' style={{ paddingTop: '9.5rem' }}>
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis" style={{ backgroundColor: '#1D39E8' }}>
                    <div className="row">
                        <div className="text-center text-white">

                            <h1 className=" hero-text fw-bold" style={{ fontSize: '35px' }}>Compartamos Ideas</h1>
                            <p className=''>Comentanos tu esperiencia en la página y que harías para resolver la violencia</p>

                            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">

                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddress" placeholder="Buscar Comentario" />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary btn-lg " id="submitButton" type="submit">Búscar</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

                <div className="card card-body" style={{ backgroundColor: '#F8F8F8' }}>
                    <div className="d-flex mb-3">
                        <form className="w-100">
                            <textarea className="form-control pe-4 border-0" rows="2" data-autoresize="" placeholder="Share your thoughts..."></textarea>
                        </form>
                    </div>
                    <ul className="nav nav-pills nav-stack small fw-normal">
                        <li className="nav-item">
                            <a className="nav-link bg-light py-1 px-2 mb-0" href="#!" data-bs-toggle="modal" data-bs-target="#feedActionPhoto">
                                <i className="bi bi-image-fill text-success pe-2"></i>Opinión
                            </a>
                        </li>
                        <button class="btn btn-primary rounded-pill px-3" type="button">Enviar</button>
                    </ul>
                </div>
                <div className='m-3 mt-4'>
                    <h3 class="pb-4 mb-4  border-bottom">
                        Caja de comentarios
                    </h3>
                </div>

                <div className="card" style={{ marginTop: '3rem', marginBottom: '5rem' }}>
                    <Coment></Coment>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
