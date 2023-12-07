import React from 'react'


const Pun = ({ pun, onButtonClick }) => {

    return (
        <>
            <p className='pun'>
                <b>{pun.pun}</b>
            </p>
           <div>
                <button className="main-btn" onClick={onButtonClick}>🙉🙈🙊</button>
           </div>
        </>

    )
}

export default Pun;