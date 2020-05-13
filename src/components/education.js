import React from "react";


const Education = (props) => {

    const {} = props;

    return (
        <div className={"flex-column"}>
            <h3>Bachelor's Degree in Computer Applications</h3>
            <span className={"blue-text"}>Reva University</span>
            <div className={"education-details-container"}>
                <text>2015 - 2018</text>
                <text className={"gpa-container"}>GPA 7.7 / 10</text>
            </div>
        </div>
    )
};

export default Education
