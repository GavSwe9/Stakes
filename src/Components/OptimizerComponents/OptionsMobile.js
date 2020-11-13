import React, { useState } from 'react'
import { OptionMobileNumericInput } from './OptionMobileNumericInput'

export function OptionsMobile(props) {
    let [expandOptions, setExpandOptions] = useState(false);

    function handleRunClick(){
        setExpandOptions(false); 
        props.runOptimizer();
    }

    function handleDownloadClick(){
        if (props.downloadable){
            props.downloadCsv();
        }
    }

    return (
        <div className={`${expandOptions ? "max-h-screen ease-in" : "max-h-12 ease-out" } w-10/12 mt-3 mx-auto bg-green-700 align-top rounded-lg lg:hidden overflow-y-hidden transition-maxHeight duration-300 `}>
            <div className="h-16 mx-2 py-2 mb-3 border-b-2 border-green-200">
                <div className={`${props.downloadable ? "cursor-pointer" : ""} inline-block w-1/6 text-center align-top`} onClick={handleDownloadClick}>
                    <svg className={`${props.downloadable ? "text-green-200" : "text-green-900"} w-8 h-8 mx-auto`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                </div>
                <button className="btn h-8 w-4/6 shadow-lg rounded-md bg-green-100 hover:bg-green-200 align-top" onClick={handleRunClick}>
                    Run
                </button>
                <div className="inline-block w-1/6 text-center align-top" onClick={() => setExpandOptions(!expandOptions)}>
                    <svg className={`${expandOptions ? "text-green-200" : "text-green-900"} w-8 h-8 mx-auto`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
            </div>
            <div className="h-full overflow-y-scroll">
                <div className="flex flex-wrap items-end">
                    <div className="mx-5 mb-5 w-40 flex-1">
                        <div className="w-48 h-10 mx-auto rounded-full bg-green-900">
                            <div className="inline-block w-1/2">
                                <div className={`${props.isGpp ? "bg-green-200" : "bg-none text-green-200"} text-center rounded-full h-8 mt-1 ml-1 pt-1`} onClick={() => props.setIsGpp(true)}>
                                    GPP
                            </div>
                            </div>
                            <div className="inline-block w-1/2">
                                <div className={`${!props.isGpp ? "bg-green-200" : "bg-none text-green-200"} text-center rounded-full h-8 mt-1 mr-1 pt-1`} onClick={() => props.setIsGpp(false)}>
                                    Cash
                            </div>
                            </div>
                        </div>
                    </div>

                    <OptionMobileNumericInput label="Number of Lineups" setFunction={props.setNoLineups} val={props.noLineups} hidden={false} />
                    <OptionMobileNumericInput label="Max Overlap" setFunction={props.setMaxOverlap} val={props.maxOverlap} hidden={false} />
                    <OptionMobileNumericInput label="QB Repeat" setFunction={props.setQbRepeat} val={props.qbRepeat} hidden={false} />
                    <OptionMobileNumericInput label="Player Repeat" setFunction={props.setPlayerRepeat} val={props.playerRepeat} hidden={false} />
                    <OptionMobileNumericInput label="DST Repeat" setFunction={props.setDstRepeat} val={props.dstRepeat} hidden={false} />
                    <OptionMobileNumericInput label="Max TE" setFunction={props.setMaxTe} val={props.maxTe} hidden={false} />

                    <OptionMobileNumericInput label="Max Ownership" setFunction={props.setMaxOwnership} val={props.maxOwnership} hidden={!props.isGpp} />
                    <OptionMobileNumericInput label="Popular Threshold" setFunction={props.setPopularThreshold} val={props.popularThreshold} hidden={!props.isGpp} />
                    <OptionMobileNumericInput label="Num Popular" setFunction={props.setNumPopular} val={props.numPopular} hidden={!props.isGpp} />
                    <OptionMobileNumericInput label="Stack Min" setFunction={props.setStackMin} val={props.stackMin} hidden={!props.isGpp} />

                    <div className={`${props.isGpp ? "block" : "hidden"} mx-5 mb-5 w-40 flex-1`} >
                        <div className="w-40">
                            <label className="block pr-4 uppercase tracking-wide text-green-200 text-xs font-bold mb-2" >
                                Bring Back
                            </label>
                        </div>
                        <div className="w-32">
                            <input className="form-checkbox mx-auto"
                                type="checkbox"
                                defaultChecked={props.bringBack}
                                onChange={(e) => props.setBringBack(e.target.value)} />
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}