import React from 'react'

export function LineupHeader(props) {
    return (
        <div className="text-green-200 font-medium">
            <div className="text-center border-b-2 border-green-200 mx-6 mb-1">
                <div xs={12} >
                    Lineup #{props.lineupData.lineupNo}
                </div>
            </div>
            <div className="lineup-card-top-div flex">
                <div className="flex-1 lineup-card-top-label">
                    <svg className="h-10 w-10 stroke-current mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                </div>
                <div className="flex-1">
                    <svg className="h-10 w-10 stroke-current mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="flex-1">
                    <svg className="h-10 w-10 stroke-current mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                </div>

            </div>
            <div className="flex">
                <div className="flex-1 text-center ">
                    {props.lineupData.projectedPoints.toFixed(1)}
                </div>
                <div className="flex-1 text-center">
                    ${new Intl.NumberFormat().format(props.lineupData.totalSalary)}
                </div>
                <div className="flex-1 text-center">
                    {props.lineupData.projectedOwnership}%
                </div>
            </div>
        </div>
    )
}