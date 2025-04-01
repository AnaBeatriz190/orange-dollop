function Header(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="#">Instituto Federal da Paraiba <br />IFPB<br />MINISTERIO DA EDUCAÇÃO</a>
       
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div class="container-fluid">
                <form>
                    <input type="text"placeholder="Buscar no portal" />
                </form>
            </div>
        </nav>
          <div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Transparência</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Portal do Estudante</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Acesso à Informação</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  export default Header;