import React from 'react';


class Button extends React.Component {
    shouldComponentUpdate(nextProps){
        const {change : nextChange, locale : nextLocale} = nextProps;
        const {change : currentChange, locale: currentLocale} = this.props;
        if ( nextChange === currentChange && nextLocale === currentLocale ) {
            return false ;
        }
        else return true ;
    }
    render() {
        console.log("Button render was called")
        const {change,locale} = this.props;
        return (
            <button onClick = {()=>change(locale)}>{
                locale === 'en-us' ? 'Change Language' : 'ভাষা পরিবর্তন করুন'
            }</button>
        );
    }
}

export default Button