import React from "react";


const Header = (props) => {

    const {
        name,
        role,
        contactData,
    } = props;

    return (
        <div className={"header-container"}>
            <div className={"flex-column"}>
                <span className={"name"}>{name}</span>
                <span className={"blue-text"}>{role}</span>
                <div className={"flex-row"}>
                    <div className={"contact-item"}>
                        <div className={"contact-icon"}>
                            <i className={"fa fa-phone"}/>
                        </div>
                        <text>{contactData.phone}</text>
                    </div>
                    <div className={"contact-item"}>
                        <div className={"contact-icon"}>
                            <i className={"fa fa-envelope"}/>
                        </div>
                        <text>{contactData.email}</text>
                    </div>
                    <div className={"contact-item"}>
                        <div className={"contact-icon"}>
                            <i className={"fa fa-map-marker"}/>
                        </div>
                        <text>{contactData.location}</text>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header
