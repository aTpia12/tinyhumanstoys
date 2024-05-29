import { useState } from "react";

export default function Navbar()
{
    const handleDropdownClick = (e) => {
        e.stopPropagation();
    };

    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const redirectToUrl = () => {
        window.location.href = 'http://tinyhumanstoys.shop/';
    };

    return(
        <>
            <section className="menu kidsm4_menu1 cid-ucW2cs25rs" id="menu1-2">
                <nav className="navbar navbar-expand beta-menu navbar-dropdown navbar-toggleable-sm navbar-fixed-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <div className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                        <div className="menu-logo">
                            <div className="navbar-brand">
                            <span className="">
                                <img src="assets/images/logo-contorno-188x142.png" alt="" style={{height: '6rem'}}/>
                            </span>
                                <div className="logo-name align-center">
                                </div>
                            </div>
                        </div>
                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
                                <li className="nav-item">
                                    <a className="nav-link link dropdown-toggle text-info text-primary display-7"
                                       role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                                       aria-expanded="true"
                                       href="http://tinyhumanstoys.shop/" target="_blank"
                                       onMouseEnter={handleMouseEnter}
                                       onClick={redirectToUrl}
                                    >Tienda en Línea</a>

                                    <ul onMouseLeave={handleMouseLeave} className={`dropdown-menu ${showDropdown ? 'show' : ''}`} style={{marginLeft: "200px"}}
                                        aria-labelledby="dropdownMenuLink"

                                    >
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                <button className="nav-link link active" id="nav-home-tab" onClick={handleDropdownClick}
                                                        data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
                                                        role="tab" aria-controls="nav-home" aria-selected="true">Por edad
                                                </button>
                                                <button className="nav-link link" id="nav-profile-tab" data-bs-toggle="tab"
                                                        data-bs-target="#nav-profile" type="button" role="tab" onClick={handleDropdownClick}
                                                        aria-controls="nav-profile" aria-selected="false">Por tipo de juego
                                                </button>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                                 aria-labelledby="nav-home-tab" tabIndex="0">
                                                <div className="">
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="http://tinyhumanstoys.shop/product-categories/0-a-2">0 a 12 Meses</a>
                                                    </div>

                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="http://tinyhumanstoys.shop/product-categories/2-a-4">2 a 4 Años</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="http://tinyhumanstoys.shop/product-categories/4-a-6">4 a 6 Años</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="http://tinyhumanstoys.shop/product-categories/6-a-8">6 a 8 Años</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="http://tinyhumanstoys.shop/product-categories/8-en-adelante">8 Años en Adelante</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                                 aria-labelledby="nav-profile-tab" tabIndex="0">
                                                <div className="">
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="#">Social</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="#">De movimiento</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="#">Dramático</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="#">Mundo</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="#">De construcción</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="#">Creativo</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="#">Sensorial</a>
                                                    </div>
                                                    <div className="col-3">
                                                        <a className="dropdown-item text-info text-primary display-7" href="#">Exploratorio</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link text-info display-7" href="#">Aprende</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link link text-info display-7" href="#">Rebajas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link text-info display-7" href="#">Comunidad</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link link text-info display-7" href="#">Gift Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-buttons mbr-section-btn">
                            <a className="btn btn1 btn-warning display-4">
                                <span className="mbr-iconfont mbr-iconfont-btn socicon mbri-letter"></span></a>
                            <a className="btn btn2 btn-primary display-4" target="_blank" href="https://wa.me/5514582790"><br/>
                                <span className="socicon socicon-whatsapp mbr-iconfont mbr-iconfont-btn"></span>
                            </a>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}
