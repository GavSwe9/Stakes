import React, { useState, useEffect } from 'react';
import { Options } from './OptimizerComponents/Options';
import { Lineup } from './OptimizerComponents/Lineup';

export const Optimizer = () => {
    let [week, setWeek] = useState(7);

    // Inputs
    let [isGpp, setIsGpp] = useState(true);
    let [noLineups, setNoLineups] = useState(5);
    let [maxOverlap, setMaxOverlap] = useState(5);
    let [teamsToRemove, setTeamsToRemove] = useState([]);
    let [qbRepeat, setQbRepeat] = useState(100);
    let [playerRepeat, setPlayerRepeat] = useState(100);
    let [dstRepeat, setDstRepeat] = useState(15);
    let [maxTe, setMaxTe] = useState(2);

    //GPP Inputs
    let [maxOwnership, setMaxOwnership] = useState(140);
    let [popularThreshold, setPopularThreshold] = useState(23);
    let [numPopular, setnumPopular] = useState(30);
    let [stackMin, setStackMin] = useState(1);
    let [bringBack, setBringBack] = useState(true);
    
    let [isLoaded, setIsLoaded] = useState(true);
    let [error, setError] = useState(null);

    let [lineups, setLineups] = useState([]);

    function runOptimizer() {
        if (!isNaN(noLineups) && !isNaN(parseFloat(noLineups))){
            setNoLineups(parseInt(noLineups));
        }
        else{
            alert("Invalid Input for Number of Lineups")
            return;
        }

        setStackMin(parseInt(stackMin))
        console.log(stackMin)
        setIsLoaded(false);
        setError(false);
        fetch("https://7tqt1879jh.execute-api.us-east-1.amazonaws.com/dev/projections", {
            method: "POST",
            body: JSON.stringify({
                "week": week,

                "isGPP": isGpp,
                "noLineups": noLineups,

                "maxOverlap": maxOverlap,
                "teamsToRemove": [],
                "qbRepeat": qbRepeat,
                "playerRepeat": playerRepeat,
                "dstRepeat": dstRepeat,
                "maxTe": maxTe,
                "maxOwnership": maxOwnership,
                "popularThreshold": popularThreshold,
                "numPopular": numPopular,
                "stackMin": parseInt(stackMin),
                "bringBack": bringBack
            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setLineups(result);
                    setIsLoaded(true);
                },
                (error) => {
                    setError(error);
                    setIsLoaded(true);
                }
            )
    }

    let main = <div></div>;
    if (error) {
        main = <div className="md:w-9/12 lg:w-10/12 h-screen inline-block text-center text-blue-100">Error: {error.message}</div>
    }
    if (!isLoaded){
        main = <div className="md:w-9/12 lg:w-10/12 h-screen inline-block text-center text-blue-100">Loading...</div>
    }
    else {
        main = <div className="w-full lg:w-10/12 h-screen pt-5 inline-block overflow-y-auto">
            {lineups.map(lineupData => (
                <Lineup key={lineupData.lineupNo} lineupData={lineupData} />
            ))}
        </div>
    }

    console.log(week, noLineups, isGpp, stackMin)
    return (
        <React.Fragment>
            <Options setNoLineups={setNoLineups} 
                isGpp={isGpp} 
                setIsGpp={setIsGpp} 
                runOptimizer={runOptimizer}
                setMaxOverlap={setMaxOverlap}
                setTeamsToRemove = {setTeamsToRemove}
                setQbRepeat = {setQbRepeat}
                setPlayerRepeat = {setPlayerRepeat}
                setDstRepeat = {setDstRepeat}
                setMaxTe = {setMaxTe}

                //GPP Inputs
                setMaxOwnership = {setMaxOwnership}
                setPopularThreshold = {setPopularThreshold}
                setnumPopular = {setnumPopular}
                setStackMin = {setStackMin}
                bringBack = {bringBack}
                setBringBack =  {setBringBack}
                    />
            
            {main}
        </React.Fragment>
    );


}