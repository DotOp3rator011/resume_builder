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
                    <span>{data.period}</span>
                    <span className={"gpa-container"}>{data.grade}</span>
                </div>
            </div>)}
        </React.Fragment>
    )
};

export default Education
