import React from 'react'

export const SearchComponent = ({searchMessage}) => {
    return (
        <>
            <div className="bg-success rounded-1 h-25">
                <h5 className="text-center">{searchMessage}</h5>
            </div>
        </>
    )
}
