import {Link} from 'react-router-dom'

function navBar(){
    return(
        <div>
              <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" Link to={"/"}>Features</Link>
      </li>
      <li className="nav-item">
      <Link to={"/Visualizar"} className="nav-link" >Features</Link>
      </li>
      <li className="nav-item">
      
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        </header>
        </div>
    )
}

export default navBar