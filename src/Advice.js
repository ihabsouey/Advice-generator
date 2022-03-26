import React, { useState, useEffect } from 'react'
import divider from './images/pattern-divider-desktop.svg'
import dice from './images/icon-dice.svg'
import axios from "axios";


const Advice = () => {
    const [advice, setAdvice] = useState([]);

    const getAdvice = () => {
        axios.get('https://api.adviceslip.com/advice ')
            .then(response => {
                setAdvice(response.data.slip)
            });
    }

    useEffect(() => getAdvice(), [])

    return (
        <div className='advice'>
            <div className='advice-header'>
                Advice # {advice.id}
            </div>
            <div className='advice-content'>
            <q>
                
                 {advice.advice}
                </q>
            </div>
            <div className='advice-footer'>
                <img src={divider} alt='dividr' />
            </div>
            <div className='advice-change' onClick={() =>  getAdvice()}>
                <img  src={dice} alt='dice' />
            </div>
        </div>
    )
}

export default Advice