import React from 'react'

export function OptionMobileNumericInput(props) {
    return (
        <div className="mx-5 mb-2 flex-1">
            <div className="w-48">
                <label className="block uppercase tracking-wide text-blue-200 text-sm font-bold mb-2" >
                    {props.label}
                </label>
            </div>
            <div className="w-full">
                <input className="appearance-none h-6 block w-full text-center bg-blue-100 text-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder= {props.placeholder}
                    onChange={(e) => props.setFunction(e.target.value)} />
            </div>
        </div>
    )
}