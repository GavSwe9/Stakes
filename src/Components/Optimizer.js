import React, { useState } from 'react';
import { Options } from './OptimizerComponents/Options';
import { Lineup } from './OptimizerComponents/Lineup';
import { line } from 'd3';
const AWS = require("aws-sdk");

const s3 = new AWS.S3({ region: 'us-east-1', accessKeyId: "AKIAT6NEC62IGN6NVLXR", secretAccessKey: "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" });

export const Optimizer = () => {
    let [week, setWeek] = useState(9);

    // Inputs
    let [isGpp, setIsGpp] = useState(true);
    let [noLineups, setNoLineups] = useState(2);
    let [maxOverlap, setMaxOverlap] = useState(5);
    let [teamsToRemove, setTeamsToRemove] = useState([]);
    let [qbRepeat, setQbRepeat] = useState(100);
    let [playerRepeat, setPlayerRepeat] = useState(100);
    let [dstRepeat, setDstRepeat] = useState(15);
    let [maxTe, setMaxTe] = useState(2);

    //GPP Inputs
    let [maxOwnership, setMaxOwnership] = useState(140);
    let [popularThreshold, setPopularThreshold] = useState(23);
    let [numPopular, setNumPopular] = useState(30);
    let [stackMin, setStackMin] = useState(1);
    let [bringBack, setBringBack] = useState(true);

    let [isLoading, setisLoading] = useState(false);
    let [error, setError] = useState(null);

    let [lineups, setLineups] = useState([]);
    let [optimizerId, setOptimizerId] = useState(null);

    async function runOptimizer() {
        if (!isNaN(noLineups) && !isNaN(parseFloat(noLineups))) {
            setNoLineups(parseInt(noLineups));
        }
        else {
            alert("Invalid Input for Number of Lineups")
            return;
        }

        setisLoading(true);
        setError(false);

        fetch("https://nfl.gavswe.com/invokeOptimizer", {
            method: "POST",
            body: JSON.stringify({
                "week": week,

                "isGPP": isGpp,
                "noLineups": parseInt(noLineups),

                "maxOverlap": parseInt(maxOverlap),
                "teamsToRemove": [],
                "qbRepeat": parseInt(qbRepeat),
                "playerRepeat": parseInt(playerRepeat),
                "dstRepeat": parseInt(dstRepeat),
                "maxTe": parseInt(maxTe),
                "maxOwnership": parseInt(maxOwnership),
                "popularThreshold": parseInt(popularThreshold),
                "numPopular": parseInt(numPopular),
                "unpopularThreshold": 10,
                "numUnpopular": 1,
                "stackMin": parseInt(stackMin),
                "bringBack": bringBack,
                "rbStackList": []

            })
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.id);
                    setOptimizerId(result.id);
                    longPolling(result.id);
                },
                (error) => {
                    setError(error);
                }
            )
    }

    function longPolling(id) {
        console.log("Polling...");
        let params = { Bucket: 'optimizer-lineups', Key: id + ".json"};

        s3.getObject(params)
            .on("success", function (response) {
                let data = JSON.parse(response.data.Body.toString('utf-8'));
                setLineups(data)
                setisLoading(false);
            })
            .on("error", async function (error) {
                // console.log();
                await new Promise(resolve => setTimeout(resolve, 5000));
                longPolling(id);
            })
            .send();
    }

    function downloadCsv(){
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "QB,RB,RB,WR,WR,WR,TE,FLEX,DST\n";
        for (let i = 0; i < lineups.length; i++){
            console.log(lineups[i].lineup);
            let row = "";
            for(let j = 0; j < lineups[i].lineup.length; j++){
                if (j < lineups[i].lineup.length - 1){
                    row += lineups[i].lineup[j].dkSlateId + ",";
                }
                else{
                    row += lineups[i].lineup[j].dkSlateId;
                }
                
            }
            csvContent += row + "\n"
        }

        let encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
    }

    let main = <div></div>;
    if (error) {
        main = <div className="md:w-9/12 lg:w-10/12 h-full inline-block text-center text-gray-800 overflow-y-auto flex-1">Error: {error.message}</div>
    }
    if (isLoading) {
        main = <div className="md:w-9/12 lg:w-10/12 h-full inline-block text-center text-gray-800 overflow-y-auto flex-1">Loading...</div>
    }
    else {
        console.log(optimizerId);
        main = <div className="w-full lg:w-10/12 h-full font-medium inline-block flex-grow overflow-y-auto">
            <div>
                {lineups.map(lineupData => (
                    <Lineup key={lineupData.lineupNo} lineupData={lineupData} />
                ))}
            </div>
        </div>
    }

    console.log(lineups);
    
    return (
        <div className="lg:flex-1 lg:flex lg:h-full">
            <Options
                downloadable={!isLoading && lineups.length > 0}
                downloadCsv={downloadCsv}
                runOptimizer={runOptimizer}
                noLineups={noLineups}
                setNoLineups={setNoLineups}
                isGpp={isGpp}
                setIsGpp={setIsGpp}
                maxOverlap={maxOverlap}
                setMaxOverlap={setMaxOverlap}
                teamsToRemove={teamsToRemove}
                setTeamsToRemove={setTeamsToRemove}
                qbRepeat={qbRepeat}
                setQbRepeat={setQbRepeat}
                playerRepeat={playerRepeat}
                setPlayerRepeat={setPlayerRepeat}
                dstRepeat={dstRepeat}
                setDstRepeat={setDstRepeat}
                maxTe={maxTe}
                setMaxTe={setMaxTe}

                //GPP Inputs
                maxOwnership={maxOwnership}
                setMaxOwnership={setMaxOwnership}
                popularThreshold={popularThreshold}
                setPopularThreshold={setPopularThreshold}
                numPopular={numPopular}
                setNumPopular={setNumPopular}
                stackMin={stackMin}
                setStackMin={setStackMin}
                bringBack={bringBack}
                setBringBack={setBringBack}
            />

            {main}
        </div>
    );


}