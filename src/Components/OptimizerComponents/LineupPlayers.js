import React from 'react'

export function LineupPlayers(props){
    let sortPosition = new Map();
    sortPosition.set("QB", 0);
    sortPosition.set("RB", 1);
    sortPosition.set("WR", 2);
    sortPosition.set("TE", 3);
    sortPosition.set("DST", 4);

    let players = props.lineupData.lineup.sort((a, b) => {
        return sortPosition.get(a.position) - sortPosition.get(b.position) !== 0
            ? sortPosition.get(a.position) - sortPosition.get(b.position)
            : b.projection - a.projection
    });

    let lineup = players.map((p, i) =>
        <div key={p.player} className={i !== players.length - 1 ? "bg-blue-200 text-blue-900 px-4 border-b-2 border-blue-700" : "bg-blue-200 text-blue-900 px-4 rounded-b-lg"}>
            <div className="inline-block w-1/12 align-top pt-2">{p.position}</div>
            <div className="inline-block w-6/12 align-top pt-2">
                {p.player}
            </div>
            <div className="inline-block w-2/12 align-top pt-2">
                {p.projection.toFixed(1)}
            </div>
            <div className="inline-block w-3/12 align-top">
                <img className="h-10 w-10 inline-block float-left" src={"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/" + p.team + ".svg"} />
                <img className="h-10 w-10 inline-block float-right" src={"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/" + p.opponent + ".svg"} />
            </div>
        </div>
    )

    return (
        <React.Fragment>
            {lineup}
        </React.Fragment>
    )
}