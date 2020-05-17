import React from "react";


const Education = (props) => {

    const {
        educationData
    } = props;

    return (
        <React.Fragment>
            {educationData.map((data, index) => <div key={index} className={"flex-column"}>
                <h3>{data.title}</h3>
                <span className={"blue-text"}>{data.institution}</span>
                <div className={"education-details-container"}>
                    <text>{data.period}</text>
                    <text className={"gpa-container"}>{data.grade}</text>
                </div>
            </div>)}
        </React.Fragment>
    )
};

export default Education
