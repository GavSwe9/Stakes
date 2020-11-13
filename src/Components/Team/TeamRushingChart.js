import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'

export function TeamRushingChart(props) {
    let [players, setPlayers] = useState([])
    let [isLoading, setIsLoading] = useState(false);

    let [selectedPlayersMap, setSelectedPlayersMap] = useState(new Map());
    let [colorsAvailable, setColorsAvailable] = useState(["#FF0000", "#00FF00", "#0000FF", "#FF8C00", "#FF00FF", "#00FFFF"]);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://nfl.gavswe.com/teamPlayersBySeason/rushing/" + props.teamKey + "/2019")
            .then(response => response.json())
            .then(data => {
                setPlayers(data);
                setIsLoading(false)
            })
    }, []);

    let rows = players.map(p => (
        <tr key={p.playerId} id={"player-stat-row-" + p._id} onClick={() => PlayerRecordClick(p._id)}>
            <td className="pl-5 w-16 inline-block" id={"player-row-color-" + p._id}></td>
            <td className="pr-5">{p.playerName}</td>
            <td className="px-5">{p.games}</td>
            <td className="px-5">{p.rushingAttempts}</td>
            <td className="px-5">{p.rushingYards}</td>
            <td className="px-5">{p.rushingFirstDowns}</td>
            <td className="px-5">{p.rushingTouchdowns}</td>
            <td className="px-5">{p.targets}</td>
            <td className="px-5">{p.receptions}</td>
            <td className="px-5">{p.receivingYards}</td>
            <td className="px-5">{p.receivingTouchdowns}</td>
            <td className="px-5">{p.receivingFirstDowns}</td>
            <td className="px-5">{p.rushingYardsPerAttempt.toFixed(1)}</td>
            <td className="px-5">{p.rushingYardsPerGame.toFixed(1)}</td>
            <td className="px-5">{p.rushingAttemptsPerGame.toFixed(1)}</td>
            <td className="px-5">{p.catchRate.toFixed(1)}</td>
            <td className="px-5">{p.receivingYardsPerReception.toFixed(1)}</td>
            <td className="px-5">{p.receivingYardsPerTarget.toFixed(1)}</td>
            <td className="px-5">{p.receptionsPerGame.toFixed(1)}</td>
            <td className="px-5">{p.receivingYardsPerGame.toFixed(1)}</td>
        </tr>
    ));

    if (isLoading) {
        return <div></div>
    }
    else {
        return (
            <div className="block h-full overflow-auto">
                <table className="text-center">
                    <thead>
                        <tr>
                            <th className="pl-5 w-16 inline-block"></th>
                            <th className="pr-5">Name</th>
                            <th>G</th>
                            <th>Att</th>
                            <th>Yds</th>
                            <th>1D</th>
                            <th className="px-5">TD</th>
                            <th className="px-5">TRGTS</th>
                            <th className="px-5">REC</th>
                            <th className="px-5">YDS</th>
                            <th className="px-5">TD</th>
                            <th className="px-5">1D</th>
                            <th className="px-5">Y/A</th>
                            <th className="px-5">Y/G</th>
                            <th className="px-5">R/G</th>
                            <th className="px-5">CTCH%</th>
                            <th className="px-5">Y/G</th>
                            <th className="px-5">Y/T</th>
                            <th className="px-5">R/G</th>
                            <th className="px-5">RY/G</th>
                        </tr>
                    </thead>
                    <tbody id="team-rushing-body">
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }

    function PlayerRecordClick(playerId) {
        console.log(colorsAvailable)
        if (!selectedPlayersMap.has(playerId)) {
            if (colorsAvailable.length === 0) {
                alert("Max number of players selected at once.")
                return;
            }
            else {
                let color = colorsAvailable[0];

                setColorsAvailable(colorsAvailable.filter(c => c !== color));
                setSelectedPlayersMap(new Map(selectedPlayersMap.set(playerId, color)));

                props.chartPlayer(playerId, "rushingAttempts", color);
                props.chartPlayer(playerId, "rushingYards", color);

                d3.select("#player-stat-row-" + playerId)
                    .style("border-bottom", "1px solid " + color)
                    .style("border-top", "1px solid " + color)

                d3.select("#player-row-color-" + playerId)
                    .append("svg")
                    .style("width", "30px")
                    .style("height", "20px")
                    .append("rect")
                    .attr("x", 0)
                    .attr("y", 6)
                    .attr("height", 5)
                    .attr("width", 35)
                    .attr("fill", color)
            }
        }
        else {
            setColorsAvailable([selectedPlayersMap.get(playerId), ...colorsAvailable]);

            selectedPlayersMap.delete(playerId)
            setSelectedPlayersMap(new Map(selectedPlayersMap));

            d3.select("#player-stat-row-" + playerId)
                .style("border-bottom", "")
                .style("border-top", "")

            d3.select("#player-row-color-" + playerId)
                .select("svg").remove();

            props.chartPlayer(playerId, "rushingAttempts", "#F2F2F2");
            props.chartPlayer(playerId, "rushingYards", "#F2F2F2");
        }

    }
}

