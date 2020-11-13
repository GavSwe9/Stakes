import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'
import { TeamRushingChart } from './TeamRushingChart';

export function TeamRushingGraph(props) {
    let [isLoading, setIsLoading] = useState(true);

    let [players, setPlayers] = useState([]);

    let xScale = {};
    let yScale = {};

    let displayNames = {
        "rushingAttempts": "Rushing Attempts",
        "rushingYards": "Rushing Yards"
    }

    useEffect(() => {
        fetch("https://nfl.gavswe.com/teamPlayersByGame/rushing/" + props.teamKey + "/2019")
            .then(response => response.json())
            .then(data => {
                setPlayers(data);
                setIsLoading(false);
            })
    }, [])

    useEffect(() => {
        if (isLoading === false) {
            initRushingGraphs(players);
        }
    }, [isLoading])

    return (
        <div className="h-full flex flex-col">
            <div className="flex overflow-x-scroll">
                <div className="inline-block lg:w-1/2 pl-3 lg:pl-0" id="team-rushingAttempts-graph"></div>
                <div className="inline-block lg:w-1/2" id="team-rushingYards-graph"></div>
            </div>
            <div className="flex-1 mr-3 mb-3 bg-white rounded-lg shadow-lg" id="team-rushing-chart" style={{ height: 400 }}>
                <div className="h-full">
                    <TeamRushingChart teamKey={props.teamKey} chartPlayer={chartPlayer} />
                </div>
            </div>
        </div>
    )

    function initRushingGraphs(data) {
        d3.select("#team-rushingAttempts-graph").select("svg").remove();
        d3.select("#team-rushingYards-graph").select("svg").remove();

        initGraph(data, "rushingAttempts");
        initGraph(data, "rushingYards");
    }

    function initGraph(data, statName) {

        let maxWeek = 0;
        let maxCarries = 0;
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].weekStats.length; j++) {
                maxWeek = Math.max(maxWeek, data[i].weekStats[j].week)
                maxCarries = Math.max(maxCarries, data[i].weekStats[j][statName])
            }
        }

        let w = document.getElementById("team-page-content").clientWidth;
        console.log(w);
        
        let smallScreen = w <= 1209;

        w = smallScreen ? w-40 : w / 2 - 10;
        let h = smallScreen ? 200 : 400;

        let margin = { top: 10, bottom: 30, left: 10, right: 50 },
            width = w - margin.left - margin.right,
            height = h - margin.top - margin.bottom;

        // append the svg object to the body of the page
        let container = d3.select("#team-" + statName + "-graph")
        
        let graph = container.append("div")
            .attr("class", "teamPlayerStatGraph")
            .style("text-align", "center")
            .text(displayNames[statName])

        let svg = graph
            .append("svg")
            // .attr("class", "teamPlayerStatGraph")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("id", "svg-g-" + statName)
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        let x = d3.scaleLinear()
            .domain([0, maxWeek])
            .range([0, width]);
        
        xScale[statName] = x;

        // Add Y axis
        let y = d3.scaleLinear()
            .domain([0, maxCarries])
            .range([height, 0]);

        yScale[statName] = y;

        
        let gridStep = 5
        if (maxCarries > 50) {
            gridStep = 10;
        }
        if (maxCarries > 100) {
            gridStep = 30;
        }

        for (let i = 0; i < maxCarries; i += gridStep) {
            svg.append("line")
                .attr("x1", x(0))
                .attr("y1", y(i))
                .attr("x2", x(maxWeek))
                .attr("y2", y(i))
                .attr("stroke", "#ddd")
        }

        for (let i = 0; i < maxCarries; i += gridStep) {
            svg.append("text")
                .attr("x", x(maxWeek) + 10)
                .attr("y", y(i) + 5)
                .attr("font-size", "18px")
                .attr("fill", "#555")
                .text(i)
        }

        for (let i = 0; i < data.length; i++) {
            chartPlayer(data[i]._id, statName, "#F2F2F2")
        }

    }

    function chartPlayer(playerId, statName, color) {

        d3.select("#player-group-" + statName + "-" + playerId).remove();

        let data = {};
        for (let i = 0; i < players.length; i++) {
            if (players[i]._id === playerId) {
                data = players[i]
            }
        }

        let svg = d3.select("#svg-g-" + statName)

        let group = svg.append("g")
            .attr("id", "player-group-" + statName + "-" + playerId)

        let x = xScale[statName];
        let y = yScale[statName];

        group.append("path")
            .datum(data.weekStats)
            .attr("class", "player-line-" + data._id)
            .attr("id", data.playerName)
            .attr("fill", "none")
            .attr("stroke", color)
            .attr("stroke-width", 2)
            .attr("d", d3.line()
                .x(function (d) { return x(d.week) })
                .y(function (d) { return y(d[statName]) })
                .curve(d3.curveMonotoneX)
            )

        group.selectAll("xyz")
            .data(data.weekStats)
            .enter()
            .append("circle")
            .attr("class", "player-point-" + data._id)
            .attr("cx", d => x(d.week))
            .attr("cy", d => y(d[statName]))
            .attr("r", 3)
            .attr("fill", color)
    }
}
