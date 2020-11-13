import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { TeamRushingGraph } from './TeamRushingGraph';
import { TeamMenu } from './TeamMenu';

export function TeamPage() {
    let { teamKey } = useParams();

    let [currentView, setCurrentView] = useState("Rushing")

    return (
        <div className="lg:flex-1 lg:flex">
            <TeamMenu teamKey={teamKey.toUpperCase()} currentView={currentView} setCurrentView={setCurrentView} />
            <div id="team-page-content" className="lg:w-10/12 h-full flex-1">
                <TeamRushingGraph teamKey={teamKey.toUpperCase()} />
            </div>
        </div>
    )
}