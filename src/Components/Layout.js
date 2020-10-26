import React from 'react'

export function Layout(props) {
    return (
        <div className="w-12/12 mx-auto">
            {props.children}
        </div>
    )
}