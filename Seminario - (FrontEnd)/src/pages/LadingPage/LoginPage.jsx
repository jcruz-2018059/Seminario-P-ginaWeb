import React from 'react'

export const LoginPage = () => {
    return (
        <>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
            </style>
            <div className="container " style={{ paddingTop: "150px", maxWidth: "900px", paddingBottom: "50px" }}>
                <div className="row justify-content-center shadow m-3">
                    <div className="col-md-6 p-md-5">
                        <div className="text-center">
                            <h4 className="mt-1 mb-5 pb-1 pt-5" id='iniciar'>Iniciar Sesión</h4>
                        </div>

                        <form>
                            <p>Ingresa tus datos</p>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example11">Usuario</label>
                                <input type="email" id="name" className="form-control" placeholder="Usuario" name='username' />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example22">Contraseña</label>
                                <input placeholder="Contraseña" type="password" id="form2Example22" className="form-control" name='password' />
                            </div>

                            <div className="text-center pt-1 mb-5 row">
                                <button onClick={(e) => login(e)} className="btn btn-primary col rounded-0" type="button">Iniciar sesión</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <img src="\src\assets\ImgLogin.png" alt="Imagen de inicio de sesión" className="img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}
