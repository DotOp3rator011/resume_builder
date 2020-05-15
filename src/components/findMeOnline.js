import React from "react";


const FindMeOnline = (props) => {

    const {} = props;

    return (
        <div>
            <div className={"find-me-item"}>
                <div className={"icon"}>
                    <i className={"fa fa-linkedin"} style={{"font-size": 20}}/>
                </div>
                <div className={"flex-column"}>
                    <h5>LinkedIn</h5>
                    <a href={"https://www.linkedin.com/in/rahul-pugal"}>https://www.linkedin.com/in/rahul-pugal</a>
                </div>
            </div>
            <div className={"find-me-item"}>
                <div className={"icon"}>
                    <i className={"fa fa-github-alt"} style={{"font-size": 20}}/>
                </div>
                <div className={"flex-column"}>
                    <h5>GitHub</h5>
                    <a href={"https://github.com/DotOp3rator011"}>https://github.com/DotOp3rator011</a>
                </div>
            </div>
        </div>
    )
};

export default FindMeOnline
