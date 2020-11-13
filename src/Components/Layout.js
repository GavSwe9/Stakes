import React from 'react'

export function Layout(props) {
    return (
        <div className="w-12/12 mx-auto h-full flex flex-col">
            {props.children}
        </div>
    )
}