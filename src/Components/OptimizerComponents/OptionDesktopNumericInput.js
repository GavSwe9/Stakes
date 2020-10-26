import React from 'react'

export function OptionDesktopNumericInput(props) {
    return (
        <div className="mx-5 mb-5 flex">
            <div className="w-8/12">
                <label className="block text-right pr-4 uppercase tracking-wide text-blue-200 text-sm font-bold mb-2" >
                    {props.label}
                </label>
            </div>
            <div className="w-4/12">
                <input className="appearance-none h-6 block w-full text-center bg-blue-100 text-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder= {props.placeholder}
                    onChange={(e) => props.setFunction(e.target.value)} />
            </div>
        </div>
    )
}