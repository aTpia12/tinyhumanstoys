
export default function Customers()
{
    return(
        <>
            <section className="carousel slide testimonials-slider testimonials1 kidsm4_testimonials1 cid-ucWQGCnGGW"
                     data-interval="false" id="testimonials1-g">
                <div className="d-md-block d-sm-none">
                    <h2 className="mbr-fonts-style mbr-section-title align-center display-2"><span
                        className="line-bg-warning">Qué dicen las Mamás y Papás </span><br/><span
                        className="line-bg-warning">sobre Nosotros</span></h2>
                    <h3 className="mbr-section-subtitle mbr-fonts-style align-center display-7">Aquí algunas reseñas de
                        nuestros queridos clientes</h3>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <div className="mbr-text mbr-text1 mbr-fonts-style align-left display-7"
                                             style={{height: '380px'}}>
                                            ¡Estoy encantada con la alberca de pelotas que compré en Tiny Humans para mi
                                            hijo de 3 años! La calidad es impresionante. Mi hijo ha estado pasando horas
                                            jugando ahi y realmente puedo ver cómo está estimulando su creatividad y
                                            habilidades. ¡Definitivamente volveré a comprar aquí!
                                            <svg className="quote_svg quote_svg1" viewBox="0 0 259.43 367.5">
                                                <path
                                                    d="M.53,0H255.84c15,14-23.29,233.58.07,367.5C255.91,367.5-13.49,272.51.53,0Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/images/family1.png"/>
                                            <div className="title-block">
                                                <h4 className="mbr-fonts-style signature mbr-bold display-7">María
                                                    Rodríguez, 34 años</h4>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <div className="mbr-text mbr-text2 mbr-fonts-style align-left display-7"
                                             style={{height: '380px'}}>
                                            ¡Qué descubrimiento fue encontrar Tiny Humans! Compré varios juguetes de
                                            madera para mi hija de 18 meses y no podría estar más feliz. Los juguetes
                                            son hermosos y, lo más importante, seguros para mi pequeña exploradora.
                                            <svg className="quote_svg quote_svg2" viewBox="0 0 259.43 367.5">
                                                <path
                                                    d="M.53,0H255.84c15,14-23.29,233.58.07,367.5C255.91,367.5-13.49,272.51.53,0Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/images/family2.png"/>
                                            <div className="title-block">
                                                <h4 className="mbr-fonts-style signature mbr-bold display-7">María
                                                    Ana Pérez, 29 años</h4>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <div className="mbr-text mbr-text3 mbr-fonts-style align-left display-7"
                                             style={{height: '380px'}}>
                                            ¡Altamente recomendado!, la guía de regalos me ayudó mucho a elegir que comprar para mi sobrino de 4 años.
                                            <svg className="quote_svg quote_svg3" viewBox="0 0 259.43 367.5">
                                                <path
                                                    d="M.53,0H255.84c15,14-23.29,233.58.07,367.5C255.91,367.5-13.49,272.51.53,0Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div className="img-block">
                                            <img src="assets/images/family3.png"/>
                                            <div className="title-block">
                                                <h4 className="mbr-fonts-style signature mbr-bold display-7">Laura Gómez, 31 años</h4>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}