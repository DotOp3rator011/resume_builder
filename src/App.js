import React from 'react';
import Header from "./components/header"
import Experience from "./components/experience"
import Summary from "./components/summary";
import Skills from "./components/skills";
import Education from "./components/education";
import Interests from "./components/interests";
import FindMeOnline from "./components/findMeOnline";
import data from "./data"

class App extends React.Component {

    render() {
        return (
            <div className={"resume-container"}>
                <Header name={data.name} role={data.role} contactData={data.contactData}/>
                <div className={"flex-row"}>
                    <div className={"left-pane"}>
                        <span className={"section-name"}>EXPERIENCE</span>
                        <Experience experienceData={data.experienceData}/>
                    </div>
                    <div className={"right-pane"}>
                        <div className={"right-pane-item"}>
                            <span className={"section-name"}>SUMMARY</span>
                            <Summary summary={data.summary}/>
                        </div>
                        <div className={"right-pane-item"}>
                            <span className={"section-name"}>SKILLS</span>
                            <Skills skills={data.skills}/>
                        </div>
                        <div className={"right-pane-item"}>
                            <span className={"section-name"}>EDUCATION</span>
                            <Education educationData={data.educationData}/>
                        </div>
                        <div className={"right-pane-item"}>
                            <span className={"section-name"}>INTERESTS</span>
                            <Interests interests={data.interests}/>
                        </div>
                        <div className={"right-pane-item"}>
                            <span className={"section-name"}>FIND ME ONLINE</span>
                            <FindMeOnline findMeOnlineData={data.findMeOnlineData}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
