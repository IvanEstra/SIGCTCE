import React, {Component} from 'react';
class Beneficiarios extends Component {
    render() {
        return (

<div className="container" style={{marginTop:30}}>
    <div className="row justify-content-center" >    
            <div className="">
                <nav className="menu">
                    <ul>
                        <li><a href="#">Talleres</a></li>
                        <li><a href="#">Cursos</a></li>
                        <li><a href="#">Usuarios</a></li>
                        <li><a href="#">Beneficiarios</a></li>
                    </ul>
                </nav>
            </div> 
    </div>
                <hr className="red small-margin"/><br/><br/><br/>

            <div className="row justify-content-start">
                <div className="col-12 col-md-7">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">NO.</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido Paterno</th>
                    <th scope="col">Apellido Materno</th>
                    <th scope="col">Email</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Curp</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Jose Manuel</td>
                    <td>Carrasco</td>
                    <td>Martinez</td>
                    <td>Carras42@gmail.com</td>
                    <td>H</td>
                    <td>CAMJ900421HCHRRN05</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>

                    <tr>
                    <th scope="row">2</th>
                    <td>Liliana</td>
                    <td>Gonzales</td>
                    <td>Linares</td>
                    <td>LiliG@gmail.com</td>
                    <td>M</td>
                    <td>GOLP850729MCHNNR03</td>
                    <td>
                    <a href="#" className="badge badge-warning icon-pencil">Modificar</a>
                    </td>
                    <td>
                    <a href="#" className="badge badge-danger icon-bin">Eliminar</a>
                    </td>
                    </tr>
                   
                </tbody>
                </table>
                </div>

            </div>

            
    </div>

        );
     }
    }
    export default Beneficiarios;