import React from 'react'
import { OptionsDesktop } from './OptionsDesktop'
import { OptionsMobile } from './OptionsMobile'

export function Options(props) {

    return (
        <React.Fragment>
            <OptionsMobile
                downloadable={props.downloadable}
                downloadCsv={props.downloadCsv}
                runOptimizer={props.runOptimizer}
                noLineups={props.noLineups}
                setNoLineups={props.setNoLineups}
                isGpp={props.isGpp}
                setIsGpp={props.setIsGpp}
                maxOverlap={props.maxOverlap}
                setMaxOverlap={props.setMaxOverlap}
                teamsToRemove={props.eamsToRemove}
                setTeamsToRemove={props.setTeamsToRemove}
                qbRepeat={props.qbRepeat}
                setQbRepeat={props.setQbRepeat}
                playerRepeat={props.playerRepeat}
                setPlayerRepeat={props.setPlayerRepeat}
                dstRepeat={props.dstRepeat}
                setDstRepeat={props.setDstRepeat}
                maxTe={props.maxTe}
                setMaxTe={props.setMaxTe}

                //GPP Inputs
                maxOwnership={props.maxOwnership}
                setMaxOwnership={props.setMaxOwnership}
                popularThreshold={props.popularThreshold}
                setPopularThreshold={props.setPopularThreshold}
                numPopular={props.numPopular}
                setNumPopular={props.setNumPopular}
                stackMin={props.stackMin}
                setStackMin={props.setStackMin}
                bringBack={props.bringBack}
                setBringBack={props.setBringBack}
            />

            <OptionsDesktop
                downloadable={props.downloadable}
                downloadCsv={props.downloadCsv}
                runOptimizer={props.runOptimizer}
                noLineups={props.noLineups}
                setNoLineups={props.setNoLineups}
                isGpp={props.isGpp}
                setIsGpp={props.setIsGpp}
                maxOverlap={props.maxOverlap}
                setMaxOverlap={props.setMaxOverlap}
                teamsToRemove={props.eamsToRemove}
                setTeamsToRemove={props.setTeamsToRemove}
                qbRepeat={props.qbRepeat}
                setQbRepeat={props.setQbRepeat}
                playerRepeat={props.playerRepeat}
                setPlayerRepeat={props.setPlayerRepeat}
                dstRepeat={props.dstRepeat}
                setDstRepeat={props.setDstRepeat}
                maxTe={props.maxTe}
                setMaxTe={props.setMaxTe}

                //GPP Inputs
                maxOwnership={props.maxOwnership}
                setMaxOwnership={props.setMaxOwnership}
                popularThreshold={props.popularThreshold}
                setPopularThreshold={props.setPopularThreshold}
                numPopular={props.numPopular}
                setNumPopular={props.setNumPopular}
                stackMin={props.stackMin}
                setStackMin={props.setStackMin}
                bringBack={props.bringBack}
                setBringBack={props.setBringBack}
            />

        </React.Fragment>



    )
}