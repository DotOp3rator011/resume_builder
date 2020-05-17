import React from "react";


const Skills = (props) => {

    const {
        skills
    } = props;

    return (
        <div className={"skills-container"}>
            {skills.map((skill, index) => <span key={index} className={"skill-item"}>{skill}</span>)}
        </div>
    )
};

export default Skills
