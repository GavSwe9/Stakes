import React from 'react'
import { OptionsDesktop } from './OptionsDesktop'
import { OptionsMobile } from './OptionsMobile'

export function Options(props) {

    return (
        <React.Fragment>
            <OptionsMobile setNoLineups={props.setNoLineups} 
                isGpp={props.isGpp} 
                setIsGpp={props.setIsGpp} 
                runOptimizer={props.runOptimizer}
                setMaxOverlap={props.setMaxOverlap}
                setTeamsToRemove = {props.setTeamsToRemove}
                setQbRepeat = {props.setQbRepeat}
                setPlayerRepeat = {props.setPlayerRepeat}
                setDstRepeat = {props.setDstRepeat}
                setMaxTe = {props.setMaxTe}

                //GPP Inputs
                setMaxOwnership = {props.setMaxOwnership}
                setPopularThreshold = {props.setPopularThreshold}
                setnumPopular = {props.setnumPopular}
                setStackMin = {props.setStackMin}
                bringBack = {props.bringBack}
                setBringBack =  {props.setBringBack} />

            <OptionsDesktop setNoLineups={props.setNoLineups} 
                isGpp={props.isGpp} 
                setIsGpp={props.setIsGpp} 
                runOptimizer={props.runOptimizer}
                setMaxOverlap={props.setMaxOverlap}
                setTeamsToRemove = {props.setTeamsToRemove}
                setQbRepeat = {props.setQbRepeat}
                setPlayerRepeat = {props.setPlayerRepeat}
                setDstRepeat = {props.setDstRepeat}
                setMaxTe = {props.setMaxTe}

                //GPP Inputs
                setMaxOwnership = {props.setMaxOwnership}
                setPopularThreshold = {props.setPopularThreshold}
                setnumPopular = {props.setnumPopular}
                setStackMin = {props.setStackMin}
                bringBack = {props.bringBack}
                setBringBack =  {props.setBringBack}/>
                
        </React.Fragment>



    )
}