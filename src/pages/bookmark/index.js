import React from 'react'
import Desktop from './desktop'
import Mobile from './mobile'

const Bookmark = ({ nomorSurah, setNomorSurah }) => {
    return (
        <>
            <Desktop />
            <Mobile nomorSurah={nomorSurah} setNomorSurah={setNomorSurah} />
        </>
    )
}

export default Bookmark