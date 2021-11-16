import React, { useEffect,useState } from 'react';
import Button from './button'


export default function Clock() {

    const [date, setDate] = useState(new Date());
    const [locale, setLocale] = useState('en-us');

    useEffect(() => {
        dateChange()
    },[date])

    const handlePress = (locale) => {
        if (locale === 'bn-bd') setLocale('en-us')
        else setLocale('bn-bd')
    }

    const dateChange = () => setInterval(() => {
        setDate(new Date());
    }, 1000)

    return (
        <div>
            <h1>{date.toLocaleTimeString(locale)}</h1>
            <Button change={handlePress} locale={locale} />
        </div>
    );
}

