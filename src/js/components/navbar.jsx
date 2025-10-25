import React from "react";

const Navbar = () => {

    return (

        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <li className="nav-item">
                                <img src="https://img.icons8.com/ios_filled/512/FFFFFF/formula-1.png" width="45" alt="" />
                            </li>
                        
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>

    )

}
export default Navbar;
