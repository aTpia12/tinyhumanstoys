import { useState, useEffect } from "react";
import SocialNetwork from "./cards/SocialNetwork.jsx";
import dataSocials from "../databases/dataSocials.js";

export default function Socials()
{

    const [socials, setSocials] = useState([]);

    useEffect(() => {
        setSocials(dataSocials);
    }, []);

    return(
        <>
            <section className="features1 cid-ucW5OdNbBl" id="social-buttons02-6">
                <div className="container">
                    <div className="row justify-content-center">
                        {socials.map((social) => (
                            <SocialNetwork
                                key={social.id}
                                title={social.title}
                                link={social.link}
                                icon={social.icon}
                                color={social.color}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}