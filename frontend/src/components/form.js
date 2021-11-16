import React, { useState }  from 'react';

export default function Form(){
   
    const [title,setTitle] = useState('React')
    const[text,setText] = useState('Life is Awesome')
    const[gender,setGender] = useState('Male');
    const[judgement,setJudgement] = useState(true);

    function submitHandelar() {
        console.log(title,text,gender,judgement);
    }

    return (
        <div>
            <form onSubmit = {() => submitHandelar()}>
                <input tyoe = "text" placeholder = "Enter Anything" value = {title} onChange={(e) => setTitle(e.target.value)}></input>
                <br/><br/>
                <textarea name = "text" value = {text} onChange = {(e)=>setText(e.target.value)} placeholder = "Enter Anything"></textarea>\
                <br/><br/>
                <select value = {gender} onChange = {(e) => setGender(e.target.value)}>
                    <option value = "Male"> Male</option>
                    <option value = "Female"> Female</option>
                </select>
                <br/><br/>
                <input type = "checkbox" checked = {judgement} onChange = {(e) => setJudgement(e.target.checked)} ></input>
                <br/><br/>
                <input type = "submit" value = "submit"></input>
            </form>
        </div>
    )
}