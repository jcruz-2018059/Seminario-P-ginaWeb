import React from 'react'

export const Coment = ({ text, date }) => {
    return (
        <>
            <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div>
                            <h6 className="card-title mb-0"><a href="#!">Comentario</a></h6>
                            <p className="mb-0 small">9 November at 23:29</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body pb-0">
                <p>Find out how you can save time in the classroom this year. Earn recognition while you learn new skills on iPad and Mac. Start recognition your first Apple Teacher badge today!</p>
            </div>
            <div className="card-footer py-3">
                <ul className="nav nav-fill nav-stack small">
                    <li className="nav-item">
                        <a className="nav-link mb-0 active" href="#!"><i className="bi bi-heart pe-1"></i>Liked (56)</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mb-0" href="#!"><i className="bi bi-send-fill pe-1"></i>Send</a>
                    </li>
                </ul>

            </div>
        </>
    )
}
