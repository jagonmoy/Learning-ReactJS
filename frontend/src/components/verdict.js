import React, { useState } from 'react';

export default function Verdict({temparature}){
   
    return (
        <div>
            {(temparature >= 100) ? "Water is boiled" : "Water is not boiled" }
        </div>
    )
}