import React, { useEffect, useState } from 'react';
import TemparatureInput from './temparatureInput';
import Verdict from './verdict';

export default function Calculator(){

    const [celsius,setTCelsius] = useState('');
    const [fahrenheit,setFarenhite] = useState('');
    
    const temparatureChange = (e,scale) => {
        setTCelsius(( scale === 'fahrenheit') ? ((parseFloat(e.target.value) - 32) * 5/9).toString() : e.target.value)
        setFarenhite(( scale === 'celsius')? ((parseFloat(e.target.value)*9/5)+32).toString() : e.target.value)
    }
    

    return (
        <div>
           <fieldset>
               <legend>Enter The Temparature </legend>
               <TemparatureInput
                    temparature = {celsius}
                    tempChangeFunction = {temparatureChange} 
                    scale = {'celsius'}
               /> 
               <br/><br/>
               <TemparatureInput
                    temparature = {fahrenheit}
                    tempChangeFunction = {temparatureChange} 
                    scale = {'fahrenheit'}
               /> 
               <br/><br/>
                {  
                   <Verdict temparature ={parseFloat(celsius)}/>
                }
           </fieldset>
        </div>
    )
}