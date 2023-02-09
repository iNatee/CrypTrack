import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Portfolio() {
    const [formData, setFormData] = useState({
        name: '',
        symbol: '',
        priceVsGBP: '',
        amountOwned: '',
        amountOwnedInGBP: '',
    })

    const { name, symbol, priceVsGBP, amountOwned, amountOwnedInGBP } = formData
    
    const onChange = () => {}

    return (
	<div className="pg-content">
        <section className='heading'>
            <h1 className='cust-header'>
                Enter your crypto info here
            </h1>
            <form>
                <div className='form-group'>
                    <input id='inp'
                        type="text"
                        className='form-control'
                        id='name'
                        value={name}
                        placeholder='Enter Cypto Name'
                        onChange={onChange} 
                    />
                    <br/>
                    <input 
                        type="text"
                        className='form-control'
                        id='name'
                        value={amountOwned}
                        placeholder='Enter Amount Owned'
                        onChange={onChange} 
                    />

                <button type="submit" className='btnSubmit'>
                    Submit
                </button>
                </div>
                
            </form>
        </section>
	    </div>
    )
}

export default Portfolio
