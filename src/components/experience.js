import React from "react";


const Experience = (props) => {

    const {
        experienceData
    } = props;

    return (
        <div className={"experience-container"}>
            {experienceData.map((data, index) => <React.Fragment key={index}>
                <h3>{data.role}</h3>
                <span className={"blue-text"}>{data.company}</span>
                <div className={"flex-row"}>
                    <text>{data.period}</text>
                    <text>{data.location}</text>
                </div>
                <div className={"experience-description"}>
                    <ul>
                        {data.description.map((description, index) => <li key={index}>
                            {description.title && <span className={"experience-description-title"}>
                                {description.title}
                            </span>}
                            <p>{description.info}</p>
                        </li>)}
                    </ul>
                </div>
            </React.Fragment>)}
        </div>
    )
};

export default Experience
