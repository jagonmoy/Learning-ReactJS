export default function ButtonLayer({
    theme,changeTheme
}){
    return(
        <div>
            <button  
            onClick = {()=>changeTheme(theme)}
            >Press the Button"
            </button>
        </div>
    )
}