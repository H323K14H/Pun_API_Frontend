import React from 'react'


const Pun = ({ pun, onButtonClick }) => {

    return (
        <>
            <p className='pun'>
                <b>{pun.pun}</b>
            </p>
           
        </>

    )
}

export default Pun;