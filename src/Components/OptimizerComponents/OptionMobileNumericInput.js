import React from 'react'

export function OptionMobileNumericInput(props) {
    return (
        <div className={`${props.hidden ? "hidden" : "block"} mx-5 mb-2 flex-1`}>
            <div className="w-48">
                <label className="block uppercase tracking-wide text-green-200 text-xs font-bold mb-2" >
                    {props.label}
                </label>
            </div>
            <div className="w-full">
                <input className="appearance-none h-6 block w-full text-center bg-green-100 text-green-700 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    // placeholder= {props.placeholder}
                    value = {props.val}
                    onChange={(e) => props.setFunction(e.target.value)} />
            </div>
        </div>
    )
}