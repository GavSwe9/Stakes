import React from 'react'
import { LineupHeader } from './LineupHeader';
import { LineupPlayers } from './LineupPlayers';

export function Lineup(props) {
    
    return (
        <div className="w-12/12 lg:w-6/12 xl:w-4/12 lg:inline-block align-top" >
            <div className="bg-blue-600 mx-5 mb-5 rounded-lg">
                <LineupHeader lineupData={props.lineupData} />
                <LineupPlayers lineupData={props.lineupData} />
            </div>
        </div>
    )
}