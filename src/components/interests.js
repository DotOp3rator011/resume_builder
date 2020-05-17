import React from "react";


const Interests = (props) => {

    const {
        interests
    } = props;

    return (
        <div className={"flex-row"}>
            <span className={"interests"}>{interests.join(" | ")}</span>
        </div>
    )
};

export default Interests
