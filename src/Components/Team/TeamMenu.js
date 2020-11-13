import React from 'react'

export function TeamMenu(props) {
    // let TeamColors = TeamColors;

    return (
        <div className="lg:w-2/12 lg:h-full lg:p-3 flex">
            <div className="w-full h-full lg:rounded-lg bg-white shadow-md">
                <div>
                    <img className="w-20 lg:w-full lg:p-3 mx-auto " src={"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/" + props.teamKey + ".svg"} />
                </div>
                <div className="flex justify-items-center">
                    <div className="w-10/12 text-center mx-auto text-xl m-2 cursor-pointer" onClick={() => props.setCurrentView("Passing")}>
                        Passing
                    </div>
                    <div className="w-10/12 text-center mx-auto text-xl m-2 cursor-pointer" onClick={() => props.setCurrentView("Rushing")}>
                        Rushing
                    </div>
                    <div className="w-10/12 text-center mx-auto text-xl m-2 cursor-pointer" onClick={() => props.setCurrentView("Receiving")}>
                        Receiving
                    </div>
                </div>
                <div className={`w-1/3 h-1 bg-team-${props.teamKey} rounded-full transition-all duration-500 ${
                    props.currentView === "Passing" ? "ml-0"
                    : props.currentView === "Rushing" ? "ml-33%" 
                    : props.currentView === "Receiving" ? "ml-66%" : null} `}>
                </div>
            </div>
        </div>

    )
}