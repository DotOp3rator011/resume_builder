import React from "react";


const FindMeOnline = (props) => {

    const {
        findMeOnlineData
    } = props;

    return (
        <React.Fragment>
            {Object.values(findMeOnlineData).map((data, index) => <div key={index} className={"find-me-item"}>
                <div className={"icon"}>
                    <i className={data.icon} style={{"font-size": 20}}/>
                </div>
                <div className={"flex-column"}>
                    <h5>{data.platform}</h5>
                    <a href={data.link}>{data.link}</a>
                </div>
            </div>)}
        </React.Fragment>
    )
};

export default FindMeOnline
