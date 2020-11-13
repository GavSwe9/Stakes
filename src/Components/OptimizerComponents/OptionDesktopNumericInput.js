import React from 'react'

export function OptionDesktopNumericInput(props) {
    return (
        <div className={`${props.hidden ? "hidden" : "block"} mx-5 mb-5`}>
            <div className="w-8/12 inline-block align-top">
                <label className="block text-right pr-4 uppercase tracking-wide text-green-200 text-xs font-bold mb-2" >
                    {props.label}
                </label>
            </div>
            <div className="w-4/12 inline-block align-top">
                <input className="appearance-none h-6 block w-full text-center bg-green-100 text-green-700 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    // placeholder= {props.placeholder}
                    value = {props.val}
                    onChange={(e) => props.setFunction(e.target.value)} />
            </div>
        </div>
    )
}