import React, { useEffect }  from 'react';
import {Button} from '@material-ui/core'

export default function ButtonFunction(props) {
    const {locale,change} = props;
    
    useEffect(() =>{
          console.log("This was Called")
    },[locale])

    return (
        <Button onClick = {()=>change(locale)} variant = 'contained' color = 'secondary'>{
            locale === 'en-us' ? 'Change Language' : 'ভাষা পরিবর্তন করুন'
        }
        </Button>
    );
}
