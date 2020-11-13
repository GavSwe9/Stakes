import React from 'react'
import { OptionDesktopNumericInput } from './OptionDesktopNumericInput'

export function OptionsDesktop(props) {
    function handleDownloadClick(){
        if (props.downloadable){
            props.downloadCsv();
        }
    }

    return (
        <div className="h-full bg-green-700 align-top hidden lg:w-2/12 lg:flex flex-col">
            <div className="mx-2 pb-3 mb-3 mt-10 border-b-2 border-green-200">
                <div className={`${props.downloadable ? "cursor-pointer" : ""} inline-block w-1/4 text-center align-top`} onClick={handleDownloadClick}>
                    <svg className={`${props.downloadable ? "text-green-200" : "text-green-900"} w-8 h-8 mx-auto`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </div>
                <button className="btn h-8 w-3/4 shadow-lg rounded-md bg-green-100 hover:bg-green-200 " onClick={props.runOptimizer}>
                    Run
                </button>
            </div>

            <div className="mx-5 mb-5">
                <div className="w-full h-10 rounded-full bg-green-900 font-semibold">
                    <div className="inline-block w-1/2">
                        <div className={`${props.isGpp ? "bg-green-200 text-green-800" : "bg-none text-green-200"} text-center rounded-full h-8 mt-1 ml-1 pt-1`} onClick={() => props.setIsGpp(true)}>
                            GPP
                        </div>
                    </div>
                    <div className="inline-block w-1/2">
                        <div className={`${!props.isGpp ? "bg-green-200 text-green-800" : "bg-none text-green-200"} text-center rounded-full h-8 mt-1 mr-1 pt-1`} onClick={() => props.setIsGpp(false)}>
                            Cash
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                <OptionDesktopNumericInput label="Number of Lineups" setFunction={props.setNoLineups} val={props.noLineups} hidden={false} />
                <OptionDesktopNumericInput label="Max Overlap" setFunction={props.setMaxOverlap} val={props.maxOverlap} hidden={false} />
                <OptionDesktopNumericInput label="QB Repeat" setFunction={props.setQbRepeat} val={props.qbRepeat} hidden={false} />
                <OptionDesktopNumericInput label="Player Repeat" setFunction={props.setPlayerRepeat} val={props.playerRepeat} hidden={false} />
                <OptionDesktopNumericInput label="DST Repeat" setFunction={props.setDstRepeat} val={props.dstRepeat} hidden={false} />
                <OptionDesktopNumericInput label="Max TE" setFunction={props.setMaxTe} val={props.maxTe} hidden={false} />

                <OptionDesktopNumericInput label="Max Ownership" setFunction={props.setMaxOwnership} val={props.maxOwnership} hidden={!props.isGpp} />
                <OptionDesktopNumericInput label="Popular Threshold" setFunction={props.setPopularThreshold} val={props.popularThreshold} hidden={!props.isGpp} />
                <OptionDesktopNumericInput label="Num Popular" setFunction={props.setNumPopular} val={props.numPopular} hidden={!props.isGpp} />
                <OptionDesktopNumericInput label="Stack Min" setFunction={props.setStackMin} val={props.stackMin} hidden={!props.isGpp} />

                <div className={`${props.isGpp ? "block" : "hidden"} mx-5 mb-5 flex`} >
                    <div className="w-8/12 inline-block align-top">
                        <label className="block text-right pr-4 uppercase tracking-wide text-green-200 text-xs font-bold mb-2" >
                            Bring Back
                            </label>
                    </div>
                    <div className="w-4/12 inline-block align-top">
                        <input className="form-checkbox mx-auto"
                            type="checkbox"
                            defaultChecked={props.bringBack}
                            onChange={(e) => props.setBringBack(e.target.value)} />
                    </div>
                </div>

            </div>

        </div>
    )
}