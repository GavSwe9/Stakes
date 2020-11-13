import React from 'react'
import { LineupHeader } from './LineupHeader';
import { LineupPlayers } from './LineupPlayers';

export function Lineup(props) {
    
    return (
        <div className="w-12/12 lg:w-6/12 xl:w-4/12 lg:inline-block align-top" >
            <div className="bg-green-700 m-2 rounded-lg shadow-lg">
                <LineupHeader lineupData={props.lineupData} />
                <LineupPlayers lineupData={props.lineupData} />
            </div>
        </div>
    )
}