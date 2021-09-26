import React from 'react';
import './Hader.css'

const Hader = () => {
    return (
        <div className='hader-container'>
            <h2>Group of <span className='budget'>FakiBaj</span>  Polapain</h2>
            <h4>All are <span className='budget'>FakiBaj</span> PolaPain That's why I make this React Website to take Fine.</h4>
            <h2>Totul Budget: <span className='budget'>5000 BDT</span> </h2>
        </div>
    );
};

export default Hader;