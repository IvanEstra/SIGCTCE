import React, {Component} from 'react';
class Login extends Component {
    render() {
        return (
            <section className="container">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="row wrap-login100">
                            <div className="login100-form-title">
                                <span className="login100-form-title-1">Login</span>
                            </div>

                            <div className="text-center" style={{paddingTop:"10px"}}>
                                <img className="rounded hidalgo" src="Image/Logo.png" alt="IHJ Logo"/>
                            </div>
                                    <form>
                                        <div className="container">
                                            <div className="row justify-content-center">

                                                <div className="form-group col-md-7">
                                                <label for="InputEmail4">Correo Electronico</label>
                                                <input type="email" class="form-control" id="InputEmail1"  placeholder="Enter email"/>
                                                </div>
                                                <div className="form-group col-md-7">
                                                <label for="InputPassword4">Password</label>
                                                <input type="password" class="form-control" id="InputPassword1" placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div align="center">
                                            <button type="submit" class="btn btn-primary">Enviar</button>
                                            </div>
                                        </div>
                                     </form>
                        </div>
                    </div>
                </div>
            </section>
           
           
        );
     }
    }
    export default Login;