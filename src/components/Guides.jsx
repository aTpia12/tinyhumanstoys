import { useState, useEffect } from "react";
import TypeGuide from './cards/TypeGuide';
import dataTypesPlay from "../databases/dataTypesPlay.js";
import TypePlay from "./cards/TypePlay.jsx";

export default function Guides()
{

    const[plays, setPlays] = useState([]);

    useEffect(() => {
        setPlays(dataTypesPlay)
    }, []);

    return(
        <>
            <section className="title3 kidsm4_title3 cid-ucWLktv7CW" id="title3-9">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="title col-sm-12 col-md-10 col-lg-7 align-center">
                            <h2 className="mbr-section-title align-center mbr-fonts-style display-5">
                                Descubre nuestra guía educativa por edad y por tipo de juego
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features4 kidsm4_features4 cid-ucZdLQvkjB" id="features4-v">
                <svg className="svg-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1428 94.61">
                    <g id="Layer_3" data-name="Layer 3">
                        <path className="cls-1" d="M-83,10" transform="translate(83 33)"></path>
                        <path
                            className="cls-2"
                            d="M986.33,46.5s132.5-37,318,0C1304.33,46.5,1200.83,80.5,986.33,46.5Z"
                            transform="translate(83 33)">
                        </path>
                    </g>
                    <g id="Layer_4" data-name="Layer 4">
                        <path className="cls-2"
                              d="M-83,10S127,65.11,394,30.06,986.33,46.5,986.33,46.5,1218,83,1345,38V-33H-83Z"
                              transform="translate(83 33)">
                        </path>
                    </g>
                </svg>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <TypeGuide
                            text="Cada etapa del crecimiento infantil presenta diferentes necesidades y habilidades"
                            image="childrens.jpg"
                            border="svg1"
                            type="Por Edad"
                        />
                        <TypeGuide
                            text="Actividades para los Esquemas de Aprendizaje para cada todos los niños"
                            image="ludicgames.jpg"
                            border="svg2"
                            type="Por Tipo de juego"
                        />
                    </div>
                </div>
                <svg className="svg-1" id="curve" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 1428 130.87">
                    <path className="cls-1"
                          d="M-83,345V288s158-27,262-22l104,5,138,8,300,21s245,4,281-5c0,0-9-39,33-45,0,0,8-51,58-25,0,0,48-36,61,23,0,0,27,2,28,24,0,0,163-22,163-17v90Z"
                          transform="translate(83 -214.13)">
                    </path>
                </svg>
            </section>

            <section className="features7 kidsm4_features7 cid-ucWM6OINSe" id="features7-a">
                <div className="container-fluid">
                    <div className="row">
                        <div className="align-center col-md-12 title">
                            <h3 className="mbr-section-title mbr-fonts-style line-bg-warning display-2">Guía Educativa
                                por
                                Edad</h3>
                            <h4 className="mbr-section-subtitle mbr-fonts-style display-7">Seleccionar un juguete
                                adecuado
                                para la edad de un niño es crucial, ya que un juguete bien elegido no solo proporciona
                                entretenimiento, sino que también contribuye significativamente a su desarrollo físico,
                                cognitivo y emocional.&nbsp;</h4>
                        </div>
                    </div>
                    <div className="wrapper-row">
                        <div className="column-1">
                            <div className="card">
                                <div className="card-box card-left">
                                    <h4 className="card-title mbr-fonts-style display-5">0 a 12 meses</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">Estimular los sentidos y el
                                        desarrollo motor</p>
                                </div>

                            </div>

                            <div className="card">
                                <div className="card-box card-left">
                                    <h4 className="card-title mbr-fonts-style display-5">1 a 2 años</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Enfocados en el desarrollo de la curiosidad
                                    </p>
                                </div>

                            </div>

                            <div className="card">
                                <div className="card-box card-left">
                                    <h4 className="card-title mbr-fonts-style display-5">2 a 4 años</h4>
                                    <p className="mbr-text last-text mbr-fonts-style display-7">
                                        Fomentan&nbsp; las habilidades motoras finas
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="align-center imageContainer">
                            <img className="circle-img" src="assets/images/recurso-5.png" alt=""/>
                        </div>
                        <div className="column-2">
                            <div className="card card-right">
                                <div className="item-image">
                                    <img src="assets/images/elephant1-2.png" alt=""/>
                                </div>
                                <div className="card-box card-box2">
                                    <h4 className="card-title mbr-fonts-style display-5">4 a 6 años</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">Ayudan a las habilidades sociales
                                        y
                                        cognitivas</p>
                                </div>
                            </div>

                            <div className="card">

                                <div className="card-box card-box2">
                                    <h4 className="card-title mbr-fonts-style display-5">6 a 8 años</h4>
                                    <p className="mbr-text mbr-fonts-style display-7">
                                        Están diseñados para fomentar el pensamiento lógico y la creatividad</p>
                                </div>
                            </div>

                            <div className="card card-right">

                                <div className="card-box card-box2">
                                    <h4 className="card-title mbr-fonts-style display-5">
                                        8 años en adelante</h4>
                                    <p className="mbr-text last-text mbr-fonts-style display-7">
                                        Enfocados en intereses más específicos y habilidades avanzadas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gallery1 growthm5 cid-ucZmOFTsjq" id="agallery1-z">
                <div className="container">
                    <div className="mbr-section-head">
                        <h4 className="mbr-section-title mbr-fonts-style display-2">Guía Educativa por Tipo de
                            Juego</h4>
                        <p className="mbr-section-title mbr-fonts-style display-7">A través del juego nos relacionamos
                            con el entorno, aprendemos, socializamos, potenciamos la creatividad y la imaginación, y
                            canalizamos el estrés y la ansiedad. El juego potencia la autonomía, la independencia, la
                            autoestima y fomenta el descubrimiento de nuestra propia identidad.</p>
                        <p className="mbr-section-title mbr-fonts-style display-7">Los juguetes son los instrumentos en torno a los cuales creamos el juego o las herramientas de apoyo que lo acompañan y ayudan a desarrollar determinadas capacidades intelectuales, afectivas y sociales. De ahí la importancia de elegir el juguete adecuado para nuestros hijos e hijas en base a la etapa de juego en la que se encuentre y el tipo de juego que le llama más la atención.</p>
                    </div>
                    <div className="row item-row">
                        {
                            plays.map((type) => (
                                <TypePlay
                                    key={type.id}
                                    image={type.image}
                                    title={type.title}
                                    description={type.description}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="tabs1 kidsm4_tabs1 tabs cid-ucWNfWnCE7" id="tabs1-d">
                <div className="container-fluid">
                    <h2 className="mbr-section-title align-center mbr-fonts-style pb-3 display-2">
                        Quienes Somos<br/></h2>
                    <h3 className="mbr-section-subtitle align-center mbr-light mbr-fonts-style pb-3 display-7"><strong>Conoce
                        a fondo a Tiny Humans Toys</strong></h3>
                    <div className="media-container-row">
                        <div className="col-12 wrapper-tab">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active mbr-fonts-style show display-10" id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#home-tab-pane" type="button" role="tab"
                                            aria-controls="home-tab-pane" aria-selected="true">Nuestro Compromiso
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link mbr-fonts-style show display-10" id="profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#profile-tab-pane" type="button" role="tab"
                                            aria-controls="profile-tab-pane" aria-selected="false">¿Quién está detrás?
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link mbr-fonts-style show display-10" id="contact-tab" data-bs-toggle="tab"
                                            data-bs-target="#contact-tab-pane" type="button" role="tab"
                                            aria-controls="contact-tab-pane" aria-selected="false">Valores
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                     aria-labelledby="home-tab" tabIndex="0">
                                    <div className="row align-items-center">
                                        <div className="left-column col-lg-6">
                                            <h4 className="display-2 title-content pb-2 mbr-fonts-style">Nuestro
                                                Compromiso</h4>
                                            <p className="mbr-text mbr-fonts-style align-left display-7">Queremos que tu
                                                experiencia en <strong>Tiny Humans Toys</strong> sea increíble, para que
                                                siempre quieras volver.<br/>
                                                <br/>Por eso nos esforzamos cada día en ofrecer un servicio de calidad y
                                                cercano así como productos de excelente calidad y durabilidad. Porque no
                                                importa que estés a punto de hacer tu primera compra o seas un cliente
                                                habitual, para nosotros es muy importante estar ahí siempre que nos
                                                necesites.
                                                <br/>
                                                <br/>Sabemos que la elección de juguetes para tus pequeños humanos es
                                                algo muy importante y por eso hemos preparado unas opciones de
                                                clasificación de juguetes para ti, para que encuentres lo que buscas
                                                mucho más rápido.<br/></p>
                                            <div>


                                                <div className="wrapper">
                                                    <img className="icon-img" src="assets/images/elephant3.png" alt=""/>
                                                    <h4 className="card-title mbr-fonts-style display-5"></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-img">
                                                <img alt="" className="right-img"
                                                     src="assets/images/non-binary-kid-playing-with-colorful-game-home.jpeg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                                     aria-labelledby="profile-tab" tabIndex="0">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="card-img card-img2">
                                                <img alt="" className="right-img" src="assets/images/melina.png"/></div>
                                        </div>
                                        <div className="right-column col-lg-6">
                                            <h4 className="display-2 title-content pb-2 mbr-fonts-style">¿Y quién está
                                                detrás de Tiny Humans Toys?<br/><br/></h4>
                                            <p className="mbr-text mbr-fonts-style display-7">Hola! Soy Melina, mamá de
                                                2 preciosas Humanas pequeñas que han sido mi inspiración para
                                                crear <strong>Tiny Humans Toys. </strong>Soy Ingeniera industrial con
                                                una maestría en alta dirección del IPADE, pero a la hora de ser mamá los
                                                retos están muy por encima de mis grados académicos y desde que mi
                                                primera hija nació, comencé a interesarme en la forma de educarla, jugar
                                                con ella y establecer vínculos emocionales fuertes con ella, y que
                                                cierta es la frase de “ya entenderás cuando seas mamá”.<br/>
                                                <br/>He comenzado un viaje de aprendizaje sobre la disciplina
                                                consciente, el juego como parte fundamental del desarrollo cerebral del
                                                niño, psicopedagogía y desarrollo emocional, milestones de desarrollo de
                                                1 a 3 años, por lo que también compartiré contigo mis aprendizajes y mom
                                                hacks que pueden apoyarte en tu labor de mamá.<br/></p>
                                            <div>


                                                <div className="wrapper">
                                                    <img className="icon-img" src="assets/images/elephant3-2.png"
                                                         alt=""/>
                                                    <h4 className="card-title mbr-fonts-style display-5"></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                                     aria-labelledby="contact-tab" tabIndex="0">
                                    <div className="row align-items-center">
                                        <div className="left-column col-lg-6">
                                            <h4 className="display-2 title-content pb-2 mbr-fonts-style">
                                                Nuestros Valores</h4>
                                            <p className="mbr-text mbr-fonts-style display-4">
                                                En <strong>Tiny Humans Toys</strong>, nos enorgullecemos de ofrecer más
                                                que simples juguetes. Nos esforzamos por ser un lugar donde los valores
                                                fundamentales se entrelazan con cada pieza que vendemos. Creemos
                                                firmemente en:<br/><br/><strong>-Calidad y
                                                Durabilidad:</strong>&nbsp;Compañeros confiables en el -viaje de
                                                aprendizaje de tus hijos.<br/><strong>-Aprendizaje a través del
                                                Juego: </strong>Fomenta la curiosidad, creatividad y pensamiento
                                                crítico.<br/><strong>-Sostenibilidad y Respeto por el Medio
                                                Ambiente:&nbsp;</strong>Contribución a la preservación del planeta para
                                                las generaciones futuras.<br/><strong>-Diversidad e
                                                Inclusión:</strong>&nbsp; Todos los niños se sienten representados y
                                                valorados.<br/><strong>-Fomento de Vínculos
                                                Familiares:&nbsp;</strong> Creación de recuerdos inolvidables que
                                                perdurarán toda la vida.<br/><br/>En <strong>Tiny Human Toys</strong>,
                                                estamos comprometidos con estos valores y nos esforzamos por brindar a
                                                nuestros clientes una experiencia de compra que refleje nuestro
                                                compromiso con la calidad, la educación y el cuidado del medio ambiente.
                                                <br/><br/><strong>¡Únete a nosotros en este emocionante viaje de
                                                aprendizaje y descubrimiento!</strong><br/></p>
                                            <div>


                                                <div className="wrapper">
                                                    <img className="icon-img" src="assets/images/elephant3-3.png"
                                                         alt=""/>
                                                    <h4 className="card-title mbr-fonts-style display-5"><br/><br/></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card-img">
                                                <img alt="" className="right-img"
                                                     src="assets/images/kid-playing-their-room.jpeg"/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}