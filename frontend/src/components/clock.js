import React from 'react';
import Button from './button'


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date : new Date() , locale : 'en-us'}
    }
    componentDidMount() {
        this.clocktimer = setInterval(()=> {
            this.setState({date : new Date()}); 
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.clocktimer)
    }
    handlePress = (locale) => {
        console.log(this);
        if(locale === 'bn-bd')this.setState({
            locale : 'en-us'
        })
        else this.setState({
            locale: 'bn-bd'
        })
    }

    render() {
        console.log("Clock render was called")
        const {date,locale} = this.state ;
        return (
            <div>
                <h1>{date.toLocaleTimeString(locale)}</h1>
                <Button  change = {this.handlePress} locale = {locale}  />
            </div>
        );
    }
}

export default Clock;
