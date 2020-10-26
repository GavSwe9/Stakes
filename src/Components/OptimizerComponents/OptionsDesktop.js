import React from 'react'
import { OptionDesktopNumericInput } from './OptionDesktopNumericInput'

export function OptionsDesktop(props){
    return (
        <div className="h-screen bg-blue-600 align-top hidden lg:inline-block lg:w-2/12">
            <div className="mx-2 pb-3 mb-3 mt-10 border-b-2">
                <button className="btn h-8 w-full shadow-lg rounded-md bg-blue-100 hover:bg-blue-200 " onClick={props.runOptimizer}>
                    Run
                </button>
            </div>

            <div className="mx-5 mb-5">
                <div className="w-full h-10 rounded-full bg-blue-800">
                    <div className="inline-block w-1/2">
                        <div className={`${props.isGpp ? "bg-blue-100" : "bg-none text-blue-100"} text-center rounded-full h-8 mt-1 ml-1 pt-1`} onClick={() => props.setIsGpp(true)}>
                            GPP
                        </div>
                    </div>
                    <div className="inline-block w-1/2">
                        <div className={`${!props.isGpp ? "bg-blue-100" : "bg-none text-blue-100"} text-center rounded-full h-8 mt-1 mr-1 pt-1`} onClick={() => props.setIsGpp(false)}>
                            Cash
                        </div>
                    </div>
                </div>
            </div>

            <OptionDesktopNumericInput label="Number of Lineups" setFunction={props.setNoLineups} placeholder="5" />
            <OptionDesktopNumericInput label="Max Overlap" setFunction={props.setMaxOverlap} placeholder="5" />
            <OptionDesktopNumericInput label="QB Repeat" setFunction={props.setQbRepeat} placeholder="5" />
            <OptionDesktopNumericInput label="Player Repeat" setFunction={props.setPlayerRepeat} placeholder="5" />
            <OptionDesktopNumericInput label="DST Repeat" setFunction={props.setDstRepeat} placeholder="5" />
            <OptionDesktopNumericInput label="Max TE" setFunction={props.setMaxTe} placeholder="5" />
            <OptionDesktopNumericInput label="Max Ownership" setFunction={props.setMaxOwnership} placeholder="5" />
            <OptionDesktopNumericInput label="Popular Threshold" setFunction={props.setPopularThreshold} placeholder="5" />
            <OptionDesktopNumericInput label="Num Popular" setFunction={props.setNumPopular} placeholder="5" />
            <OptionDesktopNumericInput label="Stack Min" setFunction={props.setStackMin} placeholder="5" />

            <div className="mx-5 mb-5 flex">
                <div className="w-8/12">
                    <label className="block text-right pr-4 uppercase tracking-wide text-blue-200 text-sm font-bold mb-2" >
                        Bring Back
                    </label>
                </div>
                <div className="w-4/12">
                    <input className="form-checkbox mx-auto"
                        type="checkbox"
                        defaultChecked={props.bringBack}
                        onChange={(e) => props.setBringBack(e.target.value)} />
                </div>
            </div>
        </div>
    )
}