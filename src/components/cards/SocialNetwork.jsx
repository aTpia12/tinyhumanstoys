
// eslint-disable-next-line react/prop-types
export default function SocialNetwork( { title, link, icon, color})
{
    return(
        <>
            <div className="card cardcolor p-3 col-12 col-md-6 col-lg-4">
                <div className="card-wrapper">
                    <div className="card-img">
                        <a href="" target="_blank">
                            <span className={`mbr-iconfont ico1 ${icon} socicon`}
                                  style={{color: color, fill: color}}
                            >
                            </span>
                        </a>
                    </div>
                    <div className="card-box">
                        <h3 className="card-title align-left mbr-fonts-style display-5">
                            <a
                                href={link} className="text-info"
                                target="_blank"
                            >
                                {title}
                            </a>
                        </h3>
                        <h4 className="mbr-text align-left mbr-fonts-style display-4">
                            <a href={link} className="text-primary">
                                @<span style={{fontWeight: 'normal'}}>tinyhumanstoys</span>
                            </a>
                        </h4>
                    </div>
                    <div className="card-img">
                        <a href={link} target="_blank">
                            <span className="mbr-iconfont ico2 mobi-mbri-right mobi-mbri"></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}