import React from "react";


const Header = (props) => {

    const {} = props;

    return (
        <div className={"header-container"}>
            <div className={"flex-column"}>
                <span className={"name"}>RAHUL PUGAL</span>
                <span className={"blue-text"}>Software Engineer</span>
                <div className={"flex-row"}>
                    <div className={"contact-item"}>
                        <div className={"contact-icon"}>
                            <i className={"fa fa-phone"}/>
                        </div>
                        <text>+91 9036240308</text>
                    </div>
                    <div className={"contact-item"}>
                        <div className={"contact-icon"}>
                            <i className={"fa fa-envelope"}/>
                        </div>
                        <text>rahulpugal.0308@gmail.com</text>
                    </div>
                    <div className={"contact-item"}>
                        <div className={"contact-icon"}>
                            <i className={"fa fa-map-marker"}/>
                        </div>
                        <text>Bangalore, India</text>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header
