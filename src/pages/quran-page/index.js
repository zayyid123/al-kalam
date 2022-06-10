import React from 'react'
import Desktop from './desktop'
import Mobile from './mobile'

const QuranPage = ({ nomorSurah, setNomorSurah }) => {
    return (
        <>
            <Desktop />
            <Mobile nomorSurah={nomorSurah} setNomorSurah={setNomorSurah} />
        </>
    )
}

export default QuranPage