import React from "react";


const Achievements = (props) => {

    const {
        achievements
    } = props;

    return (
        <div className={"experience-description"}>
            <ul>
                {achievements.map(achievement => <li>
                    <p className={"achievement-item"}>{achievement}</p>
                </li>)}
            </ul>
        </div>
    )
};

export default Achievements
