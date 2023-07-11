import React from 'react'
import { Link } from 'react-router-dom'

export const Nabvar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top shadow-sm">
        <div className="container px-5">
            <a className="navbar-brand" href="index.html"><span className="fw-bolder">Seminario</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder p-1">
                    <li className="nav-item"><Link className="nav-link" href="index.html">Inicio</Link></li>
                    <li className="nav-item"><Link to='/case' className="nav-link" href="resume.html">Casos</Link></li>
                    <li className="nav-item"><Link to='/coments' className="nav-link" href="projects.html">Comentarios</Link></li>
                    <li className="nav-item"><Link to='/login' className="btn btn-primary rounded-0" href="projects.html">Iniciar Sesión</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
