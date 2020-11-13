import React from 'react'

export function LineupPlayers(props) {
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
        <div key={p.player} className={`${i !== players.length - 1 ? " border-b-2 border-green-700" : "rounded-b-lg"} bg-white text-green-700 px-4 font-light text-sm lg:text-base`}>
            <div className="inline-block w-1/3">
                <div className="inline-block w-3/12 align-top pt-2">
                    {p.position}
                </div>
                <div className="inline-block w-9/12 align-top pt-2 font-medium">
                    {formatName(p.player, p.position === "DST")}
                </div>
            </div>

            <div className="inline-block w-2/3 text-center">
                <div className="inline-block w-1/5 align-top">
                    <img className="h-10 w-10 p-1 inline-block" src={"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/" + p.team + ".svg"} />
                    {/* <img className="h-10 w-10 inline-block float-right " src={"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/" + p.opponent + ".svg"} /> */}
                </div>
                <div className="inline-block w-1/5 align-top">
                    {/* <img className="h-10 w-10 inline-block float-left " src={"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/" + p.team + ".svg"} /> */}
                    <img className="h-10 w-10 p-1 inline-block" src={"https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/" + p.opponent + ".svg"} />
                </div>
                <div className="inline-block w-1/5 align-top pt-2">
                    <div>
                        {p.projection.toFixed(1)}
                    </div>
                </div>
                <div className="inline-block w-1/5 align-top pt-2">
                    <div>
                        {p.salary}
                    </div>
                </div>
                <div className="inline-block w-1/5 align-top pt-2">
                    <div>
                        {p.dkOwnership + "%"}
                    </div>
                </div>
            </div>

        </div>
    )

    return (
        <React.Fragment>
            {lineup}
        </React.Fragment>
    )

    function formatName(name, isDefense){
        if (isDefense){
            return name.split(" ")[0];
        }

        let nameArr = name.split(" ");
        let returnName = nameArr[0].charAt(0) + ".";
        for (let i = 1; i < nameArr.length; i++){
            returnName += " " + nameArr[i];
        }
        return returnName;
    }
}