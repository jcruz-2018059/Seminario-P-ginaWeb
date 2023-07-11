import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start">
      <div className="container p-4">
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-white normal-text">Seminario</h5>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Footer text</h5>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
              aliquam voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className="text-white">© 2020-2023</a>
        <a className="text-white">Seminario.com</a>
      </div>
    </footer>
  );
}

export default Footer;