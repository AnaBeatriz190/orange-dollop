function Footer(){
    return (
      <footer className="bg-success text-white py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <h5>Assuntos</h5>
              <ul className="list-unstyled">
                <li>Área de Imprensa</li>
                <li>Concursos Públicos</li>
                <li>Ouvidoria</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Serviços</h5>
              <ul className="list-unstyled">
                <li>Portal do Estudante</li>
                <li>Portal da Transparência</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Redes Sociais</h5>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;