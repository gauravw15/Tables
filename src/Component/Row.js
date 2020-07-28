import React from 'react';

const Row = ({date,month, year, desc, amount}) => {
    return(
        <div className='tablerow'>
            <div className='date'>
                {date}/{month}/{year}
            </div>
            <div className='desc'>
                {desc}
            </div>
            <div className='amount'>
                ${amount}
            </div>
        </div>
    )
}

export default Row;