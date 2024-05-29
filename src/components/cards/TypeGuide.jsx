
export default function typeGuide( { text, image, border, type } )
{
    return(
        <>
            <div className="card col-12 col-md-8 col-lg-6">
                <div className="circle-icon">
                    <div className="row-cols-1 p-3">
                        <span className={`wgl-icon`}>
                        <a href="#">
                            <img className="rounded " alt="por edad" src={`assets/images/${image}`} width="80%"/>
                        </a>
                    </span>
                        <div className="card-box col">
                            <h4 className="card-title mbr-fonts-style display-5">{type}</h4>
                            <p className="mbr-text mbr-fonts-style display-7">
                                {text}
                            </p>
                        </div>
                    </div>

                    <svg className={`wgl-dashes ${border} inner-dashed-border animated-dashes`} fill="transparent"
                         strokeWidth="2" strokeDasharray="9 5" strokeDashoffset="0"
                         strokeLinecap="round">
                        <rect x="2px" y="2px" rx="30px" ry="30px" width="100%" height="100%"></rect>
                    </svg>
                </div>
            </div>
        </>
    )
}