import React from "react";


const Experience = (props) => {

    const {} = props;

    return (
        <div className={"experience-container"}>
            <div>
                <h3>Software Developer</h3>
                <span className={"blue-text"}>Playo</span>
                <div className={"flex-row"}>
                    <text>07/2018 - Ongoing</text>
                    <text>Bangalore, India</text>
                </div>
                <div className={"experience-description"}>
                    <ul>
                        <li>
                            <span className={"experience-description-title"}>
                                Lead Developer - Playo Booking Engine
                            </span>
                            <p>
                                Re-architectured and developed the Playo Booking Engine by leveraging a microservice
                                architecture. The booking engine powers the Playo App, Playo's Partner Console and
                                Playo's
                                Admin Panel.
                            </p>
                        </li>
                        <li>
                            <span className={"experience-description-title"}>Lead Developer - Playo Wallet</span>
                            <p>Architectured and developed a closed e-wallet and vouchers system.</p>
                        </li>
                        <li>
                            <p>API integration for third-party booking systems and payment gateways.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Software Engineer Trainee</h3>
                <span className={"blue-text"}>MountBlue Technologies</span>
                <div className={"flex-row"}>
                    <text>05/2018 - 07/2018</text>
                    <text>Bangalore, India</text>
                </div>
                <div className={"experience-description"}>
                    <ul>
                        <li>
                            <p>Responsive web design.</p>
                        </li>
                        <li>
                            <p>Web development using React JS.</p>
                        </li>
                        <li>
                            <p>Building RESTful API using Python's Django REST Framework.</p>
                        </li>
                        <li>
                            <p>Product development using AGILE methodologies and version control.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Python Engineer (Intern)</h3>
                <span className={"blue-text"}>Primenumbers Technologies</span>
                <div className={"flex-row"}>
                    <text>11/2017 - 12/2017</text>
                    <text>Bangalore, India</text>
                </div>
                <div className={"experience-description"}>
                    <ul>
                        <li>
                            <p>Building scalable web spiders in python.</p>
                        </li>
                        <li>
                            <p>Deploying web spiders on scalable cloud systems.</p>
                        </li>
                        <li>
                            <p>Scrapping web-based and document-based resources for lead generation.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h3>Part-Time Sales Manager</h3>
                <span className={"blue-text"}>Decathlon Sports India</span>
                <div className={"flex-row"}>
                    <text>10/2015 - 07/2016</text>
                    <text>Bangalore, India</text>
                </div>
                <div className={"experience-description"}>
                    <ul>
                        <li>
                            <p>
                                Maintain sales volume, product mix, and selling price by keeping current with supply and
                                demand.
                            </p>
                        </li>
                        <li>
                            <p>
                                Approach browsing customers and initiate a conversation to determine buying preferences.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Experience
