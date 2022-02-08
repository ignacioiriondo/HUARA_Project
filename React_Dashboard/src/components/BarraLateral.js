import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/BarraLateral.css'

function BarraLateral(){
    return(
        <React.Fragment>
            <div className="barraLateral">
            <ul className="navbar-left">

                <li className="dash">
                    <Link className="nav-link" to="/">
                    <span>Huara Chocolates</span></Link>
                </li>

                
                <hr className="sidebar-divider"/>

              
                

                <div className="listado">
                <li className="nav-item">
                <Link className="nav-link" to="/totales">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>  Panel</span>
                    </Link>
                </li>
                <br></br>
                <li className="nav-item">
                <Link className="nav-link" to="/ultimo">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>  Last item</span>
                    </Link>
                </li>
                <br></br>
                
                <li className="nav-item">
                    <Link className="nav-link" to="/categorias">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>  Categorías</span></Link>
                </li>
                <br></br>
                
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/productos">
                        <i className="fas fa-fw fa-table"></i>
                        <span>  Productos</span></Link>
                </li>
                <br></br>
                </div>
                
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            </div>
        </React.Fragment>
    )
}
export default BarraLateral;