
export default function TypePlay( { image, title, description })
{
    return(
        <>
            <div className="item features-image col-12">
                <div className="item-wrapper">
                    <div className="item-img">
                        <img src={image} alt="" data-slide-to="0"
                             data-bs-slide-to="0"/>
                    </div>
                    <div className="item-content">
                        <div className="item-text-wrap">
                            <h5 className="item-title mbr-fonts-style display-7"><strong>
                                {title}</strong></h5>
                            <h5 className="item-title mb-0 mbr-fonts-style display-7">{description}</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}