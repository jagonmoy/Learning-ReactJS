import React, { useState } from 'react';

export default function TemparatureInput({temparature,tempChangeFunction,scale}){
   
    return (
        <div>
            <legend> Enter Temparature in {scale} </legend>
            <input type = "text" value = {temparature} onChange = {(e)=>tempChangeFunction(e,scale)}></input>
        </div>
    )
}