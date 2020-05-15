import React from 'react';
import Header from "./components/header"
import Experience from "./components/experience"
import Summary from "./components/summary";
import Skills from "./components/skills";
import Education from "./components/education";
import Interests from "./components/interests";
import FindMeOnline from "./components/findMeOnline";

function App() {
    return (
        <div className={"resume-container"}>
            <Header/>
            <div className={"flex-row"}>
                <div className={"left-pane"}>
                    <span className={"section-name"}>EXPERIENCE</span>
                    <Experience/>
                </div>
                <div className={"right-pane"}>
                    <div className={"right-pane-item"}>
                        <span className={"section-name"}>SUMMARY</span>
                        <Summary/>
                    </div>
                    <div className={"right-pane-item"}>
                        <span className={"section-name"}>SKILLS</span>
                        <Skills/>
                    </div>
                    <div className={"right-pane-item"}>
                        <span className={"section-name"}>EDUCATION</span>
                        <Education/>
                    </div>
                    <div className={"right-pane-item"}>
                        <span className={"section-name"}>INTERESTS</span>
                        <Interests/>
                    </div>
                    <div className={"right-pane-item"}>
                        <span className={"section-name"}>FIND ME ONLINE</span>
                        <FindMeOnline/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
